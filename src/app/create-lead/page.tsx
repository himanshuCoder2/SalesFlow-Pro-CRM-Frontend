'use client'
import Link from 'next/link'
import MobileShell from '@/components/MobileShell'

function FormField({ label, placeholder, type = 'text', required = false }: { label: string; placeholder: string; type?: string; required?: boolean }) {
  return (
    <div className="flex flex-col w-full">
      <label className="text-slate-700 text-sm font-semibold pb-1.5 ml-1">{label}{required && ' *'}</label>
      <input
        className="w-full rounded-lg border border-slate-200 bg-white text-slate-900 focus:border-primary focus:ring-1 focus:ring-primary h-12 px-4 text-base transition-all outline-none"
        placeholder={placeholder}
        type={type}
      />
    </div>
  )
}

function SectionHeader({ icon, title }: { icon: string; title: string }) {
  return (
    <div className="flex items-center gap-2 mb-4">
      <span className="material-symbols-outlined text-primary text-xl">{icon}</span>
      <h2 className="text-lg font-bold leading-tight">{title}</h2>
    </div>
  )
}

export default function CreateLeadPage() {
  return (
    <MobileShell>
      <header className="sticky top-0 z-10 bg-white/80 backdrop-blur-md border-b border-slate-200 p-4 flex items-center justify-between">
        <Link href="/leads" className="flex w-12 items-center justify-start">
          <span className="material-symbols-outlined text-slate-600">close</span>
        </Link>
        <h1 className="text-lg font-bold flex-1 text-center">Create New Lead</h1>
        <div className="flex w-12 items-center justify-end">
          <Link href="/leads" className="text-primary text-base font-semibold">Cancel</Link>
        </div>
      </header>

      <main className="flex-1 overflow-y-auto no-scrollbar pb-32">
        <section className="mt-6 px-4">
          <SectionHeader icon="person" title="Contact Information" />
          <div className="space-y-4">
            <FormField label="Lead Name" placeholder="e.g. John Smith" required />
            <FormField label="Job Title" placeholder="e.g. Senior Director" />
          </div>
        </section>

        <section className="mt-8 px-4">
          <SectionHeader icon="alternate_email" title="Communication" />
          <div className="space-y-4">
            <FormField label="Email Address" placeholder="john.smith@company.com" type="email" required />
            <FormField label="Phone Number" placeholder="+1 (555) 000-0000" type="tel" />
          </div>
        </section>

        <section className="mt-8 px-4">
          <SectionHeader icon="business" title="Company Details" />
          <div className="space-y-4">
            <FormField label="Company Name" placeholder="e.g. Acme Corporation" required />
            <FormField label="Industry" placeholder="e.g. Technology, Finance..." />
            <div className="flex flex-col w-full">
              <label className="text-slate-700 text-sm font-semibold pb-1.5 ml-1">Company Size</label>
              <select className="w-full rounded-lg border border-slate-200 bg-white text-slate-900 focus:border-primary focus:ring-1 focus:ring-primary h-12 px-4 text-base outline-none">
                <option value="">Select company size</option>
                <option>1–10 employees</option>
                <option>11–50 employees</option>
                <option>51–200 employees</option>
                <option>201–1000 employees</option>
                <option>1000+ employees</option>
              </select>
            </div>
          </div>
        </section>

        <section className="mt-8 px-4">
          <SectionHeader icon="tune" title="Lead Qualification" />
          <div className="space-y-4">
            <div className="flex flex-col w-full">
              <label className="text-slate-700 text-sm font-semibold pb-1.5 ml-1">Lead Source</label>
              <select className="w-full rounded-lg border border-slate-200 bg-white text-slate-900 focus:border-primary focus:ring-1 focus:ring-primary h-12 px-4 text-base outline-none">
                <option value="">Select source</option>
                <option>Inbound Website</option>
                <option>Referral</option>
                <option>LinkedIn</option>
                <option>Cold Outreach</option>
                <option>Trade Show</option>
                <option>Other</option>
              </select>
            </div>
            <div className="flex flex-col w-full">
              <label className="text-slate-700 text-sm font-semibold pb-1.5 ml-1">Priority</label>
              <div className="flex gap-2">
                {['Low', 'Medium', 'High'].map(p => (
                  <button key={p} className={`flex-1 py-2.5 rounded-lg text-sm font-semibold border-2 transition-all ${p === 'High' ? 'border-primary bg-primary/10 text-primary' : 'border-slate-200 text-slate-600'}`}>{p}</button>
                ))}
              </div>
            </div>
            <div className="flex flex-col w-full">
              <label className="text-slate-700 text-sm font-semibold pb-1.5 ml-1">Notes</label>
              <textarea
                className="w-full rounded-lg border border-slate-200 bg-white text-slate-900 focus:border-primary focus:ring-1 focus:ring-primary p-4 text-base transition-all outline-none resize-none"
                rows={4}
                placeholder="Additional context about this lead..."
              />
            </div>
          </div>
        </section>
      <div className="fixed bottom-16 left-1/2 -translate-x-1/2 w-full max-w-md bg-white border-t border-slate-200 p-4 z-30">
        <Link href="/leads" className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-4 rounded-xl shadow-lg shadow-primary/20 flex items-center justify-center gap-2 transition-all">
          <span className="material-symbols-outlined">add_circle</span>
          Create Lead
        </Link>
      </div>
      </main>

    </MobileShell>
  )
}
