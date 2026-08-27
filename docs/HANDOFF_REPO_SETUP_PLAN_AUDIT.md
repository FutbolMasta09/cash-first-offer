# Handoff — Audit cash-first repo setup plan (Claude desktop)

**For:** Claude Code or Claude.ai **desktop** (audit / challenge only)  
**Not for:** Cursor Task subagents · **Not for:** implementing the repo yet  
**Date:** 2026-08-27  
**Workflow:** Cursor = brain/plan; Claude/Codex desktop = implement/audit.

---

## Mission

Independently **audit** the proposed plan to turn the cash-first experiment docs pack into its own private Git repo from `project-starter`. Return a clear **PASS / REVISE / BLOCK** with findings Ryan can act on before Cursor executes setup.

Do **not** create the GitHub repo, clone, migrate files, commit, or push unless Ryan separately asks after the audit.

---

## Paste this into Claude

```
Audit only — do not create repos, migrate files, commit, or push.

Read in order:
1. C:\App Development\docs\AI_WORKSPACE_ENTRY.md
2. C:\App Development\00-START-HERE.md
3. C:\App Development\llm-wiki\PROTOCOLS.md
4. C:\App Development\llm-wiki\coding\runbooks\new-project-runbook.md
5. C:\App Development\30-tools\project-starter\README.md
6. C:\App Development\30-tools\project-starter\docs\PROJECT_CONFIG.md (structure)
7. C:\App Development\studio-ops\docs\DECISIONS.md — SD-018 only
8. C:\App Development\DECISION_LOG.md — 2026-08-27 SR-04 temporary hybrid entry
9. Entire pack: C:\App Development\04-experiments\cash-first-offer\
10. Plan under audit: C:\Users\ryanf\.cursor\plans\cash-first_repo_setup_2b085e90.plan.md
   (If missing, use the “Plan summary” section in
   C:\App Development\04-experiments\cash-first-offer\HANDOFF_REPO_SETUP_PLAN_AUDIT.md)

Also skim parent .gitignore nested-repo patterns:
   C:\App Development\.gitignore

Return a structured audit per the Output format in that handoff.
Be an honest advisor — challenge overbuilding, Git nesting risk, and runbook mismatches.
```

---

## Context Ryan already decided

- **Household play:** cash-first paid service (AI kit $497 / mini-tool $1,200), not a game or SaaS.
- **SD-018:** temporary 14/30-day experimental + revenue-engine exception. Not primary build. Day-14 = 2026-09-10; day-30 = 2026-09-26.
- **Kira Calendar:** out of this cash path until Alicia prioritizes it.
- **This ask:** set up a proper private repo for the experiment, organized for now + growth.
- **Cursor** drafted the setup plan; **Claude** audits it before execution.

---

## Plan summary (under audit)

**Goal:** Private nested repo `cash-first-offer` from GitHub template `project-starter`, local path `C:\App Development\04-experiments\cash-first-offer`.

**Creation (locked in plan):**

1. Ryan: GitHub “Use this template” → private `cash-first-offer`
2. Ryan: paste URL into `PROJECT_PIPELINE.md`
3. Cursor: clone, migrate existing pack into `docs/`, add `landing/`, `clients/_TEMPLATE/`, `kits/`, slim template, parent gitignore

**PROJECT_CONFIG locked in plan:**

1. Path B Manual — waive game GDD/slice/sprint; slice = live landing + payment links  
2. EA = No  
3. Closed / private  
4. Solo  
5. Sequential (within experiment; SD-018 timebox)  
6. Playtest = No  
7. Business entity = No  

**Data Risk Tier:** Tier 3 for landing/storefront; re-check Tier 1 only when a client mini-tool holds client data.

**Rules pack install:** Skip (simple workflow / pointer files enough).

**Applies from template:** pointers, PROJECT_CONTEXT, PROJECT_CONFIG, DECISIONS, audience/monetization/kill, LAST_SESSION, SECURITY_CHECKLIST, thin ARCHITECTURE / ROADMAP / PLATFORM_REQUIREMENTS.

**Does not apply:** game GDD, Steam/Inkborne, EA, full phase gates, heavy a11y gauntlet for one-pager, Expo/Godot/SaaS scaffold, full rules-pack install.

