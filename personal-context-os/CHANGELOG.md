# Personal Context OS Changelog

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
