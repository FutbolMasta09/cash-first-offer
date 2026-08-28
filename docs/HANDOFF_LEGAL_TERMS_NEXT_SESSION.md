# Handoff — Service terms & legal (next dedicated session)

**For:** Cursor (plan/research) · optional lawyer consult · Claude desktop (implement `/terms` page)  
**Not for:** Blocking Phase 1 live payment links or outreach unless Ryan chooses to  
**Date deferred:** 2026-08-28 (parked by Ryan)  
**Workflow:** Cursor = brain/plan; Claude/Codex desktop = implement/audit.

---

## Why this session exists

Cash-first Package A/B can accept payment with offer copy + intake checkboxes alone, but **strangers paying real money** benefit from published **service terms**: scope, payment gates, revisions, IP, refunds, liability. Following the Ferrells SKUs (UGC, downloads, creator tools) need **category-level** legal later — not one doc per product.

This session covers: **research how self-drafted terms hold up**, **design the doc set by offer type**, and **map the buyer journey from reading terms → paying → intake**.

---

## Paste into next Cursor chat (when ready)

```
Cash-first offer — legal / service terms session.

Agent root: C:\App Development\04-experiments\cash-first-offer

Enter session:
1. git fetch; read PROJECT_CONTEXT.md, docs/LAST_SESSION.md, docs/DECISIONS.md (D001).
2. Read docs/HANDOFF_LEGAL_TERMS_NEXT_SESSION.md (this file).
3. Read docs/OFFER_COPY.md, docs/CLIENT_INTAKE_TEMPLATE.md, docs/CLIENT_PREFLIGHT.md, docs/FTF_CATALOG.md.

Job this session:
- Research: enforceability of self-drafted service terms / clickwrap / payment-as-acceptance (US, sole prop; flag when lawyer review needed).
- Propose minimum doc set for Package A/B (one shared Service Terms; Package B brief as SOW).
- Map end-to-end flow: terms visible → Stripe pay → confirmation → intake → start work.
- Plan FTF category templates (service, custom build, UGC, digital download) — docs only, no FTF build.
- Draft HANDOFF for Claude to publish terms (landing/terms.html + footer link) OR outline for lawyer.

Do NOT: build FTF SKUs, full contract library per catalog SKU, or delay live Stripe if Phase 1 still open unless Ryan says so.
Exit: update LAST_SESSION.md; ask commit/push.
```

---

## Scope for the legal session

### In scope

| Track | Deliverable |
|-------|-------------|
| **Research** | Notes on enforceability of DIY terms vs lawyer-drafted; clickwrap vs browsewrap; payment + intake as acceptance; when e-sign (DocuSign) is worth it at $497 / $1,200 |
| **Package A/B now** | One shared **Service Terms** (scope, payment, revisions, IP, support window, refund boundary, liability cap, dispute/contact) |
| **Package B** | Confirm one-page **brief = Statement of Work** after intake; final $600 before handoff; ghost/non-payment process (see Cursor chat 2026-08-28) |
| **Buyer journey map** | Where terms appear: landing footer, Stripe link/description, confirmation page, intake checkbox, email thread |
| **FTF planning** | Category templates only — not per-SKU bespoke docs (see table below) |
| **Implementation handoff** | Public `landing/terms.html` (or `/terms`) + footer link; optional intake checkbox line |

### Out of scope (this session)

- Full FTF legal suite before any FTF SKU sells  
- DocuSign workflow unless research says required for B  
- Legal advice pretending to be a lawyer — **recommend short consult** for UGC usage rights and custom software IP assignment  
- Replacing Gumroad/Etsy platform terms for digital products (supplement only)

---

## FTF category templates (plan only — build when lane goes live)

