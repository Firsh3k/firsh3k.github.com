# Market Radar Strategy｜V4 Context Module

Version: 4.0-draft.1  
Status: TEST  
Baseline: `PROMPT_MARKET_RADAR 2026.08.25-v2` with the V3.4 state-machine logic factored out into `market-state-machine.md`.

## Mission

Answer, in order:
1. Can the market be attacked today / next trading day?
2. Which style and sector deserve attention?
3. Where is capital migrating?
4. Which stocks should be collected for full review?
5. What must explicitly not be done?

Market Radar decides **where to look**. It does not promote a stock to a trading candidate without stock-level evidence.

## Required inputs

- current-day close-confirmed market screenshots/data when available;
- `market-state-machine.md` inputs;
- same-day turnover and breadth;
- major index / full-A / average-stock-price experience;
- sector/theme 1/3/5-day relative strength where reproducible;
- leader/core/medium-capacity/high-beta structure;
- current stock-pool coverage;
- prior canonical Market State for delta comparison only.

## Execution

### A. Build canonical Market State
Run `market-state-machine.md` first and produce one same-day object.

### B. Three-layer experience diagnosis
Compare:
- major/core indices vs 同花顺全A;
- 同花顺全A vs A股平均股价;
- style indices vs market breadth.

Examples:
- weights strong but full-A/average-price weak → weight masking;
- weights weak but full-A stronger → weight drag;
- full-A stable but average-price sharply weaker → high-price/high-beta concentrated de-rating risk.

Do not upgrade broad attack confidence unless multiple layers improve together.

### C. Sector radar
For important sectors/themes assess:
- 1/3/5-day relative strength;
- turnover and incremental volume;
- breadth / limit-up ladder;
- leader / capacity core / high-beta front;
- catalyst quality and whether fundamentals are actually realized;
- T+1 persistence;
- current fish stage / rebound vs trend nature.

Sector labels:
- S = confirmed core main line
- A = breakout / main attack tracking
- B = divergence-support or rotational branch
- C = short pulse / downgrade watch
- D = no trade

A one-day top-gain sector cannot automatically become S/A.

### D. Capital migration
Explicitly compare recent leading themes. State whether the market is:
- rotating inside the old main line;
- migrating across sectors;
- completing a true main-line switch;
- too unstable to name an S-level main line.

### E. Candidate collector
For each important sector, collect by role:
- leader / sentiment thermometer;
- high-liquidity capacity core;
- high-beta candidate;
- low-position structural candidate.

Before full stock review, every newly found symbol is `MARKET_CANDIDATE` only.

Upgrade to `TRADE_CANDIDATE` requires stock-level completion of:
- daily/weekly/monthly structure;
- volume/turnover/liquidity;
- chip-cost structure where available;
- funds / relative strength where available;
- stock role and sector mapping;
- pressure/support / trigger / invalidation;
- event/earnings verification;
- four gates.

### F. Climax/T+1 penalty
When prior session shows at least 3 of the known climax conditions (sector-wide climax, core names collectively surge, abnormal index pull, near prior high, high profit crowding, giant volume, many names climax together, next-day gap far above support), decrease execution priority and wait for first real divergence/support.

### G. Output
Required report sections:
1. command homepage: market gate, main observation direction, avoid direction, new-risk permission, forbidden actions;
2. V4/V3.4-compatible Market State card;
3. index / full-A / average-price diagnosis;
4. volume, breadth and risk appetite;
5. style migration;
6. sector ranking and lifecycle/temperature;
7. leader thermometer;
8. stock-pool mismatch;
9. candidate collector and missing-data tasks;
10. next-day upgrade / maintain / downgrade scenario;
11. data/formula/source audit.

## Hard boundaries

- Public web can fill reproducible history and official facts, but cannot use missing same-day stock charts to upgrade a market candidate into a trade candidate.
- Do not treat proprietary/opaque timing values as formal inputs.
- Do not substitute a look-alike index code for a missing proprietary series.
- Supplier differences in breadth/limit-up counts must be disclosed, not silently averaged.
- If no sector has persistent evidence, explicitly say there is no S-level main line.
