// Layout wrapper — centers content in mobile shell with bottom nav
// Used by every page that needs the app chrome (header + bottom nav)

import BottomNav from './BottomNav'

interface MobileShellProps {
  children: React.ReactNode
}

export default function MobileShell({ children }: MobileShellProps) {
  return (
    <div className="min-h-screen bg-background-light flex justify-center">
      <div className="relative flex min-h-screen w-full max-w-md flex-col bg-background-light shadow-2xl border-x border-slate-200 overflow-hidden">
        {children}
        <BottomNav />
      </div>
    </div>
  )
}
