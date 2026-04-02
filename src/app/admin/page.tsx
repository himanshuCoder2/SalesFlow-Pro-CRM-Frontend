'use client'
import { useState } from 'react'
import MobileShell from '@/components/MobileShell'

const adminTabs = ['Dashboard', 'User Access', 'Security Logs', 'Data Ops']
const systemHealth = [
  { label: 'API Uptime', value: '99.98%', good: true },
  { label: 'Avg Response', value: '124ms', good: true },
  { label: 'Error Rate', value: '0.02%', good: true },
  { label: 'Active Users', value: '1,248', good: true },
]
const recentLogs = [
  { user: 'Jane Cooper', action: 'Exported lead data (CSV)', time: '2 min ago', icon: 'download', iconClass: 'text-blue-600 bg-blue-50' },
  { user: 'Robert Fox', action: 'Failed login attempt (x3)', time: '15 min ago', icon: 'warning', iconClass: 'text-red-600 bg-red-50' },
  { user: 'System', action: 'Daily backup completed', time: '1 hour ago', icon: 'backup', iconClass: 'text-green-600 bg-green-50' },
  { user: 'Jacob Wilson', action: 'API key regenerated', time: '3 hours ago', icon: 'key', iconClass: 'text-primary bg-primary/10' },
]

export default function AdminPage() {
  const [tab, setTab] = useState(0)
  return (
    <MobileShell>
      <header className="sticky top-0 z-30 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="flex items-center justify-between px-4 py-3">
          <div className="flex items-center gap-3">
            <div className="bg-primary p-2 rounded-lg text-white"><span className="material-symbols-outlined text-2xl leading-none">admin_panel_settings</span></div>
            <h1 className="text-xl font-bold tracking-tight">Admin Panel</h1>
          </div>
          <div className="flex items-center gap-2">
            <button className="p-2 hover:bg-slate-100 rounded-full relative">
              <span className="material-symbols-outlined text-slate-600">notifications</span>
              <span className="absolute top-2 right-2 h-2 w-2 rounded-full bg-red-500"></span>
            </button>
            <div className="size-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-sm border border-primary/20">AR</div>
          </div>
        </div>
        <div className="px-4 pb-3">
          <div className="relative group">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">search</span>
            <input className="w-full pl-10 pr-4 py-2 bg-slate-100 border-none rounded-xl focus:ring-2 focus:ring-primary/50 text-sm outline-none" placeholder="Search users, logs, or API keys..." />
          </div>
        </div>
        <nav className="flex px-4 gap-6 overflow-x-auto no-scrollbar border-t border-slate-100">
          {adminTabs.map((t, i) => (
            <button key={t} onClick={() => setTab(i)} className={`py-3 text-sm font-semibold border-b-2 whitespace-nowrap transition-all ${i === tab ? 'border-primary text-primary' : 'border-transparent text-slate-500'}`}>{t}</button>
          ))}
        </nav>
      </header>

      <main className="p-4 pb-28 space-y-6 overflow-y-auto no-scrollbar">
        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-sm font-bold uppercase tracking-wider text-slate-500">System Health</h2>
            <span className="flex items-center gap-1 text-xs font-medium text-green-600 bg-green-50 px-2 py-1 rounded-full">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>All Systems Operational
            </span>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {systemHealth.map(s => (
              <div key={s.label} className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
                <span className="text-slate-400 text-xs font-medium">{s.label}</span>
                <div className="text-2xl font-bold mt-1">{s.value}</div>
                <div className="flex items-center gap-1 text-green-600 text-xs mt-2 font-medium">
                  <span className="material-symbols-outlined text-[14px]">check_circle</span>Healthy
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-sm font-bold uppercase tracking-wider text-slate-500">Recent Activity Logs</h2>
            <button className="text-primary text-xs font-bold">View All</button>
          </div>
          <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm">
            {recentLogs.map((log, i) => (
              <div key={i} className={`flex items-start gap-3 p-4 ${i < recentLogs.length-1 ? 'border-b border-slate-100' : ''}`}>
                <div className={`size-8 rounded-lg flex items-center justify-center shrink-0 ${log.iconClass}`}>
                  <span className="material-symbols-outlined text-sm">{log.icon}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold">{log.user}</p>
                  <p className="text-xs text-slate-500 truncate">{log.action}</p>
                </div>
                <span className="text-[10px] text-slate-400 font-medium whitespace-nowrap">{log.time}</span>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-sm font-bold uppercase tracking-wider text-slate-500 mb-4">Quick Actions</h2>
          <div className="grid grid-cols-2 gap-3">
            {[
              { icon: 'group_add', label: 'Invite User' },
              { icon: 'key', label: 'API Keys' },
              { icon: 'backup', label: 'Backup Data' },
              { icon: 'security', label: 'Security Audit' },
            ].map(a => (
              <button key={a.label} className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex flex-col items-start gap-3 hover:bg-primary/5 hover:border-primary/30 transition-all">
                <span className="material-symbols-outlined text-primary bg-primary/10 p-2 rounded-lg">{a.icon}</span>
                <span className="text-sm font-semibold">{a.label}</span>
              </button>
            ))}
          </div>
        </section>
      </main>
    </MobileShell>
  )
}
