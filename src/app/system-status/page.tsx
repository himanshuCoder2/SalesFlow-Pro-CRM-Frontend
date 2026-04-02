'use client'
import { useState } from 'react'
import MobileShell from '@/components/MobileShell'

const services = [
  { name: 'API Gateway', status: 'Operational', uptime: '99.98%', latency: '45ms', statusColor: 'text-green-600 bg-green-50' },
  { name: 'Auth Service', status: 'Operational', uptime: '100%', latency: '12ms', statusColor: 'text-green-600 bg-green-50' },
  { name: 'Database Cluster', status: 'Operational', uptime: '99.95%', latency: '8ms', statusColor: 'text-green-600 bg-green-50' },
  { name: 'Email Service', status: 'Degraded', uptime: '97.2%', latency: '320ms', statusColor: 'text-amber-600 bg-amber-50' },
  { name: 'File Storage', status: 'Operational', uptime: '99.99%', latency: '28ms', statusColor: 'text-green-600 bg-green-50' },
  { name: 'Analytics Engine', status: 'Operational', uptime: '99.91%', latency: '180ms', statusColor: 'text-green-600 bg-green-50' },
]

const telemetry = [
  { label: 'CPU Usage', value: 42, unit: '%', color: 'bg-primary' },
  { label: 'Memory', value: 67, unit: '%', color: 'bg-violet-500' },
  { label: 'Disk I/O', value: 23, unit: '%', color: 'bg-emerald-500' },
  { label: 'Network', value: 78, unit: '%', color: 'bg-amber-500' },
]

const envs = ['Production', 'Staging', 'Sandbox']

export default function SystemStatusPage() {
  const [env, setEnv] = useState('Production')

  return (
    <MobileShell>
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="flex items-center p-4 justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-primary text-white p-2 rounded-lg">
              <span className="material-symbols-outlined block">terminal</span>
            </div>
            <div>
              <h1 className="text-lg font-bold leading-tight tracking-tight">SalesFlow Pro</h1>
              <p className="text-xs text-slate-500 font-medium">Backend Infrastructure Admin</p>
            </div>
          </div>
          <div className="flex items-center gap-2 px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-semibold">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            All Operational
          </div>
        </div>
      </header>

      <main className="flex-1 p-4 space-y-6 pb-28 overflow-y-auto no-scrollbar">
        {/* Environment Selector */}
        <div className="flex h-10 w-full items-center justify-center rounded-lg bg-slate-200 p-1">
          {envs.map(e => (
            <button
              key={e}
              onClick={() => setEnv(e)}
              className={`flex-1 h-full rounded-md px-2 text-sm font-medium transition-all ${e === env ? 'bg-white shadow-sm text-primary' : 'text-slate-600'}`}
            >{e}</button>
          ))}
        </div>

        {/* Controls */}
        <div className="flex items-center gap-2">
          <button className="flex items-center gap-2 bg-white border border-slate-200 px-4 py-2 rounded-lg text-sm font-medium hover:bg-slate-50 transition-colors flex-1 justify-center">
            <span className="material-symbols-outlined text-sm">refresh</span>Flush Cache
          </button>
          <button className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-lg text-sm font-medium flex-1 justify-center">
            <span className="material-symbols-outlined text-sm">restart_alt</span>Restart Services
          </button>
        </div>

        {/* Live Telemetry */}
        <section>
          <h2 className="text-sm font-bold uppercase tracking-wider text-slate-500 mb-4">Live System Telemetry</h2>
          <div className="grid grid-cols-2 gap-4">
            {telemetry.map(t => (
              <div key={t.label} className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
                <p className="text-xs font-semibold text-slate-500 mb-2">{t.label}</p>
                <p className="text-2xl font-bold mb-3">{t.value}{t.unit}</p>
                <div className="w-full bg-slate-100 rounded-full h-2">
                  <div className={`${t.color} h-2 rounded-full transition-all`} style={{ width: `${t.value}%` }}></div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Service Status */}
        <section>
          <h2 className="text-sm font-bold uppercase tracking-wider text-slate-500 mb-4">Service Status</h2>
          <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm">
            {services.map((s, i) => (
              <div key={s.name} className={`flex items-center justify-between p-4 ${i < services.length - 1 ? 'border-b border-slate-100' : ''}`}>
                <div>
                  <p className="font-semibold text-sm">{s.name}</p>
                  <div className="flex items-center gap-3 mt-1">
                    <span className="text-xs text-slate-400">Uptime: {s.uptime}</span>
                    <span className="text-xs text-slate-400">P99: {s.latency}</span>
                  </div>
                </div>
                <span className={`text-[10px] font-bold px-2 py-1 rounded-full ${s.statusColor}`}>{s.status}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Incident Log */}
        <section>
          <h2 className="text-sm font-bold uppercase tracking-wider text-slate-500 mb-4">Recent Incidents</h2>
          <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm">
            <div className="flex items-start gap-3 p-4 border-b border-slate-100">
              <span className="material-symbols-outlined text-amber-500 text-xl">warning</span>
              <div>
                <p className="text-sm font-semibold">Email Service Latency Spike</p>
                <p className="text-xs text-slate-500">Oct 24, 2023 at 14:32 UTC • Investigating</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4">
              <span className="material-symbols-outlined text-green-500 text-xl">check_circle</span>
              <div>
                <p className="text-sm font-semibold">Database maintenance completed</p>
                <p className="text-xs text-slate-500">Oct 23, 2023 at 02:00 UTC • Resolved</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </MobileShell>
  )
}
