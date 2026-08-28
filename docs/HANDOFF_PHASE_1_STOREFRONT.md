# Handoff — Phase 1: Storefront foundation (next session)

**For:** Ryan + Cursor (plan/coordinate) · Claude/Codex **desktop** (implement HTML/landing)  
**Not for:** Cursor Task subagents as “Claude”  
**Date:** 2026-08-28  
**Repo:** `C:\App Development\04-experiments\cash-first-offer`  
**Git:** `master` @ `45d81eb` (or newer)  
**Workflow:** Cursor = brain/plan; Claude/Codex desktop = implement/audit.

---

## Paste this into the next Cursor chat

```
Cash-first offer — Phase 1 storefront session.

Agent root: C:\App Development\04-experiments\cash-first-offer

Enter session:
1. git fetch; confirm master @ 45d81eb or newer; status clean except intentional dirty.
2. Read PROJECT_CONTEXT.md, docs/LAST_SESSION.md, docs/DECISIONS.md (D001).
3. Read docs/HANDOFF_PHASE_1_STOREFRONT.md (this file — master plan for today).

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

## Why this session exists

**Household cash clock.** Phase 1 makes it possible for a stranger to pay and for you to collect everything you need to start work — without a second round of questions. Nothing in Phase 2 (Fiverr, outreach, delivery) should start until Phase 1 is done.

**Success = all four Phase 1 deliverables live and tested.**

---

## What’s already done (do not redo)

| Item | Location |
|------|----------|
| Experiment authority SD-018 / SD-018a | Parent `DECISION_LOG.md`, `studio-ops` |
| Offer copy ($497 A / $1,200 B) | `docs/OFFER_COPY.md` |
| Monetization, kill criteria | `docs/MONETIZATION.md`, `docs/KILL_CRITERIA.md` |
| Markdown intake master (duplicate, never fill) | `docs/CLIENT_INTAKE_TEMPLATE.md` |
| Preflight rules + blockers | `docs/CLIENT_PREFLIGHT.md` |
| Target audience + style (landing tone) | `docs/TARGET_AUDIENCE.md`, `docs/STYLE_GUIDE.md` |
| Outreach runbook (Phase 2 — not today) | `docs/OUTREACH_14_DAY.md` |
| FTF product catalog (brand lane — gated) | `docs/FTF_CATALOG.md` |
| Repo scaffold, Tier 3 declared | `docs/DECISIONS.md` D001, `docs/SECURITY_CHECKLIST.md` |

---

## Phase 1 task list (in recommended order)

### Task 1 — Payment links (Ryan, ~30–60 min)

**Owner:** Ryan (Cursor cannot create your Stripe/Lemon/PayPal account)

1. Pick processor: Stripe, Lemon Squeezy, or PayPal.
2. Create **Payment Links** (not Stripe Elements — Tier 3 requirement):
   - AI Operating Kit — **$497** full payment
   - Custom Mini-Tool — **$600** deposit
   - (Final $600 link can wait until first B client)
3. Test in test mode or $1 if supported.
4. Fill `docs/PAYMENT_LINKS.md` with live URLs.
5. Set confirmation/thank-you text to tell buyers: *“Reply to this email with your business details”* (or point them to intake link once Task 3 exists).

**Acceptance:** Kit link and deposit link open checkout; URLs recorded in `PAYMENT_LINKS.md`.

---

### Task 2 — Landing page (Claude/Codex desktop, ~1–2 hr)

**Handoff:** `docs/HANDOFF_LANDING_PAGE.md`

**Paste into Claude/Codex:**

```
Read C:\App Development\04-experiments\cash-first-offer\docs\HANDOFF_LANDING_PAGE.md
and docs/OFFER_COPY.md + docs/PAYMENT_LINKS.md + docs/STYLE_GUIDE.md.

Implement only the landing page per acceptance criteria, into landing/ in this repo.
Do not build the service deliverables or intake forms.
Prefer a single static page on Vercel or GitHub Pages.
When done: give me the live URL and how to paste payment links if any were still TODO.
```

**Acceptance:**
- Live public URL
- Headline + both packages from `OFFER_COPY.md`
- CTAs → kit URL + deposit URL (or `#pay-kit` placeholders + README note if links lag)
- Mobile-readable, no fake testimonials, mailto footer, no analytics SDK
- Files in `landing/`

---

### Task 3 — HTML intake forms (Claude/Codex desktop, ~2–3 hr)

**Handoff:** `docs/HANDOFF_CLIENT_INTAKE_HTML.md`

**Pattern source (read only):**
- `C:\App Development\01-studio\libby-storyworld\tools\AMBER_QUESTIONNAIRE_FORM_TEMPLATE.html`
- `C:\App Development\01-studio\libby-storyworld\docs\AMBER_QUESTIONNAIRE_TEMPLATE.md`

**Paste into Claude/Codex:** use the full paste block in `HANDOFF_CLIENT_INTAKE_HTML.md` (lines 21–45).

