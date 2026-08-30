# Context Routing Protocol

## Goal

Load the smallest context package that is sufficient to complete the task accurately.

## Routing sequence

1. Identify the task type.
2. Read the target project's `project-manifest.yaml`.
3. Resolve the ACTIVE strategy/skill references.
4. Load compact current-state context first.
5. Add historical context only when it changes the decision.
6. Retrieve source material only for evidence gaps or explicit research.
7. Exclude unrelated project context.
8. Record which context classes were used in the output audit.

## Context classes

- `CONSTITUTION`: stable principles and non-negotiable constraints.
- `STRATEGY`: current decision rules and frameworks.
- `CURRENT_STATE`: latest known project state.
- `HISTORY`: prior states and dated snapshots.
- `CORPUS`: primary/raw source material.
- `DECISIONS`: why rules or states changed.
- `LESSONS`: validated patterns, errors, and retrospectives.
- `OUTPUT_SCHEMA`: report or artifact structure.

## Loading policy

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

## Conflict policy

When two context items conflict:

1. Compare effective dates and status.
2. Prefer ACTIVE over DRAFT/DEPRECATED.
3. Prefer primary evidence over summaries.
4. Preserve historical statements as historical; do not silently merge them into the current state.
5. If unresolved, surface the conflict instead of inventing a reconciliation.
