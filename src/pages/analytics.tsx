import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const AnalyticsPage: React.FC = () => {
  // Mock data for analytics
  const analyticsData = {
    totalSent: 10000,
    delivered: 9800,
    opened: 7500,
    clicked: 3000,
    responded: 1500,
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Analytics Dashboard</h1>
      
      <div className="mb-4">
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select timeframe" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="7d">Last 7 days</SelectItem>
            <SelectItem value="30d">Last 30 days</SelectItem>
            <SelectItem value="3m">Last 3 months</SelectItem>
            <SelectItem value="1y">Last year</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Total Sent</CardTitle>
            <CardDescription>Number of messages sent</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-4xl font-bold">{analyticsData.totalSent}</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Delivered</CardTitle>
            <CardDescription>Successfully delivered messages</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-4xl font-bold">{analyticsData.delivered}</p>
            <p className="text-sm text-gray-500">
              {((analyticsData.delivered / analyticsData.totalSent) * 100).toFixed(2)}% delivery rate
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Opened</CardTitle>
            <CardDescription>Messages opened by recipients</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-4xl font-bold">{analyticsData.opened}</p>
            <p className="text-sm text-gray-500">
              {((analyticsData.opened / analyticsData.delivered) * 100).toFixed(2)}% open rate
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Clicked</CardTitle>
            <CardDescription>Links clicked in messages</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-4xl font-bold">{analyticsData.clicked}</p>
            <p className="text-sm text-gray-500">
              {((analyticsData.clicked / analyticsData.opened) * 100).toFixed(2)}% click-through rate
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Responded</CardTitle>
            <CardDescription>Messages that received a response</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-4xl font-bold">{analyticsData.responded}</p>
            <p className="text-sm text-gray-500">
              {((analyticsData.responded / analyticsData.delivered) * 100).toFixed(2)}% response rate
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AnalyticsPage;