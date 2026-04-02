# Tasks Module

Daily task management with priority tracking.

## Pages
| Route | File | Description |
|-------|------|-------------|
| `/tasks` | `app/tasks/page.tsx` | Task list with progress bar, filter, check-off |
| `/task-detail` | `app/task-detail/page.tsx` | Single task with sub-tasks, contact, activity |

## Task Priority Levels
- **High** — red badge
- **Medium** — orange badge
- **Low** — grey badge
- **Completed** — strikethrough, dimmed

## Task Categories (filter tabs)
```
All | Calls | Follow-ups | Meetings
```

## Key Data Shape
```ts
interface Task {
  id: string
  title: string
  description: string
  priority: 'Low' | 'Medium' | 'High'
  due: string
  completed: boolean
  category: 'Calls' | 'Follow-ups' | 'Meetings' | 'Admin'
}
```

## Components used
- `MobileShell` — page wrapper with bottom nav
- `ProgressBar` — overall completion progress
- `FAB` — floating "add task" button
