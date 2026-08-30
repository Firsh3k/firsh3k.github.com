# Exit & Sell Review｜V4 Context Module

Version: 4.0-draft.1  
Status: TEST  
Baseline: `SELL_EXECUTION_REVIEW_PROTOCOL 2026.08.24-v2` + S0-S4 and 2+1 rules from ACTIVE shared rules.

## 1. Sell-state ladder

- `S0` continue holding: original model evidence remains valid.
- `S1` first reduction: first planned pressure / deterioration trigger.
- `S2` second reduction / core-resistance realization.
- `S3` weak-rebound exit / failed recovery.
- `S4` trend invalidation / hard exit.

Every level must state price/range or structure trigger, action, amount/proportion, remaining position, rationale and cancellation condition when data allow it.

Rebound positions and trend positions must not share the same exit expectations.

## 2. 2+1 anti-mis-sell gate

For non-emergency material reduction or full exit, require:
- at least 2 objective market/sector degradation facts;
- at least 1 stock-level invalidation fact.

A subjective belief such as “大盘要跌” is an alert, not a full-exit authority.

Action guide:
- subjective concern only → do not sell solely for that reason;
- market degrades but stock remains strong → at most reduce ~1/3 under the plan;
- market turns clearly defensive and stock reaches S1/S3 → reduce ~1/3 to 1/2 as planned;
- stock reaches S4 or market+sector+stock jointly invalidate → hard exit may be appropriate.

Emergency material event, liquidity crisis or already-triggered S4 can bypass 2+1, but the factual reason must be recorded afterward.

## 3. Relative-strength protection

When the sector remains high-confidence/valid, stock alpha is materially strong and the stock itself is not broken, subjective market fear cannot justify full liquidation. This protection limits unplanned exits; it never overrides S4 or a material emergency.

## 4. Actual trade evidence

Only record a real sell when confirmed by:
- user confirmation;
- broker/transaction record;
- explicit reliable transaction marker.

Never infer the user sold from the K-line.

Each sell has a unique record ID and trade-batch ID. Partial sells are recorded separately and before/after holdings must reconcile.

## 5. Same-day sell record

Record:
- original buy model and holding nature;
- buy average;
- sell price/quantity;
- before/after holding;
- planned vs unplanned;
- sell type;
- trigger evidence;
- market state / sector stage;
- realized P&L at sell;
- max floating profit before sell where known;
- emotion / execution score;
- process lesson and next improvement.

Sell types include at least: partial profit, trend reduction, stop, trend invalidation, weak-rebound exit, event risk, capital rotation, emotion-driven, other.

## 6. Process-first error taxonomy

Evaluate the decision based on information available at the time:
- `M` model error
- `E` execution error
- `R` risk-control error
- `P` psychological error
- `N` normal trial/error
- `L` luck-driven gain

Post-sell rise does not automatically prove a mistake; post-sell fall does not automatically prove correctness.

## 7. Outcome tracking

When due, record T+1 / T+3 / T+5 / T+10 prices and classify descriptively:
- pending observation
- too early
- appropriate
- too late

Weekly: descriptive sell summary.
Monthly: plan adherence, realized return, profit giveback, early/late rates, stop execution and execution score, split by buy model and sell type.

Do not change the formal system from one outcome. Production baseline requires a meaningful sample (e.g. ~30 sells for systematic sell-rule review).

## 8. Re-entry after a sell

Do not emotionally chase because price rose after exit. Re-entry must independently pass:
- current Market State;
- current sector/main-line state;
- fresh stock trigger;
- invalidation/risk-reward;
- appropriate position validation.

Default re-entry initial size should be conservative relative to the original plan unless new evidence justifies otherwise.
