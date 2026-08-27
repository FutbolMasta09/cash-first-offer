# Accessibility Checklist — [PROJECT NAME]

Reference `C:\App Development\docs\SOLO_STUDIO_PLAYBOOK.md` Section 8 for full context. Mark items N/A if they don't apply to this project's platform — don't delete the row, just note why.

---

## Input

- [ ] Full keyboard support (or platform equivalent — VoiceOver rotor, TalkBack navigation)
- [ ] Full controller support with remappable buttons (if applicable — games/apps with controller support)
- [ ] Touch targets meet minimum size (mobile: 44x44pt iOS / 48x48dp Android)

## Visual

- [ ] Text size options / respects system font scaling
- [ ] Color-blind safe UI — no information conveyed by color alone
- [ ] Sufficient contrast ratios (WCAG AA minimum: 4.5:1 text, 3:1 large text/UI)
- [ ] UI usable at 200% zoom (web/PWA) or largest system text size (mobile)

## Audio / Motion

- [ ] Subtitle/caption options (if the project has audio/dialogue)
- [ ] No essential information conveyed by sound alone
- [ ] Reduced-motion option (if animations/flashing effects present)

## Flow

- [ ] Pause anywhere (games) / no forced time limits without extension option
- [ ] Difficulty options (games, if applicable)
- [ ] Clear error messages with recovery paths (forms, save/load failures)

## Platform-Specific

- [ ] **Steam:** Accessibility tags filled out honestly on store page
- [ ] **Mobile:** OS accessibility APIs used correctly (accessibility labels, semantic roles)
- [ ] **Web:** Semantic HTML, ARIA labels where needed, passes automated check (axe or similar)

---

**Accessibility Audit passed:** [YYYY-MM-DD] — logged in `docs/DECISIONS.md`
