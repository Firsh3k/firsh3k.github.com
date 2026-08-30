# A股经验池前瞻验证台账

Purpose: accumulate lightweight prospective evidence for non-gating market-observation heuristics.

This is **not** a trading journal and does not authorize trades. Market Radar adds a row only when an experience-pool rule is materially triggered.

## Logging protocol

- D0: record exact trigger and canonical Market State.
- T+1 / T+3 / T+5: fill outcomes when those closes become available.
- `Expansion`: Yes / No / Ambiguous.
- `Direction`: Up / Down / Two-way / None.
- Keep failed and ambiguous cases; never curate only successful examples.

## Cases

| Case | D0 | Rule | Trigger evidence | D0 Market Gate | T+1 | T+3 | T+5 | Expansion | Direction | Notes |
|---|---|---|---|---|---|---|---|---|---|---|

## Review gate

Do not convert an experience heuristic into a formal Market State rule from anecdotes. Prefer reviewing after 20+ reasonably comparable cases, and test whether the heuristic adds information beyond existing R/A/D, breadth, turnover, technical and weekly/monthly evidence.
