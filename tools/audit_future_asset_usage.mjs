#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";

const root = path.resolve(import.meta.dirname, "..");
const manifestPath = path.join(root, "game/assets/images/future-assets/asset-manifest.json");
const scannedFiles = [
  "game/index.html",
  "game/app.js",
  "game/styles.css"
];
const reportPath = path.join(root, "docs/future_asset_usage.md");
const shouldWriteReport = process.argv.includes("--write");

const minimumUsedByCategory = {
  background: 7,
  "document-template": 8,
  "old-photo": 5,
  portrait: 8,
  "web-ui": 4,
  "ui-icon": 5,
  "genealogy-node": 5
};

const intentionallyDormantCategories = new Set(["promo", "ui-reference"]);
const errors = [];

function fail(message) {
  errors.push(message);
}

function readUtf8(relativePath) {
  return fs.readFileSync(path.join(root, relativePath), "utf8");
}

function normalizeManifestPath(assetPath) {
  return assetPath.replaceAll("\\", "/").replace(/^game\//, "");
}

function loadManifest() {
  if (!fs.existsSync(manifestPath)) {
    fail(`Missing future asset manifest: ${path.relative(root, manifestPath)}`);
    return [];
  }
  const manifest = JSON.parse(fs.readFileSync(manifestPath, "utf8"));
  if (!Array.isArray(manifest.assets)) {
    fail("Future asset manifest must contain an assets array");
    return [];
  }
  return manifest.assets;
}

function collectRuntimeSource() {
  let source = "";
  for (const file of scannedFiles) {
    const diskPath = path.join(root, file);
    if (!fs.existsSync(diskPath)) {
      fail(`Missing runtime file: ${file}`);
      continue;
    }
    source += `\n${readUtf8(file)}`;
  }
  return source;
}

function classifyAssets(assets, runtimeSource) {
  const categories = new Map();
  const rows = assets.map((asset) => {
    const normalizedPath = normalizeManifestPath(asset.path || "");
    const used =
      normalizedPath.length > 0 &&
      (runtimeSource.includes(normalizedPath) || runtimeSource.includes(asset.path || ""));
    return {
      id: asset.id,
      category: asset.category,
      path: asset.path,
      intendedUse: asset.intendedUse,
      used
    };
  });

  for (const row of rows) {
    if (!categories.has(row.category)) {
      categories.set(row.category, { total: 0, used: 0, unused: [] });
    }
    const category = categories.get(row.category);
    category.total += 1;
    if (row.used) {
      category.used += 1;
    } else {
      category.unused.push(row);
    }
  }

  for (const [category, minimum] of Object.entries(minimumUsedByCategory)) {
    const used = categories.get(category)?.used || 0;
    if (used < minimum) {
      fail(`Category ${category} has ${used} used assets; expected at least ${minimum}`);
    }
  }

  for (const category of intentionallyDormantCategories) {
    const used = categories.get(category)?.used || 0;
    if (used > 0) {
      fail(`Category ${category} should stay out of runtime until a dedicated feature needs it`);
    }
  }

  return { rows, categories };
}

function formatMarkdown(rows, categories) {
  const timestamp = new Intl.DateTimeFormat("zh-CN", {
    timeZone: "Asia/Shanghai",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false
  }).format(new Date()).replaceAll("/", "-");
  const sortedCategories = [...categories.entries()].sort(([a], [b]) => a.localeCompare(b));
  const unusedRows = rows
    .filter((row) => !row.used)
    .sort((a, b) => a.category.localeCompare(b.category) || a.id.localeCompare(b.id));

  return `# 未来美术资产接入审计

更新时间：${timestamp} Asia/Shanghai

该报告由 \`npm.cmd run audit:assets\` 生成，用于确认 \`asset-manifest.json\` 中的未来美术素材哪些已经进入当前可玩版本，哪些仍应保留为候选、宣传或参考资产。

## 分类统计

| 分类 | 已接入 | 总数 | 状态 |
| --- | ---: | ---: | --- |
${sortedCategories.map(([category, data]) => {
  const minimum = minimumUsedByCategory[category];
  const dormant = intentionallyDormantCategories.has(category);
  const status = dormant
    ? (data.used === 0 ? "按计划未接入" : "不应接入当前运行时")
    : (typeof minimum === "number" && data.used >= minimum ? "达到当前玩法阈值" : "需要补接或确认");
  return `| ${category} | ${data.used} | ${data.total} | ${status} |`;
}).join("\n")}

## 未接入清单

${unusedRows.map((row) => `- \`${row.id}\`（${row.category}）：${row.intendedUse}`).join("\n") || "- 无。"}

## 判断

- 当前生产级 UI 图标、家谱节点、资料模板、旧照片和网页界面素材均已接入运行时。
- 仍未进入运行时的素材主要是宣传图、参考图、年轻宗世昌头像、匿名人剪影和旧电脑室背景；这些不应为了“用完素材”而强塞进当前主线。
- 后续若新增开场封面、人物回忆段、匿名信来源界面或旧互联网检索房间，可优先从未接入清单中挑选素材。`;
}

const assets = loadManifest();
const runtimeSource = collectRuntimeSource();
const { rows, categories } = classifyAssets(assets, runtimeSource);
const summary = {
  status: errors.length ? "fail" : "ok",
  assets: rows.length,
  categories: Object.fromEntries(
    [...categories.entries()].map(([category, data]) => [
      category,
      { total: data.total, used: data.used, unused: data.unused.length }
    ])
  )
};

if (shouldWriteReport && !errors.length) {
  fs.writeFileSync(reportPath, formatMarkdown(rows, categories), "utf8");
}

if (errors.length) {
  for (const error of errors) console.error(`[FAIL] ${error}`);
  process.exitCode = 1;
} else {
  console.log(JSON.stringify(summary, null, 2));
  if (shouldWriteReport) {
    console.log(`[OK] Future asset usage report written: ${path.relative(root, reportPath)}`);
  }
}
