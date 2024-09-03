import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const recentCampaigns = [
  { id: 1, name: "Summer Sale", date: "2023-06-15", status: "Completed", sent: 1000, delivered: 980 },
  { id: 2, name: "New Product Launch", date: "2023-06-20", status: "Scheduled", sent: 0, delivered: 0 },
  { id: 3, name: "Customer Feedback", date: "2023-06-10", status: "Completed", sent: 500, delivered: 495 },
]

export function RecentCampaigns() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Date</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Sent</TableHead>
          <TableHead>Delivered</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {recentCampaigns.map((campaign) => (
          <TableRow key={campaign.id}>
            <TableCell>{campaign.name}</TableCell>
            <TableCell>{campaign.date}</TableCell>
            <TableCell>{campaign.status}</TableCell>
            <TableCell>{campaign.sent}</TableCell>
            <TableCell>{campaign.delivered}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}