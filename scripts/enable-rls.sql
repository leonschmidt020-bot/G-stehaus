-- Enable Row Level Security (RLS) on all tables
-- Run this in Supabase SQL Editor
--
-- After this:
--   - anon/authenticated users can only READ data
--   - INSERT/UPDATE/DELETE requires service_role key (used by our Next.js server)

-- 1. Enable RLS on all tables
ALTER TABLE rooms ENABLE ROW LEVEL SECURITY;
ALTER TABLE room_images ENABLE ROW LEVEL SECURITY;
ALTER TABLE features ENABLE ROW LEVEL SECURITY;
ALTER TABLE testimonials ENABLE ROW LEVEL SECURITY;
ALTER TABLE nearby_spots ENABLE ROW LEVEL SECURITY;
ALTER TABLE site_settings ENABLE ROW LEVEL SECURITY;

-- 2. Allow public read access (SELECT) for all tables
-- The website needs to read this data to render pages

CREATE POLICY "Allow public read access"
  ON rooms FOR SELECT
  USING (true);

CREATE POLICY "Allow public read access"
  ON room_images FOR SELECT
  USING (true);

CREATE POLICY "Allow public read access"
  ON features FOR SELECT
  USING (true);

CREATE POLICY "Allow public read access"
  ON testimonials FOR SELECT
  USING (true);

CREATE POLICY "Allow public read access"
  ON nearby_spots FOR SELECT
  USING (true);

CREATE POLICY "Allow public read access"
  ON site_settings FOR SELECT
  USING (true);

-- No INSERT/UPDATE/DELETE policies needed:
-- Our admin uses createServerClient() with SUPABASE_SERVICE_ROLE_KEY,
-- which bypasses RLS entirely. Without explicit policies, these
-- operations are denied for anon/authenticated roles.
