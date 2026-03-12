import { NextRequest, NextResponse } from "next/server";
import { getRoomBySlug, getRoomImages } from "@/lib/data/rooms";

export async function GET(request: NextRequest) {
  const slug = request.nextUrl.searchParams.get("slug");
  if (!slug) return NextResponse.json({ error: "Missing slug" }, { status: 400 });

  const room = await getRoomBySlug(slug);
  if (!room) return NextResponse.json({ error: "Not found" }, { status: 404 });

  const images = await getRoomImages(room.id);
  return NextResponse.json({ room, images });
}
