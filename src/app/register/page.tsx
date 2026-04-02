'use client'
import Link from 'next/link'

export default function RegisterPage() {
  return (
    <div className="min-h-screen bg-background-light flex items-center justify-center p-4">
      <div className="w-full max-w-[440px] bg-white shadow-xl rounded-xl overflow-hidden border border-slate-200">
        <div className="pt-10 pb-6 px-8 flex flex-col items-center">
          <div className="bg-primary/10 p-3 rounded-xl mb-4">
            <span className="material-symbols-outlined text-primary text-4xl" style={{fontVariationSettings:"'FILL' 1"}}>shield</span>
          </div>
          <h1 className="text-2xl font-bold text-slate-900">Create Account</h1>
          <p className="text-slate-500 mt-2 text-center">Join SalesFlow Pro CRM</p>
        </div>
        <div className="px-8 pb-8 space-y-5">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">First Name</label>
              <input className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="Alex" type="text" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">Last Name</label>
              <input className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="Rivers" type="text" />
            </div>
          </div>
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">Work Email</label>
            <input className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="name@company.com" type="email" />
          </div>
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">Password</label>
            <input className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="••••••••" type="password" />
          </div>
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">Role</label>
            <select className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary text-slate-700">
              <option>Sales Executive</option>
              <option>Sales Manager</option>
              <option>CEO</option>
              <option>Administrator</option>
            </select>
          </div>
          <Link href="/dashboard" className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-3.5 px-4 rounded-lg shadow-lg shadow-primary/20 transition-all flex items-center justify-center gap-2">
            Create Account <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
          </Link>
          <p className="text-center text-sm text-slate-600">Already have an account? <Link href="/login" className="text-primary font-semibold hover:underline">Sign In</Link></p>
        </div>
      </div>
    </div>
  )
}
