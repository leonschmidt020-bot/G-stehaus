"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { login, logout, verifySession } from "@/lib/auth";
import { createServerClient } from "@/lib/supabase/client";

// --- Auth ---

export async function loginAction(_prev: unknown, formData: FormData) {
  const username = formData.get("username") as string;
  const password = formData.get("password") as string;

  const success = await login(username, password);
  if (!success) {
    return { error: "Ungültige Anmeldedaten" };
  }
  redirect("/admin");
}

export async function logoutAction() {
  await logout();
  redirect("/admin/login");
}

// --- Auth guard helper ---

async function requireAuth() {
  const valid = await verifySession();
  if (!valid) redirect("/admin/login");
}

// --- Rooms ---

export async function updateRoom(formData: FormData) {
  await requireAuth();
  const supabase = createServerClient();

  const id = formData.get("id") as string;
  const data = {
    title: formData.get("title") as string,
    subtitle: formData.get("subtitle") as string,
    price: formData.get("price") as string,
    price_note: formData.get("price_note") as string,
    guests: formData.get("guests") as string,
    size: formData.get("size") as string,
    description: formData.get("description") as string,
    detail_description: formData.get("detail_description") as string,
    detail_details: formData.get("detail_details") as string,
    card_image: formData.get("card_image") as string,
    popular: formData.get("popular") === "on",
    extras: JSON.parse((formData.get("extras") as string) || "[]"),
    amenities: JSON.parse((formData.get("amenities") as string) || "[]"),
  };

  const { error } = await supabase.from("rooms").update(data).eq("id", id);
  if (error) return { error: error.message };

  revalidatePath("/");
  revalidatePath("/zimmer");
  return { success: true };
}

export async function updateRoomImages(formData: FormData) {
  await requireAuth();
  const supabase = createServerClient();

  const roomId = formData.get("room_id") as string;
  const images = JSON.parse(formData.get("images") as string);

  // Delete existing images for this room
  await supabase.from("room_images").delete().eq("room_id", roomId);

  // Insert new images
  if (images.length > 0) {
    const { error } = await supabase.from("room_images").insert(
      images.map((img: { src: string; alt: string }, i: number) => ({
        room_id: roomId,
        src: img.src,
        alt: img.alt,
        sort_order: i + 1,
      }))
    );
    if (error) return { error: error.message };
  }

  revalidatePath("/");
  return { success: true };
}

// --- Features ---

export async function updateFeatures(formData: FormData) {
  await requireAuth();
  const supabase = createServerClient();

  const features = JSON.parse(formData.get("features") as string);

  // Delete all, then insert fresh
  await supabase.from("features").delete().neq("id", "00000000-0000-0000-0000-000000000000");

  if (features.length > 0) {
    const { error } = await supabase.from("features").insert(
      features.map((f: { title: string; text: string }, i: number) => ({
        title: f.title,
        text: f.text,
        sort_order: i + 1,
      }))
    );
    if (error) return { error: error.message };
  }

  revalidatePath("/");
  return { success: true };
}

// --- Testimonials ---

export async function updateTestimonials(formData: FormData) {
  await requireAuth();
  const supabase = createServerClient();

  const testimonials = JSON.parse(formData.get("testimonials") as string);

  await supabase.from("testimonials").delete().neq("id", "00000000-0000-0000-0000-000000000000");

  if (testimonials.length > 0) {
    const { error } = await supabase.from("testimonials").insert(
      testimonials.map((t: { text: string; name: string; source: string }, i: number) => ({
        text: t.text,
        name: t.name,
        source: t.source,
        sort_order: i + 1,
      }))
    );
    if (error) return { error: error.message };
  }

  revalidatePath("/");
  return { success: true };
}

// --- Nearby Spots ---

export async function updateNearbySpots(formData: FormData) {
  await requireAuth();
  const supabase = createServerClient();

  const spots = JSON.parse(formData.get("spots") as string);

  await supabase.from("nearby_spots").delete().neq("id", "00000000-0000-0000-0000-000000000000");

  if (spots.length > 0) {
    const { error } = await supabase.from("nearby_spots").insert(
      spots.map((s: { name: string; walk_time: string; drive_time: string | null }, i: number) => ({
        name: s.name,
        walk_time: s.walk_time,
        drive_time: s.drive_time || null,
        sort_order: i + 1,
      }))
    );
    if (error) return { error: error.message };
  }

  revalidatePath("/");
  return { success: true };
}

// --- Settings ---

export async function updateSettings(formData: FormData) {
  await requireAuth();
  const supabase = createServerClient();

  const settings = JSON.parse(formData.get("settings") as string);

  for (const setting of settings) {
    const { error } = await supabase
      .from("site_settings")
      .update({ value: setting.value })
      .eq("key", setting.key);
    if (error) return { error: error.message };
  }

  revalidatePath("/");
  return { success: true };
}

// --- Image Upload ---

export async function uploadImage(formData: FormData): Promise<{ url?: string; error?: string }> {
  await requireAuth();
  const supabase = createServerClient();

  const file = formData.get("file") as File;
  if (!file) return { error: "Keine Datei ausgewählt" };

  const ext = file.name.split(".").pop();
  const fileName = `${Date.now()}-${Math.random().toString(36).slice(2)}.${ext}`;
  const filePath = `uploads/${fileName}`;

  const { error } = await supabase.storage
    .from("images")
    .upload(filePath, file);

  if (error) return { error: error.message };

  const { data: urlData } = supabase.storage
    .from("images")
    .getPublicUrl(filePath);

  return { url: urlData.publicUrl };
}
