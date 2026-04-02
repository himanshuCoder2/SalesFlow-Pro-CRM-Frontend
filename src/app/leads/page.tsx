"use client";
import { useState } from "react";
import Link from "next/link";
import MobileShell from "@/components/MobileShell";

const filters = ["All", "New", "Contacted", "Qualified", "Cold"];

const leads = [
  {
    initials: "AR",
    name: "Alex Rivera",
    company: "TechNova Solutions",
    status: "Qualified",
    statusClass: "bg-primary/10 text-primary",
    score: 92,
    barColor: "bg-emerald-500",
  },
  {
    initials: "SC",
    name: "Sarah Chen",
    company: "Global Logistics",
    status: "New",
    statusClass: "bg-slate-100 text-slate-600",
    score: 85,
    barColor: "bg-primary",
  },
  {
    initials: "MK",
    name: "Marcus King",
    company: "Skyline Real Estate",
    status: "Contacted",
    statusClass: "bg-slate-100 text-slate-600",
    score: 74,
    barColor: "bg-orange-400",
  },
  {
    initials: "JT",
    name: "Jordan Taylor",
    company: "Velocity Media",
    status: "Cold",
    statusClass: "bg-slate-100 text-slate-600",
    score: 42,
    barColor: "bg-slate-300",
  },
  {
    initials: "PM",
    name: "Priya Mehta",
    company: "FinTech Dynamics",
    status: "Qualified",
    statusClass: "bg-primary/10 text-primary",
    score: 88,
    barColor: "bg-emerald-500",
  },
];

export default function LeadsPage() {
  const [active, setActive] = useState("All");
  const [search, setSearch] = useState("");
  const filtered = leads.filter(
    (l) =>
      (active === "All" || l.status === active) &&
      (l.name.toLowerCase().includes(search.toLowerCase()) ||
        l.company.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <MobileShell>
      <header className="sticky top-0 z-20 bg-background-light/80 backdrop-blur-md px-4 pt-6 pb-2">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="bg-primary/10 p-2 rounded-lg text-primary">
              <span className="material-symbols-outlined">filter_list</span>
            </div>
            <h1 className="text-xl font-bold tracking-tight">Leads</h1>
          </div>
          <div className="size-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">
            AR
          </div>
        </div>
        <div className="relative w-full mb-4">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
            <span className="material-symbols-outlined text-[20px]">
              search
            </span>
          </div>
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="block w-full pl-10 pr-4 py-3 bg-white border-none rounded-xl text-sm shadow-sm placeholder:text-slate-400 outline-none focus:ring-2 focus:ring-primary"
            placeholder="Search leads, companies or tags..."
            type="text"
          />
        </div>
        <div className="flex gap-2 overflow-x-auto no-scrollbar pb-2">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`flex h-9 shrink-0 items-center justify-center rounded-full px-5 text-sm font-semibold transition-all ${
                f === active
                  ? "bg-primary text-white shadow-md shadow-primary/20"
                  : "bg-white text-slate-600 border border-slate-200"
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </header>

      <main className="flex-1 px-4 pb-28">
        <div className="flex gap-3 mb-6">
          <div className="flex-1 bg-white p-4 rounded-xl border border-slate-100 shadow-sm">
            <p className="text-slate-500 text-xs font-medium uppercase tracking-wider mb-1">
              Total Leads
            </p>
            <div className="flex items-end gap-2">
              <p className="text-2xl font-bold">1,284</p>
              <span className="text-emerald-500 text-xs font-bold mb-1 flex items-center">
                <span className="material-symbols-outlined text-[14px]">
                  arrow_upward
                </span>{" "}
                12%
              </span>
            </div>
          </div>
          <div className="flex-1 bg-white p-4 rounded-xl border border-slate-100 shadow-sm">
            <p className="text-slate-500 text-xs font-medium uppercase tracking-wider mb-1">
              Conv. Rate
            </p>
            <div className="flex items-end gap-2">
              <p className="text-2xl font-bold">24.5%</p>
              <span className="text-emerald-500 text-xs font-bold mb-1 flex items-center">
                <span className="material-symbols-outlined text-[14px]">
                  arrow_upward
                </span>{" "}
                3%
              </span>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between mb-4">
          <h3 className="text-sm font-bold text-slate-500 uppercase tracking-widest">
            Active Pipeline
          </h3>
          <span className="text-xs text-primary font-semibold">
            Sort: Lead Score
          </span>
        </div>

        <div className="space-y-3">
          {filtered.map((l) => (
            <div
              key={l.name}
              className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm relative overflow-hidden"
            >
              <div
                className={`absolute left-0 top-0 bottom-0 w-1 ${l.barColor}`}
              ></div>
              <div className="flex justify-between items-start">
                <div className="flex gap-3">
                  <div className="size-12 rounded-lg bg-slate-100 flex items-center justify-center text-primary font-bold">
                    {l.initials}
                  </div>
                  <div>
                    <h4 className="font-bold">{l.name}</h4>
                    <p className="text-sm text-slate-500">{l.company}</p>
                  </div>
                </div>
                <div className="text-right">
                  <span
                    className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${l.statusClass}`}
                  >
                    {l.status}
                  </span>
                  <div className="mt-2">
                    <span className="text-xs text-slate-400 font-medium">
                      Score
                    </span>
                    <p className="text-lg font-black text-primary">{l.score}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <Link href="/create-lead">
          <button className="fixed right-6 bottom-24 size-14 rounded-full bg-primary text-white shadow-xl shadow-primary/40 flex items-center justify-center z-30">
            <span className="material-symbols-outlined text-[32px]">add</span>
          </button>
        </Link>
      </main>
    </MobileShell>
  );
}
