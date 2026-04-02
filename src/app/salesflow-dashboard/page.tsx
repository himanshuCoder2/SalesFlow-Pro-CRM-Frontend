import MobileShell from '@/components/MobileShell'
import Link from 'next/link'

const bars = [
  { label: 'Jan', pct: 25 }, { label: 'Feb', pct: 20 }, { label: 'Mar', pct: 85 },
  { label: 'Apr', pct: 33 }, { label: 'May', pct: 75 }, { label: 'Jun', pct: 60 },
]

const activity = [
  { icon: 'check_circle', bg: 'bg-emerald-50 text-emerald-600', title: 'Acme Corp Deal Closed', sub: '$24,500 • 2 hours ago' },
  { icon: 'hourglass_top', bg: 'bg-amber-50 text-amber-600', title: 'Stark Tech Negotiation', sub: '$120,000 • 5 hours ago' },
  { icon: 'person_add', bg: 'bg-primary/10 text-primary', title: 'New Lead: James Wu', sub: 'Velocity Media • just now' },
]

export default function SalesFlowDashboardPage() {
  return (
    <MobileShell>
      <header className="flex items-center justify-between px-6 pt-8 pb-4 bg-white shadow-sm">
        <div className="flex items-center gap-3">
          <div className="size-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold border-2 border-primary/20">AR</div>
          <div>
            <p className="text-xs text-slate-500 font-medium uppercase tracking-wider">Welcome back</p>
            <h1 className="text-lg font-bold">Alex Rivers</h1>
          </div>
        </div>
        <button className="relative p-2 rounded-full hover:bg-slate-100 transition-colors">
          <span className="material-symbols-outlined text-slate-600">notifications</span>
          <span className="absolute top-2 right-2 size-2 bg-red-500 rounded-full border-2 border-white"></span>
        </button>
      </header>

      <main className="flex-1 overflow-y-auto no-scrollbar px-6 py-6 space-y-6 pb-28">
        {/* Hero Revenue Card */}
        <section className="space-y-4">
          <div className="bg-primary p-6 rounded-xl shadow-lg shadow-primary/20 relative overflow-hidden">
            <div className="absolute -right-4 -top-4 size-24 bg-white/10 rounded-full blur-2xl"></div>
            <div className="relative z-10">
              <div className="flex justify-between items-start">
                <p className="text-white/80 font-medium">Total Revenue</p>
                <span className="flex items-center text-xs font-bold bg-white/20 text-white px-2 py-1 rounded-full">
                  <span className="material-symbols-outlined text-sm mr-1">trending_up</span>+12.5%
                </span>
              </div>
              <h2 className="text-4xl font-bold text-white mt-2 tracking-tight">$1.2M</h2>
              <p className="text-white/60 text-xs mt-4">Current Fiscal Year</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: 'handshake', label: 'Active Deals', value: '45', trend: '+4' },
              { icon: 'verified', label: 'Win Rate', value: '68%', trend: '+2%' },
            ].map(m => (
              <div key={m.label} className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
                <div className="flex items-center gap-2 mb-2">
                  <span className="material-symbols-outlined text-primary text-xl">{m.icon}</span>
                  <p className="text-slate-500 text-sm font-medium">{m.label}</p>
                </div>
                <div className="flex items-end gap-2">
                  <p className="text-2xl font-bold">{m.value}</p>
                  <p className="text-emerald-500 text-xs font-bold mb-1">{m.trend}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Bar Chart */}
        <section className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h3 className="font-bold">Monthly Sales</h3>
              <p className="text-xs text-slate-500">Revenue trend (Last 6 months)</p>
            </div>
            <Link href="/pipeline" className="text-primary text-sm font-semibold flex items-center">
              Details <span className="material-symbols-outlined text-sm">chevron_right</span>
            </Link>
          </div>
          <div className="flex items-end justify-between gap-3 px-1" style={{ height: '10rem' }}>
            {bars.map(b => (
              <div key={b.label} className="flex-1 flex flex-col items-center gap-2 h-full justify-end">
                <div
                  className={`w-full rounded-t-lg ${b.pct > 60 ? 'bg-primary' : 'bg-primary/40'}`}
                  style={{ height: `${b.pct}%` }}
                ></div>
                <span className="text-[10px] font-bold text-slate-400 uppercase">{b.label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Recent Activity */}
        <section className="space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="font-bold">Recent Activity</h3>
            <button className="text-xs text-slate-500 font-medium underline">View All</button>
          </div>
          <div className="space-y-3">
            {activity.map(a => (
              <div key={a.title} className="flex items-center justify-between p-4 bg-white rounded-xl border border-slate-200">
                <div className="flex items-center gap-3">
                  <div className={`size-10 rounded-lg flex items-center justify-center ${a.bg}`}>
                    <span className="material-symbols-outlined">{a.icon}</span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold">{a.title}</p>
                    <p className="text-xs text-slate-500">{a.sub}</p>
                  </div>
                </div>
                <span className="material-symbols-outlined text-slate-300">chevron_right</span>
              </div>
            ))}
          </div>
        </section>
      </main>
    </MobileShell>
  )
}
