import { NextResponse } from "next/server"
import prisma from '@/app/lib/prisma'

export async function POST(request) {
    const data = await request.json()

    const newItem = await prisma.items.create({data})

    if (!newItem) return NextResponse.json({status: 400, message: "fail"})
    else return NextResponse.json({status: 200, message: "success", data})
}