import { NextResponse } from "next/server";
import { db } from "../../../../lib/db";

export async function GET() {
  try {
    const pins = await db.pin.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

    return NextResponse.json(pins, { status: 200 });
  } catch (err) {
    console.error("GET PIN ERROR", err);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
