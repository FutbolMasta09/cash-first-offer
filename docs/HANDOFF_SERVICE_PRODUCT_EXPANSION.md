# Handoff — Service & product expansion planning session

**For:** Ryan + Cursor (planning only — no builds this session)  
**Not for:** Claude/Codex implement until expansion plan is approved and gated  
**Date drafted:** 2026-08-31  
**Authority:** SD-018 · D001 · D004 · [`KILL_CRITERIA.md`](KILL_CRITERIA.md) · [`FTF_CATALOG.md`](FTF_CATALOG.md)  
**Workflow:** Cursor = brain/plan; Claude/Codex desktop = implement/audit.

---

## Mission

Plan the **next wave** of Ryan services and related products/SKUs — beyond today’s Package A ($497 kit) and Package B ($1,200 mini-tool) — without breaking the cash-first experiment or Kira’s brand direction.

**This session outputs a decision doc**, not code. End state:

1. A **ranked shortlist** of expansions (services + products) with buyer, price band, and timing  
2. Clear **gates** (what must happen before each ships)  
3. Explicit **rejects** (ideas we researched and won’t do)  
4. Optional: draft **Package C / SKU names** and one-page scope boundaries for top 1–3 picks  
5. Update [`FTF_CATALOG.md`](FTF_CATALOG.md) and/or new `docs/SERVICE_CATALOG.md` if Ryan approves

---

## Paste into next Cursor chat

```
Cash-first offer — service & product expansion planning session.

Agent root: C:\App Development\04-experiments\cash-first-offer

Enter session:
1. git fetch; read PROJECT_CONTEXT.md, docs/LAST_SESSION.md.
2. Read docs/HANDOFF_SERVICE_PRODUCT_EXPANSION.md (this file) end-to-end.
3. Read docs/FTF_CATALOG.md, docs/OFFER_COPY.md, docs/KILL_CRITERIA.md, docs/OWNED_ARTIFACT_DECISION.md.
4. Skim docs/Following the Ferrells — Brand & Content Handoff.md (D004 — Kira brand constraints).

Job: run the expansion planning agenda in this handoff. Score candidates; produce ranked shortlist + gates + rejects.
Do NOT: build landing pages, Stripe links, new repos, clients/, kits/, or FTF SKU implementations.

Ryan decides: which expansions are in/out, price bands, and timing relative to Day-14 / Day-30.

Exit: write docs/SERVICE_PRODUCT_EXPANSION_PLAN.md (or update FTF_CATALOG + DECISIONS D005); update LAST_SESSION.md; ask commit/push.
```

---

## Current state (do not re-litigate unless Ryan asks)

| Item | Status |
|------|--------|
| Package A — $497 AI Operating Kit | ✅ Live |
| Package B — $1,200 Custom Mini-Tool | ✅ Live |
| Landing + terms + Stripe | ✅ Live |
| Phase 2 outreach clock | **Not started** (2026-08-31) |
| Plan A social (Kira) | Chosen · Stan in progress · brand handoff D004 |
| FTF catalog SKUs #1–8 | Documented · **not built** |
| Track B owned kit ($49–79) | Gated · see [`OWNED_ARTIFACT_DECISION.md`](OWNED_ARTIFACT_DECISION.md) |
| `clients/` / `kits/` folders | **Do not create** until gates met (D001) |

**Strategic constraint (still active):** First job of SD-018 is **proof of payment** for A/B. Expansion planning is allowed now; **expansion building** should not steal outreach time before Day-14 unless Ryan explicitly overrides.

---

## Prior research — what we already decided

Source: [Short-term income plan](497eb2f5-ae23-410a-9591-320ccb807b74) chat (2026-08-27/28) · plan file `short-term_income_plan_38a87da2.plan.md`

### Ryan services — chosen (Track A)

| Offer | Role |
|-------|------|
| **Package A** | No-code AI install — Prompt Forge as **service**, not app |
| **Package B** | One-purpose internal web tool — Next.js + Supabase + Vercel |

