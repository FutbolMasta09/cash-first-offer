# Client Intake Template (master)

> **NEVER EDIT THE INTAKE BODY IN THIS FILE DIRECTLY** (except “How to use,”
> the Completed Intakes log, or fixing broken instructions). This is a master
> template, not a working document — same idea as Libby Storyworld’s
> `AMBER_QUESTIONNAIRE_TEMPLATE.md`.
>
> To run a real intake: **duplicate** into a new file (or paste into email),
> fill only the duplicate, send that. If you find yourself typing a client’s
> answers into *this* file, stop — you’re in the wrong file.

**Purpose:** One-shot questionnaires so Ryan gets everything up front and is
not blocked waiting on follow-up questions. Modeled on the Amber questionnaire
pattern: short sections, plain language, clear choices, a done-check, and a
log of what was already sent.

**Related:** `docs/CLIENT_PREFLIGHT.md` (rules, gates, blockers) ·
`docs/OFFER_COPY.md` · `docs/GROWTH.md` (Package B = separate client repo)

---

## How to use

1. **Payment first** — Package A: $497 cleared · Package B: $600 deposit cleared.
2. **Send a blank clickable working copy, not this master:**
   - **Package A:** Use `tools/Package_A_Intake_Questions.html` after setting
     its public-facing recipient email. Follow `docs/CLIENT_INTAKE_SEND_INSTRUCTIONS.md`.
     Prefer **not** committing filled A intakes into this repo (voice samples +
     business details = client data).
   - **Package B:** Use `tools/Package_B_Intake_Questions.html`, then create/open
     the **separate client repo** (see `GROWTH.md`) only after the intake and brief
     gates are met. Never store their brief/content in `cash-first-offer`.
3. Send only the client-facing clickable form or the matching fenced block. Do not
   send this how-to section, the completed log, or internal Ryan checklists.
4. Hard gate: do **not** start building until every field is filled (and for B,
   until they reply **BRIEF APPROVED** on your one-page brief).
5. When they’re done, append a **non-PII** line to Completed Intakes at the
   bottom of **this** template (package, date, outcome — no emails, no samples).
6. Optional: after a job, update `CLIENT_PREFLIGHT.md` if you learned a new gotcha.

---

## Package A — Client form (send this block only)

```
Thanks — Package A (AI Operating Kit, $497) is paid.

Please reply to THIS message with ALL sections filled. I don’t start until every
line has an answer (use “N/A” only where it truly doesn’t apply). One complete
reply beats five partial ones.

--- PACKAGE A INTAKE (fill every field) ---

1. BUSINESS
- Business name:
- What you sell (one sentence):
- Your name + best email:
- Best phone or Discord (optional):
- Time zone:
- Who will use this kit? (you only / list first names + roles):

2. AI PLATFORM (pick ONE for v1)
- [ ] ChatGPT (custom GPT)   OR   [ ] Claude (Project)
- Do you already have a paid plan that can create that? (Yes / No — I will subscribe before we start):
- Confirm you can create a Custom GPT or Claude Project on your account today (Yes / No). If No, what error/block do you see?:

3. CHANNELS (pick 2–3 max)
- [ ] Email / outreach
- [ ] Social captions
- [ ] Listings / product copy
- [ ] Follow-ups / DMs
- [ ] Other (name it):
Chosen channels:

4. VOICE SAMPLES (required)
Paste real messages you already sent — not ideal copy. Good: a follow-up email,
social caption, reply when someone asks price, thank-you text, or short listing
description. Weak: “We are a leading provider of innovative solutions.” Aim for
5–10 short pieces (about 2–6 sentences each). Copy from email, texts, or posts.
Or share one Google Doc with anyone-with-link view access:
- Sample 1:
- Sample 2:
- Sample 3:
- Sample 4:
- Sample 5:
(Add more if you have them)
OR Google Doc link (anyone-with-link view; use this if you have many samples in one doc):

5. JOBS TO AUTOMATE
List the repetitive writing/tasks you hate (bullets). Be specific:
-
-
-

6. MUST-SAY / MUST-NOT-SAY
- Words/phrases we must use (brand, offers, disclaimers):
- Words/topics we must never use:
- Any legal/compliance lines that must appear:

7. HANDOFF
- Prefer: [ ] 30-min call   OR   [ ] Loom video + written Q&A
- 2 time windows that work in the next 7 days (date + time + time zone):
  1)
  2)

8. ACCESS PLAN (no passwords)
How we’ll set up the GPT/Project:
- [ ] I’ll stay logged in on a screen-share and you guide me, OR
- [ ] You send files/instructions and I paste them into my account myself
Chosen:

9. DONE CHECK
- [ ] I understand this is a DIY kit for me/my team — not Ryan logging into my Gmail/socials to post for me
- [ ] I understand ongoing ChatGPT/Claude subscription cost (if any) is mine
- [ ] Every field above is filled

Send this as one reply. I’ll confirm “intake complete” and book the build weekend.
```

