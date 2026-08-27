# Post-Launch Monitoring — [PROJECT NAME]

Fill at launch. Defines dashboards, thresholds, and cadence for the first 30 days.
If Early Access: monitoring is ongoing throughout EA, not just 30 days.

---

## Dashboards to Monitor

| Platform | Dashboard URL / location | What to check |
|---|---|---|
| [Google Play] | play.google.com/console | Crash rate, ANR rate, reviews, ratings |
| [App Store] | appstoreconnect.apple.com | Crash rate, reviews, ratings |
| [Steam] | partner.steamgames.com | Reviews, refund rate, concurrent players |
| [Analytics] | [tool: Firebase / Mixpanel / none] | DAU, retention, session length |
| [Feedback channel] | [URL] | Bug reports, feature requests |

---

## Alert Thresholds

If any of these are hit, take action the same day:

| Metric | Threshold | Action |
|---|---|---|
| Crash rate | > 1% of DAU | Hotfix — identify root cause, patch within 48h |
| Store rating | < 3.5 stars (with 10+ reviews) | Investigate 1-star reviews for patterns |
| Refund rate (Steam) | > 10% | Investigate first 15-minute experience |
| Negative review spike | 3+ in 24h | Read all, identify common theme |
| User feedback volume | > [X] reports on same issue | Escalate to P0/P1 bug |

---

## Monitoring Cadence

### Week 1 (daily)
- [ ] Check crash rate and ANR rate
- [ ] Read all new reviews (respond if platform supports it)
- [ ] Triage all new feedback from user channel
- [ ] Verify download/install flow still works (spot check)
- [ ] Check for major social media mentions (search project name)

### Week 2–4 (twice weekly — Monday + Thursday)
- [ ] Check crash rate trend (improving / stable / worsening?)
- [ ] Read new reviews
- [ ] Triage feedback backlog
- [ ] Review hotfix queue — anything to patch this week?

### Month 2+ (weekly)
- [ ] Review per `docs/POST_LAUNCH_PLAN.md` cadence

---

## Hotfix Protocol

**Critical (crash / data loss / unplayable):**
1. Identify root cause before shipping fix (don't guess)
2. Fix + test on target device
3. Submit patch build (allow platform review time)
4. Post public acknowledgment on feedback channel: "We're aware of X and shipping a fix"
5. Update `PATCH_NOTES.md` and `docs/CHANGELOG.md`

**Non-critical (bug / friction):**
1. Log in feedback triage
2. Address in next scheduled update per `docs/POST_LAUNCH_PLAN.md`

---

## First 30-Day Review

At 30 days post-launch, run this review:

| Question | Answer |
|---|---|
| Crash rate stable? | |
| Rating trend (improving / stable / declining)? | |
| Top 3 user complaints? | |
| Top 3 user compliments? | |
| Any unresolved P0/P1 bugs? | |
| Update cadence: on track? | |
| Revenue vs projection? | |

**Action items from review:** [list]
**Transition to:** `docs/POST_LAUNCH_PLAN.md` ongoing cadence
