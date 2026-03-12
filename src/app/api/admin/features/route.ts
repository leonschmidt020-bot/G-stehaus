import { NextResponse } from "next/server";
import { getFeatures } from "@/lib/data/features";

export async function GET() {
  const features = await getFeatures();
  return NextResponse.json(features);
}
