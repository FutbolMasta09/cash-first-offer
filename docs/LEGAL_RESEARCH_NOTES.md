# Legal research notes — DIY service terms (Package A/B)

**Date:** 2026-08-29  
**Status:** Research + draft support — **not legal advice**  
**Audience:** Ryan (sole proprietor, US) · Cursor planning session  
**Related:** `docs/SERVICE_TERMS.md` · `docs/HANDOFF_LEGAL_TERMS_NEXT_SESSION.md`

---

## Summary verdict (for this price tier)

| Question | Answer for $497 / $1,200 Package A/B |
|----------|--------------------------------------|
| Can Ryan use self-drafted terms? | **Yes**, if clear, specific, and accepted before/at payment. |
| Is Stripe pay + linked terms URL enough? | **Reasonably yes** for v1, strengthened by intake checkbox + email/paper trail. Not as strong as clickwrap on checkout itself. |
| DocuSign required? | **No** for v1 at this tier — email **BRIEF APPROVED** + payment record is adequate SOW lock for Package B. |
| Lawyer consult recommended? | **Yes, 1-hour flat-fee review** before heavy outreach or first Package B client — especially IP assignment and UGC (FTF later). |

**Workflow:** Cursor = brain/plan; Claude/Codex desktop = implement/audit.

---

## 1. Enforceability — what makes online service terms stick (US)

### Contract basics (all states)

A binding service agreement needs:

1. **Offer** — clear description of services and price (`docs/OFFER_COPY.md`, landing page, Stripe product title/description).
2. **Acceptance** — client's affirmative assent (payment, checkbox, written reply).
3. **Consideration** — payment for work.
4. **Lawful purpose** — legitimate consulting / deliverable work.

Self-drafted contracts are legally permitted; enforceability turns on **clarity and mutual assent**, not on whether a lawyer wrote them. Vague scope, missing payment triggers, or ambiguous refund language are the usual failure modes — not "DIY" alone.

**Sources:**

