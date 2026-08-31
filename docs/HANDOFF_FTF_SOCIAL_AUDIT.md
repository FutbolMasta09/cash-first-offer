# Handoff — FTF social promo audit (Codex desktop)

**Primary handoff (audit BOTH plans now):** [`HANDOFF_FTF_SOCIAL_CODEX_AUDIT_BOTH_PLANS.md`](HANDOFF_FTF_SOCIAL_CODEX_AUDIT_BOTH_PLANS.md)  
**This file:** pre-post audit after plan chosen · legacy pre-Kira prompt  
**For:** Codex **desktop**  
**Date:** 2026-08-31  
**Workflow:** Cursor = brain/plan; Claude/Codex desktop = implement/audit.

---

## Which handoff to use

| When | File |
|------|------|
| **Now — audit Plan A + Plan B, no choice yet** | [`HANDOFF_FTF_SOCIAL_CODEX_AUDIT_BOTH_PLANS.md`](HANDOFF_FTF_SOCIAL_CODEX_AUDIT_BOTH_PLANS.md) |
| **Later — after Ryan + Kira pick a plan and edit copy** | This file (pre-post prompt below) |

Ryan shows Kira both plans on his own schedule after Codex report. Plan choice is **not** required for the now-audit.

---

## Inputs to review

| Doc | Purpose |
|-----|---------|
| [`HANDOFF_FTF_SOCIAL_PROMO.md`](HANDOFF_FTF_SOCIAL_PROMO.md) | Chosen plan, bio, paste-ready copy |
| [`FTF_CATALOG.md`](FTF_CATALOG.md) | Brand lanes, placement rules |
| [`OFFER_COPY.md`](OFFER_COPY.md) | Package facts, objections |
| [`PAYMENT_LINKS.md`](PAYMENT_LINKS.md) | Live Stripe URLs |
| Landing (live) | https://futbolmasta09.github.io/cash-first-offer/ |
| Terms (live) | https://futbolmasta09.github.io/cash-first-offer/terms.html |

Ryan fills in on the promo handoff:

- **Pre-Kira mode:** leave plan unchecked; audit **both** Plan A and Plan B sections + shared copy
- **Pre-post mode:** chosen plan (A or B), link hub URL, any Kira-edited final captions

---

## Audit checklist

### A. Brand / FTF alignment

- [ ] Lifestyle feed is not dominated by Package A/B (Plan A ≤ ~10% of posts; Plan B = 1 post + bio)
- [ ] Framing matches *"we run a digital business; we can set yours up too"* — not cold gig spam
- [ ] No Take the Detour / agent-training IP referenced
- [ ] Creator-flavored A used for FTF audience; generic B2B copy reserved for Fiverr/Upwork
- [ ] Link-in-bio keeps multiple lanes (cash-first landing is **not** the sole link)
- [ ] Kira role = face/voice/triage; Ryan = payment/delivery — not blurred into "Kira builds apps"

### B. Offer accuracy (vs OFFER_COPY + PAYMENT_LINKS)

- [ ] Package A: **$497** upfront · weekend after payment · no custom coding
- [ ] Package B: **$1,200** · **$600** deposit · ~1 week after approved brief · two revision rounds
- [ ] Exclusions stated or implied: no brochure sites, no full SaaS, no free trial
- [ ] Public posts use **landing URL** — not raw Stripe checkout links
- [ ] Terms page exists and is linked from landing footer
- [ ] Stripe URLs in PAYMENT_LINKS match live landing if spot-checked

### C. Platform / cadence

- [ ] Plan A and Plan B are both auditable; pre-Kira: flag tradeoffs, do not fail for “plan not chosen”
- [ ] Plan A week-1 cadence realistic given expected lifestyle post volume (see F03 in pre-Kira audit)
- [ ] Instagram, TikTok, Facebook guidance matches each plan’s section
- [ ] Facebook: no unsolicited group spam in plan
- [ ] Hashtag count reasonable (≤ 8); no misleading claims
- [ ] Story / Reel / carousel copy consistent with the plan being recommended

### D. Experiment constraints

- [ ] Plan does not recommend "build more product" instead of posting
- [ ] Compatible with Day-14 clock (**2026-09-12**) — posts count as logged outreach touches
- [ ] Kira promo does not position her as co-owner of cash-first experiment track
- [ ] No collision with FTF catalog gates (UGC/PDF SKUs not promised before they exist)

### E. Out of scope — do not fail audit for these

- Kira voice tweaks (style, not facts)
- Link hub vendor choice (Linktree vs Stan)
- Fiverr/Upwork not live yet
- Attorney review not done (deferred)
- Lady's RV / UGC links placeholder until those SKUs ship

---

## Report format

Return a short table:

| Check | Pass / Fail / N/A | Note |
|-------|-------------------|------|

Then:

```
VERDICT: PASS | PASS WITH NOTES | FAIL

Findings:
- F01 [BLOCKING|MEDIUM|LOW]: ...
...

Recommended fixes (if any):
- ...

Shippable for first post? Yes / No
```

**Blocking failures:** wrong price, wrong URL, false deliverable promise, sole bio link to cash page only, Take the Detour IP, raw Stripe in public caption.

**Stop.** Do not rewrite copy unless Ryan asks — report only.

---

## Paste prompt for Codex — audit BOTH plans now

**Use this handoff instead:** [`HANDOFF_FTF_SOCIAL_CODEX_AUDIT_BOTH_PLANS.md`](HANDOFF_FTF_SOCIAL_CODEX_AUDIT_BOTH_PLANS.md) — full checklist + paste block at bottom.

---

## Paste prompt for Codex — pre-post (after plan chosen)

```
Read C:\App Development\04-experiments\cash-first-offer\docs\HANDOFF_FTF_SOCIAL_AUDIT.md.

Ryan and Kira chose Plan A or B in HANDOFF_FTF_SOCIAL_PROMO.md (check chosen plan + any edited captions).

Audit only — do not rewrite marketing voice unless a factual error exists.

Run checklist sections A–D. Compare copy to FTF_CATALOG.md, OFFER_COPY.md, and PAYMENT_LINKS.md.
Spot-check live landing + terms URLs if reachable.

Return Pass/Fail table, VERDICT, and Shippable Yes/No. Do not commit unless Ryan asks.
```