**Migration risk the plan tries to handle:** pack is currently tracked by **parent** repo → after nested `.git` exists, parent must `gitignore` `04-experiments/cash-first-offer/` and `git rm -r --cached` old pack paths. Do not absorb nested `.git` into parent.

**Out of setup session:** landing HTML build, Stripe links, Fiverr/Upwork, first client tool.

**Stop condition:** private repo exists, layout organized, D001 + Tier 3 logged, parent ignores nested repo, LAST_SESSION points at payment links + landing handoff.

---

## Audit questions (must answer)

### A. Fit and scope

1. Is a nested private repo the right move **now**, or should the flat pack stay until first deposit?
2. Does “Path B + waive GDD/slice” violate the new-project runbook in a way that will confuse future AI sessions? Prefer a named experiment profile / Path variant?
3. Is skipping rules-pack install correct for this project type?
4. Is Tier 3 correct for storefront-only? Any blind spot (contact forms, analytics, payment redirects)?

### B. Template selection

5. Which template files are **missing** from the “keep” list but needed in week one (e.g. TARGET_AUDIENCE exists in plan but not yet in pack)?
6. Is parking unused docs in `docs/_template_unused/` better than deleting? Any risk of AI treating stubs as active gates?
7. Should `PATCH_NOTES.md` stay, or is `LAST_SESSION.md` enough?

### C. Git / workspace safety

8. Is the rename → clone → migrate → parent gitignore sequence safe on Windows with the folder already named `cash-first-offer` and tracked by parent?
9. Any failure mode where parent still tracks files or embeds the nested repo?
10. Should parent commit the gitignore/`rm --cached` **before** or **after** nested initial commit? Recommended order?

### D. Governance

11. Does creating the repo require any extra DECISION_LOG / SD entry beyond SD-018, or is “repo created” a routine follow-up?
12. Does this conflict with “no primary build” / SR-04 temporary hybrid wording?
13. Is wiki overview (`llm-wiki/.../overview.md`) worth it at scaffold, or defer to day-14?

### E. Growth layout

14. Are `landing/`, `clients/_TEMPLATE/`, `kits/` the right growth seams?
15. Should first Package B mini-tool live **inside** this repo or a separate client repo from day one?
16. Any overbuild in the plan that slows weekend storefront (payment links + landing)?

### F. Handoff boundaries

17. Should landing-page implementation wait until the repo exists (build into `landing/`), or can Carrd/static happen in parallel?
18. Update needed to existing `HANDOFF_LANDING_PAGE.md` once repo exists?

---

## Output format (required)

```markdown
# Cash-first repo setup plan — audit

**Verdict:** PASS | REVISE | BLOCK
**One-line summary:** ...

## Findings
| ID | Severity | Topic | Finding | Recommended fix |
|----|----------|-------|---------|-----------------|
| F01 | BLOCKER/HIGH/MED/LOW | ... | ... | ... |

## Answers to audit questions
A1–F18: short answers

## Must-fix before Cursor executes
- [ ] ...

## Nice-to-have (do not block setup)
- [ ] ...

## Explicit non-issues (checked OK)
- ...

## Stop
Audit complete. No repo created. No files migrated unless Ryan asks next.
```

---

## Severity guide

- **BLOCKER** — unsafe Git nesting, authority conflict, or plan that breaks SD-018 / parent repo
- **HIGH** — runbook mismatch that will cause repeated AI confusion or wrong security tier
- **MED** — layout / process improvement before execute
- **LOW** — polish

---

## Already done / dirty state

- Experiment pack live and committed on parent `master` (`04-experiments/cash-first-offer/*`)
- SD-018 adopted; Calendar excluded
- Plan file: `C:\Users\ryanf\.cursor\plans\cash-first_repo_setup_2b085e90.plan.md`
- **Repo not created yet**

## Out of scope for this audit

- Rewriting the income strategy (packages, prices, outreach)
- Implementing landing page
- Auditing Kira Calendar
- Permanent SR-04 resolution

## Stop condition

Deliver the audit markdown in the required format. Do not execute setup. If verdict is REVISE or BLOCK, list the minimum plan edits Cursor should make before Ryan re-approves execution.

**Workflow:** Cursor = brain/plan; Claude/Codex desktop = implement/audit.
