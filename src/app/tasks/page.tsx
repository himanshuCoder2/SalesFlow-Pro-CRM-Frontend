"use client";
import { useState } from "react";
import Link from "next/link";
import MobileShell from "@/components/MobileShell";

const filters = ["All", "Calls", "Follow-ups", "Meetings"];

const initialTasks = [
  {
    id: 1,
    title: "Call Sarah Jenkins",
    desc: "Finalize Proposal for Q4 expansion",
    time: "10:30 AM",
    contact: "Sarah Jenkins",
    priority: "High Priority",
    priorityClass: "bg-red-100 text-red-600",
    icon: "person",
    completed: false,
  },
  {
    id: 2,
    title: "Follow up with Acme Corp",
    desc: "Confirm receipt of signed contract",
    time: "1:00 PM",
    contact: "Acme Corp",
    priority: "Medium",
    priorityClass: "bg-orange-100 text-orange-600",
    icon: "business",
    completed: false,
  },
  {
    id: 3,
    title: "Demo with Tech Solutions",
    desc: "Initial platform walkthrough",
    time: "Done at 9:15 AM",
    contact: "",
    priority: "Completed",
    priorityClass: "bg-slate-200 text-slate-500",
    icon: "history",
    completed: true,
  },
  {
    id: 4,
    title: "Email Lead: James Wu",
    desc: "Send price sheet and case studies",
    time: "3:45 PM",
    contact: "james.wu@gmail.com",
    priority: "Low",
    priorityClass: "bg-slate-100 text-slate-500",
    icon: "mail",
    completed: false,
  },
  {
    id: 5,
    title: "Quarterly Review Meeting",
    desc: "Internal team performance review",
    time: "5:00 PM",
    contact: "Team",
    priority: "High Priority",
    priorityClass: "bg-red-100 text-red-600",
    icon: "groups",
    completed: false,
  },
];

export default function TasksPage() {
  const [tasks, setTasks] = useState(initialTasks);
  const [filter, setFilter] = useState("All");
  const completed = tasks.filter((t) => t.completed).length;
  const pct = Math.round((completed / tasks.length) * 100);

  const toggle = (id: number) =>
    setTasks((ts) =>
      ts.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    );

  return (
    <MobileShell>
      <header className="sticky top-0 z-20 bg-white/80 backdrop-blur-md border-b border-slate-200 p-4">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">Daily Tasks</h1>
            <p className="text-sm text-slate-500">Tuesday, Oct 24</p>
          </div>
          <div className="flex gap-2">
            <button className="p-2 rounded-full hover:bg-slate-100">
              <span className="material-symbols-outlined text-slate-600">
                search
              </span>
            </button>
            <button className="p-2 rounded-full hover:bg-slate-100">
              <span className="material-symbols-outlined text-slate-600">
                notifications
              </span>
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-2 mb-2">
          <div className="flex justify-between items-end">
            <span className="text-sm font-semibold text-primary">
              {completed} of {tasks.length} Completed
            </span>
            <span className="text-xs text-slate-400 font-medium">{pct}%</span>
          </div>
          <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
            <div
              className="h-full bg-primary rounded-full transition-all duration-500"
              style={{ width: `${pct}%` }}
            ></div>
          </div>
        </div>
      </header>

      <div className="bg-white px-4 py-2 border-b border-slate-100 overflow-x-auto no-scrollbar">
        <div className="flex gap-2 items-center min-w-max">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 py-1.5 rounded-full text-sm font-semibold transition-all ${
                f === filter
                  ? "bg-primary text-white shadow-sm"
                  : "bg-slate-100 text-slate-600"
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      <main className="flex-1 overflow-y-auto px-4 py-2 space-y-3 pb-28 no-scrollbar">
        {tasks.map((t) => (
          <div
            key={t.id}
            className={`relative bg-white p-4 rounded-xl border shadow-sm transition-all ${
              t.completed
                ? "border-slate-100 opacity-60 bg-slate-50"
                : "border-slate-200 hover:border-primary/30"
            }`}
          >
            <div className="flex items-start gap-3">
              <div className="mt-1" onClick={() => toggle(t.id)}>
                {t.completed ? (
                  <div className="size-6 rounded bg-primary flex items-center justify-center border-2 border-primary cursor-pointer">
                    <span className="material-symbols-outlined text-white text-[16px]">
                      check
                    </span>
                  </div>
                ) : (
                  <div className="size-6 rounded border-2 border-slate-300 cursor-pointer hover:border-primary transition-colors"></div>
                )}
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-start mb-1">
                  <h3
                    className={`font-bold ${
                      t.completed
                        ? "line-through text-slate-400"
                        : "text-slate-900"
                    }`}
                  >
                    {t.title}
                  </h3>
                  <span
                    className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-tight ${t.priorityClass}`}
                  >
                    {t.priority}
                  </span>
                </div>
                <p className="text-sm text-slate-500 mb-2">{t.desc}</p>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1 text-xs text-slate-400">
                    <span className="material-symbols-outlined text-[14px]">
                      schedule
                    </span>
                    {t.time}
                  </div>
                  {t.contact && (
                    <div className="flex items-center gap-1 text-xs text-slate-400">
                      <span className="material-symbols-outlined text-[14px]">
                        {t.icon}
                      </span>
                      {t.contact}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </main>

      <Link href="/create-task">
        <button className="fixed bottom-24 right-6 size-14 rounded-full bg-primary text-white shadow-lg shadow-primary/40 flex items-center justify-center z-30">
          <span className="material-symbols-outlined text-3xl">add</span>
        </button>
      </Link>
    </MobileShell>
  );
}
