# Version Policy

## Lifecycle

All mutable strategies and major skills use:

`DRAFT → TEST → RC → ACTIVE → DEPRECATED → ARCHIVED`

`RC` means release candidate: the change has passed its primary regression tests but is still undergoing controlled integration/shadow validation before replacing the current ACTIVE version.

## When to version

Create a new strategy version when the rule for making future decisions changes.

Do **not** create a strategy version for:
- daily state changes,
- new observations,
- an Inbox item being added,
- a REFERENCE/OBSERVE candidate being recorded,
- a stock or project item changing status,
- routine journal entries.

Create a strategy/principle version when a Context Promotion changes future behavior, decision thresholds, constraints, or authoritative operating rules.

Create a skill patch/minor version for:
- report schema changes,
- routing changes,
- data validation changes,
- workflow logic changes.

Create a skill major version when the execution architecture materially changes.

## Promotion gate

A DRAFT cannot become ACTIVE directly when the change is material. Use:

```text
DRAFT
→ TEST
→ RC
→ ACTIVE
```

Before ACTIVE promotion:
1. representative regression cases are selected;
2. expected behaviors are documented;
3. the new version is compared with the current ACTIVE version;
4. critical regressions are resolved;
5. controlled integration/shadow behavior is checked where applicable;
6. persistence/read-back/rollback behavior is verified when the change can mutate external state;
7. the promotion decision is logged.

For low-risk documentation-only changes, the project may define a lighter promotion path as long as no decision behavior changes.

## Context Intake interaction

An Inbox item does not require a Strategy/Skill version by itself.

Versioning is triggered only when an approved Context Promotion changes an authoritative rule, principle, schema, routing contract, or executable behavior.

## Changelog entry

Every promoted material change should record:
- date,
- old version,
- new version,
- reason,
- source/intake references when relevant,
- changed rules,
- known tradeoffs,
- regression cases used,
- rollback target.
