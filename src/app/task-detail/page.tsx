'use client'
import { useState } from 'react'
import Link from 'next/link'
import MobileShell from '@/components/MobileShell'

const subtasks = [
  { label: 'Review initial draft', done: true },
  { label: 'Get legal sign-off on SLA', done: false },
  { label: 'Send final proposal to client', done: false },
]

const activity = [
  { type: 'comment', title: 'Sarah Jenkins added a comment', time: '2 hours ago', message: 'Please make sure to use the new branding guidelines in the proposal slide deck.', active: true },
  { type: 'status', title: 'You updated the status to IN PROGRESS', time: 'Yesterday at 4:30 PM', message: '', active: false },
  { type: 'created', title: 'Task was created', time: 'Oct 20, 2023', message: '', active: false },
]

export default function TaskDetailPage() {
  const [tasks, setTasks] = useState(subtasks)
  const [complete, setComplete] = useState(false)

  return (
    <MobileShell>
      <header className="sticky top-0 z-10 bg-background-light/80 backdrop-blur-md px-4 py-4 flex items-center justify-between border-b border-slate-200">
        <div className="flex items-center gap-3">
          <Link href="/tasks" className="flex items-center justify-center size-10 rounded-full hover:bg-primary/10 transition-colors text-slate-700">
            <span className="material-symbols-outlined">arrow_back</span>
          </Link>
          <h1 className="text-lg font-bold tracking-tight">Task Details</h1>
        </div>
        <button className="text-primary font-semibold text-sm px-3 py-1 hover:bg-primary/10 rounded-lg transition-colors">Edit</button>
      </header>

      <main className="flex-1 px-4 py-6 space-y-6 overflow-y-auto no-scrollbar pb-32">
        {/* Title & Badges */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold leading-tight">Finalize Proposal for Q4 expansion</h2>
          <div className="flex flex-wrap gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider">
              <span className="material-symbols-outlined text-[16px]">sync</span>In Progress
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-red-100 text-red-600 text-xs font-bold uppercase tracking-wider">
              <span className="material-symbols-outlined text-[16px]">priority_high</span>High Priority
            </span>
          </div>
        </section>

        {/* Due Date */}
        <section className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm border border-slate-200">
          <div className="size-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
            <span className="material-symbols-outlined">calendar_today</span>
          </div>
          <div>
            <p className="text-xs text-slate-500 font-medium">Due Date</p>
            <p className="text-sm font-semibold">Oct 24, 2023 • 2:00 PM</p>
          </div>
        </section>

        {/* Associated Contact */}
        <section className="space-y-3">
          <h3 className="text-sm font-bold uppercase tracking-widest text-slate-500">Associated Contact</h3>
          <div className="flex items-center justify-between p-4 bg-white rounded-xl shadow-sm border border-slate-200">
            <div className="flex items-center gap-3">
              <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold ring-2 ring-primary/20">SJ</div>
              <div>
                <p className="font-bold">Sarah Jenkins</p>
                <p className="text-xs text-slate-500">Account Executive, Acme Corp</p>
              </div>
            </div>
            <div className="flex gap-2">
              <button className="size-9 rounded-full bg-primary/10 text-primary flex items-center justify-center hover:bg-primary hover:text-white transition-all">
                <span className="material-symbols-outlined text-[20px]">call</span>
              </button>
              <button className="size-9 rounded-full bg-primary/10 text-primary flex items-center justify-center hover:bg-primary hover:text-white transition-all">
                <span className="material-symbols-outlined text-[20px]">mail</span>
              </button>
            </div>
          </div>
        </section>

        {/* Notes */}
        <section className="space-y-3">
          <h3 className="text-sm font-bold uppercase tracking-widest text-slate-500">Task Notes</h3>
          <div className="p-4 bg-white rounded-xl shadow-sm border border-slate-200">
            <p className="text-sm leading-relaxed text-slate-700 italic">
              &ldquo;Review the pricing tiers and ensure the SLA terms are updated for the new regional requirements. Double check the tax implications for the EMEA branch.&rdquo;
            </p>
          </div>
        </section>

        {/* Sub-Tasks */}
        <section className="space-y-3">
          <h3 className="text-sm font-bold uppercase tracking-widest text-slate-500">Sub-Tasks</h3>
          <div className="space-y-2">
            {tasks.map((t, i) => (
              <div key={t.label} className="flex items-center gap-3 p-3 bg-white rounded-xl border border-slate-200">
                <input
                  checked={t.done}
                  onChange={() => setTasks(prev => prev.map((x, j) => j === i ? { ...x, done: !x.done } : x))}
                  className="rounded border-slate-300 text-primary focus:ring-primary size-5 cursor-pointer"
                  type="checkbox"
                />
                <span className={`text-sm ${t.done ? 'text-slate-400 line-through' : 'text-slate-800 font-medium'}`}>{t.label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Activity Timeline */}
        <section className="space-y-3 pb-8">
          <h3 className="text-sm font-bold uppercase tracking-widest text-slate-500">Recent Activity</h3>
          <div className="relative pl-6 space-y-6 before:absolute before:left-2 before:top-2 before:bottom-2 before:w-0.5 before:bg-slate-200">
            {activity.map(a => (
              <div key={a.title} className="relative">
                <div className={`absolute -left-6 top-1.5 size-4 rounded-full border-2 border-white ring-4 ${a.active ? 'bg-primary ring-primary/10' : 'bg-slate-400 ring-transparent'}`}></div>
                <div className="space-y-1">
                  <p className="text-sm font-semibold text-slate-800">{a.title}</p>
                  <p className="text-xs text-slate-500">{a.time}</p>
                  {a.message && (
                    <div className="mt-2 p-3 bg-slate-100 rounded-lg text-sm text-slate-700">{a.message}</div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="fixed bottom-16 left-1/2 -translate-x-1/2 w-full max-w-md p-4 bg-background-light/95 backdrop-blur-md border-t border-slate-200 z-30">
        <button
          onClick={() => setComplete(!complete)}
          className={`w-full font-bold py-4 rounded-xl shadow-lg flex items-center justify-center gap-2 transition-all active:scale-[0.98] ${
            complete ? 'bg-emerald-500 shadow-emerald-500/25 text-white' : 'bg-primary shadow-primary/25 text-white'
          }`}
        >
          <span className="material-symbols-outlined">{complete ? 'task_alt' : 'check_circle'}</span>
          {complete ? 'Marked as Complete' : 'Mark as Complete'}
        </button>
      </footer>
    </MobileShell>
  )
}
