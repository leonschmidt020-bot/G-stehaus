export interface Room {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  price: string;
  price_note: string;
  guests: string;
  size: string;
  description: string;
  detail_description: string;
  detail_details: string;
  card_image: string;
  extras: string[];
  amenities: string[];
  popular: boolean;
  sort_order: number;
}

export interface RoomImage {
  id: string;
  room_id: string;
  src: string;
  alt: string;
  sort_order: number;
}

export interface Feature {
  id: string;
  title: string;
  text: string;
  sort_order: number;
}

export interface Testimonial {
  id: string;
  text: string;
  name: string;
  source: string;
  sort_order: number;
}

export interface NearbySpot {
  id: string;
  name: string;
  walk_time: string;
  drive_time: string | null;
  sort_order: number;
}

export interface SiteSetting {
  key: string;
  value: string;
  group: string;
  label: string;
  input_type: string;
  sort_order: number;
}