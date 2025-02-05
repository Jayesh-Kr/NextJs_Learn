import { NextRequest, NextResponse } from "next/server";

export async function GET() {
    return Response.json({name: "Jayesh", id:2})
}
export async function POST(req:NextRequest) {
    const user = await req.json();
    // Check for user / validate
    return NextResponse.json({
        name : user.name,
        email : user.email
    });
}