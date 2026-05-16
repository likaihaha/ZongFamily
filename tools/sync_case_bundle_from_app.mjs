#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";

const root = process.cwd();
const appPath = path.resolve(root, "game/app.js");
const bundlePath = path.resolve(root, "game/data/case_bundle.json");

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

function pickDefined(source, keys) {
  const result = {};
  for (const key of keys) {
    if (source[key] !== undefined) result[key] = source[key];
  }
  return result;
}

const appSource = fs.readFileSync(appPath, "utf8");
const people = extractConstArray(appSource, "people", "documents");
const documents = extractConstArray(appSource, "documents", "relationPrompts");
const relationPrompts = extractConstArray(appSource, "relationPrompts", null);
const bundle = JSON.parse(fs.readFileSync(bundlePath, "utf8"));

const existingPeople = new Map((bundle.familyMembers || []).map((person) => [person.id, person]));
bundle.familyMembers = people.map((person) => ({
  ...pickDefined(person, ["id", "name", "aliases", "birth", "death", "role", "note"]),
  ...pickDefined(existingPeople.get(person.id) || {}, ["generation"])
}));

const existingDocuments = new Map((bundle.documents || []).map((doc) => [doc.id, doc]));
bundle.documents = documents.map((doc) => ({
  ...pickDefined(doc, ["id", "title", "year", "source", "trust", "keywords", "summary"]),
  ...pickDefined(existingDocuments.get(doc.id) || {}, ["category"]),
  ...pickDefined(doc, ["body", "image"])
}));

bundle.relationPrompts = relationPrompts.map((relation) =>
  pickDefined(relation, ["id", "title", "prompt", "slots", "correct", "requiredEvidence"])
);

fs.writeFileSync(bundlePath, `${JSON.stringify(bundle, null, 2)}\n`, "utf8");

console.log(
  JSON.stringify(
    {
      status: "ok",
      familyMembers: bundle.familyMembers.length,
      documents: bundle.documents.length,
      relationPrompts: bundle.relationPrompts.length
    },
    null,
    2
  )
);
