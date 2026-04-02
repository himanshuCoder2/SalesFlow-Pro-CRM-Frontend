'use client'
import MobileShell from '@/components/MobileShell'

const tiers = [
  { label: 'Bronze Tier', range: '$0 – $50k', color: 'bg-amber-700', pct: 100 },
  { label: 'Silver Tier', range: '$50k – $100k', color: 'bg-slate-400', pct: 75 },
  { label: 'Gold Tier', range: '$100k+', color: 'bg-yellow-400', pct: 30 },
]
const history = [
  { month: 'September 2024', amount: '$4,200', status: 'Paid', statusClass: 'bg-green-100 text-green-700' },
  { month: 'August 2024', amount: '$3,800', status: 'Paid', statusClass: 'bg-green-100 text-green-700' },
  { month: 'July 2024', amount: '$5,100', status: 'Paid', statusClass: 'bg-green-100 text-green-700' },
  { month: 'June 2024', amount: '$2,900', status: 'Paid', statusClass: 'bg-green-100 text-green-700' },
]

export default function IncentivesPage() {
  return (
    <MobileShell>
      <header className="flex items-center justify-between p-4 bg-white border-b border-slate-200 sticky top-0 z-10">
        <div className="flex items-center gap-3">
          <div className="size-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">AR</div>
          <div>
            <p className="text-xs text-slate-500">Welcome back,</p>
            <h1 className="text-sm font-bold">Alex Rivera</h1>
          </div>
        </div>
        <button className="p-2 text-slate-600 hover:bg-slate-100 rounded-lg relative">
          <span className="material-symbols-outlined">notifications</span>
          <span className="absolute top-2 right-2 size-2 bg-red-500 rounded-full border-2 border-white"></span>
        </button>
      </header>
      <main className="flex-1 overflow-y-auto no-scrollbar pb-28">
        <div className="grid grid-cols-2 gap-3 p-4">
          <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
            <p className="text-xs font-medium text-slate-500 mb-1">Total Earned YTD</p>
            <p className="text-xl font-bold text-primary">$42,500</p>
            <div className="mt-2 flex items-center text-[10px] text-emerald-600 font-medium">
              <span className="material-symbols-outlined text-xs mr-1">trending_up</span>+12% vs last year
            </div>
          </div>
          <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
            <p className="text-xs font-medium text-slate-500 mb-1">Next Payout</p>
            <p className="text-xl font-bold">Oct 15</p>
            <div className="mt-2 flex items-center text-[10px] text-slate-500 font-medium">
              <span className="material-symbols-outlined text-xs mr-1">calendar_today</span>In 12 days
            </div>
          </div>
        </div>

        <section className="px-4 mb-6">
          <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h2 className="text-base font-bold">Q3 Performance Bonus</h2>
                <p className="text-xs text-slate-500">Current progress towards $20k goal</p>
              </div>
              <span className="px-2 py-1 bg-primary/10 text-primary text-[10px] font-bold rounded uppercase tracking-wider">On Track</span>
            </div>
            <div className="mb-3">
              <div className="flex justify-between items-center mb-2">
                <span className="text-xs font-bold text-primary">75% Complete</span>
                <span className="text-xs font-bold text-slate-500">$15,000 / $20,000</span>
              </div>
              <div className="w-full bg-slate-100 rounded-full h-3">
                <div className="bg-primary h-3 rounded-full" style={{ width: '75%' }}></div>
              </div>
            </div>
            <p className="text-xs text-slate-500">You need <span className="font-bold text-slate-800">$5,000</span> more in closed revenue to unlock this bonus.</p>
          </div>
        </section>

        <section className="px-4 mb-6">
          <h2 className="text-base font-bold mb-3">Commission Tiers</h2>
          <div className="space-y-3">
            {tiers.map(t => (
              <div key={t.label} className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
                <div className="flex justify-between items-center mb-2">
                  <div className="flex items-center gap-2">
                    <span className={`size-3 rounded-full ${t.color}`}></span>
                    <span className="font-semibold text-sm">{t.label}</span>
                  </div>
                  <span className="text-xs text-slate-500">{t.range}</span>
                </div>
                <div className="w-full bg-slate-100 rounded-full h-2">
                  <div className={`${t.color} h-2 rounded-full`} style={{ width: `${t.pct}%` }}></div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="px-4 mb-6">
          <h2 className="text-base font-bold mb-3">Payout History</h2>
          <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm">
            {history.map((h, i) => (
              <div key={h.month} className={`flex items-center justify-between p-4 ${i < history.length-1 ? 'border-b border-slate-100' : ''}`}>
                <div>
                  <p className="font-semibold text-sm">{h.month}</p>
                  <p className="text-xs text-slate-500">Commission payout</p>
                </div>
                <div className="text-right">
                  <p className="font-bold text-sm">{h.amount}</p>
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded ${h.statusClass}`}>{h.status}</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </MobileShell>
  )
}
