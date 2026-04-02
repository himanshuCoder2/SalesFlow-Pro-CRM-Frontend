'use client'
import { useState } from 'react'
import Link from 'next/link'
import MobileShell from '@/components/MobileShell'

const stages = [
  { key: 'discovery', label: 'Discovery', icon: 'search' },
  { key: 'proposal', label: 'Proposal', icon: 'description' },
  { key: 'negotiation', label: 'Negotiation', icon: 'handshake' },
  { key: 'closing', label: 'Closing', icon: 'lock' },
]

export default function EditDealPage() {
  const [priority, setPriority] = useState('Medium')
  const [prob, setProb] = useState(65)
  const [stage, setStage] = useState('negotiation')

  return (
    <MobileShell>
      <header className="sticky top-0 z-10 flex items-center justify-between px-4 py-3 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <Link
          href="/deals/detail"
          className="flex items-center gap-1 text-slate-500 hover:text-slate-700 transition-colors"
        >
          <span className="material-symbols-outlined text-[20px]">close</span>
          <span className="text-sm font-medium">Cancel</span>
        </Link>
        <h1 className="text-lg font-semibold tracking-tight">Edit Deal</h1>
        <Link href="/deals/detail">
          <button className="bg-primary hover:bg-primary/90 text-white px-5 py-1.5 rounded-lg text-sm font-semibold transition-all shadow-sm shadow-primary/20">
            Save
          </button>
        </Link>
      </header>

      <main className="flex-1 p-4 space-y-8 overflow-y-auto no-scrollbar pb-20">
        {/* Section 1: Basics */}
        <section className="space-y-4">
          <div className="flex items-center gap-2 mb-2 text-primary">
            <span className="material-symbols-outlined text-[20px]">info</span>
            <h2 className="text-sm font-bold uppercase tracking-wider">
              Basic Information
            </h2>
          </div>
          <div className="space-y-4">
            <label className="block group">
              <span className="block text-sm font-semibold text-slate-700 mb-1.5 group-focus-within:text-primary transition-colors">
                Deal Name
              </span>
              <input
                className="w-full rounded-lg border border-slate-200 bg-white focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all px-4 py-3 outline-none"
                defaultValue="Enterprise SaaS Expansion"
              />
            </label>
            <div className="grid grid-cols-2 gap-4">
              <label className="block group">
                <span className="block text-sm font-semibold text-slate-700 mb-1.5">
                  Deal Value
                </span>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 material-symbols-outlined text-[20px]">
                    attach_money
                  </span>
                  <input
                    className="w-full rounded-lg border border-slate-200 bg-white focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all pl-10 pr-4 py-3 outline-none"
                    defaultValue="125000"
                    type="number"
                  />
                </div>
              </label>
              <label className="block group">
                <span className="block text-sm font-semibold text-slate-700 mb-1.5">
                  Company
                </span>
                <div className="relative">
                  <select className="w-full appearance-none rounded-lg border border-slate-200 bg-white focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all px-4 py-3 pr-10 outline-none cursor-pointer">
                    <option>Acme Corp</option>
                    <option>Globex Corporation</option>
                    <option>NexGen Solutions</option>
                    <option>Skyline Properties</option>
                  </select>
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none material-symbols-outlined text-[20px]">
                    unfold_more
                  </span>
                </div>
              </label>
            </div>
          </div>
        </section>

        {/* Section 2: Strategy */}
        <section className="space-y-4">
          <div className="flex items-center gap-2 mb-2 text-primary">
            <span className="material-symbols-outlined text-[20px]">bolt</span>
            <h2 className="text-sm font-bold uppercase tracking-wider">
              Strategy &amp; Priority
            </h2>
          </div>
          <div className="space-y-6">
            <div>
              <span className="block text-sm font-semibold text-slate-700 mb-3">
                Priority Level
              </span>
              <div className="flex p-1 bg-slate-100 rounded-xl gap-1">
                {["Low", "Medium", "High"].map((p) => (
                  <button
                    key={p}
                    onClick={() => setPriority(p)}
                    className={`flex-1 py-2 text-sm font-medium rounded-lg transition-all ${
                      priority === p
                        ? "bg-white text-primary shadow-sm ring-1 ring-slate-200 font-semibold"
                        : "text-slate-500 hover:bg-white/50"
                    }`}
                  >
                    {p}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-semibold text-slate-700">
                  Probability
                </span>
                <span className="text-sm font-bold text-primary bg-primary/10 px-2 py-0.5 rounded">
                  {prob}%
                </span>
              </div>
              <input
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-primary"
                max={100}
                min={0}
                type="range"
                value={prob}
                onChange={(e) => setProb(Number(e.target.value))}
              />
              <div className="flex justify-between mt-2 text-[10px] text-slate-400 font-medium px-1">
                {["0%", "25%", "50%", "75%", "100%"].map((v) => (
                  <span key={v}>{v}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Timeline & Status */}
        <section className="space-y-4">
          <div className="flex items-center gap-2 mb-2 text-primary">
            <span className="material-symbols-outlined text-[20px]">
              calendar_today
            </span>
            <h2 className="text-sm font-bold uppercase tracking-wider">
              Timeline &amp; Status
            </h2>
          </div>
          <div className="space-y-6">
            <label className="block group">
              <span className="block text-sm font-semibold text-slate-700 mb-1.5">
                Target Close Date
              </span>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 material-symbols-outlined text-[20px]">
                  event
                </span>
                <input
                  className="w-full rounded-lg border border-slate-200 bg-white focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all pl-12 pr-4 py-3 outline-none cursor-pointer"
                  type="date"
                  defaultValue="2024-12-15"
                />
              </div>
            </label>
            <div>
              <span className="block text-sm font-semibold text-slate-700 mb-3">
                Deal Stage
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {stages.map((s) => (
                  <button
                    key={s.key}
                    onClick={() => setStage(s.key)}
                    className={`flex flex-col items-center justify-center p-3 rounded-xl border-2 transition-all gap-1 ${
                      stage === s.key
                        ? "border-primary bg-primary/5"
                        : "border-slate-200 hover:border-primary/50"
                    }`}
                  >
                    <span
                      className={`material-symbols-outlined text-[20px] ${
                        stage === s.key ? "text-primary" : "text-slate-400"
                      }`}
                    >
                      {s.icon}
                    </span>
                    <span
                      className={`text-[11px] font-bold uppercase tracking-tight ${
                        stage === s.key
                          ? "text-primary"
                          : "font-medium text-slate-600"
                      }`}
                    >
                      {s.label}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Notes */}
        <section className="space-y-4 pb-4">
          <div className="flex items-center gap-2 mb-2 text-primary">
            <span className="material-symbols-outlined text-[20px]">notes</span>
            <h2 className="text-sm font-bold uppercase tracking-wider">
              Additional Notes
            </h2>
          </div>
          <label className="block group">
            <span className="block text-sm font-semibold text-slate-700 mb-1.5">
              Description
            </span>
            <textarea
              className="w-full rounded-lg border border-slate-200 bg-white focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all px-4 py-3 resize-none outline-none"
              rows={4}
              defaultValue="Expansion project for EMEA region. Initial contact made via Q3 conference. Stakeholders are particularly interested in the API integration features and regional compliance modules."
            />
          </label>
        </section>
      </main>

      <footer className="p-4 bg-slate-50 border-t border-slate-200 flex justify-end items-center">
        <p className="text-[11px] text-slate-400 font-medium italic">
          Last updated: Oct 24, 2023 at 2:14 PM
        </p>
      </footer>
    </MobileShell>
  );
}
