# Cursor brain — next chat bootstrap (cash-first)

**For:** New Cursor Agent chat  
**Date:** 2026-08-28  
**Repo:** `C:\App Development\04-experiments\cash-first-offer` — `master` @ `45d81eb` (or newer)  
**Workflow:** Cursor = brain/plan; Claude/Codex desktop = implement/audit.

---

## Primary handoff (read this)

**Phase 1 storefront session:** [`docs/HANDOFF_PHASE_1_STOREFRONT.md`](HANDOFF_PHASE_1_STOREFRONT.md)

That file has the paste block, task order, child handoffs, acceptance criteria, and full context. **Start there.**

---

## Paste this into the new Cursor chat

```
Cash-first offer — Phase 1 storefront session.

Agent root: C:\App Development\04-experiments\cash-first-offer

Enter session:
1. git fetch; confirm master @ 45d81eb or newer; status clean except intentional dirty.
2. Read PROJECT_CONTEXT.md, docs/LAST_SESSION.md, docs/DECISIONS.md (D001).
3. Read docs/HANDOFF_PHASE_1_STOREFRONT.md (master plan for this session).

State of world:
- SD-018 / SD-018a active. Experiment expires 2026-09-26 unless promoted.
- Repo scaffolded + pushed. Strategy, offer copy, markdown intake, FTF catalog done.
- Phase 1 NOT done: payment links, landing page, HTML intake forms, smoke test.
- Day-14 review: 2026-09-10. Outreach clock starts when links + landing are live.
- No clients/ or kits/ folders. Kira Calendar not on this track.

This session’s job — Phase 1 only:
1. Ryan: create payment links → fill docs/PAYMENT_LINKS.md
2. Claude/Codex: landing page via docs/HANDOFF_LANDING_PAGE.md → landing/
3. Claude/Codex: HTML intake forms via docs/HANDOFF_CLIENT_INTAKE_HTML.md → tools/
4. Ryan: smoke test all links; write outreach start date in OUTREACH_14_DAY.md when live

Do NOT: Fiverr/Upwork, outreach volume, build FTF brand SKUs, SaaS, clients/ kits/.
Cursor plans/reviews; paste child handoffs to Claude desktop unless Ryan says implement here.

Exit: update LAST_SESSION.md; ask commit/push.
```

---

## Where we left off

| Item | State |
|---|---|
| Nested repo | Live, private, pushed (`FutbolMasta09/cash-first-offer`) |
| SD-018a | Authorized |
| Offer + markdown intake + FTF catalog | Done |
| **Phase 1 (next session)** | Payment links · landing · HTML intake · smoke test |
| Phase 2 outreach | Checklist ready — after Phase 1 |
| Day-14 | 2026-09-10 |

## Child handoffs (Phase 1)

| Task | Handoff |
|------|---------|
| Landing | `docs/HANDOFF_LANDING_PAGE.md` |
| HTML intake | `docs/HANDOFF_CLIENT_INTAKE_HTML.md` |
| Payment URLs | `docs/PAYMENT_LINKS.md` (Ryan fills) |

## Do not

- Put filled client answers into this repo  
- Create `clients/` or `kits/`  
- Start Phase 2 outreach in a Phase 1 session unless Ryan says so  
- Burn Cursor Task subagents as “Claude”

## After Phase 1

Phase 2: Fiverr + Upwork + outreach → day-14 review on 2026-09-10.

**Parked — legal session (Ryan):** [`docs/HANDOFF_LEGAL_TERMS_NEXT_SESSION.md`](HANDOFF_LEGAL_TERMS_NEXT_SESSION.md) — service terms research, DIY enforceability, terms→payment flow, FTF category legal plan. Run after live Stripe or before heavy outreach.
