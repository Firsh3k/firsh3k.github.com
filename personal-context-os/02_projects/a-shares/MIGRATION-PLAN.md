# A-Share Context Migration Plan

## Objective

Migrate the existing A-share review system from a prompt/skill-centric architecture to a context-native architecture without changing the currently validated production behavior until V4.0 is proven.

## Phase 1 — Inventory

Map existing assets into these buckets:

- Constitution / stable investment principles
- Active strategy rules
- Market radar rules
- Stock review rules
- Entry rules: left/right
- Exit rules
- Position sizing
- Top3 ranking
- Data-source policy
- Report schemas
- Google Sheet synchronization rules
- Historical market states
- Stock histories
- Trading journal / research classroom
- Lessons and known failure cases
- Existing regression days

Each source item should receive:
- current location,
- target context location,
- effective date,
- current status,
- strategy version if applicable,
- whether it is authoritative or historical.

## Phase 2 — Extract Context from Skill

Move durable knowledge out of the skill into project context while preserving behavior.

Target structure:

```text
01_constitution/
02_strategy/
03_market_state/
04_sector_context/
05_stock_context/
06_portfolio/
07_trading_journal/
08_data/
09_reports/
10_decisions/
11_evals/
12_versions/
```

Rule: extraction must not silently rewrite the meaning of the current V3.4 strategy.

## Phase 3 — Build Compact Current State

Create compact `current` representations for:

- market,
- each active stock,
- portfolio,
- major tracked sectors.

Keep dated history separately. Current files should contain only decision-relevant present state plus references to recent deltas.

## Phase 4 — Wire V4.0-DRAFT

Use `review-a-shares V4.0-DRAFT` as the orchestrator.

During testing:
- strategy baseline = V3.4 ACTIVE;
- architecture = V4.0-DRAFT TEST;
- original production skill remains available for comparison and rollback.

## Phase 5 — Friday Validation

Use the selected Friday close dataset as a controlled regression run.

Compare production vs V4 on:

| Dimension | Pass condition |
|---|---|
| Data cutoff | same trading date / close status |
| Data completeness | V4 equal or better |
| Missing-data recovery | required retrievable gaps are filled |
| Market regime | differences must be explainable |
| Index structure | no unexplained omission |
| Mainline / sectors | no unsupported drift |
| Stock classification | rules applied consistently |
| A/B/C/D | no silent rule changes |
| Top3 | ranking differences traceable |
| Detail level | no material loss |
| Evidence separation | facts vs inference are distinguishable |
| Context isolation | unrelated history not required |
| Persistence | no unintended external writes |

## Phase 6 — Monday Live Transition Test

Run V4 on the following Monday trading-day dataset.

This test is specifically for state transition:

`Friday current state → Monday live/close data → Monday state delta → new current state`

Check that:
- Friday history remains preserved;
- Monday does not inherit stale conclusions as facts;
- changed market/sector/stock states are expressed as deltas;
- unchanged items are not unnecessarily rewritten;
- strategy version remains correct.

## Promotion Decision

### Promote to V4.0 ACTIVE only if

- Friday regression passes;
- Monday transition passes;
- no critical production behavior is lost;
- required report detail is preserved;
- missing-data recovery works;
- context routing is materially cleaner;
- no unintended write behavior occurs.

### On promotion

1. Snapshot the old skill.
2. Mark old skill `DEPRECATED`, not deleted.
3. Mark V4.0 `ACTIVE`.
4. Update project manifest.
5. Record promotion date and regression evidence.
6. Keep rollback target for at least the next validation cycle.

### If validation fails

Keep current production skill ACTIVE, log the failed case into `11_evals/`, fix V4.0-DRAFT, and rerun the failing regression case before any replacement.
