import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { PlusCircle } from "lucide-react"
import Link from "next/link"

const campaigns = [
  { id: 1, name: "Summer Sale", date: "2023-06-15", status: "Completed", sent: 1000, delivered: 980 },
  { id: 2, name: "New Product Launch", date: "2023-06-20", status: "Scheduled", sent: 0, delivered: 0 },
  { id: 3, name: "Customer Feedback", date: "2023-06-10", status: "Completed", sent: 500, delivered: 495 },
  { id: 4, name: "Holiday Promotion", date: "2023-07-01", status: "Draft", sent: 0, delivered: 0 },
]

export default function Campaigns() {
  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Campaigns</h1>
        <Link href="/campaigns/new">
          <Button>
            <PlusCircle className="mr-2 h-4 w-4" /> New Campaign
          </Button>
        </Link>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Sent</TableHead>
            <TableHead>Delivered</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {campaigns.map((campaign) => (
            <TableRow key={campaign.id}>
              <TableCell>{campaign.name}</TableCell>
              <TableCell>{campaign.date}</TableCell>
              <TableCell>{campaign.status}</TableCell>
              <TableCell>{campaign.sent}</TableCell>
              <TableCell>{campaign.delivered}</TableCell>
              <TableCell>
                <Link href={`/campaigns/${campaign.id}`}>
                  <Button variant="outline" size="sm">View</Button>
                </Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}