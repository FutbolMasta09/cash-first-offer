#!/usr/bin/env node

// Rules-pack test harness. Dependency-free; uses only Node built-ins.
//
// Every fixture is created under the OS temp directory and removed in a
// `finally` block. This harness never writes outside os.tmpdir() and never
// touches Sticker Quest or any other live project repository — it reads this
// repo's own pack read-only and copies what it needs into sandboxes.
//
// Run: npm run rules:pack:test

const fs = require("fs");
const os = require("os");
const path = require("path");
const { spawnSync } = require("child_process");

const repoRoot = path.resolve(__dirname, "..");
const packRoot = path.join(repoRoot, "starter", "rules-pack");
const manifest = JSON.parse(
  fs.readFileSync(path.join(packRoot, "manifest.json"), "utf8")
);

// --- fixture plumbing -------------------------------------------------------

const tempDirs = [];

function makeTempDir(label) {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), `rules-pack-${label}-`));
  tempDirs.push(dir);
  return dir;
}

function cleanupAll() {
  for (const dir of tempDirs.splice(0)) {
    try {
      fs.rmSync(dir, { recursive: true, force: true });
    } catch {
      /* best effort — temp dir, OS will reclaim */
    }
  }
}

// A sandbox copy of just the pieces the scripts need: scripts/ + the pack.
// Mutating a sandbox can never affect the real pack.
function makeSandboxStarter(label, { withSpaces = false } = {}) {
  const base = makeTempDir(label);
  const root = withSpaces ? path.join(base, "starter with spaces") : base;
  fs.mkdirSync(root, { recursive: true });
  fs.cpSync(path.join(repoRoot, "scripts"), path.join(root, "scripts"), {
    recursive: true,
  });
  fs.cpSync(packRoot, path.join(root, "starter", "rules-pack"), {
    recursive: true,
  });
  return root;
}

function makeTargetDir(label, { withSpaces = false } = {}) {
  const base = makeTempDir(label);
  const target = withSpaces ? path.join(base, "my new project") : path.join(base, "target");
  fs.mkdirSync(target, { recursive: true });
  return target;
}

// Every spawn goes through here. If the child process could not launch at
// all, spawnSync returns status === null and puts the reason in .error —
// reporting a bare "exit null" hides real environment problems (missing
// binary, PATH issues, EACCES), so surface the actual message instead.
function spawnChecked(label, command, args, options) {
  const result = spawnSync(command, args, options);
  result.launchFailure =
    result.error || result.status === null
      ? `${label} could not launch: ${
          result.error ? result.error.message : "no exit status (signal: " + result.signal + ")"
        }`
      : null;
  return result;
}

// Renders a child result for failure details: the spawn error when the
// process never ran, otherwise the exit code.
function describe(result) {
  return result.launchFailure ? result.launchFailure : `exit ${result.status}`;
}

function runVerify(starterRoot = repoRoot) {
  return spawnChecked(
    "verify-rules-pack.js",
    process.execPath,
    [path.join(starterRoot, "scripts", "verify-rules-pack.js")],
    { encoding: "utf8" }
  );
}

function runInstall(targetPath, starterRoot = repoRoot) {
  return spawnChecked(
    "install-rules-pack.js",
    process.execPath,
    [path.join(starterRoot, "scripts", "install-rules-pack.js"), targetPath],
    { encoding: "utf8" }
  );
}

function readSandboxManifest(starterRoot) {
  return JSON.parse(
    fs.readFileSync(
      path.join(starterRoot, "starter", "rules-pack", "manifest.json"),
      "utf8"
    )
  );
}

function writeSandboxManifest(starterRoot, data) {
  fs.writeFileSync(
    path.join(starterRoot, "starter", "rules-pack", "manifest.json"),
    JSON.stringify(data, null, 2),
    "utf8"
  );
}

// True only when both files exist and are byte-for-byte identical.
function sameBytes(pathA, pathB) {
  if (!fs.existsSync(pathA) || !fs.existsSync(pathB)) return false;
  return fs.readFileSync(pathA).equals(fs.readFileSync(pathB));
}

