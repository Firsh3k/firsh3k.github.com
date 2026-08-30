# Daily Review + 7→5→3 / Top3｜V4 Context Module

Version: 4.0-draft.1  
Status: TEST  
Baseline: `PROMPT_DAILY_REVIEW 2026.08.25-v3`.

## Mission

Consume the canonical same-day Market State and structured same-day Stock Review objects to decide what deserves attention, what P0 risk needs handling, and whether any trade is actually executable next session.

This module must not rebuild the market state from scratch and must not reread every stock’s full history unless a conflict or missing state requires it.

## Required inputs

- canonical same-day Market State;
- all valid same-day Stock Review objects;
- current P0 holdings;
- same-day actual trades / execution errors;
- sync state when running a production task.

Only close-confirmed stock objects participate in final ranking. Data-gap P0 remains in risk management but does not receive invented scores.

## 1. Command homepage

Show first:
- market gate and rebound/trend nature;
- R/A/D and key medium-term/breadth constraints;
- main observation/main-attack directions;
- avoid directions;
- default new-risk permission and single-stock initial size;
- next-day forbidden actions;
- P0 priority risks.

Answer `can we fight?` before `which stock?`.

## 2. Ranking order

The production V3.4 decision hierarchy is preserved:

```text
Market gate
→ Risk/Attack anchor absolute state
→ weekly/monthly medium-term environment
→ industry lifecycle / main line
→ style and breadth
→ stock mapping purity and role
→ stock relative strength vs sector
→ model lock and actual trigger
→ invalidation distance and risk/reward
→ MA5 state
→ chip-cost structure
→ volume-price/liquidity
→ attack score
```

No lower layer can override a failed higher hard gate.

## 3. Sector-stock resonance matrix

For each candidate, preserve:
- sector/index and sector rank;
- sector fish stage / rebound-vs-trend status;
- leader/core/capacity/follower role;
- mapping purity: direct core / direct follower / indirect / no valid mapping;
- stock relative to sector;
- four gates;
- MA5/chips/volume;
- actual trigger and invalidation;
- resonance grade.

Suggested resonance interpretation inherited from production:
- A: market permits + style confirms + S/A sector at valid stage + direct core/strong follower + stock synchronous/stronger + four gates/trigger/risk all qualified;
- B: sector valid but stock role/T+1/structure still pending;
- C: indirect mapping, style follower or sector strong/stock weak → observation only;
- D: no valid mapping or sector retreat → no new main attack.

Resonance grade never substitutes for a real trigger.

## 4. 7 → 5 → 3

### Battle 7
Maximum 7, normally max 2 from the same main line. Must be the highest-value attention set, not a count-filling exercise.

### Focus 5
Retain the strongest combination of direction + role + model + trigger clarity + risk/reward.

### Final 3
Final3 is an attention/condition/risk queue, not a buy list. Normally max 1 from the same main line unless roles are explicitly differentiated.

Every Final3 name must have a role, for example:
- direction attack thermometer;
- best executable candidate;
- backup execution candidate;
- P0 protection / risk correction;
- left-side observation.

No qualified name → fewer than 3 is allowed. Zero executable trades is explicitly valid.

## 5. P0 priority

Real holdings outrank new opportunities for risk-management attention.

For each P0 preserve:
- cost/quantity/holding nature;
- current S0-S4;
- continue/add/no-add/reduce/exit conditions;
- high/flat/low-open scenario tree;
- market/sector/stock relationship;
- 2+1 sell-gate evidence if reduction is considered.

Being held does not grant main-line status or buy/add permission.

## 6. Final3 detailed execution card

For each Final3 and each P0, keep critical actionable fields even when the report is long:
- best buy path or explicit no-buy;
- second-best path or none;
- no-chase zone;
- initial position;
- add evidence and max model position;
- first reduction;
- second/core-pressure realization;
- weak-rebound exit;
- trend invalidation;
- R-stage and holding nature;
- key price/structure + trigger + action + position change + invalidation.

## 7. Next-session scenario card

Use the canonical Market State to state:
- upgrade conditions;
- maintain conditions;
- downgrade/invalidation conditions;
- permitted and forbidden actions under each.

The scenario is a conditional plan, not a prediction.

## 8. Research / behavior feedback

Daily review may generate at most a small number of observations/hypotheses/error lessons. They enter research context, not production Strategy automatically.

If actual trades occurred, preserve the M/E/R/P/N/L process classification and downstream T+n evaluation hooks.

## 9. Production delivery contract

In production ACTIVE mode, full report delivery and configured Sheet/Calendar synchronization are separately audited. A successful chat report does not imply successful external persistence, and vice versa.

V4-DRAFT dry-runs are read-only by default and must not write production state unless the user explicitly requests it.
