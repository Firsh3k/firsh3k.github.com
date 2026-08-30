# PCOS System Evolution Governance

This directory preserves **why and how Personal Context OS changes over time**.

PCOS must not rely on chat history as the authoritative record of its own architecture. Material system changes are converted into durable, auditable records in GitHub.

## Three-layer record model

### 1. `CHANGELOG.md` — What changed?
The root changelog records user-visible and system-visible changes by date/version.

Use it for:
- files/features added or removed;
- behavior changed;
- version transitions;
- migration milestones;
- promotion/deprecation events.

### 2. `EVOLUTION-LOG.md` — How did the system evolve?
The evolution log records the chronological architecture journey:

`previous state → trigger/problem → decision → resulting state → validation → next gate`

It should make it possible to reconstruct the major stages of PCOS without replaying old conversations.

### 3. ADRs — Why was a material architecture decision made?
Architecture Decision Records (ADRs) preserve important decisions, alternatives, consequences, and revisit conditions.

Create an ADR when a change materially affects one or more of:
- Context architecture or project contract;
- routing/loading semantics;
- write/persistence semantics;
- authority/promotion rules;
- Skill/Context boundaries;
- source-of-record strategy;
- lifecycle/versioning;
- security/privacy or high-impact governance;
- migration architecture.

Do not create an ADR for routine state updates, minor wording changes, or ordinary project content.

## Required traceability for material changes

Every material PCOS architecture change should be traceable through:

```text
Need / problem
→ proposal
→ architecture decision (ADR if material)
→ implementation commit(s)
→ CHANGELOG entry
→ EVOLUTION-LOG transition
→ validation / eval
→ current system state
```

## Record principles

- **GitHub, not chat, is the system-of-record for PCOS architecture evolution.**
- Chat can originate ideas, but accepted architecture changes must be distilled into repository records.
- Preserve previous decisions; do not rewrite history to make the current design look inevitable.
- Distinguish `proposed`, `accepted`, `superseded`, and `rejected` decisions.
- Link later changes back to the ADR or evolution entry they supersede.
- A current architecture file describes **what is true now**; evolution records describe **how it became true**.
- Do not store long conversational transcripts when a concise decision record is sufficient.

## ADR status lifecycle

`PROPOSED → ACCEPTED → SUPERSEDED | REJECTED | ARCHIVED`

`ACCEPTED` means the architecture decision is part of the current design. It does not automatically imply the whole PCOS release is ACTIVE.

## Naming

Use sequential IDs:

```text
ADR-0001-context-inbox.md
ADR-0002-...
```

## User-facing operating rule

When a conversation produces a material PCOS architecture decision, the normal completion step is:

1. implement the accepted architecture change;
2. update the appropriate current system contract;
3. update `CHANGELOG.md`;
4. update `EVOLUTION-LOG.md`;
5. create/update an ADR when the decision is architecture-significant;
6. record validation status and next gate.

This keeps PCOS continuously current **and** historically explainable.
