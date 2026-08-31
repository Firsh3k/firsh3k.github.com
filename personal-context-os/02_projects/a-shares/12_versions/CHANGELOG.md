# A股 Context System Changelog

## 2026-08-31 — V4.0-RC1 promoted

Status: `4.0-RC1 / RC`  
Production: `V3.4 ACTIVE` remains unchanged  
Promotion record: `2026-08-31-v4-rc1-promotion.md`

Decision:
- explicitly promoted `V4.0-DRAFT / TEST` to `V4.0-RC1 / RC` after Friday and Monday pre-RC gates passed;
- RC1 is a read-only shadow-production candidate, not an ACTIVE release;
- V3.4 remains the production control and rollback baseline.

RC1 adds:
- dedicated RC runtime contract: `../../../04_skills/review-a-shares-v4-rc1/SKILL-DESIGN.md`;
- independent 2026-09-01 shadow fixture: `../11_evals/rc1-2026-09-01-independent-shadow.yaml`;
- same-day input-isolation rule: freeze RC1 output before reading V3.4 same-day derived R/A/D, stock classifications or Final3;
- explicit hard-match vs explainable-difference comparison fields;
- RC persistence remains read-only until a separately scoped idempotency/read-back validation.

Still required before ACTIVE:
- RC independent raw-input shadow PASS;
- cross-workflow consistency under isolated same-day inputs;
- controlled persistence/idempotency/read-back PASS;
- rollback verification;
- installed runtime validation when available;
- preferably additional shadow coverage across 1–2 different market conditions.

---

## 2026-08-31 — V4 Monday real-data state-transition validation

Status: `4.0-DRAFT / TEST`  
Result: **PASS — RC1 ELIGIBLE**

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

### Experience maturity and promotion review added
- Added L0–L5 maturity model for A-share Experience items.
- Market Radar and validation logs accumulate prospective evidence without granting trading authority.
- L3 → L4 and L4 → L5 material transitions require explicit user approval.

### Market observation experience pool added
- Added `09_experience_pool/market-observation-experience.md` and `11_evals/experience-observation-log.md`.
- Experience signals may raise attention and create validation cases but cannot independently change Market Gate, new-risk permission, stock promotion or sell rules.

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

### Promotion policy
`V4.0-DRAFT TEST → Friday PASS → Monday PASS → V4.0-RC1 → integration/rollback PASS → V4.0 ACTIVE`.
