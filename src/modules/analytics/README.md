# Analytics Module

Pipeline analysis and team performance reporting.

## Pages
| Route | File | Description |
|-------|------|-------------|
| `/pipeline` | `app/pipeline/page.tsx` | Visual sales funnel with stage conversion rates |
| `/team-reports` | `app/team-reports/page.tsx` | Regional team performance comparison |
| `/incentives` | `app/incentives/page.tsx` | Commission tiers, bonus progress, payout history |

## Pipeline Funnel Stages
```
Lead (100%) → Contacted (71%) → Proposal (47%) → Negotiation (38%) → Closed Won (53%)
```

## Components used
- `MobileShell` — page wrapper with bottom nav
- `StatCard` — summary metrics
- `ProgressBar` — quota and bonus progress
