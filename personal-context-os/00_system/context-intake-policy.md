# Context Intake Policy

## Goal

Convert useful external material into structured PCOS knowledge without allowing a single source, author, conversation, or model interpretation to silently change authoritative Context.

## Trigger

The intake workflow applies when the user explicitly asks to:

- “喂给 PCOS”;
- add an article/video/book/idea to PCOS;
- evaluate whether external material should change Context or Strategy;
- retain external lessons for future use.

## Intake workflow

1. **Identify source** — capture title/URL/file/date/source type when available.
2. **Extract** — identify durable or decision-relevant insights; do not merely summarize.
3. **Classify** — FACT / KNOWLEDGE / FRAMEWORK / LESSON / HYPOTHESIS / PRINCIPLE_CANDIDATE / STRATEGY_CANDIDATE.
4. **Route** — recommend Global, Project, Shared Knowledge, Experience Pool, Lessons, Research/Evals, or Archive.
5. **Deduplicate** — detect whether the insight already exists in PCOS.
6. **Conflict check** — compare with ACTIVE Context and current source-of-record facts.
7. **Evidence assessment** — label source quality, freshness, reproducibility, and domain risk.
8. **Impact assessment** — determine whether promotion would change decisions, behavior, workflow, or high-impact rules.
9. **Recommend status** — REFERENCE / OBSERVE / ACTIVE_CANDIDATE / REJECTED / ARCHIVED.
10. **Produce Context Intake Card** — make the proposed update auditable.
11. **Promotion step** — only after promotion policy requirements are met.

## Authority separation

An Inbox item is not authoritative merely because it is persuasive or well written.

Keep these layers distinct:

- source claim;
- extracted fact;
- external author interpretation;
- PCOS interpretation;
- experience heuristic;
- personal lesson;
- validated principle;
- ACTIVE Strategy.

## Experience Pool route

Use an Experience Pool when an insight is durable and useful enough to affect **what the system watches**, but evidence is not strong enough to make it a formal decision gate.

Typical examples:
- market-watching heuristics;
- practitioner experience;
- recurring qualitative patterns;
- plausible regime signals awaiting case accumulation.

Experience Pool items:
- preserve provenance;
- remain explicitly non-gating unless separately promoted;
- may trigger prospective case logging;
- may later be reviewed for formal Strategy/Principle promotion.

This route avoids the false choice between ignoring a useful heuristic until a heavy backtest exists and immediately treating that heuristic as a validated rule.

## Domain-sensitive thresholds

### Low-impact knowledge

Examples: terminology, general frameworks, historical references.

May normally be retained as `REFERENCE` after source-quality and duplication checks.

### Medium-impact lessons / principles

Examples: reusable decision heuristics, project-management lessons, learning frameworks.

Usually enter as `OBSERVE`, Experience Pool, or `ACTIVE_CANDIDATE`; compare against existing decisions and personal experience before promotion.

### High-impact domains

Examples: investing/trading, legal strategy, health/medical decisions, financial commitments, security/privacy, irreversible external actions.

External content must not directly become ACTIVE Strategy or Constitution. Require stronger evidence, project-specific validation, and explicit promotion under `context-promotion-policy.md`.

For high-impact domains, an Experience Pool can be used as a controlled advisory layer so potentially useful heuristics can be observed without silently gaining execution authority.

## Cross-project promotion

A lesson discovered in one project may be promoted to Global Context only when it is genuinely domain-general and not merely an accidental local pattern.

Example:

```text
A-share retrospective
  → repeated evidence that outcome does not validate process
  → project lesson
  → cross-domain check
  → Global decision principle candidate
```

## Non-goals

The intake workflow does not:

- copy every source into authoritative Context;
- treat popularity as evidence;
- overwrite current truth with older sources;
- convert a hypothesis into a rule without validation;
- promote an external lesson as if it were the user's own validated experience;
- treat Experience Pool membership as equivalent to Strategy activation.
