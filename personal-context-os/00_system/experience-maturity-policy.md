# PCOS Experience Maturity & Promotion Policy

## Purpose

Define how useful experience evolves from an external observation into a validated Strategy candidate without confusing anecdote, accumulated evidence, and execution authority.

This policy applies to project Experience Pools and other reusable heuristics retained by PCOS.

## Core rule

**Maturity measures evidence quality; promotion changes authority. They are related but are not the same action.**

PCOS may update the evidence/maturity assessment of an Experience item as new cases accumulate. It must not silently give that Experience item new high-impact execution authority.

## Maturity scale

### L0 — External Insight

Meaning:
- newly ingested observation, framework, hypothesis or practitioner claim;
- source captured, but not yet accepted as a durable PCOS Experience item.

Typical location: `00_inbox/`.

Authority: none.

Promotion gate to L1:
- relevant to an existing project;
- sufficiently distinct from existing Context;
- useful enough to influence future observation or evidence collection;
- provenance and uncertainty preserved.

### L1 — Retained Experience

Meaning:
- accepted into an Experience Pool as a worthwhile heuristic;
- useful for attention/scenario generation;
- not yet supported by enough PCOS-owned cases.

Authority: advisory / non-gating.

Expected artifacts:
- clear trigger description;
- explicit boundary / what it cannot authorize;
- provenance;
- intended validation target.

### L2 — Observed Experience

Meaning:
- PCOS has accumulated repeated real cases showing that the Experience item is recognizable and testable in practice.

Suggested evidence for A-share market heuristics:
- at least ~5 reasonably comparable trigger cases when available;
- T+1 / T+3 / T+5 or other predefined outcomes recorded;
- false positives and ambiguous cases retained;
- no major evidence that the trigger definition is unusably vague.

Authority: advisory / non-gating.

L2 does **not** mean statistically validated.

### L3 — Validated Experience

Meaning:
- enough comparable evidence exists to estimate whether the heuristic has useful signal or decision value.

Preferred evidence for repeatable A-share market heuristics:
- about 20+ reasonably comparable cases when feasible;
- hit / miss / ambiguous outcomes recorded;
- false-positive behavior understood;
- incremental value compared with existing Market State variables;
- no evidence that using the heuristic systematically increases overtrading or decision instability;
- trigger and outcome definitions are reproducible enough for another run to reach substantially the same classification.

Authority: still advisory unless separately promoted.

Important: a high hit rate alone is insufficient if the Experience item merely duplicates an existing ACTIVE rule.

### L4 — Strategy Candidate

Meaning:
- the Experience item is mature enough to propose a formal behavior rule.

Required before entering L4:
1. proposed Strategy wording is explicit and reproducible;
2. expected behavioral effect is defined;
3. existing ACTIVE rules that would be added, changed, bounded or superseded are identified;
4. supporting and conflicting evidence is documented;
5. false-positive / failure modes are documented;
6. impact radius and reversibility are assessed;
7. representative TEST / regression plan exists;
8. user has explicitly approved opening formal Strategy promotion work when the change is material.

Authority: TEST candidate only; not production authority.

### L5 — ACTIVE Strategy

Meaning:
- the candidate has passed applicable TEST → RC → ACTIVE promotion gates.

Required:
- representative eval/regression passed;
- cross-workflow consistency checked when relevant;
- rollback target preserved;
- affected Context/Strategy/Skill versions recorded;
- explicit user approval for material high-impact activation.

Authority: formal execution authority within its documented scope.

## Promotion paths

Normal path:

```text
L0 External Insight
→ L1 Retained Experience
→ L2 Observed Experience
→ L3 Validated Experience
→ L4 Strategy Candidate
→ L5 ACTIVE Strategy
```

Not every Experience item should reach L5. A valuable observation may remain L1–L3 permanently.

Downgrade / exit paths are allowed:

```text
L1 / L2 / L3
→ downgraded maturity
→ REJECTED or ARCHIVED
```

when later evidence contradicts the heuristic, the definition proves unstable, or the item adds no incremental value.

## Who initiates promotion?

PCOS uses a **system-proposes, user-approves** model for material Strategy promotion.

### PCOS may do automatically
- accumulate prospective validation cases during normal execution;
- calculate/update evidence summaries;
- update maturity from L1 → L2 → L3 when the documented evidence criteria are objectively met and no execution authority changes;
- flag items that are close to a maturity threshold;
- prepare a Strategy Candidate proposal and test plan;
- recommend downgrade/archive when evidence deteriorates.

### PCOS must not do automatically
- change a high-impact Experience item into an ACTIVE trading rule;
- modify Market Gate/new-risk/sell/buy authority solely because maturity increased;
- skip representative regression/eval when a proposed rule changes repeatable decisions.

### User approval gates
- L3 → L4 when opening material Strategy-promotion work;
- L4 → L5 before production activation.

The user may also request a review or promotion at any time; PCOS should not require the user to remember to do so.

## Review and reminder policy

Use two complementary mechanisms.

### 1. Event-driven review

During normal Skill execution, surface an Experience item when:
- it reaches a new maturity level;
- it reaches the configured sample threshold;
- its hit/false-positive profile changes materially;
- it shows evidence of incremental value beyond existing ACTIVE Context;
- it becomes contradictory enough to consider downgrade;
- it is mature enough for an L4 Strategy Candidate review.

Do not interrupt ordinary reports for trivial evidence changes.

### 2. Periodic maturity audit

A low-frequency recurring audit may review the Experience Pool for:
- maturity changes not surfaced during daily execution;
- stale items with no new cases;
- L3 items awaiting Strategy review;
- L4 candidates awaiting TEST/RC gates;
- contradictory or duplicate Experience items.

The audit should notify the user only when there is a meaningful decision or status change.

## Value ranking

Maturity is not identical to value. When comparing Experience items, PCOS should also consider:
- decision impact;
- incremental information value;
- reliability / reproducibility;
- frequency of applicability;
- false-positive cost;
- compatibility with existing Strategy;
- whether it improves decisions without adding unnecessary complexity.

An Experience item can therefore be highly mature but low-impact, or highly valuable but still immature.

## Audit fields

Each Experience item should be able to report:
- `maturity_level`;
- `maturity_updated_at`;
- `case_count`;
- `hit_count` / `miss_count` / `ambiguous_count` when meaningful;
- `incremental_value_status`;
- `failure_modes`;
- `next_maturity_gate`;
- `strategy_promotion_status`;
- `last_reviewed_at`;
- provenance.
