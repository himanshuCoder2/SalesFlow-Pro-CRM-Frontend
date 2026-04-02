'use client'
import { useState } from 'react'
import MobileShell from '@/components/MobileShell'

const userTabs = ['All Users', 'Admins', 'Sales']
const users = [
  { initials: 'JC', name: 'Jane Cooper', role: 'Admin', status: 'Active', statusColor: 'text-green-600', dotColor: 'bg-green-500' },
  { initials: 'RF', name: 'Robert Fox', role: 'Sales Rep', status: 'Away', statusColor: 'text-amber-600', dotColor: 'bg-amber-500' },
  { initials: 'ES', name: 'Esther Simmons', role: 'Sales Manager', status: 'Active', statusColor: 'text-green-600', dotColor: 'bg-green-500' },
  { initials: 'JW', name: 'Jacob Wilson', role: 'Sales Rep', status: 'Offline', statusColor: 'text-slate-500', dotColor: 'bg-slate-400' },
  { initials: 'DM', name: 'Dianne Martin', role: 'Admin', status: 'Active', statusColor: 'text-green-600', dotColor: 'bg-green-500' },
]

export default function UsersPage() {
  const [activeTab, setActiveTab] = useState(0)
  const [search, setSearch] = useState('')
  const filtered = users.filter(u => u.name.toLowerCase().includes(search.toLowerCase()))

  return (
    <MobileShell>
      <header className="sticky top-0 z-20 bg-white border-b border-slate-200 px-4 pt-4 pb-2">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-primary text-2xl">group</span>
            <h1 className="text-xl font-bold tracking-tight">Team Members</h1>
          </div>
          <span className="bg-primary/10 text-primary text-xs font-bold px-2.5 py-1 rounded-full">24 Total</span>
        </div>
        <div className="flex gap-2">
          <div className="relative flex-1">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-xl">search</span>
            <input
              value={search} onChange={e => setSearch(e.target.value)}
              className="w-full bg-slate-100 border-none rounded-lg py-2.5 pl-10 pr-4 text-sm outline-none focus:ring-2 focus:ring-primary/50 placeholder:text-slate-400"
              placeholder="Search name, email, or role..."
            />
          </div>
          <button className="bg-slate-100 p-2.5 rounded-lg flex items-center justify-center">
            <span className="material-symbols-outlined text-slate-600">tune</span>
          </button>
        </div>
      </header>

      <nav className="flex border-b border-slate-200 px-4 bg-white">
        {userTabs.map((t, i) => (
          <button key={t} onClick={() => setActiveTab(i)} className={`px-4 py-3 text-sm font-semibold border-b-2 transition-all ${i === activeTab ? 'border-primary text-primary' : 'border-transparent text-slate-500'}`}>{t}</button>
        ))}
      </nav>

      <main className="flex-1 overflow-y-auto px-4 py-4 space-y-3 pb-28 no-scrollbar">
        {filtered.map(u => (
          <div key={u.name} className="flex items-center justify-between p-3 rounded-xl border border-slate-100 hover:bg-slate-50 transition-colors cursor-pointer group">
            <div className="flex items-center gap-4">
              <div className="relative">
                <div className="size-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary font-bold">{u.initials}</div>
                <span className={`absolute -bottom-1 -right-1 size-3.5 ${u.dotColor} border-2 border-white rounded-full`}></span>
              </div>
              <div>
                <h3 className="font-semibold text-sm">{u.name}</h3>
                <div className="flex items-center gap-2 mt-0.5">
                  <span className="text-xs text-slate-500">{u.role}</span>
                  <span className="size-1 bg-slate-300 rounded-full"></span>
                  <span className={`text-[10px] uppercase tracking-wider font-bold ${u.statusColor}`}>{u.status}</span>
                </div>
              </div>
            </div>
            <span className="material-symbols-outlined text-slate-300 group-hover:text-primary transition-colors">chevron_right</span>
          </div>
        ))}
      </main>

      <button className="fixed bottom-24 right-6 size-14 rounded-full bg-primary text-white shadow-xl shadow-primary/40 flex items-center justify-center z-30">
        <span className="material-symbols-outlined text-3xl">add</span>
      </button>
    </MobileShell>
  )
}
