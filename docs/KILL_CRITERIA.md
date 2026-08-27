# Kill Criteria — [PROJECT NAME]

Defined at project start. Reviewed at every phase gate.
Purpose: prevent sunk cost. If any trigger fires, stop and reassess before continuing.

---

## Pause Triggers (reassess before next session)

- [ ] No playable prototype after [X] sessions — design may be too complex or underspecified
- [ ] Same blocking bug across [3+] consecutive sessions
- [ ] Scope has grown more than 50% from original plan without a logged decision
- [ ] Weekly hours consistently below [X] — capacity may not support this project now

## Kill Triggers (stop the project)

- [ ] Core loop does not work after [X] hours of prototype — fundamental design problem
- [ ] Platform account rejected or insurmountable technical blocker discovered
- [ ] A higher-priority project needs the time and cannot wait
- [ ] Ryan decides the project no longer serves its original goal

## Reassessment Protocol

If a trigger fires:
1. Do not immediately abandon — run a 30-minute reassessment session
2. Identify root cause: scope, time, design, or motivation?
3. Options: continue, pause, pivot, or kill
4. Log the decision in `docs/DECISIONS.md`
5. Update `C:\App Development\PROJECT_PIPELINE.md`

---

**Last reviewed:** [YYYY-MM-DD] — Phase [N]
