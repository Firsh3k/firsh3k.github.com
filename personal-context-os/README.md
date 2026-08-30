# Personal Context OS v0.1

A reusable context-engineering template for long-running ChatGPT projects.

## Core idea

Separate six concerns:

1. **Memory** — stable user preferences and long-term background.
2. **Inbox** — non-authoritative staging area for external articles, videos, books, conversations, ideas, and candidate insights.
3. **Context** — project knowledge, current state, decisions, history, evidence.
4. **Skill** — repeatable workflow and execution logic.
5. **Tools** — external data and actions.
6. **Outputs** — reports, decisions, artifacts, journals.

The system is designed around **context routing**, **lazy loading**, and **controlled promotion**: load only the smallest useful subset of project context required for the current task, and never let a new source silently rewrite authoritative Context.

## Repository layout

```text
personal-context-os/
├── README.md
├── 00_inbox/
│   └── README.md
├── 00_system/
│   ├── context-manifest.yaml
│   ├── context-routing.md
│   ├── context-intake-policy.md
│   ├── context-promotion-policy.md
│   ├── context-intake-card-template.yaml
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
- **Inbox is not authority.** External content can be captured freely but must pass classification, conflict checks, and promotion gates before changing ACTIVE Context.
- **Current state is not history.** Maintain compact `current` files plus append-only history/delta logs.
- **Knowledge is not workflow.** Skills should orchestrate context instead of becoming giant knowledge stores.
- **Evidence must be typed.** Separate raw facts, primary sources, verified secondary data, framework/strategy inference, and model judgment.
- **Time matters.** Every mutable context item should carry effective date, version, and status.
- **No silent overwrite.** Strategy/Skill changes move through DRAFT → TEST → RC → ACTIVE → DEPRECATED → ARCHIVED.
- **Regression before promotion.** Major skill/strategy changes should be tested against representative cases.
- **Source ≠ insight ≠ rule.** Preserve provenance and do not convert an author's opinion into a personal validated principle.

## Normal execution lifecycle

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

## External knowledge intake lifecycle

A user request such as **“喂给 PCOS”** invokes the intake workflow:

```text
Article / video / book / conversation / idea
  → Context Inbox
  → extract durable insights
  → classify
  → route candidate target
  → deduplicate + conflict check
  → evidence / impact assessment
  → Context Intake Card
  → REFERENCE / OBSERVE / ACTIVE_CANDIDATE / REJECTED
  → explicit promotion when required
  → authoritative Context update
  → changelog / version / eval when material
```

The default is **analysis first, promotion second**. High-impact ACTIVE Strategy, Constitution, legal/health/investment rules, and other consequential decision logic must never be changed merely because a new source was ingested.

## Status

Version: `0.1-DRAFT`

This branch is intentionally a sandbox. It should not be treated as the active production context system until validated.