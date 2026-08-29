# Handoff — Finish Phase 1 (live Stripe + wire + smoke test)

**For:** Ryan + Claude desktop (live Stripe) · Cursor (repo wire + review)  
**Date:** 2026-08-29  
**Blocks:** Phase 2 outreach until this is done  
**Workflow:** Cursor = brain/plan; Claude/Codex desktop = implement/audit.

---

## What's already done (do not redo)

- Landing LIVE: https://futbolmasta09.github.io/cash-first-offer/
- Intake A/B LIVE under `/tools/`
- Stripe **test** links verified (Sandbox) — see `docs/HANDOFF_STRIPE_TEST_LINKS_RESULT.md`
- Account decision: **JOEL FERRE / futbolmasta.itch.io** Stripe — OK

---

## Remaining steps (in order)

### Step 1 — Live Stripe links (~15 min) · Claude desktop

Ryan logged into Stripe (use **Chrome/Edge**, not Cursor browser — Stripe blocks embedded browsers).

```
Finish cash-first-offer Phase 1 — LIVE Stripe Payment Links only.

Read: docs/HANDOFF_STRIPE_TEST_LINKS_RESULT.md (test link IDs + confirmation text).

For EACH test Payment Link (... menu):
1. "Copy to livemode"
2. On LIVE copy: turn OFF Adaptive Pricing (USD only)
3. Confirm after-payment message unchanged (intake URLs + futbolmasta9@gmail.com)

Also: Stripe Settings → enable "Successful payment" emails → futbolmasta9@gmail.com

Report ONLY:
- Live Kit URL ($497) — NO /test_ in URL
- Live Deposit URL ($600) — NO /test_ in URL
- Adaptive Pricing off on both? (yes/no)
- Payment emails on? (yes/no)
- Any blocker?

Do NOT edit repo. Do NOT commit.
```

### Step 2 — Wire repo (~10 min) · Cursor

Paste both **live** URLs to Cursor. Cursor will:

1. Fill `docs/PAYMENT_LINKS.md` (live URLs only; final $600 stays TODO)
2. Replace 4 hrefs in `landing/index.html` (`#pay-kit` ×2, `#pay-deposit` ×2)
3. Update HTML comment block at top of `landing/index.html`
4. Verify `grep "#pay-" landing/index.html` → 0 matches

Ryan approves **commit + push** → GitHub Pages redeploys ~1 min.

### Step 3 — Smoke test (~15 min) · Ryan

One pass on phone + desktop:

| Check | Pass? |
|-------|-------|
| Landing loads | |
| Hero **Package A** CTA → Stripe checkout **$497** (live, not test) | |
| Hero **Package B** CTA → Stripe checkout **$600** (live) | |
| Package card CTAs same as hero | |
| Footer mailto → futbolmasta9@gmail.com | |
| Intake A opens + mailto works | |
| Intake B opens + mailto works | |

Optional: one **test-mode** checkout with 4242… to confirm flow without charging live (use test URLs only for this).

### Step 4 — Start outreach clock · Ryan

In `docs/OUTREACH_14_DAY.md`:

- Write **actual start date** (today if Steps 1–3 pass)
- Landing URL: `https://futbolmasta09.github.io/cash-first-offer/`
- Check Day 0 foundation boxes (payment links, landing, kit + deposit work)

**Phase 1 complete** when all four steps pass.

---

## Phase 1 acceptance (final)

- [ ] Live kit + deposit Payment Links (no `/test_` on public URLs)
- [ ] `PAYMENT_LINKS.md` filled
- [ ] Landing CTAs → live checkout
- [ ] Smoke test passed
- [ ] Outreach start date written

---

## Out of scope (not Phase 1)

- Service terms page → **next session** (`docs/HANDOFF_LEGAL_TERMS_NEXT_SESSION.md`)
- Fiverr/Upwork profiles → Phase 2 (same weekend OK after Phase 1)
- Final $600 Package B link → first B client handoff

**Workflow:** Cursor = brain/plan; Claude/Codex desktop = implement/audit.
