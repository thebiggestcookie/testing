import React from 'react';
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import Link from 'next/link';

const HomePage: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-8">Bulk Texting Application</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Contacts</CardTitle>
            <CardDescription>Manage your contact lists</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Import, create, and organize your contacts.</p>
          </CardContent>
          <CardFooter>
            <Link href="/contacts">
              <Button>Go to Contacts</Button>
            </Link>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Campaigns</CardTitle>
            <CardDescription>Create and manage campaigns</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Design, schedule, and track your text campaigns.</p>
          </CardContent>
          <CardFooter>
            <Link href="/campaigns">
              <Button>Go to Campaigns</Button>
            </Link>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Analytics</CardTitle>
            <CardDescription>View campaign performance</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Track delivery rates, responses, and more.</p>
          </Content>
          <CardFooter>
            <Link href="/analytics">
              <Button>View Analytics</Button>
            </Link>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default HomePage;