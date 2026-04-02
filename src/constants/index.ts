// ─────────────────────────────────────────────
// App-wide Constants for SalesFlow Pro CRM
// ─────────────────────────────────────────────

// ── Brand Colors ──────────────────────────────
export const COLORS = {
  primary: '#1152d4',
  backgroundLight: '#f6f6f8',
  backgroundDark: '#101622',
} as const

// ── Navigation Items (Bottom Nav) ─────────────
export const NAV_ITEMS = [
  { href: '/dashboard',  icon: 'dashboard',      label: 'Home'    },
  { href: '/deals',      icon: 'payments',        label: 'Deals'   },
  { href: '/leads',      icon: 'group',           label: 'Leads'   },
  { href: '/tasks',      icon: 'check_circle',    label: 'Tasks'   },
  { href: '/profile',    icon: 'account_circle',  label: 'Profile' },
] as const

// ── Deal Stages ───────────────────────────────
export const DEAL_STAGES = [
  'Discovery',
  'Proposal',
  'Negotiation',
  'Closing',
] as const

// ── Lead Statuses ─────────────────────────────
export const LEAD_STATUSES = [
  'All',
  'New',
  'Contacted',
  'Qualified',
  'Cold',
] as const

// ── Task Filters ──────────────────────────────
export const TASK_FILTERS = [
  'All',
  'Calls',
  'Follow-ups',
  'Meetings',
] as const

// ── Priority Levels ───────────────────────────
export const PRIORITY_LEVELS = ['Low', 'Medium', 'High'] as const

// ── User Roles ────────────────────────────────
export const USER_ROLES = [
  'Sales Rep',
  'Sales Manager',
  'Account Executive',
  'CEO',
  'Admin',
] as const

// ── Pipeline Funnel Stages ────────────────────
export const PIPELINE_FUNNEL = [
  { label: 'Lead',        value: '$450,000', deals: '120 Deals', pct: '100%', width: '100%' },
  { label: 'Contacted',   value: '$320,000', deals: '85 Deals',  pct: '71%',  width: '92%'  },
  { label: 'Proposal',    value: '$180,000', deals: '40 Deals',  pct: '47%',  width: '84%'  },
  { label: 'Negotiation', value: '$95,000',  deals: '15 Deals',  pct: '38%',  width: '76%'  },
  { label: 'Closed Won',  value: '$52,000',  deals: '8 Deals',   pct: '53%',  width: '68%'  },
] as const
