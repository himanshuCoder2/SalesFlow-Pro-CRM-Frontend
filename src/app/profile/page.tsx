"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";
import MobileShell from "@/components/MobileShell";

const stats = [
  { icon: "payments", label: "Revenue YTD", value: "$1.2M", trend: "+12%" },
  { icon: "handshake", label: "Deals Closed", value: "42", trend: "+5%" },
  { icon: "leaderboard", label: "Win Rate", value: "78%", trend: "+2%" },
  { icon: "bolt", label: "Progress", value: "85%", trend: "+8%" },
];

const menuItems = [
  {
    icon: "person",
    label: "Personal Information",
    desc: "Email, Phone, Location",
  },
  {
    icon: "security",
    label: "Security",
    desc: "Password, 2FA, Session management",
  },
  {
    icon: "notifications",
    label: "Notifications",
    desc: "Email alerts, Push notifications",
  },
  {
    icon: "track_changes",
    label: "Sales Targets",
    desc: "Adjust monthly & quarterly goals",
  },
  { icon: "hub", label: "Integrations", desc: "LinkedIn, Calendar, CRM Sync" },
];

export default function ProfilePage() {
  const router = useRouter();
  //Handle lgout function to redirect -> login
  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push("/login");
  };

  return (
    <MobileShell>
      <header className="flex items-center bg-white border-b border-slate-200 p-4 sticky top-0 z-10">
        <Link
          href="/dashboard"
          className="flex size-10 items-center justify-center rounded-full hover:bg-slate-100"
        >
          <span className="material-symbols-outlined text-slate-600">
            arrow_back
          </span>
        </Link>
        <h2 className="flex-1 text-center text-lg font-bold tracking-tight">
          Profile
        </h2>
        <Link href="/settings">
          <button className="flex size-10 items-center justify-center rounded-full hover:bg-slate-100">
            <span className="material-symbols-outlined text-slate-600">
              more_vert
            </span>
          </button>
        </Link>
      </header>

      <main className="flex-1 pb-28 overflow-y-auto no-scrollbar">
        {/* Hero */}
        <section className="flex flex-col items-center p-6 bg-white border-b border-slate-200">
          <div className="relative mb-4">
            <div className="size-32 rounded-full border-4 border-primary/10 bg-primary/10 flex items-center justify-center text-primary text-4xl font-bold">
              AR
            </div>
            <div className="absolute bottom-1 right-1 size-8 rounded-full bg-primary flex items-center justify-center text-white border-4 border-white">
              <span className="material-symbols-outlined text-sm">edit</span>
            </div>
          </div>
          <h1 className="text-2xl font-bold">Alex Rivers</h1>
          <p className="text-slate-500 font-medium">Senior Account Executive</p>
          <div className="mt-4 flex gap-2 w-full">
            <button className="flex-1 h-11 bg-primary text-white rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-primary/90 transition-colors">
              <span className="material-symbols-outlined text-lg">
                edit_note
              </span>
              Edit Profile
            </button>
            <button className="px-3 h-11 border border-slate-200 rounded-lg flex items-center justify-center hover:bg-slate-50">
              <span className="material-symbols-outlined text-slate-600">
                share
              </span>
            </button>
          </div>
        </section>

        {/* Stats */}
        <section className="p-4">
          <h3 className="px-2 mb-4 text-sm font-bold uppercase tracking-wider text-slate-500">
            Performance Overview
          </h3>
          <div className="grid grid-cols-2 gap-4">
            {stats.map((s) => (
              <div
                key={s.label}
                className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="material-symbols-outlined text-primary bg-primary/10 p-2 rounded-lg">
                    {s.icon}
                  </span>
                  <span className="text-emerald-600 text-xs font-bold">
                    {s.trend}
                  </span>
                </div>
                <p className="text-slate-500 text-xs font-medium">{s.label}</p>
                <p className="text-xl font-bold tracking-tight">{s.value}</p>
              </div>
            ))}
          </div>
          {/* Quota Bar */}
          <div className="mt-6 bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
            <div className="flex justify-between items-end mb-3">
              <div>
                <p className="text-xs font-bold text-slate-500 uppercase tracking-wide">
                  Monthly Quota
                </p>
                <p className="text-lg font-bold">Progress to Goal</p>
              </div>
              <p className="text-lg font-bold text-primary">85%</p>
            </div>
            <div className="w-full bg-slate-100 rounded-full h-3">
              <div
                className="bg-primary h-3 rounded-full"
                style={{ width: "85%" }}
              ></div>
            </div>
            <p className="mt-3 text-sm text-slate-500">
              <span className="font-semibold text-slate-900">$850k</span> of
              $1.0M target reached.
            </p>
          </div>
        </section>

        {/* Settings Menu */}
        <section className="p-4 space-y-2">
          <h3 className="px-2 mb-2 text-sm font-bold uppercase tracking-wider text-slate-500">
            Account Settings
          </h3>
          <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
            {menuItems.map((item, i) => (
              <a
                key={item.label}
                className={`flex items-center p-4 hover:bg-slate-50 transition-colors ${
                  i < menuItems.length - 1 ? "border-b border-slate-100" : ""
                }`}
                href="#"
              >
                <span className="material-symbols-outlined text-primary mr-4">
                  {item.icon}
                </span>
                <div className="flex-1">
                  <p className="font-semibold text-sm">{item.label}</p>
                  <p className="text-xs text-slate-500">{item.desc}</p>
                </div>
                <span className="material-symbols-outlined text-slate-400">
                  chevron_right
                </span>
              </a>
            ))}
          </div>
          <div className="pt-4">
            <button
              onClick={handleLogout}
              className="w-full flex items-center justify-center gap-2 p-4 text-red-600 font-bold hover:bg-red-50 rounded-xl transition-colors"
            >
              <span className="material-symbols-outlined">logout</span>
              Sign Out
            </button>
          </div>
        </section>
      </main>
    </MobileShell>
  );
}
