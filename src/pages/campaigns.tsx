import React from 'react';
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

const CampaignsPage: React.FC = () => {
  // Mock data for campaigns
  const campaigns = [
    { id: 1, name: 'Summer Sale', status: 'Active', progress: 75 },
    { id: 2, name: 'New Product Launch', status: 'Scheduled', progress: 0 },
    { id: 3, name: 'Customer Feedback', status: 'Completed', progress: 100 },
  ];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Campaigns</h1>
      
      <Button className="mb-4">Create New Campaign</Button>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {campaigns.map((campaign) => (
          <Card key={campaign.id}>
            <CardHeader>
              <CardTitle>{campaign.name}</CardTitle>
              <CardDescription>Status: {campaign.status}</CardDescription>
            </CardHeader>
            <CardContent>
              <Progress value={campaign.progress} className="w-full" />
              <p className="mt-2">{campaign.progress}% Complete</p>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="mr-2">Edit</Button>
              <Button>View Details</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default CampaignsPage;