# ADR-0001 — Context Inbox and Controlled Promotion

**Date:** 2026-08-30  
**Status:** ACCEPTED  
**Decision type:** Architecture / Governance

## Context

PCOS is intended to learn from new external material over time. Users may supply articles, videos, books, research, conversations, screenshots, or ideas that contain useful knowledge, frameworks, lessons, hypotheses, or strategy candidates.

Without a staging layer, external material can create two failure modes:

1. useful information is lost because it remains only in chat history;
2. unvalidated claims are promoted too quickly and silently modify authoritative Context.

The system therefore needs both **ingestion** and **authority control**.

## Decision

Introduce `00_inbox/` as a non-authoritative staging layer and require controlled promotion before external insights can modify authoritative Context.

The canonical pipeline is:

```text
Source
→ Inbox
→ Insight extraction
→ Classification
→ Target routing
→ Deduplication
→ Conflict check
→ Evidence assessment
→ Impact assessment
→ Context Intake Card
→ REFERENCE / OBSERVE / ACTIVE_CANDIDATE / REJECTED
→ explicit promotion when required
→ authoritative Context
```

The user-facing shortcut **“喂给 PCOS”** starts intake analysis. It does not imply authoritative promotion.

## Authority rules

- `REFERENCE`: retained, retrievable, non-behavioral.
- `OBSERVE`: plausible and worth monitoring/testing.
- `ACTIVE_CANDIDATE`: eligible for promotion review.
- `ACTIVE`: authoritative only after required promotion checks.
- `REJECTED`: evaluated and not accepted.
- `ARCHIVED`: retained for traceability, not active.

High-impact rules — including investment, legal, health, financial, security/privacy, and other consequential decision logic — may not move directly from a newly ingested external source to ACTIVE.

## Alternatives considered

### A. Write useful article insights directly into project Context
Rejected because it conflates source ingestion with authority and makes validated rules vulnerable to single-source drift.

### B. Store only full source documents without structured intake
Rejected because retrieval would remain noisy and the system would lack explicit insight type, target, status, conflict, and promotion semantics.

### C. Keep intake decisions only in chat history
Rejected because chat history is not a reliable architecture or knowledge-governance system-of-record.

## Consequences

### Positive
- PCOS can continuously learn without silently rewriting validated behavior.
- provenance and source-to-rule lineage remain auditable;
- duplicate and conflicting insights can be managed explicitly;
- external experience can later be promoted into project or global principles when justified.

### Costs / tradeoffs
- ingestion requires one additional analysis step;
- high-impact ideas may remain in OBSERVE longer;
- promotion records and evals create additional governance overhead.

These costs are intentional because PCOS optimizes for long-term correctness and explainability rather than maximum ingestion speed.

## Revisit conditions

Revisit this ADR if:
- Inbox volume becomes too large for the current routing model;
- promotion latency materially blocks low-risk knowledge use;
- automatic confidence/evidence scoring becomes reliable enough to support finer-grained automation;
- PCOS introduces new authority tiers or per-domain governance models.

## Supersession

If this architecture changes materially, create a new ADR and mark this record `SUPERSEDED`; do not rewrite this decision as though the earlier architecture never existed.
