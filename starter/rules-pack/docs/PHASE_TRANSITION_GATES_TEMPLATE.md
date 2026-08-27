# Phase Transition Gates

Define when to move from one phase to the next — **within** this project and **across** projects (when to start the next project's phases).

---

## Within This Project

| Gate | When to proceed | Action before starting next phase |
|------|-----------------|-----------------------------------|
| Phase 1 complete → Phase 2 | All Phase 1 checklist items done; device test passed | Run phase postmortem; run rule upgrade pass; rebuild rules pack; mark phase COMPLETE in ROADMAP_TIMELINE |
| Phase 2 complete → Phase 3 | Same pattern | Same |
| Phase N complete → Phase N+1 | Same pattern | Same |

**Fill in your phases:**

| Phase | Key deliverables | Gate criteria |
|-------|------------------|---------------|
| Phase 1 | [List] | [When to advance] |
| Phase 2 | [List] | [When to advance] |
| Phase 3 | [List] | [When to advance] |

---

## Across Projects (When to Start the Next Project's Phases)

| Gate | When to proceed | Action |
|------|-----------------|--------|
| **Current flagship → vertical slice** | Playable core loop exists; at least one external playtest or demo done | Open **planning window** (2–4 weeks); run pool comparison; select next pre-production project |
| **Next project pre-production** | Planning window complete; next project selected from pool | Create repo; install rules pack; run planning gates; lock scope; no build yet |
| **Next project Phase 1** | Current flagship has **shipped** (or you have explicit capacity to run parallel) | Start building; follow Phase 1 checklist in new project's ROADMAP_TIMELINE |
| **Next project Phase 2, 3, etc.** | Previous phase of that project is complete | Same as "within project" gates above |

---

**Reference:** [docs/FUTURE_PROJECTS_POOL_MASTERLIST.md](FUTURE_PROJECTS_POOL_MASTERLIST.md) "Planning rhythm" section.
