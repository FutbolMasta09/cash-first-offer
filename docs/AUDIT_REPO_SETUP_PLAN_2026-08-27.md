# Cash-first repo setup plan — Claude audit (2026-08-27)

**Auditor:** Claude (desktop)  
**Verdict:** REVISE (with authorization blocker F01)  
**Source:** Pasted into Cursor by Ryan after running entry protocol read-only

Full findings preserved below for authority. Cursor applies must-fixes to the setup plan; Ryan decides sequencing (landing-first vs repo-first) and any SD-018a authorization.

---

# Cash-first repo setup plan — audit

**Verdict:** REVISE (with one authorization blocker Ryan must clear personally — F01)
**One-line summary:** The Git mechanics are mostly sound but the sequence has a real gitlink-embed window; more importantly, three separate governing documents currently say "no new repo yet," and the scaffold is roughly 3× the size the next 14 days need.

## Findings

| ID | Severity | Topic | Finding | Recommended fix |
|----|----------|-------|---------|-----------------|
| **F01** | **BLOCKER** | Authority | Three authority documents say no repo yet: SD-018 Boundary, `DECISION_LOG.md` 2026-08-27 Boundary, and the pack's own committed `README.md`. `HANDOFF_LANDING_PAGE.md` says it twice more. Reading "flagship" narrowly is Ryan's call, not Cursor's or Claude's. | Ryan writes SD-018a + matching parent `DECISION_LOG` line before execution. Strike stale "no repo" lines from pack README and `HANDOFF_LANDING_PAGE.md` in the same pass. |
| **F02** | **BLOCKER** | Git nesting | Cloning into a path the parent still indexes creates a gitlink (160000) window. `.gitignore` does not protect already-tracked paths. | Parent `git rm -r --cached` + ignore + **commit** BEFORE any `.git` at that path; clone to scratch outside workspace; move finished directory in last. |
| **F03** | HIGH | Security tier | `clients/` at scaffold can hold other people's business data → Tier 1. Re-check trigger was too narrow (mini-tool only). Template `.gitignore` lacks client-PII patterns. | Drop `clients/` for now, or gitignore `clients/*` except `_TEMPLATE/`; broaden tier trigger; add PII patterns to nested `.gitignore`. |
| **F04** | HIGH | Runbook mismatch | "Path B + waive GDD/slice" is a real Phase-3 gate violation; only Path D has a formal defer. | D001 = explicit Phase-3 waiver; `RUNBOOK_FEEDBACK.md` proposes Path E — Service / Offer Track. |
| **F05** | HIGH | Overbuild vs clock | ~18 docs + parent surgery before any payment link. KILL_CRITERIA names this failure mode. | Session 1: payment links + landing. Session 2: repo after landing live or day-14. If repo anyway, cap ~8 files. |
| **F06** | MED | File collision | Pack and template both have root README + PROJECT_CONTEXT; merge rule missing. | Pack README wins at root; pack PROJECT_CONTEXT merges into template header fields. |
| **F07** | MED | Growth seams | `kits/` premature per MONETIZATION / OWNED_ARTIFACT rules. | Drop `kits/` until Track B decision. |
| **F08** | MED | Template selection | Keep STYLE_GUIDE (+ optional MARKETING); drop thin ARCHITECTURE / PLATFORM_REQUIREMENTS for a one-pager. | Swap keep list. |
| **F09** | MED | Stale handoffs | HANDOFF_LANDING_PAGE contradicts post-repo world in three places. | Update in same migration session. |
| **F10** | MED | Dirty state | Unrelated health-report untracked; dirty README line. | Exact paths only; health report separate. |
| **F11** | LOW | Ignore pattern | `04-experiments/ai-jam-4/` reference is wrong precedent (AI Jam lives at root). | Cite `01-studio/null-sigil-game/` style instead. |
| **F12** | LOW | Pipeline slot | No URL field on SD-018 note. | Append to exception note or skip. |
| **F13** | LOW | Session log | PATCH_NOTES duplicates LAST_SESSION. | Drop PATCH_NOTES. |

## Must-fix before Cursor executes

- [ ] F01 — SD-018a + strike stale no-repo lines
- [ ] F02 — parent rm --cached + ignore commit first; clone outside workspace
- [ ] F03 — tier trigger + no premature clients/ (or gitignore)
- [ ] F04 — D001 Phase-3 waiver + RUNBOOK_FEEDBACK Path E
- [ ] F05 — sequencing: landing-first (recommended) vs repo-first capped
- [ ] F06 — README / PROJECT_CONTEXT merge rule
- [ ] F10 — exact paths; health report separate

## Auditor recommendation

Build the storefront this weekend. Let the first deposit tell whether the repo was needed. If Ryan wants the repo anyway, clear F01–F06 first and keep the scaffold small.

**Workflow:** Cursor = brain/plan; Claude/Codex desktop = implement/audit.
