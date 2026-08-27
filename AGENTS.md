# Cash-first offer — Codex Instructions

## UNIVERSAL PROTOCOLS
All sessions must follow the universal protocols at:
  C:\App Development\llm-wiki\PROTOCOLS.md

Read that file before starting any session. Rules below take precedence for project-specific behavior only.

## Read Order (before large changes)
1. `PROJECT_CONTEXT.md` (or `docs/PRODUCT_ROADMAP.md`) — source of truth for what to build next
2. `docs/DECISIONS.md` — do not contradict without a new decision entry
3. `docs/LAST_SESSION.md` — what was done, what's next, blockers

## Stack
- Framework: none yet — landing is a single static HTML file (or tiny static page); no SaaS, no auth, no database
- Language: HTML/CSS (see `docs/HANDOFF_LANDING_PAGE.md` for acceptance criteria)
- Platform: Web, deployed to Vercel or GitHub Pages

## How to Run
- No build step yet. Once `landing/` has a page, open the file directly or serve statically.

## End of Session
Always update `docs/LAST_SESSION.md` before closing. No separate exit-protocol doc — this is a lightweight service-experiment repo (see `docs/DECISIONS.md` D001).

## Antigravity Protocols
- **Starting a session:** Read `docs/LAST_SESSION.md` and `PROJECT_CONTEXT.md` first
- **Ending a session:** Update `docs/LAST_SESSION.md`, commit, push
- **Post-Edit Hook:** Run syntax check after every code file edit
