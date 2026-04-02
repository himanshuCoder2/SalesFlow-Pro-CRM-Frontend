# Auth Module

Handles all authentication screens.

## Pages
| Route | File | Description |
|-------|------|-------------|
| `/login` | `app/login/page.tsx` | Sign in with email/password or SSO |
| `/register` | `app/register/page.tsx` | New user registration form |

## Flow
```
/login ──(success)──► /dashboard
/login ──(new user)──► /register
/register ──(success)──► /dashboard
```

## Components used
- No shared components (standalone pages, no shell/bottom nav)

## Notes
- Login supports Google and Office 365 SSO buttons (UI only)
- Both pages are public routes — no auth guard needed
