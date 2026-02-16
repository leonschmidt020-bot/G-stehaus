import RoomDetail from "@/components/rooms/RoomDetail";

const images = [
  { src: "/images/room.jpg", alt: "Doppelzimmer mit Doppelbett" },
  { src: "/images/zimmer1.jpg", alt: "Gemütliche Zimmeransicht" },
  { src: "/images/bathroom.jpg", alt: "Badezimmer mit ebenerdiger Dusche" },
];

const amenities = [
  "Bequemes Doppelbett",
  "Klimaanlage",
  "Flachbild-TV",
  "Kostenloses WLAN",
  "Eigenes Bad mit ebenerdiger Dusche",
  "Handtücher & Bettwäsche",
  "Teilweise mit Balkon",
  "Kostenloser Parkplatz",
];

export default function DoppelzimmerPage() {
  return (
    <RoomDetail
      title="Doppelzimmer"
      subtitle="Gemütlich zu zweit"
      price="ab 90 €"
      priceNote="pro Nacht"
      guests="2 Personen"
      size="ca. 20 m²"
      description="Unser Doppelzimmer bietet Platz und Komfort für zwei Personen. Gemütlich eingerichtet mit einem bequemen Doppelbett, ist es die ideale Wahl für Paare, Freunde oder Kollegen auf Geschäftsreise."
      details="Alle Doppelzimmer sind mit Klimaanlage, Flachbild-TV, eigenem Bad mit ebenerdiger Dusche und kostenlosem WLAN ausgestattet. Einige Zimmer verfügen über einen Balkon. Im Haus stehen Ihnen eine Kaffee- und Teestation sowie ein Gemeinschaftskühlschrank zur Verfügung."
      images={images}
      amenities={amenities}
      popular
    />
  );
}
