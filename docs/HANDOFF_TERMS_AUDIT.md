# Handoff — Terms page implementation audit (Codex desktop)

**For:** Codex **desktop** (audit only — after Claude builds)  
**Not for:** Legal review, rewriting clauses, or Cursor Task subagents  
**Date:** 2026-08-29  
**Prerequisite:** Claude completed `docs/HANDOFF_TERMS_PAGE.md`  
**Workflow:** Cursor = brain/plan; Claude/Codex desktop = implement/audit.

---

## Mission

**Fidelity check only.** Confirm `landing/terms.html` and related edits match `docs/SERVICE_TERMS.md` and the build handoff. Do **not** opine on whether terms are "good law" — that is Ryan + optional attorney.

---

## Audit checklist

### A. Source fidelity (`terms.html` vs `SERVICE_TERMS.md`)

- [ ] Every numbered section (1–16) present — no missing sections
- [ ] Appendix A (buyer journey) present
- [ ] **No new clauses** invented in HTML that are not in the markdown source
- [ ] **No clauses dropped** (especially: refunds §9, IP §7, liability §11, governing law §14)
- [ ] Dollar amounts match: A $497 · B $1,200 ($600 deposit + $600 final)
- [ ] Revision counts: B = two rounds; A = handoff/async round language intact
- [ ] Package B gates: intake complete + **BRIEF APPROVED** + final pay before handoff
- [ ] `[CONFIRM STATE]` / `[CONFIRM COUNTY]` still placeholders (or match Ryan's confirmed values in markdown)
- [ ] Contact email: `futbolmasta9@gmail.com`
- [ ] Stripe URLs in appendix match `docs/PAYMENT_LINKS.md`

### B. Landing updates (`landing/index.html`)

- [ ] Footer link: `terms.html` with label "Service terms"
- [ ] "By paying you agree to the service terms" present (hero and/or package cards)
- [ ] Payment link URLs **unchanged** from live Stripe links
- [ ] Prices and package copy **unchanged** except terms notices

### C. Optional intake (if Claude added)

- [ ] Package A and/or B Done-check includes terms URL checkbox
- [ ] URL is `https://futbolmasta09.github.io/cash-first-offer/terms.html`
- [ ] Progress / Done-check logic still works (spot-check in browser)

### D. HTML / UX

- [ ] Valid HTML (no obvious unclosed tags)
- [ ] Readable at ~375px width
- [ ] Dark mode uses same CSS variable pattern as `index.html`
- [ ] "Back to offer" link works relative to GitHub Pages path
- [ ] No analytics SDK, no external scripts, no form backends added

### E. Cross-doc consistency (spot check)

Compare against `docs/OFFER_COPY.md` + `docs/CLIENT_PREFLIGHT.md`:

- [ ] Package A turnaround: weekend after payment + intake
- [ ] Package B turnaround: ~7 days after deposit + approved brief
- [ ] Package B does not include: SaaS, mobile apps, auto-posting, unlimited revisions
- [ ] 14-day bug-fix window (B only)

### F. Out of scope — do not fail audit for these

- Governing state not filled in (Ryan's job)
- Stripe Dashboard product descriptions not updated (Ryan manual)
- Attorney review not done (deferred until before heavy outreach)

---

## Report format

Return a short table:

| Check | Pass / Fail / N/A | Note |
|-------|-------------------|------|

Then:

1. **Shippable?** Yes / No — if No, list blocking fixes only (implementation, not legal rewrites)
2. **Files reviewed**
3. **Live URL tested** (if pushed): …/terms.html

**Stop.** Do not fix issues unless Ryan asks — report only.

---

## Paste prompt for Codex

```
Read C:\App Development\04-experiments\cash-first-offer\docs\HANDOFF_TERMS_AUDIT.md.

Claude already implemented HANDOFF_TERMS_PAGE.md. Audit only — do not rewrite legal substance.

Run the checklist (A–E). Compare landing/terms.html to docs/SERVICE_TERMS.md and docs/PAYMENT_LINKS.md.
Report Pass/Fail table and Shippable Yes/No. Do not commit unless Ryan asks.
```