**Deliverables:**
- `tools/CLIENT_INTAKE_FORM_TEMPLATE.html` (master)
- `tools/Package_A_Intake_Questions.html`
- `tools/Package_B_Intake_Questions.html`
- `docs/CLIENT_INTAKE_SEND_INSTRUCTIONS.md`

**Acceptance:** Forms open in browser; MC + text; progress; localStorage; mailto/copy summary; mobile tap targets; questions match `CLIENT_INTAKE_TEMPLATE.md`; no client answers committed to repo.

**Note:** Task 2 and Task 3 can run in parallel on two Claude tabs if Ryan has links ready for Task 2.

---

### Task 4 — Smoke test + start outreach clock (Ryan, ~15 min)

1. Open landing on phone — both CTAs work.
2. Open Package A + B intake HTML — fill test data, export/mailto works.
3. Update `docs/OUTREACH_14_DAY.md` Day 0: check foundation boxes; write **actual start date** and **landing URL**.
4. Optional: add intake URLs to payment thank-you text or landing footer (“After payment, complete intake: …”).

**Phase 1 complete when:** pay works, page is live, intakes work, start date written.

---

## Authority and guardrails

| Rule | Source |
|------|--------|
| Experiment only — not primary build, not flagship | SD-018, D001 |
| Payment Links only — no Stripe Elements on page | `SECURITY_CHECKLIST.md` Tier 3 |
| No Formspree/analytics without tier re-check | `SECURITY_CHECKLIST.md` |
| Never commit client PII or filled intakes | `CLIENT_INTAKE_TEMPLATE.md`, `GROWTH.md` |
| Package B delivery = **separate client repo** later | `GROWTH.md` |
| No `clients/` or `kits/` folders yet | D001 |
| Kira Calendar off this track | `PROJECT_CONTEXT.md` |
| FTF SKUs (#1 UGC rate card, etc.) **after** A/B payment live | `FTF_CATALOG.md` |

---

## Packages (reminder for the session)

| | Package A | Package B |
|---|-----------|-----------|
| **Name** | AI Operating Kit | Custom Mini-Tool |
| **Price** | $497 upfront | $1,200 ($600 deposit + $600 final) |
| **Delivery** | Weekend after payment | ~7 days after deposit + approved brief |
| **Buyer** | Small service business (1–10 people) | Same |
| **Intake** | Package A HTML or markdown block | Package B HTML + separate brief approval |

Creator-flavored Package A for Following the Ferrells is **Phase 4** — generic copy on landing/Fiverr for this weekend.

---

## What comes after Phase 1 (do not start in this session)

**Phase 2 — Days 1–14:** Fiverr + Upwork + 10–20 outreach touches → `docs/OUTREACH_14_DAY.md`  
**Phase 3 — First job:** deliver A or B per intake + preflight  
**Phase 4 — Brand:** first FTF extra SKU (UGC rate card default) — `docs/FTF_CATALOG.md`  
**Day-14 review:** 2026-09-10 — `docs/DAY_14_KILL_REVIEW.md`

---

## Key file map

```
cash-first-offer/
├── PROJECT_CONTEXT.md          # project brain
├── docs/
│   ├── HANDOFF_PHASE_1_STOREFRONT.md   # ← this file (start here)
│   ├── HANDOFF_LANDING_PAGE.md         # child handoff — landing
│   ├── HANDOFF_CLIENT_INTAKE_HTML.md   # child handoff — intake forms
│   ├── PAYMENT_LINKS.md                # Ryan fills Task 1
│   ├── OFFER_COPY.md                   # copy source of truth
│   ├── OUTREACH_14_DAY.md              # Phase 2; write start date Task 4
│   ├── CLIENT_INTAKE_TEMPLATE.md       # question source for HTML
│   ├── CLIENT_PREFLIGHT.md             # gates after payment
│   ├── STYLE_GUIDE.md / TARGET_AUDIENCE.md
│   ├── FTF_CATALOG.md                  # brand SKUs — later
│   └── LAST_SESSION.md                 # update at exit
├── landing/                    # Task 2 output (may be empty until built)
└── tools/                      # Task 3 output (may be empty until built)
```

---

## Suggested session flow (one sitting)

| Block | Time | Who |
|-------|------|-----|
| Payment links | 30–60 min | Ryan |
| Paste landing handoff → deploy | 1–2 hr | Claude/Codex (parallel OK) |
| Paste intake handoff → test locally | 2–3 hr | Claude/Codex (parallel OK) |
| Smoke test + outreach start date | 15 min | Ryan |
| Exit: LAST_SESSION + commit/push | 10 min | Cursor or Ryan |

**Minimum viable order if short on time:** links → landing → intake → smoke test. Landing before outreach; intake before first real client.

---

## Stop condition

Stop Phase 1 when all Task 1–4 acceptance criteria pass. Do not open Fiverr or send outreach posts in this session unless Ryan explicitly wants to bleed into Phase 2.

**Workflow:** Cursor = brain/plan; Claude/Codex desktop = implement/audit.
