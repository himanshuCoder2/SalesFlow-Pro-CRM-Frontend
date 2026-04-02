# Leads Module

Manages lead tracking, scoring, and creation.

## Pages
| Route | File | Description |
|-------|------|-------------|
| `/leads` | `app/leads/page.tsx` | Lead list with search, filter by status, lead score |
| `/create-lead` | `app/create-lead/page.tsx` | Multi-section form to add a new lead |

## Lead Statuses
```
New → Contacted → Qualified → Cold
```

## Lead Score
- 0–49: Cold (grey bar)
- 50–74: Contacted (orange bar)
- 75–89: New (blue bar)
- 90–100: Qualified (green bar)

## Key Data Shape
```ts
interface Lead {
  id: string
  name: string
  company: string
  status: LeadStatus
  score: number        // 0–100
  email?: string
  phone?: string
  source?: string
}
```

## Components used
- `MobileShell` — page wrapper with bottom nav
- `FormField` — input fields in create form
- `SectionHeader` — form section titles
- `FAB` — floating "add lead" button
