# A股 Context System Changelog

## 2026-08-31 — V4 Monday real-data state-transition validation

Status: `4.0-DRAFT / TEST`  
Result: **PASS — RC1 ELIGIBLE, NOT PROMOTED**

Validated against the close-confirmed `2026-08-31` production evidence package in 《A股复盘总控台》.

Passed:
- rebuilt Monday Market State from Monday evidence rather than copying Friday;
- canonical Monday state = `🟡条件型进攻 / R=+16.7 / A=+25.8 / D=+9.2`;
- exact same-day Market State reused across Market Radar → Stock Review → Daily Review/Top3;
- Friday pending/data-gap items were not silently promoted;
- strict stock-review semantics = `5 successful + 2 P0 data gaps`;
- Monday confirmed transactions reconciled: 飞荣达 full exit, 拓斯达 full exit, 长江通信 new 100-share P0;
- sell-review retained S0-S4 / 2+1 / relative-strength protection semantics;
- Final3 remained an attention/condition queue, with `0` formal new executable candidates;
- industry lifecycle, B250, opaque timing score, CSI2000 historical score and missing-stock evidence remained qualified N/A;
- no V4 TEST write to the production Sheet.

Non-blocking source conflict found:
- 博济医药 and 中巨芯-U are described as current P0 in one production summary line but detailed rows state Monday account holdings remain pending verification.
- V4 canonical rule: keep these as `carry-forward P0_UNRESOLVED` until broker/account evidence confirms current holdings; do not invent technical scores or S0-S4.

Still NOT_RUN before ACTIVE:
- installed ChatGPT Skill runtime validation;
- RC production persistence/idempotency/read-back;
- rollback verification;
- independent raw-screenshot replay of every input rather than relying on the validated close-confirmed production evidence package.

Promotion consequence:
- planned pre-RC decision-semantic gates are now satisfied;
- `V4.0-DRAFT` is eligible for an explicit `V4.0-RC1` promotion step;
- lifecycle remains TEST until explicitly promoted;
- production `V3.4 ACTIVE` remains unchanged.

Result file: `../11_evals/monday-2026-08-31-v4-validation.md`.

---

## 4.0-draft.1 — 2026-08-30

Status: TEST

### Architecture
- Introduced Context-native `review-a-shares` design.
- Kept production strategy baseline at `2026.08.25-v3.4 ACTIVE`.
- Separated durable investment constitution from workflow procedure.
- Added Context Router with task-specific lazy loading.
- Added source-priority/conflict policy.
- Added canonical same-day Market State reuse contract.
- Added current Portfolio/P0 state.
- Split strategy into modular contexts:
  - market state machine;
  - market radar;
  - stock review;
  - trade models;
  - exit/sell review;
  - daily review/Top3.
- Created machine-checkable Friday golden fixture and Monday state-transition fixture.

### 2026-08-30 — Experience maturity and promotion review added

Added:
- L0–L5 maturity model for A-share Experience items through the system-level `experience-maturity-policy.md`.
- maturity dashboard in `09_experience_pool/market-observation-experience.md`.
- current E001–E004 items initialized at **L1 Retained Experience** with zero prospective cases as of 2026-08-30.
- next-gate visibility for each Experience item.

Operating model:
- Market Radar and validation logs accumulate evidence during normal execution.
- PCOS may advance evidence maturity L1 → L2 → L3 when objective criteria are met without changing trading authority.
- PCOS surfaces `STRATEGY_PROMOTION_REVIEW` when an item is mature enough for formal Strategy work.
- L3 → L4 and L4 → L5 material transitions require explicit user approval.
- No Experience item currently has formal Strategy authority.

### 2026-08-30 — Market observation experience pool added

Source: PCOS Inbox intake of external article 《A股变盘前夜，暴风雨前的宁静》, followed by explicit user approval.

Added:
- `09_experience_pool/market-observation-experience.md` as a non-gating A-share market-watching experience layer.
- `11_evals/experience-observation-log.md` for lightweight prospective T+1 / T+3 / T+5 validation.
- E001 `资金僵局 / 脆弱平衡` experience heuristic.
- E002 `波动率压缩 → 变盘观察`.
- E003 `缩量反弹 / 放量杀跌` volume-asymmetry observation.
- E004 `仓位 × 情绪` contrarian observation, sample-bias limited.

Changed:
- Market Radar now loads the experience pool and reports `triggered / not triggered / N/A` observation overlays.
- Experience signals may raise attention and create validation cases but cannot independently change Market Gate, new-risk permission, stock promotion, or sell rules.
- No heavy historical backtest is required before observation use; evidence accumulates prospectively through normal daily reviews.

Promotion boundary:
- Experience heuristic → observation layer now.
- Formal Market State / trading gate only after later explicit promotion and evidence review.

### Migration baseline verified from production Sheet
- `PROMPT_SYSTEM_MASTER_V3` = `2026.08.25-v3.4 ACTIVE`
- `PROMPT_MARKET_RADAR` = `2026.08.25-v2 ACTIVE`
- `PROMPT_STOCK_REVIEW` = `2026.08.25-v3 ACTIVE`
- `PROMPT_DAILY_REVIEW` = `2026.08.25-v3 ACTIVE`
- `SHARED_TRADING_RULES` = `2026.08.25-v3 ACTIVE`
- `SELL_EXECUTION_REVIEW_PROTOCOL` = `2026.08.24-v2 ACTIVE`
- `POST_TASK_SYNC_CHECK_PROTOCOL` = `2026.08.25-v4 ACTIVE`

### Friday 2026-08-28 regression
Result: `PASS — Structural + Decision Fixture Regression`.

Preserved critical invariants:
- 🟠 high-volatility rotation;
- R=-7.5 / A=+13.3 / D=+20.8;
- default new risk = 0%;
- empty-position executable candidates = 0;
- 6 successful stock reviews + 2 P0 data gaps;
- P0 roles/quantities preserved;
- Final3 = 飞荣达 P0 protection / 拓斯达 risk correction / 银之杰 conditional observation;
- qualified N/A fields stayed N/A;
- no production writes.

Not yet tested:
- independent raw-screenshot replay;
- installed Skill runtime;
- production persistence/idempotency;
- Monday real-data state transition;
- rollback mechanics.

### Promotion policy
`V4.0-DRAFT TEST → Friday PASS → Monday PASS → V4.0-RC1 → integration/rollback PASS → V4.0 ACTIVE`.

Production V3.4 remains untouched until promotion.
