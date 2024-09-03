import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function QuickStats() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Messages Sent</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">15,231</div>
          <p className="text-xs text-muted-foreground">+20.1% from last month</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Delivery Rate</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">98.5%</div>
          <p className="text-xs text-muted-foreground">+0.2% from last month</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Response Rate</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">12.3%</div>
          <p className="text-xs text-muted-foreground">+2.5% from last month</p>
        </CardContent>
      </Card>
    </div>
  )
}