import Link from 'next/link'

const sections = [
  {
    title: 'Auth',
    pages: [
      { href: '/login', label: 'Login', icon: 'lock' },
      { href: '/register', label: 'Register', icon: 'person_add' },
    ],
  },
  {
    title: 'Dashboards',
    pages: [
      { href: '/dashboard', label: 'Home Dashboard', icon: 'dashboard' },
      { href: '/salesflow-dashboard', label: 'SalesFlow Pro Dashboard', icon: 'bar_chart' },
      { href: '/sales-exec', label: 'Sales Exec Dashboard', icon: 'trending_up' },
      { href: '/manager', label: 'Manager Dashboard', icon: 'insights' },
      { href: '/ceo', label: 'CEO Dashboard', icon: 'business_center' },
    ],
  },
  {
    title: 'Deals',
    pages: [
      { href: '/deals', label: 'Deals Pipeline', icon: 'account_tree' },
      { href: '/deals/detail', label: 'Deal Detail', icon: 'receipt_long' },
      { href: '/edit-deal', label: 'Edit Deal', icon: 'edit' },
      { href: '/active-deals', label: 'Active Deals', icon: 'handshake' },
      { href: '/closed-leads', label: 'Closed Leads Portfolio', icon: 'workspace_premium' },
    ],
  },
  {
    title: 'Leads',
    pages: [
      { href: '/leads', label: 'Leads Management', icon: 'group' },
      { href: '/create-lead', label: 'Create New Lead', icon: 'person_add' },
    ],
  },
  {
    title: 'Tasks',
    pages: [
      { href: '/tasks', label: 'Daily Tasks', icon: 'check_circle' },
      { href: '/task-detail', label: 'Task Detail', icon: 'task_alt' },
    ],
  },
  {
    title: 'Analytics',
    pages: [
      { href: '/pipeline', label: 'Pipeline Analysis', icon: 'funnel' },
      { href: '/team-reports', label: 'Team Reports', icon: 'leaderboard' },
    ],
  },
  {
    title: 'Account',
    pages: [
      { href: '/profile', label: 'Profile', icon: 'account_circle' },
      { href: '/settings', label: 'Settings', icon: 'settings' },
      { href: '/incentives', label: 'Incentives & Rewards', icon: 'emoji_events' },
    ],
  },
  {
    title: 'Admin',
    pages: [
      { href: '/users', label: 'User Management', icon: 'manage_accounts' },
      { href: '/admin', label: 'Admin Panel', icon: 'admin_panel_settings' },
      { href: '/system-status', label: 'System Status', icon: 'terminal' },
    ],
  },
]

export default function NavPage() {
  return (
    <div className="min-h-screen bg-background-light font-display">
      <div className="max-w-md mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center gap-3 mb-8">
          <div className="size-12 rounded-xl bg-primary flex items-center justify-center">
            <span className="material-symbols-outlined text-white text-2xl">shield</span>
          </div>
          <div>
            <h1 className="text-2xl font-bold text-slate-900">SalesFlow Pro</h1>
            <p className="text-sm text-slate-500">All Pages — Navigation Index</p>
          </div>
        </div>

        <div className="space-y-6">
          {sections.map(section => (
            <div key={section.title}>
              <h2 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3 px-1">{section.title}</h2>
              <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
                {section.pages.map((page, i) => (
                  <Link
                    key={page.href}
                    href={page.href}
                    className={`flex items-center gap-4 px-4 py-3 hover:bg-primary/5 transition-colors group ${i < section.pages.length - 1 ? 'border-b border-slate-100' : ''}`}
                  >
                    <div className="size-9 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
                      <span className="material-symbols-outlined text-[20px]">{page.icon}</span>
                    </div>
                    <span className="text-sm font-semibold text-slate-700 flex-1">{page.label}</span>
                    <span className="material-symbols-outlined text-slate-300 group-hover:text-primary transition-colors">chevron_right</span>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-xs text-slate-400 mt-8 pb-4">SalesFlow Pro CRM · Built with Next.js 14 + Tailwind CSS</p>
      </div>
    </div>
  )
}
