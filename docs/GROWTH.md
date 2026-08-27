# Growth plan — Cash-first offer

**Plans only.** Nothing in this file authorizes creating the folders it describes yet. Per D001 and the repo-setup audit (F03/F07/F14/F15), `clients/` and `kits/` are not created at scaffold — only when their trigger condition is actually met.

---

## `clients/` — separate repo per engagement, not a folder here

**Do not create `clients/` in this repo.** When Package B work actually starts:

1. Create a **new, separate private repo** per client engagement (e.g. `cash-first-client-<shortname>`).
2. That repo holds the client brief, notes, and delivery artifacts — anything that is the client's business data.
3. This repo (`cash-first-offer`) never holds another person's business data. The moment it does, `docs/SECURITY_CHECKLIST.md`'s Tier re-check fires (Tier 1).

**Why separate, not a `clients/` subfolder:** a client's brief/data doesn't belong in the same repo as the offer's pricing strategy, kill criteria, and outreach records; a client should never need access to this repo to see their own deliverable; and this repo may eventually go public (landing page hosting) while client repos never should.

## `kits/` — only after the Track B decision, not at scaffold

**Do not create `kits/` in this repo yet.** Per `docs/OWNED_ARTIFACT_DECISION.md`, Track B (a $49–$79 owned kit) is only allowed after:

- ≥1 paid Package A/B job, **or**
- 3 pre-orders / 5 serious intent emails

When that gate is actually met and Ryan chooses Option A in `OWNED_ARTIFACT_DECISION.md`:

1. Add a `kits/` folder here (or a separate repo if the kit grows into its own distribution pipeline — decide at that time).
2. Cursor drafts a `HANDOFF_KIT_PRODUCT.md` per the existing note in `OWNED_ARTIFACT_DECISION.md`.

**Why not now:** an empty `kits/` folder invites "build the kit to avoid doing outreach" — the exact anti-pattern `OWNED_ARTIFACT_DECISION.md` Rule 1 forbids.

## Wiki overview — deferred

A `coding/projects/cash-first-offer/overview.md` wiki page (runbook Phase 9) is **deferred to the day-14 review** rather than created at scaffold. This experiment may be killed by day-14 or day-30; a wiki page for a killed experiment is stale-knowledge debt. Revisit at day-14 if the experiment continues.
