#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";

const root = path.resolve(import.meta.dirname, "..");
const appPath = path.join(root, "game", "app.js");
const app = fs.readFileSync(appPath, "utf8");
const reportPath = path.join(root, "docs", "search_route_review.md");
const shouldWriteReport = process.argv.includes("--write");

function extractConstExpression(name, nextName) {
  const startToken = `const ${name} = `;
  const start = app.indexOf(startToken);
  if (start === -1) throw new Error(`Missing const ${name}`);
  const valueStart = start + startToken.length;
  const endToken = `const ${nextName} = `;
  const end = app.indexOf(endToken, valueStart);
  if (end === -1) throw new Error(`Missing end token after const ${name}`);
  const source = app.slice(valueStart, end).trim().replace(/;\s*$/, "");
  return vm.runInNewContext(`(${source})`, { Set });
}

const documents = extractConstExpression("documents", "relationPrompts");
const publicDocumentIds = extractConstExpression("publicDocumentIds", "locationDocumentIds");
const locationDocumentIds = extractConstExpression("locationDocumentIds", "locationLabels");
const locationLabels = extractConstExpression("locationLabels", "updateLogs");
const visitLocations = extractConstExpression("visitLocations", "personGroups");
const documentById = new Map(documents.map((doc) => [doc.id, doc]));

const errors = [];
const checkpoints = [];

function createState() {
  return {
    readDocs: new Set(),
    collected: new Set(),
    visitedLocations: new Set()
  };
}

function hasReadOrCollected(state, ids) {
  return ids.some((id) => state.readDocs.has(id) || state.collected.has(id));
}

function locationForDocument(docId) {
  return Object.entries(locationDocumentIds).find(([, ids]) => ids.includes(docId))?.[0] || null;
}

function chainUnlockState(state, docId) {
  const groups = [
    {
      ids: ["doc_trust_clause", "doc_notary_meeting", "doc_estate_law_note"],
      unlocked: () => state.readDocs.has("doc_official_family") || state.visitedLocations.has("group")
    },
    {
      ids: ["doc_educated_youth", "doc_photo_back", "doc_supply_roster", "doc_supply_advance", "doc_midwife_register"],
      unlocked: () => state.readDocs.has("doc_official_family") || state.visitedLocations.has("archives")
    },
    {
      ids: ["doc_luo_birth", "doc_old_postcard", "doc_remittance_stub", "doc_li_guilan_letter", "doc_classmate_luo"],
      unlocked: () => hasReadOrCollected(state, ["doc_photo_back", "doc_educated_youth", "doc_midwife_register"]) || state.visitedLocations.has("yunqian")
    },
    {
      ids: ["doc_chen_birth", "doc_blog_chenjing", "doc_women_fed", "doc_ktv_license", "doc_talent_window", "doc_ktv_lease_archive", "doc_neighborhood_visit", "doc_ktv_reopen_check"],
      unlocked: () => hasReadOrCollected(state, ["doc_luo_birth", "doc_classmate_luo"]) || state.visitedLocations.has("ktv")
    },
    {
      ids: ["doc_school_forum", "doc_jiadong_school", "doc_teacher_visit", "doc_scholarship_notice", "doc_dna_record", "doc_hospital_blood"],
      unlocked: () => hasReadOrCollected(state, ["doc_chen_birth", "doc_blog_chenjing", "doc_women_fed"]) || state.visitedLocations.has("school") || state.visitedLocations.has("hospital")
    }
  ];
  return groups.find((group) => group.ids.includes(docId)) || null;
}

function isDocumentUnlocked(state, doc) {
  if (state.readDocs.has(doc.id) || state.collected.has(doc.id)) return true;
  if (publicDocumentIds.has(doc.id)) return true;
  const locationId = locationForDocument(doc.id);
  if (locationId && state.visitedLocations.has(locationId)) return true;
  return Boolean(chainUnlockState(state, doc.id)?.unlocked());
}

function matchesQuery(doc, query) {
  const needle = query.trim().toLowerCase();
  const haystack = [doc.title, doc.summary, doc.body, doc.source, String(doc.year), ...doc.keywords]
    .join(" ")
    .toLowerCase();
  return haystack.includes(needle);
}

