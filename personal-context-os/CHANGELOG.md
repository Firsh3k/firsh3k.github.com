# Personal Context OS Changelog

## 2026-08-30 — Experience maturity and assisted promotion added

Status: `0.1-DRAFT`

### Added

- `00_system/experience-maturity-policy.md` defining six Experience maturity levels:
  - L0 External Insight;
  - L1 Retained Experience;
  - L2 Observed Experience;
  - L3 Validated Experience;
  - L4 Strategy Candidate;
  - L5 ACTIVE Strategy.
- `ADR-0003-experience-maturity-and-assisted-promotion.md` documenting why PCOS uses a **system-proposes, user-approves** promotion model.
- Event-driven maturity review plus optional low-frequency periodic maturity audit.
- Value ranking dimensions separate from maturity: decision impact, incremental value, reproducibility, applicability, false-positive cost, compatibility, and complexity.

### Changed

- Experience evidence maturity and Strategy authority are explicitly separated.
- PCOS may accumulate cases and update non-authoritative maturity through L1 → L2 → L3 when objective evidence criteria are met.
- L3 → L4 material Strategy-candidate work requires explicit user approval.
- L4 → L5 production activation requires applicable TEST/RC/regression gates plus explicit user approval.
- The user no longer needs to remember which Experience items are approaching promotion; PCOS should surface meaningful promotion/downgrade reviews proactively.

### Governance rule

`system observes and proposes → user approves material Strategy promotion`

---

## 2026-08-30 — Experience Pool architecture added

Status: `0.1-DRAFT`

### Added

- Project-level **Experience Pool** as an explicit layer between non-authoritative Inbox material and formal strategy/rule promotion.
- A-share reference implementation: `02_projects/a-shares/09_experience_pool/market-observation-experience.md`.
- Lightweight prospective validation ledger: `02_projects/a-shares/11_evals/experience-observation-log.md`.

### Changed

- Useful heuristics may now be promoted into an observation layer without first requiring a heavy historical backtest.
- Experience Pool items can raise attention, trigger scenarios, and create validation cases, but cannot independently change high-impact trading gates or execution authority.
- Normal daily review can accumulate T+1 / T+3 / T+5 evidence, including false positives, before any later formal rule promotion.

### Governance rule

`Inbox insight → Experience Pool → prospective observation → accumulated evidence → explicit later promotion`

This prevents the false choice between “ignore useful experience until fully backtested” and “treat external experience as a validated trading law.”

---

## 2026-08-30 — System evolution governance added

Status: `0.1-DRAFT`

### Added

- `00_system/evolution/README.md` defining how PCOS records its own architectural evolution.
- `00_system/evolution/EVOLUTION-LOG.md` as the chronological system-transition record.
- `00_system/evolution/ADR-0001-context-inbox-and-promotion.md` as the first Architecture Decision Record.
- Three-layer evolution model:
  - `CHANGELOG.md` = what changed;
  - `EVOLUTION-LOG.md` = how the system moved from one architecture state to another;
  - ADR = why a material architecture decision was made, what alternatives were considered, and when it should be revisited.

### Changed

- Material PCOS architecture changes are no longer considered fully recorded if they only exist in chat history.
- Accepted architecture changes should be distilled into GitHub current contracts plus change/evolution/decision records.
- Current architecture and historical reasoning are now explicitly separated: current system files describe what is true now; evolution records explain how it became true.

### Governance rule

For material PCOS architecture changes, maintain the traceability chain:

```text
Need / problem
→ proposal
→ architecture decision
→ implementation
→ CHANGELOG
→ EVOLUTION-LOG
→ validation / eval
→ current state / next gate
```

Chat is an input and collaboration surface; GitHub is the system-of-record for accepted PCOS architecture evolution.

---

## 2026-08-30 — Context Inbox architecture added

Status: `0.1-DRAFT`

### Added

- `00_inbox/` as the non-authoritative staging layer for external articles, videos, books, conversations, ideas, and candidate insights.
- `00_system/context-intake-policy.md` defining extraction, classification, routing, deduplication, conflict checking, evidence assessment, impact assessment, and intake-card generation.
- `00_system/context-promotion-policy.md` defining REFERENCE → OBSERVE → ACTIVE_CANDIDATE → ACTIVE promotion and REJECTED/ARCHIVED exits.
- `00_system/context-intake-card-template.yaml` for auditable source-to-context decisions.
- Standard user-facing intake shortcut: **“喂给 PCOS”**.

### Changed

- Root architecture now separates Memory / Inbox / Context / Skill / Tools / Outputs.
- `context-routing.md` treats Inbox as a separate non-authoritative context class and excludes it from normal project execution unless explicitly needed.
- `write-policy.md` separates staging, promotion, and authoritative persistence.
- `context-manifest.yaml` now registers intake triggers, insight types, statuses, promotion gates, and non-authoritative Inbox behavior.
- Version lifecycle aligned to `DRAFT → TEST → RC → ACTIVE → DEPRECATED → ARCHIVED`.

### Governance rule

External material can be staged freely, but high-impact ACTIVE Context (including investment, legal, health, financial, security/privacy, and other consequential operating rules) may not be changed merely because a new source was ingested. Material behavior changes require promotion checks, versioning/evals where applicable, and explicit approval.

### Intended workflow

```text
New source
→ “喂给 PCOS”
→ Inbox analysis
→ Context Intake Card
→ user reviews recommendation
→ explicit update/promotion instruction
→ authoritative PCOS Context update
→ changelog/version/eval if material
```
