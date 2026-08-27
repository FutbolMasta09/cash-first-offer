---
title: Audit remediation plan (template)
purpose: Milestone-gated fixes from codebase audits — reusable across projects
owner: Fill in per project
---

# Audit Remediation Plan (Template)

## How to use

1. Run a **codebase / project audit** (or use this template after an AI-assisted audit session).
2. Add items below under the right **gate**. Rename gates to match your [ROADMAP_TIMELINE.md](ROADMAP_TIMELINE.md) or [PROJECT_CONTEXT.md](../PROJECT_CONTEXT.md) phases (e.g. "Before Phase 2", "Before private launch", "Before public launch").
3. Check items off as you complete them. Never delete rows — history matters.
4. **Protocol hooks:** This file is referenced by `health-check.mdc` (question 6) and `session-protocol.mdc` (phase completion + optional Saturday doc hygiene).

---

## Gates (rename to match your roadmap)

| Gate | Meaning |
|------|---------|
| **Before Phase 2** | Example — adjust to your next major build milestone |
| **Before [Launch Milestone]** | Example — private beta, gift build, etc. |
| **Before Public Launch** | Example — App Store / Steam / web |
| **Ongoing** | Doc hygiene, small recurring checks — optional one item on Saturday if time permits |

---

## Checklist — add your items

### Before Phase 2 (example gate)

| Done | Item | Est. | Files / notes |
|------|------|------|---------------|
| [ ] | [Placeholder — e.g. error boundaries on key screens] | | |
| [ ] | [Placeholder — sync PROJECT_CONTEXT Known Flags with reality] | | |

### Before [Launch Milestone] (example gate)

| Done | Item | Est. | Files / notes |
|------|------|------|---------------|
| [ ] | [Placeholder — e.g. env validation at startup] | | |
| [ ] | [Placeholder — graceful offline for cloud features] | | |

### Before Public Launch

| Done | Item | Est. | Files / notes |
|------|------|------|---------------|
| [ ] | [Placeholder — remove dev-only routes in production] | | |
| [ ] | [Placeholder — wrap console logging] | | |

### Ongoing

| Done | Item | Est. | Files / notes |
|------|------|------|---------------|
| [ ] | [Placeholder — CODEBASE_MAP last verified date] | | |
| [ ] | [Placeholder — Known Flags accuracy] | | |

---

## Protocol integration (do not remove)

| Trigger | Action |
|---------|--------|
| **Health check** (every ~5th session) | Question 6: Any audit items due for the current phase still unchecked? Name the top one. |
| **Phase completion audit** | Verify all items whose gate matches the phase you just completed are checked before declaring the phase done. |
| **Saturday audit** (optional) | If time permits: complete one unchecked **Ongoing** item (doc hygiene). |

---

## New project install note

If this file was installed from the rules pack as `AUDIT_REMEDIATION_PLAN.md`, replace placeholder rows with your project’s real audit findings. Keep this template file in the pack as `AUDIT_REMEDIATION_PLAN_TEMPLATE.md` for the next project.
