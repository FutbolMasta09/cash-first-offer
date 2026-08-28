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

## TODO before sharing the URL publicly — paste payment links

The two CTA buttons currently point at placeholders (`#pay-kit`,
`#pay-deposit`). Replace them once the Stripe / Lemon Squeezy / PayPal links
are live (see [`../docs/PAYMENT_LINKS.md`](../docs/PAYMENT_LINKS.md)):

1. Open [`index.html`](index.html).
2. Find & replace **`#pay-kit`** → the **AI Operating Kit ($497)** payment URL.
   It appears **twice** (hero button + Package A card). Replace both.
3. Find & replace **`#pay-deposit`** → the **Custom Mini-Tool deposit ($600)**
   payment URL. Also appears **twice** (hero + Package B card). Replace both.
4. Commit and push. Pages redeploys automatically in ~1 minute.

Quick check: search the file for `#pay-` — there should be **zero** matches
left when both links are in.

## What is intentionally NOT here

No analytics SDK, no login, no database, no Stripe Elements — Payment Links
only, per the handoff. No testimonials.
