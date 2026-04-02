# SalesFlow Pro CRM Frontend

A mobile-first CRM dashboard built with **Next.js 14**, **Tailwind CSS**, and **TypeScript**.

---

## 🚀 Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) — redirects to `/login`

> To see ALL pages at once: [http://localhost:3000/nav](http://localhost:3000/nav)

---

## 🗂️ Project Structure

```
salesflow-pro/
│
├── public/
│   └── fonts/                          # Self-hosted fonts (Inter + Material Symbols)
│       ├── inter-latin-*.woff2
│       └── material-symbols-outlined.woff2
│
├── src/
│   │
│   ├── app/                            # Next.js App Router — all pages live here
│   │   │
│   │   ├── (auth)
│   │   │   ├── login/page.tsx          # Login screen
│   │   │   └── register/page.tsx       # Registration screen
│   │   │
│   │   ├── (dashboards)
│   │   │   ├── dashboard/page.tsx      # Home dashboard (all roles)
│   │   │   ├── salesflow-dashboard/    # Revenue chart dashboard
│   │   │   ├── sales-exec/page.tsx     # Sales Executive dashboard
│   │   │   ├── manager/page.tsx        # Sales Manager dashboard
│   │   │   └── ceo/page.tsx            # CEO strategic dashboard
│   │   │
│   │   ├── (deals)
│   │   │   ├── deals/
│   │   │   │   ├── page.tsx            # Deals pipeline list
│   │   │   │   ├── detail/page.tsx     # Deal detail view
│   │   │   │   └── [id]/page.tsx       # Dynamic deal by ID
│   │   │   ├── edit-deal/page.tsx      # Edit deal form
│   │   │   ├── active-deals/page.tsx   # Active deals list
│   │   │   └── closed-leads/page.tsx   # Won deals portfolio
│   │   │
│   │   ├── (leads)
│   │   │   ├── leads/page.tsx          # Leads list with search & filter
│   │   │   └── create-lead/page.tsx    # Create new lead form
│   │   │
│   │   ├── (tasks)
│   │   │   ├── tasks/page.tsx          # Daily task list
│   │   │   └── task-detail/page.tsx    # Task detail with sub-tasks
│   │   │
│   │   ├── (analytics)
│   │   │   ├── pipeline/page.tsx       # Pipeline funnel analysis
│   │   │   ├── team-reports/page.tsx   # Regional team performance
│   │   │   └── incentives/page.tsx     # Commission & rewards
│   │   │
│   │   ├── (profile)
│   │   │   ├── profile/page.tsx        # User profile & stats
│   │   │   └── settings/page.tsx       # App settings
│   │   │
│   │   ├── (admin)
│   │   │   ├── admin/page.tsx          # Admin panel
│   │   │   ├── users/page.tsx          # User management
│   │   │   ├── team/page.tsx           # Team member cards
│   │   │   └── system-status/page.tsx  # Backend health monitor
│   │   │
│   │   ├── nav/page.tsx                # 🗺️ Navigation index (dev tool)
│   │   ├── layout.tsx                  # Root layout
│   │   ├── globals.css                 # Global styles + font-face declarations
│   │   └── page.tsx                    # Root → redirects to /login
│   │
│   ├── components/
│   │   ├── layout/
│   │   │   ├── MobileShell.tsx         # Page wrapper (max-w-md centered shell)
│   │   │   └── BottomNav.tsx           # Bottom navigation bar (5 tabs)
│   │   └── ui/
│   │       └── index.tsx               # All reusable UI components (StatCard, FAB, etc.)
│   │
│   ├── modules/                        # Module documentation
│   │   ├── auth/README.md
│   │   ├── deals/README.md
│   │   ├── leads/README.md
│   │   ├── tasks/README.md
│   │   ├── dashboard/README.md
│   │   ├── analytics/README.md
│   │   ├── admin/README.md
│   │   └── profile/README.md
│   │
│   ├── lib/
│   │   └── data.ts                     # Mock data (leads, deals, tasks, team)
│   │
│   ├── types/
│   │   └── index.ts                    # All TypeScript interfaces & types
│   │
│   └── constants/
│       └── index.ts                    # App-wide constants (nav items, stages, etc.)
│
├── tailwind.config.ts                  # Tailwind config + custom colors
├── tsconfig.json                       # TypeScript config
└── package.json
```

---

## 🎨 Design System

| Token | Value |
|-------|-------|
| Primary color | `#1152d4` |
| Background light | `#f6f6f8` |
| Background dark | `#101622` |
| Font | Inter (self-hosted) |
| Icons | Material Symbols Outlined (self-hosted) |
| Border radius | `0.75rem` (xl), `0.5rem` (lg) |
| Max width | `448px` (mobile-first shell) |

---

## 📱 All Pages (30 screens)

| # | Route | Module | Original Screen |
|---|-------|--------|-----------------|
| 1 | `/login` | Auth | login_1, login_2 |
| 2 | `/register` | Auth | registration_1, registration_2 |
| 3 | `/dashboard` | Dashboard | home |
| 4 | `/salesflow-dashboard` | Dashboard | salesflow_pro_dashboard |
| 5 | `/sales-exec` | Dashboard | sales_exec_dashboard_1, _2 |
| 6 | `/manager` | Dashboard | manager_dashboard |
| 7 | `/ceo` | Dashboard | ceo_dashboard_1, _2 |
| 8 | `/deals` | Deals | deals_1, deals_2 |
| 9 | `/deals/detail` | Deals | deal_details |
| 10 | `/deals/[id]` | Deals | deal_details (dynamic) |
| 11 | `/edit-deal` | Deals | edit_deal |
| 12 | `/active-deals` | Deals | active_deals |
| 13 | `/closed-leads` | Deals | closed_leads_portfolio |
| 14 | `/leads` | Leads | leads_1, leads_2 |
| 15 | `/create-lead` | Leads | create_lead |
| 16 | `/tasks` | Tasks | tasks |
| 17 | `/task-detail` | Tasks | task_details |
| 18 | `/pipeline` | Analytics | pipeline_analysis |
| 19 | `/team-reports` | Analytics | team_reports |
| 20 | `/incentives` | Analytics | incentives_rewards |
| 21 | `/profile` | Profile | profile_1, profile_2 |
| 22 | `/settings` | Profile | settings_1, settings_2 |
| 23 | `/admin` | Admin | admin_panel_1, admin_panel_2 |
| 24 | `/users` | Admin | user_management |
| 25 | `/team` | Admin | (team members) |
| 26 | `/system-status` | Admin | system_status_backend |
| 27 | `/nav` | Dev Tool | Navigation index |

---

## 🧩 Reusable Components

### Layout
| Component | Location | Used On |
|-----------|----------|---------|
| `MobileShell` | `components/layout/MobileShell.tsx` | All app pages |
| `BottomNav` | `components/layout/BottomNav.tsx` | All app pages |

### UI
| Component | Description | Used On |
|-----------|-------------|---------|
| `StatCard` | KPI metric card with icon + trend | Dashboard, Profile, CEO |
| `BadgePill` | Status label badge | Leads, Deals, Tasks |
| `SectionHeader` | Icon + title section divider | Forms, Settings |
| `FormField` | Labelled input field | Create Lead, Register, Edit Deal |
| `ProgressBar` | Animated progress bar | Profile, Manager, Incentives |
| `MenuLinkRow` | Chevron settings row | Settings, Profile |
| `Toggle` | On/off toggle switch | Settings |
| `EmptyState` | Dashed empty placeholder | Deals, Leads, Tasks |
| `PageHeader` | Sticky header with title | Deals, Leads, Tasks |
| `FAB` | Floating action button | Deals, Leads, Tasks, Users |

---

## 🔌 Adding Real Data

Replace mock data in `src/lib/data.ts` with real API calls.

All TypeScript types are defined in `src/types/index.ts`.

### Example API integration pattern:
```ts
// Before (mock)
import { deals } from '@/lib/data'

// After (real API)
const deals = await fetch('/api/deals').then(r => r.json())
```

---

## 🛠️ Tech Stack

| Tool | Version | Purpose |
|------|---------|---------|
| Next.js | 14.2 | App framework + routing |
| React | 18.3 | UI library |
| TypeScript | 5.4 | Type safety |
| Tailwind CSS | 3.4 | Utility-first styling |
| Material Symbols | 0.43 | Icon font (self-hosted) |
| Inter | via @fontsource | Body font (self-hosted) |

---

## 📝 Notes for Developers

1. **Fonts are self-hosted** — no Google Fonts CDN needed. Files are in `public/fonts/`
2. **All pages are static** — no server-side data fetching yet. Add your API calls in each page
3. **`/nav` route** — a developer-only navigation index showing all 30 pages
4. **Mobile-first** — all pages are designed for `max-w-md` (448px). The shell is centered on desktop
5. **Dark mode** — Tailwind dark mode classes are present throughout but toggle logic needs to be wired up
6. **Auth guard** — no middleware yet. Add `middleware.ts` to protect routes when integrating real auth
