import { createServerClient } from "@/lib/supabase/client";
import type { Testimonial } from "@/lib/supabase/types";

export async function getTestimonials(): Promise<Testimonial[]> {
  const supabase = createServerClient();
  const { data, error } = await supabase
    .from("testimonials")
    .select("*")
    .order("sort_order");
  if (error) throw error;
  return data;
}
