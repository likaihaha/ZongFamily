#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";

const root = process.cwd();
const appPath = path.resolve(root, "game/app.js");
const bundlePath = path.resolve(root, "game/data/case_bundle.json");

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

function pickDefined(source, keys) {
  const result = {};
  for (const key of keys) {
    if (source[key] !== undefined) result[key] = source[key];
  }
  return result;
}

const appSource = fs.readFileSync(appPath, "utf8");
const people = extractConstExpression(appSource, "people");
const documents = extractConstExpression(appSource, "documents");
const relationPrompts = extractConstExpression(appSource, "relationPrompts");
const visitInterviews = extractConstExpression(appSource, "visitInterviews");
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

bundle.visitInterviews = Object.fromEntries(
  Object.entries(visitInterviews).map(([locationId, questions]) => [
    locationId,
    questions.map((question) => pickDefined(question, ["id", "prompt", "person", "answer", "query", "firstDoc"]))
  ])
);

fs.writeFileSync(bundlePath, `${JSON.stringify(bundle, null, 2)}\n`, "utf8");

console.log(
  JSON.stringify(
    {
      status: "ok",
      familyMembers: bundle.familyMembers.length,
      documents: bundle.documents.length,
      relationPrompts: bundle.relationPrompts.length,
      visitInterviews: Object.values(bundle.visitInterviews).reduce((sum, questions) => sum + questions.length, 0)
    },
    null,
    2
  )
);
