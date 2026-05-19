import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const templatePath = path.join(root, "docs", "manual_playtest_results_template.md");
const docsDir = path.join(root, "docs");

function fail(message) {
  console.error(`Manual playtest results template validation failed: ${message}`);
  process.exit(1);
}

if (!fs.existsSync(templatePath)) {
  fail("docs/manual_playtest_results_template.md does not exist");
}

const content = fs.readFileSync(templatePath, "utf8");

const requiredPhrases = [
  "真人试玩结果回收模板",
  "更多回查",
  "新问询入口",
  "先看材料",
  "锁定提示",
  "超过 30 秒",
  "玩家原话",
  "2 分钟内",
  "罗建宁线",
  "修改建议",
  "下一步建议",
];

for (const phrase of requiredPhrases) {
  if (!content.includes(phrase)) {
    fail(`missing required phrase: ${phrase}`);
  }
}

const requiredSections = [
  "## 填写要求",
  "## 基础信息",
  "## 核心观察",
  "## 路线记录",
  "## 判定",
  "## 修改建议",
  "## 结论",
];

for (const section of requiredSections) {
  if (!content.includes(section)) {
    fail(`missing required section: ${section}`);
  }
}

const tableRows = content.match(/^\| [^|]+ \|/gm) ?? [];
if (tableRows.length < 26) {
  fail(`expected at least 26 table rows across intake sections, found ${tableRows.length}`);
}

const observationRows = [
  "问询后是否先看走访结果区的入口材料按钮",
  "是否注意到更多回查",
  "是否理解新问询入口",
  "是否理解先看材料",
  "是否理解锁定提示代表走访或前置阅读",
  "是否在家谱证据绑定中误用传闻材料",
];

for (const row of observationRows) {
  if (!content.includes(row)) {
    fail(`missing observation row: ${row}`);
  }
}

const decisionRows = [
  "2 分钟内找到回查入口",
  "能说出先看材料对应哪份资料",
  "独立推进到罗建宁线",
  "理解锁定结果不是搜索失败",
  "家谱证据绑定无明显误会",
];

for (const row of decisionRows) {
  if (!content.includes(row)) {
    fail(`missing decision row: ${row}`);
  }
}

console.log("Manual playtest results template validation passed.");

const resultFiles = fs
  .readdirSync(docsDir)
  .filter((file) => /^manual_playtest_result_\d{8}_.+\.md$/.test(file))
  .sort();

const requiredResultSections = [
  "## 基础信息",
  "## 核心观察",
  "## 路线记录",
  "## 判定",
  "## 修改建议",
  "## 结论",
];

const requiredResultPhrases = [
  "试玩者代号",
  "观察员",
  "停顿超过 30 秒的位置",
  "自发搜索词",
  "是否注意到更多回查",
  "是否理解新问询入口",
  "是否理解先看材料",
  "理解锁定结果不是搜索失败",
  "下一步建议",
];

const emptyValues = new Set([
  "",
  "未记录",
  "未定",
  "P0 / P1 / P2",
  "未记录 / 是 / 否",
  "未记录 / 通过 / 未通过",
]);

function normalizeCell(value) {
  return value.replace(/\s+/g, " ").trim();
}

function tableValue(content, label) {
  const row = content
    .split(/\r?\n/)
    .find((line) => line.startsWith("|") && line.split("|")[1]?.trim() === label);

  if (!row) {
    return "";
  }

  return normalizeCell(row.split("|")[2] ?? "");
}

function bulletValue(content, label) {
  const pattern = new RegExp(`^- ${label}：(.+)$`, "m");
  return normalizeCell(content.match(pattern)?.[1] ?? "");
}

function isRecorded(value) {
  return !emptyValues.has(normalizeCell(value));
}

function requireOneRecorded(content, file, labels, groupName) {
  const recorded = labels.filter((label) => isRecorded(tableValue(content, label)));

  if (recorded.length === 0) {
    fail(`${file} has no recorded values in ${groupName}`);
  }
}

for (const file of resultFiles) {
  const resultPath = path.join(docsDir, file);
  const resultContent = fs.readFileSync(resultPath, "utf8");

  for (const section of requiredResultSections) {
    if (!resultContent.includes(section)) {
      fail(`${file} missing required section: ${section}`);
    }
  }

  for (const phrase of requiredResultPhrases) {
    if (!resultContent.includes(phrase)) {
      fail(`${file} missing required phrase: ${phrase}`);
    }
  }

  const rows = resultContent.match(/^\| [^|]+ \|/gm) ?? [];
  if (rows.length < 24) {
    fail(`${file} expected at least 24 table rows, found ${rows.length}`);
  }

  for (const label of ["试玩者代号", "观察员", "日期", "试玩时长"]) {
    if (!isRecorded(tableValue(resultContent, label))) {
      fail(`${file} must record ${label}`);
    }
  }

  requireOneRecorded(
    resultContent,
    file,
    [
      "问询后是否先看走访结果区的入口材料按钮",
      "是否注意到更多回查",
      "是否理解新问询入口",
      "是否理解先看材料",
      "是否理解锁定提示代表走访或前置阅读",
      "是否在家谱证据绑定中误用传闻材料",
    ],
    "核心观察"
  );

  requireOneRecorded(
    resultContent,
    file,
    [
      "首次卡住位置",
      "停顿超过 30 秒的位置",
      "自发搜索词",
      "点击过的走访地点",
      "点击过的现场问询",
      "打开的入口材料",
      "最远推进位置",
      "最终提交结果",
    ],
    "路线记录"
  );

  requireOneRecorded(
    resultContent,
    file,
    [
      "2 分钟内找到回查入口",
      "能说出先看材料对应哪份资料",
      "独立推进到罗建宁线",
      "理解锁定结果不是搜索失败",
      "家谱证据绑定无明显误会",
    ],
    "判定"
  );

  if (!isRecorded(bulletValue(resultContent, "下一步建议"))) {
    fail(`${file} must record 下一步建议`);
  }
}

if (resultFiles.length > 0) {
  console.log(`Manual playtest result files validation passed: ${resultFiles.length} file(s).`);
} else {
  console.log("No manual playtest result files found yet; template validation only.");
}
