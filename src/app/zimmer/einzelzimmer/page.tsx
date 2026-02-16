import RoomDetail from "@/components/rooms/RoomDetail";

const images = [
  { src: "/images/zimmer1.jpg", alt: "Einzelzimmer mit bequemem Bett" },
  { src: "/images/bathroom.jpg", alt: "Badezimmer mit ebenerdiger Dusche" },
  { src: "/images/room.jpg", alt: "Zimmeransicht" },
];

const amenities = [
  "Bequemes Einzelbett",
  "Klimaanlage",
  "Flachbild-TV",
  "Kostenloses WLAN",
  "Eigenes Bad mit ebenerdiger Dusche",
  "Handtücher & Bettwäsche",
  "Schreibtisch",
  "Kostenloser Parkplatz",
];

export default function EinzelzimmerPage() {
  return (
    <RoomDetail
      title="Einzelzimmer"
      subtitle="Ruhig, funktional und alles dabei"
      price="ab 68 €"
      priceNote="pro Nacht"
      guests="1 Person"
      size="ca. 20 m²"
      description="Unser Einzelzimmer bietet alles, was Sie für einen erholsamen Aufenthalt brauchen. Das Zimmer ist ruhig gelegen und funktional eingerichtet – ideal für Geschäftsreisende oder Durchreisende, die Wert auf Komfort und Sauberkeit legen."
      details="Jedes Zimmer verfügt über ein bequemes Bett, Klimaanlage, Flachbild-TV und ein eigenes Bad mit ebenerdiger Dusche. Kostenloses WLAN ist selbstverständlich. Im Haus stehen Ihnen außerdem eine Kaffee- und Teestation sowie ein Gemeinschaftskühlschrank zur Verfügung."
      images={images}
      amenities={amenities}
    />
  );
}