function search(state, query) {
  const matches = documents.filter((doc) => matchesQuery(doc, query));
  return {
    visible: matches.filter((doc) => isDocumentUnlocked(state, doc)),
    locked: matches.filter((doc) => !isDocumentUnlocked(state, doc))
  };
}

function suggestedLocationIdsForLockedDocs(state, docs) {
  return [...new Set(docs
    .map((doc) => locationForDocument(doc.id))
    .filter((id) => id && !state.visitedLocations.has(id)))];
}

function record(label, detail = {}) {
  checkpoints.push({ label, ...detail });
}

function assert(condition, message) {
  if (!condition) errors.push(message);
}

function assertVisible(state, query, expectedIds, label) {
  const result = search(state, query);
  const visibleIds = new Set(result.visible.map((doc) => doc.id));
  for (const id of expectedIds) {
    assert(visibleIds.has(id), `${label}: searching "${query}" should show ${id}`);
  }
  record(label, {
    query,
    expected: expectedIds,
    visible: result.visible.length,
    locked: result.locked.length,
    visibleIds: result.visible.map((doc) => doc.id),
    lockedIds: result.locked.map((doc) => doc.id)
  });
}

function assertLocked(state, query, expectedIds, label) {
  const result = search(state, query);
  const lockedIds = new Set(result.locked.map((doc) => doc.id));
  for (const id of expectedIds) {
    assert(lockedIds.has(id), `${label}: searching "${query}" should keep ${id} locked until a clue unlocks it`);
  }
  record(label, {
    query,
    expectedLocked: expectedIds,
    visible: result.visible.length,
    locked: result.locked.length,
    visibleIds: result.visible.map((doc) => doc.id),
    lockedIds: result.locked.map((doc) => doc.id)
  });
}

function assertSuggestedLocations(state, query, expectedLocationIds, label) {
  const result = search(state, query);
  const suggestedLocationIds = suggestedLocationIdsForLockedDocs(state, result.locked);
  for (const id of expectedLocationIds) {
    assert(suggestedLocationIds.includes(id), `${label}: locked results for "${query}" should suggest visiting ${locationLabels[id] || id}`);
  }
  record(label, {
    query,
    expectedLocations: expectedLocationIds,
    suggestedLocationIds,
    suggestedLocations: suggestedLocationIds.map((id) => locationLabels[id] || id),
    lockedIds: result.locked.map((doc) => doc.id)
  });
}

function readVisible(state, docId, label) {
  const doc = documentById.get(docId);
  assert(doc, `${label}: missing document ${docId}`);
  if (!doc) return;
  assert(isDocumentUnlocked(state, doc), `${label}: ${docId} must be visible before it is read`);
  state.readDocs.add(docId);
}

const main = createState();
assertVisible(main, "宗世昌", ["doc_official_family"], "开局公开宗家入口");
assertLocked(main, "信托", ["doc_trust_clause"], "开局信托原文未提前暴露");
assertLocked(main, "罗月珍", ["doc_educated_youth", "doc_photo_back"], "开局罗月珍强证据未提前暴露");
assertSuggestedLocations(main, "信托", ["group"], "开局信托锁定提示");
assertSuggestedLocations(main, "罗月珍", ["archives"], "开局罗月珍锁定提示");

readVisible(main, "doc_official_family", "阅读公开家庭资料");
assertVisible(main, "罗月珍", ["doc_educated_youth", "doc_photo_back", "doc_supply_roster"], "公开家庭后进入罗月珍线");

readVisible(main, "doc_photo_back", "阅读照片背注");
assertVisible(main, "罗建宁", ["doc_luo_birth", "doc_classmate_luo"], "照片背注后进入罗建宁线");

readVisible(main, "doc_luo_birth", "阅读罗建宁户籍");
assertVisible(main, "陈静", ["doc_chen_birth", "doc_women_fed"], "罗建宁后进入陈静线");

readVisible(main, "doc_chen_birth", "阅读陈静出生记录");
assertVisible(main, "陈嘉东", ["doc_jiadong_school", "doc_scholarship_notice"], "陈静后进入陈嘉东线");
assertVisible(main, "DNA", ["doc_dna_record", "doc_hospital_blood", "doc_trust_clause"], "后段强证据可搜索");

