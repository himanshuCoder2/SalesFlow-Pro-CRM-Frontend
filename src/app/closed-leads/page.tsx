'use client'
import { useState } from 'react'
import Link from 'next/link'
import MobileShell from '@/components/MobileShell'

const deals = [
  { initials: 'AC', name: 'Acme Corp', product: 'Enterprise SaaS Expansion', value: '$250,000' },
  { initials: 'GT', name: 'Global Tech', product: 'Infrastructure Modernization', value: '$85,000' },
  { initials: 'NS', name: 'NexGen Solutions', product: 'Security Suite Implementation', value: '$412,000' },
  { initials: 'SL', name: 'Skyline Properties', product: 'CRM & Analytics Platform', value: '$64,000' },
  { initials: 'VL', name: 'Velocity Logistics', product: 'Operations Automation', value: '$390,000' },
]

export default function ClosedLeadsPage() {
  const [search, setSearch] = useState('')
  const filtered = deals.filter(d => d.name.toLowerCase().includes(search.toLowerCase()))

  return (
    <MobileShell>
      <header className="flex items-center p-4 justify-between bg-white border-b border-slate-200 sticky top-0 z-10">
        <div className="flex items-center gap-3">
          <Link href="/dashboard" className="p-2 hover:bg-slate-100 rounded-full transition-colors">
            <span className="material-symbols-outlined text-slate-600">arrow_back</span>
          </Link>
          <h1 className="text-xl font-bold tracking-tight">Sales Portfolio</h1>
        </div>
        <button className="flex items-center justify-center p-2 hover:bg-slate-100 rounded-full transition-colors">
          <span className="material-symbols-outlined text-primary">share</span>
        </button>
      </header>

      {/* Summary Banner */}
      <section className="p-4 space-y-4">
        <div className="bg-primary/5 rounded-xl p-4 border border-primary/10">
          <div className="flex items-center gap-2 mb-3">
            <span className="material-symbols-outlined text-primary text-xl">workspace_premium</span>
            <p className="text-sm font-medium text-primary">Excellent progress this quarter!</p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded-lg shadow-sm border border-slate-100">
              <p className="text-xs font-medium text-slate-500 uppercase tracking-wider">Total Value Closed</p>
              <p className="text-2xl font-bold text-primary mt-1">$1.2M</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm border border-slate-100">
              <p className="text-xs font-medium text-slate-500 uppercase tracking-wider">Avg. Deal Cycle</p>
              <p className="text-2xl font-bold mt-1">45 Days</p>
            </div>
          </div>
        </div>
      </section>

      {/* Search */}
      <div className="px-4 py-2">
        <div className="relative flex items-center group">
          <span className="material-symbols-outlined absolute left-3 text-slate-400 group-focus-within:text-primary transition-colors">search</span>
          <input
            value={search} onChange={e => setSearch(e.target.value)}
            className="w-full bg-white border border-slate-200 rounded-lg py-3 pl-10 pr-4 text-sm focus:ring-2 focus:ring-primary focus:border-transparent outline-none placeholder:text-slate-400"
            placeholder="Search deals by industry or date"
          />
        </div>
      </div>

      <main className="flex-1 px-4 py-4 space-y-4 pb-28 overflow-y-auto no-scrollbar">
        <div className="flex items-center justify-between px-1">
          <h2 className="font-bold text-lg">Recent Successes</h2>
          <button className="text-primary text-sm font-semibold hover:underline">View All</button>
        </div>
        {filtered.map(deal => (
          <div key={deal.name} className="bg-white rounded-xl p-4 border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start mb-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">
                  {deal.initials}
                </div>
                <div>
                  <h3 className="font-bold">{deal.name}</h3>
                  <p className="text-xs text-slate-500">{deal.product}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-lg font-bold text-primary">{deal.value}</p>
                <p className="text-[10px] font-bold text-green-600 bg-green-50 px-2 py-0.5 rounded-full uppercase tracking-tight">Closed-Won</p>
              </div>
            </div>
            <div className="flex gap-2">
              <button className="flex-1 flex items-center justify-center gap-1 py-2 px-3 rounded-lg border border-primary text-primary text-xs font-bold hover:bg-primary/5 transition-colors">
                <span className="material-symbols-outlined text-sm">article</span>
                View Case Study
              </button>
              <button className="flex-1 flex items-center justify-center gap-1 py-2 px-3 rounded-lg border border-slate-200 text-slate-600 text-xs font-bold hover:bg-slate-50 transition-colors">
                <span className="material-symbols-outlined text-sm">chat_bubble</span>
                Testimonial
              </button>
            </div>
          </div>
        ))}
      </main>
    </MobileShell>
  )
}
