# project-starter — Template Decision Log

Decisions about the template repo itself (not to be confused with `docs/DECISIONS.md`, which is a stub copied into new projects). Log every significant change to the template's structure, files, or runbook here.

Format: TD001, TD002... Never delete entries. Add superseding decisions instead.

---

## TD001 — 2026-07-10 Template gap review + fixes

**Decision:** Reviewed the template against the new professional-dev docs (`SOLO_STUDIO_PLAYBOOK.md`, `AI_SECURITY_GUIDE.md`) created during the 2026-07-10 pipeline revisit. Found and fixed two broken references, then added four gap-fixes.

**Fixed (broken references):**
1. Runbook and `PROJECT_PIPELINE.md` referenced the template folder as `C:\App Development\_project-starter\` (with underscore). Actual folder is `project-starter` (no underscore). Corrected in the runbook (main, template-reference, and execution pages) and `PROJECT_PIPELINE.md`.
2. Runbook Phase 5 instructed running `npm run rules:pack:build` from `null-sigil-game`. That script doesn't exist there — it lives in `sticker-quest/package.json`. Corrected the runbook to point at `sticker-quest`.

**Added (gaps found):**
3. `docs/SECURITY_CHECKLIST.md` — new template file. Previously the only security touchpoint in the whole template was a single checkbox in `RELEASE_CHECKLIST.md`, checked at launch — too thin and too late given AI-generated code's elevated vulnerability rate (per `AI_SECURITY_GUIDE.md`). New file tracks baseline / production / pre-release security posture per project, filled starting Phase 6.
4. `docs/ACCESSIBILITY_CHECKLIST.md` — new template file. Accessibility had zero touchpoints anywhere in the 40-file template. Steam and mobile platforms both surface accessibility to buyers/users. New file covers input, visual, audio/motion, flow, and platform-specific accessibility, filled starting Phase 6.
5. Decision 7 (Business Entity) added to `docs/PROJECT_CONFIG.md`. Nothing in the template previously prompted for LLC timing, EIN, or business bank account setup — relevant now that Null Sigil is approaching its first commercial release.
6. Path D (Story-First Track) added to Decision 1 in `docs/PROJECT_CONFIG.md` and to the runbook's Phase 2 gate. The runbook previously assumed every project knows its tech stack/engine by Phase 2. Memory Game (personal, prose-first, format undecided) didn't fit — this was worked around ad hoc with a bare `docs/` folder outside the template. Path D formalizes that pattern: skip Phases 3–5 until a defined prose milestone is hit, then re-enter the runbook.

**Alternatives considered:**
- Leave the security/accessibility gaps as implicit (assume Ryan remembers to check the Playbook) — rejected, the whole point of the template is to remove reliance on memory.
- Duplicate the full `AI_SECURITY_GUIDE.md` / Playbook content into the template — rejected, would create two sources of truth to keep in sync. Template files are thin per-project tracking sheets that reference the canonical guides instead.
- Build a fully separate "lightweight runbook" for story-first projects — rejected as premature; a single new Path D option inside the existing Decision 1 is enough until a second narrative-first project proves the pattern needs more structure.

**Result:** Template is now 42 files (was 40). File count updated in README.md and the runbook's template-reference page.

**Status:** Active

---

## TD002 — 2026-07-16 Data Risk Tier system + tier re-checks at phase gates

**Decision:** Added a three-tier Data Risk Tier system to the template, following the 2026-07-15 landscape research session (AI-app breach catalogs, OWASP-vulnerability rates in AI-generated code) and the portfolio-level policy logged the same day in `C:\App Development\DECISION_LOG.md` ("Security gate hardening for projects holding third-party user data").

**Changes:**
1. `docs/SECURITY_CHECKLIST.md` — new "Data Risk Tier" section at top: tier declared at kickoff (Tier 1 = holds other people's data; Tier 2 = own-data network surface; Tier 3 = static/offline), each tier mapped to its required security gate. Pre-Release section restructured into all-tier / Tier 1–2 / Tier 1-only rows, adding the 2026 tooling: Claude Code security review, backend platform linter (Supabase database linter), Codex Security CLI as mandatory non-Claude second reviewer for Tiers 1–2, and one-time paid human review for Tier 1.
2. **Tier re-check rule** (Ryan's addition): the tier is re-evaluated at every phase transition gate and immediately when a feature adds/removes accounts, network, storage, third-party services, auto-update, or cloud sync. Re-checks (including "confirmed, no change") are recorded in a table in `SECURITY_CHECKLIST.md`; tier *changes* are logged in `docs/DECISIONS.md`. Enforcement hook added to `docs/PHASE_TRANSITION_GATES.md` ("Every gate, no exceptions").
3. `PROJECT_CONTEXT.md` — Data Risk Tier line added to the header block so every AI session sees the tier without opening the checklist.
4. Runbook Phase 6 updated to declare the tier when `SECURITY_CHECKLIST.md` is first filled.

**Alternatives considered:**
- One-size-fits-all security gate for every project — rejected: disproportionate for account-less games (Lanternfall, Null Sigil) and under-weighted for user-data apps (Kira Calendar); the 2026 breach data shows risk concentrates almost entirely in the backend/user-data tier.
- A new standalone `SECURITY_REVIEW_PROTOCOL.md` — rejected: violates "check for existing docs first"; everything slots into existing files.
- Permanent tier set once at kickoff — rejected by Ryan explicitly: features added or removed mid-production change the risk profile, so the tier must be re-confirmed at every gate.

**Status:** Active

---

## TD003 — 2026-08-03 Project Starter confirmed as rules-pack authority

**Decision:** TD001 item 2 is superseded by the completed tooling migration. Project Starter is the current rules-pack authority. TD001 and TD002 are left byte-for-byte unchanged, per this log's append-only rule at the top of the file — a dated entry records what was true when it was written, and correcting it in place would falsify the record.

**What TD001 item 2 said, and what is true now:**

- TD001 (2026-07-10) recorded that `rules:pack:build` "lives in `sticker-quest/package.json`" and that the runbook was corrected to point at `sticker-quest`. Both statements were accurate then. Both are false now.
- Project Starter (`C:\App Development\30-tools\project-starter`) is the rules-pack tooling authority. The pack at `starter/rules-pack/` is maintained directly by hand-editing its files; there is no generation step.
- `rules:pack:build` and `scripts/build-rules-pack.js` are **kept intentionally, unchanged, as a compatibility/deprecation guard.** They are not dead code and must not be removed. Running the command prints an explanation that the build step is retired, then delegates to `scripts/verify-rules-pack.js` and exits with the validator's status — a clear message and a useful check, rather than a confusing "missing script" error for anyone acting on an older habit or an unread runbook.
- The current commands are `npm run rules:pack:verify` (validate the pack), `npm run rules:pack:test` (harness, writes only to the OS temp directory), and `npm run rules:pack:install "<target project path>"` (install into a named target).
- Current runbooks record the current absolute Project Starter path and designate `C:\App Development\00-START-HERE.md` as the routing authority to consult before assuming that path after any future relocation.
- Sticker Quest's copies — its `scripts/build-rules-pack.js`, its `package.json` entry, and `starter/rules-pack/docs/NEW_PROJECT_START_MASTER_RUNBOOK.md` — remain **frozen historical reference** and are deliberately not updated. Their Sticker-Quest-bound wording is preserved on purpose, not overlooked.

**Alternatives considered:**

- Rewrite TD001 item 2 in place — rejected: this log is append-only by its own rule, and editing a dated entry destroys the record of what was believed at the time.
- Add an inline "superseded" marker inside TD001 — rejected by Ryan: TD001 and TD002 stay completely untouched, and this entry carries the correction on its own.
- Delete `rules:pack:build` and `scripts/build-rules-pack.js` — rejected: a missing script fails with an unhelpful error, while the guard explains the change and still runs a real validation.

**Status:** Active. Supersedes TD001 item 2 only; the rest of TD001 stands.
