// ─────────────────────────────────────────────
// Global TypeScript Types for SalesFlow Pro CRM
// ─────────────────────────────────────────────

export type LeadStatus = 'New' | 'Contacted' | 'Qualified' | 'Cold'

export type DealStage = 'Discovery' | 'Proposal' | 'Negotiation' | 'Closing'

export type Priority = 'Low' | 'Medium' | 'High'

export type UserRole = 'Sales Rep' | 'Sales Manager' | 'CEO' | 'Admin'

export type UserStatus = 'Active' | 'Away' | 'Offline' | 'On Leave'

export type TaskCategory = 'Calls' | 'Follow-ups' | 'Meetings' | 'Admin'

// ── Lead ──────────────────────────────────────
export interface Lead {
  id: string
  name: string
  initials: string
  company: string
  status: LeadStatus
  score: number
  color: string
  email?: string
  phone?: string
  source?: string
  priority?: Priority
  notes?: string
}

// ── Deal ──────────────────────────────────────
export interface Deal {
  id: string
  title: string
  company: string
  value: number
  probability: number
  stage: DealStage
  priority: string
  priorityColor: string
  stageProgress: number
  dueDate: string
  tag?: string | null
}

// ── Task ──────────────────────────────────────
export interface Task {
  id: string
  title: string
  description: string
  priority: Priority
  due: string
  completed: boolean
  category: TaskCategory
  contact?: string
}

// ── User / Team Member ────────────────────────
export interface TeamMember {
  id: string
  name: string
  initials?: string
  role: string
  deals: number
  revenue: string
  winRate: string
  status: UserStatus
}

// ── Schedule Item ─────────────────────────────
export interface ScheduleItem {
  id: string
  time: string
  period: 'AM' | 'PM'
  title: string
  company: string
  type: 'video' | 'location' | 'link'
  location?: string
  link?: string
  borderColor: string
  dimmed?: boolean
}

// ── KPI Card ──────────────────────────────────
export interface KPI {
  label: string
  value: string
  trend: string
  up: boolean
}
