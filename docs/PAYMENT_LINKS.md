# Payment links

**Status:** LIVE — Stripe Payment Links (2026-08-29)  
**Do not commit secrets.** Public payment URLs only. No API keys.

| Product | Amount | Live URL | Created |
|---|---|---|---|
| AI Operating Kit | $497 | https://buy.stripe.com/6oU28k6rKd8IdFc1XncMM00 | 2026-08-29 |
| Custom Mini-Tool — deposit | $600 | https://buy.stripe.com/fZu8wI9DW0lWgRo7hHcMM01 | 2026-08-29 |
| Custom Mini-Tool — final | $600 | `TODO` (create when first B client reaches handoff) | |

## Checklist

- [x] Processor chosen: **Stripe** (futbolmasta.itch.io; checkout display name may still show **JOEL FERRE** — update in Stripe Brand settings if you want full legal name)
- [x] Kit link live (test verified in Sandbox; live via Copy to livemode)
- [x] Deposit link live
- [x] Confirmation page points buyers to intake forms + futbolmasta9@gmail.com
- [x] Links pasted into landing page (`landing/index.html`)
- [x] Stripe product descriptions include service terms URL (updated in Dashboard 2026-08-29)
- [x] Stripe Public details Terms URL + payment-link ToS checkbox (clickable on checkout — 2026-08-29)
- [ ] Links pasted into Fiverr + Upwork + outreach posts (Phase 2)

## Notes

Processor account email: confirm Stripe login / payment receipt email (Claude enabled successful-payment receipts; verify it reaches `futbolmasta9@gmail.com`)  
Buyer contact: **futbolmasta9@gmail.com** (landing footer + intake mailto)

**Adaptive Pricing:** Stripe Dashboard has Payment Links adaptive pricing **always on** for this account (no toggle). International buyers may see optional local-currency display; payout remains USD. Accepted for Phase 1 — revisit via Stripe support if USD-only display becomes required.

**Test links (do not use on public storefront):** Sandbox URLs in `docs/HANDOFF_STRIPE_TEST_LINKS_RESULT.md`.

## Stripe terms (clickable on checkout)

**Product descriptions are plain text** — URLs there are not clickable. Use Stripe's built-in flow instead:

1. **Settings → Business → Public details → Terms of service URL**  
   `https://futbolmasta09.github.io/cash-first-offer/terms.html` ✅ (set 2026-08-29)

2. **Each Payment Link → Edit →** check **“Require customers to accept your terms of service”** → Update link  
   - Kit ($497) ✅  
   - Deposit ($600) ✅  

Checkout shows a **clickable “Terms of Service”** link in the agreement checkbox (points to your terms page). Footer “Terms” may still be Stripe’s generic link — the checkbox link is the one that matters.

## Stripe product descriptions (backup text — optional)

Descriptions can still mention terms as plain text (not clickable). Append if desired:

`Full service terms: https://futbolmasta09.github.io/cash-first-offer/terms.html`
