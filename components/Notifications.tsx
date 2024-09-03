import { Bell } from "lucide-react"

const notifications = [
  { id: 1, message: "New campaign 'Summer Sale' has been created", time: "2 hours ago" },
  { id: 2, message: "Campaign 'Product Launch' completed successfully", time: "1 day ago" },
  { id: 3, message: "5 new contacts added to 'VIP Customers' list", time: "2 days ago" },
]

export function Notifications() {
  return (
    <div className="space-y-4">
      {notifications.map((notification) => (
        <div key={notification.id} className="flex items-start space-x-4">
          <Bell className="h-5 w-5 mt-0.5 text-muted-foreground" />
          <div>
            <p className="text-sm font-medium">{notification.message}</p>
            <p className="text-xs text-muted-foreground">{notification.time}</p>
          </div>
        </div>
      ))}
    </div>
  )
}