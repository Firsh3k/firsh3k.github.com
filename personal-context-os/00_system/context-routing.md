# Context Routing Protocol

## Goal

Load the smallest context package that is sufficient to complete the task accurately, while keeping non-authoritative Inbox material separate from authoritative Context.

## Routing sequence

1. Identify the task type.
2. Determine whether the request is a normal project task or a Context Intake task.
3. Read the target project's `project-manifest.yaml` when a project is involved.
4. Resolve the ACTIVE strategy/skill references.
5. Load compact current-state context first.
6. Add historical context only when it changes the decision.
7. Retrieve source material only for evidence gaps, explicit research, or Context Intake.
8. Exclude unrelated project context.
9. Record which context classes were used in the output audit when the project requires it.

## Context classes

- `INBOX`: external material and candidate insights that are not yet authoritative.
- `CONSTITUTION`: stable principles and non-negotiable constraints.
- `STRATEGY`: current decision rules and frameworks.
- `CURRENT_STATE`: latest known project state.
- `HISTORY`: prior states and dated snapshots.
- `CORPUS`: primary/raw source material.
- `DECISIONS`: why rules or states changed.
- `LESSONS`: validated patterns, errors, and retrospectives.
- `OUTPUT_SCHEMA`: report or artifact structure.

## Normal project loading policy

Use this order unless a project explicitly overrides it:

```text
manifest
→ constitution summary
→ active strategy
→ current state
→ task-specific recent history
→ live/current data
→ source evidence as needed
```

Do not load a complete project history merely because it exists.

`INBOX` is **not** part of the default project execution path. Load Inbox material only when:
- the user explicitly asks to ingest/evaluate/promote it;
- an ACTIVE Context item explicitly references an unresolved Inbox candidate;
- an eval/research task requires it.

## Context Intake routing

A request such as “喂给 PCOS” should route as:

```text
source
→ 00_inbox
→ context-intake-policy
→ candidate target Context
→ relevant ACTIVE Context for duplicate/conflict checks
→ context-promotion-policy
→ Context Intake Card
```

For high-impact candidate changes, also route to the affected project's evals, version policy, and rollback references before recommending promotion.

## Conflict policy

When two authoritative context items conflict:

1. Compare effective dates and status.
2. Prefer ACTIVE over DRAFT/DEPRECATED.
3. Prefer primary evidence over summaries.
4. Preserve historical statements as historical; do not silently merge them into the current state.
5. If unresolved, surface the conflict instead of inventing a reconciliation.

When an Inbox item conflicts with ACTIVE Context, ACTIVE Context remains authoritative until the promotion process explicitly changes it.
