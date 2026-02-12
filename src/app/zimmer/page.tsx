import RoomGrid from "@/components/rooms/RoomGrid";

export default function RoomsPage() {
  return (
    <>
      {/* Page Header */}
      <section className="py-[clamp(3rem,8vh,5rem)] bg-[var(--surface)]">
        <div className="container mx-auto px-6 max-w-3xl">
          <h1 className="text-[clamp(2.25rem,5vw,3.75rem)] font-serif text-[var(--color-primary)] tracking-tight">
            Zimmer & Preise
          </h1>
          <p className="text-[var(--color-text)] mt-4 font-light leading-relaxed text-lg">
            Sechs Zimmer, jeweils ca. 20 m², buchbar als Einzel-, Doppel- oder
            Familienzimmer. Alle Preise pro Nacht, inklusive WLAN, Parkplatz
            und Klimaanlage.
          </p>
        </div>
      </section>

      {/* Room Grid */}
      <section className="py-[clamp(3rem,8vh,5rem)]">
        <div className="container mx-auto px-6">
          <RoomGrid />
        </div>
      </section>
    </>
  );
}
