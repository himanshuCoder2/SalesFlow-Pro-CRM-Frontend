'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

interface FieldErrors {
  email?: string
  password?: string
}

export default function LoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPass, setShowPass] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({})

  const handleLogin = async () => {
    setLoading(true)
    setError('')
    setFieldErrors({})

    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      })

      const data = await res.json()

      if (!res.ok) {
        // Validation errors (field-level)
        if (res.status === 422 && data.fields) {
          setFieldErrors(data.fields)
        } else {
          // General error
          setError(data.error || 'Login failed. Please try again.')
        }
        return
      }

      // Success → redirect
      router.push('/dashboard')

    } catch (err) {
      setError('Network error. Please check your connection.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-background-light flex items-center justify-center p-4">
      <div className="fixed top-0 left-0 -z-10 w-full h-full">
        <div className="absolute -top-10 -left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-10 -right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="w-full max-w-[440px] bg-white shadow-xl rounded-xl overflow-hidden border border-slate-200">

        {/* Header */}
        <div className="pt-10 pb-6 px-8 flex flex-col items-center">
          <div className="bg-primary/10 p-3 rounded-xl mb-4">
            <span className="material-symbols-outlined text-primary text-4xl"
              style={{ fontVariationSettings: "'FILL' 1" }}>shield</span>
          </div>
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight">SalesFlow Pro</h1>
          <p className="text-slate-500 mt-2 text-center text-sm">
            Sign in to your enterprise CRM account
          </p>
        </div>

        <div className="px-8 pb-8 space-y-5">

          {/* General Error */}
          {error && (
            <div className="flex items-center gap-2 bg-red-50 border border-red-200 text-red-600 text-sm px-4 py-3 rounded-lg">
              <span className="material-symbols-outlined text-[18px]">error</span>
              {error}
            </div>
          )}

          {/* Email Field */}
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">
              Work Email
            </label>
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <span className={`material-symbols-outlined text-[20px] transition-colors
                  ${fieldErrors.email ? 'text-red-400' : 'text-slate-400 group-focus-within:text-primary'}`}>
                  mail
                </span>
              </div>
              <input
                className={`w-full pl-10 pr-4 py-3 bg-slate-50 border rounded-lg outline-none transition-all
                  ${fieldErrors.email
                    ? 'border-red-300 focus:ring-2 focus:ring-red-100 focus:border-red-400'
                    : 'border-slate-200 focus:ring-2 focus:ring-primary/20 focus:border-primary'
                  }`}
                placeholder="name@company.com"
                type="email"
                value={email}
                onChange={e => {
                  setEmail(e.target.value)
                  if (fieldErrors.email) setFieldErrors(p => ({ ...p, email: undefined }))
                }}
              />
            </div>
            {fieldErrors.email && (
              <p className="mt-1.5 text-xs text-red-500 flex items-center gap-1">
                <span className="material-symbols-outlined text-[14px]">error</span>
                {fieldErrors.email}
              </p>
            )}
          </div>

          {/* Password Field */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="block text-sm font-semibold text-slate-700">Password</label>
              <a className="text-xs font-semibold text-primary hover:underline" href="#">
                Forgot password?
              </a>
            </div>
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <span className={`material-symbols-outlined text-[20px] transition-colors
                  ${fieldErrors.password ? 'text-red-400' : 'text-slate-400 group-focus-within:text-primary'}`}>
                  lock
                </span>
              </div>
              <input
                className={`w-full pl-10 pr-12 py-3 bg-slate-50 border rounded-lg outline-none transition-all
                  ${fieldErrors.password
                    ? 'border-red-300 focus:ring-2 focus:ring-red-100 focus:border-red-400'
                    : 'border-slate-200 focus:ring-2 focus:ring-primary/20 focus:border-primary'
                  }`}
                placeholder="••••••••"
                type={showPass ? 'text' : 'password'}
                value={password}
                onChange={e => {
                  setPassword(e.target.value)
                  if (fieldErrors.password) setFieldErrors(p => ({ ...p, password: undefined }))
                }}
                onKeyDown={e => e.key === 'Enter' && handleLogin()}
              />
              <button
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-slate-600"
                onClick={() => setShowPass(!showPass)}
                type="button"
              >
                <span className="material-symbols-outlined text-[20px]">
                  {showPass ? 'visibility_off' : 'visibility'}
                </span>
              </button>
            </div>
            {fieldErrors.password && (
              <p className="mt-1.5 text-xs text-red-500 flex items-center gap-1">
                <span className="material-symbols-outlined text-[14px]">error</span>
                {fieldErrors.password}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <button
            onClick={handleLogin}
            disabled={loading}
            className="w-full bg-primary hover:bg-primary/90 disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold py-3.5 px-4 rounded-lg shadow-lg shadow-primary/20 transition-all flex items-center justify-center gap-2"
          >
            {loading ? (
              <>
                <svg className="animate-spin h-4 w-4 text-white" viewBox="0 0 24 24" fill="none">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                </svg>
                Signing in...
              </>
            ) : (
              <>
                Sign In
                <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
              </>
            )}
          </button>
        </div>

        {/* Footer */}
        <div className="bg-slate-50 py-4 px-8 border-t border-slate-100 text-center">
          <p className="text-sm text-slate-600">
            New to SalesFlow?{' '}
            <Link href="/register" className="text-primary font-semibold hover:underline">
              Contact Administrator
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}