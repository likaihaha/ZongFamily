#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";

const root = path.resolve(import.meta.dirname, "..");
const gameRoot = path.join(root, "game");
const appPath = path.join(gameRoot, "app.js");
const errors = [];

function fail(message) {
  errors.push(message);
}

function readUtf8(filePath) {
  if (!fs.existsSync(filePath)) {
    fail(`Missing file: ${path.relative(root, filePath)}`);
    return "";
  }
  return fs.readFileSync(filePath, "utf8");
}

function extractBlock(source, marker, openChar, closeChar) {
  const markerIndex = source.indexOf(marker);
  if (markerIndex < 0) {
    fail(`Missing marker: ${marker}`);
    return "";
  }

  const start = source.indexOf(openChar, markerIndex);
  if (start < 0) {
    fail(`Missing opening ${openChar} after marker: ${marker}`);
    return "";
  }

  let depth = 0;
  let quote = "";
  let escaped = false;
  for (let index = start; index < source.length; index += 1) {
    const char = source[index];
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
    if (char === openChar) depth += 1;
    if (char === closeChar) depth -= 1;
    if (depth === 0) return source.slice(start, index + 1);
  }

  fail(`Unclosed block after marker: ${marker}`);
  return "";
}

function extractTopLevelObjects(arrayBlock) {
  const objects = [];
  let depth = 0;
  let quote = "";
  let escaped = false;
  let objectStart = -1;

  for (let index = 1; index < arrayBlock.length - 1; index += 1) {
    const char = arrayBlock[index];
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
    if (char === "{") {
      if (depth === 0) objectStart = index;
      depth += 1;
    }
    if (char === "}") {
      depth -= 1;
      if (depth === 0 && objectStart >= 0) {
        objects.push(arrayBlock.slice(objectStart, index + 1));
        objectStart = -1;
      }
    }
  }

  return objects;
}

const appSource = readUtf8(appPath);
const documentsBlock = extractBlock(appSource, "const documents = [", "[", "]");
const visualBlock = extractBlock(appSource, "const documentDetailImages = {", "{", "}");
const documentObjects = extractTopLevelObjects(documentsBlock);

const documentIds = new Set();
const directImageDocIds = new Set();
for (const documentObject of documentObjects) {
  const id = documentObject.match(/\bid:\s*"(?<id>doc_[a-z0-9_]+)"/)?.groups.id;
  if (!id) {
    fail("A document object is missing a doc_* id");
    continue;
  }
  if (documentIds.has(id)) fail(`Duplicate runtime document id: ${id}`);
  documentIds.add(id);
  if (/\n\s*image:\s*\{/.test(documentObject)) directImageDocIds.add(id);
}
const visualDocIds = [...visualBlock.matchAll(/^\s*(?<id>doc_[a-z0-9_]+):\s*\[/gm)].map((match) => match.groups.id);
const visualSrcs = [...visualBlock.matchAll(/\bsrc:\s*"(?<src>assets\/images\/[^"]+)"/g)].map((match) => match.groups.src);

if (documentObjects.length !== documentIds.size) fail(`Document object count does not match unique ids: ${documentObjects.length} objects, ${documentIds.size} ids`);
if (documentIds.size < 50) fail(`Expected at least 50 runtime documents, found ${documentIds.size}`);
if (directImageDocIds.size < 4) fail(`Expected at least 4 direct evidence images, found ${directImageDocIds.size}`);
if (visualDocIds.length < 13) fail(`Expected at least 13 documents with detail art, found ${visualDocIds.length}`);
if (visualSrcs.length < 15) fail(`Expected at least 15 document detail art images, found ${visualSrcs.length}`);

const visualDocSet = new Set();
for (const id of visualDocIds) {
  if (!documentIds.has(id)) fail(`Document detail art maps to unknown document: ${id}`);
  if (visualDocSet.has(id)) fail(`Duplicate document detail art mapping: ${id}`);
  visualDocSet.add(id);
}

const srcCounts = new Map();
for (const src of visualSrcs) {
  srcCounts.set(src, (srcCounts.get(src) || 0) + 1);
  const diskPath = path.resolve(gameRoot, src);
  const relativeDiskPath = path.relative(gameRoot, diskPath);
  if (relativeDiskPath.startsWith("..") || path.isAbsolute(relativeDiskPath)) {
    fail(`Document detail art escapes game directory: ${src}`);
    continue;
  }
  if (!fs.existsSync(diskPath)) {
    fail(`Missing document detail art: game/${src}`);
    continue;
  }
  const stat = fs.statSync(diskPath);
  if (!stat.isFile() || stat.size <= 0) fail(`Empty document detail art: game/${src}`);
}

for (const [src, count] of srcCounts.entries()) {
  if (count > 1) fail(`Duplicate document detail art source: ${src}`);
}

const categoryCounts = {
  documents: visualSrcs.filter((src) => src.includes("/future-assets/documents/")).length,
  oldPhotos: visualSrcs.filter((src) => src.includes("/future-assets/old-photos/")).length,
  webUi: visualSrcs.filter((src) => src.includes("/future-assets/web-ui/")).length
};
if (categoryCounts.documents < 7) fail(`Expected at least 7 document-template art images, found ${categoryCounts.documents}`);
if (categoryCounts.oldPhotos < 5) fail(`Expected at least 5 old-photo art images, found ${categoryCounts.oldPhotos}`);
if (categoryCounts.webUi < 4) fail(`Expected at least 4 web-ui art images, found ${categoryCounts.webUi}`);

if (errors.length) {
  for (const error of errors) console.error(`[FAIL] ${error}`);
  process.exit(1);
}

console.log(JSON.stringify({
  status: "ok",
  documents: documentIds.size,
  directImageDocuments: directImageDocIds.size,
  detailArtDocuments: visualDocIds.length,
  detailArtImages: visualSrcs.length,
  categoryCounts
}, null, 2));