for (const location of visitLocations) {
  const state = createState();
  state.visitedLocations.add(location.id);
  const result = search(state, location.query);
  const locationDocs = new Set(locationDocumentIds[location.id] || []);
  const visibleLocationDocs = result.visible.filter((doc) => locationDocs.has(doc.id));
  assert(visibleLocationDocs.length > 0, `${locationLabels[location.id] || location.id}: visiting location then searching "${location.query}" should reveal at least one local document`);
  record(`走访入口：${location.title}`, {
    query: location.query,
    visible: result.visible.length,
    localVisible: visibleLocationDocs.length,
    visibleIds: result.visible.map((doc) => doc.id),
    localVisibleIds: visibleLocationDocs.map((doc) => doc.id)
  });
}

function docTitle(id) {
  return documentById.get(id)?.title || id;
}

function formatDocList(ids = []) {
  if (!ids.length) return "无";
  return ids.map((id) => `${docTitle(id)}（${id}）`).join("、");
}

function formatMarkdownReport() {
  const timestamp = new Intl.DateTimeFormat("zh-CN", {
    timeZone: "Asia/Shanghai",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false
  }).format(new Date()).replaceAll("/", "-");
  const mainRows = checkpoints.filter((checkpoint) => !checkpoint.label.startsWith("走访入口："));
  const visitRows = checkpoints.filter((checkpoint) => checkpoint.label.startsWith("走访入口："));

  return `# 搜索路线试玩复盘

更新时间：${timestamp} Asia/Shanghai

该报告由 \`node tools/validate_search_paths.mjs --write\` 生成，用来把渐进解锁后的主线搜索链转成可读台账。它不能替代真人试玩，但可以确认公开入口、锁定提示、阅读解锁和走访兜底没有断链。

## 结论

- 状态：${errors.length ? "失败" : "通过"}
- 主线路线检查点：${mainRows.length}
- 走访入口检查点：${visitRows.length}
- 错误数量：${errors.length}

## 主线搜索链

| 步骤 | 搜索词 | 应出现/应锁定 | 可见资料数 | 锁定资料数 | 备注 |
| --- | --- | --- | ---: | ---: | --- |
${mainRows.map((checkpoint) => {
  const expected = checkpoint.expected
    ? `应出现：${formatDocList(checkpoint.expected)}`
    : checkpoint.expectedLocked
      ? `应锁定：${formatDocList(checkpoint.expectedLocked)}`
      : checkpoint.expectedLocations
        ? `建议走访：${checkpoint.suggestedLocations.join("、") || "无"}`
        : "记录";
  const note = checkpoint.lockedIds?.length
    ? `锁定命中：${formatDocList(checkpoint.lockedIds)}`
    : "无锁定命中";
  return `| ${checkpoint.label} | ${checkpoint.query || ""} | ${expected} | ${checkpoint.visible ?? ""} | ${checkpoint.locked ?? ""} | ${note} |`;
}).join("\n")}

## 走访兜底

| 入口 | 默认搜索词 | 本地资料命中 | 可见资料 |
| --- | --- | ---: | --- |
${visitRows.map((checkpoint) => `| ${checkpoint.label.replace("走访入口：", "")} | ${checkpoint.query} | ${checkpoint.localVisible} | ${formatDocList(checkpoint.localVisibleIds)} |`).join("\n")}

## 剩余风险

- 自动脚本只能确认“能搜到”和“不会提前剧透”，不能判断玩家是否会自然想到这些关键词。
- 若后续新增资料或改写正文，应继续让报告覆盖新增关键词，并安排真人试玩观察停顿点。
${errors.length ? `\n## 错误\n\n${errors.map((error) => `- ${error}`).join("\n")}\n` : ""}`;
}

if (shouldWriteReport && !errors.length) {
  fs.mkdirSync(path.dirname(reportPath), { recursive: true });
  fs.writeFileSync(reportPath, formatMarkdownReport(), "utf8");
}

console.log(JSON.stringify({
  checkpoints,
  errors,
  report: shouldWriteReport && !errors.length ? path.relative(root, reportPath) : null
}, null, 2));
if (errors.length) process.exit(1);
