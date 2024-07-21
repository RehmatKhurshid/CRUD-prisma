import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const Navbar: React.FC = () => {
    return (
        <nav className="bg-gray-800 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-white text-lg font-bold">
                    <Link href="/">Brand</Link>
                </div>
                <div className="hidden md:flex space-x-4">
                    <Link href="/" className="text-white hover:text-gray-400">Home</Link>
                    <Link href="/create" className="text-white hover:text-gray-400">Create</Link>


                </div>
                <div className="md:hidden">
                    <Button variant="default">
                        <Link href="/menu">Menu</Link>
                    </Button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
