# Handoff — Stripe Payment Links (Claude desktop + browser)

**For:** Claude Code **desktop** with browser/computer use (Ryan already logged into Stripe)  
**Not for:** Cursor Task subagents  
**Date:** 2026-08-28  
**Repo:** `C:\App Development\04-experiments\cash-first-offer`  
**Workflow:** Cursor = brain/plan; Claude/Codex desktop = implement/audit.

---

## Paste this into Claude desktop

```
Task 1 — Stripe Payment Links for cash-first-offer.

Read:
1. C:\App Development\04-experiments\cash-first-offer\docs\HANDOFF_PAYMENT_LINKS_STRIPE.md (this handoff)
2. docs/OFFER_COPY.md (product names, prices, after-payment copy)
3. docs/PAYMENT_LINKS.md (fill target)
4. landing/index.html (swap #pay-kit and #pay-deposit — 4 hrefs total)

Ryan is already logged into Stripe in your browser. Take over the Stripe Dashboard.

Create TWO payment links in TEST mode first, verify checkout with test card 4242424242424242,
then create the SAME two links in LIVE mode (if account allows).

Do NOT use Stripe Elements or embed checkout in HTML — Payment Links only (Tier 3).

When LIVE links exist, update in repo:
- docs/PAYMENT_LINKS.md — table URLs + checklist + processor email futbolmasta9@gmail.com
- landing/index.html — replace all #pay-kit and #pay-deposit hrefs with live URLs

Do not commit API keys or secrets. Public payment URLs only.
Do not commit or push unless Ryan asks — report URLs and files changed.
Stop when both live links work and repo files are updated locally.
```

---

## Mission

Create **two Stripe Payment Links** so strangers can pay Package A ($497) and Package B deposit ($600). Wire the **live** URLs into the repo. No Stripe code on the landing page.

---

## Already done

| Item | Status |
|------|--------|
| Landing live | https://futbolmasta09.github.io/cash-first-offer/ |
| Intake forms live | `/tools/Package_A_Intake_Questions.html` and `Package_B_Intake_Questions.html` on same site |
| Landing CTAs | Placeholders `#pay-kit` and `#pay-deposit` (4 places in `landing/index.html`) |
| `docs/PAYMENT_LINKS.md` | All `TODO` |
| Stripe account | Ryan logged in (likely **Test mode** — orange banner or `/test/` in URL) |

**Skip for now:** Custom Mini-Tool — final $600 link (create when first B client reaches handoff).

---

## Stripe links to create

### Link 1 — AI Operating Kit ($497)

| Field | Value |
|-------|-------|
| **Title** | `AI Operating Kit — $497` |
| **Price** | $497.00 USD, **one time** |
| **Description** (optional) | AI operating kit: prompt library, one-page SOP, GPT/Claude Project tuned to client voice. Delivered in a weekend. |

**After payment / confirmation message:**

```
Thanks — payment received for Package A (AI Operating Kit).

Next step: complete your intake form (every field required):
https://futbolmasta09.github.io/cash-first-offer/tools/Package_A_Intake_Questions.html

Use “Send by email” or “Copy summary” at the bottom of the form.
Questions: futbolmasta9@gmail.com
```

### Link 2 — Custom Mini-Tool deposit ($600)

| Field | Value |
|-------|-------|
| **Title** | `Custom Mini-Tool — Deposit $600` |
| **Price** | $600.00 USD, **one time** |
| **Description** (optional) | 50% deposit for one-purpose internal web tool. ~7 days after deposit + approved brief. Final $600 before handoff. |

**After payment / confirmation message:**

```
Thanks — your $600 deposit for Package B (Custom Mini-Tool) is received.

Next step: complete your intake form (every field required):
https://futbolmasta09.github.io/cash-first-offer/tools/Package_B_Intake_Questions.html

I’ll send a one-page brief within 24 hours. Reply “BRIEF APPROVED” before I start coding.
Questions: futbolmasta9@gmail.com
```

---

## Recommended browser flow

1. **Test mode first** — URL contains `/test/` or orange “test data” banner.
   - Dashboard → **Payment links** → **+ New** (or `.../test/payment-links/create`)
   - Create both links above.
   - Open each link in incognito → pay with `4242 4242 4242 4242`, any future expiry/CVC → confirm success page text.

2. **Live mode** — turn off test mode (or open URL **without** `/test/`).
   - Recreate the **same two links** with identical titles, prices, and confirmation text.
   - These URLs go in the repo and on the public landing page.

3. **If Stripe blocks live links** (“activate account” / verification pending):
   - Finish what you can in test mode.
   - Report blocker clearly; Ryan completes verification.
   - Do **not** put test-mode URLs on the public landing page.

---

## Repo updates (after LIVE links exist)

### `docs/PAYMENT_LINKS.md`

- Replace `TODO` with live URLs in the table.
- Check checklist boxes for processor + kit + deposit + confirmation text.
- Notes: processor account email = `futbolmasta9@gmail.com`.

### `landing/index.html`

Find/replace **all four** hrefs:

| Find | Replace with |
|------|----------------|
| `#pay-kit` | Live Kit URL (2× — hero + Package A card) |
| `#pay-deposit` | Live Deposit URL (2× — hero + Package B card) |

Verify: search file for `#pay-` → **0 matches**.

---

## Acceptance criteria

1. Two **live** Payment Links open Stripe Checkout at $497 and $600.
2. Test checkout succeeded in test mode (report if live blocked).
3. `docs/PAYMENT_LINKS.md` filled with live URLs only (no secrets).
4. `landing/index.html` CTAs point at live URLs (no `#pay-` placeholders).
5. Confirmation messages mention intake URLs and `futbolmasta9@gmail.com`.

---

## Out of scope

- Stripe Elements / embedded checkout on the landing page
- Final $600 Package B handoff link
- Fiverr/Upwork listing setup
- Commit/push (unless Ryan explicitly asks in-session)
- Creating or storing Stripe API keys in the repo

---

## Security

- **Tier 3:** Payment Links only — no card data in this repo.
- Commit **public payment URLs** only. Never `sk_live_`, `sk_test_`, or webhook secrets.

---

## Stop condition

Report back with:

- Live Kit URL + Live Deposit URL
- Whether test checkout passed
- Any live-mode blocker (verification, etc.)
- Files changed locally (`PAYMENT_LINKS.md`, `landing/index.html`)
- Reminder: Ryan/Cursor will commit + push → GitHub Pages redeploys ~1 min

**Workflow:** Cursor = brain/plan; Claude/Codex desktop = implement/audit.
