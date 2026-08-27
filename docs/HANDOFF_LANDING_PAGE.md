# Handoff — Landing page (Claude / Codex desktop)

**For:** Claude Code or Codex **desktop** (implement)  
**Not for:** Cursor Task subagents  
**Date:** 2026-08-27  
**Authority:** SD-018 · `04-experiments\cash-first-offer\`  
**Workflow:** Cursor = brain/plan; Claude/Codex desktop = implement/audit.

---

## Mission

Ship a **single marketing landing page** for the cash-first offer this weekend. Headline, three bullets, two packages, deposit CTAs. No SaaS app. No auth. No database.

## Already done / dirty state

- Offer copy locked in `OFFER_COPY.md`
- Prices locked: Package A $497 · Package B $1,200 ($600 deposit)
- Payment link URLs may still be `TODO` in `PAYMENT_LINKS.md` — use clear placeholders `#pay-kit` / `#pay-deposit` if links are not live yet, and leave a one-line README note for Ryan to paste URLs
- Repo authorized under SD-018a — implement the page into `landing/` in the `cash-first-offer` repo (still Payment Links only, still no SaaS)

## Recommended implementation (pick simplest)

**Preferred:** one static HTML file (or tiny Vite/React single page) deployable to **Vercel** or **GitHub Pages** in under an hour.

Acceptable alternatives: Carrd / Framer — only if Ryan prefers a no-code host; then stop after publishing and documenting the URL.

## Exact acceptance criteria

1. Live public URL Ryan can share
2. Uses copy from `OFFER_COPY.md` (headline option 1 or 2; both packages; who-for / who-not)
3. Two primary CTAs:
   - Start Package A → Kit payment URL
   - Start Package B (deposit) → Deposit payment URL
4. Mobile-readable; no broken layout on phone width
5. No fake testimonials
6. Footer: contact email Ryan provides (ask once if missing; use `TODO@example` only in local draft, not production)
7. No analytics SDK required for v1
8. No login, no Supabase, no Stripe Elements integration — **Payment Links only**

## Out of scope

- Building Package A or B deliverables
- Fiverr/Upwork setup
- Branding / logo design sprint
- Blog, SEO content factory, email capture beyond optional single mailto
- Kira Calendar anything
- Creating a separate studio flagship repository (this repo is already capped/non-flagship under SD-018a)

## Stop condition

Stop when the page is live, both CTAs point at payment links (or documented placeholders Ryan can swap in 2 minutes), and you report: live URL, files changed, how to update the payment URLs.

## Paste prompt for Claude / Codex

```
Read C:\App Development\04-experiments\cash-first-offer\HANDOFF_LANDING_PAGE.md
and OFFER_COPY.md + PAYMENT_LINKS.md.

Implement only the landing page per acceptance criteria, into landing/ in this repo.
Do not build the service deliverables.
Prefer a single static page on Vercel or GitHub Pages.
When done: give me the live URL and how to paste payment links.
```
