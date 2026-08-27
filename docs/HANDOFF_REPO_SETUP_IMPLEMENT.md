# Handoff — Implement cash-first middle-ground repo (Claude desktop)

**For:** Claude Code **desktop** (implement)  
**Not for:** Cursor Task subagents  
**Date:** 2026-08-27  
**Authority:** Ryan approved middle ground 2026-08-27 — capped private repo NOW + weekend storefront; growth in docs only.  
**Prior audit:** `AUDIT_REPO_SETUP_PLAN_2026-08-27.md` (REVISE) — apply must-fixes F01–F06.  
**Plan:** `C:\Users\ryanf\.cursor\plans\cash-first_repo_setup_2b085e90.plan.md`  
**Workflow:** Cursor = brain/plan; Claude/Codex desktop = implement/audit.

---

## Mission

1. Record **SD-018a** (repo authorized as experiment/revenue-engine scaffolding).
2. Create private GitHub repo **`cash-first-offer`** from **`FutbolMasta09/project-starter`**.
3. Migrate the existing pack into a **capped** nested repo at `C:\App Development\04-experiments\cash-first-offer` using the **safe Git sequence** (no gitlink window).
4. Leave **growth plans in docs** (`docs/GROWTH.md`) — do **not** create `clients/` or `kits/` folders.
5. Retarget landing handoff to `landing/`; leave payment links for Ryan to fill.
6. Nested initial commit. **Do not push** until Ryan explicitly says push.

---

## Paste this into Claude

```
Implement the middle-ground cash-first repo setup.

Read first:
- C:\App Development\docs\AI_WORKSPACE_ENTRY.md
- C:\App Development\00-START-HERE.md
- C:\App Development\llm-wiki\PROTOCOLS.md
- C:\App Development\04-experiments\cash-first-offer\HANDOFF_REPO_SETUP_IMPLEMENT.md (this file)
- C:\App Development\04-experiments\cash-first-offer\AUDIT_REPO_SETUP_PLAN_2026-08-27.md
- C:\Users\ryanf\.cursor\plans\cash-first_repo_setup_2b085e90.plan.md

Follow the Exact steps in the handoff top to bottom.
Do not create clients/ or kits/ folders.
Do not push nested or parent repos unless I say "push".
Do not build the landing HTML in this session (only prepare landing/ + update handoff).
When done: report paths changed, commit SHAs, and remaining Ryan actions (payment links, push approval, landing build).
```

---

## Exact steps (do in order)

### Step 0 — Preflight (read-only)

- Confirm pack exists at `C:\App Development\04-experiments\cash-first-offer\` (flat docs, tracked by parent).
- Confirm `project-starter` remote: `FutbolMasta09/project-starter`.
- Note parent dirty/untracked: leave `90-archive/workspace-reports/project-health-report-2026-08-14.md` **untouched** (F10). Stage **exact paths only** forever.

### Step 1 — SD-018a + strike stale “no repo” lines (F01 / F09)

**A. Parent `C:\App Development\DECISION_LOG.md`** — add at top (after the format block, before other entries):

```markdown
## SD-018a — Experiment repo authorized for cash-first revenue engine
**Date:** 2026-08-27
**Chose:** Authorize a private nested Git repository `cash-first-offer` under `04-experiments\` as organizational scaffolding for the standing cash-first / bind-income practice. First campaign remains the SD-018 14/30-day offer. This is **not** a flagship, **not** a primary-build assignment, and does **not** permanently close SR-04.
**Why:** Ryan wants a durable home for offer docs, storefront, and future reopenings when the household needs nearer-term cash; weekend storefront (payment links + landing + outreach) proceeds in parallel.
**Rejected:** Waiting for first deposit before any repo (rejected for standing-capability reasons); oversized full project-starter fill; creating clients/kits folders at scaffold.
**Boundary:** Expires with SD-018 day-30 (2026-09-26) unless Ryan promotes or extends. Package B client deliverables use **separate repos** from day one. Kira Calendar remains out of this cash path.
```

