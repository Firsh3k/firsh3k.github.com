# Version Policy

## Lifecycle

All mutable strategies and major skills use:

`DRAFT → TEST → ACTIVE → DEPRECATED → ARCHIVED`

## When to version

Create a new strategy version when the rule for making future decisions changes.

Do **not** create a strategy version for:
- daily state changes,
- new observations,
- a stock or project item changing status,
- routine journal entries.

Create a skill patch/minor version for:
- report schema changes,
- routing changes,
- data validation changes,
- workflow logic changes.

Create a skill major version when the execution architecture materially changes.

## Promotion gate

A DRAFT cannot become ACTIVE until:
1. representative regression cases are selected;
2. expected behaviors are documented;
3. the new version is compared with the current ACTIVE version;
4. critical regressions are resolved;
5. the promotion decision is logged.

## Changelog entry

Every promoted change should record:
- date,
- old version,
- new version,
- reason,
- changed rules,
- known tradeoffs,
- regression cases used,
- rollback target.