**Positioning:** “Internal tool / AI workflow for a specific job” — **not** brochure websites, not open-ended SaaS.

### Ryan products — deferred (Track B)

| Option | Price | Gate |
|--------|-------|------|
| Sanitized job kit | $49–79 | ≥1 paid A/B job **or** 3 pre-orders / 5 intent emails |
| 48h itch.io game | PWYW / $4.99 | Morale only · after listing live · one weekend cap |

### Explicitly rejected (services / builds)

- Generic **brochure / marketing websites** as lead offer  
- **Full SaaS** or unlimited feature work  
- **Prompt Forge app** revival  
- **Kira Calendar** as Ryan income path (partner track; Alicia gate)  
- **Deck of Oddities** / Inkborne ship  
- **New Steam / Null Sigil / Grudgekeep** as household play  
- **Etsy printables as Plan A** (slow first month)  
- **Hourly “AI consulting”** without fixed deliverable  
- **Fiverr/Upwork as primary** (D003 — optional Day 10+ only)

### FTF catalog — already sketched (mixed owners)

See [`FTF_CATALOG.md`](FTF_CATALOG.md). Not all are Ryan coding:

| # | SKU | Owner | Type |
|---|-----|-------|------|
| 1 | Kira UGC rate card | Kira + Ryan page | Service |
| 2 | Road-ready PDF bundle | Ryan layout · Kira promo | Product |
| 3 | Creator shot-list / UGC brief pack | Ryan PDF | Product |
| 4 | Package A creator-flavored | Ryan | Service (same as A) |
| 5–8 | Lady printables, mini-kit, Canva, SWC | Later | Product / quiet |

**Provisional first extra SKU after A/B stable:** #1 UGC rate card (runner-up: #2 PDF bundle).

### Kira brand constraints (D004)

From [`Following the Ferrells — Brand & Content Handoff.md`](Following%20the%20Ferrells%20%E2%80%94%20Brand%20%26%20Content%20Handoff.md):

- Ryan’s AI work = **~10% of content**, not brand identity  
- **Documenting, not pretending** — no guru/expert positioning  
- Multiple income streams = story, not constant selling  
- **Walmart Creator** prioritized over TikTok Shop (Kira lane)  
- **TTD Travel agency** content stays separate from FTF feed  

Any expansion must **fit the story** or stay off the lifestyle feed (landing / DM / Stan tile only).

---

## Expansion lanes to plan (session agenda)

Run these **in order**. Each lane: brainstorm → score → keep/kill/defer.

### Lane 1 — Ryan **service** expansions (coding + AI-adjacent)

**Goal:** Fixed-price packages only (same philosophy as A/B). No open-ended retainers in v1.

**Candidates to score** (not pre-approved — session decides):

| ID | Idea | Simple description | Price band (draft) | Notes |
|----|------|-------------------|-------------------|-------|
| S1 | **Package C — “Mini-tool +”** | Two related tools or tool + light automation | $1,800–2,500 | Risk: scope creep; needs tight brief |
| S2 | **Automation install** | Make/Zapier/n8n: 3–5 zaps connecting tools they already use | $397–697 | No custom code; fast weekend |
| S3 | **AI workflow audit** | Read-only: review their stack, deliver fix list + 5 prompt upgrades | $197–297 | Lower ticket; lead gen to A? |
| S4 | **Package B add-on** | Second revision round, extra login role, or one new screen | $300–600 | Upsell after B only |
| S5 | **Creator stack install** | Notion + GPT + caption workflow for creators (cousin to A) | $497 (A variant) | Overlaps SKU #4 / Package A creator flavor |
| S6 | **Supabase/Vercel “host my tool”** | Migrate spreadsheet → existing mini-tool template | $800–1,200 | Template reuse from B |
| S7 | **Intake → Stripe bridge** | Form + payment + email notify (no dashboard) | $600–900 | Smaller than full B |
| S8 | **Brochure site** | Marketing website | — | **Likely reject** (prior research) |
| S9 | **WordPress / plugin fixes** | Hourly-ish handyman | — | **Likely reject** (wrong market) |
| S10 | **Monthly retainer** | Ongoing support / features | — | **Likely reject** for experiment (support burden) |

