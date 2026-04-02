import MobileShell from '@/components/MobileShell'
import { deals } from '@/lib/data'
import Link from 'next/link'

export default function DealDetailPage({ params }: { params: { id: string } }) {
  const deal = deals.find((d) => d.id === params.id) ?? deals[0]

  const stages = ['Discovery', 'Proposal', 'Negotiation', 'Closing']
  const currentStageIndex = stages.indexOf(deal.stage)

  return (
    <MobileShell>
      <div className="flex-1 overflow-y-auto no-scrollbar pb-24">
        {/* Header */}
        <header className="sticky top-0 z-10 bg-white border-b border-slate-200 px-4 py-4 flex items-center gap-3">
          <Link
            href="/deals"
            className="p-2 hover:bg-slate-100 rounded-full transition-colors"
          >
            <span className="material-symbols-outlined text-slate-600">
              arrow_back
            </span>
          </Link>
          <h1 className="text-lg font-bold text-slate-900 flex-1">
            Deal Details
          </h1>
          <button className="p-2 hover:bg-slate-100 rounded-full transition-colors">
            <span className="material-symbols-outlined text-slate-600">
              more_vert
            </span>
          </button>
        </header>

        <div className="px-4 pt-6 space-y-5">
          {/* Deal hero */}
          <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm">
            <div className="flex justify-between items-start mb-3">
              <div>
                <span
                  className={`text-[10px] font-bold px-2 py-0.5 rounded uppercase ${deal.priorityColor}`}
                >
                  {deal.priority}
                </span>
                <h2 className="text-xl font-bold text-slate-900 mt-2">
                  {deal.title}
                </h2>
                <p className="text-slate-500 text-sm mt-1">{deal.company}</p>
              </div>
              <div className="text-right">
                <p className="text-2xl font-black text-primary">
                  ${deal.value.toLocaleString()}
                </p>
                <p className="text-sm font-semibold text-emerald-600">
                  {deal.probability}% probability
                </p>
              </div>
            </div>

            {/* Stage progress */}
            <div className="mt-4">
              <div className="flex justify-between mb-2">
                {stages.map((s, i) => (
                  <span
                    key={s}
                    className={`text-[10px] font-bold uppercase ${
                      i <= currentStageIndex ? "text-primary" : "text-slate-400"
                    }`}
                  >
                    {s}
                  </span>
                ))}
              </div>
              <div className="flex gap-1 h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                {stages.map((_, i) => (
                  <div
                    key={i}
                    className={`flex-1 rounded-full ${
                      i <= currentStageIndex ? "bg-primary" : "bg-slate-200"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Key info */}
          <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="px-5 py-4 border-b border-slate-100">
              <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
                Deal Information
              </h3>
            </div>
            {[
              { label: "Stage", value: deal.stage },
              { label: "Close Date", value: deal.dueDate },
              { label: "Deal Type", value: deal.tag ?? "Enterprise" },
              { label: "Account Owner", value: "Alex Rivera" },
              { label: "Created", value: "Sep 12, 2024" },
            ].map((row, i) => (
              <div
                key={i}
                className="flex justify-between px-5 py-3 border-b border-slate-50 last:border-0"
              >
                <span className="text-sm text-slate-500">{row.label}</span>
                <span className="text-sm font-semibold text-slate-900">
                  {row.value}
                </span>
              </div>
            ))}
          </div>

          {/* Activity */}
          <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="px-5 py-4 border-b border-slate-100">
              <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
                Recent Activity
              </h3>
            </div>
            {[
              {
                icon: "call",
                text: "Discovery call completed",
                time: "2 hours ago",
                color: "text-primary",
              },
              {
                icon: "mail",
                text: "Proposal sent via email",
                time: "Yesterday",
                color: "text-emerald-600",
              },
              {
                icon: "note",
                text: "Notes updated by Alex R.",
                time: "3 days ago",
                color: "text-amber-600",
              },
            ].map((act, i) => (
              <div
                key={i}
                className="flex items-start gap-3 px-5 py-3 border-b border-slate-50 last:border-0"
              >
                <div
                  className={`size-8 rounded-full bg-slate-50 flex items-center justify-center ${act.color}`}
                >
                  <span className="material-symbols-outlined text-[18px]">
                    {act.icon}
                  </span>
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-slate-900">
                    {act.text}
                  </p>
                  <p className="text-xs text-slate-400 mt-0.5">{act.time}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Action buttons */}
          <div className="grid grid-cols-2 gap-3 pb-4">
            <Link href="/edit-deal">
              <button className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg font-semibold text-sm shadow-lg shadow-primary/20">
                <span className="material-symbols-outlined text-sm">edit</span>
                Edit Deal
              </button>
            </Link>
            <button className="flex items-center justify-center gap-2 bg-white border border-slate-200 text-slate-700 py-3 rounded-xl font-semibold text-sm">
              <span className="material-symbols-outlined text-[20px]">
                note_add
              </span>{" "}
              Add Note
            </button>
          </div>
        </div>
      </div>
    </MobileShell>
  );
}
