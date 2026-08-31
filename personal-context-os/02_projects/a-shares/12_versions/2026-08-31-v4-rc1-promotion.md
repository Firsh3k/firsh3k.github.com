# V4.0-RC1 Promotion Record

Date: 2026-08-31  
Decision: **PROMOTE V4.0-DRAFT / TEST → V4.0-RC1 / RC**  
Production baseline: **V3.4 remains ACTIVE**  
Activation: **NO — RC1 does not replace production**

## Why promotion is allowed

The pre-RC decision-semantic gates are satisfied:

- Friday 2026-08-28 structural + decision regression: PASS;
- Monday 2026-08-31 real close-confirmed state transition: PASS;
- Monday canonical state rebuilt from Monday evidence rather than copied from Friday;
- same-day Market State reused across Market Radar → Stock Review → Daily Review/Top3;
- critical V3.4 semantics preserved, including four gates, S0-S4, 2+1 sell protection, Final3 role semantics and qualified N/A discipline;
- Monday actual transactions reconciled for 飞荣达、拓斯达、长江通信;
- production writes were not performed by V4 TEST.

## User promotion instruction

The user explicitly requested promotion after reviewing the RC1 criteria and validation sequence.

## RC1 purpose

RC1 is a **release candidate / shadow-production candidate**, not an ACTIVE release. It must now prove independent Context + Skill execution from frozen same-day raw evidence before reading same-day V3.4 derived conclusions.

## RC1 operating constraints

- V3.4 remains the production control and rollback baseline.
- RC1 shadow runs are read-only by default.
- RC1 must create exactly one canonical same-day Market State and reuse it downstream.
- RC1 must not use same-day V3.4 R/A/D, stock classifications or Final3 as inputs before its own result is frozen.
- Missing evidence remains N/A / unresolved under source-priority rules.
- RC1 may not silently change ACTIVE production persistence semantics.

## Known open items before ACTIVE

- independent raw-input shadow execution;
- production-equivalent cross-workflow consistency under isolation;
- controlled persistence idempotency + write/read-back test;
- rollback verification;
- installed ChatGPT Skill runtime validation when available;
- preferably 1–2 additional shadow days covering different market conditions.

## First RC1 eval

`../11_evals/rc1-2026-09-01-independent-shadow.yaml`

Execution model:

```text
freeze 09/01 raw evidence
→ run/freeze V4.0-RC1 read-only result
→ run/read V3.4 production control
→ compare hard invariants and explainable differences
→ keep RC1 or block/patch
```

## Rollback target

`PROMPT_SYSTEM_MASTER_V3 2026.08.25-v3.4 ACTIVE` and its current production workflow remain untouched.

## Promotion to ACTIVE

Not authorized by this record. ACTIVE requires completion of the remaining RC checks and a separate explicit promotion decision.
