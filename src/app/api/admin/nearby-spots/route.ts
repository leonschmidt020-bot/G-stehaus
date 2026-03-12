import { NextResponse } from "next/server";
import { getNearbySpots } from "@/lib/data/nearby-spots";

export async function GET() {
  const spots = await getNearbySpots();
  return NextResponse.json(spots);
}
