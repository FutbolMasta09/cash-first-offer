#!/usr/bin/env node

// Installs the rules pack (starter/rules-pack/) into a target project,
// driven entirely by manifest.json — there is no second hardcoded list of
// documents to keep in sync with the manifest by hand.
//
// Conflict safety (never destroys existing target content):
//   - An existing destination file identical to the incoming version is
//     reported and skipped.
//   - An existing destination file that DIFFERS is preserved untouched; the
//     incoming version is written to a non-destructive template filename
//     (docs/root .md files -> "<name>.template.md"; rules ->
//     "<name>.mdc.template"; scripts -> "<name>.template").
//   - If that template filename already exists with DIFFERENT content, the
//     install fails clearly rather than overwriting it.
//   - An existing package.json that is invalid JSON fails the install
//     (nonzero exit, install reported incomplete) rather than warning and
//     claiming success. Valid package.json files keep every existing field
//     and every existing conflicting script untouched.

const fs = require("fs");
const path = require("path");
const { spawnSync } = require("child_process");

const repoRoot = path.resolve(__dirname, "..");
const packRoot = path.join(repoRoot, "starter", "rules-pack");
const manifestPath = path.join(packRoot, "manifest.json");
const sourceRulesDir = path.join(packRoot, ".cursor", "rules");
const sourceDocsDir = path.join(packRoot, "docs");

const targetArg = process.argv[2];
if (!targetArg) {
  console.error(
    'Usage: node scripts/install-rules-pack.js "<full path to new project>"'
  );
  process.exit(1);
}

const targetRoot = path.resolve(targetArg);
const targetRulesDir = path.join(targetRoot, ".cursor", "rules");
const targetDocsDir = path.join(targetRoot, "docs");

function ensureDir(dirPath) {
  fs.mkdirSync(dirPath, { recursive: true });
}

function abort(message) {
  console.error(`\nInstall FAILED (incomplete): ${message}`);
  process.exit(1);
}

function filesIdentical(pathA, pathB) {
  const a = fs.readFileSync(pathA);
  const b = fs.readFileSync(pathB);
  return a.equals(b);
}

function templateNameFor(fileName) {
  if (fileName.endsWith(".md")) return fileName.replace(/\.md$/, ".template.md");
  if (fileName.endsWith(".mdc")) return `${fileName}.template`;
  return `${fileName}.template`;
}

// Core conflict-safe copy. Returns a short status string for reporting.
function safeInstallFile(sourcePath, targetDir, targetFileName) {
  if (!fs.existsSync(sourcePath)) {
    abort(`missing source file: ${sourcePath}`);
  }
  ensureDir(targetDir);
  const targetPath = path.join(targetDir, targetFileName);

  if (!fs.existsSync(targetPath)) {
    fs.copyFileSync(sourcePath, targetPath);
    console.log(`Installed: ${targetPath}`);
    return "installed";
  }

  if (filesIdentical(sourcePath, targetPath)) {
    console.log(`Identical, skipped: ${targetPath}`);
    return "skipped-identical";
  }

  // Existing file differs — preserve it, write incoming to a template name.
  const templatePath = path.join(targetDir, templateNameFor(targetFileName));
  if (fs.existsSync(templatePath)) {
    if (filesIdentical(sourcePath, templatePath)) {
      console.log(`Preserved existing file; template already current: ${templatePath}`);
      return "template-current";
    }
    abort(
      `existing file "${targetPath}" differs from the pack, and its template ` +
        `"${templatePath}" ALSO already exists with different content. Refusing to ` +
        `overwrite either. Reconcile or remove the stale template, then re-run.`
    );
  }

  fs.copyFileSync(sourcePath, templatePath);
  console.log(`Preserved existing file. Template written to: ${templatePath}`);
  return "template-written";
}

function runVerification() {
  const verifyScript = path.join(__dirname, "verify-rules-pack.js");
  console.log("Verifying rules pack before install...");
  const result = spawnSync(process.execPath, [verifyScript], {
    stdio: "inherit",
  });
  if (result.error || result.status !== 0) {
    abort(
      "the rules pack failed verification. Fix the pack (see errors above) " +
        "before installing — installing an unverified pack would carry the " +
        "same problems into the new project."
    );
  }
  console.log("");
}

function loadManifest() {
  if (!fs.existsSync(manifestPath)) {
    abort(`manifest not found at ${manifestPath}`);
  }
  try {
    return JSON.parse(fs.readFileSync(manifestPath, "utf8"));
  } catch (err) {
    abort(`manifest is not valid JSON: ${err.message}`);
  }
}

function installRules(manifest) {
  for (const fileName of manifest.rules.files) {
    safeInstallFile(path.join(sourceRulesDir, fileName), targetRulesDir, fileName);
  }
}

function installDocuments(manifest) {
  for (const doc of manifest.documents) {
    if (doc.installType === "reference") continue; // pack-only, never installed

    const sourcePath = path.join(sourceDocsDir, doc.file);
    if (doc.installType === "docs") {
      safeInstallFile(sourcePath, targetDocsDir, doc.installAs);
    } else if (doc.installType === "root") {
      safeInstallFile(sourcePath, targetRoot, doc.installAs);
    } else {
      abort(`document "${doc.file}" has unknown installType "${doc.installType}".`);
    }
  }
}

function installInitWeeklyOps() {
  const sourceScript = path.join(repoRoot, "scripts", "init-weekly-ops.js");
  if (!fs.existsSync(sourceScript)) {
    abort("scripts/init-weekly-ops.js is missing from Project Starter.");
  }

  safeInstallFile(sourceScript, path.join(targetRoot, "scripts"), "init-weekly-ops.js");

  const packagePath = path.join(targetRoot, "package.json");
  if (fs.existsSync(packagePath)) {
    let pkg;
    try {
      pkg = JSON.parse(fs.readFileSync(packagePath, "utf8"));
    } catch (err) {
      abort(
        `the target's existing package.json is not valid JSON (${err.message}). ` +
          `Fix it and re-run — refusing to guess at or replace a broken manifest.`
      );
    }
    if (!pkg.scripts) pkg.scripts = {};
    if (pkg.scripts["ops:week:init"] === undefined) {
      pkg.scripts["ops:week:init"] = "node ./scripts/init-weekly-ops.js";
      fs.writeFileSync(packagePath, JSON.stringify(pkg, null, 2), "utf8");
      console.log("Added ops:week:init to package.json (all existing fields preserved)");
    } else {
      console.log(
        "package.json already defines ops:week:init — left untouched " +
          `(current value: ${JSON.stringify(pkg.scripts["ops:week:init"])})`
      );
    }
  } else {
    const minimalPkg = {
      name: path.basename(targetRoot),
      version: "1.0.0",
      private: true,
      scripts: {
        "ops:week:init": "node ./scripts/init-weekly-ops.js",
      },
    };
    fs.writeFileSync(packagePath, JSON.stringify(minimalPkg, null, 2), "utf8");
    console.log("Created minimal package.json with ops:week:init");
  }
}

function run() {
  runVerification();
  const manifest = loadManifest();

  installRules(manifest);
  installDocuments(manifest);
  installInitWeeklyOps();

  console.log("Rules pack install complete.");
}

run();
