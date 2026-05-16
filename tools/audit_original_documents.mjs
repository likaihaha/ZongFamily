#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";

const root = path.resolve(import.meta.dirname, "..");
const appPath = path.join(root, "game", "app.js");
const bundlePath = path.join(root, "game", "data", "case_bundle.json");
const reportPath = path.join(root, "docs", "original_material_audit.md");
const app = fs.readFileSync(appPath, "utf8");
const bundle = JSON.parse(fs.readFileSync(bundlePath, "utf8"));

function extractConstExpression(name, nextName) {
  const startToken = `const ${name} = `;
  const start = app.indexOf(startToken);
  if (start === -1) throw new Error(`Missing const ${name}`);
  const valueStart = start + startToken.length;
  const endToken = `const ${nextName} = `;
  const end = app.indexOf(endToken, valueStart);
  if (end === -1) throw new Error(`Missing end token after const ${name}`);
  const source = app.slice(valueStart, end).trim().replace(/;\s*$/, "");
  return vm.runInNewContext(`(${source})`);
}

const appDocuments = extractConstExpression("documents", "relationPrompts");
const appDocumentsById = new Map(appDocuments.map((doc) => [doc.id, doc]));
const bundleDocumentsWithBody = (bundle.documents || [])
  .filter((doc) => typeof doc.body === "string" && doc.body.trim())
  .map((doc) => {
    const appDoc = appDocumentsById.get(doc.id);
    return {
      ...doc,
      title: doc.title || appDoc?.title || doc.id,
      source: doc.source || appDoc?.source || "未标注"
    };
  });

const sourceProfiles = [
  { name: "archive", sources: ["档案", "户籍", "公证", "工商", "教育局", "学校", "医院", "交通档案", "财务档案", "社区"], needsFields: true },
  { name: "legal", sources: ["信托", "DNA", "司法所", "金融文件"], needsClauses: true },
  { name: "web", sources: ["论坛", "博客", "短视频", "八卦周刊", "官网", "网页存档"], needsWebVoice: true },
  { name: "private", sources: ["内部文件", "录音整理", "私人收藏", "访谈"], needsPrimaryVoice: true },
  { name: "press", sources: ["报刊", "县情资料", "公告", "县志", "民俗"], needsArticleVoice: true }
];

const summaryTonePatterns = [
  /这份(?:资料|材料|档案|公告|记录|花名册|备案|截图|清单|登记簿|回执|摘记|便条)/,
  /该(?:档案|材料|记录|帖|截图|回执|清单|登记簿|摘记|便条|备忘|草案|纪要)/,
  /不能(?:直接|单独)?(?:证明|作为|支持|替代|排除)/,
  /只能(?:证明|说明|作为|辅助|用来)/,
  /可(?:说明|作为|解释|用于|搜索)/,
  /适合搜索/,
  /可信度(?:较低|低于|很低)/,
  /应与.+(?:核对|印证|交叉)/,
  /公开资料称/,
  /文章没有提及/,
  /官网措辞/,
  /被.+写成/,
  /调查员/
];

function profileFor(doc) {
  return sourceProfiles.find((profile) => profile.sources.includes(doc.source)) || sourceProfiles.at(-1);
}

function paragraphs(doc) {
  return doc.body.split(/\n{2,}/).map((item) => item.trim()).filter(Boolean);
}

function fieldLineCount(doc) {
  return doc.body.split(/\n/).filter((line) => /[:：]/.test(line.trim())).length;
}

function dialogueLineCount(doc) {
  return doc.body.split(/\n/).filter((line) => /^[\u4e00-\u9fa5A-Za-z0-9_]{1,12}[：:]/.test(line.trim())).length;
}

function metaParagraphs(doc) {
  return paragraphs(doc).filter((paragraph) => summaryTonePatterns.some((pattern) => pattern.test(paragraph)));
}

