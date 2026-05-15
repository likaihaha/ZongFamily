#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const appPath = path.resolve(root, "game/app.js");
const bundlePath = path.resolve(root, "game/data/case_bundle.json");

function fail(message) {
  console.error(`[FAIL] ${message}`);
  process.exitCode = 1;
}

function ok(message) {
  console.log(`[OK] ${message}`);
}

if (!fs.existsSync(appPath)) {
  fail(`Missing app file: ${appPath}`);
  process.exit();
}
if (!fs.existsSync(bundlePath)) {
  fail(`Missing case bundle: ${bundlePath}`);
  process.exit();
}

const app = fs.readFileSync(appPath, "utf8");
const bundle = JSON.parse(fs.readFileSync(bundlePath, "utf8"));

const expectedHeir = bundle?.submission?.firstHiddenLineageAnswer;
const expectedDescendant = bundle?.submission?.qualifiedHeir2020Answer;

if (typeof expectedHeir !== "string" || !expectedHeir.trim()) {
  fail("case_bundle submission.firstHiddenLineageAnswer must be a non-empty string");
}
if (typeof expectedDescendant !== "string" || !expectedDescendant.trim()) {
  fail("case_bundle submission.qualifiedHeir2020Answer must be a non-empty string");
}

const submitHeirMatch = app.match(/const heirOk = state\.report\.heir === "([^"]+)";/);
const submitDescMatch = app.match(/const descendantOk = state\.report\.descendant === "([^"]+)";/);
const autoReportMatch = app.match(/state\.report = \{ heir: "([^"]+)", descendant: "([^"]+)" \};/);

if (!submitHeirMatch) {
  fail("Cannot find submitReport heir check in app.js");
}
if (!submitDescMatch) {
  fail("Cannot find submitReport descendant check in app.js");
}
if (!autoReportMatch) {
  fail("Cannot find runAutotest report answers in app.js");
}

if (submitHeirMatch?.[1] !== expectedHeir) {
  fail(
    `submitReport heir mismatch: app=${submitHeirMatch[1]} bundle=${expectedHeir}`
  );
}
if (submitDescMatch?.[1] !== expectedDescendant) {
  fail(
    `submitReport descendant mismatch: app=${submitDescMatch[1]} bundle=${expectedDescendant}`
  );
}
if (autoReportMatch?.[1] !== expectedHeir || autoReportMatch?.[2] !== expectedDescendant) {
  fail(
    `runAutotest report mismatch: app={heir:${autoReportMatch?.[1]}, descendant:${autoReportMatch?.[2]}} bundle={heir:${expectedHeir}, descendant:${expectedDescendant}}`
  );
}

if (!process.exitCode) {
  ok("Submission answers are consistent between app.js and case_bundle.json");
}
