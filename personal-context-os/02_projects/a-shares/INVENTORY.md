# A股 Project Instance｜Current Asset → Target Context Inventory

Status: MIGRATION_IN_PROGRESS
Baseline date: 2026-08-30
Production baseline: V3.4 (verified from 《A股复盘总控台》/提示词注册中心)

## 1. Migration principle

This migration is architecture refactoring, not strategy refactoring. The V4.0-DRAFT package must preserve the semantics of the current ACTIVE V3.4 system unless a later change is explicitly approved and versioned.

## 2. Verified production sources

### Prompt registry / active execution rules
Source: Google Sheet 《A股复盘总控台》 → `提示词注册中心`

| Source asset | Verified active version | Target layer |
|---|---|---|
| `PROMPT_SYSTEM_MASTER_V3` | `2026.08.25-v3.4` | `01_constitution/` + `02_strategy/market-state-machine.md` + orchestration constraints |
| `PROMPT_MARKET_RADAR` | `2026.08.25-v2` | `02_strategy/market-radar.md` + report schema |
| `PROMPT_STOCK_REVIEW` | `2026.08.25-v3` | `02_strategy/stock-review.md` + report schema |
| `PROMPT_DAILY_REVIEW` | `2026.08.25-v3` | `02_strategy/daily-review.md` + `02_strategy/top3-ranking.md` |
| `SHARED_TRADING_RULES` | `2026.08.25-v3` | `01_constitution/` + modular execution rules |
| `SELL_EXECUTION_REVIEW_PROTOCOL` | `2026.08.24-v2` | `02_strategy/exit-and-sell-review.md` + `07_trading_journal/` |
| `POST_TASK_SYNC_CHECK_PROTOCOL` | `2026.08.25-v4` | Skill persistence/audit contract, not investment knowledge |

### Strategy evolution
Source: `提示词变更日志`

- 2026-08-25 V3.4 added the index multi-timeframe state machine, auditable technical score, Risk/Attack anchors, weekly/monthly confirmation, breadth, timing divergence, and cross-report state propagation.
- V3.4 explicitly does **not** replace four gates, R0-R4, S0-S4, P0 priority, 2+1 anti-mis-sell gate, initial-position validation, or zero-trade discipline.

### Long-lived investment principles
Source: `投资思想库`

Target: `01_constitution/investment-constitution.md` and selected strategy modules.

High-value ACTIVE principles include:
- 市场收集器先于个股分析器
- 先有板块势，再选核心强股
- 龙头是方向温度计，不是自动买点
- 旧主线走弱时必须寻找资金去向
- 左侧与右侧必须分开管理
- 左侧：跌够只是观察，横住转强才允许试错
- 右侧：突破、站稳、第一次有效回踩
- 不接下跌飞刀
- 深跌反弹概率高于直接重启主升
- 买入先想退出
- 首笔验证、证据驱动分段仓位
- 无主线不操作、无龙头不重仓
- 无触发允许0笔交易
- 反弹先按反弹管理，证据足够再升级趋势
- R0不接、R1观察、R2执行、R3兑现、R4才升级趋势

OBSERVE/REJECTED ideas remain research context and must not be silently promoted into ACTIVE execution rules.

## 3. State and history assets

| Existing Google Sheet asset | Role today | Target Context location | Default loading |
|---|---|---|---|
| Date sheets `YYYY-MM-DD` | Daily market/stock/report snapshot | `03_market_state/daily/` + `09_reports/` | Recent state only |
| `历史总表` | Cross-day stock history | `05_stock_context/*/history` / retrieval corpus | On demand |
| Individual stock tabs e.g. `飞荣达_300602` | Stock history and current cards | `05_stock_context/<stock>/` | Current summary + recent material changes |
| `投资思想库` | Philosophy / principles / hypotheses | `01_constitution/` + research corpus | ACTIVE principles summary by default |
| `指数成分映射表` | Current/historical index identity evidence | `08_data/index-membership/` | For affected stocks only |
| `卖出操作记录` | Actual sell ledger | `07_trading_journal/sells/` | Only for P0/sell review |
| `卖出复盘统计` | Sell outcomes / T+1,T+3,T+5,T+10 | `07_trading_journal/sell-outcomes/` | Sell review / research only |
| `投资研究课堂_交易案例` | Execution/behavior cases | `07_trading_journal/cases/` + `11_evals/` | On demand / regression |
| `提示词变更日志` | Strategy provenance | `10_decisions/` + `12_versions/CHANGELOG.md` | Version resolution / audit |
| `A股复盘与交易决策总工作流` | Workflow reference | `04_skills/` orchestration reference | Skill design only |

## 4. Friday 2026-08-28 golden fixture

Source: `2026-08-28` date sheet. This is the primary regression fixture for V4.0-DRAFT because it contains the market radar, stock review, total review, P0 state, Final3, V3.4 index state card and sync audit in one frozen day.

Verified baseline invariants:
- Market state: 🟠 高波动轮动
- R = -7.5
- A = +13.3
- D = +20.8
- Default new-risk permission = 0%
- Formal empty-position executable candidates = 0
- Main observations: agriculture/seed/supply-coop; chemicals/fertilizer/PTFE; AI application/network security only local rotation
- Friday → Monday state transition conditions are explicitly defined for upgrade / maintain / downgrade
- Formal stock review count = 6 successful + 2 P0 data gaps
- P0 at Friday close: 飞荣达 1500 @ ~42.460; 拓斯达 1600 @ ~35.475; 博济医药 100 @ 15.50; 中巨芯-U 200 @ 29.78
- Final3 roles: 飞荣达 P0 protection; 拓斯达 risk correction; 银之杰 conditional observation
- Direct empty-position execution: 0 trades permitted without new confirmation

## 5. What must move OUT of the Skill

The following content should not be repeatedly embedded as one monolithic Skill prompt:
- Full history of V3.2.x → V3.3.x → V3.4 inheritance text
- Long-lived investment philosophy prose
- All 72 shared trading rules as unconditional full-text context for every task
- Old sell cases and T+n outcomes
- All stock history
- Old daily market reports
- Index membership history unrelated to current stocks
- Full report archives

These remain retrievable Context assets.

## 6. What remains IN the Skill

The Skill should contain procedure only:
1. Resolve requested workflow.
2. Resolve ACTIVE version and manifest.
3. Route only required Context.
4. Validate current data completeness.
5. Fetch permitted missing public data without upgrading missing user-chart evidence.
6. Apply evidence classification and current strategy modules.
7. Produce the required report schema.
8. Generate state delta.
9. Persist only according to the active sync contract.
10. Audit version/data/formula/output consistency.

## 7. Migration gates

- Gate A: all ACTIVE V3.4 rules have a destination and no rule is silently dropped.
- Gate B: Friday 2026-08-28 structural and decision invariants match.
- Gate C: Monday 2026-08-31 state transition uses Friday state but does not copy Friday conclusions when Monday evidence changes.
- Gate D: market radar → stock review → daily review consume the same same-day Market State object.
- Gate E: rollback to V3.4 remains possible until V4.0 is promoted to ACTIVE.
