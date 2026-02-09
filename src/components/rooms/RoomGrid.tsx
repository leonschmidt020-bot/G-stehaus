import Image from "next/image";
import { Users, Wifi, Maximize } from "lucide-react";
import FadeIn from "@/components/ui/FadeIn";

const rooms = [
  {
    title: "Einzelzimmer",
    price: "ab 65€",
    guests: "1 Person",
    size: "18m²",
    image: "/images/room.jpg",
    description: "Perfekt für Geschäftsreisende. Kompakt, modern und mit allem ausgestattet, was Sie brauchen.",
  },
  {
    title: "Doppelzimmer",
    price: "ab 95€",
    guests: "2 Personen",
    size: "24m²",
    image: "/images/room.jpg",
    description: "Ideal für Paare. Großzügiges Bett und gemütliche Atmosphäre für entspannte Nächte.",
  },
  {
    title: "Familienzimmer",
    price: "ab 140€",
    guests: "2-4 Personen",
    size: "35m²",
    image: "/images/room.jpg",
    description: "Raum für alle. Separate Bereiche und viel Platz für die ganze Familie.",
  },
];

export default function RoomGrid() {
  return (
    <section className="py-24 bg-soft-white" id="zimmer">
      <div className="container mx-auto px-6">
        <FadeIn direction="up">
          <div className="text-center mb-16">
            <span className="text-secondary font-sans font-semibold tracking-wider uppercase text-sm">Unterkünfte</span>
            <h2 className="text-4xl md:text-5xl font-serif text-primary mt-3">Wählen Sie Ihren Rückzugsort</h2>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {rooms.map((room, index) => (
            <FadeIn key={index} direction="up" delay={index * 0.2} className="h-full">
              <div
                className="group bg-white rounded-soft overflow-hidden shadow-soft-ui hover:shadow-floating transition-all duration-500 transform hover:-translate-y-2 h-full flex flex-col"
              >
                {/* Image Area with Soft Mask */}
                <div className="relative h-64 overflow-hidden flex-shrink-0">
                  <Image
                    src={room.image}
                    alt={room.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Content */}
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex justify-between items-baseline mb-4">
                    <h3 className="text-2xl font-serif text-primary">{room.title}</h3>
                    <span className="text-accent font-bold text-lg">{room.price}</span>
                  </div>

                  <p className="text-neutral-500 mb-6 text-sm leading-relaxed min-h-[60px]">
                    {room.description}
                  </p>

                  <div className="mt-auto">
                    {/* Icons / Specs */}
                    <div className="flex gap-4 mb-8 text-neutral-400">
                      <div className="flex items-center gap-2 text-xs font-medium bg-soft-white px-3 py-1 rounded-full">
                        <Users size={14} /> {room.guests}
                      </div>
                      <div className="flex items-center gap-2 text-xs font-medium bg-soft-white px-3 py-1 rounded-full">
                        <Maximize size={14} /> {room.size}
                      </div>
                      <div className="flex items-center gap-2 text-xs font-medium bg-soft-white px-3 py-1 rounded-full">
                        <Wifi size={14} /> inkl.
                      </div>
                    </div>

                    <button className="w-full py-4 rounded-[1rem] border border-secondary text-primary font-medium hover:bg-sage hover:text-white transition-colors duration-300">
                      Details & Buchen
                    </button>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
