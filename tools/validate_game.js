const fs = require("fs");
const path = require("path");
const vm = require("vm");

const root = path.resolve(__dirname, "..");
const appPath = path.join(root, "game", "app.js");
const app = fs.readFileSync(appPath, "utf8");

function extractConstArray(name, nextName) {
  const startToken = `const ${name} = `;
  const start = app.indexOf(startToken);
  if (start === -1) throw new Error(`Missing ${name}`);
  const valueStart = start + startToken.length;
  const endToken = nextName ? `const ${nextName} = ` : "const sourceLabels";
  const end = app.indexOf(endToken, valueStart);
  if (end === -1) throw new Error(`Missing end token after ${name}`);
  const source = app.slice(valueStart, end).trim().replace(/;\s*$/, "");
  return vm.runInNewContext(source);
}

const people = extractConstArray("people", "documents");
const documents = extractConstArray("documents", "relationPrompts");
const relationPrompts = extractConstArray("relationPrompts", null);

const errors = [];
const warnings = [];
const personIds = new Set(people.map((person) => person.id));
const docIds = new Set(documents.map((doc) => doc.id));

function assert(condition, message) {
  if (!condition) errors.push(message);
}

assert(people.length >= 15, `Expected at least 15 people, found ${people.length}`);
assert(documents.length >= 18, `Expected at least 18 documents, found ${documents.length}`);
assert(relationPrompts.length >= 4, `Expected at least 4 relation prompts, found ${relationPrompts.length}`);

for (const person of people) {
  assert(person.id && person.name, `Person missing id/name: ${JSON.stringify(person)}`);
  assert(!Number.isNaN(Number(person.birth)), `Person ${person.id} missing numeric birth year`);
}

for (const doc of documents) {
  assert(doc.id && doc.title, `Document missing id/title: ${JSON.stringify(doc)}`);
  assert(Array.isArray(doc.keywords) && doc.keywords.length > 0, `Document ${doc.id} has no keywords`);
  assert(doc.body && doc.body.length > 40, `Document ${doc.id} body too short`);
  assert(doc.trust >= 1 && doc.trust <= 5, `Document ${doc.id} trust must be 1-5`);
  if (doc.trust <= 2 && /DNA|信托|户籍|档案/.test(doc.title)) {
    warnings.push(`Low-trust document has official-looking title: ${doc.id}`);
  }
}

for (const rel of relationPrompts) {
  assert(rel.id && rel.title, `Relation prompt missing id/title`);
  assert(rel.correct.length === rel.slots.length, `Relation ${rel.id} correct/slots length mismatch`);
  for (const value of rel.correct) {
    assert(personIds.has(value) || docIds.has(value), `Relation ${rel.id} references unknown correct value ${value}`);
  }
  for (const docId of rel.requiredEvidence) {
    assert(docIds.has(docId), `Relation ${rel.id} requires unknown evidence ${docId}`);
  }
}

const requiredSearches = ["宗世昌", "罗月珍", "陈嘉东", "信托", "DNA", "陈静"];
for (const query of requiredSearches) {
  const found = documents.filter((doc) => [doc.title, doc.summary, doc.body, ...doc.keywords].join(" ").includes(query));
  assert(found.length > 0, `Search query ${query} has no matching documents`);
}

const output = {
  people: people.length,
  documents: documents.length,
  relations: relationPrompts.length,
  errors,
  warnings
};

console.log(JSON.stringify(output, null, 2));
if (errors.length) process.exit(1);
