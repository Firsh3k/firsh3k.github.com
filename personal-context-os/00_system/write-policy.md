# Write / Persistence Policy

Analysis, intake, promotion, and persistence are separate operations.

## Default

- Reading and reasoning may occur without mutating authoritative project state.
- External material may be staged in `00_inbox/` without becoming authoritative Context.
- Persist authoritative Context only when the project's write policy and the Context Promotion Policy permit it.
- Preserve history; do not silently overwrite prior dated states.

## Context Intake write pattern

Prefer:

`source → Inbox → Intake Card → recommendation → promotion decision → target Context update`

rather than:

`source → immediate ACTIVE Context overwrite`

An Inbox write is a staging action. It does not imply approval to change Strategy, Constitution, Current State, or other authoritative project rules.

## State update pattern

Prefer:

`previous state → delta → new current state`

rather than rewriting full history.

## Promotion update pattern

For material principle/strategy changes, prefer:

`current ACTIVE rule → candidate change → eval/conflict check → promotion decision → versioned ACTIVE rule + rollback reference`

## Recommended write targets

- `00_inbox/`: staged external material and candidate insights.
- `state/current.md`: latest compact truth.
- `state/daily/YYYY-MM-DD.md`: dated snapshot.
- `decisions/CHANGELOG.md`: rule/version decisions.
- `lessons/`: validated retrospective findings.
- `reports/`: generated outputs when retention is useful.
- `03_shared_knowledge/`: reusable reference knowledge/frameworks that pass intake checks.

## External systems

Writes to Google Drive, Sheets, GitHub, Calendar, email, or other external systems follow their own explicit-action rules. A completed analysis or Context Intake assessment does not imply permission to synchronize it externally.

When the user explicitly instructs PCOS itself to be updated, write only the approved/staged/promotion-eligible items and preserve provenance, status, effective date, and version information where applicable.
