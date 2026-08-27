# Maintenance Transition — [PROJECT NAME]

Fill at the end of the project postmortem (Phase 15).
Documents the transition from active development to maintenance (or beyond).

---

## Transition Date

**Active development ended:** [YYYY-MM-DD]
**Support mode starting:** [Active development / Maintenance / Soft abandon / Full abandon]

Reference `docs/POST_LAUNCH_PLAN.md` for the chosen mode and its rationale.

---

## Handoff Notes

What does a future version of Ryan (or a collaborator) need to know to resume work on this project?

**Current state of the codebase:**
[Brief description — what's done, what's in progress, what's deferred]

**Known issues left open:**
| Issue | Severity | Notes |
|---|---|---|
| | | |

**Deferred backlog location:** `docs/FEATURE_BACKLOG.md` or `docs/DECISIONS.md`

**Build instructions:** `docs/TESTING_STRATEGY.md` → Build Pipeline section

**Platform account status:**
| Platform | Account status | Credential location |
|---|---|---|
| [Platform] | Active / Suspended | [where credentials are stored] |

---

## Ongoing Responsibilities (Maintenance Mode)

If support mode = Maintenance, these are the only active responsibilities:

- [ ] Monitor `docs/POST_LAUNCH_MONITORING.md` cadence (monthly after first 30 days)
- [ ] Triage incoming feedback per `docs/USER_FEEDBACK.md`
- [ ] Ship critical bug patches (crash / data loss) within 48h
- [ ] Renew platform accounts as needed (Apple: $99/yr)

**Time estimate:** ~[X hours/month] to maintain

---

## Resume Criteria

Under what conditions would active development restart?

- [ ] [Condition 1 — e.g. "Sticker Quest ships and capacity opens"]
- [ ] [Condition 2 — e.g. "A major feature request with significant demand"]
- [ ] [Condition 3 — e.g. "Opportunity to expand to a new platform"]

**If none of these occur:** project remains in maintenance mode indefinitely.

---

## Sunset Protocol

If support mode moves to "soft abandon" or "full abandon":

1. Final blog post / announcement: "Development is complete. Thanks to all who played/used it."
2. Archive `docs/LAST_SESSION.md` with a final summary
3. Update `PROJECT_PIPELINE.md` status to "Complete" or "Archived"
4. Update wiki project status to "Archived"
5. If full abandon: notify users [X weeks] in advance if taking down
6. Keep repo and files — never delete a shipped project

**Sunset date (if planned):** [YYYY-MM-DD or N/A]
