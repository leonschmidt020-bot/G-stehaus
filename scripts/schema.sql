-- Gästehaus CMS Schema
-- Run this in Supabase SQL Editor

-- Rooms
CREATE TABLE IF NOT EXISTS rooms (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  slug TEXT UNIQUE NOT NULL,
  title TEXT NOT NULL,
  subtitle TEXT NOT NULL DEFAULT '',
  price TEXT NOT NULL,
  price_note TEXT NOT NULL DEFAULT '',
  guests TEXT NOT NULL DEFAULT '',
  size TEXT NOT NULL DEFAULT '',
  description TEXT NOT NULL DEFAULT '',
  detail_description TEXT NOT NULL DEFAULT '',
  detail_details TEXT NOT NULL DEFAULT '',
  card_image TEXT NOT NULL DEFAULT '',
  extras TEXT[] DEFAULT '{}',
  amenities TEXT[] DEFAULT '{}',
  popular BOOLEAN DEFAULT FALSE,
  sort_order INTEGER DEFAULT 0
);

-- Room Images
CREATE TABLE IF NOT EXISTS room_images (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  room_id UUID REFERENCES rooms(id) ON DELETE CASCADE,
  src TEXT NOT NULL,
  alt TEXT NOT NULL DEFAULT '',
  sort_order INTEGER DEFAULT 0
);

-- Features
CREATE TABLE IF NOT EXISTS features (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  text TEXT NOT NULL DEFAULT '',
  sort_order INTEGER DEFAULT 0
);

-- Testimonials
CREATE TABLE IF NOT EXISTS testimonials (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  text TEXT NOT NULL,
  name TEXT NOT NULL DEFAULT '',
  source TEXT NOT NULL DEFAULT '',
  sort_order INTEGER DEFAULT 0
);

-- Nearby Spots
CREATE TABLE IF NOT EXISTS nearby_spots (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  walk_time TEXT NOT NULL DEFAULT '',
  drive_time TEXT,
  sort_order INTEGER DEFAULT 0
);

-- Site Settings (Key-Value)
CREATE TABLE IF NOT EXISTS site_settings (
  key TEXT PRIMARY KEY,
  value TEXT NOT NULL DEFAULT '',
  "group" TEXT NOT NULL DEFAULT '',
  label TEXT NOT NULL DEFAULT '',
  input_type TEXT NOT NULL DEFAULT 'text',
  sort_order INTEGER DEFAULT 0
);

-- Enable RLS on all tables (public read, write only via service_role key)
ALTER TABLE rooms ENABLE ROW LEVEL SECURITY;
ALTER TABLE room_images ENABLE ROW LEVEL SECURITY;
ALTER TABLE features ENABLE ROW LEVEL SECURITY;
ALTER TABLE testimonials ENABLE ROW LEVEL SECURITY;
ALTER TABLE nearby_spots ENABLE ROW LEVEL SECURITY;
ALTER TABLE site_settings ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public read access" ON rooms FOR SELECT USING (true);
CREATE POLICY "Allow public read access" ON room_images FOR SELECT USING (true);
CREATE POLICY "Allow public read access" ON features FOR SELECT USING (true);
CREATE POLICY "Allow public read access" ON testimonials FOR SELECT USING (true);
CREATE POLICY "Allow public read access" ON nearby_spots FOR SELECT USING (true);
CREATE POLICY "Allow public read access" ON site_settings FOR SELECT USING (true);

-- Create storage bucket for images
INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
VALUES (
  'images',
  'images',
  true,
  5242880,
  ARRAY['image/jpeg', 'image/png', 'image/webp']
) ON CONFLICT (id) DO NOTHING;

-- Allow public read access to images bucket
CREATE POLICY "Public read access" ON storage.objects
  FOR SELECT USING (bucket_id = 'images');

-- Allow authenticated uploads (we use service role key, so this is just a safety net)
CREATE POLICY "Service role upload" ON storage.objects
  FOR INSERT WITH CHECK (bucket_id = 'images');

CREATE POLICY "Service role update" ON storage.objects
  FOR UPDATE USING (bucket_id = 'images');

CREATE POLICY "Service role delete" ON storage.objects
  FOR DELETE USING (bucket_id = 'images');
