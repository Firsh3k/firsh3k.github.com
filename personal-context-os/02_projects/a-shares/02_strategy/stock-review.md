# Stock Review Strategy｜V4 Context Module

Version: 4.0-draft.1  
Status: TEST  
Baseline: `PROMPT_STOCK_REVIEW 2026.08.25-v3`, factored into reusable Context modules.

## Mission

Convert a fully readable stock evidence package into a structured trading-state object. The Stock Review must consume the same-day canonical Market State produced by Market Radar; it must not independently invent or recompute a different market environment.

## Required inputs

- same-day canonical Market State;
- stock name/code/date/status;
- current-day daily/weekly/monthly chart evidence when required;
- current holding state if P0;
- relevant sector context and mapping purity;
- current valid benchmark/index identity when alpha is used;
- company event/earnings verification;
- relevant recent material stock state, not the entire history by default.

Missing current-day chart evidence must be labeled as a data gap and cannot be replaced by stale charts or generic public-price data to grant trading qualification.

## 1. Base card

Record:
- stock name/code;
- review date and close-confirmed status;
- chart completeness;
- market gate and R/A/D inherited from same-day Market State;
- sector/main-line mapping and stock role;
- current stage / fish stage;
- L1/R1/X model;
- A/B/C/D rating;
- P0 status if applicable;
- next-day role and main-attack qualification.

## 2. Company event / earnings verification

Before final decision, check for material events from the last successful review to now; use a 30-day background window and extend to ~180 days for persistent M&A/control-change/buyback/major-contract matters when needed.

Discovery sources may include structured Eastmoney/Tonghuashun data, but material conclusion-changing events should be verified against primary sources where available (exchange/CNINFO/company official disclosure).

Event categories include:
- earnings forecast / express / formal report / correction;
- revenue, attributable profit, ex-item profit, margin, operating cash flow;
- M&A/restructuring/control change/asset sale;
- buyback/holding increase/decrease/equity incentive;
- major contract/order/tender/cooperation/expansion/production;
- refinancing/dividend/convertible bonds;
- litigation/penalty/inquiry/risk warning/suspension;
- controller/management material change.

Event status must distinguish proposal/approval/regulatory review/implementation/completion/termination. Do not convert `拟` into `已完成` or planned buyback ceiling into actual buyback amount.

Search status must be exactly one of:
- confirmed material event;
- confirmed no new material event (only after real required checks);
- search failed;
- pending verification.

`search failed` / `not returned` ≠ `confirmed none`.

## 3. Multi-timeframe technical structure

Analyze at minimum:
- daily MA5/10/20/30/60 and price relationship;
- weekly MA5/10/20 structure;
- monthly structure;
- trend classification: main-uptrend / trend-follow / high-level divergence / repair / rebound / imbalance / trend break.

## 4. Volume / price / chips / liquidity

When readable, record:
- OHLC, daily return, volume/turnover, turnover rate, volume ratio, range;
- relative 5/20-day volume state;
- price progression efficiency and closing location;
- pullback quality / support;
- T+1 support status;
- average or 20-day liquidity vs planned position size;
- chip readability, shape, main/secondary peak, 70%/90% cost zones, average cost, profit ratio, concentration, price vs peak, migration direction, overhead trapped supply, support/invalidation zones.

Chip distribution is an estimated historical cost model, not proof of a manipulator’s actual cost.

## 5. DD20 and strength identity

`DD20 = (20-day high - current close) / 20-day high`

Guide:
- <20%: trend consolidation;
- 20–30%: deep-pullback watch;
- 30–40%: deep rebound candidate;
- >40%: prioritize trend-break hypothesis.

Large drawdown gives observation rights only. It does not grant L1 execution.

## 6. MA5 / MA60 / R0-R4 / four gates

Use `trade-models.md` exactly for:
- MA5 D0/D1/D2/D3/R;
- L1/R1/X lock;
- R0-R4 rebound/trend status;
- four gates;
- A/B/C/D rating;
- permitted buy pathways.

MA5/MA60 golden cross is a warning/initial-turn clue only; it never bypasses same-day market permission, sector mapping, four gates, volume, invalidation or risk/reward.

## 7. Sector/index relative strength

When current benchmark identity is verified, compute:
`alpha = stock daily % change - benchmark daily % change`.

Internal labels inherited from production:
- 🚀 `>= +3ppt`
- ↑ `+0.5 to <+3ppt`
- ≈ `-0.5 to <+0.5ppt`
- ↓ `-2 to <-0.5ppt`
- ⚠️ `< -2ppt`

Alpha is relative-strength evidence only. `X` remains X even with strong alpha.

Compare stock with its sector and core peers:
- stronger than sector;
- synchronous;
- weaker than sector;
- sector strong / stock unresponsive;
- sector weak / stock independently strong.

## 8. Scores

Attack score (1–10) may summarize:
- main-line strength, sector breadth, role, initiative, volume-price, catalyst quality/fundamental realization, breakout proximity.

Execution score (1–10) may summarize:
- actual trigger, support/invalidation, stop distance, risk/reward, crowding, DD20, T+1 risk, catalyst pricing, observation-vs-execution status.

Neither score overrides hard gates.

## 9. Detailed execution plan

For every fully reviewed stock, output a detailed table:
`Path/Level | Price/Range | Trigger | Confirmation | Action | Position change | Invalidation/Cancel | T+1 | Rationale`

Buy paths: L1 / breakout / first effective pullback / add-to-position.

Sell paths: S0 / S1 / S2 / S3 / S4 via `exit-and-sell-review.md`.

For P0 also include high-open / flat-or-range / low-open-or-break scenarios.

If data are reliable, estimate risk from planned entry to invalidation and upside to first/core resistance. Do not create pseudo-precision from unreadable charts.

## 10. Structured output object

The downstream Daily Review should consume a compact object containing at least:
- stock/date/status/data completeness;
- market state reference ID/version;
- main-line/sector/role/mapping purity;
- L1/R1/X;
- R0-R4;
- MA5 state;
- A/B/C/D;
- four-gate results;
- attack/execution scores;
- current P0/S state;
- best/secondary buy path or none;
- no-chase zone;
- first/core resistance;
- first support/invalidation;
- first/second reduction and hard exit;
- T+1 requirement;
- explicit forbidden action;
- evidence status and unresolved gaps;
- stock state delta.

This compact structured object is the default input to Top3. Top3 should not reread the stock’s full historical corpus unless a conflict requires it.
