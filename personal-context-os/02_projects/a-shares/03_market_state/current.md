# Current Market State

State date: 2026-08-28 15:00 Asia/Shanghai  
Status: CLOSE_CONFIRMED  
Source: 《A股复盘总控台》 / `2026-08-28` frozen date sheet  
Source strategy: V3.4 production baseline  
Purpose: seed state for V4.0-DRAFT regression and 2026-08-31 state transition.

## Canonical gate

- Market gate: **🟠 高波动轮动**
- Nature: **R2 修复失速**
- Secondary description: index divergence; hard-tech intraday strength faded; agriculture/fertilizer took over; no persistent S-level main line confirmed.
- New-risk default permission: **0%**
- Conditional next-session first validation position: only after real market upgrade + full stock evidence + four gates + actual trigger; production Friday plan allowed 0.25%–0.5% and daily total new risk ≤1% under those conditions.
- Formal empty-position executable candidates: **0**

## V3.4 anchor state

- Risk Anchor `R = -7.5`
  - 上证指数 `+27.5`
  - 沪深300 `-40.0`
  - 上证50 `-10.0`
- Attack Anchor `A = +13.3`
  - 中证500 `+15.0`
  - 中证1000 `+2.5`
  - 国证2000 `+22.5`
- Spread `D = A - R = +20.8`

Interpretation: small/mid attack side was relatively stronger because the Risk Anchor weakened faster; A itself fell below the +15 structural-repair line. Positive D is **not** an entry signal.

## Core index state

| Index | Close / Return | Technical Score | DD20 |
|---|---|---:|---:|
| 上证指数 | 3952.18 / -0.11% | +27.5 | 1.05% |
| 深证成指 | 13953.07 / -0.68% | -30.0 | 5.30% |
| 创业板指 | 3424.40 / -1.41% | -32.5 | 8.62% |
| 科创50 | 1662.15 / -1.85% | -10.0 | 7.60% |
| 上证50 | 2923.33 / -0.24% | -10.0 | 1.92% |
| 沪深300 | 4609.18 / -0.46% | -40.0 | 2.84% |
| 中证500 | 7895.45 / +0.64% | +15.0 | 3.85% |
| 中证1000 | 7705.03 / -0.36% | +2.5 | 3.63% |
| 国证2000 | 10036.44 / -0.36% | +22.5 | 3.46% |
| 北证50 | 1063.80 / -1.04% | -72.5 | 6.85% |

- 中证2000: close 3149.18 / -0.10%; current-day screenshot valid, but public same-code historical sequence used in the report returned empty, therefore formal score/coverage/DD20 = N/A.
- 同花顺全A 883957: 1884.11 / +0.25%.
- A股平均股价 830000: 28.35 / -1.06%.
- 微盘股 883418: 2145.39 / +0.95%.

## Data coverage / N/A discipline

Qualified Friday report deliberately left these as N/A rather than inventing them:
- formal industry weekly/monthly lifecycle matrix;
- B250 full-market 250-day breadth scan;
- transparent same-day timing score;
- proprietary-series historical six-component score where a valid series was unavailable.

A shorter 63-day high/low statistic was observed but not used as a substitute for B250.

## Market experience

- Turnover: approximately 2.10 trillion RMB public Shanghai/Shenzhen figure; high but slightly lower than prior session.
- Breadth: roughly 3009 up / 2386 down / 148 flat in one public snapshot; other suppliers differed and were not silently averaged.
- Core divergence: Shanghai nearly flat and full-A positive, while average stock price, ChiNext and STAR50 weakened; account-like high-beta experience was worse than the headline Shanghai index.
- Style: CSI500 and microcap locally stronger, but CSI1000/CN2000 negative and Beijing50 weak → **local small-stock activity, not a full-level small-cap trend**.

## Main-line / theme state

Recent migration:
- 2026-08-26: nonferrous + large finance
- 2026-08-27: semiconductor / CPO / PCB
- 2026-08-28: agriculture / chemicals + local AI applications

Two migrations in two sessions → persistence not established; **no S-level main line**.

Friday classifications:
- Agriculture / seeds / supply cooperatives: `A- high heat`, near acceleration tail; next session only first real divergence/support, do not chase consensus acceleration.
- Chemicals / fertilizer / PTFE: `B+ / A- observation`, requires independent persistence confirmation.
- AI applications / network security: `B+ rotation`, local survivors only.
- Hard tech / CPO / PCB: downgraded from `A-` to `B observation` after T+1 breadth failure.

## Explicit forbidden actions

- Do not chase high-open acceleration.
- Do not treat `D > 0` as a buy signal.
- Do not force a trade while market/stock four gates are incomplete.
- Do not substitute short-window breadth for B250.
- Do not substitute look-alike codes for proprietary index series.
- Do not mix supplier breadth/limit-up definitions into a fake precise number.
- Do not promote market candidates into trade candidates without full stock evidence.

## 2026-08-31 transition plan

### Upgrade to 🟡 candidate
- 同花顺全A ≥ 1891.71 with expansion;
- A股平均股价 ≥ 28.60;
- 上证 closes above MA250 ≈3983.6 and attacks 4000;
- turnover ≥2.20 trillion;
- red/up breadth ≥60%;
- at least two of agriculture / chemicals / AI-compute return after real divergence;
- recomputed `R >= 0` and `A >= 15`.

### Maintain 🟠
- 全A holds 1862.37 / 1859.76;
- average price holds 28.34 / 28.09;
- Shanghai holds 3941.5 / 3916.1;
- CSI500 holds 7876.7;
- CN2000 holds 9908.6;
- turnover ≥1.90 trillion;
- tech does not continue broadening selloff and agriculture does not broadly retreat.

### Downgrade to 🔴
Any two of the following concur:
- 全A <1851.83;
- average price <27.90;
- Shanghai <3916.1;
- CSI500 <7876.7;
- CSI1000 <7619.9;
- CN2000 <9908.6;

Or severe breadth deterioration such as red/up breadth <40%, meaningful limit-down expansion, or agriculture and AI/compute both losing support.

These are conditional transition gates, not predictions.
