import { PrismaClient } from '@prisma/client';
import { NextRequest, NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function GET(req: NextRequest) {
    //const { searchParams } = new URL(req.url);
    //  const id = searchParams.get('id');

    //console.log('id-----', id)
    const id = req.nextUrl.pathname.split('/').pop();
    console.log('hello')
    console.log('.......', id)
    if (!id) {
        return NextResponse.json({ error: 'User ID is required' }, { status: 400 });
    }

    try {
        const user = await prisma.user.findUnique({
            where: { id: Number(id) },
        });
        return NextResponse.json(user);
    } catch (error) {
        return NextResponse.json({ error: 'Error fetching user' }, { status: 500 });
    }
}

export async function PUT(req: NextRequest) {
    //const { searchParams } = new URL(req.url);
    //const id = searchParams.get('id');
    const id = req.nextUrl.pathname.split('/').pop();
    const { name, email } = await req.json();

    if (!id) {
        return NextResponse.json({ error: 'User ID is required' }, { status: 400 });
    }

    try {
        const user = await prisma.user.update({
            where: { id: Number(id) },
            data: { name, email },
        });
        return NextResponse.json(user);
    } catch (error) {
        return NextResponse.json({ error: 'Error updating user' }, { status: 500 });
    }
}

export async function DELETE(req: NextRequest) {
    const id = req.nextUrl.pathname.split('/').pop();

    console.log('id --->', id)

    if (!id) {
        return NextResponse.json({ error: 'User ID is required' }, { status: 400 });
    }

    try {
        await prisma.user.delete({
            where: { id: Number(id) },
        });
        return NextResponse.json(null, { status: 204 });
    } catch (error) {
        return NextResponse.json({ error: 'Error deleting user' }, { status: 500 });
    }
}
