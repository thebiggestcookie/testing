import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { PlusCircle, Upload } from "lucide-react"
import Link from "next/link"

const contacts = [
  { id: 1, name: "John Doe", phone: "+1234567890", email: "john@example.com", list: "All Contacts" },
  { id: 2, name: "Jane Smith", phone: "+1987654321", email: "jane@example.com", list: "VIP Customers" },
  { id: 3, name: "Bob Johnson", phone: "+1122334455", email: "bob@example.com", list: "New Subscribers" },
]

export default function Contacts() {
  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Contacts</h1>
        <div className="space-x-2">
          <Button variant="outline">
            <Upload className="mr-2 h-4 w-4" /> Import Contacts
          </Button>
          <Link href="/contacts/new">
            <Button>
              <PlusCircle className="mr-2 h-4 w-4" /> Add Contact
            </Button>
          </Link>
        </div>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Phone</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>List</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {contacts.map((contact) => (
            <TableRow key={contact.id}>
              <TableCell>{contact.name}</TableCell>
              <TableCell>{contact.phone}</TableCell>
              <TableCell>{contact.email}</TableCell>
              <TableCell>{contact.list}</TableCell>
              <TableCell>
                <Link href={`/contacts/${contact.id}`}>
                  <Button variant="outline" size="sm">Edit</Button>
                </Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}