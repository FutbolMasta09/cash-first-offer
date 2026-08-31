# Cash-first offer — Project Context

**Version:** 1.0
**Last updated:** 2026-08-31 (Kira brand handoff D004; outreach clock not started)
**Type:** Workflow Tool / experimental revenue-engine service offer (not a flagship product)
**Status:** ACTIVE EXPERIMENT — SD-018 / SD-018a
**Target platform:** Web (static landing) + Fiverr/Upwork marketplaces
**Data Risk Tier:** 3 — static/offline storefront (Payment Links + mailto only, no analytics SDK, no hosted forms) — see `docs/SECURITY_CHECKLIST.md`; re-checks to Tier 1 the moment any real client data enters by any route
**Banner:** EXPERIMENT · SD-018 / SD-018a · expires 2026-09-26 unless promoted

---

## What This Is

A cash-first paid service offer (AI operating kit $497 / custom mini-tool $1,200) — the goal is one paying human sending a deposit within 14 days, not a product build. This repo is the capped, standing home for that offer's docs, storefront, and outreach; it is authorized as organizational scaffolding under SD-018a, not as a primary build.

## Working name
Cash-first offer (AI operating kit + custom mini-tool)

## Stop dates

**Experiment opened:** 2026-08-27 · **Day 30:** 2026-09-26 (unchanged)  
**Outreach 14-day clock:** **Not started** as of 2026-08-31 — starts when Ryan + Kira kick off (log first touch or agreed date in [`docs/OUTREACH_14_DAY.md`](docs/OUTREACH_14_DAY.md))  
**Day-14 review:** TBD — outreach start + 14 days

## Purpose

Get one paying human to send a deposit within 14 days for a scoped AI/workflow install. Productize only after proof of payment interest.

## Strategic job

Near-term household cash. Not creative IP. Not partner product. Not primary build.

## Capacity

- Ryan only (work downtime + nights/weekends) — client installs, landing, payment, intake, delivery
- Kira — Plan A social partner (face/voice, content strategy, DM triage, Stan Store); **not** co-founder of cash-first track but active Tier-1 channel per D004 · see [`Following the Ferrells — Brand & Content Handoff.md`](docs/Following%20the%20Ferrells%20%E2%80%94%20Brand%20%26%20Content%20Handoff.md)
- Prefer home machine for client-facing work, invoices, and other people's data

## Target Audience
→ See `docs/TARGET_AUDIENCE.md`

## Business Model
→ See `docs/MONETIZATION.md`

## Current Phase

**Phase 2 — Outreach (Days 1–14)** — clock **not started** (pending kickoff) · Day-14 review **TBD**
- **Immediate next:** Kira builds Stan · Plan A posts when ready · Ryan Tier 1–2 outreach when clock starts → [`docs/OUTREACH_CHANNELS.md`](docs/OUTREACH_CHANNELS.md) · log in [`docs/OUTREACH_14_DAY.md`](docs/OUTREACH_14_DAY.md)
- **Fiverr / Upwork:** optional Tier 3 — Day 10+ only if Tier 1–2 silent (D003)
- **Phase 1:** ✅ complete — landing, live Stripe, intake, smoke test
- **Legal / terms:** ✅ complete — `landing/terms.html`, Florida governing law, Stripe clickable ToS checkbox (both links)

## Out of scope

- Kira Calendar launch/payout chase
- Games, Steam, App Store
- Subscription SaaS as opening move
- Generic brochure websites as the lead offer
- `clients/` and `kits/` folders — plans only in `docs/GROWTH.md` until Track A moves

## Success evidence

- Day 14: ≥1 paid deposit **or** documented change of offer/channel/price (not "build more")
- Day 30: either first job delivered / kit productized, or experiment killed with a written reason

## Open Flags / Known Issues

| Flag | Severity | Status |
|---|---|---|
| Live payment links | — | **Live** — `PAYMENT_LINKS.md` + landing (2026-08-29) |
| Landing page | — | **Live** — https://futbolmasta09.github.io/cash-first-offer/ |
| Service terms | — | **Live** — https://futbolmasta09.github.io/cash-first-offer/terms.html · Stripe ToS checkbox on both links |
| Fiverr / Upwork | LOW | **Optional** — Tier 3, Day 10+ if silent · D003 |
| FTF social (Kira) | — | **Aligned** — Plan A + brand handoff received (D004) · Stan in progress |
| Warm / community outreach | MED | **Next** — local, FB groups, SWC, Reddit/Discord · `OUTREACH_CHANNELS.md` |
| Outreach volume | — | **Not started** — 0/10–20 touches · clock starts at kickoff |

## Architecture (short)

Static landing page only (no SaaS, no auth, no database). Payment Links (Stripe/Lemon Squeezy/PayPal) handle money; no card data touches this repo. See `docs/DECISIONS.md` D001 for the full scaffold-scope decision.

## Key Files

| File | Purpose |
|---|---|
| `PROJECT_CONTEXT.md` | This file — project brain |
| `docs/DECISIONS.md` | Decision log (D001 = scope/waiver; D004 = FTF brand) |
| `docs/Following the Ferrells — Brand & Content Handoff.md` | Kira brand authority (D004) |
| `docs/HANDOFF_SERVICE_PRODUCT_EXPANSION.md` | Next planning session — expand services/products beyond A/B |
| `docs/LAST_SESSION.md` | Most recent handoff |
| `docs/KILL_CRITERIA.md` | When to change offer/channel/price or kill |
| `docs/OUTREACH_CHANNELS.md` | Tier 1/2/3 channel ranking (D003) |
| `docs/GROWTH.md` | Later seams (clients/, kits/) — plans only |

## AI Tool Routing
→ See `C:\App Development\llm-wiki\PROTOCOLS.md` Section 10. **Workflow:** Cursor = brain/plan; Claude/Codex desktop = implement/audit.

## Authority

Parent: `C:\App Development\DECISION_LOG.md` (2026-08-27, SD-018a)
Studio: `studio-ops\docs\DECISIONS.md` SD-018 / SD-018a
