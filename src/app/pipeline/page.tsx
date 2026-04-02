'use client'
import { useState } from 'react'
import Link from 'next/link'
import MobileShell from '@/components/MobileShell'

const periods = ['This Month', 'This Quarter', 'This Year']

const funnelStages = [
  { label: 'Lead', value: '$450,000', deals: '120 Deals', pct: '100% of pipeline', width: '100%', opacity: 'bg-primary', rounded: 'rounded-t-xl' },
  { label: 'Contacted', value: '$320,000', deals: '85 Deals', pct: '71% conversion', width: '92%', opacity: 'bg-primary/90', rounded: '' },
  { label: 'Proposal', value: '$180,000', deals: '40 Deals', pct: '47% conversion', width: '84%', opacity: 'bg-primary/80', rounded: '' },
  { label: 'Negotiation', value: '$95,000', deals: '15 Deals', pct: '38% conversion', width: '76%', opacity: 'bg-primary/70', rounded: '' },
  { label: 'Closed Won', value: '$52,000', deals: '8 Deals', pct: '53% conversion', width: '68%', opacity: 'bg-primary/60', rounded: 'rounded-b-xl' },
]

export default function PipelinePage() {
  const [period, setPeriod] = useState(0)

  return (
    <MobileShell>
      <header className="sticky top-0 z-10 bg-background-light/80 backdrop-blur-md border-b border-slate-200">
        <div className="flex items-center justify-between p-4">
          <div className="flex items-center gap-3">
            <Link href="/dashboard" className="p-2 hover:bg-slate-200 rounded-full">
              <span className="material-symbols-outlined">arrow_back</span>
            </Link>
            <h1 className="text-xl font-bold tracking-tight">Sales Pipeline</h1>
          </div>
          <button className="p-2 hover:bg-slate-200 rounded-full">
            <span className="material-symbols-outlined">filter_list</span>
          </button>
        </div>
      </header>

      <main className="flex-1 p-4 space-y-6 pb-28 overflow-y-auto no-scrollbar">
        <div className="flex p-1 bg-slate-200 rounded-xl">
          {periods.map((p, i) => (
            <button key={p} onClick={() => setPeriod(i)} className={`flex-1 py-2 text-sm font-medium rounded-lg transition-all ${i === period ? 'bg-white shadow-sm text-primary' : 'text-slate-500'}`}>{p}</button>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm">
            <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Avg. Sales Cycle</p>
            <div className="mt-2 flex items-baseline gap-2">
              <span className="text-2xl font-bold">24 Days</span>
              <span className="text-xs font-medium text-emerald-600 flex items-center">
                <span className="material-symbols-outlined text-sm">trending_down</span> 2%
              </span>
            </div>
            <p className="text-[10px] text-slate-400 mt-1">Faster than last month</p>
          </div>
          <div className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm">
            <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Conversion Rate</p>
            <div className="mt-2 flex items-baseline gap-2">
              <span className="text-2xl font-bold">18.5%</span>
              <span className="text-xs font-medium text-emerald-600 flex items-center">
                <span className="material-symbols-outlined text-sm">trending_up</span> 1.2%
              </span>
            </div>
            <p className="text-[10px] text-slate-400 mt-1">Improving trend</p>
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-bold">Pipeline Funnel</h2>
            <div className="flex gap-2">
              <button className="text-xs font-semibold px-3 py-1 bg-primary text-white rounded-full">Value</button>
              <button className="text-xs font-semibold px-3 py-1 bg-slate-200 text-slate-600 rounded-full">Volume</button>
            </div>
          </div>
          <div className="flex flex-col items-center gap-1 py-4">
            {funnelStages.map((s) => (
              <div key={s.label} className="w-full flex justify-center">
                <div style={{ width: s.width }} className={`${s.opacity} ${s.rounded} p-4 text-white flex items-center justify-between transition-all hover:brightness-110 cursor-pointer`}>
                  <div>
                    <p className="text-xs font-bold opacity-80 uppercase">{s.label}</p>
                    <p className="text-xl font-bold">{s.value}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium">{s.deals}</p>
                    <p className="text-[10px] opacity-70">{s.pct}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-primary/10 p-4 rounded-xl border border-primary/20">
          <div className="flex gap-3">
            <span className="material-symbols-outlined text-primary">lightbulb</span>
            <div>
              <h4 className="font-bold text-primary text-sm">Bottleneck Detected</h4>
              <p className="text-sm text-slate-700 mt-1 leading-relaxed">
                The conversion from <b>Proposal</b> to <b>Negotiation</b> is down by 12%. Consider reviewing the follow-up strategy for high-value leads.
              </p>
            </div>
          </div>
        </div>

        <button className="w-full py-4 bg-primary text-white font-bold rounded-xl shadow-lg shadow-primary/20 hover:opacity-90 transition-opacity">
          View Full Pipeline Report
        </button>
      </main>
    </MobileShell>
  )
}