// A "fails as expected" helper: the process must have actually run, exited
// nonzero, and reported the expected reason. A process that never launched
// is a harness/environment problem, not a passing negative test.
function failsWith(result, pattern) {
  return (
    !result.launchFailure &&
    result.status !== 0 &&
    pattern.test(result.stderr || "")
  );
}

// --- result tracking --------------------------------------------------------

const results = [];

function test(name, fn) {
  let passed = false;
  let detail = "";
  try {
    const outcome = fn();
    if (outcome && typeof outcome === "object") {
      passed = Boolean(outcome.passed);
      detail = outcome.detail || "";
    } else {
      passed = Boolean(outcome);
    }
  } catch (err) {
    passed = false;
    detail = `threw: ${err.message}`;
  }
  results.push({ name, passed, detail });
  const status = passed ? "PASS" : "FAIL";
  console.log(`${status}  ${name}${detail ? " — " + detail : ""}`);
}

// --- the 17 cases -----------------------------------------------------------

function runAllTests() {
  // 1
  test("Canonical manifest/pack verification passes", () => {
    const r = runVerify();
    return {
      passed: r.status === 0,
      detail:
        r.status === 0
          ? (r.stdout || "").trim().split("\n").pop().trim()
          : describe(r),
    };
  });

  // 2
  test("Missing manifest-listed file fails verification", () => {
    const sandbox = makeSandboxStarter("missing");
    fs.rmSync(
      path.join(sandbox, "starter", "rules-pack", ".cursor", "rules", "health-check.mdc")
    );
    const r = runVerify(sandbox);
    return {
      passed: failsWith(r, /missing from disk.*health-check\.mdc/i),
      detail: "missing rule reported",
    };
  });

  // 3
  test("Unexpected file in pack fails verification", () => {
    const sandbox = makeSandboxStarter("unexpected");
    fs.writeFileSync(
      path.join(sandbox, "starter", "rules-pack", ".cursor", "rules", "not-in-manifest.mdc"),
      "# stray rule\n",
      "utf8"
    );
    const r = runVerify(sandbox);
    return {
      passed: failsWith(r, /Unexpected rule file.*not-in-manifest\.mdc/i),
      detail: "stray pack file reported",
    };
  });

  // 4
  test("Destination collision fails verification", () => {
    const sandbox = makeSandboxStarter("collision");
    const m = readSandboxManifest(sandbox);
    const installable = m.documents.filter((d) => d.installType === "docs");
    installable[1].installAs = installable[0].installAs; // force a clash
    writeSandboxManifest(sandbox, m);
    const r = runVerify(sandbox);
    return {
      passed: failsWith(r, /Destination collision/i),
      detail: `both install as ${installable[0].installAs}`,
    };
  });

  // 5
  test("Sticker Quest tooling-host wording fails verification", () => {
    const sandbox = makeSandboxStarter("tooling-host");
    const victim = path.join(
      sandbox, "starter", "rules-pack", "docs", "PLANNING_CADENCE.md"
    );
    fs.appendFileSync(
      victim,
      "\nOpen Cursor with sticker-quest as the active project before running the pack.\n",
      "utf8"
    );
    const r = runVerify(sandbox);
    return {
      passed: failsWith(r, /tooling-host instruction/i),
      detail: "tooling-host wording reported",
    };
  });

  // 6
  test("Named-project authority fails, including across adjacent lines", () => {
    const sandboxSingle = makeSandboxStarter("authority-single");
    fs.appendFileSync(
      path.join(sandboxSingle, "starter", "rules-pack", "docs", "STRATEGY_HORIZONS.md"),
      "\nNull Sigil is always primary for this workspace.\n",
      "utf8"
    );
    const single = runVerify(sandboxSingle);

    const sandboxSplit = makeSandboxStarter("authority-split");
    fs.appendFileSync(
      path.join(sandboxSplit, "starter", "rules-pack", "docs", "STRATEGY_HORIZONS.md"),
      "\nRemember that Null Sigil\nis always primary for this workspace.\n",
      "utf8"
    );
    const split = runVerify(sandboxSplit);

    const singleOk = failsWith(single, /portfolio authority/i);
    const splitOk = failsWith(split, /portfolio authority/i);
    return {
      passed: singleOk && splitOk,
      detail: `same-line: ${singleOk}, split across lines: ${splitOk}`,
    };
  });

  // 7
  test("Hardcoded absolute path fails verification", () => {
    const sandbox = makeSandboxStarter("abs-path");
    fs.appendFileSync(
      path.join(sandbox, "starter", "rules-pack", "docs", "PLANNING_CADENCE.md"),
      "\nSee D:\\Some\\Hardcoded\\Location\\notes.md for details.\n",
      "utf8"
    );
    const r = runVerify(sandbox);
    return {
      passed: failsWith(r, /hardcodes an absolute path/i),
      detail: "absolute path reported",
    };
  });

  // 8
  test("Broken non-optional local link fails verification", () => {
    const sandbox = makeSandboxStarter("broken-link");
    fs.appendFileSync(
      path.join(sandbox, "starter", "rules-pack", "docs", "PLANNING_CADENCE.md"),
      "\nSee [the missing doc](TOTALLY_NOT_REAL_FILE.md) for details.\n",
      "utf8"
    );
    const r = runVerify(sandbox);
    return {
      passed: failsWith(r, /Broken non-optional local link/i),
      detail: "unresolvable link reported",
    };
  });

  // 9
  test("Fresh install produces every manifest-declared destination", () => {
    const target = makeTargetDir("fresh");
    const r = runInstall(target);
    const missing = [];
    for (const f of manifest.rules.files) {
      if (!fs.existsSync(path.join(target, ".cursor", "rules", f))) missing.push(f);
    }
    for (const d of manifest.documents) {
      if (d.installType === "reference") continue;
      const base = d.installType === "docs" ? path.join(target, "docs") : target;
      if (!fs.existsSync(path.join(base, d.installAs))) missing.push(d.installAs);
    }
    const expected =
      manifest.rules.files.length +
      manifest.documents.filter((d) => d.installType !== "reference").length;
    return {
      passed: r.status === 0 && missing.length === 0,
      detail: `${expected} destinations, ${missing.length} missing`,
    };
  });

  // 10
  test("Install works when source and target paths contain spaces", () => {
    const sandbox = makeSandboxStarter("spaces-src", { withSpaces: true });
    const target = makeTargetDir("spaces-dst", { withSpaces: true });
    const r = runInstall(target, sandbox);
    const landed =
      fs.existsSync(path.join(target, ".cursor", "rules", "health-check.mdc")) &&
      fs.existsSync(path.join(target, "docs", "ROADMAP_TIMELINE.md"));
    return {
      passed: r.status === 0 && landed,
      detail: `${describe(r)}, files landed: ${landed}`,
    };
  });

  // 11
  test("Existing identical files are skipped", () => {
    const target = makeTargetDir("identical");
    const first = runInstall(target);
    const second = runInstall(target);
    const skipCount = (second.stdout || "")
      .split("\n")
      .filter((l) => l.startsWith("Identical, skipped:")).length;

    // Every installable artifact should be recognised as identical on the
    // second pass: each rule, each installable document/root file, and the
    // init-weekly-ops script. An approximate ">0" check would pass even if
    // most files were silently missed, so require the exact total.
    const expectedSkips =
      manifest.rules.files.length +
      manifest.documents.filter((d) => d.installType !== "reference").length +
      1; // scripts/init-weekly-ops.js

    return {
      passed:
        first.status === 0 && second.status === 0 && skipCount === expectedSkips,
      detail: `${skipCount} identical skips (expected exactly ${expectedSkips}); first ${describe(
        first
      )}, second ${describe(second)}`,
    };
  });

  // 12
  test("Existing different doc, rule, and init-weekly-ops.js are preserved with template copies", () => {
    const target = makeTargetDir("preserve");
    fs.mkdirSync(path.join(target, "docs"), { recursive: true });
    fs.mkdirSync(path.join(target, ".cursor", "rules"), { recursive: true });
    fs.mkdirSync(path.join(target, "scripts"), { recursive: true });

    const docBody = "# my roadmap — keep\n";
    const ruleBody = "# my health-check rule — keep\n";
    const scriptBody = "// my init-weekly-ops — keep\n";
    const docPath = path.join(target, "docs", "ROADMAP_TIMELINE.md");
    const rulePath = path.join(target, ".cursor", "rules", "health-check.mdc");
    const scriptPath = path.join(target, "scripts", "init-weekly-ops.js");
    fs.writeFileSync(docPath, docBody, "utf8");
    fs.writeFileSync(rulePath, ruleBody, "utf8");
    fs.writeFileSync(scriptPath, scriptBody, "utf8");

    const r = runInstall(target);

    const docIntact = fs.readFileSync(docPath, "utf8") === docBody;
    const ruleIntact = fs.readFileSync(rulePath, "utf8") === ruleBody;
    const scriptIntact = fs.readFileSync(scriptPath, "utf8") === scriptBody;

    // "Correct template copies" means byte-identical to the canonical
    // incoming source, not merely present — an empty or stale template file
    // would satisfy an existence-only check.
    const docTplPath = path.join(target, "docs", "ROADMAP_TIMELINE.template.md");
    const ruleTplPath = path.join(
      target, ".cursor", "rules", "health-check.mdc.template"
    );
    const scriptTplPath = path.join(
      target, "scripts", "init-weekly-ops.js.template"
    );

    const docTplMatches = sameBytes(
      docTplPath, path.join(packRoot, "docs", "ROADMAP_TIMELINE_TEMPLATE.md")
    );
    const ruleTplMatches = sameBytes(
      ruleTplPath, path.join(packRoot, ".cursor", "rules", "health-check.mdc")
    );
    const scriptTplMatches = sameBytes(
      scriptTplPath, path.join(repoRoot, "scripts", "init-weekly-ops.js")
    );

    return {
      passed:
        r.status === 0 &&
        docIntact && ruleIntact && scriptIntact &&
        docTplMatches && ruleTplMatches && scriptTplMatches,
      detail: `originals intact (doc/rule/script): ${docIntact}/${ruleIntact}/${scriptIntact}, templates byte-match canonical source: ${docTplMatches}/${ruleTplMatches}/${scriptTplMatches}`,
    };
  });

  // 13
  test("Pre-existing conflicting template fails clearly without overwrite", () => {
    const target = makeTargetDir("tpl-conflict");
    fs.mkdirSync(path.join(target, "docs"), { recursive: true });
    const docPath = path.join(target, "docs", "ROADMAP_TIMELINE.md");
    const tplPath = path.join(target, "docs", "ROADMAP_TIMELINE.template.md");
    const docBody = "# mine — differs from pack\n";
    const tplBody = "# stale template — also differs from pack\n";
    fs.writeFileSync(docPath, docBody, "utf8");
    fs.writeFileSync(tplPath, tplBody, "utf8");

    const r = runInstall(target);
    const docIntact = fs.readFileSync(docPath, "utf8") === docBody;
    const tplIntact = fs.readFileSync(tplPath, "utf8") === tplBody;
    const noSuccessClaim = !/Rules pack install complete/.test(r.stdout || "");
    // "Fails clearly" means the refusal is actually explained to the user,
    // not just a bare nonzero exit.
    const explainedRefusal = /Refusing to overwrite either/i.test(r.stderr || "");

    return {
      passed:
        !r.launchFailure &&
        r.status !== 0 &&
        docIntact && tplIntact &&
        noSuccessClaim && explainedRefusal,
      detail: `${describe(r)}, both files untouched: ${
        docIntact && tplIntact
      }, explicit refusal message: ${explainedRefusal}`,
    };
  });

  // 14
  test("Existing package.json fields and conflicting ops:week:init are unchanged", () => {
    const target = makeTargetDir("pkg-preserve");
    const original = {
      name: "pre-existing-project",
      version: "3.2.1",
      private: true,
      description: "must survive install",
      dependencies: { "left-pad": "^1.0.0" },
      scripts: {
        "ops:week:init": "node ./my/custom/path.js",
        build: "vite build",
      },
    };
    const pkgPath = path.join(target, "package.json");
    fs.writeFileSync(pkgPath, JSON.stringify(original, null, 2), "utf8");

    const r = runInstall(target);
    const after = JSON.parse(fs.readFileSync(pkgPath, "utf8"));

    const sameScript = after.scripts["ops:week:init"] === "node ./my/custom/path.js";
    const fieldsKept =
      after.name === original.name &&
      after.version === original.version &&
      after.description === original.description &&
      after.dependencies["left-pad"] === "^1.0.0" &&
      after.scripts.build === "vite build";

    return {
      passed: r.status === 0 && sameScript && fieldsKept,
      detail: `conflicting script untouched: ${sameScript}, other fields kept: ${fieldsKept}`,
    };
  });

  // 15
  test("Invalid existing package.json exits nonzero and never reports completion", () => {
    const target = makeTargetDir("pkg-invalid");
    fs.writeFileSync(path.join(target, "package.json"), "{ not valid json ", "utf8");
    const r = runInstall(target);
    const noSuccessClaim = !/Rules pack install complete/.test(r.stdout || "");
    return {
      passed: r.status !== 0 && /not valid JSON/i.test(r.stderr || "") && noSuccessClaim,
      detail: `${describe(r)}, no false success: ${noSuccessClaim}`,
    };
  });

  // 16
  test("Reference-only documents are not installed", () => {
    const target = makeTargetDir("reference-only");
    // The install must actually succeed first — a failed install installs
    // nothing at all, which would trivially "leak zero" reference docs.
    const r = runInstall(target);
    const referenceDocs = manifest.documents
      .filter((d) => d.installType === "reference")
      .map((d) => d.file);
    const leaked = referenceDocs.filter(
      (f) =>
        fs.existsSync(path.join(target, "docs", f)) || fs.existsSync(path.join(target, f))
    );
    return {
      passed: r.status === 0 && leaked.length === 0,
      detail: `install ${describe(r)}; ${referenceDocs.length} reference-only docs, ${
        leaked.length
      } leaked${leaked.length ? ": " + leaked.join(", ") : ""}`,
    };
  });

  // 17
  test("npm run ops:week:init works in a freshly installed project", () => {
    const target = makeTargetDir("weekly-ops");
    runInstall(target);
    const trackerPath = path.join(target, "docs", "WEEKLY_EXECUTION_TRACKER.md");
    const before = fs.readFileSync(trackerPath, "utf8");

    // Pass the whole command as one shell string: npm on Windows is a .cmd
    // shim that spawnSync cannot exec directly, and passing an args array
    // with shell:true is deprecated (DEP0190). Nothing here is interpolated.
    const r = spawnChecked("npm run ops:week:init", "npm run ops:week:init", undefined, {
      cwd: target,
      encoding: "utf8",
      shell: true,
    });

    const after = fs.readFileSync(trackerPath, "utf8");
    // The shipped template contains the literal placeholder
    // "## Week Of: YYYY-MM-DD", so merely finding "Week Of:" proves nothing.
    // Require a real ISO date and that the file actually changed.
    const gotRealWeek = /Week Of:\s*\d{4}-\d{2}-\d{2}/.test(after);
    const changed = after !== before;

    return {
      passed: r.status === 0 && gotRealWeek && changed,
      detail: `${describe(r)}, dated week block appended: ${gotRealWeek}, file changed: ${changed}`,
    };
  });
}

// --- entry ------------------------------------------------------------------

try {
  runAllTests();
} finally {
  cleanupAll();
}

const failed = results.filter((r) => !r.passed);
console.log("\n" + "=".repeat(64));
console.log(`${results.length - failed.length}/${results.length} passed`);

if (failed.length > 0) {
  console.log("\nFAILURES:");
  for (const f of failed) {
    console.log(`  - ${f.name}${f.detail ? " — " + f.detail : ""}`);
  }
  process.exit(1);
}
