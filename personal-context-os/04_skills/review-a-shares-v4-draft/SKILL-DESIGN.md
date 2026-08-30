# review-a-shares V4.0-DRAFT

Status: **TEST only**. This is the draft runtime contract stored in GitHub; it is **not yet an installed/ACTIVE ChatGPT Skill** and does not replace the current production `review-a-shares`.

Architecture: Context-native orchestrator.  
Production strategy baseline: `PROMPT_SYSTEM_MASTER_V3 2026.08.25-v3.4 ACTIVE`.

## Mission

Execute A-share market, sector, stock, portfolio and ranking reviews by loading the **minimum required current Context**, validating current data, applying only the current strategy modules, generating auditable reports, and producing explicit state deltas.

The Skill owns **procedure**. It does not own long-lived investment knowledge, full history, or current market truth.

## Task modes

- `MARKET_RADAR`
- `STOCK_REVIEW`
- `TOTAL_REVIEW`
- `TOP3`
- `SELL_CHECK`

`TOTAL_REVIEW` consumes the same-day Market State and same-day Stock Review objects; it does not restart the entire analysis from raw history.

## Runtime protocol

### 1. Resolve task
Map the request to exactly one primary task and only the dependent subflows required for that task.

### 2. Resolve project/version
Read:
1. `02_projects/a-shares/00_manifest/CURRENT.yaml`
2. `02_projects/a-shares/00_manifest/source-priority.yaml`
3. `02_projects/a-shares/00_manifest/routing.yaml`

Hard rule during migration:
- production baseline remains V3.4 ACTIVE;
- V4.0-DRAFT architecture remains TEST;
- no production V3.4 rule may be silently dropped or rewritten during architectural migration.

### 3. Route minimum Context
Follow `routing.yaml`.

Do **not** automatically load:
- all stock histories;
- all old daily reports;
- all sell cases;
- deprecated strategy versions;
- all sector research.

Load history only when a conflict, post-trade review, version comparison, or user-requested historical analysis requires it.

### 4. Resolve current state
For any trading-date task:
- Market Radar builds the canonical same-day Market State;
- Stock Review, Daily Review, Top3 and Sell Check reuse that same state object;
- previous-day state is prior context for delta/transition only, never a substitute for missing same-day state.

### 5. Validate data completeness
Classify every required input as:
- `AVAILABLE`
- `MISSING_BUT_RETRIEVABLE`
- `MISSING_NOT_RETRIEVABLE`
- `CONFLICTING`

Use `source-priority.yaml` to fill only permitted gaps.

Critical boundary inherited from V3.4:
- current-day Drive screenshots/chart packages remain primary evidence for current stock/chart structure where required;
- public web data can cross-check and fill reproducible history/official facts;
- public data must not silently promote a stock with missing required same-day chart evidence into a formal trade candidate.

### 6. Separate evidence from inference
Material statements should conceptually map to:
- raw/structured fact;
- primary official fact;
- verified market evidence;
- strategy inference;
- model judgment.

Never present inference as raw/company fact. Search failure is not confirmed absence.

### 7. Execute only routed strategy modules
Examples:
- Market Radar → `market-state-machine.md` + `market-radar.md`
- Stock Review → same-day Market State + `stock-review.md` + `trade-models.md`
- Sell/P0 decision → add `exit-and-sell-review.md`
- Daily/Top3 → same-day Market State + structured Stock Review outputs + `daily-review-top3.md`

### 8. Generate the production-equivalent report
During migration, preserve the detail and action fields required by the current production reports. V4 architectural cleanup is not permission to shorten away:
- market state audit;
- P0 risk management;
- detailed buy/sell paths;
- Final3 role semantics;
- T+1 scenario tree;
- data gaps/conflicts;
- evidence/source audit.

### 9. Produce state delta
Return meaningful changes only, e.g.:
- Market Gate / R/A/D change;
- sector lifecycle/role change;
- stock R-stage / MA5 / L1-R1-X / A-B-C-D change;
- trigger activated/invalidated;
- P0/S-level/position change;
- new data gap resolved or created.

Current State stores the latest truth; history stores the delta trail. Do not rewrite months of history into Current State.

### 10. Persistence gate
Two separate runtime modes:

#### `TEST / DRY_RUN`
- **read-only by default**;
- do not write production Google Sheet/Calendar/Drive state unless the user explicitly requests a test write;
- Friday/Monday migration validation therefore cannot corrupt the current V3.4 production record.

#### Future `ACTIVE`
- follow the then-current production `POST_TASK_SYNC_CHECK_PROTOCOL` and workflow-specific synchronization contract;
- migration does not silently change existing production persistence semantics;
- every write remains idempotent and must be read back/validated before claiming synchronization success.

### 11. Audit footer
Every run exposes:
- analysis date / data cutoff;
- project context version;
- strategy baseline version;
- Skill version/status;
- loaded Context modules;
- data completeness;
- unresolved conflicts;
- important source classes;
- confidence;
- state deltas;
- persistence result (`NOT_RUN / PARTIAL / PASS / FAIL`).

## Friday regression test

Fixture: `02_projects/a-shares/11_evals/friday-2026-08-28.yaml`

The dry-run must preserve at least these critical invariants:
- 🟠 high-volatility rotation;
- R=-7.5 / A=+13.3 / D=+20.8;
- default new risk 0%;
- zero formal empty-position executable candidates;
- 6 successful stock reviews + 2 P0 data gaps;
- correct P0 quantities/roles;
- Final3 roles = 飞荣达 P0 protection / 拓斯达 risk correction / 银之杰 conditional observation;
- no invented industry lifecycle/B250/timing score;
- no production writes.

## Monday state-transition test

Fixture: `02_projects/a-shares/11_evals/monday-2026-08-31-state-transition.yaml`

Wait for actual 2026-08-31 close-confirmed data. The test must prove V4 can:
- use Friday only as prior state;
- recompute Monday Market State from Monday evidence;
- propagate exactly one Monday Market State downstream;
- reconcile Monday P0/transactions;
- upgrade/maintain/downgrade using Monday facts rather than copy Friday labels.

## Promotion lifecycle

```text
V4.0-DRAFT / TEST
→ Friday regression PASS
→ Monday transition PASS
→ V4.0-RC1
→ cross-workflow + persistence idempotency + rollback checks
→ V4.0 ACTIVE
```

Current V3.4 is not deleted. On promotion it becomes the rollback/archived baseline.

## Promotion criteria

1. no critical ACTIVE-rule loss;
2. no loss of required report detail;
3. correct current-version resolution;
4. reliable missing-data boundaries;
5. same-day Market State consistency across workflows;
6. stable P0/stock model classification;
7. correct persistence/idempotency behavior;
8. improved provenance/context isolation;
9. rollback verified.
