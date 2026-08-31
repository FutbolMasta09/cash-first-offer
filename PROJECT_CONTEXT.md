# Cash-first offer — Project Context

**Version:** 1.0
**Last updated:** 2026-08-29 (legal/terms complete)
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
Day 14 = 2026-09-12 · Day 30 = 2026-09-26

## Purpose

Get one paying human to send a deposit within 14 days for a scoped AI/workflow install. Productize only after proof of payment interest.

## Strategic job

Near-term household cash. Not creative IP. Not partner product. Not primary build.

## Capacity

- Ryan only (work downtime + nights/weekends)
- Kira: optional one promotional post if it does not collide with her own idea — not a co-founder of this track
- Prefer home machine for client-facing work, invoices, and other people's data

## Target Audience
→ See `docs/TARGET_AUDIENCE.md`

## Business Model
→ See `docs/MONETIZATION.md`

## Current Phase

**Phase 2 — Outreach (Days 1–14)** — clock started **2026-08-29** · Day-14 review **2026-09-12**
- **Immediate next:** Fiverr + Upwork profiles + 10–20 outreach touches → `docs/OUTREACH_14_DAY.md`
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
| Fiverr / Upwork | MED | **Next** — Day 0 marketplace in `OUTREACH_14_DAY.md` |
| FTF social (Kira) | MED | **Next** — `HANDOFF_FTF_SOCIAL_PROMO.md` · Codex audit before first post |
| Outreach volume | — | **In progress** — 0/10–20 touches · Day-14 **2026-09-12** |

## Architecture (short)

Static landing page only (no SaaS, no auth, no database). Payment Links (Stripe/Lemon Squeezy/PayPal) handle money; no card data touches this repo. See `docs/DECISIONS.md` D001 for the full scaffold-scope decision.

## Key Files

| File | Purpose |
|---|---|
| `PROJECT_CONTEXT.md` | This file — project brain |
| `docs/DECISIONS.md` | Decision log (D001 = scope/waiver) |
| `docs/LAST_SESSION.md` | Most recent handoff |
| `docs/KILL_CRITERIA.md` | When to change offer/channel/price or kill |
| `docs/GROWTH.md` | Later seams (clients/, kits/) — plans only |

## AI Tool Routing
→ See `C:\App Development\llm-wiki\PROTOCOLS.md` Section 10. **Workflow:** Cursor = brain/plan; Claude/Codex desktop = implement/audit.

## Authority

Parent: `C:\App Development\DECISION_LOG.md` (2026-08-27, SD-018a)
Studio: `studio-ops\docs\DECISIONS.md` SD-018 / SD-018a
