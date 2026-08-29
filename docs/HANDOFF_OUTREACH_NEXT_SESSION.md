# Handoff — Phase 2 outreach (next session)

**For:** Ryan (execute) · Cursor (plan/review only)  
**Not for:** Claude/Codex unless a storefront bug needs fixing  
**Date:** 2026-08-29 (exit from legal session)  
**Workflow:** Cursor = brain/plan; Claude/Codex desktop = implement/audit.

---

## Mission

**Get outreach volume going.** No more storefront or legal builds unless something is broken.

Success = Fiverr + Upwork live **and** 10–20 real outreach touches logged by Day-14 (**2026-09-12**), with ≥1 paid deposit **or** a documented pivot per `KILL_CRITERIA.md`.

---

## State of world (do not re-litigate)

| Track | Status |
|-------|--------|
| Phase 1 storefront | ✅ Live |
| Legal / terms | ✅ Complete (D002) |
| Outreach clock | Started **2026-08-29** |
| Day-14 review | **2026-09-12** |
| Experiment end | **2026-09-26** |
| Outreach touches logged | **0 / 10–20** |
| Fiverr / Upwork | **Not started** |

### Live URLs (copy-paste ready)

| Item | URL |
|------|-----|
| Landing | https://futbolmasta09.github.io/cash-first-offer/ |
| Terms | https://futbolmasta09.github.io/cash-first-offer/terms.html |
| Kit $497 | https://buy.stripe.com/6oU28k6rKd8IdFc1XncMM00 |
| Deposit $600 | https://buy.stripe.com/fZu8wI9DW0lWgRo7hHcMM01 |
| Intake A | https://futbolmasta09.github.io/cash-first-offer/tools/Package_A_Intake_Questions.html |
| Intake B | https://futbolmasta09.github.io/cash-first-offer/tools/Package_B_Intake_Questions.html |

Stripe checkout: clickable **Terms of Service** checkbox on both payment links (Public details URL set). See `PAYMENT_LINKS.md`.

Provider legal name on terms: **Joel Ryan Ferrell** · governing law **Florida**.

---

## Paste into next Cursor chat (optional — Ryan-led outreach)

```
Cash-first offer — Phase 2 outreach check-in.

Agent root: C:\App Development\04-experiments\cash-first-offer

Enter session:
1. git fetch; read PROJECT_CONTEXT.md, docs/LAST_SESSION.md.
2. Read docs/HANDOFF_OUTREACH_NEXT_SESSION.md and docs/OUTREACH_14_DAY.md.

Ryan reports: Fiverr/Upwork status, outreach count, any replies/deposits.

Job this session (Cursor = brain only):
- Review outreach copy/links if Ryan pastes drafts.
- Triage replies/objections using OFFER_COPY.md objection table.
- If Day-14 approaching with zero signal: frame pivot options per KILL_CRITERIA.md — do not recommend "build more product."

Do NOT: new landing features, FTF SKUs, clients/ kits/, legal rewrites unless live terms URL is broken.

Exit: update LAST_SESSION.md; ask commit/push if docs changed.
```

---

## Ryan's job this session (execute in order)

### Day 0 — marketplace (same weekend if possible)

Authority: `docs/OUTREACH_14_DAY.md` Day 0 section · copy from `docs/OFFER_COPY.md`

- [ ] **Fiverr gig** — Package A blurb, $497, link landing + Kit Stripe URL
- [ ] **Upwork** — profile + one catalog/service item, same offer
- [ ] Title ideas in `OUTREACH_14_DAY.md` if stuck

Use **public prices only**. Same copy everywhere — no custom quotes per stranger.

### Days 1–14 — volume

- [ ] **10–20 outreach actions** — log each row in `OUTREACH_14_DAY.md` table
- [ ] Paste-ready posts in that file (Reddit r/forhire, Discord, soft ask)
- [ ] **Daily rhythm:** 15 min replies · 1–2 new outreaches if under 20 · **no rebuilding the product**

### Optional (not blocking)

- [ ] One Kira promo post — only if she opts in (`OUTREACH_14_DAY.md`)
- [ ] 1-hour business attorney consult — before first Package B client or heavy outreach

---

## Acceptance criteria (outreach session "done enough")

1. Fiverr gig **or** Upwork listing is **live** with correct URLs and $497 / $1,200 pricing.
2. ≥**3** outreach touches logged (stretch: 10+ before Day-14).
3. `OUTREACH_14_DAY.md` table updated with dates/channels.
4. No new repo code unless fixing a broken live URL.

**Stop condition:** Do not spend another session on marketplace SEO, logo design, or offer rebranding until ≥10 touches are logged or Day-14 forces a pivot.

---

## Objection quick reference

From `OFFER_COPY.md` — keep answers short:

| They say | You say |
|----------|---------|
| Build my website? | I install workflows and internal tools, not brochure sites. |
| Cheaper? | Packages are fixed; A is the lighter entry. |
| Full SaaS? | Out of scope — mini-tool = one job only. |
| Free trial? | No free builds; kit $497 / mini-tool starts $600 deposit. |

---

## Out of scope (this phase)

- Fiverr/Upwork **volume automation** or ads spend
- FTF SKU builds (UGC rate card, PDFs)
- `clients/` or `kits/` folders
- Formspree / backend / analytics
- Package B final $600 Stripe link (create at first handoff only)
- Legal doc rewrites (terms are live)

---

## If something breaks

| Problem | Fix |
|---------|-----|
| Landing 404 | GitHub Pages / `landing/` deploy |
| Stripe link dead | `PAYMENT_LINKS.md` + Dashboard |
| Terms page wrong | Edit `SERVICE_TERMS.md` → re-publish `terms.html` via Claude handoff |
| Intake broken | `tools/Package_*` — Claude handoff pattern in `CLIENT_INTAKE_SEND_INSTRUCTIONS.md` |

---

## Authority docs

1. `PROJECT_CONTEXT.md` — phase + flags  
2. `docs/OUTREACH_14_DAY.md` — runbook + log  
3. `docs/OFFER_COPY.md` — all public copy  
4. `docs/KILL_CRITERIA.md` — Day-14 pivot/kill  
5. `docs/DECISIONS.md` — D001 scope, D002 terms  

---

## After Day-14 (2026-09-12)

Open `KILL_CRITERIA.md`. Same day:

- ≥1 paid deposit → deliver first job; log in intake template (non-PII)  
- Zero signal → document channel/price/offer change — **not** "build more"  
- Wiki overview decision (deferred from D001) if experiment continues  
