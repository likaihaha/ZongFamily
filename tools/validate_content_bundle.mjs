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
  "familyMembers",
  "submission"
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

const truthIds = new Set((data.truthTable || []).map((item) => item.id));
const familyMemberIds = new Set((data.familyMembers || []).map((item) => item.id));

for (const [index, clue] of data.clues.entries()) {
  if (typeof clue.name !== "string" || !clue.name.trim()) {
    fail(`clues[${index}].name must be a non-empty string`);
  }
  if (typeof clue.type !== "string" || !clue.type.trim()) {
    fail(`clues[${index}].type must be a non-empty string`);
  }
  if (!Array.isArray(clue.supportsTruthIds)) {
    fail(`clues[${index}].supportsTruthIds must be an array`);
    continue;
  }
  if (clue.supportsTruthIds.length === 0) {
    fail(`clues[${index}].supportsTruthIds must not be empty`);
  }
  for (const truthId of clue.supportsTruthIds) {
    if (!truthIds.has(truthId)) {
      fail(`clues[${index}] references missing truth id: ${truthId}`);
    }
  }
}

for (const [index, truth] of data.truthTable.entries()) {
  if (typeof truth.statement !== "string" || !truth.statement.trim()) {
    fail(`truthTable[${index}].statement must be a non-empty string`);
  }
}

for (const [index, doc] of data.documents.entries()) {
  if (typeof doc.title !== "string" || !doc.title.trim()) {
    fail(`documents[${index}].title must be a non-empty string`);
  }
  if (typeof doc.category !== "string" || !doc.category.trim()) {
    fail(`documents[${index}].category must be a non-empty string`);
  }
  if (typeof doc.body !== "string" || doc.body.trim().length < 10) {
    fail(`documents[${index}].body must be at least 10 characters`);
  }
}

const requiredTruthIds = (data.truthTable || [])
  .filter((truth) => truth.required === true)
  .map((truth) => truth.id);
for (const truthId of requiredTruthIds) {
  const covered = data.clues.some((clue) => clue.supportsTruthIds?.includes(truthId));
  if (!covered) {
    fail(`Required truth is not supported by any clue: ${truthId}`);
  }
}

if (!data.submission || typeof data.submission !== "object") {
  fail("submission must be an object");
} else {
  const { firstHiddenLineageAnswer, qualifiedHeir2020Answer } = data.submission;
  if (typeof firstHiddenLineageAnswer !== "string" || !firstHiddenLineageAnswer.trim()) {
    fail("submission.firstHiddenLineageAnswer must be a non-empty string");
  } else if (!familyMemberIds.has(firstHiddenLineageAnswer)) {
    fail(`submission.firstHiddenLineageAnswer is not a known family member id: ${firstHiddenLineageAnswer}`);
  }

  if (typeof qualifiedHeir2020Answer !== "string" || !qualifiedHeir2020Answer.trim()) {
    fail("submission.qualifiedHeir2020Answer must be a non-empty string");
  } else if (!familyMemberIds.has(qualifiedHeir2020Answer)) {
    fail(`submission.qualifiedHeir2020Answer is not a known family member id: ${qualifiedHeir2020Answer}`);
  }
}

if (!process.exitCode) {
  ok(`Validation passed: ${targetPath}`);
}
