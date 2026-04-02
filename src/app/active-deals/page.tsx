'use client'
import { useState } from 'react'
import MobileShell from '@/components/MobileShell'

const deals = [
  { company: 'Acme Corporation', product: 'Enterprise CRM Suite', value: '$45,000', stage: 'Negotiation', stageClass: 'bg-orange-100 text-orange-600', prob: 80, dueDate: 'Oct 28' },
  { company: 'Nebula Systems', product: 'Cloud Migration Package', value: '$120,000', stage: 'Proposal', stageClass: 'bg-blue-100 text-blue-600', prob: 60, dueDate: 'Nov 5' },
  { company: 'Global Logistics', product: 'Logistics Automation', value: '$67,500', stage: 'Closing', stageClass: 'bg-green-100 text-green-600', prob: 95, dueDate: 'Oct 20' },
  { company: 'Skyline Properties', product: 'Real Estate CRM', value: '$28,000', stage: 'Discovery', stageClass: 'bg-slate-100 text-slate-600', prob: 40, dueDate: 'Nov 15' },
]

export default function ActiveDealsPage() {
  const [search, setSearch] = useState('')
  const filtered = deals.filter(d => d.company.toLowerCase().includes(search.toLowerCase()))
  return (
    <MobileShell>
      <header className="sticky top-0 z-20 bg-white/80 backdrop-blur-md border-b border-slate-200 px-4 pt-6 pb-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-primary/10 rounded-lg"><span className="material-symbols-outlined text-primary">handshake</span></div>
            <h1 className="text-xl font-bold tracking-tight">Active Deals</h1>
          </div>
          <button className="size-10 flex items-center justify-center rounded-full hover:bg-slate-100">
            <span className="material-symbols-outlined">more_vert</span>
          </button>
        </div>
        <div className="flex gap-2">
          <div className="relative flex-1">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-xl">search</span>
            <input value={search} onChange={e => setSearch(e.target.value)} className="w-full pl-10 pr-4 py-2.5 bg-slate-100 border-none rounded-xl focus:ring-2 focus:ring-primary text-sm outline-none" placeholder="Search deals, customers..." />
          </div>
          <button className="size-11 flex items-center justify-center bg-slate-100 rounded-xl">
            <span className="material-symbols-outlined text-slate-600">tune</span>
          </button>
        </div>
      </header>
      <div className="px-4 py-4 grid grid-cols-2 gap-3 bg-slate-50">
        <div className="bg-white p-3 rounded-xl border border-slate-100 shadow-sm">
          <p className="text-[10px] uppercase tracking-wider font-semibold text-slate-500 mb-1">Total Pipeline</p>
          <p className="text-lg font-bold text-primary">$260,500</p>
        </div>
        <div className="bg-white p-3 rounded-xl border border-slate-100 shadow-sm">
          <p className="text-[10px] uppercase tracking-wider font-semibold text-slate-500 mb-1">Active Deals</p>
          <p className="text-lg font-bold">{filtered.length}</p>
        </div>
      </div>
      <main className="flex-1 px-4 py-2 space-y-3 pb-28 overflow-y-auto no-scrollbar">
        {filtered.map(d => (
          <div key={d.company} className="bg-white border border-slate-200 p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start mb-3">
              <div>
                <h3 className="font-bold">{d.company}</h3>
                <p className="text-xs text-slate-500">{d.product}</p>
              </div>
              <span className={`px-2 py-1 text-[10px] font-bold rounded-lg uppercase ${d.stageClass}`}>{d.stage}</span>
            </div>
            <div className="flex justify-between items-end mb-3">
              <div>
                <span className="text-xs text-slate-400">Value</span>
                <div className="text-lg font-bold">{d.value}</div>
              </div>
              <div className="text-right">
                <span className="text-xs text-slate-400">Close</span>
                <div className="text-sm font-bold">{d.dueDate}</div>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-xs mb-1">
                <span className="text-slate-400">Win Probability</span>
                <span className={`font-bold ${d.prob >= 80 ? 'text-emerald-600' : d.prob >= 60 ? 'text-primary' : 'text-amber-600'}`}>{d.prob}%</span>
              </div>
              <div className="w-full bg-slate-100 rounded-full h-1.5">
                <div className={`h-1.5 rounded-full ${d.prob >= 80 ? 'bg-emerald-500' : d.prob >= 60 ? 'bg-primary' : 'bg-amber-400'}`} style={{width:`${d.prob}%`}}></div>
              </div>
            </div>
          </div>
        ))}
      </main>
    </MobileShell>
  )
}
