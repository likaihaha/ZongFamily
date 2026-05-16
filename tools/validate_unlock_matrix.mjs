#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";

const root = process.cwd();
const appPath = path.resolve(root, "game/app.js");
const readmePath = path.resolve(root, "README.md");
const matrixDocPath = path.resolve(root, "docs/unlock_self_check.md");
const errors = [];

function fail(message) {
  errors.push(message);
}

function extractConstExpression(appSource, name, nextName) {
  const startToken = `const ${name} = `;
  const start = appSource.indexOf(startToken);
  if (start === -1) throw new Error(`Missing const ${name}`);
  const valueStart = start + startToken.length;
  const endToken = `const ${nextName} = `;
  const end = appSource.indexOf(endToken, valueStart);
  if (end === -1) throw new Error(`Missing end token after const ${name}`);
  const source = appSource.slice(valueStart, end).trim().replace(/;\s*$/, "");
  return vm.runInNewContext(`(${source})`, { Set });
}

function extractFunctionBody(appSource, name, nextFunctionName) {
  const startToken = `function ${name}`;
  const start = appSource.indexOf(startToken);
  if (start === -1) throw new Error(`Missing function ${name}`);
  const endToken = `function ${nextFunctionName}`;
  const end = appSource.indexOf(endToken, start + startToken.length);
  if (end === -1) throw new Error(`Missing function after ${name}`);
  return appSource.slice(start, end);
}

function assertContains(source, needle, message) {
  if (!source.includes(needle)) fail(message);
}

if (!fs.existsSync(appPath)) fail(`Missing app file: ${appPath}`);
if (!fs.existsSync(readmePath)) fail(`Missing README: ${readmePath}`);
if (!fs.existsSync(matrixDocPath)) fail(`Missing unlock self-check doc: ${matrixDocPath}`);

let app = "";
let matrixDoc = "";
let documents = [];
let people = [];
let publicDocumentIds = new Set();
let locationDocumentIds = {};
let locationLabels = {};
let visitLocations = [];
let personGroups = [];
let chainFunction = "";
let discoveryFunction = "";

if (!errors.length) {
  try {
    app = fs.readFileSync(appPath, "utf8");
    matrixDoc = fs.readFileSync(matrixDocPath, "utf8");
    people = extractConstExpression(app, "people", "documents");
    documents = extractConstExpression(app, "documents", "relationPrompts");
    publicDocumentIds = extractConstExpression(app, "publicDocumentIds", "locationDocumentIds");
    locationDocumentIds = extractConstExpression(app, "locationDocumentIds", "locationLabels");
    locationLabels = extractConstExpression(app, "locationLabels", "updateLogs");
    visitLocations = extractConstExpression(app, "visitLocations", "personGroups");
    personGroups = extractConstExpression(app, "personGroups", "personFilterIds");
    chainFunction = extractFunctionBody(app, "chainUnlockState", "documentUnlockState");
    discoveryFunction = extractFunctionBody(app, "isPersonDiscovered", "visiblePersonIds");
  } catch (error) {
    fail(error.message);
  }
}

const docIds = new Set(documents.map((doc) => doc.id));
const peopleIds = new Set(people.map((person) => person.id));
const locationIds = new Set(visitLocations.map((location) => location.id));
const hiddenPeople = [
  {
    id: "luo_yuezhen",
    locations: ["archives"],
    docs: ["doc_educated_youth", "doc_photo_back", "doc_supply_roster", "doc_midwife_register"]
  },
  {
    id: "luo_jianning",
    relations: ["rel_zong_luo"],
    docs: ["doc_photo_back", "doc_luo_birth", "doc_midwife_register", "doc_classmate_luo"]
  },
  {
    id: "chen_jing",
    locations: ["ktv"],
    docs: ["doc_chen_birth", "doc_blog_chenjing", "doc_women_fed", "doc_dna_record"]
  },
  {
    id: "chen_jiadong",
    locations: ["school"],
    docs: ["doc_jiadong_school", "doc_teacher_visit", "doc_scholarship_notice", "doc_tiktok_chenjing"]
  }
];

const chainGroups = [
  {
    id: "inheritance_rules",
    docs: ["doc_trust_clause", "doc_notary_meeting", "doc_estate_law_note"],
    triggerDocs: ["doc_official_family"],
    triggerLocations: ["group"]
  },
  {
    id: "luo_yuezhen_line",
    docs: ["doc_educated_youth", "doc_photo_back", "doc_supply_roster", "doc_supply_advance", "doc_midwife_register"],
    triggerDocs: ["doc_official_family"],
    triggerLocations: ["archives"]
  },
  {
    id: "luo_jianning_line",
    docs: ["doc_luo_birth", "doc_old_postcard", "doc_remittance_stub", "doc_li_guilan_letter", "doc_classmate_luo"],
    triggerDocs: ["doc_photo_back", "doc_educated_youth", "doc_midwife_register"],
    triggerLocations: ["yunqian"]
  },
  {
    id: "chen_jing_line",
    docs: ["doc_chen_birth", "doc_blog_chenjing", "doc_women_fed", "doc_ktv_license", "doc_talent_window", "doc_ktv_lease_archive", "doc_neighborhood_visit", "doc_ktv_reopen_check"],
    triggerDocs: ["doc_luo_birth", "doc_classmate_luo"],
    triggerLocations: ["ktv"]
  },
  {
    id: "chen_jiadong_late_line",
    docs: ["doc_school_forum", "doc_jiadong_school", "doc_teacher_visit", "doc_scholarship_notice", "doc_dna_record", "doc_hospital_blood"],
    triggerDocs: ["doc_chen_birth", "doc_blog_chenjing", "doc_women_fed"],
    triggerLocations: ["school", "hospital"]
  }
];

