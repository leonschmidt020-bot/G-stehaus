import { createServerClient } from "@/lib/supabase/client";
import type { NearbySpot } from "@/lib/supabase/types";

export async function getNearbySpots(): Promise<NearbySpot[]> {
  const supabase = createServerClient();
  const { data, error } = await supabase
    .from("nearby_spots")
    .select("*")
    .order("sort_order");
  if (error) throw error;
  return data;
}