- [Can You Write Your Own Service Contract?](https://www.simplysolved.blog/can-you-write-your-own-service-contract) — offer, acceptance, consideration, scope must be explicit.
- [How to Write a Consulting Contract](https://legalclarity.org/how-to-write-a-consulting-contract-from-scratch/) — disputes start from vague scope; exclusions matter as much as inclusions.

### Online acceptance — clickwrap vs browsewrap

Courts rank online agreement methods on a spectrum:

| Method | What it is | Enforceability |
|--------|------------|----------------|
| **Clickwrap** | User must check a box or click "I agree" tied to specific terms | **Strongest** — express assent after conspicuous notice |
| **Sign-in-wrap / scrollwrap** | Assent bundled with login or scroll-through | Moderate — depends on design |
| **Browsewrap** | Terms linked in footer; "use = agree" | **Weakest** — often unenforceable without actual notice |

Recent federal guidance: the UI must make clear **which action constitutes assent** (e.g., "By clicking Pay you agree to…"). A "Continue" button without tying it to terms failed in *Cave v. Cleo AI* (cited in Proskauer, 2025).

**Implication for cash-first offer:** Footer link alone is **browsewrap** — fine for visibility, not sufficient alone. Stack:

1. Published terms URL (conspicuous).
2. Line on package cards: "By paying you agree to [terms]."
3. Stripe product description includes terms URL (Ryan manual step in Dashboard).
4. Intake **Done check** checkbox referencing terms URL (optional but recommended).
5. Package B: email **BRIEF APPROVED** = SOW acceptance (strong written record).

**Sources:**

- [Online Contract Formation — Proskauer](https://newmedialaw.proskauer.com/2026/07/23/online-contract-formation-turns-on-design-and-context-lessons-from-recent-circuit-court-decisions/) — clickwrap vs browsewrap; assent must be tied to the action.
- [Enforceability of Online Wrap Agreements — Caldwell](https://caldwelllaw.com/news/enforceability-online-wrap-agreements-us-uk-japan/) — California/Massachusetts favor clear clickwrap; browsewrap needs conspicuous notice.

### B2B vs consumer

Package A/B targets **small businesses** (B2B-ish). B2B terms generally face fewer "unfair term" challenges than B2C consumer contracts, but:

- If the buyer is an individual sole proprietor, some consumer-protection arguments can appear.
- **Be fair and clear** on refunds and deposits regardless — chargeback panels look at reasonableness, not just contract labels.

---

## 2. Acceptance mechanism — Stripe + terms URL + intake

### Is payment-as-acceptance enough at $497 / $1,200?

**For v1: yes, with layered acceptance** — consistent with industry practice for sub-$5K consulting engagements.

| Layer | Package A | Package B |
|-------|-----------|-----------|
| Landing / offer copy | Scope + price visible | Same |
| Pre-pay notice | "By paying you agree to terms" | Same |
| Stripe checkout | Payment = consideration; description links terms | Deposit payment |
| Confirmation page | Intake URL (already live) | Intake URL + brief process |
| Intake Done check | "I agree to service terms at [URL]" | Same + scope guardrail checkboxes |
| SOW lock | Offer + intake = scope | One-page brief + **BRIEF APPROVED** email |
| Final payment | N/A (paid in full) | Final $600 before handoff |

**DocuSign / wet signature:** Not required at this tier for most US consulting work. E-sign (ESIGN Act) treats qualified electronic acceptance as equivalent to ink — email reply approving a brief counts as electronic acceptance of that SOW.

**When e-sign becomes worth it:**

- Deal >$10K or multi-month retainer
- Corporate client sends their paper
- Heavy IP licensing, exclusivity, or regulated data (HIPAA, etc.)

**Sources:**

- [Basic Consulting Agreement Template — Alex Berman](https://alexberman.com/basic-consulting-agreement-template) — under $5K single deliverable: one-page agreement usually sufficient.
- [Do I Need a Lawyer for a Service Agreement? — LegalGPS](https://www.legalgps.com/diy-or-lawyer/service-agreement) — clear deliverables, payment, revisions matter more than page count.

### Stripe's own terms

Stripe Payment Links are governed by **Stripe's** terms between Stripe and the merchant. Ryan's service terms govern the **consulting relationship** between Joel Ferre and the client — supplement, not replace, Stripe's processor terms. Do not store card data; Payment Links keep PCI scope minimal (already D001 / Tier 3).

---

## 3. Refunds, deposits, and chargebacks

### Wording deposits

- Label Package B's $600 as a **project commencement fee / deposit** applied to the total $1,200 — not a vague "deposit" alone.
- State: **non-refundable once work has started**, with "work started" defined (intake complete + brief approved + build commenced for B; intake complete + build scheduled for A).
- Amount should be **proportionate** to reserved capacity (~50% for B is defensible for a week of dedicated build time).

"Non-refundable" clauses work best when framed as **liquidated damages** for cancellation after commitment — a pre-estimate of lost time and turned-away work — not as a penalty.

**Sources:**

- [Deposit Invoice Template — LegalClarity](https://legalclarity.org/deposit-invoice-template-what-to-include-and-how-to-use-it/) — liquidated damages framing; disclose before payment.
- [Payment Terms in Contracts — Ruul](https://ruul.io/blog/payment-terms-contracts) — deposit non-refundable after work commences; must be explicit.

### Chargebacks (Stripe)

- Stripe charges a **dispute fee** (~$15) even if you win.
- Strong evidence: written scope, terms acceptance trail, intake completion, deliverable delivery proof, client acknowledgment.
- Respond **before the deadline** with a concise cover letter + exhibits.
- Do not refund after a chargeback is filed (risk of double loss).

**Operational hygiene:**

- Keep email thread with intake answers and BRIEF APPROVED.
- Deliver via traceable channel (email, Loom link, repo invite).
- Screenshot or export Stripe payment metadata.

**Source:** [Freelance Chargebacks in 2026 — Delivvo](https://delivvo.io/blog/freelancer-chargebacks-payment-disputes-2026) — written agreement, delivery proof, dispute fee reality.

### Refund policy (practical)

| Situation | Recommended stance (in SERVICE_TERMS) |
|-----------|----------------------------------------|
| Client cancels before work starts | Partial or full refund at Provider discretion minus reasonable admin fee |
| Client cancels after work started | Deposit / commencement fee retained; no refund of work performed |
| Provider cannot deliver | Full refund of unused portion |
| Dissatisfaction after delivery | Revisions per package limits; no refund after acceptance / handoff |

---

## 4. Intellectual property (custom mini-tool / kit)

### Standard pattern (Package B — software)

| Asset | Default rule |
|-------|----------------|
| **Custom deliverable** (client-specific tool, configs, copy written for them) | **Client owns** upon full payment |
| **Pre-existing tools** (boilerplate, internal libraries, methods, generic components) | **Provider retains**; client gets license to use as embedded in deliverable |
| **Third-party** (Supabase, Vercel, OpenAI, etc.) | Client's accounts; their licenses |

Must be **explicit** — IP does not always transfer by default in every jurisdiction without clear assignment language.

### Package A (kit)

- Prompt library / SOP / GPT config built **in client's account** → practically theirs already.
- Provider may retain right to reuse **generic frameworks** (not client's voice samples or trade secrets).

### Lawyer review flag

**Recommend attorney review** before first Package B delivery if:

- Client asks for "work for hire" language beyond standard
- White-label / resale rights requested
- Open-source components with copyleft licenses in the stack

**Sources:**

- [Consulting Agreement Checklist — Sprintlaw](https://www.sprintlaw.com/articles/consulting-agreement-checklist-for-us-small-businesses/) — IP ownership must be explicit.
- [Sample Consulting Contract — Alex Berman](https://alexberman.com/sample-consulting-contract-for-services) — ownership clauses are high-stakes; lawyer review for complex IP.

---

## 5. UGC / creative (FTF later — SKU 1)

Before Kira delivers footage to a brand, a **UGC-specific addendum** (not the Package A/B terms) should cover:

| Topic | Must be in writing |
|-------|-------------------|
| **Deliverables** | # of videos, length, format, raw vs edited |
| **Usage rights** | Organic only vs paid ads vs whitelisting; platforms; duration |
| **Exclusivity** | Category / competitor exclusions |
| **Revisions** | Rounds included; turnaround |
| **Raw footage** | Included or extra fee |
| **Payment** | When due; kill fee if brand cancels after script/shoot |
| **Model / talent** | Kira's likeness rights; brand indemnity for ad claims |

**Lawyer review strongly recommended** before first paid UGC deal — usage rights and FTC disclosure (material connection) are the risk surface.

Do **not** reuse Package B software IP clauses for UGC.

---

## 6. DIY vs lawyer — what templates miss

### Safe to DIY (with discipline)

- Fixed-price consulting under ~$5K
- Clear single deliverable
- Standard IP transfer on full payment
- No employees, no multi-party deals
- B2B small business buyers

### Get 1-hour attorney review ($200–$500 typical)

- First time using your standard terms (mark up `SERVICE_TERMS.md` once, reuse)
- Package B with custom software IP
- Any non-compete, exclusivity, or indemnity beyond basic caps
- Client is a company with their legal team sending redlines

### Full attorney draft warranted

- $25K+ deals, retainers, regulated industries
- Multi-founder or partnership changes
- Lawsuit or government notice (never DIY)

**Sources:**

- [DIY Legal vs Small Business Attorney — Ethical Founder](https://ethicalfounder.com/diy-legal-vs-hiring-a-small-business-attorney-usa/) — triggers: IP, other party has counsel, assets outside your control.
- [Basic Consulting Agreement — Alex Berman](https://alexberman.com/basic-consulting-agreement-template) — hybrid: template + one-hour review = best ROI.

### Template vendors (starting points only)

TermsFeed, Rocket Lawyer, LegalZoom — useful **structure**, but:

- Often wrong governing state
- Generic IP / liability language
- May omit deposit/chargeback-friendly clauses

**Always customize** to `OFFER_COPY.md`, `CLIENT_PREFLIGHT.md`, and actual delivery flow.

---

## 7. Jurisdiction and governing law

**Ryan's state: not documented in this repo — confirm before publishing.**

Use a one-liner in SERVICE_TERMS:

> These Terms are governed by the laws of the State of **[CONFIRM]**, without regard to conflict-of-law rules. Exclusive venue: state or federal courts in **[CONFIRM COUNTY]**, **[CONFIRM STATE]**.

If Ryan operates as a sole prop in Florida (example only — **do not assume**), Florida law is common for studio work in the Southeast. State-specific quirks (non-compete enforceability, consumer protection) matter for **template** choice — another reason for a one-hour local business attorney review.

**Source:** [Legal Risks of DIY Business Contracts — Lancaster Law](https://lancasterlaw.net/2025/08/14/legal-risks-of-diy-business-contracts/) — state-specific enforceability; missing dispute-resolution clauses hurt when problems arise.

---

## Lawyer review recommended — checklist

| Topic | When | Priority |
|-------|------|----------|
| Governing law / venue | Before publish | **High** — confirm state |
| Package B IP assignment | Before first B client | **High** |
| Deposit / refund wording | Before publish | Medium |
| UGC usage rights | Before FTF SKU 1 | **High** |
| Digital download license | Before Gumroad/Etsy SKU 2–3 | Medium |
| Independent contractor classification | If volume grows | Low for now |

---

## FTF category legal roadmap (plan only)

| Category | FTF examples | Template doc (future) | Gate (`FTF_CATALOG.md`) | Distinct legal needs |
|----------|--------------|----------------------|-------------------------|----------------------|
| **Fixed service** | Package A, creator-flavored A (#4) | Extend `SERVICE_TERMS.md` | A/B payment live ✅ | Same as cash-first |
| **Custom build** | Package B | `SERVICE_TERMS.md` + email SOW | A/B payment live ✅ | SOW brief, deposit/final, IP assignment |
| **UGC / creative** | Kira UGC rate card (#1) | `docs/UGC_SERVICE_TERMS.md` (future) | After A/B stable; before SKU 1 live | Usage tiers, exclusivity, raw footage, FTC disclosure |
| **Digital download** | Road-ready PDFs, shot-list pack (#2–3) | `docs/DIGITAL_PRODUCT_LICENSE.md` (future) | Before Gumroad/Etsy listing | Personal license, no resell, platform ToS supplement |
| **App / game** | Lady's RV | Product terms in app repo | When product ships | App Store / privacy policy — separate track |

**Rule:** Shared template per **category** + product-specific scope in offer copy or brief — not a unique 10-page contract per $9 PDF.

---

## Decision inputs for D002

See `docs/DECISIONS.md` D002:

- **Approach:** DIY `SERVICE_TERMS.md` + layered acceptance (pay + terms link + intake checkbox + BRIEF APPROVED for B)
- **No DocuSign** for v1
- **Optional:** 1-hour business attorney review before heavy outreach
- **Publish:** static `landing/terms.html` via Claude handoff
