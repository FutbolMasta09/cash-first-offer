# Handoff — Codex audit BOTH social plans (now)

**For:** Codex **desktop** — paste the block below into a **new Codex chat**  
**Not for:** Claude · Cursor Task subagents · rewriting copy · legal review  
**Date:** 2026-08-31  
**Agent root:** `C:\App Development\04-experiments\cash-first-offer`  
**Workflow:** Cursor = brain/plan; Claude/Codex desktop = implement/audit.

---

## Context (read this first)

Ryan has **two** social promo tracks for Following the Ferrells (Package A/B). **No plan is chosen yet.**

| Track | Summary |
|-------|---------|
| **Plan A — High-touch** | 2–3 service-adjacent posts in first 14 days, then ~1 every 1–2 weeks |
| **Plan B — Less is more** | Bio + link hub + **one** flagship post in 14 days + Stories sparingly |

**Ryan will show Kira both plans himself** and they will decide together **later**. This audit runs **now**, before that conversation.

**Your job:** Audit **both** plans plus shared foundation. Report only — do not rewrite marketing voice unless a **factual error** exists.

---

## Authority docs (read in this order)

1. [`docs/HANDOFF_FTF_SOCIAL_PROMO.md`](HANDOFF_FTF_SOCIAL_PROMO.md) — both plans, paste-ready copy, bio, schedules  
2. [`docs/FTF_CATALOG.md`](FTF_CATALOG.md) — brand lanes, Package B placement rule  
3. [`docs/OFFER_COPY.md`](OFFER_COPY.md) — package facts, prices, exclusions  
4. [`docs/PAYMENT_LINKS.md`](PAYMENT_LINKS.md) — live Stripe URLs  
5. [`docs/FTF_SOCIAL_PRE_KIRA_AUDIT.md`](FTF_SOCIAL_PRE_KIRA_AUDIT.md) — Cursor pre-audit (confirm or dispute F01–F03)  
6. Live spot-check: https://futbolmasta09.github.io/cash-first-offer/ and `/terms.html`

---

## Audit checklist

Run **separate passes** for: **Shared** · **Plan A** · **Plan B**.

### Shared foundation (bio, link hub, objections, brand rules)

- [ ] Link-in-bio requires multiple lanes — cash-first landing is **not** the sole link  
- [ ] Framing matches *"we run a digital business; we can set yours up too"* — not Fiverr/gig spam  
- [ ] No Take the Detour / agent-training IP  
- [ ] Creator-flavored Package A for FTF; generic B2B reserved for Fiverr/Upwork  
- [ ] Kira = face/voice/DM triage · Ryan = payment/delivery/intake  
- [ ] DM objection table matches OFFER_COPY facts  
- [ ] Public posts use landing URL only — not raw Stripe in captions  

### Plan A — High-touch

- [ ] Feed mix ~70/20/10 (lifestyle / behind-build / services) is realistic  
- [ ] Week-1 cadence (Reel day 1, carousel day 3, story day 7) feasible vs expected lifestyle post volume  
- [ ] Reel + carousel + story copy: prices, exclusions, deliverables accurate  
- [ ] Package B prominence on feed vs FTF_CATALOG rule (*B on cash page / DM unless asked*)  
- [ ] Pin-one-services-post rule does not overwhelm lifestyle feed  
- [ ] Facebook: no cold group spam  

### Plan B — Less is more

- [ ] Single flagship post + bio is sufficient for 14-day outreach experiment  
- [ ] Flagship caption: prices, exclusions, deliverables accurate  
- [ ] Package B in flagship post vs FTF_CATALOG placement rule  
- [ ] Story-only-after-post rules clear  
- [ ] Day-10 optional boost post — sensible fallback, not scope creep  

### Offer accuracy (all copy blocks — both plans)

- [ ] Package A: **$497** upfront · weekend after payment · no custom coding  
- [ ] Package A includes: prompt library, SOP, GPT **or** Claude Project, handoff  
- [ ] Package B: **$1,200** total · **$600** deposit · ~1 week after approved brief · two revision rounds  
- [ ] Exclusions stated or implied: no brochure sites, no full SaaS, no free trial  
- [ ] Terms page live and linked from landing footer  

### Experiment / governance

