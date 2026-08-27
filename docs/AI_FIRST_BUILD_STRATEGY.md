# AI-First Build Strategy — [PROJECT NAME]

---

## AI Use by Phase

| Phase | Use AI heavily for | Keep human-owned |
|---|---|---|
| Planning | Scope drafts, design options, checklists, risk logs | Final decisions and tradeoffs |
| Prototype | Boilerplate code, system spikes, placeholder content | Core loop tuning, architecture choices |
| Build | Iteration speed, test-case generation, UX copy variants | Final style direction, polish standards |
| Pre-launch | QA checklists, edge-case hunt, changelog support | Final acceptance, quality gate, player-facing promises |

---

## Hard Rules for Shipping Quality

1. No direct AI output ships without human review and edit pass
2. Keep one style bible per project — `docs/STYLE_GUIDE.md`
3. Validate every feature claim by playable/testable proof, not intent
4. Prefer fewer, better assets over large low-cohesion drops
5. Maintain a source log for any external/AI-assisted assets

---

## AI Tool Matrix (fill per phase)

| Phase | Primary tool | Human owner | Quality gate | Fallback |
|---|---|---|---|---|
| Planning | Antigravity | Ryan | Design review | Claude.ai |
| Prototype | Windsurf/Cursor | Ryan | Lint + smoke test | Claude Code |
| Build | Windsurf/Cursor | Ryan | Phase checklist | Claude Code |
| Pre-launch | Claude Code | Ryan | Audit suite | Manual |

---

## Community Trust Rules

1. Be transparent about AI use without making it the headline
2. Frame AI as a support tool — final quality decisions are human-owned
3. Show concrete craftsmanship (before/after passes, tuning notes, playtest fixes)
4. Never claim handcrafted quality if workflow is mostly AI-assisted solo

---

## Legal / IP Hygiene

1. Use only assets with clear licenses or fully original edits
2. Avoid trademark-confusable names/branding
3. Keep source/permission notes for all shipped external assets
4. If uncertain on a key asset, replace it before release
