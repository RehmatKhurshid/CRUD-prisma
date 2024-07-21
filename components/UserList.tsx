// components/UserList.tsx
'use client';
import { useEffect, useState } from 'react';

type User = {
    id: number;
    name: string;
    email: string;
    createdAt: string;
    updatedAt: string;
};

export default function UserList() {
    const [users, setUsers] = useState<User[]>([]);

    useEffect(() => {
        async function fetchUsers() {
            const res = await fetch('/api/users');
            const data = await res.json();
            setUsers(data);
        }
        fetchUsers();
    }, []);

    const handleDelete = async (id: number) => {
        await fetch(`/api/users/${id}`, { method: 'DELETE' });
        setUsers(users.filter(user => user.id !== id));
    };

    return (
        <div>
            <h2>Users</h2>
            <ul>
                {users.map(user => (
                    <>
                    <li key={user.id}>{user.name} - {user.email} - </li>
                    <button onClick={() => handleDelete(user.id)}>Delete</button>
                    </>
                ))}
            </ul>
        </div>
    );
}

