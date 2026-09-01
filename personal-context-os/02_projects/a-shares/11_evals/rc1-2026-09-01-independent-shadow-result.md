# V4.0-RC1｜2026-09-01 Independent Shadow — Final Control Comparison

Date: 2026-09-01
Candidate: `review-a-shares 4.0-RC1`
Control: `V3.4 ACTIVE`
Mode: `READ_ONLY_INDEPENDENT_SHADOW`
Isolation: **PASS** — RC1 result was frozen before the 2026-09-01 V3.4 same-day derived conclusions were read.

## Final verdict

**FAIL — RC1_BLOCKED_INPUT_CONTRACT**

This is **not** a decision-semantic strategy regression. The decision semantics matched the production control unusually well. The failure is that RC1 could not independently reconstruct every required canonical index score from the isolated input/runtime contract, so it could not independently produce the qualified Attack Anchor `A=+16.7` that V3.4 produced from the same trading day.

Sub-results:
- input isolation: PASS
- same-day canonical state reuse: PASS
- decision-semantic regression: PASS
- transaction reconciliation: PASS
- P0 quantity reconciliation: PASS_WITH_SOURCE_CONFIDENCE_WARNING
- data-gap / N/A discipline: PASS
- four-gate / S0-S4 / 2+1 rule preservation: PASS
- Final3 semantic regression: PASS
- independent raw-input score reconstruction: **FAIL_INPUT_CONTRACT**
- overall RC1 shadow: **FAIL / BLOCKED**

## Frozen RC1 result

State ID: `MS-20260901-RC1-SHADOW-FROZEN`

- formal Market Gate: `PENDING`
- operational lean: `🟠 High-Volatility Rotation / breadth-positive but index-divergent`
- R: `N/A`
- A: `N/A`
- D: `N/A`
- default new risk: `0%`
- formal new executable candidates: `0`
- Final3: `长江通信 / 佳禾智能 / 乐心医疗`

## V3.4 production control

State ID: `MS-20260901-CLOSE-V3.4`

- Market Gate: `🟠数据降级，实际执行按🔴防守`
- R: `N/A`
- A: `+16.7`
- D: `N/A`
- default new risk: `0%`
- formal new executable candidates: `0`
- Final3: `长江通信 / 佳禾智能 / 乐心医疗`

V3.4 computed the qualified Attack Anchor as:
`A = mean(中证500 +5.0, 中证1000 +22.5, 国证2000 +22.5) = +16.7`.

V3.4 also excluded the stale 2026-08-31 Shanghai Index screenshot from the formal Risk Anchor, so `R=N/A` and `D=N/A`; its public 330-day OHLCV-derived Shanghai reference score `+42.5` was explicitly not allowed into formal R/D.

## Hard-match comparison

| Hard field | RC1 frozen | V3.4 control | Result |
| --- | --- | --- | --- |
| trading date / close status | 2026-09-01 close-confirmed | 2026-09-01 close-confirmed | PASS |
| Shanghai stale-image boundary | excluded 08/31 screenshot | excluded 08/31 screenshot | PASS |
| formula semantics | V3.4 six-component contract preserved | SMA20/50/250, MACD, KDJ, BOLL, weekly/monthly, weights 25/15/10/10/25/15 | PASS_SEMANTIC |
| R | N/A | N/A | PASS |
| A | **N/A** | **+16.7** | **HARD MISMATCH / INPUT-CONTRACT FAIL** |
| D | N/A | N/A | PASS |
| default new risk | 0% | 0% | PASS |
| market gate decision semantics | pending / operational orange rotation, no attack | orange data-degraded, execute red-defense | PASS_SEMANTIC; label differs |
| new executable candidates | 0 | 0 | PASS |
| Final3 | 长江 / 佳禾 / 乐心 | 长江 / 佳禾 / 乐心 | PASS EXACT |
| Final3 is buy list? | no | no | PASS |
| 佳禾 transaction | buy 100 @ 11.900 | buy 100 @ 11.900 | PASS EXACT |
| 长江 transactions | buy 1000 @ 49.304; sell 100 @ 51.250 | same | PASS EXACT |
| 长江 end quantity | derived 1000, pending broker readback | P0 1000 @ 49.304 | PASS_QUANTITY / confidence gap |
| 佳禾 end quantity | derived 100, pending broker readback | P0 100 @ 11.900 | PASS_QUANTITY / confidence gap |
| 博济医药 | carry-forward P0 unresolved; no 09/01 chart package | P0 100 @ 15.50, account status pending; technical state N/A | PASS_BOUNDARY |
| 中巨芯-U | carry-forward P0 unresolved; no 09/01 chart package | P0 200 @ 29.78, account status pending; technical state N/A | PASS_BOUNDARY |
| industry lifecycle | N/A | N/A | PASS |
| B250 | N/A | N/A | PASS |
| transparent timing score | N/A | N/A | PASS |
| missing data used to promote trade? | no | no | PASS |
| S0-S4 / 2+1 / four gates | preserved | preserved | PASS |
| RC1 production writes | none | n/a | PASS |

## Decision-semantic regression

**PASS.** Despite the numeric A reconstruction failure, the two systems independently converged on the same actionable conclusion:

- no broad attack permission;
- default new risk = 0%;
- agriculture / consumer as leading rotation observations;
- AI-video remains a secondary continuation observation;
- hardware / PCB / CPO / storage weakness should not be bottom-fished on the first adjustment bar;
- Final3 exactly `长江通信 → 佳禾智能 → 乐心医疗`;
- Final3 is an attention/risk queue, not a buy list;
- formal new executable candidates = 0;
- 长江通信 and 佳禾智能 are P0 risk/validation priorities;
- 博济医药 and 中巨芯-U remain data/account verification gaps rather than silently completed stock reviews.