function checksFor(doc) {
  const profile = profileFor(doc);
  const issues = [];
  const meta = metaParagraphs(doc);
  const paraCount = paragraphs(doc).length;
  const fields = fieldLineCount(doc);
  const dialogues = dialogueLineCount(doc);
  const hasQuote = /[“”]/.test(doc.body);

  if (meta.length) {
    issues.push(`含调查员/结论口吻 ${meta.length} 段`);
  }

  if (profile.needsFields && fields < 2) {
    issues.push("档案类字段不足");
  }
  if (profile.needsClauses && fields < 2 && paraCount < 3) {
    issues.push("法律/鉴定类条款或字段不足");
  }
  if (profile.needsWebVoice && !hasQuote && dialogues < 1 && paraCount < 3) {
    issues.push("网页/论坛缺少楼层、发布或页面痕迹");
  }
  if (profile.needsPrimaryVoice && !hasQuote && dialogues < 2 && fields < 2) {
    issues.push("私藏/内部材料缺少原话、字段或纪要形态");
  }
  if (profile.needsArticleVoice && paraCount < 2) {
    issues.push("报刊/县志类正文过短");
  }

  const status = issues.length ? "需改写" : "基本像原件";
  return { profile: profile.name, status, issues, meta };
}

function auditRows(sourceName, documents) {
  return documents.map((doc) => ({ sourceName, doc, ...checksFor(doc) }));
}

const appRows = auditRows("game/app.js", appDocuments);
const bundleRows = auditRows("game/data/case_bundle.json", bundleDocumentsWithBody);
const rows = [...appRows, ...bundleRows];
const needsRewriteRows = rows.filter((row) => row.status === "需改写");

function countOriginalLike(rowsToCount) {
  return rowsToCount.filter((row) => row.status === "基本像原件").length;
}

const lines = [];
lines.push("# 资料原件感审计");
lines.push("");
lines.push(`更新时间：${new Date().toLocaleString("zh-CN", { timeZone: "Asia/Shanghai", hour12: false })} Asia/Shanghai`);
lines.push("");
lines.push(
  "本报告检查运行时资料与结构化内容包中的正文是否像玩家正在查看的原始材料，而不是调查结论摘要。检查项包括来源类型、字段/条款/楼层结构、原话痕迹，以及是否混入“不能提现、可说明、适合搜索”等调查员判断口吻。"
);
lines.push("");
lines.push("## 总览");
lines.push("");
lines.push(`- 游戏内资料数：${appRows.length}`);
lines.push(`- 内容包有正文资料数：${bundleRows.length}`);
lines.push(`- 游戏内基本像原件：${countOriginalLike(appRows)}/${appRows.length}`);
lines.push(`- 内容包基本像原件：${countOriginalLike(bundleRows)}/${bundleRows.length}`);
lines.push(`- 需改写条目：${needsRewriteRows.length}`);
lines.push("");
lines.push("## 逐条结果");
lines.push("");
lines.push("| 范围 | ID | 标题 | 来源 | 判定 | 问题 |");
lines.push("| --- | --- | --- | --- | --- | --- |");
for (const row of rows) {
  lines.push(
    `| ${row.sourceName} | \`${row.doc.id}\` | ${row.doc.title.replaceAll("|", "/")} | ${row.doc.source} | ${row.status} | ${row.issues.join("；") || "无明显问题"} |`
  );
}
lines.push("");
lines.push("## 优先改写清单");
lines.push("");
if (needsRewriteRows.length) {
  for (const row of needsRewriteRows) {
    lines.push(`- ${row.sourceName} \`${row.doc.id}\`：${row.issues.join("；")}`);
  }
} else {
  lines.push("- 当前无需改写条目。");
}

fs.mkdirSync(path.dirname(reportPath), { recursive: true });
fs.writeFileSync(reportPath, `${lines.join("\n")}\n`, "utf8");

const result = {
  status: needsRewriteRows.length ? "needs-rewrite" : "ok",
  appDocuments: appRows.length,
  bundleDocumentsWithBody: bundleRows.length,
  appOriginalLike: countOriginalLike(appRows),
  bundleOriginalLike: countOriginalLike(bundleRows),
  needsRewrite: needsRewriteRows.length,
  report: path.relative(root, reportPath),
  needsRewriteIds: needsRewriteRows.map((row) => `${row.sourceName}:${row.doc.id}`)
};

console.log(JSON.stringify(result, null, 2));

if (needsRewriteRows.length) {
  process.exit(1);
}
