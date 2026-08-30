# A股 Context-native Daily Runbook

Version: 4.0-draft.1  
Status: TEST

## Daily execution graph

```text
Current manifest/version
        ↓
Current-day inputs + source audit
        ↓
MARKET_RADAR
        ↓
Canonical same-day Market State
        ↓
STOCK_REVIEW(s) ──→ Stock State Deltas
        ↓
Structured same-day Stock Review objects
        ↓
DAILY_REVIEW / 7→5→3 / P0
        ↓
Decision + next-session scenario
        ↓
State Deltas
        ↓
Production persistence/audit (ACTIVE only)
```

## 1. MARKET_RADAR

Load only:
- Manifest/source policy/routing;
- market principles;
- market state machine;
- radar strategy;
- prior Market State for comparison;
- current-day market evidence;
- recent market deltas if necessary.

Produce one canonical Market State:
- data status/conflicts;
- technical score/coverage;
- R/A/D;
- weekly/monthly status;
- industry/breadth/timing qualified status or N/A;
- market gate;
- sector migration/ranking;
- new-risk permission;
- candidate collection tasks;
- next-day upgrade/maintain/downgrade conditions.

## 2. STOCK_REVIEW

For each relevant stock:
- require same-day Market State;
- load compact current stock summary first;
- expand history only for conflict/comparison/postmortem;
- load current chart/event/sector evidence;
- apply stock review + trade models;
- load sell module only for P0/actual or planned sell.

Output structured Stock Review object + state delta.

Important: missing same-day required chart evidence stays a data gap. Web fill does not create a fake complete stock review.

## 3. DAILY_REVIEW / TOP3

Consume:
- canonical Market State;
- structured Stock Review objects;
- current holdings;
- actual same-day trades.

Do not restart market or every stock from raw history.

Produce:
- command homepage;
- P0 priority;
- sector-stock resonance;
- Battle7 → Focus5 → Final3;
- detailed Final3/P0 execution cards;
- zero-trade conclusion when appropriate;
- next-session scenario;
- research/execution deltas.

## 4. State update

After a valid close-confirmed run:

### Market
Update `03_market_state/current.md` with the new current state and append material prior→new delta to history.

### Sectors
Update only sectors whose state materially changed.

### Stocks
Update compact current stock state and append only material deltas. Do not rewrite months of history.

### Portfolio
Update only from confirmed transaction/holding facts.

### Lessons
Actual execution cases enter Trading Journal. They do not automatically modify Strategy.

## 5. Strategy update is different from state update

Examples:
- market becomes orange→yellow = State update, no Strategy version bump;
- 飞荣达 B→A = Stock State update, no Strategy version bump;
- change definition of first effective pullback = Strategy change → new Draft version + Evals;
- add report section only = Skill/report-schema change;
- change source authority = Source Policy version change.

## 6. Version lifecycle

```text
DRAFT
→ TEST on historical/frozen fixtures
→ TEST on next real state transition
→ RC
→ integration + persistence/idempotency + rollback checks
→ ACTIVE
→ DEPRECATED / ARCHIVED when superseded
```

Never delete the immediate rollback baseline during promotion.

## 7. V4 migration sequence

Current:
- V3.4 production = ACTIVE.
- V4.0-DRAFT Context architecture = TEST.
- Friday 2026-08-28 structural/decision regression = PASS.
- Monday 2026-08-31 real state-transition = waiting for real close data.

If Monday passes:
1. mark V4.0-RC1;
2. verify Market Radar / Stock Review / Daily Review cross-consistency;
3. test production persistence idempotency/read-back in controlled mode;
4. verify rollback target V3.4;
5. only then promote V4.0 ACTIVE and deprecate (not delete) V3.4.
