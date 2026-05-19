import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const checklistPath = path.join(root, "docs", "manual_playtest_checklist.md");

const requiredPhrases = [
  "更多回查",
  "新问询入口",
  "首次展开",
  "1 项待回查",
  "侧栏阶段提示",
  "先看材料",
  "锁定提示",
  "通过标准",
  "记录模板",
  "2 分钟内",
];

function fail(message) {
  console.error(`Manual playtest checklist validation failed: ${message}`);
  process.exit(1);
}

if (!fs.existsSync(checklistPath)) {
  fail("docs/manual_playtest_checklist.md does not exist");
}

const content = fs.readFileSync(checklistPath, "utf8");

for (const phrase of requiredPhrases) {
  if (!content.includes(phrase)) {
    fail(`missing required phrase: ${phrase}`);
  }
}

const stepMatches = content.match(/^\d+\. /gm) ?? [];
if (stepMatches.length < 7) {
  fail(`expected at least 7 route steps, found ${stepMatches.length}`);
}

const questionMatches = content.match(/^- 玩家/gm) ?? [];
if (questionMatches.length < 6) {
  fail(`expected at least 6 observation questions, found ${questionMatches.length}`);
}

const tableRows = content.match(/^\| [^|]+ \|/gm) ?? [];
if (tableRows.length < 10) {
  fail(`expected the record template table to include at least 10 rows, found ${tableRows.length}`);
}

console.log("Manual playtest checklist validation passed.");
