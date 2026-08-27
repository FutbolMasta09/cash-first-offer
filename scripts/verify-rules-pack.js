#!/usr/bin/env node

// Validates starter/rules-pack/ against manifest.json. The pack is maintained
// directly — this script checks integrity, it does not generate anything.
//
// Fails when:
//   1. a manifest-listed file is missing from the pack
//   2. an unexpected file exists in the pack that the manifest doesn't list
//   3. two manifest entries target the same installation destination
//   4. an installable file contains a Sticker Quest tooling-host instruction
//   5. an installable file uses a named project as a generic primary /
//      secondary / next-project authority (checked across adjacent lines,
//      so wording that spans a line break is still caught)
//   6. an installable file hardcodes an absolute workspace path (installed
//      content must be location-independent; use <PROJECT_PATH>-style
//      placeholders or point at 00-START-HERE.md as the location authority)
//   7. an installable file contains a broken non-optional local Markdown
//      link — a link that resolves to nothing in a fresh installation and
//      is not declared in the manifest's externalReferences allowlist
//   8. the manifest itself, or an install mapping in it, is malformed
//
// Historical project names are permitted ONLY in reference-only pack content
// (installType "reference"), which is never installed into new projects.
//
// Exit code 0 = pack is valid. Non-zero = at least one failure (all
// failures are collected and reported together, not just the first).

const fs = require("fs");
const path = require("path");

const repoRoot = path.resolve(__dirname, "..");
const packRoot = path.join(repoRoot, "starter", "rules-pack");
const manifestPath = path.join(packRoot, "manifest.json");
const rulesDir = path.join(packRoot, ".cursor", "rules");
const docsDir = path.join(packRoot, "docs");

// --- Detection patterns -----------------------------------------------------

// Matches a line that both mentions Sticker Quest and reads as an
// instruction to go there for tooling, rather than a merely historical
// mention.
const STICKER_QUEST_MENTION = /sticker[-_ ]quest/i;
const TOOLING_VERB_PATTERN =
  /\bcd\b|\bterminal\b|active project|\bopen\b.*cursor|\bopen cursor\b|npm run|node scripts|\brun:|\bbuild the pack\b|rules:pack:build|rules:pack:install|from sticker[-_ ]quest|in sticker[-_ ]quest/i;

function isToolingHostInstruction(text) {
  return STICKER_QUEST_MENTION.test(text) && TOOLING_VERB_PATTERN.test(text);
}

// Named projects that must never be presented as portfolio-authoritative
// (primary/secondary/next/launch-protected) in installable generic content.
const NAMED_PROJECT_PATTERN =
  /sticker[-_ ]quest|promptside|null[-_ ]sigil|anchor'?s[-_ ]desk|inkborne|grudgekeep|idea[-_ ]forge|lanternfall|nullvast|libby[-_ ]storyworld|kira[-_ ]calendar/i;

const AUTHORITY_PATTERN =
  /\bis (always )?(the )?primary\b|\bprimary build\b|\balways primary\b|\bnext flagship\b|\bflagship after\b|\blocked (queue|order)\b|\blaunch[- ]protect|\blaunch is stable\b|\bpriority inversion\b|\bcomes first\b|\bsecond[- ]flagship\b|\bis (the )?next\b|\bnext .{0,20}(build|project|flagship)\b/i;

