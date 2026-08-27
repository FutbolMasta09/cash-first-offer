# Project Configuration — Cash-first offer

Fill this at project setup (Phase 2). Each decision triggers or skips downstream steps.
Log final answers in `docs/DECISIONS.md` as early decision entries.

---

## Decision 1: Pre-Production Path

How will pre-production be run for this project?

- [ ] **Path A: Idea Forge** — BYOK API pipeline: Spark → Blueprint → Slice Spec → Architecture → Sprint Tasks → Coding Package. Import ZIP output into repo.
- [ ] **Path B: Manual** — Fill pre-production docs with AI subscription tools (Windsurf, Claude, Antigravity).
- [ ] **Path C: Hybrid** — Use Idea Forge for specific stages, manual for others.
- [ ] **Path D: Story-First Track** — Project is narrative/prose-first and format (engine, platform, tech stack) isn't decided yet. Skip Phases 3–5 (Pre-Production, Framework Scaffold, Rules Pack) entirely for now. Work stays in prose/outline docs until a defined prose milestone is hit (e.g. "first act drafted," "full outline complete") — only then does the project re-enter the runbook at Phase 2 to make the remaining decisions and choose a format.

**Chosen path:** B — Manual, **with an explicit Phase 3 waiver** (see D001 in `docs/DECISIONS.md`). This is a paid service/offer experiment, not a software product — game-style GDD / Vertical Slice Spec / Sprint Tasks are waived. The "slice" is a live landing page + working payment links. Proposed as a named **Path E — Service / Offer Track** in `docs/RUNBOOK_FEEDBACK.md` for future reuse; not yet applied to the canonical runbook.
**Rationale:** No BYOK pipeline needed for a docs+copy+static-page scaffold; Claude/Codex desktop implement directly from the pack's existing offer copy, monetization, and kill-criteria docs.

**If Path D — Story-First Track:**
- Prose milestone that triggers re-entry to the runbook: [e.g. "family interviews complete + first draft outline"]
- Where prose work lives in the meantime: [e.g. `docs/STORY_DRAFTS.md`, a folder of scene files]
- Target date/window to revisit format decision: [rough estimate, can be vague]

**If Path A or C — Idea Forge stages used:**
| Stage | Run in Idea Forge? | Notes |
|---|---|---|
| Spark / Concept Card | Y / N | |
| Blueprint (GDD) | Y / N | |
| Slice Spec | Y / N | |
| Architecture | Y / N | |
| Sprint Tasks | Y / N | |
| Coding Package export | Y / N | |

**Note:** BYOK uses API credits, not subscription. Estimate cost before running full pipeline on a large project.

→ See `docs/PREPRO_CONFIG.md` for detailed pre-production log.

---

## Decision 2: Early Access Release

Will this project have an Early Access / beta release before v1.0?

- [ ] **Yes** — two-stage launch: EA release → feedback cycle → v1.0 release
- [ ] **No** — single launch event

**Chosen:** No
**Rationale:** Single launch event — a landing page goes live once, no staged rollout. `docs/EARLY_ACCESS_PLAN.md` not created.

