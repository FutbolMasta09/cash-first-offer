# Handoff — Publish Service Terms page (Claude / Codex desktop)

**For:** Claude Code **desktop** (implement)  
**Not for:** Codex on this step (Codex audits afterward — `HANDOFF_TERMS_AUDIT.md`) · Cursor Task subagents  
**Date:** 2026-08-29  
**Authority:** SD-018 · `04-experiments/cash-first-offer/`  
**Workflow:** Cursor = brain/plan; Claude/Codex desktop = implement/audit.

---

## Sequence (do not dual-review legal substance)

| Step | Who | Handoff |
|------|-----|---------|
| 1 | **Claude** | This file — build `terms.html` + landing links |
| 2 | **Codex** | `HANDOFF_TERMS_AUDIT.md` — implementation fidelity only |
| 3 | **Ryan** | Skim live page; confirm state/county; Stripe descriptions |
| 4 | **Attorney** (optional) | Before heavy outreach or first Package B — not blocking publish |

No Claude + Codex parallel "legal review" of `SERVICE_TERMS.md` — that adds delay without real legal assurance.

---

## Mission

Publish **public Service Terms** for Package A/B as a static page matching the live landing aesthetic, link it from the landing footer, and add a one-line "by paying you agree" notice on package cards. Optional: intake Done-check line referencing terms.

**Source of truth for legal text:** `docs/SERVICE_TERMS.md` (convert to HTML — do not invent new clauses).

---

## Already done / dirty state

| Item | Status |
|------|--------|
| `docs/LEGAL_RESEARCH_NOTES.md` | ✅ Research + enforceability notes |
| `docs/SERVICE_TERMS.md` | ✅ Draft v1.0 — **Ryan must confirm `[CONFIRM STATE]` / county before treating as final** |
| `landing/index.html` | ✅ Live — no terms link yet |
| Stripe Payment Links | ✅ Live — terms URL not yet in product descriptions (Ryan manual) |
| Intake forms | ✅ Live at `/tools/Package_*_Intake_Questions.html` — no terms checkbox yet |

**Do not** change Stripe links, payment amounts, or offer copy beyond the terms notices described below.

---

## Exact acceptance criteria

### 1. New file: `landing/terms.html`

- Convert `docs/SERVICE_TERMS.md` content to clean, readable HTML (headings, lists, tables preserved).
- Match `landing/index.html` design tokens: same CSS variables (`--bg`, `--accent`, etc.), font stack, max-width ~760px, dark mode via `prefers-color-scheme`.
- Page `<title>`: `Service Terms — Cash-first offer`
- Include at top: effective date line — use placeholder `Effective: [DATE]` or today's date if Ryan confirms publish day.
- **Leave** `[CONFIRM STATE]` and `[CONFIRM COUNTY]` visible OR use a HTML comment `<!-- Ryan: set governing state before legal reliance -->` — do not guess Florida or any state.
- Link back to landing: "← Back to offer" → `index.html` or `/cash-first-offer/`
- No analytics SDK, no forms, no external scripts.

### 2. Update `landing/index.html`

**Footer** — add before or after contact email:

```html
<p><a href="terms.html">Service terms</a></p>
```

**Package cards + hero CTAs** — add one line under each pay button (or once under hero CTA row):

```html
<p class="meta">By paying you agree to the <a href="terms.html">service terms</a>.</p>
```

Use existing `.meta` class for styling consistency.

### 3. Optional (recommended) — intake forms

In `tools/Package_A_Intake_Questions.html` and `tools/Package_B_Intake_Questions.html`, add to the **Done check** section:

- Checkbox label: `I agree to the service terms at https://futbolmasta09.github.io/cash-first-offer/terms.html`

Only if the form's Done-check pattern supports an additional checkbox without breaking progress logic. If risky, skip and note in completion report.

### 4. Verify live

- GitHub Pages base: `https://futbolmasta09.github.io/cash-first-offer/`
- After push: terms loads at `…/terms.html`
- Footer link works from landing
- Mobile-readable at 375px width
- Run HTML sanity check (no unclosed tags)

### 5. Out of scope

- Lawyer review or changing legal substance
- Stripe Dashboard edits (Ryan does manually — see below)
- Fiverr/Upwork, FTF SKUs, Formspree/backend
- `clients/` or `kits/` folders

---

## Ryan manual steps (report in completion message)

1. **Confirm governing state** in `docs/SERVICE_TERMS.md` §14 and republish `terms.html` if needed.
2. **Stripe Dashboard** → each Payment Link → edit product description to end with:  
   `Full service terms: https://futbolmasta09.github.io/cash-first-offer/terms.html`
3. Set **effective date** at top of terms when satisfied.

---

## Stop condition

Stop when:

1. `landing/terms.html` is committed and live on GitHub Pages
2. `landing/index.html` has footer + "by paying" lines
3. You report: live terms URL, files changed, optional intake checkbox status, and Ryan's three manual steps above

---

## Paste prompt for Claude (step 1)

```
Read C:\App Development\04-experiments\cash-first-offer\docs\HANDOFF_TERMS_PAGE.md
and docs/SERVICE_TERMS.md.

Implement only the terms page and landing footer/link updates per acceptance criteria.
Match landing/index.html styling. Do not change payment URLs or prices.
Optional: intake Done-check terms checkbox if safe.

When done: report live terms URL, files changed, and Ryan manual steps.
Do not commit secrets. Ask Ryan before commit/push unless he already approved.

After you finish, Ryan will run Codex on HANDOFF_TERMS_AUDIT.md (fidelity check only).
```
