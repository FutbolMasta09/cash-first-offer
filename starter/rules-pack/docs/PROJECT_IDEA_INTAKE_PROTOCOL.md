---
title: Project idea intake protocol
purpose: How new project and product ideas move from chat into durable docs — reusable across repos
owner: Ryan
last_updated: 2026-03-23
---

# Project idea intake protocol

## Purpose

Turn **idea dumps in Cursor chat** into **classified, filed records** without requiring a separate capture step first. Intake **records** ideas; it does not authorize starting build work. Big decisions still go through [planning-protocol.mdc](../.cursor/rules/planning-protocol.mdc) when you lock scope.

## Default habit (chat-first)

1. **Dump** — Type the idea in chat whenever it occurs (messy is fine).
2. **Respond** — When the assistant restates and proposes where to file it, answer with **yes**, **notebook only**, **pool**, **current project backlog**, **don’t file**, or a short correction.
3. **Expect** — No implementation or repo scaffold from intake unless you explicitly ask for planning or a build step.

The assistant follows [.cursor/rules/project-idea-intake.mdc](../.cursor/rules/project-idea-intake.mdc).

## Where ideas land (this repo)

| Destination | File | When |
|-------------|------|------|
| Brain dump / archive line | [IDEAS_NOTEBOOK.md](IDEAS_NOTEBOOK.md) | Vague, emotional, “someday,” or not ready to compete in the pool |
| Future flagship pool | [FUTURE_PROJECTS_POOL_MASTERLIST.md](FUTURE_PROJECTS_POOL_MASTERLIST.md) | Serious post–current-primary-project candidate — use **Intake Section** format in that doc |
| Order of execution | [POST_PRIMARY_PROJECT_LOCK.md](POST_PRIMARY_PROJECT_LOCK.md) | Reference only — intake does not change locked order |
| Compare when planning | [PROJECT_PRIORITY_AUDIT.md](PROJECT_PRIORITY_AUDIT.md) | At planning window, not at every idea |
| Current app scope | [PROJECT_CONTEXT.md](../PROJECT_CONTEXT.md) Future Features | Feature for the current app but not current phase — with scope-creep guard |
| Big planning session | [PLAN_MODE_AND_BACKLOG.md](PLAN_MODE_AND_BACKLOG.md) | Cross-cutting or needs a dedicated Plan mode session |
| Parallel hobby / non-commercial new repo | Your workspace's hobby-project index and scheduling rules | Same bootstrap discipline as a primary project; different scheduling rules — index it so it is not forgotten |

**Rule:** Adding a row to the pool masterlist **does not** authorize starting a new repo or build — say so in the read-back.

## Promotion ladder

```text
Chat dump → IDEAS_NOTEBOOK (optional line) → Pool row → Planning window → Repo / scaffold
```

Only the first steps are allowed casually. Moving to **pool** means “serious candidate when the planning window opens.”

## Optional entry paths

- **Explicit trigger (first line):** `PROJECT IDEA INTAKE` — optional second line: `SCOPE: new-standalone-project` | `pool-candidate` | `current-project-feature` | `unknown`
- **Equivalent:** `[NEW PROJECT IDEA]` as the first line
- **File-first:** Append to [IDEAS_NOTEBOOK.md](IDEAS_NOTEBOOK.md) offline, then in chat: “Process what I added to the idea notebook” or `@IDEAS_NOTEBOOK` + run intake

## Quarterly / review hook

When you run a monthly or blueprint review, ask once: **Any IDEAS_NOTEBOOK lines or pool rows to promote, merge, or delete?**

## Cross-project use

- **Portfolio source of truth:** Keep [IDEAS_NOTEBOOK.md](IDEAS_NOTEBOOK.md) and [FUTURE_PROJECTS_POOL_MASTERLIST.md](FUTURE_PROJECTS_POOL_MASTERLIST.md) in this repo (or one long-lived repo); other repos can point here.
- **Per-repo feature ideas:** File against that repo’s `PROJECT_CONTEXT` / roadmap after you confirm — same propose-then-confirm flow.

## Related rules

- The project's scope-creep guard rule, if one exists — phase-scoped feature discipline
- [planning-protocol.mdc](../.cursor/rules/planning-protocol.mdc) — New initiatives: review after first cycle
