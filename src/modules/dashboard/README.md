# Dashboard Module

Role-based dashboards for different user types.

## Pages
| Route | File | Role | Description |
|-------|------|------|-------------|
| `/dashboard` | `app/dashboard/page.tsx` | All | Main home screen — KPIs, schedule, quick actions |
| `/salesflow-dashboard` | `app/salesflow-dashboard/page.tsx` | All | Revenue chart dashboard |
| `/sales-exec` | `app/sales-exec/page.tsx` | Sales Exec | Quota progress, commission, hot leads |
| `/manager` | `app/manager/page.tsx` | Manager | Team quota, approvals, leaderboard |
| `/ceo` | `app/ceo/page.tsx` | CEO | ARR, global map, AI strategic insights |

## Role → Dashboard Mapping
```
Sales Rep / Exec  ──► /sales-exec
Sales Manager     ──► /manager
CEO               ──► /ceo
Default / Home    ──► /dashboard
```

## Components used
- `MobileShell` — page wrapper with bottom nav
- `StatCard` — KPI metric cards
- `ProgressBar` — quota progress
