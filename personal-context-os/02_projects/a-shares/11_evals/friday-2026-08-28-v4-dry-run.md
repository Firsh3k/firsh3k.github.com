# V4.0-DRAFT Friday Dry-Run Result｜2026-08-28

Run type: **fixture-driven, read-only architecture + decision regression**  
Run date: 2026-08-30  
Fixture date: 2026-08-28 close  
Production writes: **NOT RUN**  
Installed Skill runtime: **NOT RUN** (this GitHub package is still a draft contract, not an installed ChatGPT Skill)

## 1. What this test validates

This test uses the frozen 2026-08-28 production date sheet as a golden fixture and routes it through the newly extracted V4 Context architecture. It validates:
- context routing boundaries;
- preservation of V3.4 decision semantics;
- canonical same-day Market State reuse contract;
- P0 / Final3 / zero-trade semantics;
- data-gap and N/A discipline;
- absence of production writes.

It is **not** an independent raw-screenshot re-computation of every formula from scratch, and it does not prove an installed Skill runtime or external persistence integration.

## 2. Routed Context

### MARKET_RADAR
Loaded:
- `00_manifest/CURRENT.yaml`
- `00_manifest/source-priority.yaml`
- `00_manifest/routing.yaml`
- `01_constitution/investment-constitution.md` market principles
- `02_strategy/market-state-machine.md`
- `02_strategy/market-radar.md`
- prior/current market state needed for delta
- frozen Friday market inputs

Not loaded by default:
- all stock full histories
- all sell cases
- deprecated strategy versions
- unrelated sector corpora

**Routing result: PASS**

### STOCK_REVIEW
Loaded:
- same-day Friday Market State object
- stock-review strategy
- trade-models strategy
- relevant P0 state
- frozen Friday stock-review objects / gaps
- sell module only for actual sell/P0 cases

**Routing result: PASS**

### DAILY_REVIEW / TOP3
Loaded:
- same-day Friday Market State object
- structured Friday stock-review outputs
- P0 holdings
- daily-review/top3 strategy

Did not restart all raw stock histories.

**Routing result: PASS**

## 3. Market decision regression

| Invariant | V3.4 Golden | V4-DRAFT routed result | Status |
|---|---|---|---|
| Market Gate | 🟠 高波动轮动 | 🟠 高波动轮动 | PASS |
| Market nature | R2 修复失速 | R2 修复失速 | PASS |
| R | -7.5 | -7.5 | PASS |
| A | +13.3 | +13.3 | PASS |
| D | +20.8 | +20.8 | PASS |
| Default new risk | 0% | 0% | PASS |
| Empty-position executable candidates | 0 | 0 | PASS |
| Persistent S-level main line | none | none | PASS |

V4 interpretation preserved:
- D>0 = relative advantage, **not** a buy signal;
- Attack Anchor itself fell below +15;
- Friday yellow repair failed its tech T+1 breadth condition and reverted to orange rotation;
- two theme migrations in two sessions are insufficient to declare a durable S-level main line.

## 4. Theme regression

| Theme | V3.4 Golden | V4-DRAFT | Status |
|---|---|---|---|
| Agriculture / seeds / supply cooperatives | A- high heat; first divergence only | same | PASS |
| Chemicals / fertilizer / PTFE | B+/A- observation | same | PASS |
| AI app / network security | B+ local rotation | same | PASS |
| Hard tech / CPO / PCB | downgrade to B observation | same | PASS |

No theme was promoted from market candidate to trade candidate without stock evidence.

## 5. N/A and data-boundary regression

The routed V4 rules correctly preserve Friday's qualified `N/A` states:
- industry weekly/monthly lifecycle = N/A;
- B250 = N/A;
- transparent timing score = N/A;
- CSI2000 historical same-code technical score = N/A in the Friday implementation;
- P0 stocks with missing same-day full chart package remain data gaps.

Must-not violations found: **0**

**Status: PASS**

## 6. Stock-review completeness regression

Golden strict count:
- formal successful reviews = **6**
- P0 data gaps = **2**

V4 routed semantics:
- successful: 飞荣达、拓斯达、长江通信、银之杰、国风新材、有研硅
- data gaps: 博济医药、中巨芯-U

V4 does not rephrase this as “8 stocks successfully reviewed”.

**Status: PASS**

## 7. P0 / actual-trade regression

### 飞荣达
- Friday holding: 1500 @ ~42.460
- transaction decomposition: T500 + net reduce 500
- V4 role: remaining-position protection
- new add permission: no
- process conclusion preserved: small defensive reduction within the then-allowed ≤1/3 scale; exact intra-day motive still pending where not confirmed.

**PASS**

### 拓斯达
- Friday holding: 1600 @ ~35.475
- transaction decomposition: T400 + net add 1100
- V4 role: net-add risk correction
- new add permission: no
- process conclusion preserved: profitable T leg does not excuse the net-add plan conflict; E/R risk deviation remains visible.

**PASS**

### P0 data gaps
- 博济医药 100 @15.50 → data gap, no invented trend/chip/alpha
- 中巨芯-U 200 @29.78 → data gap, no invented trend/chip/alpha

**PASS**

## 8. Final3 regression

Golden roles:
1. 飞荣达 → P0 remaining-position protection
2. 拓斯达 → P0 risk correction
3. 银之杰 → conditional empty-position observation

V4 routed result: **same roles and order**.

Critical semantic check:
- Final3 remains an attention/risk queue;
- it is **not** interpreted as three buys;
- executable empty-position trades remain 0.

**Status: PASS**

## 9. Same-day state reuse

V4 architecture requires:
- Market Radar creates one canonical Friday Market State;
- Stock Review consumes it;
- Daily Review / Top3 consume the same state plus structured stock outputs;
- downstream workflows do not recompute a second Friday R/A/D.

Design/fixture consistency: **PASS**

Actual installed runtime enforcement: **NOT RUN**

## 10. Context-load reduction check

The Friday V4 route does **not** require default loading of:
- full V3.2/V3.3 historical inheritance prose;
- every stock's full history;
- all old sell cases;
- all old daily reports;
- all sector research;
- all deprecated prompt versions.

This proves the architecture supports selective loading. It does **not** yet measure actual ChatGPT token savings, because product-side context packing is not exposed here.

**Architecture result: PASS**

## 11. Persistence / integration

- Production Google Sheet writes: **NOT RUN by design**
- Calendar writes: **NOT RUN by design**
- idempotent write/read-back verification: **NOT RUN**
- installed Skill execution: **NOT RUN**

These remain RC/integration gates and are not falsely marked PASS.

## 12. Friday conclusion

### Regression status
**PASS — Structural + Decision Fixture Regression**

Critical V3.4 decisions were preserved after splitting Context from Skill.

### Not enough for promotion
V4.0-DRAFT remains `TEST`, not RC1 and not ACTIVE, because:
1. 2026-08-31 real state-transition test is still pending;
2. actual installed-Skill runtime has not been exercised;
3. persistence/idempotency integration has not been exercised;
4. rollback promotion mechanics remain to be verified at RC.

Next gate: **2026-08-31 close-confirmed state-transition regression**.
