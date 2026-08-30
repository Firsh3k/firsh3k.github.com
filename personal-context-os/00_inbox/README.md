# PCOS Context Inbox

`00_inbox/` is the staging area for external material that may be useful to Personal Context OS but has **not** yet been promoted into authoritative Context.

## Purpose

Use the Inbox for articles, videos, books, conversations, research notes, screenshots, ideas, and other external inputs that may contain useful knowledge, lessons, hypotheses, frameworks, or principle candidates.

The Inbox is intentionally **non-authoritative**. An item being stored here does not mean it is true, validated, or allowed to change an ACTIVE project rule.

## Standard intake flow

```text
External source
  → Inbox
  → extract useful claims / insights
  → classify
  → deduplicate
  → conflict check
  → evidence / risk assessment
  → recommend target Context
  → user review when promotion is material
  → promote / observe / reject / archive
```

## User-facing shortcut

A request such as **“喂给 PCOS”** should be interpreted as:

1. ingest the supplied material into the PCOS intake workflow;
2. extract only durable or decision-relevant insights rather than merely summarizing the source;
3. classify each insight;
4. compare it with existing PCOS Context;
5. recommend where it belongs and its status;
6. do **not** silently change ACTIVE Strategy, Constitution, or high-impact project rules;
7. produce a Context Intake Card;
8. wait for the explicit update/promotion step when required by policy.

## Suggested subfolders

```text
00_inbox/
├── articles/
├── videos/
├── books/
├── conversations/
├── ideas/
└── processed/
```

Folders may be created lazily as actual intake items arrive.

## Insight types

- `FACT` — externally checkable factual claim; may be time-sensitive.
- `KNOWLEDGE` — durable domain knowledge.
- `FRAMEWORK` — reusable model, taxonomy, checklist, or analytical lens.
- `LESSON` — experience-derived lesson; preserve whether it is external or personally validated.
- `HYPOTHESIS` — plausible but unvalidated claim that needs observation or testing.
- `PRINCIPLE_CANDIDATE` — candidate for a durable project/global principle.
- `STRATEGY_CANDIDATE` — candidate that would change future decision/execution rules.

## Intake status

- `REFERENCE` — worth retaining or retrieving; no behavioral authority.
- `OBSERVE` — plausible and worth monitoring/testing.
- `ACTIVE_CANDIDATE` — strong enough to consider promotion after required checks.
- `ACTIVE` — promoted into authoritative Context through the promotion policy.
- `REJECTED` — evaluated and not accepted.
- `ARCHIVED` — retained for traceability but not active.

## Core safety rule

**External content may enter the Inbox automatically; it may not automatically rewrite high-impact ACTIVE Context.**
