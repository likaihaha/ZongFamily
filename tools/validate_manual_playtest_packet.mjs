import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const packetPath = path.join(root, "docs", "manual_playtest_packet.html");

function fail(message) {
  console.error(`Manual playtest packet validation failed: ${message}`);
  process.exit(1);
}

if (!fs.existsSync(packetPath)) {
  fail("docs/manual_playtest_packet.html does not exist");
}

const content = fs.readFileSync(packetPath, "utf8");
const requiredPhrases = [
  "真人试玩执行包",
  "更多回查",
  "新问询入口",
  "首次展开",
  "1 项待回查",
  "侧栏阶段提示",
  "先看材料",
  "锁定提示",
  "2 分钟内",
  "生成回收 Markdown",
  "manual_playtest_result_YYYYMMDD_observer.md",
  "结论",
];

for (const phrase of requiredPhrases) {
  if (!content.includes(phrase)) {
    fail(`missing required phrase: ${phrase}`);
  }
}

const routeSteps = content.match(/<li>[\s\S]*?<\/li>/g) ?? [];
if (routeSteps.length < 18) {
  fail(`expected at least 18 total list items across route, checks, criteria and decisions, found ${routeSteps.length}`);
}

const requiredMarkers = [
  'data-manual-playtest-packet="true"',
  "data-route-steps",
  "data-observation-checks",
  "data-record-template",
  "data-pass-criteria",
  "data-decision-options",
  "data-generated-result",
  "data-meta-field",
  "data-record-field",
  "data-criterion-field",
  'id="generate-markdown"',
  'id="copy-markdown"',
];

for (const marker of requiredMarkers) {
  if (!content.includes(marker)) {
    fail(`missing required marker: ${marker}`);
  }
}

const tableRows = content.match(/<tr>/g) ?? [];
if (tableRows.length < 10) {
  fail(`expected at least 10 record rows, found ${tableRows.length}`);
}

const checkboxes = content.match(/type="checkbox"/g) ?? [];
if (checkboxes.length < 3) {
  fail(`expected at least 3 decision checkboxes, found ${checkboxes.length}`);
}

const metaFields = content.match(/data-meta-field=/g) ?? [];
if (metaFields.length < 4) {
  fail(`expected at least 4 editable meta fields, found ${metaFields.length}`);
}

const recordFields = content.match(/data-record-field=/g) ?? [];
if (recordFields.length < 16) {
  fail(`expected at least 16 editable record fields, found ${recordFields.length}`);
}

const criterionFields = content.match(/data-criterion-field=/g) ?? [];
if (criterionFields.length < 5) {
  fail(`expected at least 5 pass/fail criterion fields, found ${criterionFields.length}`);
}

const scriptRequirements = [
  "generateMarkdown",
  "navigator.clipboard.writeText",
  "criterion(",
  "真人试玩结果回收",
  "## 核心观察",
  "## 路线记录",
  "## 判定",
];

for (const requirement of scriptRequirements) {
  if (!content.includes(requirement)) {
    fail(`missing result generator requirement: ${requirement}`);
  }
}

console.log("Manual playtest packet validation passed.");