**B. `studio-ops\docs\DECISIONS.md`** — append SD-018a mirroring the above (Status: ADOPTED; reference parent log).

**C. Strike/replace stale lines** in the **current pack on disk** (before migration):

- `README.md` — remove “No flagship Git repo until…”; replace with: repo authorized under SD-018a; still not primary build.
- `HANDOFF_LANDING_PAGE.md` — remove “No experiment Git repo yet,” “throwaway unless Ryan says create repo,” and paste-prompt “Do not create a flagship Git repo…”. Retarget: build into `landing/` in this repo; Payment Links only; still no SaaS.

**D. Update** `PROJECT_CONTEXT.md` / pack README banner:  
`EXPERIMENT · SD-018 / SD-018a · expires 2026-09-26 unless promoted`

Commit parent governance + pack text fixes **only if** still under parent tracking — prefer bundling with Step 3 parent commit when possible. If studio-ops is a separate repo, commit SD-018a there separately; **ask Ryan before push**.

### Step 2 — Create GitHub repo

```bash
gh repo create FutbolMasta09/cash-first-offer --private --template FutbolMasta09/project-starter --description "Cash-first revenue engine experiment (SD-018/018a)"
```

If `gh` template create fails: stop and tell Ryan to use GitHub UI **Use this template** on `project-starter` → name `cash-first-offer` → private, then continue with the clone URL.

Verify PRIVATE in `gh repo view FutbolMasta09/cash-first-offer --json isPrivate,url`.

### Step 3 — Parent untrack + ignore (BEFORE any .git at destination) (F02)

Working directory: `C:\App Development`

1. Add to `.gitignore` (with other final-path nested repos; cite null-sigil style, not ai-jam-4 myth):

```
04-experiments/cash-first-offer/
```

2. Update `04-experiments/README.md` and `00-START-HERE.md` to say the live project is the **nested private repo** `cash-first-offer` (SD-018a).
3. Append repo URL to the SD-018 exception note in `PROJECT_PIPELINE.md` (one line; F12).
4. Then:

```bash
git rm -r --cached "04-experiments/cash-first-offer"
```

5. Stage **exact paths only**, e.g.:

- `.gitignore`
- `00-START-HERE.md`
- `04-experiments/README.md`
- `PROJECT_PIPELINE.md`
- `DECISION_LOG.md`
- (and any pack files still tracked that you edited in Step 1 — they will be removed from index by `rm --cached`; content stays on disk for copy)

6. Commit parent, message like:

```
[SD-018a]: Authorize cash-first-offer nested repo; stop tracking pack in parent
```

**Do not push parent** unless Ryan says push.

