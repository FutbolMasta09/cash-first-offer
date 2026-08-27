# Cursor brain — next chat bootstrap (cash-first)

**For:** New Cursor Agent chat  
**Date:** 2026-08-27  
**Repo:** `C:\App Development\04-experiments\cash-first-offer` — `master` @ `5ad5e3f` (or newer)  
**Workflow:** Cursor = brain/plan; Claude/Codex desktop = implement/audit.

---

## Paste this into the new Cursor chat

```
Cash-first offer — continue in this repo (agent root should be
C:\App Development\04-experiments\cash-first-offer).

Enter session:
1. git fetch; confirm master @ 5ad5e3f or newer; status clean except intentional dirty.
2. Read PROJECT_CONTEXT.md, docs/LAST_SESSION.md, docs/DECISIONS.md (D001).
3. Read docs/HANDOFF_CURSOR_NEXT.md and docs/HANDOFF_CLIENT_INTAKE_HTML.md.

State of world:
- SD-018 / SD-018a active. Experiment expires 2026-09-26 unless promoted.
- Repo scaffolded + pushed. Storefront NOT live (no payment links / landing yet).
- Markdown intake exists (CLIENT_INTAKE_TEMPLATE.md / CLIENT_PREFLIGHT.md).
- NEXT TASK (Ryan): Amber-style clickable HTML intake forms (MC + text + send answers back),
  modeled on libby-storyworld tools/AMBER_QUESTIONNAIRE_FORM_TEMPLATE.html +
  docs/AMBER_QUESTIONNAIRE_TEMPLATE.md workflow — see HANDOFF_CLIENT_INTAKE_HTML.md.
- Parallel weekend track still open: PAYMENT_LINKS + HANDOFF_LANDING_PAGE + outreach.
- No clients/ or kits/ folders. No Kira Calendar on this track.

This chat’s job:
1. Primary: get Package A + Package B HTML intake forms built (prefer Claude desktop via
   HANDOFF_CLIENT_INTAKE_HTML.md; Cursor plans/reviews only unless Ryan says otherwise).
2. Do not start a SaaS, game, or empty growth folders.
3. After forms: remind Ryan of payment links + landing if still blocked.
4. Exit: update LAST_SESSION; ask commit/push.

Start by confirming HEAD and recommending: paste HTML handoff to Claude vs do payment links first if Ryan wants cash path today.
```

---

## Where we left off

| Item | State |
|---|---|
| Nested repo | Live, private, pushed (`FutbolMasta09/cash-first-offer`) |
| SD-018a | Authorized |
| Client preflight | Markdown master + Amber-style **template doc** done |
| Clickable HTML intake | **Not built yet — next task** |
| Payment links / landing | Not started |
| Outreach | Checklist ready, not run |
| Day-14 | 2026-09-10 |

## This next chat should do

1. Confirm repo root + HEAD.  
2. Drive **HTML client intake forms** (Package A + B) per `docs/HANDOFF_CLIENT_INTAKE_HTML.md`.  
3. Keep storefront (links + landing) unblocked as parallel Ryan/Claude work.  
4. No primary-build drift; no Calendar.

## Do not

- Put filled client answers into this repo  
- Create `clients/` or `kits/`  
- Rewrite the offer strategy  
- Burn Cursor Task subagents as “Claude”

## Authority one-liners

- **SD-018 / 018a:** time-boxed revenue experiment + capped repo  
- **D001:** lightweight service profile; Phase-3 waiver  
- **Tier 3:** storefront; any real client data → Tier 1 / separate client repo  

## After next chat

Concrete remaining: live payment links → landing in `landing/` → Fiverr/Upwork → outreach → day-14 review.
