import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

async function seed() {
  console.log("Seeding database...");

  // --- Rooms ---
  const rooms = [
    {
      slug: "einzelzimmer",
      title: "Einzelzimmer",
      subtitle: "Ruhig, funktional und alles dabei",
      price: "ab 68 €",
      price_note: "pro Nacht",
      guests: "1 Person",
      size: "ca. 20 m²",
      description:
        "Ruhig und funktional. Bequemes Bett, Klimaanlage, Flachbild-TV, eigenes Bad mit ebenerdiger Dusche und kostenloses WLAN. Einige Zimmer mit Balkon.",
      detail_description:
        "Unser Einzelzimmer bietet alles, was Sie für einen erholsamen Aufenthalt brauchen. Das Zimmer ist ruhig gelegen und funktional eingerichtet – ideal für Geschäftsreisende oder Durchreisende, die Wert auf Komfort und Sauberkeit legen. Einige Zimmer verfügen über einen Balkon.",
      detail_details:
        "Jedes Zimmer verfügt über ein bequemes Bett, Klimaanlage, Flachbild-TV und ein eigenes Bad mit ebenerdiger Dusche. Kostenloses WLAN ist selbstverständlich. Im Haus stehen Ihnen außerdem eine Kaffee- und Teestation sowie ein Gemeinschaftskühlschrank zur Verfügung.",
      card_image: "/images/einzelzimmer-neu.jpg",
      extras: ["Klimaanlage", "Teilw. Balkon", "Ebenerdige Dusche"],
      amenities: [
        "Bequemes Bett",
        "Klimaanlage",
        "Flachbild-TV",
        "Kostenloses WLAN",
        "Eigenes Bad mit ebenerdiger Dusche",
        "Handtücher & Bettwäsche",
        "Teilweise mit Balkon",
        "Tisch",
        "Kostenloser Parkplatz",
      ],
      popular: false,
      sort_order: 1,
    },
    {
      slug: "doppelzimmer",
      title: "Doppelzimmer",
      subtitle: "Gemütlich zu zweit",
      price: "ab 90 €",
      price_note: "pro Nacht",
      guests: "2 Personen",
      size: "ca. 20 m²",
      description:
        "Gemütlich zu zweit. Alle Zimmer mit Klimaanlage, Flachbild-TV, eigenem Bad und WLAN. Einige Zimmer mit Balkon.",
      detail_description:
        "Unser Doppelzimmer bietet Platz und Komfort für zwei Personen. Gemütlich eingerichtet mit einem bequemen Bett, ist es die ideale Wahl für Paare, Freunde oder Kollegen auf Geschäftsreise.",
      detail_details:
        "Alle Doppelzimmer sind mit Klimaanlage, Flachbild-TV, eigenem Bad mit ebenerdiger Dusche und kostenlosem WLAN ausgestattet. Einige Zimmer verfügen über einen Balkon. Im Haus stehen Ihnen eine Kaffee- und Teestation sowie ein Gemeinschaftskühlschrank zur Verfügung.",
      card_image: "/images/doppelzimmer.jpg",
      extras: ["Klimaanlage", "Teilw. Balkon", "Ebenerdige Dusche"],
      amenities: [
        "Bequemes Bett",
        "Klimaanlage",
        "Flachbild-TV",
        "Kostenloses WLAN",
        "Eigenes Bad mit ebenerdiger Dusche",
        "Handtücher & Bettwäsche",
        "Teilweise mit Balkon",
        "Kostenloser Parkplatz",
      ],
      popular: true,
      sort_order: 2,
    },
    {
      slug: "familienzimmer",
      title: "Familienzimmer",
      subtitle: "Platz für die ganze Familie",
      price: "auf Anfrage",
      price_note: "auf Anfrage",
      guests: "Familien",
      size: "ca. 20 m²",
      description:
        "Für Familien bieten wir individuelle Lösungen an. Sprechen Sie uns einfach an, wir finden die passende Zimmerkombination.",
      detail_description:
        "Für Familien bieten wir individuelle Lösungen an. Einige unserer Zimmer lassen sich mit bis zu zwei weiteren Betten als Familienzimmer nutzen – so hat jeder genug Platz.",
      detail_details:
        "Sprechen Sie uns einfach an, wir finden die passende Zimmerkombination für Ihre Familie. Alle Zimmer verfügen über Klimaanlage, Flachbild-TV, eigenes Bad mit ebenerdiger Dusche und kostenloses WLAN. Im Haus stehen Ihnen außerdem eine Kaffee- und Teestation sowie ein Gemeinschaftskühlschrank zur Verfügung.",
      card_image: "/images/zimmer-kissen-blau.jpg",
      extras: ["Klimaanlage", "Individuell", "Ebenerdige Dusche"],
      amenities: [
        "Doppelbett + Schlafsofa",
        "Klimaanlage",
        "Flachbild-TV",
        "Kostenloses WLAN",
        "Eigenes Bad mit ebenerdiger Dusche",
        "Handtücher & Bettwäsche",
        "Flexible Zimmerkombination",
        "Kostenloser Parkplatz",
      ],
      popular: false,
      sort_order: 3,
    },
  ];

  const { data: insertedRooms, error: roomsError } = await supabase
    .from("rooms")
    .upsert(rooms, { onConflict: "slug" })
    .select();

  if (roomsError) {
    console.error("Error seeding rooms:", roomsError);
    return;
  }
  console.log(`Seeded ${insertedRooms.length} rooms`);

  // --- Room Images ---
  const roomMap = Object.fromEntries(insertedRooms.map((r) => [r.slug, r.id]));

  const roomImages = [
    // Einzelzimmer
    { room_id: roomMap["einzelzimmer"], src: "/images/einzelzimmer-new2.jpg", alt: "Einzelzimmer mit bequemem Bett", sort_order: 1 },
    { room_id: roomMap["einzelzimmer"], src: "/images/einzelbett.jpg", alt: "Einzelbett mit Nachttischen", sort_order: 2 },
    { room_id: roomMap["einzelzimmer"], src: "/images/bad-neu-1.jpg", alt: "Badezimmer mit ebenerdiger Dusche", sort_order: 3 },
    // Doppelzimmer
    { room_id: roomMap["doppelzimmer"], src: "/images/doppelzimmer.jpg", alt: "Doppelzimmer mit Doppelbett", sort_order: 1 },
    { room_id: roomMap["doppelzimmer"], src: "/images/doppelbett.jpg", alt: "Gemütliches Doppelbett", sort_order: 2 },
    { room_id: roomMap["doppelzimmer"], src: "/images/balkon.jpg", alt: "Balkon bei Sonnenuntergang", sort_order: 3 },
    { room_id: roomMap["doppelzimmer"], src: "/images/bad-neu-2.jpg", alt: "Badezimmer mit ebenerdiger Dusche", sort_order: 4 },
    // Familienzimmer
    { room_id: roomMap["familienzimmer"], src: "/images/zimmer-kissen-blau.jpg", alt: "Familienzimmer mit blauen Kissen", sort_order: 1 },
    { room_id: roomMap["familienzimmer"], src: "/images/familien-betten.jpg", alt: "Doppelbett und Einzelbett", sort_order: 2 },
    { room_id: roomMap["familienzimmer"], src: "/images/zimmer-og.jpg", alt: "Zimmer mit Schreibtisch und Schrank", sort_order: 3 },
    { room_id: roomMap["familienzimmer"], src: "/images/bad-neu-3.jpg", alt: "Badezimmer mit ebenerdiger Dusche", sort_order: 4 },
  ];

  const { error: imagesError } = await supabase.from("room_images").upsert(roomImages);
  if (imagesError) console.error("Error seeding room_images:", imagesError);
  else console.log(`Seeded ${roomImages.length} room images`);

  // --- Features ---
  const features = [
    { title: "Kostenloser Parkplatz", text: "Direkt vor dem Haus.", sort_order: 1 },
    { title: "Kaffee & Tee", text: "Starten Sie mit einer Tasse Kaffee oder Tee in den Tag. Kostenfreie Nutzung.", sort_order: 2 },
    { title: "Kein Frühstück, aber alles nah", text: "Frühstück bieten wir nicht an, dafür sind Bäckerei, Metzgerei und Supermarkt fußläufig erreichbar. Im Haus stehen Kaffee, Tee und ein Kühlschrank bereit.", sort_order: 3 },
    { title: "Klimaanlage & WLAN", text: "Alle Zimmer haben eine Klimaanlage und kostenloses WLAN. Dazu Flachbild-TV und eigenes Bad mit ebenerdiger Dusche.", sort_order: 4 },
    { title: "Check-in Zeiten", text: "Von 16 Uhr bis 20 Uhr. Oder nach vorheriger Vereinbarung.", sort_order: 5 },
    { title: "Bezahlung", text: "Direkt beim Check-in bar, per EC-Karte oder Kreditkarte.", sort_order: 6 },
    { title: "Haustiere", text: "Übernachtungen mit Haustieren sind leider nicht möglich.", sort_order: 7 },
  ];

  const { error: featuresError } = await supabase.from("features").upsert(features);
  if (featuresError) console.error("Error seeding features:", featuresError);
  else console.log(`Seeded ${features.length} features`);

  // --- Testimonials ---
  const testimonials = [
    {
      text: "Schönes hochwertiges Hotel, bzw. Gästehaus. Die Chefin gibt sich größte Mühe die Gäste gemütlich und zufrieden unterzubringen. Sehr sauber gehaltene große Zimmer mit moderner Ausstattung.",
      name: "Roman T.",
      source: "Google",
      sort_order: 1,
    },
    {
      text: "Ich war im Gästehaus Eimeldingen und es war sehr schön. Freundliche Gastgeberin, schönes, sauberes Zimmer. Liebe Grüße aus Sachsen!",
      name: "Tim S.",
      source: "Google",
      sort_order: 2,
    },
    {
      text: "Sehr sauber. Gut gelegen für Ausflüge in die Schweiz.",
      name: "Bernd G.",
      source: "Google",
      sort_order: 3,
    },
  ];

  const { error: testimonialsError } = await supabase.from("testimonials").upsert(testimonials);
  if (testimonialsError) console.error("Error seeding testimonials:", testimonialsError);
  else console.log(`Seeded ${testimonials.length} testimonials`);

  // --- Nearby Spots ---
  const nearbySpots = [
    { name: "Bäckerei", walk_time: "5 Min.", drive_time: null, sort_order: 1 },
    { name: "Aldi", walk_time: "5 Min.", drive_time: "2 Min.", sort_order: 2 },
    { name: "Penny", walk_time: "5 Min.", drive_time: "2 Min.", sort_order: 3 },
    { name: "DM", walk_time: "5 Min.", drive_time: "2 Min.", sort_order: 4 },
  ];

  const { error: spotsError } = await supabase.from("nearby_spots").upsert(nearbySpots);
  if (spotsError) console.error("Error seeding nearby_spots:", spotsError);
  else console.log(`Seeded ${nearbySpots.length} nearby spots`);

  // --- Site Settings ---
  const settings = [
    // Hero
    { key: "hero_title_line1", value: "Ankommen.", group: "hero", label: "Titel Zeile 1", input_type: "text", sort_order: 1 },
    { key: "hero_title_line2", value: "Durchatmen.", group: "hero", label: "Titel Zeile 2", input_type: "text", sort_order: 2 },
    { key: "hero_title_line3", value: "Wohlfühlen.", group: "hero", label: "Titel Zeile 3", input_type: "text", sort_order: 3 },
    { key: "hero_subtitle", value: "Kleines, familiengeführtes Gästehaus in Eimeldingen – ruhig gelegen und dennoch direkt an der A5. Nur wenige Minuten von Basel entfernt, ideal für Geschäftsreisende, Kurzaufenthalte im Dreiländereck oder als Zwischenstopp auf Ihrer Reise.", group: "hero", label: "Untertitel", input_type: "textarea", sort_order: 4 },
    // Kontakt
    { key: "contact_phone", value: "+49 (0) 7621 4 24 82 33", group: "kontakt", label: "Telefon", input_type: "text", sort_order: 1 },
    { key: "contact_email", value: "info@dasgaestehaus-eimeldingen.de", group: "kontakt", label: "E-Mail", input_type: "text", sort_order: 2 },
    { key: "contact_address", value: "Haltinger Weg 3, 79591 Eimeldingen", group: "kontakt", label: "Adresse", input_type: "text", sort_order: 3 },
    { key: "contact_phone_raw", value: "+4976214248233", group: "kontakt", label: "Telefon (für Links)", input_type: "text", sort_order: 4 },
    // Check-in
    { key: "checkin_time", value: "Täglich von 16:00 bis 20:00 Uhr", group: "checkin", label: "Check-in Zeit", input_type: "text", sort_order: 1 },
    { key: "checkout_time", value: "Bis 10:00 Uhr", group: "checkin", label: "Check-out Zeit", input_type: "text", sort_order: 2 },
    { key: "payment_methods", value: "Bar, EC-Karte oder Kreditkarte", group: "checkin", label: "Zahlungsarten", input_type: "text", sort_order: 3 },
    // Über uns
    { key: "about_title", value: "Willkommen im Gästehaus", group: "about", label: "Titel", input_type: "text", sort_order: 1 },
    { key: "about_text1", value: "Das Gästehaus in Eimeldingen verfügt über sechs gemütlich eingerichtete Zimmer für Geschäftsreisende und Urlaubsgäste. Sauber und persönlich.", group: "about", label: "Text Block 1", input_type: "textarea", sort_order: 2 },
    { key: "about_text2", value: "Alle Zimmer haben kostenloses WLAN, Klimaanlage, Flachbild-TV und ein eigenes Bad mit ebenerdiger Dusche. Einige Zimmer haben einen Balkon.", group: "about", label: "Text Block 2", input_type: "textarea", sort_order: 3 },
    { key: "about_location_title", value: "Im Dreiländereck Deutschland–Frankreich–Schweiz", group: "about", label: "Lage Titel", input_type: "text", sort_order: 4 },
    { key: "about_location_text1", value: "Eimeldingen liegt im Dreiländereck Deutschland–Frankreich–Schweiz. Die Schweizer Grenze, Basel und Lörrach erreichen Sie in wenigen Minuten. Die Autobahn A5 befindet sich in unmittelbarer Nähe, kostenlose Parkplätze stehen direkt am Haus zur Verfügung.", group: "about", label: "Lage Text 1", input_type: "textarea", sort_order: 5 },
    { key: "about_location_text2", value: "Trotz der verkehrsgünstigen Lage genießen Sie eine angenehme, ruhige Atmosphäre. Der Bahnhof liegt nur wenige Gehminuten entfernt – mit Regionalbahn und Bus erreichen Sie Lörrach, Basel und Freiburg bequem.", group: "about", label: "Lage Text 2", input_type: "textarea", sort_order: 6 },
    { key: "about_location_text3", value: "Ideal für Geschäftsreisende und alle, die das Markgräflerland und die nahe Umgebung erkunden möchten.", group: "about", label: "Lage Text 3", input_type: "textarea", sort_order: 7 },
    { key: "about_rooms_title", value: "Sechs Zimmer – mit allem was Sie brauchen", group: "about", label: "Zimmer Titel", input_type: "text", sort_order: 8 },
    { key: "about_rooms_text1", value: "Die Zimmer sind ca. 20 m² groß und als Einzel- oder Doppelzimmer buchbar. Einige Zimmer sind mit bis zu zwei weiteren Betten als Familienzimmer nutzbar. Einige haben einen Balkon.", group: "about", label: "Zimmer Text 1", input_type: "textarea", sort_order: 9 },
    { key: "about_rooms_text2", value: "Im Haus stehen kostenloser Kaffee und Tee sowie ein Gemeinschaftskühlschrank bereit. Im hellen Aufenthaltsraum können Sie entspannt mit einer Tasse Kaffee oder Tee in den Tag starten.", group: "about", label: "Zimmer Text 2", input_type: "textarea", sort_order: 10 },
    { key: "about_rooms_text3", value: "Frühstück bieten wir nicht an – dafür sind Bäckerei, Metzgerei und Supermärkte fußläufig erreichbar.", group: "about", label: "Zimmer Text 3", input_type: "textarea", sort_order: 11 },
    // Testimonials header
    { key: "testimonials_rating", value: "4.8 / 5 auf Google", group: "testimonials", label: "Bewertung", input_type: "text", sort_order: 1 },
    { key: "testimonials_summary", value: "Unsere Gäste schätzen besonders die ruhige Lage, die Sauberkeit und die persönliche Atmosphäre.", group: "testimonials", label: "Zusammenfassung", input_type: "textarea", sort_order: 2 },
  ];

  const { error: settingsError } = await supabase
    .from("site_settings")
    .upsert(settings, { onConflict: "key" });
  if (settingsError) console.error("Error seeding settings:", settingsError);
  else console.log(`Seeded ${settings.length} site settings`);

  console.log("Seeding complete!");
}

seed().catch(console.error);
