# Playtest Plan — [PROJECT NAME]

Only fill if Decision 6 in `docs/PROJECT_CONFIG.md` = Yes (Public or Closed).
Defines who playtests, when, what build, and how feedback is collected.

---

## Playtest Type

- [ ] **Public playtest** — open to all (Steam Playtest / TestFlight public / itch.io open beta)
- [ ] **Closed beta** — invite-only (known contacts, community, or applicants)

**Platform / distribution:** [Steam Playtest branch / TestFlight / itch.io password / other]

---

## Timing

**Playtest start:** [YYYY-MM-DD or phase gate]
**Playtest duration:** [e.g. 2 weeks / 1 month]
**Playtest end / build closed:** [YYYY-MM-DD]

Gate: Playtest must complete and EA postmortem (or playtest review) logged before Pre-Launch phase begins.

---

## Tester Recruitment

**Target tester count:** [e.g. 10–20 for closed / open-ended for public]

**For closed beta:**
- Who: [e.g. Discord community, mailing list, personal contacts]
- How recruited: [e.g. sign-up form / direct invite / Twitter post]
- NDA required? [Yes / No] — if Yes, decision logged in `docs/DECISIONS.md`
- NDA template: [link or note location]

**For public playtest:**
- Platform announcement: [where and when to post]
- Marketing opportunity: [how to use this for community building / wishlists]

---

## Playtest Build

**Build scope:** [What's in the playtest build? Reference `docs/VERTICAL_SLICE_SPEC.md` or current phase]
**Known limitations / placeholder content:** [list so testers have context]
**What NOT to focus feedback on:** [e.g. final art / audio / store page]
**Debug overlay / feedback tool in build?** [Yes / No — how testers submit bugs]

---

## Feedback Collection

**Primary feedback channel:** [in-game form / Google Form / Discord / GitHub Issues]
**Structured questions for testers:**

1. [e.g. Did you understand what to do without a tutorial?]
2. [e.g. What was the most satisfying part?]
3. [e.g. What was confusing or frustrating?]
4. [e.g. Would you buy this? At what price?]
5. [Open-ended: anything else?]

**Bug report format:**
> Steps to reproduce → Expected → Actual → Platform/device

---

## Feedback Triage

Playtest bugs get their own priority tier:

| Priority | Criteria | Action |
|---|---|---|
| P0 — Critical | Crash / data loss / unplayable | Fix immediately, re-send build |
| P1 — High | Core loop broken / major confusion | Fix before v1.0 |
| P2 — Medium | Friction / minor bugs / UX issues | Address in next update |
| P3 — Low | Polish / nice-to-have | Backlog |

**Triage log:** See `docs/USER_FEEDBACK.md` playtest section.

---

## Playtest Review (after playtest closes)

Run within 1 week of playtest end:

- [ ] All feedback read and triaged
- [ ] Key themes identified (top 3 positives, top 3 concerns)
- [ ] Changes decided: what goes in v1.0 vs backlog
- [ ] Decision logged in `docs/DECISIONS.md`
- [ ] Summary posted to playtesters (if community-facing)
- [ ] Lessons logged in `docs/RUNBOOK_FEEDBACK.md` if process improvements found
