"use client"
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"


type User = {
  id: number;
  name: string;
  email: string;
  createdAt: string;
  updatedAt: string;
};

const Home: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const router = useRouter();

  useEffect(() => {
    const fetchUsers = async () => {
      const res = await fetch('/api/users');
      const data = await res.json();
      setUsers(data);
    };
    fetchUsers();
  }, []);

  const handleDelete = async (id: number) => {
    await fetch(`/api/users/${id}`, { method: 'DELETE' });
    setUsers(users.filter(user => user.id !== id));
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Users</h1>
      <div className="w-full flex justify-center">
        <Table className="w-[80%] border border-gray-300 mx-auto">
          <TableCaption>A list of your users.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[20%]">Name</TableHead>
              <TableHead>email</TableHead>
              <TableHead></TableHead>
              <TableHead className="text-right"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user.id}>
                <TableCell className="font-medium">{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell> <Button><Link href={`/edit/${user.id}`}>Edit</Link></Button></TableCell>
                <TableCell> <Button variant="destructive" onClick={() => handleDelete(user.id)}>Delete</Button></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default Home;
