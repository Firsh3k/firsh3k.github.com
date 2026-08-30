# Context Promotion Policy

## Purpose

Define when an Inbox insight is allowed to move from non-authoritative material into authoritative PCOS Context.

## Default lifecycle

```text
REFERENCE
  → OBSERVE
  → ACTIVE_CANDIDATE
  → ACTIVE
```

Alternative exits:

```text
REFERENCE / OBSERVE / ACTIVE_CANDIDATE
  → REJECTED
  → ARCHIVED
```

Not every item must pass through every state. Low-impact durable knowledge may remain `REFERENCE` permanently; high-impact rules should normally pass through observation/testing before activation.

## Promotion classes

### 1. Reference promotion

Target examples:
- shared knowledge;
- definitions;
- useful source catalog entries;
- external frameworks.

Requirements:
- relevant to an existing or plausible future project;
- source and date recorded when material;
- no unresolved contradiction with higher-authority facts.

Authority: informational only.

### 2. Lesson promotion

Target examples:
- project lessons;
- retrospective findings;
- reusable heuristics.

Requirements:
- preserve provenance (`external`, `personal`, or `mixed`);
- identify whether the lesson is supported by the user's own cases;
- avoid rewriting an external experience as a personally validated rule.

Authority: advisory unless separately promoted into Strategy/Constitution.

### 2A. Experience Pool promotion

Target examples:
- practitioner heuristics worth surfacing during execution;
- recurring qualitative patterns;
- market/regime observations awaiting case accumulation;
- decision lenses that should change what the system inspects, but not what it is automatically allowed to do.

Requirements:
1. preserve provenance and uncertainty;
2. define the observation trigger clearly enough to recognize future cases;
3. define explicit authority boundaries;
4. state what the heuristic may influence (attention, scenarios, evidence collection);
5. state what it may **not** independently influence (high-impact gates, irreversible actions, execution authority);
6. where useful, create lightweight prospective validation rather than requiring a heavy backtest before observation use.

Authority: advisory / observational only. Experience Pool membership is **not** equivalent to ACTIVE Strategy.

Formal promotion from Experience Pool into Strategy/Constitution requires the Strategy / principle promotion gates below.

### 3. Strategy / principle promotion

Target examples:
- investment execution rules;
- legal decision frameworks;
- health behavior rules;
- project operating rules;
- global decision principles.

Requirements:
1. identify the ACTIVE rule that would be added, changed, or superseded;
2. document supporting and conflicting evidence;
3. assess domain risk and reversibility;
4. define expected behavior before testing;
5. run representative evals/regression when the change affects repeatable decisions;
6. record known tradeoffs and failure modes;
7. obtain explicit promotion approval when the change is material;
8. version the affected Strategy/Constitution/Skill if future behavior changes;
9. preserve rollback target.

Authority: ACTIVE only after all applicable gates pass.

## Duplicate handling

If an incoming insight is semantically equivalent to an existing ACTIVE rule:

- do not create a duplicate rule;
- record the new source as supporting evidence when useful;
- strengthen or annotate the existing item only if the added evidence materially improves it.

## Conflict handling

If new material conflicts with ACTIVE Context:

- do not overwrite the ACTIVE item;
- create a conflict record;
- preserve both claims and their provenance;
- evaluate freshness, evidence quality, scope, and applicability;
- promote a change only after the conflict is resolved or explicitly bounded.

## Global promotion gate

Project-local lessons may be promoted to Global Context only when:
- the principle is genuinely cross-domain;
- evidence is not limited to one local accident or one source;
- the wording is abstract enough to travel across projects without importing project-specific assumptions.

## Promotion audit

Every material promotion should be able to answer:

- What changed?
- Why?
- Which source(s) triggered the change?
- What existing Context was compared?
- What evidence supports or contradicts it?
- What is the impact radius?
- What evals were run?
- What is the rollback target?
- Who/what approved activation?
