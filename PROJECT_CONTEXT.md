# Cash-first offer — Project Context

**Version:** 1.0
**Last updated:** 2026-08-27
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
Day 14 = 2026-09-10 · Day 30 = 2026-09-26

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

**Phase — Storefront setup**
- Current sprint: payment links + landing page + Fiverr/Upwork profiles (this weekend)
- Must-ship item this week: live payment links + live landing URL

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
| Payment links not yet live | HIGH | Open — Ryan fills `docs/PAYMENT_LINKS.md` |
| Landing page not yet built | HIGH | Open — `docs/HANDOFF_LANDING_PAGE.md` ready to paste into Claude/Codex |

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
