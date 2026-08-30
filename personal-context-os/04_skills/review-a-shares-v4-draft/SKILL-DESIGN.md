# review-a-shares V4.0-DRAFT

Status: TEST only. Do not replace the current production skill until promotion criteria are met.

## Mission

Execute A-share market, sector, stock, portfolio and ranking reviews by loading the minimum required project context, validating current data, applying only ACTIVE strategy rules, and producing auditable outputs plus state deltas.

The skill is an **orchestrator**, not a long-term knowledge store.

## Task modes

- `MARKET_RADAR`
- `STOCK_REVIEW`
- `TOTAL_REVIEW`
- `TOP3`
- `SELL_CHECK`

## Execution protocol

### 1. Resolve task
Map the user's request to exactly one primary task mode, plus only necessary dependent modes.

### 2. Load project manifest
Read `02_projects/a-shares/project-manifest.yaml`.

### 3. Route minimum context
Load only the context classes declared for the task. Do not automatically load full stock history, all sectors, or unrelated reports.

### 4. Resolve strategy version
During the migration test period:
- production baseline strategy remains `V3.4 ACTIVE`;
- execution architecture is `V4.0-DRAFT TEST`;
- V4 must not silently introduce strategy rules absent from the active strategy context.

### 5. Validate data completeness
Classify required inputs as:
- AVAILABLE,
- MISSING-BUT-RETRIEVABLE,
- MISSING-NOT-RETRIEVABLE,
- CONFLICTING.

Use approved external sources to fill retrievable gaps. Record unresolved gaps.

### 6. Classify evidence
Tag material conclusions conceptually as:
- E1 raw/structured fact,
- E2 primary source,
- E3 verified secondary source,
- E4 strategy inference,
- E5 model judgment.

### 7. Execute strategy
Apply only current ACTIVE strategy rules. Historical or deprecated rules may be referenced for comparison but cannot drive the current decision.

### 8. Generate report
Use the task-specific output schema. Preserve existing production report detail during migration unless an explicitly tested schema change is part of V4.

### 9. Produce state delta
Return only meaningful changes between the prior current state and today's result, such as:
- market regime change,
- sector strength change,
- stock phase/rating change,
- trigger activated/invalidated,
- portfolio risk change.

### 10. Persistence gate
Do not treat analysis as permission to write externally. Google Sheets/Drive synchronization remains explicit-user-instruction-only unless the project policy is deliberately changed later.

### 11. Audit footer
Every run should expose:
- analysis date/data cutoff,
- strategy version,
- skill version,
- data completeness,
- unresolved conflicts,
- important evidence sources,
- confidence level,
- generated state deltas.

## Migration test plan

### Test A — Friday historical/current close
Run V4.0-DRAFT using the chosen Friday close dataset and compare against the existing production result.

Evaluate:
- data completeness,
- market regime,
- mainline/sector conclusions,
- stock classifications,
- A/B/C/D results,
- Top3 ordering where applicable,
- missing-data recovery,
- detail level,
- contradictions,
- context loaded vs unnecessary context avoided.

### Test B — Following Monday trading day
Run V4.0-DRAFT on fresh Monday data. Verify the architecture handles state transition correctly rather than merely reproducing the Friday case.

## Promotion criteria

Promote V4.0-DRAFT only when both tests show:
1. no critical regression against the production system;
2. no loss of required report detail;
3. correct strategy-version use;
4. reliable missing-data supplementation;
5. stable market/stock classification;
6. correct persistence behavior;
7. improved traceability and context isolation.

If promoted:
- archive the previous skill version;
- mark V4.0 as ACTIVE;
- record rollback target and promotion evidence in the changelog.
