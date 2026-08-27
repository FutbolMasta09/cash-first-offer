# Testing Strategy — [PROJECT NAME]

---

## Testing Approach by Type

| Test type | Applies? | How / Tool | When |
|---|---|---|---|
| Manual smoke test | | Open app/game, verify core loop works | Every session |
| Linter / syntax check | | `[command]` | Before every commit |
| Unit tests | | `[framework]` | [When written] |
| Device testing | | [Device(s)] | [Phase gate] |
| External playtest | | [Who: Amber, Libby, etc.] | [Phase gate] |
| Beta / soft launch | | [Platform TestFlight/Steam Playtest] | Pre-launch |

---

## Platform-Specific Test Steps

### [Platform 1]
- How to build: `[command]`
- How to install on device: [steps]
- What to verify: [list]

### [Platform 2]
- How to build: `[command]`
- How to install: [steps]
- What to verify: [list]

---

## Build Pipeline

| Step | Command / Tool | Notes |
|---|---|---|
| Dev build | `[command]` | |
| Release build | `[command]` | |
| Upload to platform | [tool/portal] | |

---

## Testing Protocol Rules

1. Never commit with a red linter error — fix or explicitly waive with reason
2. Hard reset build if behavior is unexpected: `[reset command]`
3. Red errors → use "Debug with AI" before asking for help
4. External testers get a written test packet — see `docs/[TESTER]_TEST_PACKET.md`

---

## Known Platform Quirks

<!-- Document device-specific or platform-specific gotchas here as discovered -->
