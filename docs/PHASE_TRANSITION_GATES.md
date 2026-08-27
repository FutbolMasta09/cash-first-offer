# Phase Transition Gates — [PROJECT NAME]

Define when to move from one phase to the next.

---

## Within This Project

| Gate | When to proceed | Action before starting next phase |
|---|---|---|
| Phase 0 → Phase 1 | Buildability audit passed; all stub docs filled | Log audit result in ROADMAP_TIMELINE.md Section D |
| Phase 1 → Phase 2 | All Phase 1 checklist items done; device/platform test passed | Run coherence audit; update wiki; rebuild rules pack if applicable |
| Phase N → Phase N+1 | Same pattern | Same |
| Any phase → Pre-launch | All applicable audits complete | All audit rows in Section D have results |

**Every gate, no exceptions:** re-check the Data Risk Tier in `docs/SECURITY_CHECKLIST.md`. Did this phase add or remove accounts, network calls, storage, third-party services, auto-update, or cloud sync? If yes, the tier may have changed — update the declaration, log it in `docs/DECISIONS.md`, and apply the new tier's security gate from here forward. Record the re-check (even "confirmed, no change") in the checklist's re-check table.

**Fill in your phases:**

| Phase | Key deliverables | Gate criteria |
|---|---|---|
| Phase 1 | [List] | [When to advance] |
| Phase 2 | [List] | [When to advance] |
| Phase 3 | [List] | [When to advance] |

---

## Across Projects

| Gate | When to proceed |
|---|---|
| Current flagship → vertical slice of next | Playable core loop + at least one external playtest |
| Next project pre-production | Planning window complete; project selected from pool |
| Next project Phase 1 | Current flagship shipped (or explicit parallel capacity logged) |

**Reference:** `C:\App Development\PROJECT_PIPELINE.md`
