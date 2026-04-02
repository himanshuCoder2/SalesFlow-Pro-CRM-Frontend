'use client'
import { useState } from 'react'
import MobileShell from '@/components/MobileShell'

const teams = [
  { name: 'North America', lead: 'Jordan Smith', revenue: '$820k', quota: 92, deals: 34, trend: '+14%', up: true },
  { name: 'EMEA', lead: 'Riley Morgan', revenue: '$640k', quota: 78, deals: 28, trend: '+22%', up: true },
  { name: 'APAC', lead: 'Taylor Vance', revenue: '$390k', quota: 61, deals: 19, trend: '-3%', up: false },
  { name: 'LATAM', lead: 'Casey Jones', revenue: '$200k', quota: 45, deals: 10, trend: '+8%', up: true },
]

export default function TeamReportsPage() {
  const [period, setPeriod] = useState('Monthly')
  return (
    <MobileShell>
      <header className="sticky top-0 z-10 bg-background-light/80 backdrop-blur-md border-b border-primary/10">
        <div className="flex items-center p-4 justify-between max-w-xl mx-auto w-full">
          <button className="text-primary flex size-10 shrink-0 items-center justify-center">
            <span className="material-symbols-outlined text-2xl">menu</span>
          </button>
          <h1 className="text-lg font-bold flex-1 text-center">Team Performance</h1>
          <button className="relative flex items-center justify-center rounded-lg h-10 w-10 hover:bg-primary/10">
            <span className="material-symbols-outlined">notifications</span>
            <span className="absolute top-2 right-2 h-2 w-2 rounded-full bg-primary"></span>
          </button>
        </div>
      </header>
      <main className="flex-1 w-full max-w-xl mx-auto pb-28 overflow-y-auto no-scrollbar">
        <div className="px-4 py-4">
          <div className="flex h-11 items-center justify-center rounded-xl bg-slate-200 p-1">
            {['Monthly', 'Quarterly'].map(p => (
              <label key={p} onClick={() => setPeriod(p)} className={`flex cursor-pointer h-full grow items-center justify-center rounded-lg px-2 text-sm font-semibold transition-all ${p === period ? 'bg-white shadow-sm text-primary' : 'text-slate-600'}`}>{p}</label>
            ))}
          </div>
        </div>
        <div className="flex gap-4 px-4 overflow-x-auto no-scrollbar pb-2">
          {[{label:'Total Revenue',value:'$2.05M',trend:'+12.4%'},{label:'Avg. Quota %',value:'73.5%',trend:'+5.2%'}].map(m => (
            <div key={m.label} className="flex min-w-[160px] flex-1 flex-col gap-1 rounded-xl p-5 bg-white border border-slate-200 shadow-sm">
              <p className="text-slate-500 text-xs font-medium uppercase tracking-wider">{m.label}</p>
              <p className="text-2xl font-bold">{m.value}</p>
              <div className="flex items-center gap-1 text-emerald-600 text-xs font-bold">
                <span className="material-symbols-outlined text-sm">trending_up</span>{m.trend}
              </div>
            </div>
          ))}
        </div>
        <div className="px-4 pt-6 pb-3 flex items-center justify-between">
          <h2 className="text-xl font-bold">Regional Teams</h2>
          <button className="flex items-center gap-1 text-primary text-sm font-bold">
            <span className="material-symbols-outlined text-sm">sort</span>Sort
          </button>
        </div>
        <div className="px-4 space-y-4">
          {teams.map(t => (
            <div key={t.name} className="bg-white rounded-xl border border-slate-200 shadow-sm p-4">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h3 className="font-bold text-base">{t.name}</h3>
                  <p className="text-xs text-slate-500">Lead: {t.lead}</p>
                </div>
                <span className={`text-xs font-bold flex items-center gap-1 ${t.up ? 'text-emerald-600' : 'text-red-500'}`}>
                  <span className="material-symbols-outlined text-sm">{t.up ? 'trending_up' : 'trending_down'}</span>{t.trend}
                </span>
              </div>
              <div className="grid grid-cols-3 gap-2 mb-3">
                <div className="text-center">
                  <p className="text-xs text-slate-400">Revenue</p>
                  <p className="font-bold text-sm">{t.revenue}</p>
                </div>
                <div className="text-center">
                  <p className="text-xs text-slate-400">Quota</p>
                  <p className="font-bold text-sm">{t.quota}%</p>
                </div>
                <div className="text-center">
                  <p className="text-xs text-slate-400">Deals</p>
                  <p className="font-bold text-sm">{t.deals}</p>
                </div>
              </div>
              <div className="w-full bg-slate-100 rounded-full h-2">
                <div className={`h-2 rounded-full ${t.quota >= 80 ? 'bg-emerald-500' : t.quota >= 60 ? 'bg-primary' : 'bg-amber-400'}`} style={{width:`${t.quota}%`}}></div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </MobileShell>
  )
}
