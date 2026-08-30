# ADR-0002｜Experience Pool and Prospective Validation

Date: 2026-08-30  
Status: ACCEPTED  
Context system: Personal Context OS 0.1-DRAFT

## Context

PCOS already separates external Inbox material from authoritative Context and requires controlled promotion for high-impact rules. However, some external or practitioner-derived insights are useful enough to affect what the system should watch while remaining too weakly validated to become formal Strategy/Constitution rules.

The A-share project exposed this gap clearly. Examples include:
- capital-flow stalemate / fragile equilibrium;
- volatility compression before possible range expansion;
- up/down volume asymmetry;
- positioning × sentiment contrarian observations.

A binary choice between `ignore until heavily backtested` and `promote into formal trading rule` creates the wrong incentives.

## Decision

Introduce an optional project-level **Experience Pool**.

Experience Pool authority is `advisory_non_gating`.

Experience items may:
- raise attention;
- add an observation label;
- generate scenarios;
- request additional evidence;
- create prospective validation cases.

Experience items may not independently:
- change high-impact gates;
- authorize irreversible actions;
- activate Strategy/Constitution rules;
- override existing formal execution logic.

## Validation model

Heavy historical backtesting is **not mandatory before observation use**.

Preferred initial loop:

```text
Experience heuristic
→ recognized prospectively during normal execution
→ D0 case logged
→ T+1 / T+3 / T+5 outcomes recorded
→ false positives retained
→ accumulated comparable sample
→ incremental-value review
→ keep / revise / reject / formal-promotion candidate
```

Formal promotion into Strategy/Constitution still requires the normal high-impact promotion gates, representative evals where behavior changes, explicit approval, versioning, and rollback discipline.

## Why this option

### Alternative A — Require full backtest before any use
Rejected as the default because:
- many useful qualitative heuristics are difficult to reconstruct historically with consistent data definitions;
- it creates high ingestion friction;
- potentially useful observations would be discarded before evidence can accumulate naturally.

### Alternative B — Promote good-sounding heuristics directly into Strategy
Rejected because:
- external experience can be persuasive without being statistically reliable;
- anecdotal success encourages overfitting;
- high-impact domains need explicit authority boundaries.

### Chosen approach — Experience Pool
Balances learning speed and governance:
- use the heuristic as a lens immediately;
- keep execution authority unchanged;
- accumulate evidence prospectively;
- promote only when incremental value is demonstrated.

## Consequences

Positive:
- PCOS can learn from practitioner experience without overstating certainty;
- daily workflows naturally become evidence collection mechanisms;
- false positives remain visible;
- formal Strategy stays clean and auditable.

Costs:
- Experience Pools require discipline to prevent informal heuristics from being treated as hidden rules;
- prospective evidence accumulates slowly;
- routers must load only task-relevant experience items to avoid context bloat.

## Reference implementation

A-shares:
- `02_projects/a-shares/09_experience_pool/market-observation-experience.md`
- `02_projects/a-shares/11_evals/experience-observation-log.md`
- Market Radar loads the experience pool as a non-gating observation overlay.

## Revisit conditions

Revisit this ADR if:
- Experience Pool items begin influencing execution without explicit promotion;
- prospective logging becomes too costly or noisy;
- a standardized evidence threshold is developed across multiple projects;
- the Experience Pool grows large enough to require its own routing/indexing architecture.