// Absolute-path pattern: any drive-letter path into the workspace, or any
// hardcoded drive-letter path at all in installed content (installed files
// must be location-independent).
const ABSOLUTE_WORKSPACE_PATH = /[A-Za-z]:\\+[^\s`"')\]]*/g;

// --- Failure collection -----------------------------------------------------

const errors = [];
function fail(message) {
  errors.push(message);
}

// --- Manifest ---------------------------------------------------------------

function loadManifest() {
  if (!fs.existsSync(manifestPath)) {
    fail(`Manifest not found: ${manifestPath}`);
    return null;
  }

  let raw;
  try {
    raw = fs.readFileSync(manifestPath, "utf8");
  } catch (err) {
    fail(`Could not read manifest: ${err.message}`);
    return null;
  }

  let manifest;
  try {
    manifest = JSON.parse(raw);
  } catch (err) {
    fail(`Manifest is not valid JSON: ${err.message}`);
    return null;
  }

  if (!manifest || typeof manifest !== "object") {
    fail("Manifest root must be an object.");
    return null;
  }
  if (!manifest.rules || !Array.isArray(manifest.rules.files)) {
    fail("Manifest is missing rules.files (expected an array).");
    return null;
  }
  if (!Array.isArray(manifest.documents)) {
    fail("Manifest is missing documents (expected an array).");
    return null;
  }

  const validInstallTypes = new Set(["docs", "root", "reference"]);
  manifest.documents.forEach((doc, i) => {
    if (!doc || typeof doc !== "object") {
      fail(`documents[${i}] is malformed: expected an object.`);
      return;
    }
    if (typeof doc.file !== "string" || doc.file.length === 0) {
      fail(`documents[${i}] is malformed: "file" must be a non-empty string.`);
    }
    if (!validInstallTypes.has(doc.installType)) {
      fail(
        `documents[${i}] (${doc.file || "?"}) has invalid installType ` +
          `"${doc.installType}" — must be one of: docs, root, reference.`
      );
    }
    if (doc.installType === "reference") {
      if (doc.installAs !== null && doc.installAs !== undefined) {
        fail(
          `documents[${i}] (${doc.file}) is installType "reference" but ` +
            `declares installAs "${doc.installAs}" — reference entries must not install anywhere.`
        );
      }
    } else if (typeof doc.installAs !== "string" || doc.installAs.length === 0) {
      fail(
        `documents[${i}] (${doc.file}) is installType "${doc.installType}" but ` +
          `is missing a valid installAs destination filename.`
      );
    }
  });

  if (manifest.externalReferences !== undefined) {
    if (!Array.isArray(manifest.externalReferences)) {
      fail("Manifest externalReferences must be an array when present.");
    } else {
      manifest.externalReferences.forEach((ref, i) => {
        if (!ref || typeof ref.path !== "string" || ref.path.length === 0) {
          fail(`externalReferences[${i}] is malformed: "path" must be a non-empty string.`);
        }
        if (!ref || typeof ref.reason !== "string" || ref.reason.length < 10) {
          fail(
            `externalReferences[${i}] (${(ref && ref.path) || "?"}) must carry a ` +
              `substantive "reason" — a narrow allowlist entry without a reason is not allowed.`
          );
        }
      });
    }
  }

  return manifest;
}

// --- Checks -----------------------------------------------------------------

function checkFileSets(manifest) {
  const manifestRuleSet = new Set(manifest.rules.files);
  const diskRuleFiles = fs.existsSync(rulesDir)
    ? fs.readdirSync(rulesDir).filter((f) => f.endsWith(".mdc"))
    : [];
  const diskRuleSet = new Set(diskRuleFiles);

  for (const f of manifestRuleSet) {
    if (!diskRuleSet.has(f)) {
      fail(`Manifest-listed rule file is missing from disk: .cursor/rules/${f}`);
    }
  }
  for (const f of diskRuleSet) {
    if (!manifestRuleSet.has(f)) {
      fail(`Unexpected rule file on disk, not listed in manifest: .cursor/rules/${f}`);
    }
  }

  const manifestDocSet = new Set(manifest.documents.map((d) => d.file));
  const diskDocFiles = fs.existsSync(docsDir)
    ? fs.readdirSync(docsDir).filter((f) => f.endsWith(".md"))
    : [];
  const diskDocSet = new Set(diskDocFiles);

  for (const f of manifestDocSet) {
    if (!diskDocSet.has(f)) {
      fail(`Manifest-listed document is missing from disk: docs/${f}`);
    }
  }
  for (const f of diskDocSet) {
    if (!manifestDocSet.has(f)) {
      fail(`Unexpected document on disk, not listed in manifest: docs/${f}`);
    }
  }
}

function checkDestinationCollisions(manifest) {
  const seenByType = { docs: new Map(), root: new Map() };

  for (const doc of manifest.documents) {
    if (doc.installType !== "docs" && doc.installType !== "root") continue;
    const bucket = seenByType[doc.installType];
    const existing = bucket.get(doc.installAs);
    if (existing) {
      fail(
        `Destination collision: both "${existing}" and "${doc.file}" install ` +
          `as "${doc.installAs}" (installType: ${doc.installType}).`
      );
    } else {
      bucket.set(doc.installAs, doc.file);
    }
  }
}

function installableFiles(manifest) {
  const files = [];
  for (const ruleFile of manifest.rules.files) {
    const p = path.join(rulesDir, ruleFile);
    if (fs.existsSync(p)) {
      files.push({ label: `.cursor/rules/${ruleFile}`, absPath: p, kind: "rule" });
    }
  }
  for (const doc of manifest.documents) {
    if (doc.installType === "reference") continue;
    const p = path.join(docsDir, doc.file);
    if (fs.existsSync(p)) {
      files.push({ label: `docs/${doc.file}`, absPath: p, kind: "doc", installAs: doc.installAs, installType: doc.installType });
    }
  }
  return files;
}

function checkContentPolicies(manifest) {
  for (const file of installableFiles(manifest)) {
    const lines = fs.readFileSync(file.absPath, "utf8").split("\n");

    lines.forEach((line, i) => {
      // 4. Sticker Quest tooling-host instruction (single line)
      if (isToolingHostInstruction(line)) {
        fail(
          `Installable file contains a Sticker Quest tooling-host instruction: ` +
            `${file.label}:${i + 1}: "${line.trim()}"`
        );
      }

      // 6. Hardcoded absolute paths
      const pathMatches = line.match(ABSOLUTE_WORKSPACE_PATH);
      if (pathMatches) {
        for (const m of pathMatches) {
          fail(
            `Installable file hardcodes an absolute path (must be location-independent; ` +
              `use <PROJECT_PATH> placeholders or 00-START-HERE.md as the location authority): ` +
              `${file.label}:${i + 1}: "${m}"`
          );
        }
      }
    });

    // 5. Named project as portfolio authority — sliding 2-line window so
    // wording that spans a line break is still caught.
    for (let i = 0; i < lines.length; i++) {
      const window = i + 1 < lines.length ? `${lines[i]} ${lines[i + 1]}` : lines[i];
      const single = lines[i];
      const flagged =
        (NAMED_PROJECT_PATTERN.test(single) && AUTHORITY_PATTERN.test(single)) ||
        (NAMED_PROJECT_PATTERN.test(window) && AUTHORITY_PATTERN.test(window) &&
          // Only flag the window when the named project itself is in it —
          // avoid double-flagging the same line via two windows.
          NAMED_PROJECT_PATTERN.test(single));
      if (flagged) {
        fail(
          `Installable file uses a named project as portfolio authority ` +
            `(primary/secondary/next/launch-protected): ${file.label}:${i + 1}: "${single.trim()}"`
        );
      }
    }
  }
}

function buildInstalledSet(manifest) {
  // Everything a fresh installation contains, as normalized repo-root-relative
  // POSIX-style paths.
  const installed = new Set();
  for (const ruleFile of manifest.rules.files) {
    installed.add(`.cursor/rules/${ruleFile}`);
  }
  for (const doc of manifest.documents) {
    if (doc.installType === "docs") installed.add(`docs/${doc.installAs}`);
    if (doc.installType === "root") installed.add(doc.installAs);
  }
  installed.add("scripts/init-weekly-ops.js");
  installed.add("package.json");
  return installed;
}

function normalizeTarget(baseDirPosix, target) {
  // Resolve a relative link target against a POSIX-style base dir
  // ("", "docs", ".cursor/rules"), collapsing ../ segments.
  const parts = (baseDirPosix ? baseDirPosix.split("/") : []).concat(
    target.split("/")
  );
  const out = [];
  for (const part of parts) {
    if (part === "" || part === ".") continue;
    if (part === "..") {
      out.pop();
    } else {
      out.push(part);
    }
  }
  return out.join("/");
}

function checkLocalLinks(manifest) {
  const installedSet = buildInstalledSet(manifest);
  const allowlist = new Set(
    (manifest.externalReferences || []).map((r) => r.path.toLowerCase())
  );
  const LINK_PATTERN = /\[[^\]]*\]\(([^)\s]+)\)/g;

  for (const file of installableFiles(manifest)) {
    const content = fs.readFileSync(file.absPath, "utf8");
    const lines = content.split("\n");

    lines.forEach((line, i) => {
      let match;
      LINK_PATTERN.lastIndex = 0;
      while ((match = LINK_PATTERN.exec(line)) !== null) {
        let target = match[1];
        if (/^(https?:|mailto:|#)/i.test(target)) continue; // external/anchor
        target = target.split("#")[0];
        if (target === "") continue;

        // Rule files are conventionally written with repo-root-relative
        // targets (Cursor convention); docs resolve relative to docs/.
        const baseDir = file.kind === "rule" ? "" : "docs";
        const resolved = normalizeTarget(baseDir, target);
        const basename = resolved.split("/").pop().toLowerCase();

        if (installedSet.has(resolved)) continue;
        if (allowlist.has(basename)) continue;

        fail(
          `Broken non-optional local link in installable content ` +
            `(resolves to nothing in a fresh install, and not in the externalReferences allowlist): ` +
            `${file.label}:${i + 1}: [${target}] -> "${resolved}"`
        );
      }
    });
  }
}

// --- Entry ------------------------------------------------------------------

function run() {
  const manifest = loadManifest();
  if (manifest) {
    checkFileSets(manifest);
    checkDestinationCollisions(manifest);
    checkContentPolicies(manifest);
    checkLocalLinks(manifest);
  }

  if (errors.length > 0) {
    console.error(`Rules-pack verification FAILED (${errors.length} issue(s)):\n`);
    for (const e of errors) console.error(`  - ${e}`);
    process.exit(1);
  }

  console.log("Rules-pack verification passed.");
  console.log(
    `  ${manifest.rules.files.length} rules, ${manifest.documents.length} documents ` +
      `(${manifest.documents.filter((d) => d.installType !== "reference").length} installable, ` +
      `${manifest.documents.filter((d) => d.installType === "reference").length} reference-only), ` +
      `${(manifest.externalReferences || []).length} allowlisted external references.`
  );
}

run();
