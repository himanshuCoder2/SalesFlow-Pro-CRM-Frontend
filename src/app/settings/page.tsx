'use client'
import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import MobileShell from '@/components/MobileShell'

function Toggle({ defaultOn = false }: { defaultOn?: boolean }) {
  const [on, setOn] = useState(defaultOn)
  return (
    <label className="relative inline-flex items-center cursor-pointer" onClick={() => setOn(!on)}>
      <div className={`w-11 h-6 rounded-full transition-colors ${on ? 'bg-primary' : 'bg-slate-200'} relative`}>
        <div className={`absolute top-[2px] h-5 w-5 rounded-full bg-white border border-gray-300 transition-transform ${on ? 'translate-x-5' : 'translate-x-[2px]'}`}></div>
      </div>
    </label>
  )
}

const accountItems = [
  { icon: 'person', label: 'Edit Profile', desc: 'Name, bio, and contact info' },
  {  href:'/team',icon: 'groups', label: 'Team Management', desc: 'Manage sales team and roles' },
]
const securityItems = [
  { icon: 'lock', label: 'Change Password', desc: 'Last changed 3 months ago' },
  { icon: 'verified_user', label: 'Two-Factor Authentication', desc: 'Currently enabled via SMS' },
]
const prefItems = [
  { icon: 'language', label: 'Language', desc: 'English (US)' },
  { icon: 'payments', label: 'Currency', desc: 'USD ($)' },
]
const privacyItems = [
  { icon: 'download', label: 'Export My Data', desc: 'Download your CRM history' },
  { icon: 'policy', label: 'Privacy Policy', desc: 'View our terms and conditions' },
]

function Section({ title, items }: { title: string; items: { icon: string; label: string; desc: string }[] }) {
  return (
    <section className="mt-6">
      <h3 className="px-6 text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">{title}</h3>
      <div className="bg-white border-y border-primary/5">
        {items.map((item, i) => (
          <div key={item.label}>
            <a className="flex items-center justify-between px-6 py-4 hover:bg-primary/5 transition-colors group" href="#">
              <div className="flex items-center gap-4">
                <div className="size-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined">{item.icon}</span>
                </div>
                <div>
                  <p className="text-sm font-semibold">{item.label}</p>
                  <p className="text-xs text-slate-500">{item.desc}</p>
                </div>
              </div>
              <span className="material-symbols-outlined text-slate-300 group-hover:text-primary transition-colors">chevron_right</span>
            </a>
            {i < items.length - 1 && <div className="h-px bg-primary/5 ml-20"></div>}
          </div>
        ))}
      </div>
    </section>
  )
}

export default function SettingsPage() {

  const router = useRouter()
  //Handle Logout function for redirect -> Login
  const handleLogout = async () => {
    await fetch('/api/auth/logout', { method: 'POST' })
    router.push('/login')
  }
  return (
    <MobileShell>
      <header className="sticky top-0 z-10 bg-white/80 backdrop-blur-md border-b border-primary/10 px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Link
            href="/dashboard"
            className="p-2 hover:bg-primary/10 rounded-full"
          >
            <span className="material-symbols-outlined text-slate-700">
              arrow_back
            </span>
          </Link>
          <h1 className="text-xl font-bold tracking-tight">Settings</h1>
        </div>
        <Link href="/profile">
          <button className="text-primary font-medium text-sm">Save</button>
        </Link>
      </header>

      <main className="flex-1 overflow-y-auto pb-28 no-scrollbar">
        <section className="p-4 mt-2">
          <div className="bg-white rounded-xl p-4 flex items-center gap-4 shadow-sm border border-primary/5">
            <div className="relative">
              <div className="size-20 rounded-full bg-primary/10 flex items-center justify-center text-primary text-2xl font-bold border-2 border-primary/20">
                AR
              </div>
              <div className="absolute bottom-0 right-0 bg-primary text-white p-1.5 rounded-full border-2 border-white">
                <span className="material-symbols-outlined text-[16px] block">
                  edit
                </span>
              </div>
            </div>
            <div className="flex flex-col">
              <h2 className="text-lg font-bold">Alex Rivers</h2>
              <p className="text-slate-500 text-sm">Senior Sales Rep</p>
              <span className="mt-1 inline-flex items-center rounded-md bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary border border-primary/20">
                Pro Plan
              </span>
            </div>
          </div>
        </section>

        <Section title="Account" items={accountItems} />

        <section className="mt-6">
          <h3 className="px-6 text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">
            Notifications
          </h3>
          <div className="bg-white border-y border-primary/5">
            {[
              {
                icon: "notifications",
                label: "Push Notifications",
                desc: "Lead alerts and reminders",
                on: true,
              },
              {
                icon: "mail",
                label: "Email Digests",
                desc: "Weekly performance summary",
                on: false,
              },
            ].map((item, i) => (
              <div key={item.label}>
                <div className="flex items-center justify-between px-6 py-4">
                  <div className="flex items-center gap-4">
                    <div className="size-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                      <span className="material-symbols-outlined">
                        {item.icon}
                      </span>
                    </div>
                    <div>
                      <p className="text-sm font-semibold">{item.label}</p>
                      <p className="text-xs text-slate-500">{item.desc}</p>
                    </div>
                  </div>
                  <Toggle defaultOn={item.on} />
                </div>
                {i === 0 && <div className="h-px bg-primary/5 ml-20"></div>}
              </div>
            ))}
          </div>
        </section>

        <Section title="Security" items={securityItems} />
        <Section title="App Preferences" items={prefItems} />
        <Section title="Data Privacy" items={privacyItems} />

        <div className="px-6 mt-8 mb-12">
          <button
            onClick={handleLogout}
            className="w-full py-3 rounded-xl border border-red-100 text-red-500 font-semibold text-sm bg-red-50 hover:bg-red-100 transition-colors flex items-center justify-center gap-2"
          >
            <span className="material-symbols-outlined text-[20px]">
              logout
            </span>
            Log Out
          </button>
          <p className="text-center text-[10px] text-slate-400 mt-4 uppercase tracking-widest">
            SalesFlow Pro CRM v4.2.0
          </p>
        </div>
      </main>
    </MobileShell>
  );
}