This strongly suggests the Context extraction and strategy-rule migration did **not** lose the core V3.4 decision philosophy.

## Transaction and P0 reconciliation

Production write-back confirms:

- 长江通信: buy `1000 @ 49.304`, sell overnight `100 @ 51.250`, end P0 `1000 @ 49.304`; the production review also treats the net +900 as an execution deviation from prior `只守不加`.
- 佳禾智能: buy `100 @ 11.900`, end P0 `100 @ 11.900`; production marks it as new P0 T+1 validation and `只守不加`.
- long-river sell log has exactly one 2026-09-01 record: `SELL-20260901-001`.
- 博济医药 `100 @ 15.50` and 中巨芯-U `200 @ 29.78` remain account-readback pending with same-day technical/S-level fields N/A.

RC1 quantity inference was therefore directionally and numerically correct, but RC1 still lacks a first-class broker/account readback contract; this remains a source-confidence weakness rather than a quantity mismatch.

## Data-gap regression

**PASS.** Both systems independently preserved the same important N/A boundaries:

- stale 08/31 Shanghai screenshot cannot qualify as 09/01 primary evidence;
- formal Risk Anchor R cannot be calculated with only 2/3 qualified members;
- D cannot be calculated when R is N/A;
- CSI2000 historical score remains N/A when the same-code history cannot be reproduced;
- industry weekly/monthly lifecycle = N/A;
- B250 = N/A;
- transparent timing score = N/A;
- 博济医药 / 中巨芯-U technical reviews remain N/A due missing 09/01 chart packages.

This is a meaningful regression PASS because V3.4 itself followed the same strict boundary rather than silently substituting the public Shanghai close into the formal Risk Anchor.

## Explainable differences

### 1. Formal Market Gate label
RC1 froze `PENDING` with an operational orange-rotation lean; V3.4 produced `🟠数据降级，执行按🔴防守`.

This is not a material action difference: both set default new risk to 0%, forbid active attack, and require the missing Shanghai anchor to be repaired before market permission can improve. Treat as **label/representation difference**, not strategy drift.

### 2. Stock-package discovery universe
RC1 raw discovery found a valid 09/01 银之杰 image package stored under a misnamed `20260831` folder. V3.4's formal 09/01 daily universe contained 5 complete reviewed stocks + 2 P0 data gaps and did not include 银之杰.

No downstream action changed and Final3 matched exactly, so this is non-material for 09/01. However it exposes a routing ambiguity: RC runtime needs an explicit **canonical daily stock universe contract** so that 'a valid current image package exists' does not automatically imply 'this stock belongs in today's formal review universe'.

### 3. Source-confidence wording for holdings
RC1 retained `DERIVED_PENDING_BROKER_CONFIRMATION` for 长江/佳禾; V3.4 operationally wrote them as P0 based on prior state + same-day confirmed transactions, while separately keeping 博济/中巨芯 account verification pending.

Quantities match; this is a provenance/readback-contract gap, not a holdings contradiction.

## Rule-regression findings

No critical V3.4 trading rule was found lost or bypassed.

Preserved:
- market gate before stock execution;
- four gates;
- L1/R1/X semantics;
- R0-R4;
- P0 priority;
- S0-S4;
- 2+1 anti-mis-sell rule;
- relative-strength protection;
- MA5/MA60 does not independently authorize buying;
- missing evidence stays N/A;
- Final3 is not a mandatory buy list;
- zero trades is a valid outcome.

Therefore the RC1 failure is classified as **runtime/input-computation independence**, not **strategy-rule regression**.

## Root cause

V3.4 production has an operational pipeline that obtains reproducible 330-day OHLCV and deterministically computes the six technical components for the qualified indices.

The RC1 isolated runtime did not yet have that capability exposed as a self-contained input/computation contract. As a result:
- it correctly rejected the stale Shanghai screenshot;
- it correctly refused to copy V3.4 same-day scores;
- but it also failed to independently derive the valid Attack Anchor scores, leaving A=N/A instead of +16.7.

This is exactly the kind of dependency the independent-shadow test was designed to detect.

## Promotion / next-stage qualification

**Not eligible for ACTIVE promotion.**

**Do not proceed to treat persistence/idempotency as the release gate yet.** First repair and validate independent score reconstruction.

Recommended next sequence:
1. patch RC runtime/input contract so it can independently obtain reproducible OHLCV and compute SMA/MACD/KDJ/BOLL/weekly/monthly six-component scores without reading same-day V3.4 derived outputs;
2. formalize the daily stock-universe routing contract;
3. formalize broker/account P0 readback or an explicit accepted derivation provenance rule;
4. run a fresh independent shadow on the next trading day before reading that day's V3.4 control;
5. if the independent raw-input shadow passes, proceed to controlled persistence/idempotency/read-back and rollback validation;
6. retain V3.4 ACTIVE throughout.

## Final classification

`RC1_BLOCKED_INPUT_CONTRACT`

- strategy semantics: **PASS**
- state reuse: **PASS**
- data discipline: **PASS**
- transactions / P0 quantities: **PASS with provenance warning**
- hard score reconstruction: **FAIL**
- overall shadow: **FAIL**
- V4.0-RC1 lifecycle: **remain RC, blocked from ACTIVE**
- V3.4 lifecycle: **remain ACTIVE / rollback baseline**
