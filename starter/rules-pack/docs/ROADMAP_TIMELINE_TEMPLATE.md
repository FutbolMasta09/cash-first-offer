# Roadmap Timeline

This document tracks where the project started, where it is now, and the full schedule to completion. Update the Progress Tracker section at every phase milestone.

---

## PACE CHECK
*(Update this at every milestone)*

| Phase / Milestone | Target Date | Actual Date | Status |
|---|---|---|---|
| Phase 1 | [Target] | [TBD] | IN PROGRESS |
| Phase 2 | [Target] | [TBD] | NOT STARTED |
| Phase 3 | [Target] | [TBD] | NOT STARTED |
| First User Launch | [Target] | [TBD] | NOT STARTED |
| Public Launch | [Target] | [TBD] | NOT STARTED |

**Verdict:** [ON TRACK / AHEAD / BEHIND] — [One sentence on overall pace.]

---

## SECTION A — Day 1 vs. Today

Fill this in once at project start. Update "Today" column at each milestone.

| Area | Day 1 (start date) | Today (last updated: DATE) |
|---|---|---|
| Screens built | [What existed] | [Current count/list] |
| Features working | [What worked] | [Current working features] |
| Content created | [What existed] | [Current content count] |
| Known blockers | [Initial blockers] | [Remaining blockers] |
| Phase | [Starting phase] | [Current phase] |

**Project started:** [DATE]
**Last updated:** [DATE]

---

## SECTION B — Master Timeline

Add phases and milestones specific to this project. Delete or rename phases that do not apply.

| Phase | Goal | Target Date | Key Deliverables |
|---|---|---|---|
| Phase 1 | [Goal] | [Target] | [List deliverables] |
| Phase 2 | [Goal] | [Target] | [List deliverables] |
| Phase 3 | [Goal] | [Target] | [List deliverables] |
| First User Launch | [Who, what experience] | [Target] | [Launch checklist] |
| Public Launch | [Platform, audience] | [Target] | [Store/distribution checklist] |

---

## SECTION B3 — Workflow Tools (Side Sessions)

Standalone productivity tools built alongside this project. Not project deliverables — side builds that directly accelerate specific phases. See your workspace's workflow-tools master list and project pipeline (per the workspace's governing records) for the full tool library.

**How to fill this in:** Run the workflow tools audit (Phase 3d of `NEW_PROJECT_START_MASTER_RUNBOOK.md`). For each relevant tool, add a row below and add a matching USE callout in Section C at the phase where it fires.

| Tool | Build Before | Effort | Value |
|---|---|---|---|
| [Tool name] | [Phase or milestone] | [Sessions + API yes/no] | [What problem it solves for this project] |

**Rule:** Every tool listed here must also have a `**Use [Tool Name]**` callout item in the Section C checklist for the phase where it fires. A tool with no USE callout will be forgotten.

---

## SECTION C — Progress Tracker

One checklist block per phase. Check off items as they are completed. Update status and actual completion date when a phase is done.

---

### Phase 1 — [Phase name]
**Target:** [DATE] | **Status:** IN PROGRESS | **Completed:** [DATE or TBD]

- [ ] [Deliverable 1]
- [ ] [Deliverable 2]
- [ ] [Deliverable 3]
- [ ] Tier 1 device test passed
- [ ] Tier 2 device test passed (if required)
- [ ] Phase postmortem done
- [ ] Rule upgrade pass done

---

### Phase 2 — [Phase name]
**Target:** [DATE] | **Status:** NOT STARTED | **Completed:** [DATE or TBD]

- [ ] [Deliverable 1]
- [ ] [Deliverable 2]
- [ ] [Deliverable 3]
- [ ] Device test passed
- [ ] Phase postmortem done
- [ ] Rule upgrade pass done

---

### Phase 3 — [Phase name]
**Target:** [DATE] | **Status:** NOT STARTED | **Completed:** [DATE or TBD]

- [ ] [Deliverable 1]
- [ ] [Deliverable 2]
- [ ] [Deliverable 3]
- [ ] Device test passed
- [ ] Phase postmortem done
- [ ] Rule upgrade pass done

---

## SECTION D — Marketing Timeline

Use this section to keep marketing aligned with build phases and prevent last-minute launch scramble. Fill in as phases approach — do not leave blank until launch.

**Before any public marketing begins:** Schedule a full marketing strategy session in Plan mode. Define one primary feedback intake channel and publish it consistently in every post CTA.

| Window | Primary Goal | Actions | Exit Criteria |
|---|---|---|---|
| [Phase 1 active] | Foundation | Lock core brand message, collect first screenshots from stable screens, draft one-paragraph product story. | Brand one-liner and screenshot folder ready. |
| [Phase 1 → 2] | Proof of progress | Capture short progress clips, write user-facing value bullets, start a changelog-style build diary using the Devlog Generator tool. | Reusable media pack + value bullets drafted. |
| [Phase 3 + soft test prep] | Trust and readiness | Record one complete test session, document safety/privacy statements in plain English, draft private launch announcement copy. | Private launch message and trust copy approved. |
| [Private launch] | Private launch storytelling | Share launch story with close circle, collect qualitative feedback, log recurring questions to refine public-facing copy. | Feedback summary with top 5 insights. |
| [Public launch prep] | Store readiness | Finalize store description, screenshots, and compliance wording; use Steam Page Builder or App Store equivalent. | Submission-ready store package complete. |
| [Launch window] | Launch + early traction | Publish launch post, ask early users for honest reviews, track first 30-day feedback themes and prioritize top 3 fixes. | 30-day post-launch review completed. |

**Marketing guardrails:** Do not promise features in public-facing copy that are not confirmed for launch scope. Define this list in `PROJECT_CONTEXT.md`.

---

## HOW TO UPDATE THIS FILE

**At session close (milestone hit):**
- Mark completed checklist items with `[x]`
- Update the Pace Check table with actual dates
- Update Section A "Today" column
- Add a one-sentence verdict to the Pace Check

**At phase completion:**
- Set phase Status to COMPLETE and fill in actual completion date
- Run a postmortem and rule upgrade pass
- Rebuild the rules pack

**Never delete old entries** — cross them out or note slippage instead. The history is useful.
