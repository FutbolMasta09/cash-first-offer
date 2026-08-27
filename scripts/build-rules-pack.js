#!/usr/bin/env node

// DEPRECATED — `rules:pack:build` is retired. This script no longer copies
// or regenerates anything. The pack at starter/rules-pack/ is maintained
// directly by hand-editing its files; there is no build/generation step.
//
// This wrapper exists so `npm run rules:pack:build` (an old habit, or an
// older runbook someone hasn't re-read yet) doesn't fail with a confusing
// "missing source file" error. It explains the deprecation and then runs
// the same validator `rules:pack:verify` uses, so the command still does
// something useful: confirms the pack is currently valid.

const path = require("path");
const { spawnSync } = require("child_process");

function run() {
  console.log(
    "`rules:pack:build` is deprecated. The rules pack is now maintained " +
      "directly at starter/rules-pack/ — there is no generation step to run."
  );
  console.log("Running `rules:pack:verify` instead...\n");

  const verifyScript = path.join(__dirname, "verify-rules-pack.js");
  const result = spawnSync(process.execPath, [verifyScript], {
    stdio: "inherit",
  });

  if (result.error) {
    console.error(`\nCould not run rules:pack:verify: ${result.error.message}`);
    process.exit(1);
  }

  process.exit(result.status ?? 1);
}

run();
