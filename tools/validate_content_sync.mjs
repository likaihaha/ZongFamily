#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";

const root = process.cwd();
const appPath = path.resolve(root, "game/app.js");
const bundlePath = path.resolve(root, "game/data/case_bundle.json");
const errors = [];

function fail(message) {
  errors.push(message);
}

function extractConstArray(appSource, name, nextName) {
  const startToken = `const ${name} = `;
  const start = appSource.indexOf(startToken);
  if (start === -1) throw new Error(`Missing ${name}`);
  const valueStart = start + startToken.length;
  const endToken = nextName ? `const ${nextName} = ` : "const sourceLabels";
  const end = appSource.indexOf(endToken, valueStart);
  if (end === -1) throw new Error(`Missing end token after ${name}`);
  const source = appSource.slice(valueStart, end).trim().replace(/;\s*$/, "");
  return vm.runInNewContext(source);
}

if (!fs.existsSync(appPath)) fail(`Missing app file: ${appPath}`);
if (!fs.existsSync(bundlePath)) fail(`Missing case bundle: ${bundlePath}`);

let people = [];
let documents = [];
let relationPrompts = [];
let bundle = {};

if (!errors.length) {
  try {
    const app = fs.readFileSync(appPath, "utf8");
    people = extractConstArray(app, "people", "documents");
    documents = extractConstArray(app, "documents", "relationPrompts");
    relationPrompts = extractConstArray(app, "relationPrompts", null);
    bundle = JSON.parse(fs.readFileSync(bundlePath, "utf8"));
  } catch (error) {
    fail(error.message);
  }
}

const appPeopleById = new Map(people.map((person) => [person.id, person]));
const appDocsById = new Map(documents.map((doc) => [doc.id, doc]));
const bundlePeopleById = new Map((bundle.familyMembers || []).map((person) => [person.id, person]));
const bundleDocsById = new Map((bundle.documents || []).map((doc) => [doc.id, doc]));
const bundleRelationPromptsById = new Map((bundle.relationPrompts || []).map((relation) => [relation.id, relation]));

function stable(value) {
  return JSON.stringify(value ?? null);
}

function compareField(label, id, field, left, right) {
  if (stable(left) !== stable(right)) {
    fail(`${label} ${field} mismatch for ${id}: app=${stable(left)} bundle=${stable(right)}`);
  }
}

for (const bundlePerson of bundle.familyMembers || []) {
  const appPerson = appPeopleById.get(bundlePerson.id);
  if (!appPerson) {
    fail(`case_bundle family member missing from app.js: ${bundlePerson.id}`);
  } else if (appPerson.name !== bundlePerson.name) {
    fail(`family member name mismatch for ${bundlePerson.id}: app=${appPerson.name} bundle=${bundlePerson.name}`);
  } else {
    for (const field of ["aliases", "birth", "death", "role", "note"]) {
      compareField("family member", bundlePerson.id, field, appPerson[field], bundlePerson[field]);
    }
  }
}

for (const appPerson of people) {
  if (!bundlePeopleById.has(appPerson.id)) {
    fail(`app.js person missing from case_bundle familyMembers: ${appPerson.id}`);
  }
}

for (const bundleDoc of bundle.documents || []) {
  const appDoc = appDocsById.get(bundleDoc.id);
  if (!appDoc) {
    fail(`case_bundle document missing from app.js: ${bundleDoc.id}`);
    continue;
  }
  if (appDoc.title !== bundleDoc.title) {
    fail(`document title mismatch for ${bundleDoc.id}: app=${appDoc.title} bundle=${bundleDoc.title}`);
  }
  for (const field of ["year", "source", "trust", "keywords", "summary", "body", "image"]) {
    compareField("document", bundleDoc.id, field, appDoc[field], bundleDoc[field]);
  }
  if (bundleDoc.image?.src && appDoc.image?.src !== bundleDoc.image.src) {
    fail(`document image mismatch for ${bundleDoc.id}: app=${appDoc.image?.src || "none"} bundle=${bundleDoc.image.src}`);
  }
}

for (const appDoc of documents) {
  if (!bundleDocsById.has(appDoc.id)) {
    fail(`app.js document missing from case_bundle documents: ${appDoc.id}`);
  }
}

const relationPersonRefs = new Set();
const relationDocRefs = new Set();

for (const relation of relationPrompts) {
  const bundleRelation = bundleRelationPromptsById.get(relation.id);
  if (!bundleRelation) {
    fail(`app.js relation prompt missing from case_bundle relationPrompts: ${relation.id}`);
  } else {
    for (const field of ["title", "prompt", "slots", "correct", "requiredEvidence"]) {
      compareField("relation prompt", relation.id, field, relation[field], bundleRelation[field]);
    }
  }
  for (const docId of relation.requiredEvidence || []) relationDocRefs.add(docId);
  for (const value of relation.correct || []) {
    if (appPeopleById.has(value)) {
      relationPersonRefs.add(value);
    } else if (appDocsById.has(value)) {
      relationDocRefs.add(value);
    } else {
      fail(`relation ${relation.id} references unknown correct value: ${value}`);
    }
  }
}

for (const bundleRelation of bundle.relationPrompts || []) {
  if (!relationPrompts.some((relation) => relation.id === bundleRelation.id)) {
    fail(`case_bundle relation prompt missing from app.js: ${bundleRelation.id}`);
  }
}

for (const personId of relationPersonRefs) {
  if (!bundlePeopleById.has(personId)) {
    fail(`relation person missing from case_bundle familyMembers: ${personId}`);
  }
}

for (const docId of relationDocRefs) {
  if (!bundleDocsById.has(docId)) {
    fail(`relation evidence document missing from case_bundle documents: ${docId}`);
  }
}

if (errors.length) {
  for (const error of errors) console.error(`[FAIL] ${error}`);
  process.exit(1);
}

console.log(
  JSON.stringify(
    {
      status: "ok",
      bundleFamilyMembers: bundlePeopleById.size,
      bundleDocuments: bundleDocsById.size,
      appFamilyMembers: appPeopleById.size,
      appDocuments: appDocsById.size,
      relationPeopleCovered: relationPersonRefs.size,
      relationDocumentsCovered: relationDocRefs.size,
      relationPrompts: relationPrompts.length
    },
    null,
    2
  )
);
