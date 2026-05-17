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
  "visitInterviews",
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
if ("relationPrompts" in data && !Array.isArray(data.relationPrompts)) {
  fail("relationPrompts must be an array when present");
}
if (!data.visitInterviews || typeof data.visitInterviews !== "object" || Array.isArray(data.visitInterviews)) {
  fail("visitInterviews must be an object keyed by location id");
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
validateIdArray(data.relationPrompts || [], "relationPrompts");

const truthIds = new Set((data.truthTable || []).map((item) => item.id));
const familyMemberIds = new Set((data.familyMembers || []).map((item) => item.id));
const documentIds = new Set((data.documents || []).map((item) => item.id));
const supportingDocumentIdsByTruthId = new Map();
const visitInterviewIds = new Set();

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
  if (!Array.isArray(clue.documentIds) || clue.documentIds.length === 0) {
    fail(`clues[${index}].documentIds must be a non-empty array`);
  } else {
    const clueDocumentIds = new Set();
    for (const docId of clue.documentIds) {
      if (typeof docId !== "string" || !docId.trim()) {
        fail(`clues[${index}].documentIds contains a non-string id`);
      } else if (!documentIds.has(docId)) {
        fail(`clues[${index}] references missing document id: ${docId}`);
      } else if (clueDocumentIds.has(docId)) {
        fail(`clues[${index}] repeats document id: ${docId}`);
      }
      clueDocumentIds.add(docId);
    }
  }
  for (const truthId of clue.supportsTruthIds) {
    if (!truthIds.has(truthId)) {
      fail(`clues[${index}] references missing truth id: ${truthId}`);
      continue;
    }
    if (!supportingDocumentIdsByTruthId.has(truthId)) {
      supportingDocumentIdsByTruthId.set(truthId, new Set());
    }
    for (const docId of clue.documentIds || []) {
      supportingDocumentIdsByTruthId.get(truthId).add(docId);
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
  if (typeof doc.year !== "number") {
    fail(`documents[${index}].year must be a number`);
  }
  if (typeof doc.source !== "string" || !doc.source.trim()) {
    fail(`documents[${index}].source must be a non-empty string`);
  }
  if (typeof doc.trust !== "number" || doc.trust < 1 || doc.trust > 5) {
    fail(`documents[${index}].trust must be a number from 1 to 5`);
  }
  if (!Array.isArray(doc.keywords) || doc.keywords.length === 0) {
    fail(`documents[${index}].keywords must be a non-empty array`);
  }
  if (typeof doc.summary !== "string" || !doc.summary.trim()) {
    fail(`documents[${index}].summary must be a non-empty string`);
  }
  if (typeof doc.category !== "string" || !doc.category.trim()) {
    fail(`documents[${index}].category must be a non-empty string`);
  }
  if (typeof doc.body !== "string" || doc.body.trim().length < 10) {
    fail(`documents[${index}].body must be at least 10 characters`);
  }
}

for (const [index, person] of data.familyMembers.entries()) {
  if (typeof person.name !== "string" || !person.name.trim()) {
    fail(`familyMembers[${index}].name must be a non-empty string`);
  }
  if (!Array.isArray(person.aliases)) {
    fail(`familyMembers[${index}].aliases must be an array`);
  }
  if (person.birth !== undefined && person.birth !== null && typeof person.birth !== "number") {
    fail(`familyMembers[${index}].birth must be a number or null`);
  }
  if (person.death !== undefined && person.death !== null && typeof person.death !== "number") {
    fail(`familyMembers[${index}].death must be a number or null`);
  }
  if (typeof person.role !== "string" || !person.role.trim()) {
    fail(`familyMembers[${index}].role must be a non-empty string`);
  }
  if (typeof person.note !== "string" || !person.note.trim()) {
    fail(`familyMembers[${index}].note must be a non-empty string`);
  }
}

for (const [index, relation] of (data.relationPrompts || []).entries()) {
  if (typeof relation.title !== "string" || !relation.title.trim()) {
    fail(`relationPrompts[${index}].title must be a non-empty string`);
  }
  if (typeof relation.prompt !== "string" || !relation.prompt.trim()) {
    fail(`relationPrompts[${index}].prompt must be a non-empty string`);
  }
  if (!Array.isArray(relation.slots) || relation.slots.length === 0) {
    fail(`relationPrompts[${index}].slots must be a non-empty array`);
  }
  if (!Array.isArray(relation.correct) || relation.correct.length === 0) {
    fail(`relationPrompts[${index}].correct must be a non-empty array`);
  }
  if (!Array.isArray(relation.requiredEvidence) || relation.requiredEvidence.length === 0) {
    fail(`relationPrompts[${index}].requiredEvidence must be a non-empty array`);
  }
  for (const value of relation.correct || []) {
    if (!familyMemberIds.has(value) && !documentIds.has(value)) {
      fail(`relationPrompts[${index}] references unknown correct value: ${value}`);
    }
  }
  for (const docId of relation.requiredEvidence || []) {
    if (!documentIds.has(docId)) {
      fail(`relationPrompts[${index}] references missing evidence document: ${docId}`);
    }
  }
}

for (const [locationId, questions] of Object.entries(data.visitInterviews || {})) {
  if (typeof locationId !== "string" || !locationId.trim()) {
    fail("visitInterviews contains an empty location id");
  }
  if (!Array.isArray(questions) || questions.length < 2) {
    fail(`visitInterviews.${locationId} must contain at least two questions`);
    continue;
  }
  const locationQuestionIds = new Set();
  for (const [index, question] of questions.entries()) {
    if (!question || typeof question !== "object") {
      fail(`visitInterviews.${locationId}[${index}] must be an object`);
      continue;
    }
    for (const field of ["id", "prompt", "person", "answer", "query", "firstDoc"]) {
      if (typeof question[field] !== "string" || !question[field].trim()) {
        fail(`visitInterviews.${locationId}[${index}].${field} must be a non-empty string`);
      }
    }
    if (typeof question.firstDoc === "string" && question.firstDoc.trim() && !documentIds.has(question.firstDoc)) {
      fail(`visitInterviews.${locationId}[${index}] references missing firstDoc: ${question.firstDoc}`);
    }
    if (typeof question.id === "string") {
      const globalId = `${locationId}:${question.id}`;
      if (locationQuestionIds.has(question.id)) {
        fail(`visitInterviews.${locationId} has duplicate question id: ${question.id}`);
      }
      if (visitInterviewIds.has(globalId)) {
        fail(`visitInterviews has duplicate global question id: ${globalId}`);
      }
      locationQuestionIds.add(question.id);
      visitInterviewIds.add(globalId);
    }
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
  const supportingDocumentCount = supportingDocumentIdsByTruthId.get(truthId)?.size || 0;
  if (supportingDocumentCount < 2) {
    fail(`Required truth needs at least two source documents: ${truthId}`);
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
