// ─────────────────────────────────────────────
// Reusable UI Components for SalesFlow Pro CRM
// Import from '@/components/ui'
// ─────────────────────────────────────────────

import { ReactNode } from 'react'

// ── StatCard ──────────────────────────────────
// Used on: Dashboard, Profile, CEO, Manager pages
interface StatCardProps {
  label: string
  value: string
  trend?: string
  trendUp?: boolean
  icon?: string
}
export function StatCard({ label, value, trend, trendUp = true, icon }: StatCardProps) {
  return (
    <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
      {icon && (
        <div className="flex items-center justify-between mb-2">
          <span className="material-symbols-outlined text-primary bg-primary/10 p-2 rounded-lg">
            {icon}
          </span>
          {trend && (
            <span className={`text-xs font-bold ${trendUp ? 'text-emerald-600' : 'text-red-500'}`}>
              {trend}
            </span>
          )}
        </div>
      )}
      <p className="text-slate-500 text-xs font-medium uppercase tracking-wider">{label}</p>
      <p className="text-2xl font-bold mt-1">{value}</p>
      {trend && !icon && (
        <div className={`flex items-center gap-1 text-xs font-bold mt-2 ${trendUp ? 'text-emerald-600' : 'text-red-500'}`}>
          <span className="material-symbols-outlined text-sm">
            {trendUp ? 'trending_up' : 'trending_down'}
          </span>
          {trend}
        </div>
      )}
    </div>
  )
}

// ── BadgePill ─────────────────────────────────
// Used on: Leads, Deals, Tasks pages for status labels
interface BadgePillProps {
  label: string
  className?: string
}
export function BadgePill({ label, className = 'bg-primary/10 text-primary' }: BadgePillProps) {
  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold uppercase tracking-wide ${className}`}>
      {label}
    </span>
  )
}

// ── SectionHeader ─────────────────────────────
// Used on: Create Lead, Edit Deal, Settings pages
interface SectionHeaderProps {
  icon: string
  title: string
}
export function SectionHeader({ icon, title }: SectionHeaderProps) {
  return (
    <div className="flex items-center gap-2 mb-4 text-primary">
      <span className="material-symbols-outlined text-[20px]">{icon}</span>
      <h2 className="text-sm font-bold uppercase tracking-wider">{title}</h2>
    </div>
  )
}

// ── FormField ─────────────────────────────────
// Used on: Create Lead, Register, Edit Deal pages
interface FormFieldProps {
  label: string
  placeholder: string
  type?: string
  required?: boolean
  defaultValue?: string
}
export function FormField({ label, placeholder, type = 'text', required = false, defaultValue }: FormFieldProps) {
  return (
    <div className="flex flex-col w-full">
      <label className="text-slate-700 text-sm font-semibold pb-1.5 ml-1">
        {label}{required && ' *'}
      </label>
      <input
        className="w-full rounded-lg border border-slate-200 bg-white text-slate-900 focus:border-primary focus:ring-1 focus:ring-primary h-12 px-4 text-base transition-all outline-none"
        placeholder={placeholder}
        type={type}
        defaultValue={defaultValue}
      />
    </div>
  )
}

// ── ProgressBar ───────────────────────────────
// Used on: Profile, Manager, Sales Exec pages
interface ProgressBarProps {
  value: number
  max?: number
  color?: string
  height?: string
}
export function ProgressBar({ value, max = 100, color = 'bg-primary', height = 'h-2' }: ProgressBarProps) {
  const pct = Math.min(100, Math.round((value / max) * 100))
  return (
    <div className={`w-full bg-slate-100 rounded-full ${height} overflow-hidden`}>
      <div
        className={`${color} ${height} rounded-full transition-all duration-500`}
        style={{ width: `${pct}%` }}
      />
    </div>
  )
}

// ── MenuLinkRow ───────────────────────────────
// Used on: Settings, Profile pages
interface MenuLinkRowProps {
  icon: string
  label: string
  desc?: string
  href?: string
  danger?: boolean
}
export function MenuLinkRow({ icon, label, desc, href = '#', danger = false }: MenuLinkRowProps) {
  return (
    <a
      href={href}
      className="flex items-center justify-between px-4 py-4 hover:bg-slate-50 transition-colors group"
    >
      <div className="flex items-center gap-4">
        <div className={`size-10 rounded-lg flex items-center justify-center ${danger ? 'bg-red-50 text-red-500' : 'bg-primary/10 text-primary'}`}>
          <span className="material-symbols-outlined">{icon}</span>
        </div>
        <div>
          <p className={`text-sm font-semibold ${danger ? 'text-red-500' : ''}`}>{label}</p>
          {desc && <p className="text-xs text-slate-500">{desc}</p>}
        </div>
      </div>
      {!danger && (
        <span className="material-symbols-outlined text-slate-300 group-hover:text-primary transition-colors">
          chevron_right
        </span>
      )}
    </a>
  )
}

// ── Toggle ────────────────────────────────────
// Used on: Settings page
interface ToggleProps {
  defaultOn?: boolean
}
export function Toggle({ defaultOn = false }: ToggleProps) {
  // Note: for full interactivity, convert parent to 'use client' and use useState
  return (
    <div className={`w-11 h-6 rounded-full transition-colors relative ${defaultOn ? 'bg-primary' : 'bg-slate-200'}`}>
      <div className={`absolute top-[2px] h-5 w-5 rounded-full bg-white border border-gray-300 transition-transform ${defaultOn ? 'translate-x-5' : 'translate-x-[2px]'}`} />
    </div>
  )
}

// ── EmptyState ────────────────────────────────
// Used on: Deals, Leads, Tasks when list is empty
interface EmptyStateProps {
  icon?: string
  message?: string
}
export function EmptyState({ icon = 'add_circle', message = 'Nothing here yet' }: EmptyStateProps) {
  return (
    <div className="border-2 border-dashed border-slate-200 rounded-xl p-8 flex flex-col items-center text-center opacity-60">
      <span className="material-symbols-outlined text-4xl text-slate-300 mb-2">{icon}</span>
      <p className="text-sm font-medium text-slate-500">{message}</p>
    </div>
  )
}

// ── PageHeader ────────────────────────────────
// Sticky page header with title, icon, and optional actions
interface PageHeaderProps {
  title: string
  icon?: string
  children?: ReactNode
}
export function PageHeader({ title, icon, children }: PageHeaderProps) {
  return (
    <header className="sticky top-0 z-20 bg-white border-b border-slate-200 px-4 py-4 flex items-center justify-between">
      <div className="flex items-center gap-3">
        {icon && (
          <div className="bg-primary/10 p-2 rounded-lg">
            <span className="material-symbols-outlined text-primary text-2xl">{icon}</span>
          </div>
        )}
        <h1 className="text-xl font-bold tracking-tight">{title}</h1>
      </div>
      {children && <div className="flex items-center gap-2">{children}</div>}
    </header>
  )
}

// ── FAB (Floating Action Button) ──────────────
// Used on: Deals, Leads, Tasks, Users pages
interface FABProps {
  icon?: string
  onClick?: () => void
}
export function FAB({ icon = 'add', onClick }: FABProps) {
  return (
    <button
      onClick={onClick}
      className="fixed bottom-24 right-6 size-14 bg-primary text-white rounded-xl shadow-lg shadow-primary/30 flex items-center justify-center z-30 hover:scale-105 active:scale-95 transition-transform"
    >
      <span className="material-symbols-outlined text-3xl">{icon}</span>
    </button>
  )
}
