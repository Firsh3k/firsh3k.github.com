# Personal Context OS Evolution Log

This log records the major architectural transitions of PCOS. It is intentionally concise and decision-oriented; it is not a transcript archive.

---

## E-0001 — From long-running chat context to explicit Context OS

**Date:** 2026-08-30  
**Status:** ACCEPTED / IN VALIDATION  
**Release context:** `0.1-DRAFT`

### Previous state
Long-running projects primarily depended on chat history, user memory, external files, prompts, and Skills without a single explicit project-context architecture.

### Trigger / problem
- important project truth was distributed across conversations, Sheets/Drive, prompt registries, memory, and Skills;
- current state and historical context could be mixed;
- Skills risked becoming large containers of both workflow and knowledge;
- reloading entire histories was inefficient and could create stale-context errors.

### Decision
Create **Personal Context OS (PCOS)** with separation of:

`Memory + Context + Skill + Tools + Outputs`

and adopt the execution model:

`enter project → load correct Context → execute Skill → update State`.

### Resulting architecture
- global/system rules separated from project-local context;
- context routing and lazy loading;
- compact current state plus dated history/deltas;
- Skills own repeatable procedure, not long-lived project truth;
- GitHub sandbox branch created for architecture validation;
- A-share project selected as first Reference Implementation.

### Validation
A-share Friday 2026-08-28 structural/decision fixture regression: PASS. Full production replacement remains pending further validation.

### Next gate
Validate real next-session state transition and cross-report consistency before promotion beyond TEST/RC stages.

---

## E-0002 — A-share monolithic production logic refactored into Context + Skill

**Date:** 2026-08-30  
**Status:** TEST  
**Reference:** A-share PCOS project instance

### Previous state
A-share production logic was centered on the existing V3.4 prompt/Skill stack and Google Sheet/Drive source material.

### Trigger / problem
Need to preserve mature trading rules while reducing prompt bloat, separating current truth from workflow, and making state continuity auditable.

### Decision
Keep the current V3.4 production stack authoritative while building a read-only V4 Context-native challenger.

### Resulting architecture
- project manifest and routing contract;
- constitution / strategy / market state / sector / stock / portfolio / journal / eval layers;
- source-of-record remains Google Sheet/Drive for detailed history/raw data;
- GitHub stores durable rules, compact current state, deltas, versions, and eval fixtures;
- V4 Skill draft acts as Context-native orchestrator;
- TEST runs remain read-only by default.

### Validation
Friday Golden Fixture regression passed at structural + decision-semantic level. Raw screenshot replay, installed Skill runtime, persistence idempotency, and rollback validation remain open.

### Next gate
Monday real-data transition test → RC1 eligibility → shadow production/persistence tests → ACTIVE only after promotion gates pass.

---

## E-0003 — Context Inbox and controlled knowledge promotion added

**Date:** 2026-08-30  
**Status:** ACCEPTED  
**ADR:** `ADR-0001-context-inbox-and-promotion.md`

### Previous state
External articles, videos, books, ideas, and conversations had no standardized staging layer before entering PCOS knowledge or project Context.

### Trigger / problem
Useful external content should help PCOS learn, but a single article or opinion must not silently rewrite validated principles or high-impact operating rules.

### Decision
Add a non-authoritative **Context Inbox** and a controlled promotion pipeline.

### Resulting architecture

`source → Inbox → extract → classify → route → deduplicate → conflict/evidence/impact check → Context Intake Card → REFERENCE / OBSERVE / ACTIVE_CANDIDATE / REJECTED → explicit promotion → authoritative Context`

Standard user shortcut: **“喂给 PCOS”**.

### Governance
- source ≠ insight ≠ rule;
- Inbox content is excluded from normal project execution unless explicitly needed;
- high-impact ACTIVE Context cannot be directly activated from a new external source;
- material behavior changes require promotion/version/eval discipline.

### Next gate
Use real incoming material to validate intake-card quality, routing accuracy, deduplication, and promotion behavior.

---

## E-0004 — PCOS architecture evolution becomes a first-class system record

**Date:** 2026-08-30  
**Status:** ACCEPTED

### Previous state
PCOS had current architecture files and a root changelog, but the reasoning chain behind major architecture decisions could still remain primarily in conversation history.

### Trigger / problem
The system needs to show not only its current form, but **where it came from, why it changed, what was superseded, what was validated, and what the next gate is**.

### Decision
Adopt a three-layer evolution record:

1. `CHANGELOG.md` — what changed;
2. `00_system/evolution/EVOLUTION-LOG.md` — chronological system transitions;
3. ADRs — why material architecture decisions were made.

### Resulting operating rule
Material architecture decisions originating in chat are distilled into GitHub records. Chat is an input surface, not the architecture system-of-record.

### Next gate
Apply this recording discipline to every subsequent material PCOS architecture or governance change.
