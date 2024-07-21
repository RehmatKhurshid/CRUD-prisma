// app/create/page.tsx

import React from 'react';
import UserForm from "../../components/userForm";

const CreateUser: React.FC = () => {
    return (
        <div>
            {/* <h1>Create User</h1> */}
            <h1 className="text-2xl font-bold mb-4">Create Users</h1>
            <UserForm />
        </div>
    );
};

export default CreateUser;
