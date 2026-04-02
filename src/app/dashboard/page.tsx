'use client'
import Link from 'next/link'
import MobileShell from '@/components/MobileShell'

const kpis = [
  { label: 'Total Revenue', value: '$2.4M', trend: '+12%', up: true },
  { label: 'Win Rate', value: '68%', trend: '+5%', up: true },
  { label: 'Open Leads', value: '14', trend: '-2%', up: false },
  { label: 'Pipeline', value: '$3.2M', trend: '+8%', up: true },
]

const quickActions = [
  { icon: 'person_add', label: 'New Lead', href: '/leads', filled: true },
  { icon: 'call', label: 'Log Call', href: '#' },
  { icon: 'task_alt', label: 'Add Task', href: '/tasks' },
  { icon: 'mail', label: 'Email', href: '#' },
]

const schedule = [
  { time: '10:30', period: 'AM', title: 'Project Discovery Call', company: 'Acme Corp', color: 'border-primary', hasJoin: true, location: null, dim: false },
  { time: '02:15', period: 'PM', title: 'Contract Review Meeting', company: 'Global Tech Inc.', color: 'border-orange-400', hasJoin: false, location: 'Main Conference Room', dim: false },
  { time: '04:00', period: 'PM', title: 'Internal Sales Sync', company: 'sales-team-huddle', color: 'border-slate-300', hasJoin: false, location: null, dim: true },
]

export default function DashboardPage() {
  return (
    <MobileShell>
      <header className="flex items-center p-6 justify-between">
        <div className="flex items-center gap-3">
          <div className="relative">
            <div className="size-12 rounded-full border-2 border-primary/20 bg-primary/10 flex items-center justify-center text-primary font-bold">AR</div>
            <div className="absolute bottom-0 right-0 size-3 bg-green-500 rounded-full border-2 border-background-light"></div>
          </div>
          <div>
            <h2 className="text-slate-900 text-lg font-bold leading-tight">Good morning, Alex 🚀</h2>
            <p className="text-slate-500 text-sm font-medium">Enterprise Lead</p>
          </div>
        </div>
        <button className="flex items-center justify-center rounded-xl size-10 bg-white text-slate-900 shadow-sm border border-slate-200">
          <span className="material-symbols-outlined text-[24px]">notifications</span>
        </button>
      </header>

      <section className="px-6 mb-6">
        <div className="flex justify-between items-center mb-3">
          <h3 className="text-slate-900 text-sm font-bold uppercase tracking-wider">Performance</h3>
          <Link href="/pipeline" className="text-primary text-xs font-bold">View Details</Link>
        </div>
        <div className="flex gap-4 overflow-x-auto no-scrollbar pb-2">
          {kpis.map((k) => (
            <div key={k.label} className="flex min-w-[140px] flex-col gap-2 rounded-xl p-4 bg-white border border-slate-200 shadow-sm">
              <p className="text-slate-500 text-xs font-semibold">{k.label}</p>
              <p className="text-slate-900 text-xl font-bold">{k.value}</p>
              <p className={`${k.up ? 'text-green-600' : 'text-red-500'} text-xs font-bold flex items-center gap-1`}>
                <span className="material-symbols-outlined text-[14px]">{k.up ? 'trending_up' : 'trending_down'}</span>{k.trend}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 mb-8">
        <h3 className="text-slate-900 text-sm font-bold uppercase tracking-wider mb-4">Quick Actions</h3>
        <div className="grid grid-cols-4 gap-3">
          {quickActions.map((a) => (
            <Link key={a.label} href={a.href} className="flex flex-col items-center gap-2">
              <div className={`size-14 flex items-center justify-center rounded-2xl ${a.filled ? 'bg-primary text-white shadow-lg shadow-primary/20' : 'bg-white border border-slate-200 text-primary shadow-sm'}`}>
                <span className="material-symbols-outlined text-[28px]">{a.icon}</span>
              </div>
              <span className="text-slate-600 text-[11px] font-bold">{a.label}</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="px-6 pb-28">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-slate-900 text-sm font-bold uppercase tracking-wider">Today&apos;s Schedule</h3>
          <span className="text-slate-500 text-xs">Aug 24, 2024</span>
        </div>
        <div className="space-y-4">
          {schedule.map((s) => (
            <div key={s.title} className={`flex gap-4 p-4 rounded-xl bg-white border-l-4 ${s.color} shadow-sm ${s.dim ? 'opacity-60' : ''}`}>
              <div className="flex flex-col items-center justify-center min-w-[50px] border-r border-slate-100 pr-4">
                <span className="text-slate-900 font-bold text-sm">{s.time}</span>
                <span className="text-slate-400 text-[10px] font-bold uppercase">{s.period}</span>
              </div>
              <div className="flex-1">
                <h4 className="text-slate-900 font-bold text-sm mb-1">{s.title}</h4>
                <p className="text-slate-500 text-xs mb-2">{s.company}</p>
                {s.hasJoin && (
                  <button className="py-1.5 px-3 bg-primary text-white text-xs font-bold rounded-lg flex items-center gap-1">
                    <span className="material-symbols-outlined text-[16px]">video_call</span> Join Call
                  </button>
                )}
                {s.location && (
                  <div className="flex items-center gap-1 text-slate-500 text-[11px]">
                    <span className="material-symbols-outlined text-[14px]">location_on</span>{s.location}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </MobileShell>
  )
}
