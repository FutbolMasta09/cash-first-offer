# [PROJECT NAME] — Roadmap & Timeline

---

## Section A — Snapshot (fill on day one)

- **Project name:**
- **Type:** App / Web+PWA / Steam Game / Inkborne Game / Workflow Tool
- **Target platform(s):**
- **Target audience:** (fill from docs/TARGET_AUDIENCE.md)
- **Business model:** (fill from docs/MONETIZATION.md)
- **Must-ship date or window:**
- **Primary AI tool per phase:** (fill from docs/AI_FIRST_BUILD_STRATEGY.md)
- **Kill criteria:** (fill from docs/KILL_CRITERIA.md)
- **Pre-production path:** Path A (Idea Forge) / Path B (Manual) / Path C (Hybrid)
- **Early Access?:** Yes / No
- **Public Playtest?:** Yes (Public) / Yes (Closed) / No

---

## Section B — Master Timeline

| Phase | Name | Key deliverables | Gate criteria | Target date |
|---|---|---|---|---|
| 0 | Gate Check | Repo cloned, URL in pipeline, platform account confirmed | Repo URL in PROJECT_PIPELINE.md | |
| 1 | Project Identity | PROJECT_CONTEXT, TARGET_AUDIENCE, MONETIZATION, KILL_CRITERIA | All identity docs filled | |
| 2 | Project Configuration | PROJECT_CONFIG.md — 6 decisions made and logged | All decisions logged in DECISIONS.md | |
| 3 | Pre-Production | GDD, Vertical Slice, Architecture, Sprint Tasks, Competitive Research, Go/No-Go | All deliverables filled; Go/No-Go = "Go" | |
| [if playtest] | Public Playtest | Playtest build, PLAYTEST_PLAN.md, triage log | Playtest review complete | |
| 4 | Framework Scaffold | Project scaffold, folder structure | Project runs without errors | |
| 5 | Rules Pack | Rules installed and customized | AI tools reading session protocol | |
| 6 | Core Docs Setup | DECISIONS, LAST_SESSION, DEV_STANDARDS, STYLE_GUIDE, PLATFORM_REQUIREMENTS | All docs filled | |
| 7 | AI Tool Planning | AI_FIRST_BUILD_STRATEGY filled, workflow tools assigned | Tool matrix complete | |
| 8 | Buildability Audit | Design reviewed with Opus | Audit passes; no open blockers | |
| 9 | Wiki Ingest | Project overview.md + source summaries created | Wiki committed | |
| 10 | First Session | Session protocol confirmed, must-ship item defined | First session complete | |
| ... | [Build phases] | [Per project] | [Per phase gate] | |
| 11 | User Feedback Channel | Feedback channel live | Channel documented in USER_FEEDBACK.md | |
| 12 | Pre-Launch / Release Prep | RELEASE_CHECKLIST.md 100% complete | All audits pass; checklist 100% | |
| 13 | Launch (or EA Launch) | Build submitted, announced | Live on platform | |
| 14 | Post-Launch Monitoring | POST_LAUNCH_MONITORING.md filled, first 30 days monitored | 30-day review complete | |
| [if EA] | EA → v1.0 Transition | EA postmortem, graduation criteria met | Graduation confirmed in DECISIONS.md | |
| 15 | Postmortem + Transition | POSTMORTEM_TEMPLATE filled, MAINTENANCE_TRANSITION filled | Wiki updated to "Launched" | |

---

## Section B3 — Workflow Tools

| Tool | Build before | Effort | Value |
|---|---|---|---|
| [Tool name] | [Phase] | [Sessions] | [Why] |

---

## Section C — Phase Checklists

### Phase 0–3 Checklist (Setup + Pre-Production)
- [ ] Template repo cloned via GitHub "Use this template"
- [ ] Repo URL added to PROJECT_PIPELINE.md
- [ ] Platform developer account confirmed (see docs/PLATFORM_REQUIREMENTS.md)
- [ ] PROJECT_CONTEXT.md header filled
- [ ] TARGET_AUDIENCE, MONETIZATION, KILL_CRITERIA filled
- [ ] PROJECT_CONFIG.md — all 6 decisions made and logged
- [ ] Pre-production path chosen (Decision 1) and logged in PREPRO_CONFIG.md
- [ ] GDD.md filled
- [ ] VERTICAL_SLICE_SPEC.md filled
- [ ] ARCHITECTURE.md filled (stack locked)
- [ ] SPRINT_TASKS.md filled (Phase 1 tasks ordered)
- [ ] COMPETITIVE_RESEARCH.md filled (3+ comparables)
- [ ] Go/No-Go decision logged in DECISIONS.md
- [ ] Audit applicability table filled (see Section D below)

### Build Phase Checklist (copy for each build phase)
- [ ] [Add items per phase]

### Pre-Launch Checklist (Phase 12)
- [ ] RELEASE_CHECKLIST.md 100% complete
- [ ] All applicable audits passed (Section D)
- [ ] Feedback channel live
- [ ] Store page reviewed and submitted
- [ ] Marketing tasks complete

### Post-Launch Checklist (Phases 14–15)
- [ ] POST_LAUNCH_MONITORING.md filled
- [ ] 30-day review complete
- [ ] POSTMORTEM_TEMPLATE.md filled
- [ ] MAINTENANCE_TRANSITION.md filled
- [ ] Wiki updated to "Launched" or "Maintenance"

---

## Section D — Audit Log

### Audit Applicability (fill at project setup)

| Audit | When | Applies? | Notes |
|---|---|---|---|
| **Buildability** | Before Phase 1 code | | Is the design spec'd well enough to build without guessing? |
| **Coherence** | End of each phase | | Do systems, tone, UI, and content align? |
| **Performance / Platform** | Pre-launch | | FPS, memory, load times, target hardware caps met? |
| **Privacy & Data** | Pre-launch | | Data collection, COPPA if child audience, API key hygiene |
| **Security** | Pre-launch | | Auth, input validation, no secrets in repo, dependency audit |
| **Legal / IP** | Pre-launch | | Asset licenses clear, no TM conflicts, AI asset provenance logged |
| **Accessibility** | Pre-launch | | Font sizes, contrast, tap target sizes |
| **Child Safety** | Pre-launch | | Content, PIN gates, no tracking SDKs |
| **Marketing Readiness** | Pre-launch | | Store page, capsule art, screenshots, trailer, press kit |
| **Community Trust** | Pre-launch | | AI disclosure plan, no overpromising, craftsmanship evidence |
| **Postmortem** | Post-launch | | What worked, what didn't, what to change next project |

**Rule:** Mark each audit Applies / Does Not Apply / Deferred at project setup. Blank = planning incomplete.

### Audit Results

| Audit | Date run | Result | Notes |
|---|---|---|---|
| | | | |

---

## Section E — Wiki Re-Ingest Log

| Date | What was re-ingested | Wiki pages updated |
|---|---|---|
| [YYYY-MM-DD] | Initial ingest | overview.md, source summaries |
