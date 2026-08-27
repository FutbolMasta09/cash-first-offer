# Early Access Plan — [PROJECT NAME]

Only fill if Decision 2 in `docs/PROJECT_CONFIG.md` = Yes.
Defines EA scope, pricing, duration, and graduation criteria.

---

## EA Overview

**EA launch target:** [YYYY-MM or quarter]
**v1.0 launch target:** [YYYY-MM or quarter — after EA period]
**EA platform:** [Steam Early Access / App Store / itch.io / other]

---

## EA Scope

### What's IN Early Access

Minimum viable experience — enough to be compelling and worth the EA price.

- [ ]
- [ ]
- [ ]

### What's OUT of Early Access

Explicitly excluded from EA launch. In progress or not started.

- [Feature] — [planned for v1.0 or post-launch]
- [Feature] — [reason]

**EA content % estimate vs full v1.0:** [e.g. 40% of planned content]

---

## Pricing

**EA price:** $[price]
**v1.0 price:** $[price — same / higher / TBD]
**Price increase on v1.0?** [Yes / No / TBD]
**Rationale:** [Why this EA price? What's the value proposition for early adopters?]

---

## Update Cadence During EA

| Type | Frequency | Scope |
|---|---|---|
| Hotfix patches | As needed (critical bugs within 48h) | Crashes + game-breaking bugs |
| Content updates | [e.g. monthly] | [new content, features, improvements] |
| Major updates | [e.g. quarterly] | [roadmap milestones — each gets its own announcement] |

**EA communication commitment:** Post a public update [frequency] on [platform: Steam Hub / itch.io blog / social].

---

## EA Feedback Protocol

EA users are co-developers. Their feedback has higher weight than post-v1.0 feedback.

**Primary channel:** [Steam Discussions / Discord / itch.io comments / GitHub Issues]
**Response SLA:**
- Crashes: fix within 48h + public acknowledgment
- Bugs: acknowledge within 1 week
- Design feedback: acknowledge and log; reviewed monthly

**EA postmortem:** Run using `docs/POSTMORTEM_TEMPLATE.md` before v1.0 push.

---

## Graduation Criteria

EA ends and v1.0 launches when ALL of these are true:

- [ ] [Criterion 1 — content: e.g. "all planned v1.0 content complete"]
- [ ] [Criterion 2 — stability: e.g. "no critical bugs open for 30+ days"]
- [ ] [Criterion 3 — community: e.g. "positive review rating ≥ 75%"]
- [ ] [Criterion 4 — Ryan's call: e.g. "v1.0 feel and polish target met"]

**Target graduation date:** [YYYY-MM — subject to criteria]
**Graduation decision logged in:** `docs/DECISIONS.md`

---

## EA → v1.0 Transition Checklist

When graduation criteria are met:

- [ ] EA postmortem complete
- [ ] All EA feedback triaged — decisions made on what makes v1.0 vs backlog
- [ ] v1.0 release checklist complete (`docs/RELEASE_CHECKLIST.md` v1.0 section)
- [ ] Pricing updated if planned
- [ ] EA messaging removed from store page / description
- [ ] v1.0 launch announcement prepared
