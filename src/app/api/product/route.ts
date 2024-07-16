import { NextResponse } from "next/server";


export async function GET() {
    const data = {
        name: "black white",
        price: 100,
        description : "lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, alias!"
    }
    return NextResponse.json({ status: 200, message: "success", data })}