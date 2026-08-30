# ADR-0003 — Experience Maturity and Assisted Promotion

Date: 2026-08-30  
Status: ACCEPTED

## Context

PCOS now has an Experience Pool for useful heuristics that are valuable during execution but are not yet formal Strategy rules. A new governance problem appears as the pool grows:

- users need to know which Experience items are the most mature and valuable;
- repeated evidence should move an item closer to formal Strategy review;
- relying on the user to remember every promotion opportunity creates avoidable operational burden;
- allowing the system to silently promote a mature Experience item into a trading rule would violate PCOS authority boundaries.

## Decision

Adopt a six-level Experience maturity model:

```text
L0 External Insight
→ L1 Retained Experience
→ L2 Observed Experience
→ L3 Validated Experience
→ L4 Strategy Candidate
→ L5 ACTIVE Strategy
```

Maturity and authority remain separate concepts.

PCOS uses a **system-proposes, user-approves** promotion model:

- PCOS may accumulate evidence and update non-authoritative maturity through L1 → L2 → L3 when objective criteria are met;
- reaching Strategy-candidate readiness triggers a promotion review rather than a silent rule change;
- L3 → L4 material Strategy work requires explicit user approval;
- L4 → L5 activation requires applicable TEST/RC/regression gates plus explicit user approval.

## Review mechanism

Use both:

1. **event-driven review** — surface maturity changes, sample-threshold crossings, material evidence changes, contradictions, or Strategy-candidate readiness during normal Skill execution;
2. **periodic maturity audit** — low-frequency review of the Experience Pool to catch stale, contradictory, duplicate, or promotion-ready items.

Periodic review should notify the user only when a meaningful status or decision change exists.

## Why this approach

### Alternative A — user-only promotion initiation
Rejected as the default because it requires the user to remember every Experience item's evidence history and creates promotion latency.

### Alternative B — automatic Strategy promotion
Rejected because evidence maturity does not imply execution authority, especially in high-impact domains such as trading.

### Alternative C — system proposes, user approves
Accepted because it combines low operational burden with explicit control over behavioral changes.

## Consequences

Positive:
- Experience Pool becomes rankable and inspectable;
- valuable Experience items can surface naturally as they mature;
- daily execution can contribute evidence without enlarging the Skill;
- formal Strategy remains protected from silent promotion;
- downgrade/archive becomes symmetric with promotion.

Costs:
- Experience items require maturity metadata;
- prospective validation logs must remain reasonably complete;
- periodic review requires either explicit execution or a scheduled reminder/automation if the user wants proactive time-based prompting.

## Reference implementation

A-share Experience Pool:
- `02_projects/a-shares/09_experience_pool/market-observation-experience.md`
- `02_projects/a-shares/11_evals/experience-observation-log.md`

System policy:
- `00_system/experience-maturity-policy.md`

## Revisit conditions

Revisit this ADR if:
- maturity upgrades become noisy or too subjective;
- Experience Pool size makes manual review impractical;
- a domain requires materially different sample/evidence thresholds;
- automatic non-authoritative maturity updates create unintended behavior changes;
- a better event-driven review mechanism becomes available.
