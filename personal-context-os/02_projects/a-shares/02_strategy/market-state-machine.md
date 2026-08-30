# Market State Machine｜V4 Context Module

Version: 4.0-draft.1  
Status: TEST  
Semantic baseline: V3.4 `PROMPT_SYSTEM_MASTER_V3` + `SHARED_TRADING_RULES` rules 60–72.

Purpose: produce one auditable same-day Market State object that all downstream workflows reuse. This module measures market environment; it does not create stock buy/sell signals by itself.

## 1. Mandatory execution order

```text
Identity / date / formula audit
→ index technical scoring
→ Risk Anchor R / Attack Anchor A / spread D
→ weekly & monthly confirmation
→ industry lifecycle
→ breadth / full-market experience
→ technical × timing cross-validation
→ volume / sentiment / R-stage context
→ final market gate
```

No downstream theme, stock, position or Top3 decision may bypass this order.

## 2. Identity, date and formula hard gate

Before scoring an index, verify:
- name and code;
- trading date;
- daily / weekly / monthly period;
- indicator parameters and formula;
- screenshot/readability/source;
- no stale or same-name/different-code substitution.

If any material conflict remains, exclude that object from score/anchor averages and mark it pending. Do not hide a bad input behind a precise score.

Core groups:
- Core market: 上证指数、深证成指、创业板指、科创50.
- Risk Anchor: 上证指数、沪深300、上证50.
- Attack Anchor: 中证500、中证1000、国证2000.
- Speculation extension: 中证2000、微盘股、北证50.
- Experience checks: 同花顺全A 883957、A股平均股价 830000.

The extension group never substitutes for the Attack Anchor.

## 3. Auditable technical score

Six components and weights:

| Component | Weight |
|---|---:|
| Daily trend / MA20, MA50, MA250 position & slope | 25 |
| Daily MACD / KDJ momentum | 15 |
| BOLL position / top-bottom fractal | 10 |
| Volume-price position / price progression efficiency | 10 |
| Weekly MA10/20 + weekly MACD | 25 |
| Monthly close vs MA6/12 and direction | 15 |

Each component first receives one of `-1, -0.5, 0, +0.5, +1`, then is multiplied by its weight.

The currently validated voting boundary inherited from the production implementation is:
- `V >= +0.67` → `+1`
- `+0.20 <= V < +0.67` → `+0.5`
- `-0.20 <= V < +0.20` → `0`
- `-0.67 < V < -0.20` → `-0.5`
- `V <= -0.67` → `-1`

Boundary audit rule: exactly `V = -0.20` is `0`, not `-0.5`.

Total score `S` range: `-100 ... +100`.

Coverage `C = confirmed component weight / 100`.
- If `C < 80%`, `S = N/A` and the index may not be ranked by this score.

Score interpretation:
- `S >= +40`: strong bullish environment
- `+15 <= S < +40`: bullish / constructive
- `-15 < S < +15`: neutral
- `-40 < S <= -15`: bearish / defensive bias
- `S <= -40`: defensive

Score is an environment scale only. No single score, MA, MACD, KDJ, BOLL, fractal or timing signal can independently authorize a trade.

## 4. Risk / Attack anchors

Only calculate when all three members in the anchor are valid for the same trading day and each member has qualified coverage.

`R = mean(上证指数, 沪深300, 上证50)`

`A = mean(中证500, 中证1000, 国证2000)`

`D = A - R`

Interpretation:
- `R >= 15` and `A >= 15`: broad attack candidate, still needs breadth/medium-term confirmation.
- `R >= 15` and `A < 15`: large-cap / weight-led or structurally divided.
- `R < 15` and `A >= 15`: attack-side structural repair.
- `R <= -15` and `A <= -15`: double-weak defensive environment.
- Other combinations: rotation / mixed environment, resolved with breadth and medium-term evidence.

`D > 0` means Attack Anchor is relatively stronger than Risk Anchor. If both anchors are negative, `D > 0` must never be described as an entry signal.

## 5. Weekly / monthly medium-term layer

Always distinguish daily repair from medium-term trend.

Weekly minimum:
- weekly close vs MA10/20;
- slope/direction;
- weekly MACD state.

Monthly minimum:
- monthly close vs MA6/12;
- MA direction;
- MA3 only as acceleration observation, not a trend authority.

Daily strength while weekly/monthly remain bearish = early repair/rebound, not automatic trend upgrade.

## 6. Industry lifecycle

When qualified weekly/monthly industry data exist:
- weekly bullish + monthly bullish → medium-term trend core;
- weekly neutral + monthly bullish → trend pullback watch;
- weekly bullish + monthly neutral/bearish → early repair, wait T+1;
- weekly bearish + monthly bullish → medium-term pullback risk;
- weekly bearish + monthly bearish → avoid.

20-day gain is temperature/crowding evidence only and cannot independently upgrade an industry to S/A main-line status.

If the qualified data do not exist, output `N/A`; do not infer a formal lifecycle from one-day theme heat.

## 7. Breadth layer

Preferred long-horizon breadth:
- sample size `N`
- 250-day highs `NH`
- 250-day lows `NL`
- limit-up / limit-down counts
- 60-day breadth trend
- standardized `NH per 1000`, `NL per 1000`
- `B250 = (NH - NL) / N × 1000`

`NL=0` alone is not bullish. When both NH and NL are extremely sparse, label directional information insufficient and cross-check with up/down breadth, full-A, average stock price and turnover.

A shorter-window high/low statistic must not silently replace B250.

## 8. Technical × timing layer

A timing score may enter the formal state only if its source, formula, date and threshold are transparent.

- technical strong + timing strong → confirmation candidate;
- technical weak + timing weak → defensive confirmation;
- technical weak + timing strong → divergence watch / possible washout; **not a bottom-fishing signal**;
- technical strong + timing weak → high-level dullness / realization risk; wait for support.

If timing methodology is opaque, record it as external observation only or `N/A`.

## 9. Final market gate

After the layers above, combine existing volume-price, sentiment and R0-R4 evidence and output one of:
- 🟢 Strong Trend Attack
- 🟡 Conditional Attack
- 🟠 High-Volatility Rotation
- 🔴 Weak / Defensive
- PENDING when material coverage or formula conflicts prevent a reliable color.

The Market State object must include:
- date / close-confirmed status;
- loaded strategy version;
- data completeness and conflicts;
- component scores and coverage;
- R/A/D with formulas and members;
- extension group;
- weekly/monthly environment;
- industry lifecycle status;
- breadth status;
- technical×timing relationship;
- market gate;
- new-risk permission;
- upgrade / maintain / downgrade conditions;
- explicit forbidden actions;
- evidence/source map.

## 10. Same-day state propagation

Market Radar produces the only canonical Market State for the trading day.

Stock Review, Daily Review, Top3 and Sell Check must consume this same object. They must not:
- silently recompute different R/A/D values;
- use yesterday’s Market State to fill a missing same-day state;
- let market weakness automatically override P0 S0-S4 or the 2+1 sell gate;
- let market strength substitute for a stock trigger.
