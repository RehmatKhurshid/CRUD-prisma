// components/UserForm.tsx
'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { Link } from 'lucide-react';


type UserFormProps = {
    id?: number;
    initialName?: string;
    initialEmail?: string;
};

const UserForm: React.FC<UserFormProps> = ({ id, initialName = '', initialEmail = '' }) => {
    const [name, setName] = useState(initialName);
    const [email, setEmail] = useState(initialEmail);
    const router = useRouter();

    useEffect(() => {
        if (id) {
            console.log('.......', id)
            const fetchUser = async () => {
                const res = await fetch(`/api/users/${id}`);
                const data = await res.json();
                setName(data.name);
                setEmail(data.email);
            };
            fetchUser();
        }
    }, [id]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const method = id ? 'PUT' : 'POST';
        const url = id ? `/api/users/${id}` : '/api/users';
        await fetch(url, {
            method,
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, email }),
        });
        router.push('/');
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="flex items-center gap-2 w-[40%] mt-[20px]">
                <label htmlFor="name">Name:</label>
                <Input type="text" id="name" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
            </div>

            <div className="flex items-center gap-2 w-[40%] mt-[20px]">
                <label htmlFor="email">Email:</label>
                <Input type="email" id="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </div>

            <Button variant="default" type="submit">{id ? 'Update' : 'Create'} User</Button>

        </form>
    );
};

export default UserForm;
