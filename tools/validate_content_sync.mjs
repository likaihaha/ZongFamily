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

function extractConstExpression(appSource, name) {
  const startToken = `const ${name} = `;
  const start = appSource.indexOf(startToken);
  if (start === -1) throw new Error(`Missing ${name}`);
  const valueStart = start + startToken.length;
  let end = -1;
  let depth = 0;
  let quote = "";
  let escaped = false;
  for (let index = valueStart; index < appSource.length; index += 1) {
    const char = appSource[index];
    if (quote) {
      if (escaped) {
        escaped = false;
      } else if (char === "\\") {
        escaped = true;
      } else if (char === quote) {
        quote = "";
      }
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
  if (end === -1) throw new Error(`Missing semicolon after ${name}`);
  const source = appSource.slice(valueStart, end).trim().replace(/;\s*$/, "");
  return vm.runInNewContext(`(${source})`, { Set });
}

if (!fs.existsSync(appPath)) fail(`Missing app file: ${appPath}`);
if (!fs.existsSync(bundlePath)) fail(`Missing case bundle: ${bundlePath}`);

let people = [];
let documents = [];
let relationPrompts = [];
let visitLocations = [];
let visitFollowUps = {};
let visitInterviews = {};
let locationDocumentIds = {};
let locationEntryDocumentIds = {};
let locationCoordinates = {};
let locationContacts = {};
let documentContactPeople = {};
let bundle = {};

if (!errors.length) {
  try {
    const app = fs.readFileSync(appPath, "utf8");
    people = extractConstExpression(app, "people");
    documents = extractConstExpression(app, "documents");
    relationPrompts = extractConstExpression(app, "relationPrompts");
    visitLocations = extractConstExpression(app, "visitLocations");
    visitFollowUps = extractConstExpression(app, "visitFollowUps");
    visitInterviews = extractConstExpression(app, "visitInterviews");
    locationDocumentIds = extractConstExpression(app, "locationDocumentIds");
    locationEntryDocumentIds = extractConstExpression(app, "locationEntryDocumentIds");
    locationCoordinates = extractConstExpression(app, "locationCoordinates");
    locationContacts = extractConstExpression(app, "locationContacts");
    documentContactPeople = extractConstExpression(app, "documentContactPeople");
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
const bundleVisitLocationsById = new Map((bundle.visitLocations || []).map((location) => [location.id, location]));

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

function normalizedVisitLocation(location) {
  return {
    id: location.id,
    title: location.title,
    query: location.query,
    meta: location.meta,
    text: location.text,
    contact: location.contact,
    interaction: location.interaction,
    windowStart: location.windowStart,
    windowEnd: location.windowEnd,
    entryCutoff: location.entryCutoff,
    duration: location.duration,
    coordinates: locationCoordinates[location.id],
    contactPersonIds: locationContacts[location.id] || [],
    documentIds: locationDocumentIds[location.id] || [],
    entryDocumentIds: locationEntryDocumentIds[location.id] || [],
    followUp: visitFollowUps[location.id] || null
  };
}

for (const location of visitLocations) {
  const bundleLocation = bundleVisitLocationsById.get(location.id);
  if (!bundleLocation) {
    fail(`app.js visit location missing from case_bundle visitLocations: ${location.id}`);
  } else {
    compareField("visit location", location.id, "matrix", normalizedVisitLocation(location), bundleLocation);
  }
}

for (const bundleLocation of bundle.visitLocations || []) {
  if (!visitLocations.some((location) => location.id === bundleLocation.id)) {
    fail(`case_bundle visit location missing from app.js: ${bundleLocation.id}`);
  }
}

compareField("case bundle", "visitInterviews", "visitInterviews", visitInterviews, bundle.visitInterviews);
compareField("case bundle", "documentContactPeople", "documentContactPeople", documentContactPeople, bundle.documentContactPeople);

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
      relationPrompts: relationPrompts.length,
      visitLocations: visitLocations.length,
      visitInterviews: Object.values(visitInterviews).reduce((sum, questions) => sum + questions.length, 0)
    },
    null,
    2
  )
);
