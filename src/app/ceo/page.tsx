'use client'
import { useState } from 'react'
import MobileShell from '@/components/MobileShell'

const periodTabs = ['Real-time', 'QTD', 'YTD', 'All Time']
const kpis = [
  { label: 'ARR', value: '$42.5M', trend: '+12%', up: true },
  { label: 'YoY Growth', value: '24.8%', trend: '+2.1%', up: true },
  { label: 'Market Share', value: '18.4%', trend: 'vs Top Comp', up: null },
]
const insights = [
  { icon: 'rocket_launch', bg: 'bg-primary/5 border-primary/10', iconBg: 'bg-primary/20 text-primary', title: 'Expansion Opportunity: EMEA', desc: 'Sales velocity in Germany has increased by 40% this quarter. AI recommends reallocating 15% of the marketing budget to DACH region.' },
  { icon: 'warning', bg: 'bg-orange-500/5 border-orange-500/10', iconBg: 'bg-orange-500/20 text-orange-600', title: 'Churn Alert: Enterprise Tier', desc: 'Engagement drop detected in 3 major accounts. Strategic intervention required to maintain ARR targets for Q4.' },
  { icon: 'insights', bg: 'bg-green-500/5 border-green-500/10', iconBg: 'bg-green-500/20 text-green-600', title: 'Market Share Milestone', desc: 'Outperformed direct competitors in Southeast Asia for the third consecutive month. Momentum is high.' },
]

export default function CEOPage() {
  const [period, setPeriod] = useState(2)
  return (
    <MobileShell>
      <header className="sticky top-0 z-10 bg-background-light/80 backdrop-blur-md border-b border-primary/10">
        <div className="flex items-center justify-between p-4">
          <div className="flex items-center gap-3">
            <div className="size-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold border border-primary/20">CE</div>
            <div>
              <h1 className="text-lg font-bold leading-tight tracking-tight">CEO Dashboard</h1>
              <p className="text-xs font-medium text-slate-500 flex items-center gap-1">
                <span className="size-2 rounded-full bg-green-500 inline-block"></span>
                Live • Updated 2m ago
              </p>
            </div>
          </div>
          <button className="p-2 rounded-lg bg-white border border-primary/10 shadow-sm text-primary">
            <span className="material-symbols-outlined">calendar_today</span>
          </button>
        </div>
        <div className="px-4">
          <div className="flex border-b border-primary/5 gap-6">
            {periodTabs.map((t, i) => (
              <button key={t} onClick={() => setPeriod(i)} className={`pb-3 pt-2 text-sm font-semibold border-b-2 transition-all ${i === period ? 'border-primary text-primary' : 'border-transparent text-slate-500'}`}>{t}</button>
            ))}
          </div>
        </div>
      </header>
      <main className="flex-1 pb-28 overflow-y-auto no-scrollbar">
        <section className="flex overflow-x-auto gap-4 p-4 no-scrollbar">
          {kpis.map(k => (
            <div key={k.label} className="flex min-w-[160px] flex-1 flex-col gap-2 rounded-xl p-5 bg-white border border-primary/5 shadow-sm">
              <p className="text-slate-500 text-xs font-semibold uppercase tracking-wider">{k.label}</p>
              <p className="text-2xl font-bold leading-tight">{k.value}</p>
              <div className={`flex items-center gap-1 text-sm font-bold ${k.up === true ? 'text-green-600' : k.up === false ? 'text-red-500' : 'text-primary'}`}>
                {k.up !== null && <span className="material-symbols-outlined text-sm">{k.up ? 'trending_up' : 'trending_down'}</span>}
                {k.trend}
              </div>
            </div>
          ))}
        </section>
        <section className="px-4 py-2">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-lg font-bold tracking-tight">Global Revenue Distribution</h3>
            <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-full">Top Region: EMEA</span>
          </div>
          <div className="w-full aspect-video rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/10 flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center opacity-20">
              <span className="material-symbols-outlined text-[120px] text-primary">public</span>
            </div>
            <div className="absolute bottom-3 left-3 flex flex-col gap-1">
              <div className="flex items-center gap-2"><span className="size-2 rounded-full bg-primary inline-block"></span><span className="text-[10px] font-bold text-primary uppercase">High Intensity</span></div>
              <div className="flex items-center gap-2"><span className="size-2 rounded-full bg-primary/30 inline-block"></span><span className="text-[10px] font-bold text-slate-500 uppercase">Emerging Market</span></div>
            </div>
          </div>
        </section>
        <section className="px-4 py-6">
          <div className="flex items-center gap-2 mb-4">
            <span className="material-symbols-outlined text-primary">auto_awesome</span>
            <h3 className="text-lg font-bold tracking-tight">Strategic Insights</h3>
          </div>
          <div className="space-y-3">
            {insights.map(ins => (
              <div key={ins.title} className={`flex gap-4 p-4 rounded-xl border ${ins.bg}`}>
                <div className={`shrink-0 size-8 rounded-lg flex items-center justify-center ${ins.iconBg}`}>
                  <span className="material-symbols-outlined text-xl">{ins.icon}</span>
                </div>
                <div className="flex-1">
                  <p className="text-sm font-bold mb-1">{ins.title}</p>
                  <p className="text-xs text-slate-600 leading-relaxed">{ins.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
        <section className="px-4 py-2 pb-8">
          <button className="w-full flex items-center justify-center gap-2 bg-primary text-white py-4 rounded-xl font-bold shadow-lg shadow-primary/20">
            <span className="material-symbols-outlined">ios_share</span>
            Share Strategic Report
          </button>
        </section>
      </main>
    </MobileShell>
  )
}
