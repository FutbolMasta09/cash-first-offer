# [Project Name] — Decision Log

A running record of significant architectural, design, and product decisions made during development. The purpose is to prevent relitigating choices and to give future AI sessions the context they need to give good advice.

**Log a decision when:**
- Choosing between two technical approaches
- Accepting a known limitation or tradeoff
- Reversing or changing a previous decision
- Making a product choice with downstream design implications
- An audit gate passes or fails

**Format:**
```
## [Date] — [Short title]
**Decision:** What was decided.
**Alternatives considered:** What else was on the table.
**Why:** The reason this option was chosen.
```

**Rule:** If a decision was worth discussing, it is worth logging. A DECISIONS.md with no entries at project start means planning decisions were not recorded.

---

## [Date] — Project start: tech stack

**Decision:** [What tech stack / engine / framework was chosen.]
**Alternatives considered:** [What else was evaluated.]
**Why:** [The reason this was chosen — cost, fit, learning, prior experience, etc.]

---

## [Date] — Scope lock

**Decision:** [What is in scope for v1 / EA / launch.]
**Alternatives considered:** [What was cut or deferred.]
**Why:** [Why this scope, not a larger or smaller one.]

---

## [Date] — Audit 1 (Buildability) — [PASS / FAIL]

**Decision:** [Pass with no blockers / Pass with conditions / Fail — list what must be resolved.]
**What was reviewed:** Roadmap, phase gates, DECISIONS.md entries, workflow tools, open design questions.
**Why:** [What gave confidence to proceed, or what must be resolved before proceeding.]

---
