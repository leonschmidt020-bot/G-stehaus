import postgres from "postgres";

const connectionString = `postgresql://postgres.pwyiuzpvomxhejhqcpbz:${process.env.SUPABASE_DB_PASSWORD}@aws-0-eu-central-1.pooler.supabase.com:6543/postgres`;

const sql = postgres(connectionString, { ssl: "require" });

async function createTables() {
  console.log("Creating tables...");

  await sql`
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
    )
  `;
  console.log("  rooms ✓");

  await sql`
    CREATE TABLE IF NOT EXISTS room_images (
      id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
      room_id UUID REFERENCES rooms(id) ON DELETE CASCADE,
      src TEXT NOT NULL,
      alt TEXT NOT NULL DEFAULT '',
      sort_order INTEGER DEFAULT 0
    )
  `;
  console.log("  room_images ✓");

  await sql`
    CREATE TABLE IF NOT EXISTS features (
      id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
      title TEXT NOT NULL,
      text TEXT NOT NULL DEFAULT '',
      sort_order INTEGER DEFAULT 0
    )
  `;
  console.log("  features ✓");

  await sql`
    CREATE TABLE IF NOT EXISTS testimonials (
      id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
      text TEXT NOT NULL,
      name TEXT NOT NULL DEFAULT '',
      source TEXT NOT NULL DEFAULT '',
      sort_order INTEGER DEFAULT 0
    )
  `;
  console.log("  testimonials ✓");

  await sql`
    CREATE TABLE IF NOT EXISTS nearby_spots (
      id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
      name TEXT NOT NULL,
      walk_time TEXT NOT NULL DEFAULT '',
      drive_time TEXT,
      sort_order INTEGER DEFAULT 0
    )
  `;
  console.log("  nearby_spots ✓");

  await sql`
    CREATE TABLE IF NOT EXISTS site_settings (
      key TEXT PRIMARY KEY,
      value TEXT NOT NULL DEFAULT '',
      "group" TEXT NOT NULL DEFAULT '',
      label TEXT NOT NULL DEFAULT '',
      input_type TEXT NOT NULL DEFAULT 'text',
      sort_order INTEGER DEFAULT 0
    )
  `;
  console.log("  site_settings ✓");

  console.log("All tables created!");
  await sql.end();
}

createTables().catch((e) => {
  console.error(e);
  process.exit(1);
});
