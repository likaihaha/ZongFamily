#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";

const manifestArg = process.argv[2] || "game/assets/images/future-assets/asset-manifest.json";
const manifestPath = path.resolve(process.cwd(), manifestArg);
const projectRoot = process.cwd();
const allowedCategories = new Set([
  "background",
  "document-template",
  "old-photo",
  "portrait",
  "promo",
  "genealogy-node",
  "ui-icon",
  "ui-reference",
  "web-ui"
]);
const minimumCounts = {
  background: 8,
  "document-template": 8,
  "old-photo": 5,
  portrait: 10,
  promo: 3,
  "genealogy-node": 5,
  "ui-icon": 5,
  "ui-reference": 2,
  "web-ui": 4
};
let failures = 0;

function fail(message) {
  failures += 1;
  console.error(`[FAIL] ${message}`);
}

function readManifest() {
  if (!fs.existsSync(manifestPath)) {
    fail(`Manifest not found: ${manifestPath}`);
    return null;
  }
  try {
    return JSON.parse(fs.readFileSync(manifestPath, "utf8"));
  } catch (error) {
    fail(`Invalid manifest JSON: ${error.message}`);
    return null;
  }
}

function isNonEmptyString(value) {
  return typeof value === "string" && value.trim().length > 0;
}

function validateAssetPath(asset, index) {
  if (!isNonEmptyString(asset.path)) {
    fail(`assets[${index}] missing non-empty path`);
    return;
  }
  const normalized = asset.path.replaceAll("\\", "/");
  const isAllowedRoot =
    normalized.startsWith("game/assets/images/future-assets/") ||
    normalized.startsWith("game/assets/images/photo-backgrounds/");
  if (!isAllowedRoot) {
    fail(`assets[${index}] path outside allowed art roots: ${asset.path}`);
  }
  if (!normalized.endsWith(".png")) {
    fail(`assets[${index}] is not a PNG asset: ${asset.path}`);
  }
  const diskPath = path.resolve(projectRoot, normalized);
  if (!fs.existsSync(diskPath)) {
    fail(`assets[${index}] file missing: ${asset.path}`);
    return;
  }
  const stat = fs.statSync(diskPath);
  if (!stat.isFile() || stat.size <= 0) {
    fail(`assets[${index}] file is empty or not a file: ${asset.path}`);
  }
}

const manifest = readManifest();
if (manifest) {
  if (!Array.isArray(manifest.assets)) {
    fail("Manifest must contain an assets array");
  } else {
    const ids = new Set();
    const paths = new Set();
    const categoryCounts = new Map();

    for (const [index, asset] of manifest.assets.entries()) {
      if (!asset || typeof asset !== "object") {
        fail(`assets[${index}] must be an object`);
        continue;
      }

      for (const field of ["id", "category", "promptTitle", "intendedUse"]) {
        if (!isNonEmptyString(asset[field])) {
          fail(`assets[${index}] missing non-empty ${field}`);
        }
      }

      if (isNonEmptyString(asset.id)) {
        if (ids.has(asset.id)) {
          fail(`Duplicate asset id: ${asset.id}`);
        }
        ids.add(asset.id);
      }

      if (isNonEmptyString(asset.category)) {
        if (!allowedCategories.has(asset.category)) {
          fail(`Unknown category for ${asset.id || `assets[${index}]`}: ${asset.category}`);
        }
        categoryCounts.set(asset.category, (categoryCounts.get(asset.category) || 0) + 1);
      }

      if (isNonEmptyString(asset.path)) {
        const normalizedPath = asset.path.replaceAll("\\", "/");
        if (paths.has(normalizedPath)) {
          fail(`Duplicate asset path: ${asset.path}`);
        }
        paths.add(normalizedPath);
      }

      validateAssetPath(asset, index);
    }

    for (const [category, minimum] of Object.entries(minimumCounts)) {
      const count = categoryCounts.get(category) || 0;
      if (count < minimum) {
        fail(`Category ${category} has ${count} assets; expected at least ${minimum}`);
      }
    }

    if (!failures) {
      console.log(`[OK] Future asset manifest valid: ${manifest.assets.length} assets`);
    }
  }
}

if (failures) {
  process.exitCode = 1;
}
