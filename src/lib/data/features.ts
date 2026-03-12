import { createServerClient } from "@/lib/supabase/client";
import type { Feature } from "@/lib/supabase/types";

export async function getFeatures(): Promise<Feature[]> {
  const supabase = createServerClient();
  const { data, error } = await supabase
    .from("features")
    .select("*")
    .order("sort_order");
  if (error) throw error;
  return data;
}
