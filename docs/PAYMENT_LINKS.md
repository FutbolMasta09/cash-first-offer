# Payment links

**Status:** LIVE — Stripe Payment Links (2026-08-29)  
**Do not commit secrets.** Public payment URLs only. No API keys.

| Product | Amount | Live URL | Created |
|---|---|---|---|
| AI Operating Kit | $497 | https://buy.stripe.com/6oU28k6rKd8IdFc1XncMM00 | 2026-08-29 |
| Custom Mini-Tool — deposit | $600 | https://buy.stripe.com/fZu8wI9DW0lWgRo7hHcMM01 | 2026-08-29 |
| Custom Mini-Tool — final | $600 | `TODO` (create when first B client reaches handoff) | |

## Checklist

- [x] Processor chosen: **Stripe** (futbolmasta.itch.io / JOEL FERRE checkout display)
- [x] Kit link live (test verified in Sandbox; live via Copy to livemode)
- [x] Deposit link live
- [x] Confirmation page points buyers to intake forms + futbolmasta9@gmail.com
- [x] Links pasted into landing page (`landing/index.html`)
- [ ] Links pasted into Fiverr + Upwork + outreach posts (Phase 2)

## Notes

Processor account email: confirm Stripe login / payment receipt email (Claude enabled successful-payment receipts; verify it reaches `futbolmasta9@gmail.com`)  
Buyer contact: **futbolmasta9@gmail.com** (landing footer + intake mailto)

**Adaptive Pricing:** Stripe Dashboard has Payment Links adaptive pricing **always on** for this account (no toggle). International buyers may see optional local-currency display; payout remains USD. Accepted for Phase 1 — revisit via Stripe support if USD-only display becomes required.

**Test links (do not use on public storefront):** Sandbox URLs in `docs/HANDOFF_STRIPE_TEST_LINKS_RESULT.md`.
