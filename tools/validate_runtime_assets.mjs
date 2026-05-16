#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";

const root = path.resolve(import.meta.dirname, "..");
const gameRoot = path.join(root, "game");
const scannedFiles = [
  path.join(gameRoot, "index.html"),
  path.join(gameRoot, "app.js"),
  path.join(gameRoot, "styles.css")
];
const allowedExtensions = new Set([".png", ".jpg", ".jpeg", ".wav", ".mp3"]);
const assetPattern = /["'(`](assets\/(?:images|audio)\/[^"'()`\s<>]+)["'()`]/g;
const cssUrlPattern = /url\(\s*["']?(assets\/(?:images|audio)\/[^"')\s<>]+)["']?\s*\)/g;
const errors = [];
const assets = new Set();

function fail(message) {
  errors.push(message);
}

function collectFromFile(filePath) {
  if (!fs.existsSync(filePath)) {
    fail(`Missing scanned file: ${path.relative(root, filePath)}`);
    return;
  }

  const source = fs.readFileSync(filePath, "utf8");
  for (const pattern of [assetPattern, cssUrlPattern]) {
    pattern.lastIndex = 0;
    for (const match of source.matchAll(pattern)) {
      assets.add(match[1].replaceAll("\\", "/"));
    }
  }
}

function validateAsset(assetPath) {
  const normalized = assetPath.replaceAll("\\", "/");
  const extension = path.extname(normalized).toLowerCase();
  if (!allowedExtensions.has(extension)) {
    fail(`Unsupported runtime asset type: ${normalized}`);
    return;
  }

  const diskPath = path.resolve(gameRoot, normalized);
  const relativeDiskPath = path.relative(gameRoot, diskPath);
  if (relativeDiskPath.startsWith("..") || path.isAbsolute(relativeDiskPath)) {
    fail(`Runtime asset escapes game directory: ${normalized}`);
    return;
  }

  if (!fs.existsSync(diskPath)) {
    fail(`Missing runtime asset: game/${normalized}`);
    return;
  }

  const stat = fs.statSync(diskPath);
  if (!stat.isFile() || stat.size <= 0) {
    fail(`Empty runtime asset: game/${normalized}`);
  }
}

for (const file of scannedFiles) collectFromFile(file);
for (const asset of [...assets].sort()) validateAsset(asset);

if (errors.length) {
  for (const error of errors) console.error(`[FAIL] ${error}`);
  process.exit(1);
}

console.log(`[OK] Runtime assets valid: ${assets.size} references`);
