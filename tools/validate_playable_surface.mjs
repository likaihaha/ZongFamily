#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";

const root = process.cwd();
const gameRoot = path.join(root, "game");
const indexPath = path.join(gameRoot, "index.html");
const appPath = path.join(gameRoot, "app.js");
const errors = [];

function fail(message) {
  errors.push(message);
}

function requireFile(filePath) {
  if (!fs.existsSync(filePath)) {
    fail(`Missing file: ${path.relative(root, filePath)}`);
    return "";
  }
  return fs.readFileSync(filePath, "utf8");
}

function assertContains(source, needle, label) {
  if (!source.includes(needle)) fail(`Missing ${label}: ${needle}`);
}

function assertRegex(source, pattern, label) {
  if (!pattern.test(source)) fail(`Missing ${label}: ${pattern}`);
}

function extractConstExpression(appSource, name) {
  const startToken = `const ${name} = `;
  const start = appSource.indexOf(startToken);
  if (start === -1) {
    fail(`Missing const ${name}`);
    return null;
  }

  const valueStart = start + startToken.length;
  let end = -1;
  let depth = 0;
  let quote = "";
  let escaped = false;

  for (let index = valueStart; index < appSource.length; index += 1) {
    const char = appSource[index];
    if (quote) {
      if (escaped) escaped = false;
      else if (char === "\\") escaped = true;
      else if (char === quote) quote = "";
      continue;
    }
    if (char === "\"" || char === "'" || char === "`") {
      quote = char;
      continue;
    }
    if (char === "[" || char === "{" || char === "(") depth += 1;
    else if (char === "]" || char === "}" || char === ")") depth -= 1;
    else if (char === ";" && depth === 0) {
      end = index;
      break;
    }
  }

  if (end === -1) {
    fail(`Missing semicolon after const ${name}`);
    return null;
  }

  try {
    return vm.runInNewContext(`(${appSource.slice(valueStart, end).trim()})`, { Set });
  } catch (error) {
    fail(`Unable to parse const ${name}: ${error.message}`);
    return null;
  }
}

function assertAsset(appSource, assetPath) {
  assertContains(appSource, assetPath, `runtime asset reference ${assetPath}`);
  const diskPath = path.join(gameRoot, assetPath);
  if (!fs.existsSync(diskPath)) {
    fail(`Missing runtime asset file: game/${assetPath}`);
    return;
  }
  const stat = fs.statSync(diskPath);
  if (!stat.isFile() || stat.size <= 0) fail(`Empty runtime asset file: game/${assetPath}`);
}

const indexHtml = requireFile(indexPath);
const appSource = requireFile(appPath);

const requiredViews = ["visit", "search", "tree", "evidence", "notes", "updates", "settings", "report"];
for (const view of requiredViews) {
  assertContains(indexHtml, `data-view="${view}"`, `${view} navigation tab`);
  assertContains(indexHtml, `id="${view}-view"`, `${view} view section`);
}

const requiredElements = [
  "query",
  "search-btn",
  "result-list",
  "document-view",
  "family-map",
  "people-list",
  "relation-list",
  "evidence-list",
  "task-list",
  "notes-input",
  "update-log-list",
  "settings-save",
  "export-save",
  "settings-reset",
  "submit-report",
  "report-result"
];
for (const id of requiredElements) assertContains(indexHtml, `id="${id}"`, `element #${id}`);

for (const voice of ["chen", "anonymous", "deathbed"]) {
  assertContains(indexHtml, `data-voice="${voice}"`, `voice button ${voice}`);
}

const requiredFunctions = [
  "saveState",
  "loadState",
  "exportSave",
  "submitReport",
  "renderResults",
  "renderDocument",
  "renderFamilyMap",
  "renderRelations",
  "renderEvidence",
  "renderNotebookTasks",
  "runGuidedPlaytest",
  "runAutotest"
];
for (const fn of requiredFunctions) assertRegex(appSource, new RegExp(`function\\s+${fn}\\s*\\(`), `function ${fn}`);

assertContains(appSource, 'localStorage.setItem("yunshan-save"', "save write");
assertContains(appSource, 'localStorage.getItem("yunshan-save"', "save read");
assertContains(appSource, 'localStorage.removeItem("yunshan-save"', "save reset");
assertContains(appSource, 'params.get("playtest") === "1"', "guided playtest mode");
assertContains(appSource, 'params.get("autotest") === "1"', "autotest mode");

for (const asset of [
  "assets/audio/sfx/ui-click.wav",
  "assets/audio/sfx/search-start.wav",
  "assets/audio/sfx/paper-open.wav",
  "assets/audio/sfx/evidence-added.wav",
  "assets/audio/sfx/relation-ok.wav",
  "assets/audio/sfx/relation-conflict.wav",
  "assets/audio/bgm/archive-room-bed.wav",
  "assets/audio/voice/chen-jing-blog-edge.mp3",
  "assets/audio/voice/anonymous-call-edge.mp3",
  "assets/audio/voice/zong-deathbed-edge.mp3"
]) {
  assertAsset(appSource, asset);
}

const documents = extractConstExpression(appSource, "documents") || [];
const people = extractConstExpression(appSource, "people") || [];
const relationPrompts = extractConstExpression(appSource, "relationPrompts") || [];
const visitLocations = extractConstExpression(appSource, "visitLocations") || [];

if (documents.length < 50) fail(`Expected at least 50 playable documents, found ${documents.length}`);
if (people.length < 24) fail(`Expected at least 24 people, found ${people.length}`);
if (relationPrompts.length < 6) fail(`Expected at least 6 relation prompts, found ${relationPrompts.length}`);
if (visitLocations.length < 6) fail(`Expected at least 6 visit locations, found ${visitLocations.length}`);

if (errors.length) {
  for (const error of errors) console.error(`[FAIL] ${error}`);
  process.exit(1);
}

console.log(
  JSON.stringify(
    {
      status: "ok",
      views: requiredViews.length,
      elements: requiredElements.length,
      documents: documents.length,
      people: people.length,
      relationPrompts: relationPrompts.length,
      visitLocations: visitLocations.length
    },
    null,
    2
  )
);
