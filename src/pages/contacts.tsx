import React from 'react';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const ContactsPage: React.FC = () => {
  // Mock data for contacts
  const contacts = [
    { id: 1, name: 'John Doe', phone: '+1234567890', tags: ['VIP', 'Customer'] },
    { id: 2, name: 'Jane Smith', phone: '+0987654321', tags: ['Prospect'] },
    { id: 3, name: 'Alice Johnson', phone: '+1122334455', tags: ['Customer'] },
  ];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Contacts</h1>
      
      <div className="mb-4 flex justify-between items-center">
        <Input className="max-w-sm" type="text" placeholder="Search contacts..." />
        <Button>Import Contacts</Button>
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Phone</TableHead>
            <TableHead>Tags</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {contacts.map((contact) => (
            <TableRow key={contact.id}>
              <TableCell>{contact.name}</TableCell>
              <TableCell>{contact.phone}</TableCell>
              <TableCell>{contact.tags.join(', ')}</TableCell>
              <TableCell>
                <Button variant="outline" className="mr-2">Edit</Button>
                <Button variant="destructive">Delete</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default ContactsPage;