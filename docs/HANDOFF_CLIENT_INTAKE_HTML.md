# Handoff — Client intake HTML forms (Amber-style)

**For:** Claude Code or Codex **desktop** (implement)  
**Not for:** Cursor Task subagents  
**Date:** 2026-08-27  
**Repo:** `C:\App Development\04-experiments\cash-first-offer`  
**Workflow:** Cursor = brain/plan; Claude/Codex desktop = implement/audit.

---

## Mission

Build **clickable** Package A and Package B intake questionnaires the client opens via a **link** (or local HTML file): multiple choice + text fields, progress, save-as-you-go, export/email answers back to Ryan — same idea as Libby’s Amber form.

**Do not** only improve the markdown paste blocks. The point is the **interactive form**.

---

## Paste this into Claude / Codex

```
Implement Amber-style HTML client intake forms for cash-first-offer.

Read:
1. C:\App Development\04-experiments\cash-first-offer\docs\HANDOFF_CLIENT_INTAKE_HTML.md
2. docs/CLIENT_INTAKE_TEMPLATE.md (question source of truth)
3. docs/CLIENT_PREFLIGHT.md (gates — no passwords)
4. Source pattern (READ ONLY — copy pattern, do not edit Libby files):
   C:\App Development\01-studio\libby-storyworld\tools\AMBER_QUESTIONNAIRE_FORM_TEMPLATE.html
   C:\App Development\01-studio\libby-storyworld\docs\AMBER_QUESTIONNAIRE_TEMPLATE.md

Create under cash-first-offer:
- tools/CLIENT_INTAKE_FORM_TEMPLATE.html  (master — never fill TOPIC with a real job)
- tools/Package_A_Intake_Questions.html   (working copy, Package A TOPIC filled)
- tools/Package_B_Intake_Questions.html   (working copy, Package B TOPIC filled)
- docs/CLIENT_INTAKE_SEND_INSTRUCTIONS.md (how Ryan hosts/sends the link)

Transcribe questions from CLIENT_INTAKE_TEMPLATE.md into TOPIC.questions
(radio / checkbox / text). Use Ryan’s real contact email ONLY in the two
working copies if he provides it in-session; otherwise placeholder
REPLACE_WITH_RYAN_EMAIL@example.com and document that in SEND_INSTRUCTIONS.

Do not commit client-filled answers. Do not create clients/ or kits/.
Do not build the marketing landing page in this handoff.
When done: list files, how to open/test locally, how Ryan sends a link.
```

---

## Pattern to copy (Libby — read only)

From `AMBER_QUESTIONNAIRE_FORM_TEMPLATE.html`:

- Single self-contained HTML file  
- `TOPIC` config object: title, intro, storageKey, emailTo, emailSubject, sections[], questions[]  
- Question types: `text`, `radio`, `checkbox` (+ `other: true`)  
- Progress bar, localStorage persistence, clear answer, mailto + copy summary at end  
- Master template warning: never edit master for a live round — duplicate / keep separate working copies  

From `AMBER_QUESTIONNAIRE_TEMPLATE.md` workflow:

- Markdown = content + completed log  
- HTML = what the recipient clicks  
- Log non-PII completions on the markdown template  

---

## Acceptance criteria

1. `tools/CLIENT_INTAKE_FORM_TEMPLATE.html` exists as a reusable master (generic TOPIC placeholders), modeled on Amber’s form template.  
2. `tools/Package_A_Intake_Questions.html` — all Package A intake fields from `CLIENT_INTAKE_TEMPLATE.md` as radio/checkbox/text; unique `storageKey` e.g. `cash-first-package-a-intake-v1`.  
3. `tools/Package_B_Intake_Questions.html` — same for Package B; unique storageKey.  
4. Opening each working HTML in a browser: questions render, progress updates, answers persist on refresh, summary exports / mailto works.  
5. Mobile-usable (tap targets ~44px like Amber).  
6. Visual tone: practical/operator (follow `docs/STYLE_GUIDE.md`) — **do not** copy Libby’s purple Amber aesthetic wholesale; restyle lightly.  
7. `docs/CLIENT_INTAKE_SEND_INSTRUCTIONS.md`: how to host (e.g. GitHub Pages path, or send file, or temporary static host), what to tell the client, what to do when answers arrive, remind: store answers outside this repo for A; client repo for B.  
8. Update `docs/CLIENT_INTAKE_TEMPLATE.md` “How to use” step to point at the HTML working copies for sendable rounds.  
9. Update `README.md` read order with the new tools + send instructions.  

## Out of scope

- Payment links / marketing landing page (`HANDOFF_LANDING_PAGE.md`)  
- Fiverr/Upwork  
- Backend form DB, Formspree, or analytics (would force Tier re-check — stay mailto/copy like Amber unless Ryan explicitly asks)  
- Editing any file under `libby-storyworld`  

## Security / privacy

- Tier 3 storefront stance: prefer **static HTML + mailto/copy**, no server that stores answers in this project.  
- Never commit exported answer dumps into `cash-first-offer`.  
- `emailTo` in committed working copies: use placeholder unless Ryan supplies a public-facing intake address he is OK having in git.

## Stop condition

Forms open locally and pass the acceptance list; send instructions written; report paths + how Ryan tests. Ask before push if commit was made.

**Workflow:** Cursor = brain/plan; Claude/Codex desktop = implement/audit.