On-disk folder `04-experiments/cash-first-offer\` must still exist (files intact) after `rm --cached`.

### Step 4 — Clone template to SCRATCH outside workspace

```bash
gh repo clone FutbolMasta09/cash-first-offer "%TEMP%\cash-first-clone"
```

Do **not** clone into `C:\App Development\04-experiments\cash-first-offer` yet.

### Step 5 — Assemble capped tree in scratch

From `%TEMP%\cash-first-clone`:

**Merge rules (F06):**

- Root `README.md` ← pack README content (replace template README).
- Root `PROJECT_CONTEXT.md` ← keep template field names; fill from pack PROJECT_CONTEXT + EXPERIMENT banner + Type: Workflow Tool / revenue engine + Data Risk Tier 3 + status ACTIVE EXPERIMENT.

**Copy pack files into `docs/`:**

- OFFER_COPY, MONETIZATION, KILL_CRITERIA, PAYMENT_LINKS, OUTREACH_14_DAY, OWNED_ARTIFACT_DECISION, DAY_14_KILL_REVIEW, DAY_30_REVIEW
- HANDOFF_LANDING_PAGE (already retargeted)
- HANDOFF_REPO_SETUP_PLAN_AUDIT, HANDOFF_REPO_SETUP_IMPLEMENT, AUDIT_REPO_SETUP_PLAN_2026-08-27 (keep audit trail)

**Author new:**

- `docs/TARGET_AUDIENCE.md` — one paragraph from OFFER_COPY who-for
- `docs/STYLE_GUIDE.md` — thin: direct, no fake testimonials, mobile-first, no purple-glow AI slop; brand = practical operator not agency gloss
- `docs/GROWTH.md` — **plans only**: later `clients/` pattern = separate repo per engagement; later `kits/` after ≥1 sale; Track B decision file; do not create those folders now
- `docs/RUNBOOK_FEEDBACK.md` — propose **Path E — Service / Offer Track** (F04)
- `landing/README.md` — “Static landing lives here; implement via docs/HANDOFF_LANDING_PAGE.md”

**Fill:**

- `docs/PROJECT_CONFIG.md` — decisions locked: Path B + Phase-3 waiver; EA No; Closed; Solo; Sequential; Playtest No; Entity No
- `docs/DECISIONS.md` — **D001** lightweight service-experiment / Phase-3 waiver; slice = live landing + payment links; inventory of deleted template docs; wiki deferred to day-14; no clients/kits at scaffold
- `docs/SECURITY_CHECKLIST.md` — Tier 3; re-check to Tier 1 when **any** real client brief/name/contact/business data enters by any route; also re-check on hosted forms / analytics SDK / Stripe Elements
- `docs/LAST_SESSION.md` — scaffold complete; next = payment links + landing build + outreach
- `.gitignore` — keep template; **add** `.env`, `*.pem`, client PII patterns, e.g. `clients/` (future), `**/customer-data/`, `**/*-secret*`

**Delete** unused heavy template docs (GDD, Steam, EA, playtest, full phase gates, etc.). List deletions in D001. Do **not** use `_template_unused/`.

**Do not create:** `clients/`, `kits/`, `PATCH_NOTES.md`.

**Rules pack install:** skip.

### Step 6 — Swap directories

1. Rename on-disk pack:  
   `04-experiments\cash-first-offer` → `04-experiments\_cash-first-offer-pack-migrated`
2. Move `%TEMP%\cash-first-clone` → `04-experiments\cash-first-offer`
3. Parent `git status` must show **nothing** under `04-experiments/cash-first-offer` (ignored).
4. Copy any last-second edits from `_cash-first-offer-pack-migrated` if needed, then Ryan may delete the `_pack-migrated` folder after verifying (or leave until he confirms). Prefer **don’t delete** until Ryan OK.

### Step 7 — Nested repo commit

```bash
cd "C:\App Development\04-experiments\cash-first-offer"
git status
git add -- <exact paths>
git commit -m "[SD-018a]: Scaffold capped cash-first revenue-engine experiment repo"
```

**Do not `git push`** until Ryan says so.

### Step 8 — studio-ops

If SD-018a was edited in studio-ops, commit there with exact paths. No push unless asked.

---

## Acceptance criteria

- [ ] SD-018a in parent DECISION_LOG + studio-ops DECISIONS
- [ ] GitHub `FutbolMasta09/cash-first-offer` exists and is private
- [ ] Parent ignores `04-experiments/cash-first-offer/`; pack no longer tracked by parent
- [ ] Nested repo at that path with capped docs + `landing/README.md` + `docs/GROWTH.md`
- [ ] No `clients/` or `kits/` directories
- [ ] No stale “no repo yet” instructions in README / landing handoff
- [ ] Tier 3 + broad re-check documented
- [ ] D001 + RUNBOOK_FEEDBACK Path E present
- [ ] Nested commit exists locally; pushes pending Ryan
- [ ] Health-report file never staged

## Out of scope

- Building landing HTML/CSS
- Creating Stripe/PayPal links (Ryan)
- Fiverr/Upwork
- First client tool
- Wiki page
- `git add .` / `git add -A` on parent

## Stop condition

Report: parent commit hash (if any), nested commit hash, GitHub URL, what’s left for Ryan (fill PAYMENT_LINKS, approve pushes, paste HANDOFF_LANDING_PAGE for page build, start outreach).

**Workflow:** Cursor = brain/plan; Claude/Codex desktop = implement/audit.
