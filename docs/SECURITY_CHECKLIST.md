# Security Checklist — Cash-first offer

Tracks security posture across the project lifecycle. Reference `C:\App Development\docs\AI_SECURITY_GUIDE.md` for the full reasoning behind each item — this file is the per-project tracking sheet, not the guide itself.

---

## Data Risk Tier

**Declared tier:** 3 — 2026-08-27 — logged in `docs/DECISIONS.md` D001. Storefront only: Payment Links (Stripe/Lemon Squeezy/PayPal, redirect-based — no card data touches this repo or the landing page), an optional `mailto:` contact link, no analytics SDK, no hosted contact-form service, no Stripe Elements/auth/database.

| Tier | Definition | Security gate required |
|---|---|---|
| **1 — Holds other people's data** | Stores or processes data belonging to anyone other than Ryan (client users, players' accounts, parents' messages, agents' info) | Full gate: automated stack + non-Claude second review + one-time paid human review before real users onboard |
| **2 — Own-data network surface** | Has accounts, network calls, auto-update, or cloud sync, but only the user's own data | Automated stack + non-Claude second review |
| **3 — Static / offline** | No accounts, no server, no data collection | This checklist as-is |

**Automated stack** = Claude Code security review + backend platform linter (e.g. Supabase database linter) + `npm audit` (or equivalent).
**Non-Claude second review** = Codex Security CLI plugin (repo scan + diff review) or another non-Claude tool — the model that wrote the code can never be its only reviewer.

### Tier re-check rule

The tier is **not permanent**. Re-evaluate it:
- At the day-14 (2026-09-10) and day-30 (2026-09-26) reviews (this project has no formal `PHASE_TRANSITION_GATES.md` — those two dates are the gate)
- Immediately when **any real client brief, name, contact info, or business data** enters this repo **by any route** — not only via a "client mini-tool." A brief pasted into a doc, a contact form submission saved to a file, or a client's business details in an outreach log all trigger this the same as a mini-tool would.
- Immediately if the landing page adds: a hosted contact-form service (Formspree, Netlify/Vercel forms, etc.), any analytics/tracking SDK (GA, Plausible, etc.), or Stripe Elements / any payment integration beyond Payment Links

If the tier changes, log it in `docs/DECISIONS.md` with the feature that changed it, and update the declaration above. The moment this repo holds a real client's data, it is Tier 1 — per `docs/GROWTH.md`, that data should instead live in a separate per-engagement repo so this repo never needs to re-tier.

| Re-check date | Phase / trigger | Tier confirmed or changed | Notes |
|---|---|---|---|
| 2026-08-27 | Scaffold | Confirmed — Tier 3 | Storefront only, no client data, no analytics |

---

## Baseline (set up before first commit)

- [ ] `.gitignore` includes `.env`, `*.key`, `*.pem`, `credentials.*` before the first commit
- [ ] `.env.example` created with placeholder values (committed); `.env` gitignored
- [ ] No secrets pasted into any AI tool prompt (placeholders used instead)

---

## During Production (check periodically, not just at the end)

- [ ] Every new dependency audited before adding (exists? download count? last updated? contributors? known CVEs?)
- [ ] AI-generated code reviewed for: hardcoded secrets, string-concatenated queries, unsanitized user input, path traversal risk, `eval()`/dynamic execution, missing auth checks
- [ ] All system-boundary inputs validated (user input, API responses, file uploads, save files)
- [ ] Save/data files validated on load; corrupt files fail gracefully, never crash
- [ ] Network calls: HTTPS only, certs validated, timeouts set, failures handled gracefully
- [ ] Platform-specific rules followed (see AI_SECURITY_GUIDE.md Section 8 — Godot / Electron / React Native)

---

## Pre-Release (gate — must pass before public release)

**Tier check first:** re-confirm the Data Risk Tier above before running this section. The tier decides which rows below apply.

**All tiers:**

- [ ] `grep` for hardcoded secrets across entire codebase — clean
- [ ] Dependency audit (`npm audit` / `pip audit` / equivalent) — zero critical or high vulnerabilities
- [ ] Claude Code security review run on the full repo — findings triaged (fixed or explicitly accepted with reasoning)

**Tier 1 and 2 only:**

- [ ] Backend platform linter clean (e.g. Supabase database linter — flags missing RLS and exposed tables)
- [ ] Non-Claude second review complete (Codex Security CLI plugin: repo scan + diff review) — findings triaged
- [ ] Row Level Security (or equivalent access control) verified on every table/collection holding user data

**Tier 1 only:**

- [ ] One-time paid human security review complete — covering auth, rate limiting, and cross-user data isolation — before real users onboard

**Remaining all-tier items:**
- [ ] All user input validated and sanitized
- [ ] Save files validated on load
- [ ] No `eval()` or dynamic code execution on external/untrusted data
- [ ] Debug/dev features disabled in release build
- [ ] `.env` / credentials files confirmed in `.gitignore`
- [ ] Git history checked for accidentally committed secrets (`git log -p --all -S "api_key"` or similar)
- [ ] Network calls use HTTPS with valid certs and timeouts
- [ ] Error messages don't leak internal paths, stack traces, or system info

**Security Audit passed:** [YYYY-MM-DD] — logged in `docs/DECISIONS.md`

---

## Incident Log (if anything goes wrong)

<!-- Date, what happened, credential rotated Y/N, resolution -->
