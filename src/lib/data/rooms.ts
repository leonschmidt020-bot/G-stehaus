import { createServerClient } from "@/lib/supabase/client";
import type { Room, RoomImage } from "@/lib/supabase/types";

export async function getRooms(): Promise<Room[]> {
  const supabase = createServerClient();
  const { data, error } = await supabase
    .from("rooms")
    .select("*")
    .order("sort_order");
  if (error) throw error;
  return data;
}

export async function getRoomBySlug(slug: string): Promise<Room | null> {
  const supabase = createServerClient();
  const { data, error } = await supabase
    .from("rooms")
    .select("*")
    .eq("slug", slug)
    .single();
  if (error) return null;
  return data;
}

export async function getRoomImages(roomId: string): Promise<RoomImage[]> {
  const supabase = createServerClient();
  const { data, error } = await supabase
    .from("room_images")
    .select("*")
    .eq("room_id", roomId)
    .order("sort_order");
  if (error) throw error;
  return data;
}
