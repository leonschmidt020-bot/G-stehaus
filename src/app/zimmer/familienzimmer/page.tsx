import RoomDetail from "@/components/rooms/RoomDetail";

const images = [
  { src: "/images/zimmer1.jpg", alt: "Familienzimmer" },
  { src: "/images/room.jpg", alt: "Zimmeransicht" },
  { src: "/images/bathroom.jpg", alt: "Badezimmer mit ebenerdiger Dusche" },
];

const amenities = [
  "Doppelbett + Zustellbetten",
  "Klimaanlage",
  "Flachbild-TV",
  "Kostenloses WLAN",
  "Eigenes Bad mit ebenerdiger Dusche",
  "Handtücher & Bettwäsche",
  "Flexible Zimmerkombination",
  "Kostenloser Parkplatz",
];

export default function FamilienzimmerPage() {
  return (
    <RoomDetail
      title="Familienzimmer"
      subtitle="Platz für die ganze Familie"
      price="auf Anfrage"
      priceNote="auf Anfrage"
      guests="Familien"
      size="ca. 20 m²"
      description="Für Familien bieten wir individuelle Lösungen an. Einige unserer Zimmer lassen sich mit bis zu zwei weiteren Betten als Familienzimmer nutzen – so hat jeder genug Platz."
      details="Sprechen Sie uns einfach an, wir finden die passende Zimmerkombination für Ihre Familie. Alle Zimmer verfügen über Klimaanlage, Flachbild-TV, eigenes Bad mit ebenerdiger Dusche und kostenloses WLAN. Im Haus stehen Ihnen außerdem eine Kaffee- und Teestation sowie ein Gemeinschaftskühlschrank zur Verfügung."
      images={images}
      amenities={amenities}
    />
  );
}
