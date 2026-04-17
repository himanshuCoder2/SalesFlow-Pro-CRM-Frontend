'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
interface FieldErrors {
  firstName?: string
  lastName?: string
  email?: string
  password?: string
  confirmPassword?: string
  role?: string
}

interface FormState {
  firstName: string
  lastName: string
  email: string
  password: string
  confirmPassword: string
  role: string
}

interface FieldProps {
  label: string
  field: keyof FieldErrors
  placeholder: string
  value: string
  onChange: (value: string) => void
  error?: string
  type?: string
  showToggle?: boolean
  shown?: boolean
  onToggle?: () => void
}

function Field({
  label,
  field,
  placeholder,
  value,
  onChange,
  error,
  type = 'text',
  showToggle = false,
  shown = false,
  onToggle,
}: FieldProps) {
  return (
    <div>
      <label className="block text-sm font-semibold text-slate-700 mb-2">
        {label}
      </label>

      <div className="relative">
        <input
          className={`w-full px-4 py-3 bg-slate-50 border rounded-lg outline-none transition-all
            ${error
              ? 'border-red-300 focus:ring-2 focus:ring-red-100 focus:border-red-400'
              : 'border-slate-200 focus:ring-2 focus:ring-primary/20 focus:border-primary'
            }
            ${showToggle ? 'pr-12' : ''}`}
          placeholder={placeholder}
          type={showToggle ? (shown ? 'text' : 'password') : type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />

        {showToggle && (
          <button
            type="button"
            onClick={onToggle}
            className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-slate-600"
          >
            <span className="material-symbols-outlined text-[20px]">
              {shown ? 'visibility_off' : 'visibility'}
            </span>
          </button>
        )}
      </div>

      {error && (
        <p className="mt-1.5 text-xs text-red-500 flex items-center gap-1">
          <span className="material-symbols-outlined text-[14px]">error</span>
          {error}
        </p>
      )}
    </div>
  )
}

export default function RegisterPage() {
  const router = useRouter()

  const [form, setForm] = useState<FormState>({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: 'Sales Executive',
  })

  const [showPass, setShowPass] = useState(false)
  const [showConfirm, setShowConfirm] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({})

  const update = (key: keyof FormState, value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }))

    if (fieldErrors[key as keyof FieldErrors]) {
      setFieldErrors((prev) => ({
        ...prev,
        [key]: undefined,
      }))
    }
  }

  const handleRegister = async () => {
    setLoading(true)
    setError('')
    setFieldErrors({})

    try {
      const res = await fetch('/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      })

      const data = await res.json()

      if (!res.ok) {
        if (res.status === 422 && data.fields) {
          setFieldErrors(data.fields)
        } else {
          setError(data.error || 'Registration failed. Please try again.')
        }
        return
      }

      router.push('/login')
    } catch (error) {
      setError('Network error. Please check your connection.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-background-light flex items-center justify-center p-4">
      <div className="w-full max-w-[440px] bg-white shadow-xl rounded-xl overflow-hidden border border-slate-200">
        <div className="pt-10 pb-6 px-8 flex flex-col items-center">
          <div className="bg-primary/10 p-3 rounded-xl mb-4">
            <span
              className="material-symbols-outlined text-primary text-4xl"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              shield
            </span>
          </div>

          <h1 className="text-2xl font-bold text-slate-900">
            Create Account
          </h1>
          <p className="text-slate-500 mt-2 text-center text-sm">
            Join SalesFlow Pro CRM
          </p>
        </div>

        <div className="px-8 pb-8 space-y-4">
          {error && (
            <div className="flex items-center gap-2 bg-red-50 border border-red-200 text-red-600 text-sm px-4 py-3 rounded-lg">
              <span className="material-symbols-outlined text-[18px]">
                error
              </span>
              {error}
            </div>
          )}

          <div className="grid grid-cols-2 gap-4">
            <Field
              label="First Name"
              field="firstName"
              placeholder="Alex"
              value={form.firstName}
              error={fieldErrors.firstName}
              onChange={(value) => update('firstName', value)}
            />

            <Field
              label="Last Name"
              field="lastName"
              placeholder="Rivers"
              value={form.lastName}
              error={fieldErrors.lastName}
              onChange={(value) => update('lastName', value)}
            />
          </div>

          <Field
            label="Work Email"
            field="email"
            placeholder="name@company.com"
            type="email"
            value={form.email}
            error={fieldErrors.email}
            onChange={(value) => update('email', value)}
          />

          <Field
            label="Password"
            field="password"
            placeholder="Min 6 chars, 1 uppercase, 1 number"
            showToggle
            shown={showPass}
            onToggle={() => setShowPass(!showPass)}
            value={form.password}
            error={fieldErrors.password}
            onChange={(value) => update('password', value)}
          />

          <Field
            label="Confirm Password"
            field="confirmPassword"
            placeholder="Re-enter password"
            showToggle
            shown={showConfirm}
            onToggle={() => setShowConfirm(!showConfirm)}
            value={form.confirmPassword}
            error={fieldErrors.confirmPassword}
            onChange={(value) => update('confirmPassword', value)}
          />

          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">
              Role
            </label>

            <select
              className={`w-full px-4 py-3 bg-slate-50 border rounded-lg outline-none transition-all text-slate-700
                ${fieldErrors.role
                  ? 'border-red-300 focus:ring-2 focus:ring-red-100'
                  : 'border-slate-200 focus:ring-2 focus:ring-primary/20 focus:border-primary'
                }`}
              value={form.role}
              onChange={(e) => update('role', e.target.value)}
            >
              <option>Sales Executive</option>
              <option>Sales Manager</option>
              <option>CEO</option>
              <option>Administrator</option>
            </select>

            {fieldErrors.role && (
              <p className="mt-1.5 text-xs text-red-500 flex items-center gap-1">
                <span className="material-symbols-outlined text-[14px]">
                  error
                </span>
                {fieldErrors.role}
              </p>
            )}
          </div>

          <button
            onClick={handleRegister}
            disabled={loading}
            className="w-full bg-primary hover:bg-primary/90 disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold py-3.5 px-4 rounded-lg shadow-lg shadow-primary/20 transition-all flex items-center justify-center gap-2 mt-2"
          >
            {loading ? (
              <>
                <svg
                  className="animate-spin h-4 w-4 text-white"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v8H4z"
                  />
                </svg>
                Creating account...
              </>
            ) : (
              <>
                Create Account
                <span className="material-symbols-outlined text-[20px]">
                  arrow_forward
                </span>
              </>
            )}
          </button>

          <p className="text-center text-sm text-slate-600">
            Already have an account?{' '}
            <Link
              href="/login"
              className="text-primary font-semibold hover:underline"
            >
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}