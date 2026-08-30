# Write / Persistence Policy

Analysis and persistence are separate operations.

## Default

- Reading and reasoning may occur without mutating project state.
- Persist only when the project's write policy permits it.
- Preserve history; do not silently overwrite prior dated states.

## State update pattern

Prefer:

`previous state → delta → new current state`

rather than rewriting full history.

## Recommended write targets

- `state/current.md`: latest compact truth.
- `state/daily/YYYY-MM-DD.md`: dated snapshot.
- `decisions/CHANGELOG.md`: rule/version decisions.
- `lessons/`: validated retrospective findings.
- `reports/`: generated outputs when retention is useful.

## External systems

Writes to Google Drive, Sheets, GitHub, Calendar, email, or other external systems follow their own explicit-action rules. A completed analysis does not imply permission to synchronize it externally.
