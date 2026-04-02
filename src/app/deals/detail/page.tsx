'use client'
import Link from 'next/link'
import MobileShell from '@/components/MobileShell'

const stages = ['Discovery', 'Proposal', 'Negotiation', 'Closing']
const currentStage = 2

const contacts = [
  { initials: 'SJ', name: 'Sarah Jenkins', role: 'Decision Maker' },
  { initials: 'TH', name: 'Tom Hiddleston', role: 'Technical Lead' },
]

const activity = [
  { icon: 'description', iconBg: 'bg-primary text-white', title: 'Contract drafted', time: '2h ago', desc: 'V2 of SaaS agreement sent to legal' },
  { icon: 'call', iconBg: 'bg-primary/20 text-primary', title: 'Call logged', time: 'Yesterday', desc: 'Discussion regarding tiered pricing model' },
  { icon: 'mail', iconBg: 'bg-primary/20 text-primary', title: 'Email sent', time: 'Oct 10', desc: 'Follow up regarding integration capabilities' },
]

export default function DealDetailPage() {
  return (
    <MobileShell>
      <div className="sticky top-0 z-10 flex items-center bg-white/80 backdrop-blur-md p-4 border-b border-slate-200 justify-between">
        <div className="flex items-center gap-3">
          <Link
            href="/deals"
            className="text-slate-600 hover:bg-slate-100 p-1 rounded-lg"
          >
            <span className="material-symbols-outlined">arrow_back</span>
          </Link>
          <h1 className="text-sm font-semibold text-slate-500 uppercase tracking-wider">
            Deal Details
          </h1>
        </div>
        <div className="flex items-center gap-2">
          <button className="flex items-center justify-center rounded-lg h-10 w-10 bg-slate-100 text-slate-700">
            <span className="material-symbols-outlined">share</span>
          </button>
          <button className="flex items-center justify-center rounded-lg h-10 w-10 bg-slate-100 text-slate-700">
            <span className="material-symbols-outlined">more_vert</span>
          </button>
        </div>
      </div>

      <div className="overflow-y-auto no-scrollbar pb-32">
        {/* Hero */}
        <div className="p-6 bg-white border-b border-slate-200">
          <div className="flex items-start gap-4 mb-4">
            <div className="size-16 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
              <span className="material-symbols-outlined text-4xl">
                business
              </span>
            </div>
            <div>
              <h2 className="text-2xl font-bold leading-tight tracking-tight">
                Enterprise SaaS Expansion
              </h2>
              <div className="flex items-center gap-2 text-slate-500 mt-1">
                <span className="text-base font-medium">Acme Corp</span>
                <span className="size-1 rounded-full bg-slate-300"></span>
                <span className="text-sm">High Priority</span>
              </div>
            </div>
          </div>
          <div className="flex items-end justify-between">
            <div>
              <p className="text-slate-500 text-xs font-semibold uppercase tracking-widest">
                Deal Value
              </p>
              <p className="text-3xl font-bold text-primary">$125,000</p>
            </div>
            <Link href="/edit-deal">
              <button className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg font-semibold text-sm shadow-lg shadow-primary/20">
                <span className="material-symbols-outlined text-sm">edit</span>
                Edit Deal
              </button>
            </Link>
          </div>
        </div>

        {/* Stage Progress */}
        <div className="p-6 bg-white mt-2 border-y border-slate-200">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-sm font-bold uppercase tracking-widest text-slate-500">
              Current Stage
            </h3>
            <span className="px-2 py-1 bg-primary/10 text-primary text-xs font-bold rounded uppercase">
              Negotiation
            </span>
          </div>
          <div className="relative flex items-center justify-between">
            <div className="absolute left-0 top-1/2 -translate-y-1/2 h-1 w-full bg-slate-200 rounded-full"></div>
            <div className="absolute left-0 top-1/2 -translate-y-1/2 h-1 w-[75%] bg-primary rounded-full"></div>
            {stages.map((s, i) => (
              <div key={s} className="relative z-10 flex flex-col items-center">
                <div
                  className={`rounded-full flex items-center justify-center text-white ring-4 ring-white ${
                    i < currentStage
                      ? "size-6 bg-primary"
                      : i === currentStage
                      ? "size-8 bg-primary shadow-md"
                      : "size-6 bg-slate-200 text-slate-400"
                  }`}
                >
                  <span className="material-symbols-outlined text-sm">
                    {i < currentStage
                      ? "check"
                      : i === currentStage
                      ? "handshake"
                      : "flag"}
                  </span>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-between mt-3 text-[10px] font-bold text-slate-400 uppercase tracking-tighter">
            {stages.map((s, i) => (
              <span
                key={s}
                className={i === currentStage ? "text-primary" : ""}
              >
                {s}
              </span>
            ))}
          </div>
          <p className="mt-4 text-sm text-slate-600 flex items-center gap-2">
            <span className="material-symbols-outlined text-primary text-lg">
              info
            </span>
            Next step: Finalize contract signing by Friday.
          </p>
        </div>

        {/* Key Info Grid */}
        <div className="grid grid-cols-2 gap-3 p-4 mt-2">
          {[
            { label: "Deal Owner", value: "Alex Rivera" },
            { label: "Close Date", value: "Oct 24, 2023" },
            { label: "Probability", value: "75%", green: true },
            { label: "Lead Source", value: "Inbound Lead" },
          ].map((item) => (
            <div
              key={item.label}
              className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm"
            >
              <p className="text-xs font-semibold text-slate-500 uppercase">
                {item.label}
              </p>
              <p
                className={`text-sm font-bold mt-2 ${
                  item.green ? "text-emerald-600" : ""
                }`}
              >
                {item.value}
              </p>
            </div>
          ))}
        </div>

        {/* Contacts */}
        <div className="p-6 bg-white mt-2 border-y border-slate-200">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-bold uppercase tracking-widest text-slate-500">
              Contact Persons
            </h3>
            <button className="text-primary text-xs font-bold hover:underline">
              Add Contact
            </button>
          </div>
          <div className="space-y-4">
            {contacts.map((c) => (
              <div
                key={c.name}
                className="flex items-center justify-between bg-slate-50 p-3 rounded-lg border border-slate-100"
              >
                <div className="flex items-center gap-3">
                  <div className="size-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">
                    {c.initials}
                  </div>
                  <div>
                    <p className="text-sm font-bold">{c.name}</p>
                    <p className="text-xs text-slate-500">{c.role}</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button className="size-8 rounded-full bg-white flex items-center justify-center text-primary shadow-sm border border-slate-100">
                    <span className="material-symbols-outlined text-lg">
                      call
                    </span>
                  </button>
                  <button className="size-8 rounded-full bg-white flex items-center justify-center text-primary shadow-sm border border-slate-100">
                    <span className="material-symbols-outlined text-lg">
                      mail
                    </span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Activity */}
        <div className="p-6 bg-white mt-2 border-t border-slate-200">
          <h3 className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-6">
            Recent Activity
          </h3>
          <div className="relative space-y-6">
            <div className="absolute left-4 top-1 bottom-0 w-0.5 bg-slate-100"></div>
            {activity.map((a) => (
              <div
                key={a.title}
                className="relative flex items-start gap-4 pl-1"
              >
                <div
                  className={`z-10 size-6 rounded-full ${a.iconBg} flex items-center justify-center ring-4 ring-white`}
                >
                  <span className="material-symbols-outlined text-sm">
                    {a.icon}
                  </span>
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <p className="text-sm font-bold">{a.title}</p>
                    <span className="text-[10px] text-slate-400 font-medium">
                      {a.time}
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 mt-0.5">{a.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <button className="w-full mt-6 py-2 border-2 border-dashed border-slate-200 rounded-xl text-slate-400 text-xs font-bold hover:bg-slate-50 transition-colors">
            VIEW ALL ACTIVITY
          </button>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="fixed bottom-16 left-1/2 -translate-x-1/2 w-full max-w-md bg-white/90 backdrop-blur-md border-t border-slate-200 p-4 flex gap-3 z-30">
        <button className="flex-1 py-3 bg-slate-100 text-slate-700 rounded-xl font-semibold text-sm flex items-center justify-center gap-2">
          <span className="material-symbols-outlined text-sm">call</span>Log
          Activity
        </button>
        <button className="flex-1 py-3 bg-primary text-white rounded-xl font-semibold text-sm flex items-center justify-center gap-2 shadow-lg shadow-primary/20">
          <span className="material-symbols-outlined text-sm">
            arrow_forward
          </span>
          Advance Stage
        </button>
      </div>
    </MobileShell>
  );
}
