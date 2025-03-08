import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { title, description, type, content } = await req.json();

    if (!title) {
      return new NextResponse("Title is Mandatory", { status: 400 });
    }
    if (!type) {
      return new NextResponse("Type is Mandatory", { status: 400 });
    }
    if (!content) {
      return new NextResponse("Content is Mandatory", { status: 400 });
    }

    const pin = await db.pin.create({
      data: {
        title,
        description,
        type,
        content,
      },
    });

    return NextResponse.json(pin, { status: 201 });
  } catch (err) {
    console.error("POST PIN ERROR", err);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
