# Deals Module

Manages the full sales deal pipeline lifecycle.

## Pages
| Route | File | Description |
|-------|------|-------------|
| `/deals` | `app/deals/page.tsx` | Pipeline view — deals grouped by stage |
| `/deals/detail` | `app/deals/detail/page.tsx` | Full deal detail with contacts & activity |
| `/deals/[id]` | `app/deals/[id]/page.tsx` | Dynamic deal detail by ID |
| `/edit-deal` | `app/edit-deal/page.tsx` | Edit deal form (name, value, stage, probability) |
| `/active-deals` | `app/active-deals/page.tsx` | Flat list of all currently active deals |
| `/closed-leads` | `app/closed-leads/page.tsx` | Won deals portfolio / case studies |

## Deal Stages (in order)
```
Discovery → Proposal → Negotiation → Closing
```

## Key Data Shape
```ts
interface Deal {
  id: string
  title: string
  company: string
  value: number          // in USD
  probability: number    // 0-100
  stage: DealStage
  priority: string
  dueDate: string
}
```

## Components used
- `MobileShell` — page wrapper with bottom nav
- `StatCard` — summary stat display
- `EmptyState` — empty pipeline state
- `FAB` — floating "add deal" button
