import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { RecentCampaigns } from "@/components/RecentCampaigns"
import { QuickStats } from "@/components/QuickStats"
import { Notifications } from "@/components/Notifications"

export default function Dashboard() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="campaigns">Campaigns</TabsTrigger>
          <TabsTrigger value="contacts">Contacts</TabsTrigger>
        </TabsList>
        <TabsContent value="overview">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Quick Stats</CardTitle>
              </CardHeader>
              <CardContent>
                <QuickStats />
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Recent Campaigns</CardTitle>
              </CardHeader>
              <CardContent>
                <RecentCampaigns />
              </CardContent>
              <CardFooter>
                <Button variant="outline">View All Campaigns</Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Notifications</CardTitle>
              </CardHeader>
              <CardContent>
                <Notifications />
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="campaigns">
          <Card>
            <CardHeader>
              <CardTitle>Campaigns</CardTitle>
              <CardDescription>Manage your text message campaigns</CardDescription>
            </CardHeader>
            <CardContent>
              {/* Campaign management content */}
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="contacts">
          <Card>
            <CardHeader>
              <CardTitle>Contacts</CardTitle>
              <CardDescription>Manage your contact lists</CardDescription>
            </CardHeader>
            <CardContent>
              {/* Contact management content */}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}