**If Yes — EA details:**
- EA scope (what's in): [list]
- EA scope (what's out): [list]
- EA pricing: $[price] (full price at v1.0: $[price])
- EA duration target: [e.g. 3–6 months]
- Update cadence during EA: [e.g. monthly patches]
- Graduation criteria (when does EA end?): [list specific criteria]

**Cascading effects if Yes (check off as handled):**
- [ ] `docs/RELEASE_CHECKLIST.md` has two sections: EA Release + v1.0 Release
- [ ] `docs/EARLY_ACCESS_PLAN.md` created and filled
- [ ] `docs/MONETIZATION.md` updated with EA pricing field
- [ ] `docs/USER_FEEDBACK.md` updated: EA users = co-developers, tighter SLA
- [ ] `docs/POST_LAUNCH_PLAN.md` updated: EA update cadence section
- [ ] EA → v1.0 transition phase added to `docs/ROADMAP_TIMELINE.md`

---

## Decision 3: Open Source vs Closed Source

What is the repo visibility and license model?

- [ ] **Open Source** — public repo, permissive license, community contributions welcome
- [ ] **Closed Source** — private repo, no external contributors
- [ ] **Source Available** — public repo for transparency, restrictive license (no forks/commercial use)

**Chosen:** Closed Source
**License (if not closed):** N/A
**Rationale:** Private offer/pricing strategy and outreach records — no reason for public visibility or contributors.

**Cascading effects if Open Source or Source Available (check off as handled):**
- [ ] `LICENSE` file added to repo root
- [ ] `CONTRIBUTING.md` created
- [ ] `CODE_OF_CONDUCT.md` created
- [ ] `.github/ISSUE_TEMPLATE/` created (bug report + feature request templates)
- [ ] `docs/USER_FEEDBACK.md` updated: GitHub Issues = primary channel
- [ ] `README.md` expanded for public audience
- [ ] Security audit: no secrets, API keys, or private paths in repo history
- [ ] License compatibility with monetization model confirmed

---

## Decision 4: Solo vs Collaborative

Will anyone else contribute code or content to this project?

- [ ] **Solo** — Ryan only (AI tools are the implementation team)
- [ ] **Collaborative** — one or more other humans will contribute

**Chosen:** Solo
**Collaborators (if any):** None. Kira may make one optional promotional post per `PROJECT_CONTEXT.md` Capacity — not a co-founder or contributor to this repo.

**Cascading effects if Collaborative (check off as handled):**
- [ ] Branch strategy documented: `main` protected, feature branches required
- [ ] `CONTRIBUTING.md` created or expanded
- [ ] Shared repo access confirmed and documented
- [ ] Platform credential access documented (who has access to what)
- [ ] Code review process defined
- [ ] `docs/LAST_SESSION.md` protocol updated: must note which collaborator worked last
- [ ] Communication sync method defined: [async docs / Discord / meetings / other]

---

## Decision 5: Parallel vs Sequential

Is this project running alongside another active project?

- [ ] **Parallel** — sharing weekly hours with another active build
- [ ] **Sequential** — this is the only active build project

**Chosen:** Sequential
**If Parallel — other project:** N/A
**Priority rule:** N/A — SD-018 already time-boxes this experiment (day-14 / day-30) against the rest of the studio portfolio; see parent `DECISION_LOG.md` and `studio-ops\docs\DECISIONS.md` SD-018/SD-018a.

**Cascading effects if Parallel (check off as handled):**
- [ ] `docs/WEEKLY_EXECUTION_TRACKER.md` updated: parallel project field + hour split
- [ ] `docs/KILL_CRITERIA.md` updated: pause trigger "primary project needs the time"
- [ ] Priority rule logged in `docs/DECISIONS.md`
- [ ] `PROJECT_PIPELINE.md` status shows parallel relationship
- [ ] Phase timelines in `docs/ROADMAP_TIMELINE.md` adjusted for reduced weekly hours

---

## Decision 6: Public Playtest / Closed Beta

Will this project have external testing before launch?

- [ ] **Yes — Public playtest** (Steam Playtest, TestFlight public, open beta)
- [ ] **Yes — Closed beta** (invite-only)
- [ ] **No** — internal testing only (Ryan + known testers)

**Chosen:** No
**If Yes:**
- Who: [target testers — community, friends, invite list]
- When: [phase gate or date]
- Platform/distribution: [Steam Playtest / TestFlight / itch.io password / other]
- NDA required? [Yes / No]

**Cascading effects if Yes (check off as handled):**
- [ ] `docs/PLAYTEST_PLAN.md` created and filled
- [ ] If closed: NDA decision logged in `docs/DECISIONS.md`
- [ ] `docs/USER_FEEDBACK.md` updated: playtest triage section added
- [ ] `docs/TESTING_STRATEGY.md` updated: playtest row added
- [ ] Playtest timeline slot added to `docs/ROADMAP_TIMELINE.md`
- [ ] Marketing plan updated if public playtest (community building opportunity)

---

## Decision 7: Business Entity

Does this project need its own legal/business structure, or does it fall under an existing one?

- [ ] **Existing entity covers it** — no new setup needed (e.g. covered under an existing LLC)
- [ ] **New entity needed before first sale** — form before Steam page / store listing goes live
- [ ] **Not yet decided** — revisit before first revenue event (Steam Direct fee paid, App Store submission, first sale)

**Chosen:** Not needed for this experiment
**If New — target formation date:** N/A
**Rationale:** Personal sole-prop payments are acceptable per `docs/MONETIZATION.md`; no new legal entity required for this experiment.

**Cascading effects if New entity needed (check off as handled):**
- [ ] LLC filed (state, EIN obtained)
- [ ] Business bank account opened
- [ ] Quarterly estimated tax obligation understood (reference `SOLO_STUDIO_PLAYBOOK.md` Section 7)
- [ ] Budget confirmed for platform fees (Steam Direct $100, Apple $99/yr, Google Play $25, etc.)

---

## Config Summary

| Decision | Choice | EA/OS/Collab specifics |
|---|---|---|
| Pre-production path | B (waived, proposed Path E) | GDD/Slice Spec/Sprint Tasks not applicable |
| Early Access | No | |
| Open Source | Closed | |
| Solo/Collab | Solo | |
| Parallel/Sequential | Sequential | Time-boxed by SD-018 day-14/day-30 |
| Playtest | No | |
| Business Entity | Not needed | Sole-prop payments |

**All decisions logged in:** `docs/DECISIONS.md` D001
**Config filled:** 2026-08-27 — Phase 2