- [ ] Neither plan recommends "build more product" instead of posting  
- [ ] Posts log as outreach touches in OUTREACH_14_DAY.md  
- [ ] Kira not positioned as co-owner of cash-first experiment  
- [ ] UGC/PDF SKUs not promised before they exist  
- [ ] Compatible with Day-14 review **2026-09-12**  

### Out of scope — do not fail for these

- Plan not chosen yet  
- Kira voice/style preferences  
- Link hub vendor (Linktree vs Stan)  
- Fiverr/Upwork not live  
- Lady's RV / UGC placeholder links  
- Attorney review deferred  

---

## Required report format

### 1. Checklist tables

| Area | Pass / Fail / N/A | Note |
|------|-------------------|------|
| Shared foundation | | |
| Plan A | | |
| Plan B | | |
| Offer accuracy | | |
| Experiment / governance | | |

### 2. Per-plan verdict

```
PLAN A VERDICT: PASS | PASS WITH NOTES | FAIL
PLAN B VERDICT: PASS | PASS WITH NOTES | FAIL
OVERALL VERDICT: PASS | PASS WITH NOTES | FAIL
```

### 3. Findings (numbered)

```
- F01 [BLOCKING|MEDIUM|LOW]: ...
- F02 ...
```

**Blocking:** wrong price, wrong URL, false deliverable, sole bio link to cash page, Take the Detour IP, raw Stripe in public caption.

### 4. Plan comparison (for Ryan + Kira conversation)

Short table: which plan fits low posting frequency, FTF catalog alignment, outreach volume, main risk.

### 5. Recommended fixes (if any)

Per plan — factual/placement fixes only. No full copy rewrites unless blocking.

### 6. Cross-check Cursor pre-audit

Confirm or dispute F01–F03 in `FTF_SOCIAL_PRE_KIRA_AUDIT.md`.

**Stop.** Do not commit unless Ryan asks.

---

## Paste this into Codex desktop (full prompt)

```
Cash-first offer — Codex audit BOTH FTF social plans (no plan chosen yet).

Agent root: C:\App Development\04-experiments\cash-first-offer

Read docs/HANDOFF_FTF_SOCIAL_CODEX_AUDIT_BOTH_PLANS.md and follow it exactly.

Then read:
- docs/HANDOFF_FTF_SOCIAL_PROMO.md (Plan A + Plan B + shared copy)
- docs/FTF_CATALOG.md
- docs/OFFER_COPY.md
- docs/PAYMENT_LINKS.md
- docs/FTF_SOCIAL_PRE_KIRA_AUDIT.md (cross-check F01–F03)

Mission: AUDIT ONLY. Ryan has NOT chosen a plan. Ryan will show Kira both plans later and they will decide together. Audit BOTH plans plus shared foundation now.

Run the full checklist in the Codex handoff (Shared, Plan A, Plan B, offer accuracy, experiment/governance).

Spot-check live URLs if reachable:
- https://futbolmasta09.github.io/cash-first-offer/
- https://futbolmasta09.github.io/cash-first-offer/terms.html

Return:
1. Checklist tables (Shared, Plan A, Plan B, offer accuracy, governance)
2. PLAN A VERDICT, PLAN B VERDICT, OVERALL VERDICT
3. Numbered findings (F01, F02, …) with severity
4. Plan comparison table for Ryan + Kira
5. Recommended fixes (factual/placement only — no marketing rewrites unless blocking)
6. Confirm or dispute Cursor pre-audit F01–F03

Do not rewrite copy. Do not commit unless Ryan asks.
```

---

## After Codex returns

1. Ryan reads Codex report (+ optional Cursor pre-audit in `FTF_SOCIAL_PRE_KIRA_AUDIT.md`)  
2. Ryan shows **both** plans to Kira on his own schedule  
3. Ryan + Kira pick Plan A or B → record on `HANDOFF_FTF_SOCIAL_PROMO.md` Step 2  
4. Apply recommended fixes for chosen plan → link hub → post → log in `OUTREACH_14_DAY.md`

**Pre-post audit (optional):** If copy changes heavily after Kira edits, run pre-post prompt in [`HANDOFF_FTF_SOCIAL_AUDIT.md`](HANDOFF_FTF_SOCIAL_AUDIT.md).
