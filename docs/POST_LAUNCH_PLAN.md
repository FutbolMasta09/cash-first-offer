# Post-Launch Plan — [PROJECT NAME]

Decided before launch. Prevents "now what?" paralysis the day after shipping.

---

## Support Mode (choose one)

- [ ] **Active development** — shipping updates on a regular cadence: [weekly / monthly / quarterly]
- [ ] **Maintenance mode** — bug fixes only, no new features
- [ ] **Soft abandon** — no active support, repo stays public/live but no updates planned
- [ ] **Full abandon** — take down after [date or condition]

**Chosen mode:** [fill in]
**Rationale:** [why]

---

## Update Cadence (if active development)

| Type | Frequency | Scope |
|---|---|---|
| Bug fix patches | [As needed / weekly] | Critical bugs only |
| Content updates | [Monthly / quarterly] | [What kind of content] |
| Feature releases | [Quarterly / annually] | [What drives the roadmap] |

---

## User Feedback Triage

→ See `docs/USER_FEEDBACK.md` for intake process.

**Response SLA:**
- Critical bugs (crash / data loss): [target response time]
- Non-critical bugs: [target response time]
- Feature requests: [reviewed at cadence]

---

## Metrics to Watch Post-Launch

| Metric | Where to check | Action threshold |
|---|---|---|
| Crash rate | [platform dashboard] | >1% DAU → hotfix |
| Store rating | [store page] | <3.5 stars → investigate |
| Daily active users | [analytics] | [threshold] |
| User feedback volume | [feedback channel] | [threshold] |

---

## Sunset Criteria

If any of these are true for [X] months, consider sunsetting:
- Monthly active users below [threshold]
- Revenue below cost of maintenance
- Ryan has moved on and has no plans to return

**Sunset process:** Notify users [X weeks] in advance, archive repo, update PROJECT_PIPELINE.md.
