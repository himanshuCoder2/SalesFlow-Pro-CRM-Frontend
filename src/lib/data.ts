export const leads = [
  { id: '1', name: 'Alex Rivera', initials: 'AR', company: 'TechNova Solutions', status: 'Qualified', score: 92, color: 'bg-emerald-500' },
  { id: '2', name: 'Sarah Chen', initials: 'SC', company: 'Global Logistics', status: 'New', score: 85, color: 'bg-primary' },
  { id: '3', name: 'Marcus King', initials: 'MK', company: 'Skyline Real Estate', status: 'Contacted', score: 74, color: 'bg-orange-400' },
  { id: '4', name: 'Jordan Taylor', initials: 'JT', company: 'Velocity Media', status: 'Cold', score: 42, color: 'bg-slate-300' },
  { id: '5', name: 'Priya Sharma', initials: 'PS', company: 'FinTech Global', status: 'Qualified', score: 88, color: 'bg-emerald-500' },
  { id: '6', name: 'David Kim', initials: 'DK', company: 'InnovateTech', status: 'Contacted', score: 67, color: 'bg-primary' },
]

export const deals = [
  { id: '1', title: 'Enterprise SaaS Expansion', company: 'Acme Corp', value: 125000, probability: 80, stage: 'Negotiation', priority: 'High Priority', priorityColor: 'bg-primary/10 text-primary', stageProgress: 3, dueDate: 'Oct 15, 2024', tag: 'Software' },
  { id: '2', title: 'Infrastructure Upgrade', company: 'Global Logistics Inc.', value: 450000, probability: 65, stage: 'Proposal', priority: 'Risk Identified', priorityColor: 'bg-amber-50 text-amber-600', stageProgress: 2, dueDate: 'Due in 2 days', tag: null },
  { id: '3', title: 'Data Center Migration', company: 'Nebula Systems', value: 85000, probability: 95, stage: 'Closing', priority: 'Closing Stage', priorityColor: 'bg-emerald-50 text-emerald-600', stageProgress: 4, dueDate: 'Oct 28, 2024', tag: null },
  { id: '4', title: 'Cloud Security Suite', company: 'Apex Financial', value: 230000, probability: 55, stage: 'Discovery', priority: 'New', priorityColor: 'bg-slate-100 text-slate-600', stageProgress: 1, dueDate: 'Nov 10, 2024', tag: 'Security' },
]

export const tasks = [
  { id: '1', title: 'Follow up with Acme Corp', description: 'Send proposal summary after discovery call', priority: 'High', due: 'Today, 3:00 PM', completed: false, category: 'Follow Up' },
  { id: '2', title: 'Prepare Q4 Sales Report', description: 'Compile pipeline stats for manager review', priority: 'Medium', due: 'Tomorrow', completed: false, category: 'Reporting' },
  { id: '3', title: 'Schedule demo with Nebula Systems', description: 'Product walkthrough for data migration', priority: 'High', due: 'Oct 16, 2024', completed: true, category: 'Demo' },
  { id: '4', title: 'Update CRM records', description: 'Log all calls from this week', priority: 'Low', due: 'Oct 18, 2024', completed: false, category: 'Admin' },
  { id: '5', title: 'Contract review call', description: 'Legal team review of Global Logistics terms', priority: 'High', due: 'Oct 17, 2024', completed: false, category: 'Legal' },
]

export const schedule = [
  { id: '1', time: '10:30', period: 'AM', title: 'Project Discovery Call', company: 'Acme Corp', type: 'video', borderColor: 'border-primary' },
  { id: '2', time: '02:15', period: 'PM', title: 'Contract Review Meeting', company: 'Global Tech Inc.', type: 'location', location: 'Main Conference Room', borderColor: 'border-orange-400' },
  { id: '3', time: '04:00', period: 'PM', title: 'Internal Sales Sync', company: '', type: 'link', link: 'sales-team-huddle', borderColor: 'border-slate-300', dimmed: true },
]

export const pipelineStages = [
  { label: 'Negotiation', count: 8, value: '$845k', active: true },
  { label: 'Proposal', count: 5, value: '$320k', active: false },
  { label: 'Discovery', count: 12, value: '$1.2M', active: false },
  { label: 'Closing', count: 3, value: '$150k', active: false },
]

export const teamMembers = [
  { id: '1', name: 'Jessica Moore', role: 'Account Executive', deals: 14, revenue: '$320K', winRate: '72%', status: 'Active' },
  { id: '2', name: 'Robert Chang', role: 'Sales Rep', deals: 9, revenue: '$187K', winRate: '58%', status: 'Active' },
  { id: '3', name: 'Maria Santos', role: 'Sr. Account Exec', deals: 18, revenue: '$512K', winRate: '81%', status: 'Active' },
  { id: '4', name: 'Kevin Brown', role: 'Sales Rep', deals: 7, revenue: '$134K', winRate: '49%', status: 'On Leave' },
]