| Category | FTF examples | When | Distinct legal needs |
|----------|--------------|------|----------------------|
| Fixed service | Package A, creator-flavored A | With A/B terms | Same template as cash-first service |
| Custom build | Package B | With A/B terms | SOW brief + deposit/final + handoff |
| UGC / creative | Kira UGC rate card (SKU 1) | Before SKU 1 live | Usage, exclusivity, revisions, raw footage, whitelisting |
| Digital download | Road-ready PDFs, shot-list (SKU 2–3) | Before Gumroad/Etsy | Personal license, no resell, refund policy |
| App / game | Lady's RV | When product ships | Separate product terms |

**Rule:** Shared template + product-specific **scope in offer copy or brief** — not a unique 10-page contract per $9 PDF.

---

## Research questions to answer (with sources)

1. **Enforceability:** What makes online service terms enforceable in the US for B2B/small-business sales (sole prop)? Offer, acceptance, consideration, clarity of scope.
2. **Acceptance mechanism:** Is **pay via Stripe Payment Link + linked terms URL + intake checkboxes** sufficient for this price tier, or is wet signature / e-sign materially safer?
3. **Refund/chargeback:** How to word deposit non-refundability after work starts without inviting chargebacks; Stripe dispute basics.
4. **IP:** Default rule for custom mini-tool (client owns deliverable; contractor retains pre-existing tools/methods) — standard clause patterns.
5. **UGC (FTF later):** Usage rights tiers — what must be in writing before Kira delivers footage.
6. **DIY vs lawyer:** What a 1-hour business attorney consult typically covers vs what templates (TermsFeed, Rocket Lawyer, etc.) miss.
7. **Jurisdiction:** Ryan's state (confirm), governing law / venue one-liner.

Document findings in **`docs/LEGAL_RESEARCH_NOTES.md`** (create in that session — not now).

---

## Target buyer journey (terms → payment)

```
1. Landing page — footer link "Service terms" (public URL)
2. Package cards — one line: "By paying you agree to [terms]"
3. Stripe Checkout — terms URL in product description or Stripe settings if supported
4. After payment — confirmation repeats intake URL (already live)
5. Intake form — optional checkbox: "I agree to the service terms at [URL]"
6. Package B only — one-page brief email → client replies "BRIEF APPROVED" (SOW lock)
7. Start work — only after intake complete (+ brief approved for B)
8. Package B final — private $600 link; handoff only after payment (see CLIENT_PREFLIGHT / preflight chat)
```

---

## Acceptance criteria (legal session done)

1. **`docs/LEGAL_RESEARCH_NOTES.md`** — sourced answers to research questions; clear "lawyer review recommended for X" flags.
2. **`docs/SERVICE_TERMS.md`** (or `.html` source) — draft Package A/B terms ready for publish.
3. **Buyer journey doc** — either section in SERVICE_TERMS or short addendum; matches live URLs (landing, intake, Stripe).
4. **`docs/HANDOFF_TERMS_PAGE.md`** — paste block for Claude to add `landing/terms.html` + footer link (if not implemented in-session).
5. **FTF legal roadmap** — one table: which category template, which gate (`FTF_CATALOG.md`), no implementation.
6. **Decision logged** in `docs/DECISIONS.md` (D002 or next id): terms approach (DIY + optional lawyer review), not signed DocuSign for v1.

---

## Dependencies / order vs other work

| Priority | Task | Note |
|----------|------|------|
| **Before or parallel** | Finish Phase 1 live Stripe + `PAYMENT_LINKS.md` + landing href swap + smoke test | Legal terms **should** link from landing before heavy outreach; can publish terms same week as live links |
| **After** | Phase 2 outreach volume | Terms footer link recommended before 10–20 touches |
| **Later** | FTF UGC terms | Before SKU 1 in `FTF_CATALOG.md` |

Ryan may run **legal session** the same week as finishing live Stripe, or the session after — do not let legal research block copying test links to live mode unless Ryan explicitly prioritizes terms first.

---

## Authority & guardrails

- SD-018 / D001 — capped experiment; lightweight docs profile  
- Tier 3 — terms page is static HTML; no new analytics or form backends  
- Not legal advice — research + drafts; Ryan/lawyer approve before relying on them  

**Workflow:** Cursor = brain/plan; Claude/Codex desktop = implement/audit.
