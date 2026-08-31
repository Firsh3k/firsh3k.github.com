# review-a-shares V4.0-RC1

Status: **RC / shadow-production candidate**. This is the RC runtime contract stored in GitHub; it is **not yet an installed/ACTIVE ChatGPT Skill** and does not replace production `review-a-shares` V3.4.

Architecture: Context-native orchestrator.  
Production control / rollback baseline: `PROMPT_SYSTEM_MASTER_V3 2026.08.25-v3.4 ACTIVE`.

## Mission

Execute A-share market, sector, stock, portfolio and ranking reviews by loading the minimum required current Context, validating same-day evidence, applying the current strategy modules, producing one canonical same-day Market State, and generating auditable state deltas.

The Skill owns **procedure**. Long-lived project truth, strategy knowledge and history live in Context / source-of-record systems.

## RC1 objective

RC1 must prove that Context + Skill can independently reproduce the production system's core decision semantics from the same frozen same-day raw evidence **without reading same-day V3.4 derived conclusions before the RC1 result is frozen**.

RC1 is not ACTIVE. V3.4 continues to own production persistence.

## Task modes

- `MARKET_RADAR`
- `STOCK_REVIEW`
- `TOTAL_REVIEW`
- `TOP3`
- `SELL_CHECK`

`TOTAL_REVIEW` consumes the canonical same-day Market State and same-day structured Stock Review objects; it does not repeatedly rebuild market state or reload full historical corpora.

## Runtime protocol

### 1. Resolve project/version
Read:
1. `02_projects/a-shares/00_manifest/CURRENT.yaml`
2. `02_projects/a-shares/00_manifest/source-priority.yaml`
3. `02_projects/a-shares/00_manifest/routing.yaml`

Hard rules:
- V3.4 remains ACTIVE production control until an explicit V4 ACTIVE promotion;
- RC1 may not silently drop or rewrite any ACTIVE V3.4 decision rule;
- RC1 shadow runs are read-only by default.

### 2. Route minimum Context
Use `routing.yaml` and lazy loading. Do not automatically load all stock histories, all old reports, all sell cases, deprecated versions or unrelated sector research.

### 3. Freeze same-day evidence boundary
For an RC independent shadow run, establish a same-day raw-input snapshot before comparing with V3.4.

Allowed before RC1 result freeze:
- same-day Drive market screenshots / stock chart packages;
- reproducible same-day index OHLCV and official/public facts permitted by source-priority policy;
- user/broker-confirmed same-day trades and holdings;
- prior-day Context for transition/delta only;
- ACTIVE strategy modules and prior transaction history when genuinely required.

Prohibited as RC1 inputs before result freeze:
- same-day V3.4 R/A/D;
- same-day V3.4 Market Gate conclusion;
- same-day V3.4 stock classifications/scores;
- same-day V3.4 Final3/Daily Review conclusion.

If contaminated by same-day derived production conclusions, record the contamination risk and re-run from isolated inputs when material.

### 4. Build exactly one canonical same-day Market State
Execution order:
`identity/date/formula audit → index technical scores → R/A/D → weekly/monthly → industry lifecycle → breadth → technical×timing → volume/sentiment/R-stage → final gate`.

Previous-day state is prior context only, never a substitute for missing same-day state.

### 5. Reuse the same state downstream
Stock Review, Daily Review, Top3 and Sell Check must reference the same state ID/version and exact R/A/D. No downstream workflow may silently recompute a second market object.

### 6. Validate input completeness
Classify required inputs as:
- `AVAILABLE`
- `MISSING_BUT_RETRIEVABLE`
- `MISSING_NOT_RETRIEVABLE`
- `CONFLICTING`

Missing current-day stock chart evidence remains a data gap and cannot be replaced with generic web prices to grant trade qualification.