**Session must define for each keeper:** buyer, deliverables, includes/excludes, payment split, turnaround, landing vs DM-only.

### Lane 2 — Ryan **product** expansions (digital, low support)

**Goal:** Productize proof from paid jobs; hyper-specific titles; Gumroad/Lemon/Stan.

| ID | Idea | Price band | Gate |
|----|------|------------|------|
| P1 | **Track B kit** (generic service biz) | $49–79 | [`OWNED_ARTIFACT_DECISION.md`](OWNED_ARTIFACT_DECISION.md) |
| P2 | **Creator AI kit** | $29–49 | After A delivered for a creator |
| P3 | **Mini-tool starter template** | $39–79 | After 2+ B deliveries; sanitized |
| P4 | **“How we work” mini-kit** (FTF #6) | $19–39 | Film/live it first (Kira doc) |
| P5 | **Automation zap pack** (PDF + Loom) | $19–29 | After S2 delivered once |
| P6 | **48h itch game** | PWYW | Morale only · kill criteria cap |

### Lane 3 — **FTF / Kira** SKUs (not Ryan coding — plan together)

| ID | SKU | Session question |
|----|-----|----------------|
| F1 | UGC rate card (#1) | Still first after A/B? Price tiers? |
| F2 | Road-ready PDFs (#2) | Bundle vs singles; Etsy vs Stan |
| F3 | Creator brief pack (#3) | Overlap with P2? |
| F4 | Stan Store section map | Which tiles when (Lady, Services, UGC, Shop) |
| F5 | Walmart / affiliate | Pure Kira — don’t duplicate in Ryan catalog |

### Lane 4 — **Packaging & storefront** (how expansions surface)

Session decisions:

- One landing page forever vs **Stan sections** vs second landing for creator lane  
- Package naming (A/B/C vs descriptive names)  
- Which expansions are **FTF-feed-safe** vs **landing/DM only** (same rule as B today)  
- Legal: category terms in [`LEGAL_RESEARCH_NOTES.md`](LEGAL_RESEARCH_NOTES.md) before new SKU categories go live  

---

## Scoring framework (use in session)

Score each candidate **1–5** (5 = best). Drop anything ≤2 on **Time-to-first-dollar** or **Brand fit** unless Ryan overrides.

| Criterion | Question |
|-----------|----------|
| **Time to first dollar** | Can we sell it in ≤14 days with current audience? |
| **Ryan capacity** | Deliverable in evenings/weekends without employer-machine client data? |
| **Fixed scope** | Can scope fit on one page with hard excludes? |
| **Brand fit (FTF)** | Fits “documenting our build” or must stay off feed? |
| **Stack fit** | Uses Next.js/Supabase/AI tools Ryan already runs? |
| **Support burden** | One-and-done vs ongoing tickets? |
| **Conflicts kill criteria?** | SaaS creep, product-before-outreach, Kira Calendar, etc. |
| **Evidence** | Based on a real job, DM ask, or pure speculation? |

**Rule of thumb from prior session:** Speculative builds score low. **Paid job → sanitized product** scores high.

---

## Gates (when expansion is allowed to ship)

| Gate | Allows |
|------|--------|
| **G0 — Now** | Planning docs only (this session) |
| **G1 — A/B outreach started** | Copy tweaks, Stan tile text, DM scripts for *existing* A/B |
| **G2 — ≥1 deposit or Day-14 continue** | First **product** (Track B kit) or **one** new service tier if outreach data supports it |
| **G3 — First A/B delivered** | Productize that job; FTF SKU #1 (UGC card) or #2 (PDFs) |
| **G4 — Day-30 survive** | Second landing section, Package C, template products |
| **G5 — Dedicated FTF repo** | Move catalog out of cash-first-offer experiment folder |

Session should tag every shortlisted item with **G1–G5**.

---

## Questions Ryan must answer in the session

1. **Primary goal of expansion:** More Ryan revenue lanes, FTF catalog velocity, or productize for passive income?  
2. **Audience split:** Still “small service business” only, or add **creator-specific** SKUs as a second buyer?  
3. **Ceiling:** Max number of **active service packages** Ryan will maintain (recommend **≤4** for solo evenings).  
4. **Automation/no-code:** Is S2 (Zapier/Make install) “Ryan work” or off-brand vs Package B?  
5. **Website work:** Any exception to brochure-site reject (e.g. landing-only for existing clients)?  
6. **Kira overlap:** Which FTF SKUs need Kira’s sign-off before Ryan builds payment links?  
7. **Day-14 priority:** If zero deposits, expansion plan pauses except **offer/channel/price** changes — agree?  
8. **First build after planning:** One service expansion, one product, or FTF SKU #1?

---

## Out of scope for expansion session

- Implementing landing pages, Stripe products, or intake forms  
- Creating `clients/` or `kits/` folders  
- Building FTF SKUs before A/B payment path is stable (unless Ryan explicitly promotes an SKU ahead of cash clock)  
- Kira Calendar / Take the Detour agency products in FTF catalog  
- Null Sigil, Grudgekeep, Prompt Forge app, SaaS subscriptions  
- Paid ads budget or Fiverr price wars  

---

## Deliverables checklist (session exit)

- [ ] `docs/SERVICE_PRODUCT_EXPANSION_PLAN.md` created (ranked shortlist + gates + rejects)  
- [ ] Optional **D005** in [`DECISIONS.md`](DECISIONS.md) if Ryan picks top 1–3 expansions  
- [ ] [`FTF_CATALOG.md`](FTF_CATALOG.md) updated if FTF SKUs change priority  
- [ ] [`OFFER_COPY.md`](OFFER_COPY.md) **not** edited until Ryan approves new public packages  
- [ ] [`HANDOFF_CURSOR_NEXT.md`](HANDOFF_CURSOR_NEXT.md) pointer updated  
- [ ] [`LAST_SESSION.md`](LAST_SESSION.md) updated  

---

## Suggested 60–90 minute session flow

| Block | Time | Activity |
|-------|------|----------|
| 1 | 10 min | Re-read gates + kill criteria; confirm outreach clock status |
| 2 | 20 min | Lane 1: score service candidates S1–S10; pick top 2 max |
| 3 | 15 min | Lane 2: score products P1–P6; pick top 2 max |
| 4 | 15 min | Lane 3: align FTF SKUs with Kira doc (D004); confirm #1 vs #2 |
| 5 | 15 min | Lane 4: storefront packaging — Stan vs landing sections |
| 6 | 10 min | Write expansion plan doc + gates; explicit rejects list |
| 7 | 5 min | Next action: outreach vs first expansion build |

---

## Reference links

| Doc | Why |
|-----|-----|
| [`OFFER_COPY.md`](OFFER_COPY.md) | Current A/B facts |
| [`FTF_CATALOG.md`](FTF_CATALOG.md) | FTF SKU menu |
| [`GROWTH.md`](GROWTH.md) | clients/ + kits/ rules |
| [`OWNED_ARTIFACT_DECISION.md`](OWNED_ARTIFACT_DECISION.md) | Track B product gate |
| [`OUTREACH_CHANNELS.md`](OUTREACH_CHANNELS.md) | D003 channel tiers |
| [`Following the Ferrells — Brand & Content Handoff.md`](Following%20the%20Ferrells%20%E2%80%94%20Brand%20%26%20Content%20Handoff.md) | Kira brand authority |
| [`HANDOFF_KIRA.md`](HANDOFF_KIRA.md) | Ryan offers on social |
| Plan: `C:\Users\ryanf\.cursor\plans\short-term_income_plan_38a87da2.plan.md` | Original research |

---

*Drafted after Ryan asked to plan service/product expansion beyond Package A/B. Run this session when outreach is running or immediately after Day-14 if pivoting offer shape.*
