# Exit Protocol — [PROJECT NAME]

Run at the end of every focused work session. Follow in order.

---

## 1. Give Ryan testing instructions

Before writing any handoff, tell Ryan exactly what to test.
- What to open / run
- What to click or do
- What to verify (specific outcome)

If no observable output (types only, tooling): say so and skip to step 3.

---

## 2. Wait for Ryan's confirmation

Do not update `docs/LAST_SESSION.md` until Ryan confirms:
- Testing passed, OR
- Ryan explicitly says to skip ("skip it" / "looks fine" / "just do the handoff")

---

## 3. Syntax / lint check

- [ ] No intentional broken states left on `main`
- [ ] Run project linter: `[linter command]`
- [ ] Syntax check any edited code files: `node --check <file>` (JS) or equivalent

---

## 4. Documentation

- [ ] **Product/plan change?** Update roadmap + add Decision entry
- [ ] **New feature idea?** Append to backlog before closing
- [ ] **New dependency?** Flag it in handoff

---

## 5. Log to wiki

Append a session summary to `C:\App Development\llm-wiki\log.md`:

```
## [YYYY-MM-DD] [session-type] | [Project name] — [brief description]

**Files changed:** [key files]
**Key decisions:** [if any]
**Status:** Session closed
```

Then commit and push the wiki:
```bash
cd "C:\App Development\llm-wiki"
git add log.md
git commit -m "log: [project] session [YYYY-MM-DD]

Co-Authored-By: Claude Sonnet <noreply@anthropic.com>"
git push
```

**This step is mandatory for every session, including docs-only work.**

If a phase milestone, architectural decision, or significant status change occurred:
- [ ] Also update `C:\App Development\llm-wiki\coding\projects\<name>\overview.md` and commit it in the same wiki push.

---

## 6. Handoff note

Overwrite `docs/LAST_SESSION.md`:
```
# Last Session — YYYY-MM-DD
## Done
- …
## Next
- …
## Blockers
- …
## Known Deferred Items
- …
## Exit Protocol
Status: Complete — YYYY-MM-DD
Steps completed: All (or: Blocked at step N — [reason])
```

---

## 7. Commit and push

```bash
git add -A
git commit -m "[Phase/Task]: [Summary]

- Bullet points of what was done
- Known issues if any

Co-Authored-By: [AI Tool] <noreply@anthropic.com>"
git push
```

---

## 8. Stop point

State **one** concrete next task. Tell Ryan he can start a new chat.

**Never exit with uncommitted changes.**
