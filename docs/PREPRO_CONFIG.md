# Pre-Production Config — [PROJECT NAME]

Tracks which pre-production path was used and what was produced.
Filled during Phase 3 (Pre-Production). References `docs/PROJECT_CONFIG.md` Decision 1.

---

## Path Used

- [ ] Path A: Idea Forge (BYOK)
- [ ] Path B: Manual
- [ ] Path C: Hybrid

**Date started:** [YYYY-MM-DD]
**Date completed:** [YYYY-MM-DD]

---

## If Idea Forge (Path A or C) — Import Log

When Idea Forge exports a Coding Package, import relevant docs here.

| Idea Forge Stage | Output file | Imported to repo as | Date |
|---|---|---|---|
| Blueprint / GDD | `blueprint.md` in ZIP | `docs/GDD.md` | |
| Slice Spec | `slice-spec.md` in ZIP | `docs/VERTICAL_SLICE_SPEC.md` | |
| Architecture | `architecture.md` in ZIP | `docs/ARCHITECTURE.md` | |
| Sprint Tasks | `sprint-tasks.md` in ZIP | `docs/SPRINT_TASKS.md` | |

**ZIP file location / date:** [path or note if deleted after import]
**API cost estimate:** $[amount] ([model] × [tokens estimate])

---

## Pre-Production Deliverables Checklist

Required regardless of path. Gate: all checked before proceeding to Phase 4 (Scaffold).

- [ ] `docs/GDD.md` — filled (not stub)
- [ ] `docs/VERTICAL_SLICE_SPEC.md` — filled: start → core loop → end defined
- [ ] `docs/ARCHITECTURE.md` — filled: stack chosen, folder structure defined
- [ ] `docs/SPRINT_TASKS.md` — filled: ordered build steps for Phase 1
- [ ] `docs/COMPETITIVE_RESEARCH.md` — filled: at least 3 comparables researched
- [ ] Go/No-Go decision logged in `docs/DECISIONS.md` — explicitly "Go"

**Gate passed:** [YYYY-MM-DD] — Phase 3 complete, proceeding to scaffold

---

## Notes

<!-- Any friction, Idea Forge issues, manual research notes, or lessons for RUNBOOK_FEEDBACK.md -->
