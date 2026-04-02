# Admin Module

System administration, user management, and backend monitoring.

## Pages
| Route | File | Description |
|-------|------|-------------|
| `/admin` | `app/admin/page.tsx` | Admin panel — system health, logs, quick actions |
| `/users` | `app/users/page.tsx` | User list — roles, status, search and filter |
| `/system-status` | `app/system-status/page.tsx` | Backend telemetry — CPU, memory, service health |
| `/team` | `app/team/page.tsx` | Team member cards with stats |

## Access Level
These pages should only be accessible to users with `Admin` or `Manager` roles.
Add route protection middleware when integrating a real auth system.

## Components used
- `MobileShell` — page wrapper with bottom nav
- `StatCard` — system health metrics
- `FAB` — floating "invite user" button (users page)
