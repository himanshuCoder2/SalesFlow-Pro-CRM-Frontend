'use client'

// Bottom navigation bar — shown on every app screen
// Active tab is highlighted based on current route

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { NAV_ITEMS } from '@/constants'

export default function BottomNav() {
  const pathname = usePathname()

  return (
    <nav className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-md bg-white border-t border-slate-200 px-2 py-2 flex items-center justify-around z-40">
      {NAV_ITEMS.map((item) => {
        const active =
          pathname === item.href ||
          (pathname.startsWith(item.href))
        return (
          <Link
            key={item.href}
            href={item.href}
            className={`flex flex-col items-center gap-0.5 px-2 py-1 transition-colors ${
              active ? 'text-primary' : 'text-slate-400 hover:text-primary'
            }`}
          >
            <span
              className="material-symbols-outlined text-[24px]"
              style={active ? { fontVariationSettings: "'FILL' 1" } : {}}
            >
              {item.icon}
            </span>
            <span className="text-[10px] font-bold uppercase tracking-tight">
              {item.label}
            </span>
          </Link>
        )
      })}
    </nav>
  )
}
