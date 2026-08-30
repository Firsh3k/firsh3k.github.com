# A股 Data Map

Version: 4.0-draft.1  
Purpose: tell the Context Router where current facts live without copying all source data into the Skill.

## Production Google Sheet

Spreadsheet: 《A股复盘总控台》

| Asset | Current role | V4 Context role |
|---|---|---|
| `提示词注册中心` | ACTIVE prompt/version source | strategy-version provenance / migration source only |
| `提示词变更日志` | prompt evolution | `12_versions` / decision provenance |
| Date sheets `YYYY-MM-DD` | frozen daily output/state | daily Market/Stock/Report snapshot and regression fixture |
| `历史总表` | cross-day stock records | historical retrieval corpus |
| Individual stock tabs | stock cards/history | stock current/history source |
| `投资思想库` | principles/hypotheses | Constitution source, preserving ACTIVE/OBSERVE/REJECTED |
| `指数成分映射表` | index identity | index-membership Context |
| `卖出操作记录` | actual sells | trading journal / sell review |
| `卖出复盘统计` | sell T+n outcomes | sell outcome research |
| `投资研究课堂_交易案例` | execution cases | lessons + eval corpus |
| `A股复盘与交易决策总工作流` | workflow reference | Skill/orchestration provenance |

## Current-day evidence

Priority governed by `00_manifest/source-priority.yaml`.

Core principle inherited from V3.4:
- current-day Drive/user chart package = primary same-day chart structure evidence where required;
- web/structured data = permitted fill/cross-check for reproducible history, official identity/events and public metrics;
- missing same-day required stock chart package cannot be silently replaced to upgrade trading qualification.

## Context persistence model

V4 does not need to duplicate every raw source into GitHub.

Use GitHub Context files for:
- stable rules;
- current compact state;
- state deltas;
- routing/source/version policies;
- frozen eval fixtures and regression results.

Use Google Sheet/Drive as source-of-record for:
- detailed daily reports;
- full stock historical rows;
- original transaction/history records;
- chart packages and supporting files.

This prevents the Context repository from becoming another uncontrolled copy of the entire production database.
