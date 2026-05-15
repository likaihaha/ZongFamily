#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";

const targetArg = process.argv[2] || "game/data/case_bundle.json";
const targetPath = path.resolve(process.cwd(), targetArg);

function fail(message) {
  console.error(`[FAIL] ${message}`);
  process.exitCode = 1;
}

function ok(message) {
  console.log(`[OK] ${message}`);
}

if (!fs.existsSync(targetPath)) {
  fail(`Data file not found: ${targetPath}`);
  process.exit();
}

let data;
try {
  data = JSON.parse(fs.readFileSync(targetPath, "utf8"));
} catch (error) {
  fail(`Invalid JSON: ${error.message}`);
  process.exit();
}

const requiredRootFields = [
  "caseId",
  "title",
  "truthTable",
  "clues",
  "documents",
  "familyMembers"
];

for (const field of requiredRootFields) {
  if (!(field in data)) {
    fail(`Missing root field: ${field}`);
  }
}

if (!Array.isArray(data.truthTable)) {
  fail("truthTable must be an array");
}
if (!Array.isArray(data.clues)) {
  fail("clues must be an array");
}
if (!Array.isArray(data.documents)) {
  fail("documents must be an array");
}
if (!Array.isArray(data.familyMembers)) {
  fail("familyMembers must be an array");
}

function validateIdArray(items, label) {
  if (!Array.isArray(items)) {
    return;
  }
  const idSet = new Set();
  for (const [index, item] of items.entries()) {
    if (!item || typeof item !== "object") {
      fail(`${label}[${index}] must be an object`);
      continue;
    }
    if (typeof item.id !== "string" || !item.id.trim()) {
      fail(`${label}[${index}] missing non-empty string id`);
      continue;
    }
    if (idSet.has(item.id)) {
      fail(`${label} has duplicate id: ${item.id}`);
      continue;
    }
    idSet.add(item.id);
  }
}

validateIdArray(data.truthTable, "truthTable");
validateIdArray(data.clues, "clues");
validateIdArray(data.documents, "documents");
validateIdArray(data.familyMembers, "familyMembers");

for (const [index, clue] of data.clues.entries()) {
  if (!Array.isArray(clue.supportsTruthIds)) {
    fail(`clues[${index}].supportsTruthIds must be an array`);
    continue;
  }
  for (const truthId of clue.supportsTruthIds) {
    if (!data.truthTable.find((item) => item.id === truthId)) {
      fail(`clues[${index}] references missing truth id: ${truthId}`);
    }
  }
}

for (const [index, truth] of data.truthTable.entries()) {
  if (typeof truth.statement !== "string" || !truth.statement.trim()) {
    fail(`truthTable[${index}].statement must be a non-empty string`);
  }
}

if (!process.exitCode) {
  ok(`Validation passed: ${targetPath}`);
}