const hiddenGroup = personGroups.find((group) => group.tone === "hidden");
if (!hiddenGroup) fail("Missing hidden bloodline person group");
else {
  const expected = hiddenPeople.map((person) => person.id).sort().join(",");
  const actual = [...hiddenGroup.ids].sort().join(",");
  if (actual !== expected) fail(`Hidden person group drifted: expected ${expected}, got ${actual}`);
}

for (const person of hiddenPeople) {
  if (!peopleIds.has(person.id)) fail(`Missing hidden person in people array: ${person.id}`);
  assertContains(discoveryFunction, `id === "${person.id}"`, `Missing discovery branch for ${person.id}`);
  assertContains(matrixDoc, person.id, `unlock_self_check.md must mention hidden person ${person.id}`);
  for (const location of person.locations || []) {
    if (!locationIds.has(location)) fail(`Hidden person ${person.id} references unknown location ${location}`);
    assertContains(discoveryFunction, `visitedLocations.has("${location}")`, `Missing location trigger ${location} for ${person.id}`);
    assertContains(matrixDoc, location, `unlock_self_check.md must mention location trigger ${location}`);
  }
  for (const relation of person.relations || []) {
    assertContains(discoveryFunction, relation, `Missing relation trigger ${relation} for ${person.id}`);
    assertContains(matrixDoc, relation, `unlock_self_check.md must mention relation trigger ${relation}`);
  }
  for (const docId of person.docs) {
    if (!docIds.has(docId)) fail(`Hidden person ${person.id} references unknown document ${docId}`);
    assertContains(discoveryFunction, docId, `Missing discovery document trigger ${docId} for ${person.id}`);
    assertContains(matrixDoc, docId, `unlock_self_check.md must mention person trigger doc ${docId}`);
  }
}

for (const group of chainGroups) {
  assertContains(matrixDoc, group.id, `unlock_self_check.md must mention chain group ${group.id}`);
  for (const docId of group.docs) {
    if (!docIds.has(docId)) fail(`Chain group ${group.id} references unknown document ${docId}`);
    if (publicDocumentIds.has(docId)) fail(`Chain-gated document should not be public: ${docId}`);
    assertContains(chainFunction, docId, `Missing chain document ${docId} in chainUnlockState`);
    assertContains(matrixDoc, docId, `unlock_self_check.md must mention chain document ${docId}`);
  }
  for (const docId of group.triggerDocs) {
    if (!docIds.has(docId)) fail(`Chain group ${group.id} references unknown trigger document ${docId}`);
    assertContains(chainFunction, docId, `Missing trigger document ${docId} for ${group.id}`);
    assertContains(matrixDoc, docId, `unlock_self_check.md must mention trigger document ${docId}`);
  }
  for (const location of group.triggerLocations) {
    if (!locationIds.has(location)) fail(`Chain group ${group.id} references unknown trigger location ${location}`);
    assertContains(chainFunction, `visitedLocations.has("${location}")`, `Missing trigger location ${location} for ${group.id}`);
    assertContains(matrixDoc, location, `unlock_self_check.md must mention trigger location ${location}`);
  }
}

for (const location of visitLocations) {
  if (!locationLabels[location.id]) fail(`Missing label for visit location: ${location.id}`);
  const locationDocs = locationDocumentIds[location.id] || [];
  if (!locationDocs.length) fail(`Visit location has no unlock documents: ${location.id}`);
  assertContains(matrixDoc, location.id, `unlock_self_check.md must mention visit location ${location.id}`);
  for (const docId of locationDocs) {
    if (!docIds.has(docId)) fail(`Location ${location.id} references unknown document ${docId}`);
  }
}

if (fs.existsSync(readmePath)) {
  const readme = fs.readFileSync(readmePath, "utf8");
  assertContains(readme, "validate_unlock_matrix.mjs", "README must mention validate_unlock_matrix.mjs");
}

if (errors.length) {
  for (const error of errors) console.error(`[FAIL] ${error}`);
  process.exit(1);
}

console.log(
  JSON.stringify(
    {
      status: "ok",
      hiddenPeople: hiddenPeople.length,
      chainGroups: chainGroups.length,
      gatedDocuments: chainGroups.reduce((sum, group) => sum + group.docs.length, 0),
      visitLocations: visitLocations.length
    },
    null,
    2
  )
);
