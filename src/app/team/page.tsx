import MobileShell from '@/components/MobileShell'
import Link from 'next/link'
const members = [
  { initials: 'JM', name: 'Jessica Moore', role: 'Account Executive', deals: 14, revenue: '$320K', winRate: '72%', status: 'Active', statusColor: 'text-green-600', dot: 'bg-green-500' },
  { initials: 'RC', name: 'Robert Chang', role: 'Sales Rep', deals: 9, revenue: '$187K', winRate: '58%', status: 'Active', statusColor: 'text-green-600', dot: 'bg-green-500' },
  { initials: 'MS', name: 'Maria Santos', role: 'Sr. Account Exec', deals: 18, revenue: '$512K', winRate: '81%', status: 'Active', statusColor: 'text-green-600', dot: 'bg-green-500' },
  { initials: 'KB', name: 'Kevin Brown', role: 'Sales Rep', deals: 7, revenue: '$134K', winRate: '49%', status: 'On Leave', statusColor: 'text-amber-600', dot: 'bg-amber-500' },
]

export default function TeamPage() {
  return (
    <MobileShell>
      <header className="sticky top-0 z-10 bg-white border-b border-slate-200 px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-primary text-2xl">group</span>
            <h1 className="text-xl font-bold tracking-tight">My Team</h1>
          </div>
          <span className="bg-primary/10 text-primary text-xs font-bold px-2.5 py-1 rounded-full">{members.length} Members</span>
        </div>
      </header>

      <main className="flex-1 overflow-y-auto px-4 py-4 space-y-4 pb-28 no-scrollbar">
        {/* Summary */}
        <div className="grid grid-cols-3 gap-3">
          {[
            { label: 'Total Deals', value: '48' },
            { label: 'Avg Win Rate', value: '65%' },
            { label: 'Revenue', value: '$1.15M' },
          ].map(m => (
            <div key={m.label} className="bg-white p-3 rounded-xl border border-slate-200 shadow-sm text-center">
              <p className="text-lg font-bold text-primary">{m.value}</p>
              <p className="text-[10px] text-slate-500 font-medium mt-0.5">{m.label}</p>
            </div>
          ))}
        </div>

        {/* Team Cards */}
        {members.map(m => (
          <div key={m.name} className="bg-white rounded-xl border border-slate-200 shadow-sm p-4">
            <div className="flex items-center gap-4 mb-4">
              <div className="relative">
                <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary font-bold">{m.initials}</div>
                <span className={`absolute -bottom-0.5 -right-0.5 size-3 ${m.dot} rounded-full border-2 border-white`}></span>
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-slate-900">{m.name}</h3>
                <p className="text-xs text-slate-500">{m.role}</p>
              </div>
              <span className={`text-[10px] font-bold uppercase ${m.statusColor}`}>{m.status}</span>
            </div>
            <div className="grid grid-cols-3 gap-2 pt-3 border-t border-slate-100">
              <div className="text-center">
                <p className="text-sm font-bold">{m.deals}</p>
                <p className="text-[10px] text-slate-400">Deals</p>
              </div>
              <div className="text-center border-x border-slate-100">
                <p className="text-sm font-bold">{m.revenue}</p>
                <p className="text-[10px] text-slate-400">Revenue</p>
              </div>
              <div className="text-center">
                <p className="text-sm font-bold">{m.winRate}</p>
                <p className="text-[10px] text-slate-400">Win Rate</p>
              </div>
            </div>
          </div>
        ))}
      </main>

      <Link href="/create-team">
  <button className="fixed bottom-24 right-6 size-14 rounded-full bg-primary text-white shadow-xl shadow-primary/40 flex items-center justify-center z-30">
        <span className="material-symbols-outlined text-3xl">add</span>
      </button>
</Link>
    </MobileShell>
  )
}
