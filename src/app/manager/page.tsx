'use client'
import { useState } from 'react'
import MobileShell from '@/components/MobileShell'

const tabs = ['This Week', 'This Month', 'This Quarter', 'Yearly']
const executives = [
  { rank: 1, initials: 'JS', name: 'Jordan Smith', revenue: '$450k', pct: 95, rankColor: 'text-primary' },
  { rank: 2, initials: 'RM', name: 'Riley Morgan', revenue: '$390k', pct: 82, rankColor: 'text-slate-400' },
  { rank: 3, initials: 'TV', name: 'Taylor Vance', revenue: '$310k', pct: 65, rankColor: 'text-slate-400' },
]
const approvals = [
  { title: 'Discount Request: 20%', sub: 'Acme Corp • $85,000 Deal', time: '2h ago', primary: 'Approve', secondary: 'Details' },
  { title: 'Contract Signature', sub: 'Globex Ltd • Enterprise Tier', time: '5h ago', primary: 'Sign', secondary: 'Review' },
]

export default function ManagerPage() {
  const [tab, setTab] = useState(1)
  return (
    <MobileShell>
      <header className="sticky top-0 z-10 bg-white border-b border-slate-200 px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="bg-primary p-2 rounded-lg text-white"><span className="material-symbols-outlined block">insights</span></div>
          <h1 className="text-xl font-bold tracking-tight">Manager Dashboard</h1>
        </div>
        <div className="flex gap-2">
          <button className="p-2 text-slate-500 hover:bg-slate-100 rounded-full relative">
            <span className="material-symbols-outlined">notifications</span>
            <span className="absolute top-2 right-2 h-2 w-2 rounded-full bg-red-500 border-2 border-white"></span>
          </button>
          <button className="p-2 text-slate-500 hover:bg-slate-100 rounded-full"><span className="material-symbols-outlined">calendar_today</span></button>
        </div>
      </header>
      <nav className="bg-white border-b border-slate-200 overflow-x-auto no-scrollbar">
        <div className="flex px-4 gap-6 whitespace-nowrap">
          {tabs.map((t, i) => (
            <button key={t} onClick={() => setTab(i)} className={`py-3 text-sm font-semibold border-b-2 transition-all ${i === tab ? 'border-primary text-primary' : 'border-transparent text-slate-500'}`}>{t}</button>
          ))}
        </div>
      </nav>
      <main className="flex-1 overflow-y-auto p-4 space-y-6 pb-28 no-scrollbar">
        <section className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wider">Team Quota Attainment</h3>
            <span className="text-primary font-bold">74% of Goal</span>
          </div>
          <div className="flex items-center gap-6">
            <div className="relative flex items-center justify-center">
              <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 96 96">
                <circle className="text-slate-100" cx="48" cy="48" fill="transparent" r="40" stroke="currentColor" strokeWidth="8"/>
                <circle className="text-primary" cx="48" cy="48" fill="transparent" r="40" stroke="currentColor" strokeDasharray="251.2" strokeDashoffset="65" strokeLinecap="round" strokeWidth="8"/>
              </svg>
              <span className="absolute text-xl font-bold">74%</span>
            </div>
            <div className="flex-1 space-y-1">
              <p className="text-2xl font-bold">$1.2M / $1.6M</p>
              <p className="text-sm text-slate-500">Target: $400k remaining this month</p>
              <div className="flex items-center gap-1 text-emerald-600 text-sm font-medium">
                <span className="material-symbols-outlined text-xs">trending_up</span>
                <span>12% higher than last month</span>
              </div>
            </div>
          </div>
        </section>
        <section className="grid grid-cols-2 gap-4">
          {[{label:'Avg Deal Size',value:'$42k',trend:'+5.2%'},{label:'Cycle Length',value:'18 Days',trend:'2 days faster'}].map(k => (
            <div key={k.label} className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
              <div className="text-slate-500 text-xs font-semibold mb-1 uppercase">{k.label}</div>
              <div className="text-2xl font-bold">{k.value}</div>
              <div className="flex items-center gap-1 text-emerald-600 text-xs mt-2">
                <span className="material-symbols-outlined text-[14px]">arrow_upward</span>{k.trend}
              </div>
            </div>
          ))}
        </section>
        <section className="space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-bold">Pending Approvals</h3>
            <span className="bg-primary/10 text-primary text-xs font-bold px-2 py-1 rounded-full">2 Actions Required</span>
          </div>
          {approvals.map(a => (
            <div key={a.title} className="bg-white p-4 rounded-xl border-l-4 border-l-primary border border-slate-200 shadow-sm">
              <div className="flex justify-between items-start mb-2">
                <div><p className="font-bold">{a.title}</p><p className="text-xs text-slate-500">{a.sub}</p></div>
                <span className="text-[10px] text-slate-400 font-medium">{a.time}</span>
              </div>
              <div className="flex gap-2 mt-4">
                <button className="flex-1 bg-primary text-white text-sm font-bold py-2 rounded-lg">{a.primary}</button>
                <button className="flex-1 border border-slate-200 text-sm font-bold py-2 rounded-lg">{a.secondary}</button>
              </div>
            </div>
          ))}
        </section>
        <section className="space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-bold">Top Sales Executives</h3>
            <button className="text-primary text-sm font-semibold">See All</button>
          </div>
          <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm">
            {executives.map((e, i) => (
              <div key={e.name} className={`flex items-center gap-4 p-4 ${i < executives.length-1 ? 'border-b border-slate-100' : ''}`}>
                <div className={`font-bold w-4 ${e.rankColor}`}>{e.rank}</div>
                <div className="size-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">{e.initials}</div>
                <div className="flex-1 min-w-0">
                  <p className="font-bold truncate text-sm">{e.name}</p>
                  <p className="text-xs text-slate-500">{e.revenue} Revenue</p>
                  <div className="w-full bg-slate-100 h-1.5 rounded-full mt-2">
                    <div className="bg-emerald-500 h-1.5 rounded-full" style={{width:`${e.pct}%`}}></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </MobileShell>
  )
}
