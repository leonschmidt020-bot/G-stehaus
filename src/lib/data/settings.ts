import { createServerClient } from "@/lib/supabase/client";
import type { SiteSetting } from "@/lib/supabase/types";

export async function getSettings(): Promise<SiteSetting[]> {
  const supabase = createServerClient();
  const { data, error } = await supabase
    .from("site_settings")
    .select("*")
    .order("sort_order");
  if (error) throw error;
  return data;
}

export async function getSettingsByGroup(group: string): Promise<SiteSetting[]> {
  const supabase = createServerClient();
  const { data, error } = await supabase
    .from("site_settings")
    .select("*")
    .eq("group", group)
    .order("sort_order");
  if (error) throw error;
  return data;
}

export async function getSettingValue(key: string): Promise<string | null> {
  const supabase = createServerClient();
  const { data, error } = await supabase
    .from("site_settings")
    .select("value")
    .eq("key", key)
    .single();
  if (error) return null;
  return data.value;
}
