import MobileShell from '@/components/MobileShell'

const hotLeads = [
  { letter: 'T', name: 'Tesla Retail Ops', sector: 'Energy Sector', value: '$24,000', lastActive: '12m ago', bg: 'bg-indigo-50 text-indigo-600' },
  { letter: 'R', name: 'Reddit HQ', sector: 'Social Media', value: '$18,200', lastActive: '1h ago', bg: 'bg-orange-50 text-orange-600' },
  { letter: 'S', name: 'Stripe Payments', sector: 'FinTech', value: '$32,800', lastActive: '3h ago', bg: 'bg-violet-50 text-violet-600' },
]

const todaySchedule = [
  { time: '2:00', period: 'PM', title: 'Product Demo: Acme Corp', sub: 'Sarah Jenkins • $12,500 Potential', icon: 'video_call', actionLabel: 'Join Demo', iconName: 'video_call' },
  { time: '4:15', period: 'PM', title: 'Follow-up Call: Globex', sub: 'Mark Thompson • Closing Stage', icon: 'phone_in_talk', actionLabel: 'Call Now', iconName: 'call' },
]

const recentActivity = [
  { icon: 'check_circle', iconBg: 'bg-emerald-50 text-emerald-600', title: 'Acme Corp Deal Closed', sub: '$24,500 • 2 hours ago' },
  { icon: 'hourglass_top', iconBg: 'bg-amber-50 text-amber-600', title: 'Stark Tech Negotiation', sub: '$120,000 • 5 hours ago' },
]

export default function SalesExecPage() {
  return (
    <MobileShell>
      <header className="sticky top-0 z-30 bg-background-light/80 backdrop-blur-md border-b border-slate-200">
        <div className="flex items-center justify-between px-4 h-16 max-w-lg mx-auto">
          <div className="flex items-center gap-3">
            <div className="size-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold border-2 border-primary/20">AH</div>
            <div>
              <p className="text-xs text-slate-500 font-medium">Welcome back,</p>
              <h1 className="text-sm font-bold tracking-tight">Alex Harrison</h1>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button className="size-10 flex items-center justify-center rounded-lg text-slate-600 hover:bg-slate-100 transition-colors">
              <span className="material-symbols-outlined">notifications</span>
            </button>
            <button className="size-10 flex items-center justify-center rounded-lg text-slate-600 hover:bg-slate-100 transition-colors">
              <span className="material-symbols-outlined">search</span>
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-lg mx-auto px-4 pt-6 space-y-6 pb-28 overflow-y-auto no-scrollbar">
        {/* Quota Progress */}
        <section className="space-y-4">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">Hi Alex, keep it up!</h2>
            <p className="text-slate-500 text-sm">You&apos;re 75% of the way to your June goal.</p>
          </div>
          <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
            <div className="flex justify-between mb-4">
              <span className="text-sm font-semibold text-slate-700">June Quota Progress</span>
              <span className="text-sm font-bold text-primary">$45,000 / $60,000</span>
            </div>
            <div className="w-full h-4 bg-slate-100 rounded-full overflow-hidden mb-3">
              <div className="h-full bg-primary rounded-full" style={{ width: '75%' }}></div>
            </div>
            <div className="flex justify-between items-center">
              <p className="text-xs text-slate-500 font-medium">
                <span className="text-primary font-bold">$15,000</span> remaining to goal
              </p>
              <span className="px-2 py-0.5 bg-primary/10 text-primary text-[10px] font-bold rounded uppercase tracking-wider">On Track</span>
            </div>
          </div>
        </section>

        {/* Commission Card */}
        <section>
          <div className="bg-primary p-6 rounded-xl shadow-lg shadow-primary/20 relative overflow-hidden">
            <div className="absolute -right-4 -top-4 size-24 bg-white/10 rounded-full blur-2xl"></div>
            <div className="relative z-10">
              <div className="flex justify-between items-start mb-4">
                <p className="text-white/80 text-sm font-medium">Commission Earned</p>
                <span className="material-symbols-outlined text-white/50">payments</span>
              </div>
              <div className="flex items-baseline gap-2 mb-2">
                <h3 className="text-4xl font-bold text-white tracking-tight">$4,250</h3>
                <span className="text-emerald-300 text-sm font-bold flex items-center">
                  <span className="material-symbols-outlined text-sm">trending_up</span>12%
                </span>
              </div>
              <p className="text-white/70 text-xs italic">&ldquo;Push for that extra $1k this week!&rdquo;</p>
            </div>
          </div>
        </section>

        {/* Today's Schedule */}
        <section className="space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-bold tracking-tight">Today&apos;s Focus</h3>
            <button className="text-primary text-xs font-bold hover:underline">View Calendar</button>
          </div>
          <div className="space-y-3">
            {todaySchedule.map(item => (
              <div key={item.title} className="flex gap-4 bg-white p-4 rounded-xl border border-slate-200">
                <div className="flex flex-col items-center justify-center border-r border-slate-100 pr-4">
                  <span className="text-xs font-bold text-slate-400 uppercase">{item.time}</span>
                  <span className="text-xs font-bold text-slate-400 uppercase">{item.period}</span>
                </div>
                <div className="flex-1">
                  <h4 className="text-sm font-bold mb-1">{item.title}</h4>
                  <p className="text-xs text-slate-500 mb-3 flex items-center gap-1">
                    <span className="material-symbols-outlined text-[14px]">{item.icon}</span>
                    {item.sub}
                  </p>
                  <button className="bg-primary text-white text-xs font-bold px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors flex items-center gap-2">
                    <span className="material-symbols-outlined text-sm">{item.iconName}</span>
                    {item.actionLabel}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Hot Leads */}
        <section className="space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-bold tracking-tight">Hot Leads</h3>
            <span className="bg-orange-100 text-orange-600 text-[10px] font-black px-2 py-0.5 rounded-full uppercase tracking-tighter">High Intent</span>
          </div>
          <div className="flex gap-4 overflow-x-auto pb-4 -mx-4 px-4 no-scrollbar">
            {hotLeads.map(lead => (
              <div key={lead.name} className="min-w-[240px] bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex-shrink-0">
                <div className="flex items-center gap-3 mb-4">
                  <div className={`size-10 rounded-lg flex items-center justify-center font-bold ${lead.bg}`}>{lead.letter}</div>
                  <div>
                    <h5 className="text-sm font-bold truncate">{lead.name}</h5>
                    <p className="text-[10px] font-medium text-slate-400 uppercase">{lead.sector}</p>
                  </div>
                </div>
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-xs">
                    <span className="text-slate-500">Deal Value</span>
                    <span className="font-bold">{lead.value}</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-slate-500">Last Active</span>
                    <span className="font-medium text-emerald-500">{lead.lastActive}</span>
                  </div>
                </div>
                <button className="w-full py-2 bg-slate-50 hover:bg-primary/10 hover:text-primary border border-slate-200 rounded-lg text-xs font-bold transition-all">
                  View Lead
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Recent Activity */}
        <section className="space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-bold">Recent Activity</h3>
            <button className="text-xs text-slate-500 font-medium underline">View All</button>
          </div>
          <div className="space-y-3">
            {recentActivity.map(a => (
              <div key={a.title} className="flex items-center justify-between p-4 bg-white rounded-xl border border-slate-200">
                <div className="flex items-center gap-3">
                  <div className={`size-10 rounded-lg flex items-center justify-center ${a.iconBg}`}>
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
