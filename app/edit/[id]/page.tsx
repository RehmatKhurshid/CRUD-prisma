'use client';

import React from 'react';
import UserForm from '../../../components/userForm';
import { useParams } from 'next/navigation';
import { useRouter } from 'next/router'

const EditUser: React.FC = () => {
    //const router = useRouter();
    //const { id } = router.query;
    //const searchParams = useSearchParams();
    //const id = searchParams.get('id');
    const params = useParams();
    const id = params.id;
    console.log('id ====>', id);

    if (!id) return <div>Loading...</div>;

    return (
        <div>
            <h1>Edit User</h1>
            <UserForm id={Number(id)} />
        </div>
    );
};

export default EditUser;
