# Handoff — Intake form UX: voice-sample guidance + timezone dropdown

**For:** Codex **desktop** (implement)  
**Not for:** Cursor Task subagents  
**Date:** 2026-08-29  
**Repo:** `C:\App Development\04-experiments\cash-first-offer`  
**Workflow:** Cursor = brain/plan; Claude/Codex desktop = implement/audit.

---

## Paste this into Codex

```
Intake form UX improvements for cash-first-offer.

Read:
1. C:\App Development\04-experiments\cash-first-offer\docs\HANDOFF_INTAKE_FORM_UX.md
2. tools/CLIENT_INTAKE_FORM_TEMPLATE.html (master — add select type here first)
3. tools/Package_A_Intake_Questions.html
4. tools/Package_B_Intake_Questions.html
5. docs/CLIENT_INTAKE_TEMPLATE.md (sync Package A voice-sample wording in the client block only)

Implement:

A) TIMEZONE DROPDOWN (Package A + B)
- Change question id "timezone" from type "text" to type "select"
- Options (minimum): Eastern (ET), Central (CT), Mountain (MT), Pacific (PT), Alaska (AKT), Hawaii (HST), Other / not US
- If "Other / not US" selected, show optional text field: "Type your time zone (e.g. GMT, CET, AEST)"
- Add "select" rendering + localStorage persistence to the master template JS (match existing text/radio/checkbox pattern)
- 44px tap targets on mobile

B) VOICE SAMPLES — clearer client guidance (Package A only)
- Expand section 4 intro (sections[].note +/or TOPIC.intro) so clients understand WHY and WHAT to paste
- Add concrete examples in the section note, e.g.:
  "Paste real messages YOU already sent — not ideal copy. Good: a follow-up email, Instagram caption, estimate reply, thank-you text. Bad: 'We are a leading provider of solutions.' Aim for 5–10 short examples (2–6 sentences each). Copy/paste from Gmail, texts, or posts."
- Add helpful placeholders on sample_1 … sample_5 fields (different example each), e.g.:
  sample_1 placeholder: "e.g. A follow-up email you sent after a quote"
  sample_2: "e.g. A social post or caption you're proud of"
  sample_3: "e.g. How you reply when someone asks your price"
  etc.
- voice_doc field: clarify placeholder — "Google Doc link (anyone with link can view) — use this if you have many samples in one doc"
- Do NOT remove fields or change storageKey (cash-first-package-a-intake-v1)

C) MASTER TEMPLATE
- Document the new "select" type in a one-line comment above TOPIC.questions
- Keep master generic; working copies get real timezone options

D) MARKDOWN SYNC (optional but preferred)
- Update the "4. VOICE SAMPLES" block in docs/CLIENT_INTAKE_TEMPLATE.md client-facing fenced block to match the clearer guidance (same examples/tone as HTML)

Do NOT: change Package B voice section (B has no voice samples). Do not commit client-filled answers.
Do not build landing page. Do not create clients/ or kits/.

Test: open Package A + B locally; timezone select saves on refresh; voice placeholders visible; mailto summary still works.

When done: list files changed, how Ryan tests, note if deploy needs git push (Ryan/Cursor gate).
Ask before commit/push unless Ryan says commit in-session.
```

---

## Mission

Reduce client confusion on **Package A voice samples** and make **time zone** easy to answer on **Package A and B** intake forms.

---

## Already done / do not break

- Forms live: `https://futbolmasta09.github.io/cash-first-offer/tools/Package_*`
- `emailTo`: futbolmasta9@gmail.com on working copies
- Amber pattern: progress, localStorage, mailto, copy summary, clear all
- Package A: 26 questions; Package B: no voice section

---

## A — Timezone dropdown (spec)

| Field | Current | Target |
|-------|---------|--------|
| `timezone` (A & B) | `type: "text"` | `type: "select"` with options array |

**Suggested options:**

```javascript
options: [
  "Eastern (ET)",
  "Central (CT)",
  "Mountain (MT)",
  "Pacific (PT)",
  "Alaska (AKT)",
  "Hawaii (HST)",
  "Other / not US"
]
```

**Optional follow-up:** If implementation supports it cleanly, when "Other / not US" is selected, show a small text input (`timezone_other`) stored in state and included in summary. If that complicates the template too much, a single select without free-text is acceptable — note in report.

**Master template:** Implement generic `select` type once; working copies use real option lists.

---

## B — Voice samples client guidance (Package A only)

**Problem:** Clients may not know what “voice sample” means or paste generic marketing fluff.

**Update these (HTML):**

1. **Section 4 `heading` / `note`** — explain purpose + good vs bad examples (see paste block).
2. **`sample_1` … `sample_5`** — distinct `placeholder` strings on each textarea (supported if renderQuestion passes placeholder to textarea; add if missing).
3. **`voice_doc`** — clearer placeholder for Google Doc alternative.
4. Optionally one sentence in TOPIC `intro` pointing to section 4: *"Section 4 is the most important for matching your tone."*

**Do not** add new required fields — keep ≥5 samples OR doc link rule as today (Ryan gate in preflight: ≥5 samples or working Doc link).

**Suggested section note (use or tighten):**

> Paste **real messages you already sent** to customers or posted online — not brochure copy you wish you used.  
> **Good examples:** follow-up after a quote, reply when someone asks price, thank-you text, social caption, short listing description.  
> **Weak examples:** "We are a leading provider of innovative solutions."  
> Aim for **5–10 short pieces** (about 2–6 sentences each). Copy from email, texts, or posts.  
> **Or** one Google Doc with view access and put the link in the last field.

---

## C — Files to touch

| File | Change |
|------|--------|
| `tools/CLIENT_INTAKE_FORM_TEMPLATE.html` | Add `select` type in JS + generic example question |
| `tools/Package_A_Intake_Questions.html` | Timezone select + voice guidance |
| `tools/Package_B_Intake_Questions.html` | Timezone select only |
| `docs/CLIENT_INTAKE_TEMPLATE.md` | Sync Package A voice-sample client block (fenced form only) |

---

## Acceptance criteria

1. Package A & B: timezone is a dropdown; selection persists after refresh; appears in email/copy summary.
2. Package A: section 4 note + field placeholders make it obvious what to paste; no regression on other questions.
3. Master template documents `select` type; still generic (no real client data).
4. mailto + copy summary still work on both forms.
5. Mobile-usable select (native `<select>` is fine; min-height ~44px touch area).
6. `docs/CLIENT_INTAKE_TEMPLATE.md` voice section matches HTML guidance (if updated).

---

## Out of scope

- Landing page changes
- Linking intake from landing footer (separate idea)
- Package B voice samples
- Backend / Formspree / analytics

---

## Stop condition

Forms open locally; timezone + voice UX verified; report files changed. Ryan/Cursor commit + push for GitHub Pages redeploy.

**Workflow:** Cursor = brain/plan; Claude/Codex desktop = implement/audit.
