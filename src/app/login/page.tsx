'use client'
import Link from 'next/link'
import { useState } from 'react'

export default function LoginPage() {
  const [showPass, setShowPass] = useState(false)
  return (
    <div className="min-h-screen bg-background-light flex items-center justify-center p-4">
      <div className="fixed top-0 left-0 -z-10 w-full h-full overflow-hidden opacity-30 pointer-events-none">
        <div className="absolute -top-[10%] -left-[5%] w-[40%] h-[40%] bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-[10%] -right-[5%] w-[40%] h-[40%] bg-primary/10 rounded-full blur-3xl"></div>
      </div>
      <div className="w-full max-w-[440px] bg-white shadow-xl rounded-xl overflow-hidden border border-slate-200">
        <div className="pt-10 pb-6 px-8 flex flex-col items-center">
          <div className="bg-primary/10 p-3 rounded-xl mb-4">
            <span className="material-symbols-outlined text-primary text-4xl" style={{fontVariationSettings:"'FILL' 1"}}>shield</span>
          </div>
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight">SalesFlow Pro</h1>
          <p className="text-slate-500 mt-2 text-center">Sign in to your enterprise CRM account</p>
        </div>
        <div className="px-8 pb-8">
          <div className="space-y-5">
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">Work Email</label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <span className="material-symbols-outlined text-slate-400 text-[20px]">mail</span>
                </div>
                <input className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none" placeholder="name@company.com" type="email" />
              </div>
            </div>
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="block text-sm font-semibold text-slate-700">Password</label>
                <a className="text-xs font-semibold text-primary hover:underline" href="#">Forgot password?</a>
              </div>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <span className="material-symbols-outlined text-slate-400 text-[20px]">lock</span>
                </div>
                <input className="w-full pl-10 pr-12 py-3 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none" placeholder="••••••••" type={showPass ? 'text' : 'password'} />
                <button className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400" onClick={() => setShowPass(!showPass)} type="button">
                  <span className="material-symbols-outlined text-[20px]">{showPass ? 'visibility_off' : 'visibility'}</span>
                </button>
              </div>
            </div>
            <div className="flex items-center">
              <input className="w-4 h-4 text-primary bg-slate-100 border-slate-300 rounded" id="remember" type="checkbox" />
              <label className="ml-2 text-sm text-slate-600" htmlFor="remember">Remember this device</label>
            </div>
            <Link href="/dashboard" className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-3.5 px-4 rounded-lg shadow-lg shadow-primary/20 transition-all flex items-center justify-center gap-2">
              Sign In <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
            </Link>
          </div>
          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center"><span className="w-full border-t border-slate-200"></span></div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-white px-4 text-slate-500 font-medium tracking-wider">Or continue with</span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <button className="flex items-center justify-center py-2.5 px-4 border border-slate-200 rounded-lg hover:bg-slate-50 gap-2">
              <span className="text-sm font-semibold text-slate-700">Google</span>
            </button>
            <button className="flex items-center justify-center py-2.5 px-4 border border-slate-200 rounded-lg hover:bg-slate-50 gap-2">
              <span className="text-sm font-semibold text-slate-700">Office 365</span>
            </button>
          </div>
          <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-center gap-2 text-[11px] text-slate-400 uppercase tracking-widest font-bold">
            <span className="material-symbols-outlined text-[14px]">verified_user</span>
            256-bit AES Securely Encrypted
          </div>
        </div>
        <div className="bg-slate-50 py-4 px-8 border-t border-slate-100 text-center">
          <p className="text-sm text-slate-600">New to SalesFlow? <Link href="/register" className="text-primary font-semibold hover:underline">Contact Administrator</Link></p>
        </div>
      </div>
    </div>
  )
}
