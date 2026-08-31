# Cash-first offer — Decision Log

Log every significant technical, product, or architectural decision here.
Format: D001, D002, D003... Never delete entries. Add superseding decisions instead.

---

## D001 — 2026-08-27 Lightweight service-experiment profile; capped repo scaffold

**Decision:** Scaffold this repo as a **capped, lightweight service-experiment profile**, not a full project-starter fill. Project-starter Decision 1 (Pre-Production Path) is answered **Path B — Manual, with an explicit Phase 3 waiver**: game/app pre-production deliverables (`GDD.md`, `VERTICAL_SLICE_SPEC.md`, `SPRINT_TASKS.md`, `ARCHITECTURE.md`) do not apply — the "slice" for this project is a live landing page + working payment links. A **Path E — Service / Offer Track** is proposed in `docs/RUNBOOK_FEEDBACK.md` so this waiver becomes a reusable, named profile instead of a silent one-off deviation from the runbook.

Repo created under **SD-018a** (parent `DECISION_LOG.md` and `studio-ops\docs\DECISIONS.md`) as organizational scaffolding for the standing cash-first / bind-income practice — **not** a flagship, **not** a primary-build assignment.

**Template docs deleted at scaffold** (kept in `project-starter` if ever needed again — nothing lost, template is one click away): `ACCESSIBILITY_CHECKLIST.md`, `AI_FIRST_BUILD_STRATEGY.md`, `ARCHITECTURE.md`, `CHANGELOG.md`, `COMPETITIVE_RESEARCH.md`, `EARLY_ACCESS_PLAN.md`, `ESTIMATION_RETROSPECTIVE.md`, `EXIT_PROTOCOL.md`, `GDD.md`, `MAINTENANCE_TRANSITION.md`, `MARKETING_STRATEGY.md`, `PHASE_TRANSITION_GATES.md`, `PLATFORM_REQUIREMENTS.md`, `PLAYTEST_PLAN.md`, `POSTMORTEM_TEMPLATE.md`, `POST_LAUNCH_MONITORING.md`, `POST_LAUNCH_PLAN.md`, `PREPRO_CONFIG.md`, `RELEASE_CHECKLIST.md`, `ROADMAP_TIMELINE.md`, `SPRINT_TASKS.md`, `TESTING_STRATEGY.md`, `USER_FEEDBACK.md`, `VERTICAL_SLICE_SPEC.md`, `WEEKLY_EXECUTION_TRACKER.md`. Also dropped root-level template tooling not needed in a child repo: `PATCH_NOTES.md`, `TEMPLATE_DECISIONS.md`, `package.json`, `scripts/`, `starter/` (rules-pack tooling authority stays at `project-starter` itself; rules-pack install is explicitly skipped per runbook Phase 5 — this is a Workflow Tool / simple-scripts profile, pointer files are enough).

**Explicitly not created:** `clients/` and `kits/` folders. Both are premature — see `docs/GROWTH.md` for the plan (separate repo per client engagement; kit folder only after the Track B gate in `docs/OWNED_ARTIFACT_DECISION.md` is met). An empty `kits/` folder at scaffold would invite building a kit to avoid doing outreach, which `OWNED_ARTIFACT_DECISION.md` Rule 1 forbids.

**Wiki overview deferred** to the day-14 review (2026-09-12) rather than created at scaffold — this experiment may be killed by then, and a wiki page for a killed experiment is stale-knowledge debt.

**Rationale:** SD-018/SD-018a authorize this as capped scaffolding for a 14/30-day paid-service experiment, not a software product. Building the full 30+ file project-starter template would cost time this experiment's own `KILL_CRITERIA.md` explicitly names as the failure mode ("building more product is how this fails when the problem is distribution").

**Tradeoffs:** Considered keeping the pack as flat docs with no repo at all (rejected — Ryan wants a standing, reusable home for future bind-income reopenings, not just this one campaign) and considered the full unmodified project-starter template (rejected as overbuild for a one-page storefront — see `docs/HANDOFF_REPO_SETUP_PLAN_AUDIT.md` finding F05).

**Status:** Active

---

## D002 — 2026-08-29 Service terms approach (Package A/B v1)

**Decision:** Publish **DIY Service Terms** (`docs/SERVICE_TERMS.md` → `landing/terms.html`) with **layered acceptance**, not DocuSign or wet signature for v1 at $497 / $1,200.

**Acceptance stack:**

1. Public terms URL (footer + dedicated page)
2. Landing copy: "By paying you agree to service terms"
3. Stripe payment (consideration)
4. Intake Done-check referencing terms URL (recommended)
5. Package B: email **BRIEF APPROVED** locks SOW

**Lawyer:** Optional **1-hour business attorney review** recommended before heavy outreach and before first Package B client (IP assignment, governing state). Not blocking publish of static terms page.

**FTF:** Category-level templates planned in `docs/LEGAL_RESEARCH_NOTES.md` — UGC and digital-download terms **before** those SKUs go live, not now.

**Rationale:** Sub-$5K fixed consulting engagements commonly use clear written terms + payment-as-acceptance; clickwrap on intake strengthens enforceability vs browsewrap footer-only. DocuSign adds friction without proportional risk reduction at this tier (see research notes).

**Tradeoffs:** DIY terms may miss state-specific nuances — `[CONFIRM STATE]` placeholder until Ryan sets venue. Chargeback defense relies on keeping email/intake/brief trail.

**Status:** Active