### Package A — Ryan only (do not send)

- [ ] All 9 sections answered  
- [ ] Platform + create-capability confirmed  
- [ ] 2–3 channels only  
- [ ] ≥5 samples or working Doc link  
- [ ] Tasks listed · handoff windows · access plan  
→ Then build. Do not commit their samples into `cash-first-offer`.

---

## Package B — Client form (send this block only)

```
Thanks — Package B deposit ($600 of $1,200) is received.

Please reply to THIS message with ALL sections filled. I won’t write the one-page
brief (and I won’t start coding) until this intake is complete. One full reply only.

--- PACKAGE B INTAKE (fill every field) ---

1. BUSINESS
- Business name:
- What you sell (one sentence):
- Your name + best email:
- Best phone or Discord (optional):
- Time zone:

2. ONE JOB ONLY (check exactly one)
- [ ] Content calendar + copy bank
- [ ] Intake form + simple dashboard
- [ ] Booking / request tracker
- [ ] Training checklist with progress
- [ ] Other (describe in ONE sentence — must still be one job):
If Other, one-sentence job:

3. USERS & LOGIN
- People who need login (full name + email each). Invites only — do NOT send passwords:
  1)
  2)
  3)
- Who is the admin (name + email)?:
- Anyone who should NOT have access?:

4. HOSTING OWNERSHIP (pick one)
- [ ] RECOMMENDED: I will create free Vercel + Supabase accounts and invite Ryan as needed
- [ ] Ryan builds then transfers accounts/project to me at handoff
Chosen:
- I understand hosting beyond free tiers (if we ever exceed them) is my cost (Yes/No):

5. SCOPE GUARDRAILS (answer Yes/No)
- I understand this is ONE mini-tool, not a full SaaS / CRM / mobile app (Yes/No):
- I understand Instagram/Facebook auto-posting and Zapier are out of scope for this package (Yes/No):
- I accept two revision rounds after the first working version, then final payment before handoff (Yes/No):

6. WHAT “DONE” MEANS FOR YOU
In 3–5 bullets, what must be true for you to say this worked?:
-
-
-

7. SEED CONTENT (required even if “use placeholders”)
- [ ] I’ll provide real content (link Google Sheet/Doc below), OR
- [ ] Use clear placeholders; I’ll replace later
If providing content, link (view access):
Anything that must be in v1 vs can wait:

8. BRAND (optional but fill something)
Upload whatever you have — logos, screenshots, PDFs, or a zip of brand assets.
Attach the same files to your email reply (email cannot attach them automatically).
Or upload everything to Google Drive/Dropbox and paste a view link below.
- Logo files (images, PDF, SVG, AI/EPS, or zip):
  Or logo URL / “use text-only”:
- Colors / brand-look files (screenshots, brand PDF, palette, or zip):
  Or primary color hex (e.g. #2A5D4E) / “default simple UI”:
- Tone / example files (PDF, Doc, image, or text):
  Or 3–5 tone words (e.g. warm, direct, formal):

When you send this reply by email, attach every file listed above to that email.

9. DOMAIN
- [ ] Free *.vercel.app URL for v1 is fine
- [ ] I have a domain I want later (name it; can wait until after v1):

10. UAT WINDOW
- 2 time windows in the next 10 days for a 20-min “does this match the brief?” check:
  1)
  2)

11. DONE CHECK
- [ ] Every field above is filled
- [ ] I won’t send passwords — only emails for invites
- [ ] I know final $600 is due before final handoff

Send as one reply. I’ll confirm “intake complete,” send a one-page brief within 24 hours,
and start coding only after you reply “BRIEF APPROVED.”
```

### Package B — Ryan only (do not send)

- [ ] Exactly one job · login emails · hosting choice · scope Yes/Yes/Yes  
- [ ] Done-means · seed choice · UAT windows  
→ Write one-page brief → wait for **BRIEF APPROVED** → separate client repo → build  

---

## Chase template (one reminder; send alone)

```
Quick nudge — I’m ready to start as soon as the intake form is complete.
Still missing: [list blank field numbers]. Reply with those filled and I’ll
confirm “intake complete.”
```

---

## Completed Intakes

<!-- Append each sent-and-completed intake here. No emails, samples, or
     business-sensitive detail — this log is for process memory only. -->

<!--
### Example
- **Package:** A
- **Sent:** 2026-09-01
- **Intake complete:** 2026-09-02
- **Outcome:** delivered / refunded / changed to B / killed
- **Lesson (optional):** e.g. “workplace ChatGPT blocked custom GPTs”
-->

*(None yet — first campaign opened 2026-08-27.)*
