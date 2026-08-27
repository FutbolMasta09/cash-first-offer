# project-starter

Personal project template repo for all new projects under `C:\App Development\`. Covers the full project lifecycle — from pre-production through post-launch maintenance.

> **This is a GitHub Template Repository.** Use the "Use this template" button to clone it into a new repo. Do not fork.

---

## What's Included

**42 files** covering the full project lifecycle across 15 runbook phases.

### Pointer Files (AI tool integration)
| File | Tool |
|---|---|
| `.windsurfrules` | Windsurf |
| `CLAUDE.md` | Claude Code |
| `.cursor/rules/universal-protocols.mdc` | Cursor |
| `.agent/rules/universal-protocols.md` | Antigravity |

All four pointer files reference the central LLM Wiki at `C:\App Development\llm-wiki\` for universal protocols. Customize the project-specific sections after cloning.

### Core Files
- `PROJECT_CONTEXT.md` — project brain (name, type, platform, status, stack, key decisions)
- `PATCH_NOTES.md` — internal session log
- `README.md` — this file (replace with project README after cloning)
- `.gitignore` — universal starter

### `docs/` — Full Template Suite

**Setup & Pre-Production**
| File | Purpose |
|---|---|
| `PROJECT_CONFIG.md` | 6 per-project decisions with cascading checklists |
| `PREPRO_CONFIG.md` | Pre-production path log + Idea Forge import tracker |
| `GDD.md` | Game / product design document |
| `VERTICAL_SLICE_SPEC.md` | Smallest playable/testable proof spec |
| `ARCHITECTURE.md` | Tech stack, folder structure, ADRs |
| `SPRINT_TASKS.md` | Ordered build task list |
| `COMPETITIVE_RESEARCH.md` | Market landscape + differentiation |

**Project Health**
| File | Purpose |
|---|---|
| `TARGET_AUDIENCE.md` | Who the project is for |
| `MONETIZATION.md` | Business model decisions |
| `KILL_CRITERIA.md` | When to pause or kill the project |
| `STYLE_GUIDE.md` | Tone, palette, naming conventions |

**Planning & Execution**
| File | Purpose |
|---|---|
| `ROADMAP_TIMELINE.md` | Phase plan + audit applicability table |
| `PHASE_TRANSITION_GATES.md` | Criteria for advancing phases |
| `AI_FIRST_BUILD_STRATEGY.md` | AI tool use by phase |
| `WEEKLY_EXECUTION_TRACKER.md` | Weekly hours + KPIs |
| `DECISIONS.md` | All key decisions logged as D001+ |
| `LAST_SESSION.md` | Session handoff (what was done, what's next) |
| `EXIT_PROTOCOL.md` | Universal exit protocol |

**Quality & Platform**
| File | Purpose |
|---|---|
| `TESTING_STRATEGY.md` | Test types, build pipeline, platform quirks |
| `PLATFORM_REQUIREMENTS.md` | Platform checklists + developer account status |
| `SECURITY_CHECKLIST.md` | Baseline → production → pre-release security gate |
| `ACCESSIBILITY_CHECKLIST.md` | Input, visual, audio/motion, flow, platform-specific accessibility |

**Launch & Post-Production**
| File | Purpose |
|---|---|
| `RELEASE_CHECKLIST.md` | v1.0 launch checklist (+ EA section if applicable) |
| `POST_LAUNCH_PLAN.md` | Support mode, update cadence, sunset criteria |
| `POST_LAUNCH_MONITORING.md` | 30-day monitoring protocol + alert thresholds |
| `MAINTENANCE_TRANSITION.md` | Active dev → maintenance mode protocol |
| `POSTMORTEM_TEMPLATE.md` | Phase + project-level postmortem |

**Tracking**
| File | Purpose |
|---|---|
| `CHANGELOG.md` | Public-facing release notes |
| `USER_FEEDBACK.md` | Feedback intake + triage log |
| `ESTIMATION_RETROSPECTIVE.md` | Estimate vs actual velocity tracking |
| `RUNBOOK_FEEDBACK.md` | Gaps in the runbook → wiki improvement log |

**Conditional (fill only if applicable)**
| File | Triggered by |
|---|---|
| `EARLY_ACCESS_PLAN.md` | Decision 2 = Yes (EA release) |
| `PLAYTEST_PLAN.md` | Decision 6 = Yes (public or closed playtest) |

---

## How to Use

### Starting a New Project

1. Click **"Use this template"** → **"Create a new repository"**
2. Name the repo, set visibility (private recommended)
3. Clone locally: `git clone <your-new-repo-url>`
4. Open in your IDE and follow the runbook top to bottom

### The Runbook

The canonical runbook lives at:
```
C:\App Development\llm-wiki\coding\runbooks\new-project-runbook.md
```

**15 phases:**
| # | Phase |
|---|---|
| 0 | Gate Check |
| 1 | Project Identity |
| 2 | Project Configuration (6 per-project decisions) |
| 3 | Pre-Production (Idea Forge / Manual / Hybrid) |
| 4–11 | Framework Scaffold → First Session → Build |
| 12 | Pre-Launch / Release Prep |
| 13 | Launch (or EA Launch) |
| 14 | Post-Launch Monitoring |
| 14b | EA → v1.0 Transition *(conditional)* |
| 15 | Postmortem + Maintenance Transition |

### First Thing After Cloning

1. Fill `PROJECT_CONFIG.md` — make all 6 per-project decisions before anything else
2. Update `PROJECT_CONTEXT.md` header block
3. Replace this `README.md` with a project-specific one
4. Fill `docs/TARGET_AUDIENCE.md`, `docs/MONETIZATION.md`, `docs/KILL_CRITERIA.md`
5. **Create LLM Wiki page** — Follow Phase 9 in the runbook (create `coding/projects/<name>/overview.md`, update indexes)
6. Run pre-production (Phase 3) before writing any code

### Project Configuration Decisions

`docs/PROJECT_CONFIG.md` prompts you through 7 decisions at setup. Each one triggers or skips downstream steps:

| # | Decision | If Yes / Chosen |
|---|---|---|
| 1 | Pre-production path | Idea Forge (BYOK) / Manual / Hybrid / Story-First Track |
| 2 | Early Access release | Fills `EARLY_ACCESS_PLAN.md`; two-stage launch |
| 3 | Open Source vs Closed | Triggers LICENSE, CONTRIBUTING.md, CODE_OF_CONDUCT.md |
| 4 | Solo vs Collaborative | Triggers branch strategy, shared access docs |
| 5 | Parallel vs Sequential | Triggers hour split, priority rule |
| 6 | Public Playtest / Closed Beta | Fills `PLAYTEST_PLAN.md` |
| 7 | Business Entity | Triggers LLC filing, EIN, business bank account tracking |

---

## Pre-Production Paths

This template supports four pre-production approaches — chosen per project in `docs/PROJECT_CONFIG.md`:

- **Path A: Idea Forge** — Run the project through the Idea Forge BYOK pipeline (Spark → Blueprint → Slice Spec → Architecture → Sprint Tasks → Coding Package). Import the ZIP export into `docs/`.
- **Path B: Manual** — Fill `GDD.md`, `VERTICAL_SLICE_SPEC.md`, `ARCHITECTURE.md`, `SPRINT_TASKS.md` directly using AI subscription tools (Windsurf, Claude, Antigravity).
- **Path C: Hybrid** — Use Idea Forge for some stages, manual for others.
- **Path D: Story-First Track** — Project is narrative/prose-first and format isn't decided yet. Skip Phases 3–5 entirely; work stays in prose/outline docs until a defined milestone is hit, then return to Phase 2 to finish the remaining decisions and pick a format.

**Paths A/B/C require the same 6 deliverables before build begins** (tracked in `docs/PREPRO_CONFIG.md`). **Path D defers all of that** until the prose milestone defined in `PROJECT_CONFIG.md` is reached.

---

## Runbook Feedback Loop

When any AI tool notices a gap in the runbook or this template:
- Flag it: `📝 RUNBOOK GAP: [description]`
- Append to `docs/RUNBOOK_FEEDBACK.md`

At each postmortem, review gaps → update the wiki runbook → update this template repo.

---

*Private template — Ryan Ferrell personal use*
*Runbook: `C:\App Development\llm-wiki\coding\runbooks\new-project-runbook.md`*
