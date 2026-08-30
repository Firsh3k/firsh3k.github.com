# A股 Context System Changelog

## 4.0-draft.1 — 2026-08-30

Status: TEST

### Architecture
- Introduced Context-native `review-a-shares` design.
- Kept production strategy baseline at `2026.08.25-v3.4 ACTIVE`.
- Separated durable investment constitution from workflow procedure.
- Added Context Router with task-specific lazy loading.
- Added source-priority/conflict policy.
- Added canonical same-day Market State reuse contract.
- Added current Portfolio/P0 state.
- Split strategy into modular contexts:
  - market state machine;
  - market radar;
  - stock review;
  - trade models;
  - exit/sell review;
  - daily review/Top3.
- Created machine-checkable Friday golden fixture and Monday state-transition fixture.

### Migration baseline verified from production Sheet
- `PROMPT_SYSTEM_MASTER_V3` = `2026.08.25-v3.4 ACTIVE`
- `PROMPT_MARKET_RADAR` = `2026.08.25-v2 ACTIVE`
- `PROMPT_STOCK_REVIEW` = `2026.08.25-v3 ACTIVE`
- `PROMPT_DAILY_REVIEW` = `2026.08.25-v3 ACTIVE`
- `SHARED_TRADING_RULES` = `2026.08.25-v3 ACTIVE`
- `SELL_EXECUTION_REVIEW_PROTOCOL` = `2026.08.24-v2 ACTIVE`
- `POST_TASK_SYNC_CHECK_PROTOCOL` = `2026.08.25-v4 ACTIVE`

### Friday 2026-08-28 regression
Result: `PASS — Structural + Decision Fixture Regression`.

Preserved critical invariants:
- 🟠 high-volatility rotation;
- R=-7.5 / A=+13.3 / D=+20.8;
- default new risk = 0%;
- empty-position executable candidates = 0;
- 6 successful stock reviews + 2 P0 data gaps;
- P0 roles/quantities preserved;
- Final3 = 飞荣达 P0 protection / 拓斯达 risk correction / 银之杰 conditional observation;
- qualified N/A fields stayed N/A;
- no production writes.

Not yet tested:
- independent raw-screenshot replay;
- installed Skill runtime;
- production persistence/idempotency;
- Monday real-data state transition;
- rollback mechanics.

### Promotion policy
`V4.0-DRAFT TEST → Friday PASS → Monday PASS → V4.0-RC1 → integration/rollback PASS → V4.0 ACTIVE`.

Production V3.4 remains untouched until promotion.
