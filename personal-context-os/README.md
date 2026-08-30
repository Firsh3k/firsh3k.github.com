# Personal Context OS v0.1

A reusable context-engineering template for long-running ChatGPT projects.

## Core idea

Separate five concerns:

1. **Memory** — stable user preferences and long-term background.
2. **Context** — project knowledge, current state, decisions, history, evidence.
3. **Skill** — repeatable workflow and execution logic.
4. **Tools** — external data and actions.
5. **Outputs** — reports, decisions, artifacts, journals.

The system is designed around **context routing** and **lazy loading**: load only the smallest useful subset of project context required for the current task.

## Repository layout

```text
personal-context-os/
├── README.md
├── 00_system/
│   ├── context-manifest.yaml
│   ├── context-routing.md
│   ├── source-priority.md
│   ├── evidence-policy.md
│   ├── version-policy.md
│   └── write-policy.md
├── 01_global_context/
│   ├── user-preferences.md
│   ├── decision-principles.md
│   ├── output-preferences.md
│   └── common-conventions.md
├── 02_projects/
│   ├── _project-template/
│   └── a-shares/
├── 03_shared_knowledge/
│   ├── reusable-frameworks/
│   ├── templates/
│   └── reference/
├── 04_skills/
│   ├── context-router/
│   └── review-a-shares-v4-draft/
└── 05_archive/
```

## Design principles

- **Global template, local context.** Keep cross-project rules small; isolate project-specific state.
- **Current state is not history.** Maintain compact `current` files plus append-only history/delta logs.
- **Knowledge is not workflow.** Skills should orchestrate context instead of becoming giant knowledge stores.
- **Evidence must be typed.** Separate raw facts, primary sources, verified market data, strategy inference, and model judgment.
- **Time matters.** Every mutable context item should carry effective date, version, and status.
- **No silent overwrite.** Strategy changes move through DRAFT → TEST → ACTIVE → DEPRECATED → ARCHIVED.
- **Regression before promotion.** Major skill/strategy changes should be tested against known historical cases.

## Lifecycle

```text
User request
  → resolve task
  → read project manifest
  → route minimum required context
  → load current/live data
  → execute active skill
  → generate output
  → produce state delta
  → persist only under write policy
```

## Status

Version: `0.1-DRAFT`

This branch is intentionally a sandbox. It should not be treated as the active production context system until validated.