'use client'
import { useState } from 'react'
import Link from 'next/link'
import MobileShell from '@/components/MobileShell'

const stages = [
  { label: 'Negotiation', count: 8, value: '$845k' },
  { label: 'Proposal', count: 5, value: '$320k' },
  { label: 'Discovery', count: 12, value: '$1.2M' },
  { label: 'Closing', count: 3, value: '$150k' },
]

const deals = [
  { title: 'Enterprise SaaS Expansion', company: 'Acme Corp', value: '$125,000', prob: '80%', tag: 'High Priority', tagClass: 'bg-primary/10 text-primary', progress: 3, dueText: 'Oct 15, 2023', isUrgent: false },
  { title: 'Infrastructure Upgrade', company: 'Global Logistics Inc.', value: '$450,000', prob: '65%', tag: 'Risk Identified', tagClass: 'bg-amber-50 text-amber-600', progress: 2, dueText: 'Due in 2 days', isUrgent: true },
  { title: 'Data Center Migration', company: 'Nebula Systems', value: '$85,000', prob: '95%', tag: 'Closing Stage', tagClass: 'bg-emerald-50 text-emerald-600', progress: 4, dueText: 'Oct 28, 2023', isUrgent: false },
]

export default function DealsPage() {
  const [activeStage, setActiveStage] = useState(0)
  return (
    <MobileShell>
      <header className="sticky top-0 z-20 bg-white border-b border-slate-200 px-4 pt-6 pb-2">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="bg-primary/10 p-2 rounded-lg">
              <span className="material-symbols-outlined text-primary text-2xl">account_tree</span>
            </div>
            <h1 className="text-xl font-bold tracking-tight">Deals Pipeline</h1>
          </div>
          <div className="flex gap-2">
            <button className="p-2 hover:bg-slate-100 rounded-full"><span className="material-symbols-outlined text-slate-600">search</span></button>
            <button className="p-2 hover:bg-slate-100 rounded-full"><span className="material-symbols-outlined text-slate-600">filter_list</span></button>
          </div>
        </div>
        <div className="flex gap-6 overflow-x-auto no-scrollbar pb-1">
          {stages.map((s, i) => (
            <button key={s.label} onClick={() => setActiveStage(i)} className={`flex flex-col items-center min-w-fit border-b-2 pb-2 transition-all ${i === activeStage ? 'border-primary' : 'border-transparent opacity-50'}`}>
              <span className={`text-sm font-bold ${i === activeStage ? 'text-primary' : 'text-slate-600'}`}>{s.label} ({s.count})</span>
              <span className={`text-[10px] uppercase font-semibold ${i === activeStage ? 'text-primary/70' : 'text-slate-500'}`}>{s.value}</span>
            </button>
          ))}
        </div>
      </header>

      <div className="flex gap-3 px-4 py-4 bg-white border-b border-slate-200">
        <div className="flex-1 bg-primary/5 rounded-lg p-3 border border-primary/10">
          <p className="text-[10px] font-bold text-primary uppercase tracking-wider mb-1">Total Pipeline</p>
          <p className="text-lg font-bold">$845,000</p>
        </div>
        <div className="flex-1 bg-emerald-50 rounded-lg p-3 border border-emerald-100">
          <p className="text-[10px] font-bold text-emerald-600 uppercase tracking-wider mb-1">Exp. Revenue</p>
          <p className="text-lg font-bold">$676,000</p>
        </div>
      </div>

      <main className="flex-1 overflow-y-auto px-4 py-4 space-y-4 pb-28 no-scrollbar">
        {deals.map((d) => (
          <div key={d.title} className="bg-white rounded-xl p-4 shadow-sm border border-slate-200">
            <div className="flex justify-between items-start mb-2">
              <div className="flex-1">
                <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${d.tagClass} uppercase`}>{d.tag}</span>
                <h3 className="font-bold text-base leading-tight mt-1">{d.title}</h3>
                <p className="text-sm text-slate-500 mt-0.5">{d.company}</p>
              </div>
              <div className="text-right">
                <p className="text-lg font-bold text-primary">{d.value}</p>
                <p className="text-[11px] font-medium text-emerald-600">{d.prob} Prob.</p>
              </div>
            </div>
            <div className="flex gap-1 h-1.5 w-full bg-slate-100 rounded-full overflow-hidden my-4">
              {[1, 2, 3, 4].map((s) => (
                <div key={s} className={`flex-1 rounded-full ${s <= d.progress ? 'bg-primary' : 'bg-slate-200'}`}></div>
              ))}
            </div>
            <div className="flex items-center justify-between mt-4 pt-3 border-t border-slate-50">
              <div className={`flex items-center gap-1.5 text-xs font-medium ${d.isUrgent ? 'text-rose-500' : 'text-slate-500'}`}>
                <span className="material-symbols-outlined text-sm">{d.isUrgent ? 'priority_high' : 'calendar_today'}</span>
                {d.dueText}
              </div>
              <Link href="/deals/detail" className="bg-primary text-white px-3 py-1.5 rounded-lg text-xs font-bold">Manage</Link>
            </div>
          </div>
        ))}
        <div className="border-2 border-dashed border-slate-200 rounded-xl p-8 flex flex-col items-center text-center opacity-60">
          <span className="material-symbols-outlined text-4xl text-slate-300 mb-2">add_circle</span>
          <p className="text-sm font-medium text-slate-500">Add new deal to this stage</p>
        </div>
      </main>

      <button className="absolute bottom-24 right-6 w-14 h-14 bg-primary text-white rounded-xl shadow-lg shadow-primary/30 flex items-center justify-center z-30">
        <span className="material-symbols-outlined text-3xl">add</span>
      </button>
    </MobileShell>
  )
}
