# Landing page

Single static marketing page for the cash-first offer. No build step, no
framework, no dependencies — just [`index.html`](index.html).

Copy source: [`../docs/OFFER_COPY.md`](../docs/OFFER_COPY.md) (headline option 1).
Acceptance criteria: [`../docs/HANDOFF_LANDING_PAGE.md`](../docs/HANDOFF_LANDING_PAGE.md).

## Preview locally

Open `landing/index.html` directly in a browser, or serve the folder:

```bash
npx serve landing
```

## Deploy — GitHub Pages (one-time setup)

A GitHub Actions workflow ([`.github/workflows/pages.yml`](../.github/workflows/pages.yml))
publishes the `landing/` folder on every push to `master`.

1. Go to **repo → Settings → Pages**.
2. Under **Build and deployment → Source**, choose **GitHub Actions**.
3. Push to `master` (or re-run the "Deploy landing page to GitHub Pages"
   workflow from the Actions tab). First run takes ~1 minute.

Live URL: **https://futbolmasta09.github.io/cash-first-offer/**

## Payment links (live)

CTAs in [`index.html`](index.html) point at Stripe Payment Links — see [`../docs/PAYMENT_LINKS.md`](../docs/PAYMENT_LINKS.md). After changing URLs, commit and push; Pages redeploys in ~1 minute.

## What is intentionally NOT here

No analytics SDK, no login, no database, no Stripe Elements — Payment Links
only, per the handoff. No testimonials.
