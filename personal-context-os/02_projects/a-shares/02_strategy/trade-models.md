# Trade Models｜L1 / R1 / X + MA5 + R0-R4 + A/B/C/D

Version: 4.0-draft.1  
Status: TEST

This module contains stock execution state machines. It is loaded for stock review, not for market-only radar.

## 1. Normal buy-model lock

Every stock must resolve to exactly one normal buy mode at the decision point:

### 🟠 L1｜左侧·暴跌后底部区间分批
Required concept:
- sufficient pullback alone grants observation, not a buy;
- recognizable support/bottom zone;
- no continued acceleration lower;
- selling pressure decays / support appears;
- invalidation is clear.

Permissions:
- MA5-D0: no new position.
- D1: observation only.
- D2 + support + support evidence + clear invalidation: very small test may be considered.
- D3 + volume/sector confirmation: may increase only within pre-defined risk budget.

Forbidden:
- buy only because DD20 is large;
- buy only because price reaches chip-cost/support;
- average down because position is losing.

### 🟢 R1｜右侧·趋势初转 / 第一次有效回踩
Required concept:
- trend changes from falling to stable/rising;
- MA5 at least D2/D3 when applicable;
- reclaim key MA / chip-cost / neckline / platform;
- higher low or valid breakout structure;
- sector confirmation;
- T+1 support where required.

Priority:
1. early valid breakout / initial turn;
2. stand/confirm;
3. first effective pullback with contraction + support + re-strengthening.

Forbidden:
- second/third acceleration candle chase;
- obvious MA5 over-extension;
- near core resistance with poor risk/reward;
- high gap far away from support.

### 🔴 X｜禁止新买 / 追高
Use X when:
- neither L1 nor R1 is qualified;
- only news, ranking, one-day sector climax or narrative supports the idea;
- structure is accelerated/crowded;
- invalidation is unclear;
- required same-day evidence is missing.

Default position permission: zero.

## 2. MA5 stop-fall state

- `MA5-D0`: MA5 continues down; no stop-fall confirmation; normally no new position.
- `MA5-D1`: first flat/up turn; preparation only.
- `MA5-D2`: 2 consecutive sessions no longer falling; conditional observation.
- `MA5-D3`: 3 consecutive sessions flat/rising + price holds MA5 + lows stop falling; robust confirmation.
- `MA5-R`: MA5 rising but price excessively extended; acceleration/chase risk.

Joint validation:
- price vs MA5;
- recent 2–3 day low structure;
- pullback volume / breakout volume;
- no one-day huge-volume false turn.

MA5 deviation guide:
- 0–3% relatively healthy;
- 3–5% caution;
- 5–8% obvious acceleration, prefer pullback;
- >8% normally no chase, with volatility-aware explanation if adjusted.

MA5 state is a filter, never an independent buy signal.

## 3. Rebound / trend state R0-R4

- `R0`: persistent decline / new lows / falling averages → do not catch falling knife.
- `R1`: rebound preparation; sufficient pullback and early refusal to fall → observation or tiny research test only when other L1 conditions exist.
- `R2`: rebound confirmation; stop making lows, MA5 at least D2/improving, higher lows, sector repair, T+1 support → main rebound execution zone.
- `R3`: rebound realization; approaching MA20 / prior platform / prior large bearish candle / core pressure → do not add just because price rises; begin realization management.
- `R4`: trend upgrade; core resistance breakout + continued higher lows + sector/leader strengthening + T+1/T+2 confirmation → rebound position may upgrade to trend position.

If rebound/trend cannot be distinguished, manage as rebound until evidence earns the upgrade.

## 4. A/B/C/D execution rating

- `A`: conditions substantially matched; only allows planned validation position when actual trigger exists.
- `B`: strong candidate but timing/position imperfect; usually wait for pullback/confirmation.
- `C`: continue observation; trend/data/role not sufficiently confirmed.
- `D`: avoid / overextended / trend broken / poor risk-reward / invalid evidence.

Rating is current state, not a permanent stock label. `A` is not unconditional buy.

## 5. Four gates

Before proactive execution, check:
1. valid main line / sector;
2. core / leader / capacity / high-recognition role;
3. model lock L1 or R1;
4. clear and reasonably close invalidation.

Any critical failure prevents proactive main-attack qualification.

## 6. Buy pathways

Every full stock review evaluates:
- A: left-side test;
- B: right-side breakout;
- C: first effective pullback;
- D: add to existing position.

Each path must state:
- status: executable / pending trigger / not applicable / invalid;
- price or range when data support it;
- preconditions;
- confirmation signal;
- action and position change;
- maximum position or model cap;
- no-chase upper boundary;
- invalidation/cancellation;
- T+1 requirement;
- priority.

No qualified path → explicitly `no executable buy`.

## 7. Position progression

- initial position validates the hypothesis;
- adding requires **new** structure/sector/fundamental/support evidence;
- price rising alone is not new evidence;
- position sizing depends on market permission, model confirmation, invalidation distance and risk budget.

MA5/MA60 medium-term initial-turn rule inherited from production:
- golden-cross day: 0 trade or 0.25–0.5% research-validation position only when all other gates permit;
- T+1 holds: total initial position ≤1%;
- second position only after first effective contracted pullback and renewed strength.

This rule is still under sample validation and cannot override the market gate or four gates.

## 8. Model separation rules

- R1 failure must not become an unplanned long-term L1 averaging-down story.
- L1 rebound must not become a trend position without R4-type evidence.
- rebound and trend use different exit expectations.
- high attack score cannot bypass X or missing trigger.
- chip-cost, MA5, DD20, catalyst and relative strength are evidence layers, not stand-alone permissions.
