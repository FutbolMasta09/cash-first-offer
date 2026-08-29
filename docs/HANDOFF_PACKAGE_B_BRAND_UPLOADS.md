# Handoff — Package B brand section: file uploads (Tier 3 safe)

**For:** Codex **desktop** (implement)  
**Date:** 2026-08-29  
**Repo:** `C:\App Development\04-experiments\cash-first-offer`  
**Workflow:** Cursor = brain/plan; Claude/Codex desktop = implement/audit.

---

## Important constraint (Ryan approved direction — implement within this)

This repo stays **Tier 3**: static HTML + mailto/copy only. **No Formspree, no upload API, no files stored in git.**

Browsers **cannot** attach files to a `mailto:` link automatically. So file uploads in the form work like this:

1. Client **selects files** in the form (easy UX, you see filenames/sizes in the summary).  
2. Summary + email body **lists** those files clearly.  
3. Client **manually attaches the same files** to their email reply (or uploads to Google Drive and pastes one folder link).

Also offer **Drive/Dropbox link** as an alternative on every brand field for clients who prefer one upload.

Codex should make this workflow obvious in the UI — not hidden.

---

## Paste into Codex

```
Package B intake — brand section file uploads (Tier 3 static form).

Read:
1. C:\App Development\04-experiments\cash-first-offer\docs\HANDOFF_PACKAGE_B_BRAND_UPLOADS.md
2. tools/CLIENT_INTAKE_FORM_TEMPLATE.html (add reusable "file" question type)
3. tools/Package_B_Intake_Questions.html (section 8 Brand only)
4. docs/CLIENT_INTAKE_TEMPLATE.md (sync Package B brand block in client fenced form)

Implement:

A) NEW QUESTION TYPE: "file" in master template JS
- <input type="file"> with configurable accept + multiple
- Store in state: array of {name, size, type} metadata ONLY — never file bytes in localStorage
- Show selected files list under the input (name + human-readable size)
- Clear/remove per file or clear with question clear button
- Summary line: "logo_files: logo.png (120 KB), brand-guide.pdf (2.1 MB)"
- answered = at least one file OR companion text/link field filled (see hybrid below)

B) PACKAGE B — Section 8 "Brand" redesign
Replace the three plain text fields with hybrid file + fallback text:

1. Logo
   - file (multiple): accept image/*,.svg,.pdf,.ai,.eps,.zip
   - text fallback: "Or paste a logo URL / write text-only if no logo"

2. Colors / brand look
   - file (multiple): accept image/*,.pdf,.ase,.zip (screenshots, brand PDFs, palettes)
   - text fallback: "Or type primary color hex (e.g. #2A5D4E) or write default simple UI"

3. Tone / examples
   - file (multiple): accept .pdf,.doc,.docx,image/*,.txt (example marketing they like)
   - text fallback: "Or type 3–5 tone words (e.g. warm, direct, formal)"

Section note (rewrite):
"Upload whatever you have — logos, screenshots, PDFs, zip of brand assets. Select files below AND attach the same files to your email when you send this form (the email button cannot attach files automatically). Or upload everything to Google Drive and paste a view link in the text field."

Add a yellow notice box above section 8 export area (or in section note):
"When you click Send by email, attach the files you selected here to that email."

C) ACCEPT attribute — be permissive on brand uploads:
image/*,.pdf,.svg,.png,.jpg,.jpeg,.webp,.gif,.ai,.eps,.zip,.doc,.docx,.txt,.ase

D) Do NOT change Package A. Do not add Formspree/backend. Do not commit client files.

E) Sync docs/CLIENT_INTAKE_TEMPLATE.md Package B client brand section to match.

Test locally: select files → summary lists names/sizes → mailto body includes file list → refresh keeps text fields but file list may need re-select (document that files are not persisted across refresh — OK).

Report files changed. Ask before commit/push.
```

---

## Acceptance criteria

1. Master template supports `type: "file"` with `accept`, `multiple`, metadata-only state.
2. Package B section 8: all three brand questions have **file picker + text fallback**.
3. Client instructions explain mailto + manual attach (and Drive link alternative).
4. Summary + mailto include file metadata list.
5. Mobile: file picker usable (native input); 44px tap area on controls.
6. `CLIENT_INTAKE_TEMPLATE.md` Package B brand block synced.
7. No backend, no Tier change.

---

## Out of scope

- Automatic file upload to Ryan's server  
- Formspree / Uploadcare / Cloudinary  
- Package A changes  
- Persisting file bytes in localStorage  

---

## Future escalation (not this task)

If manual email attach is too much friction after first real B client, log a D00x decision to add Formspree or Drive-only workflow and re-check Tier 3.

**Workflow:** Cursor = brain/plan; Claude/Codex desktop = implement/audit.