### 7. Preserve hard trading semantics
RC1 must preserve:
- four gates;
- L1/R1/X;
- R0-R4;
- MA5 state discipline;
- P0 priority;
- S0-S4;
- 2+1 anti-mis-sell gate;
- relative-strength protection;
- real-trade-only transaction evidence;
- Final3 as attention/condition/risk queue rather than a buy list;
- zero executable trades as a valid result;
- qualified N/A and source-conflict discipline.

### 8. Generate production-equivalent detail
Do not use architectural simplification as permission to remove:
- market-state audit;
- detailed index score/coverage evidence;
- main-line/theme migration;
- P0 management;
- detailed buy/sell paths;
- Final3 roles;
- next-session scenarios;
- unresolved data gaps/conflicts;
- evidence/source audit.

### 9. Produce compact state deltas
Return only material changes in Market Gate/R/A/D, sector role, stock model/state, trigger/invalidation, P0/S-level/quantity and data-gap resolution. Current State and history remain separate.

### 10. RC1 persistence contract

#### Independent shadow runs
- read-only;
- no production Sheet/Calendar/Drive mutation;
- V3.4 remains production writer.

#### Controlled persistence validation
Only after independent shadow PASS and under an explicitly scoped validation step:
- test idempotent create/update behavior;
- read back every write;
- ensure rerunning the same task does not duplicate rows/events;
- preserve a rollback path.

#### Future ACTIVE
Only after explicit promotion. Inherit the then-current production sync/read-back contract; do not invent new persistence semantics during architecture migration.

### 11. Audit footer
Every RC1 run exposes:
- analysis date / cutoff;
- project context version;
- production baseline;
- candidate version/status;
- Market State ID;
- loaded Context modules;
- data completeness/conflicts;
- state deltas;
- RC input-isolation status;
- persistence result;
- comparison status vs production control when comparison is allowed.

## Passed pre-RC evidence

### 2026-08-28 Friday fixture
PASS — structural + decision-semantic regression.

Preserved:
- 🟠 high-volatility rotation;
- R=-7.5 / A=+13.3 / D=+20.8;
- default new risk 0%;
- 6 successful stock reviews + 2 P0 data gaps;
- Final3 role semantics;
- 0 formal new executable candidates;
- qualified N/A;
- no production writes.

### 2026-08-31 Monday real-data transition
PASS — real close-confirmed transition / same-day-state reuse.

Canonical test state:
`MS-20260831-CLOSE-V4DRAFT | 🟡 Conditional Attack | R=+16.7 | A=+25.8 | D=+9.2`.

Validated:
- Friday used only as prior state;
- Monday rebuilt from Monday evidence;
- same state reused across Radar → Stock → Daily/Top3;
- Monday transactions reconciled;
- 5 successful + 2 P0 data-gap semantics preserved;
- S0-S4 / 2+1 / Final3 / N/A rules preserved.

## First RC1 validation

Fixture: `02_projects/a-shares/11_evals/rc1-2026-09-01-independent-shadow.yaml`.

Required order:

```text
freeze 09/01 raw inputs
→ RC1 independent read-only run
→ freeze RC1 result
→ run/read V3.4 production control
→ compare hard invariants + explainable differences
```

## Promotion lifecycle

```text
V4.0-DRAFT / TEST
→ Friday PASS
→ Monday PASS
→ explicit promotion
→ V4.0-RC1 / RC
→ independent shadow PASS
→ controlled persistence/idempotency/read-back PASS
→ rollback PASS
→ installed runtime validation when available
→ explicit V4.0 ACTIVE promotion
```

V3.4 is never deleted during RC. It remains the production and rollback baseline.

## ACTIVE promotion criteria

1. independent raw-input shadow execution passes;
2. no critical ACTIVE-rule loss;
3. exact same-day Market State reuse across workflows;
4. correct P0/transaction reconciliation;
5. stable data-gap/source-conflict boundaries;
6. production-equivalent report detail preserved;
7. controlled persistence is idempotent and read-back verified;
8. rollback is verified;
9. installed runtime is validated when available;
10. ACTIVE promotion is explicitly approved and recorded.
