# Profile Module

User profile, account settings, and preferences.

## Pages
| Route | File | Description |
|-------|------|-------------|
| `/profile` | `app/profile/page.tsx` | Profile hero, performance stats, account menu |
| `/settings` | `app/settings/page.tsx` | Full settings — notifications, security, privacy |

## Settings Sections
1. **Account** — Edit profile, team management
2. **Notifications** — Push alerts, email digests (toggles)
3. **Security** — Change password, 2FA
4. **App Preferences** — Language, currency
5. **Data Privacy** — Export data, privacy policy

## Components used
- `MobileShell` — page wrapper with bottom nav
- `StatCard` — performance metrics grid
- `ProgressBar` — monthly quota progress
- `MenuLinkRow` — settings list rows
- `Toggle` — notification toggles
