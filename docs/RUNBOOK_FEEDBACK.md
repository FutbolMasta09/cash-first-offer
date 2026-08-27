# Runbook Feedback — Cash-first offer

Append-only log of gaps, improvements, or changes needed in the new project runbook or starter template.
Reviewed at postmortem and phase gates. Approved changes get applied to the wiki runbook + template repo.

**Canonical runbook:** `C:\App Development\llm-wiki\coding\runbooks\new-project-runbook.md`
**Template repo:** `C:\App Development\30-tools\project-starter\` (push to GitHub `project-starter`)

---

## How AI Tools Should Flag Gaps

When working in this project, if you notice something that should have been in the starter template or runbook:

Format: `📝 RUNBOOK GAP: [description] — logged to docs/RUNBOOK_FEEDBACK.md`

Then append an entry below.

---

## Log Format

```
## [YYYY-MM-DD] [Add / Remove / Change]
- **What:** [description of the gap or improvement]
- **Why:** [what went wrong or what would have helped]
- **Suggested fix:** [how the runbook or template should change]
- **Status:** Open / Applied / Rejected
```

---

## Entries

<!-- Append entries here. Never delete. Add Status: Applied when incorporated into the wiki runbook. -->

## 2026-08-27 Add

- **What:** Runbook Phase 2 Decision 1 only has a formal defer mechanism for **Path D — Story-First Track**. Paths A/B/C all carry the same Phase 3 gate ("all deliverables filled + Go/No-Go logged before proceeding"). This project needed Path B (Manual) but with the game/app pre-production deliverables (GDD, Vertical Slice Spec, Sprint Tasks) waived — a paid service/offer experiment has no code deliverable at scaffold, only an offer + storefront.
- **Why:** Without a named path, the waiver exists only as a D001 note in one project's `docs/DECISIONS.md`. A future AI session reading `PROJECT_CONFIG.md` = "Path B" with four empty required docs would try to fill them, or flag the project as blocked at the Phase 3 gate, repeatedly — this is exactly the kind of runbook mismatch that causes confusion (see `HANDOFF_REPO_SETUP_PLAN_AUDIT.md` finding F04 for this project's own audit trail).
- **Suggested fix:** Add **Path E — Service / Offer Track** to Decision 1 in `docs/PROJECT_CONFIG.md` and the runbook: pre-production deliverables become `TARGET_AUDIENCE.md`, `MONETIZATION.md` (packages + pricing), `KILL_CRITERIA.md`, and offer copy — no GDD/Slice Spec/Sprint Tasks/Architecture required; "slice" = a live landing page + working payment links. Gate stays the same in spirit (must-ship deliverables filled before declaring Phase 1 done) but the deliverable list matches a paid-service offer instead of a software product.
- **Status:** Open — proposed by this project; not yet applied to the wiki runbook or `project-starter` template.

