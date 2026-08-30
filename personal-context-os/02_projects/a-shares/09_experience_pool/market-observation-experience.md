# A股看盘经验池｜Market Observation Experience Pool

Version: 1.0  
Status: ACTIVE-OBSERVATION  
Authority: experience / observation only; **not a standalone trading gate**

## Purpose

Store durable A-share market-watching heuristics that are useful enough to surface during Market Radar, but are not yet strong enough to override the canonical Market State Machine or directly authorize buy/sell actions.

Experience rules may:
- raise attention;
- change what evidence we inspect next;
- trigger a scenario/watch label;
- create a prospective validation case.

Experience rules may not by themselves:
- change the Market Gate color;
- create new-risk permission;
- upgrade a stock to TRADE_CANDIDATE;
- override P0 sell rules or stock-level trigger/invalidation logic.

---

## E001｜资金僵局 / 脆弱平衡经验

Status: ACTIVE-OBSERVATION  
Type: A-share market experience heuristic

> 场内的钱既不进来，也不出去，大家就这么僵着。这种平衡本身，恰恰是变盘前最典型的形态。

### PCOS interpretation

When several important funding channels show weak net movement or mutually offsetting flows, treat the market as potentially entering a **fragile equilibrium / direction-selection watch**.

Useful evidence can include, when reproducible and available:
- ETF net subscriptions/redemptions;
- margin financing change;
- major-holder net reduction / supply pressure;
- large-order / institutional-flow proxies;
- IPO / placement financing pressure;
- cross-border flow indicators where the methodology remains comparable.

### Boundary

This experience predicts **possible range/direction expansion**, not its direction. Do not translate `资金平衡` into `看多` or `看空` without the existing technical, breadth, volume, weekly/monthly and sector evidence.

---

## E002｜波动率压缩 → 变盘观察

Status: ACTIVE-OBSERVATION  
Type: framework / regime observation

When implied volatility and/or realized volatility compress toward a recent low percentile, label the market `VOLATILITY_COMPRESSION_WATCH`.

Interpretation:
- compression means the market is pricing less near-term movement/disagreement;
- persistent compression can precede range expansion;
- direction remains unresolved until other Market State evidence confirms it.

Preferred evidence when available:
- index-option implied volatility;
- realized volatility / ATR compression;
- index range compression;
- turnover contraction.

Do not use `low IV = buy` or `low IV = sell`.

---

## E003｜缩量反弹 / 放量杀跌的量价非对称

Status: ACTIVE-OBSERVATION  
Type: market participation heuristic

Repeated **low-volume rebounds + higher-volume selloffs** suggest that active demand may be weaker than downside urgency. The opposite pattern can support a healthier accumulation interpretation.

Evaluation should compare a sequence of sessions, preferably 5–10 trading days, rather than one isolated day.

Useful observations:
- average turnover on up days vs down days;
- rebound turnover vs prior selloff turnover;
- breadth improvement relative to turnover;
- whether leading sectors expand or contract with volume.

Boundary: this is supporting evidence, not a sell signal by itself.

---

## E004｜仓位 × 情绪的反向观察

Status: OBSERVE  
Type: hypothesis

High positioning + extreme optimism may imply limited incremental buying capacity. Low positioning + extreme pessimism may imply more future upside capacity.

Reader polls and community surveys are sample-biased. Use them only as an auxiliary sentiment sensor, never as a formal threshold or market gate.

---

## Lightweight prospective validation

These experience rules are validated prospectively rather than requiring an expensive historical backtest first.

When Market Radar detects one of E001–E004:

1. log D0 date and exact evidence;
2. record the canonical Market State at D0;
3. review T+1, T+3 and T+5 outcomes;
4. separate two questions:
   - did meaningful range expansion occur?
   - what direction did it take?
5. retain false positives and ambiguous cases;
6. do not promote a heuristic into a formal gate solely because of a few successful anecdotes.

### Upgrade condition

After a useful sample accumulates (preferably 20+ reasonably comparable cases), PCOS may review:
- hit rate for subsequent range expansion;
- false-positive rate;
- whether the rule adds information beyond existing Market State variables;
- whether it improves decisions without increasing overtrading.

Only then consider formal quantification or integration into the Market State Machine.

## Provenance

Initial source: external article 《A股变盘前夜，暴风雨前的宁静》, ingested through PCOS Context Inbox on 2026-08-30 and explicitly approved by the user for experience-pool promotion.
