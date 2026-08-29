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
- [ ] Stripe product descriptions include service terms URL (see below — Ryan Dashboard)
- [ ] Links pasted into Fiverr + Upwork + outreach posts (Phase 2)

## Notes

Processor account email: confirm Stripe login / payment receipt email (Claude enabled successful-payment receipts; verify it reaches `futbolmasta9@gmail.com`)  
Buyer contact: **futbolmasta9@gmail.com** (landing footer + intake mailto)

**Adaptive Pricing:** Stripe Dashboard has Payment Links adaptive pricing **always on** for this account (no toggle). International buyers may see optional local-currency display; payout remains USD. Accepted for Phase 1 — revisit via Stripe support if USD-only display becomes required.

**Test links (do not use on public storefront):** Sandbox URLs in `docs/HANDOFF_STRIPE_TEST_LINKS_RESULT.md`.

## Stripe product descriptions (add terms URL)

**Dashboard:** [Payment Links](https://dashboard.stripe.com/payment-links) → each link → **Edit** → product **Description**.

Append this line to the end of each description (keep existing copy above it):

`Full service terms: https://futbolmasta09.github.io/cash-first-offer/terms.html`

**Link 1 — AI Operating Kit ($497)** — full description:

```
AI operating kit: prompt library, one-page SOP, GPT/Claude Project tuned to client voice. Delivered in a weekend. Full service terms: https://futbolmasta09.github.io/cash-first-offer/terms.html
```

**Link 2 — Custom Mini-Tool deposit ($600)** — full description:

```
50% deposit for one-purpose internal web tool. ~7 days after deposit + approved brief. Final $600 before handoff. Full service terms: https://futbolmasta09.github.io/cash-first-offer/terms.html
```

*(Cursor cannot edit Stripe Dashboard — paste the blocks above in ~60 seconds.)*
