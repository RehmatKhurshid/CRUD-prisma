import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(request: Request) {
    const { name, email } = await request.json();
    try {
        const user = await prisma.user.create({
            data: { name, email },
        });
        return NextResponse.json(user, { status: 201 });
    } catch (error) {
        return NextResponse.json({ error: 'User could not be created' }, { status: 400 });
    }
}

export async function GET() {
    try {
        const users = await prisma.user.findMany();
        return NextResponse.json(users, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: 'Error fetching users' }, { status: 400 });
    }
}