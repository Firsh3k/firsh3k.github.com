# A股看盘经验池｜Market Observation Experience Pool

Version: 1.1  
Status: ACTIVE-OBSERVATION  
Authority: experience / observation only; **not a standalone trading gate**  
Maturity policy: `../../../00_system/experience-maturity-policy.md`

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

## Maturity dashboard

Maturity uses `L0 → L5` from the PCOS Experience Maturity Policy. Maturity measures accumulated evidence; it does **not** automatically grant Strategy authority.

| Rule | Current maturity | Case count | Strategy status | Next gate |
|---|---|---:|---|---|
| E001 资金僵局 / 脆弱平衡 | L1 Retained Experience | 0 | NOT_PROPOSED | accumulate ~5 comparable cases → L2 review |
| E002 波动率压缩 | L1 Retained Experience | 0 | NOT_PROPOSED | accumulate ~5 comparable cases → L2 review |
| E003 量价非对称 | L1 Retained Experience | 0 | NOT_PROPOSED | accumulate ~5 comparable cases → L2 review |
| E004 仓位 × 情绪 | L1 Retained Experience | 0 | NOT_PROPOSED | improve reproducible evidence + accumulate cases |

Current maturity date: 2026-08-30.

---

## E001｜资金僵局 / 脆弱平衡经验

Status: ACTIVE-OBSERVATION  
Type: A-share market experience heuristic  
Maturity: **L1 Retained Experience**  
Strategy promotion: NOT_PROPOSED

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

### Maturity gate

- L2: repeated recognizable real cases, preferably ~5 comparable cases with T+1/T+3/T+5 outcomes;
- L3: preferably ~20+ comparable cases, false positives retained, incremental value assessed against existing Market State variables;
- L4: only after explicit user approval to open Strategy-candidate work and a reproducible formal rule is proposed.

---

## E002｜波动率压缩 → 变盘观察

Status: ACTIVE-OBSERVATION  
Type: framework / regime observation  
Maturity: **L1 Retained Experience**  
Strategy promotion: NOT_PROPOSED

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

### Maturity gate

- L2: repeated trigger cases with predefined outcomes;
- L3: evidence of range-expansion value beyond existing volatility/technical/turnover information;
- L4: only after Strategy-candidate approval and formal TEST design.

---

## E003｜缩量反弹 / 放量杀跌的量价非对称

Status: ACTIVE-OBSERVATION  
Type: market participation heuristic  
Maturity: **L1 Retained Experience**  
Strategy promotion: NOT_PROPOSED

Repeated **low-volume rebounds + higher-volume selloffs** suggest that active demand may be weaker than downside urgency. The opposite pattern can support a healthier accumulation interpretation.

Evaluation should compare a sequence of sessions, preferably 5–10 trading days, rather than one isolated day.

Useful observations:
- average turnover on up days vs down days;
- rebound turnover vs prior selloff turnover;
- breadth improvement relative to turnover;
- whether leading sectors expand or contract with volume.

Boundary: this is supporting evidence, not a sell signal by itself.

### Maturity gate

- L2: recognizable repeated 5–10-day patterns with outcomes logged;
- L3: false-positive profile and incremental value understood;
- L4: only after Strategy-candidate approval and formal TEST design.

---

## E004｜仓位 × 情绪的反向观察

Status: OBSERVE  
Type: hypothesis  
Maturity: **L1 Retained Experience**  
Strategy promotion: NOT_PROPOSED

High positioning + extreme optimism may imply limited incremental buying capacity. Low positioning + extreme pessimism may imply more future upside capacity.

Reader polls and community surveys are sample-biased. Use them only as an auxiliary sentiment sensor, never as a formal threshold or market gate.

### Maturity gate

E004 requires stronger source comparability than the other items. It should not advance merely from repeated reader-poll anecdotes; the positioning/sentiment input must first become sufficiently reproducible across cases.

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

## Maturity and promotion review

PCOS follows a **system-proposes, user-approves** model:

- PCOS may automatically accumulate cases and update evidence summaries;
- PCOS may move an item through L1 → L2 → L3 when objective maturity criteria are met and no execution authority changes;
- when an item becomes mature enough for L4, PCOS should surface a `STRATEGY_PROMOTION_REVIEW` rather than silently modifying Strategy;
- L3 → L4 and L4 → L5 material promotion require explicit user approval;
- failed evidence can downgrade maturity or archive the item.

## Review cadence

Use both:
- **event-driven review** when a maturity/sample/evidence threshold is crossed;
- **periodic maturity audit** to catch stale, contradictory, or promotion-ready items.

The user should not need to remember which Experience item is approaching promotion.

## Value ranking

Maturity alone does not determine how valuable an Experience item is. Also rank:
- decision impact;
- incremental information value;
- reproducibility;
- applicability frequency;
- false-positive cost;
- compatibility with existing Strategy;
- complexity added to execution.

## Provenance

Initial source: external article 《A股变盘前夜，暴风雨前的宁静》, ingested through PCOS Context Inbox on 2026-08-30 and explicitly approved by the user for experience-pool promotion.
