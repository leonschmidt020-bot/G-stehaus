"use client";

import Image from "next/image";
import { useRef, useEffect } from "react";
import { gsap } from "@/lib/gsap";
import OrganicButton from "@/components/ui/OrganicButton";

const rooms = [
  {
    title: "Einzelzimmer",
    price: "ab 68 €",
    priceNote: "pro Nacht",
    guests: "1 Person",
    size: "ca. 20 m²",
    image: "/images/room.jpg",
    description:
      "Ruhig und funktional. Bequemes Bett, Klimaanlage, Flachbild-TV, eigenes Bad mit ebenerdiger Dusche und kostenloses WLAN.",
    extras: ["Klimaanlage", "Flachbild-TV", "Ebenerdige Dusche"],
  },
  {
    title: "Doppelzimmer",
    price: "ab 90 €",
    priceNote: "pro Nacht",
    guests: "2 Personen",
    size: "ca. 20 m²",
    image: "/images/room.jpg",
    description:
      "Gemütlich zu zweit. Alle Zimmer mit Klimaanlage, Flachbild-TV, eigenem Bad und WLAN. Einige Zimmer mit Balkon.",
    extras: ["Klimaanlage", "Teilw. Balkon", "Ebenerdige Dusche"],
    popular: true,
  },
  {
    title: "Familienzimmer",
    price: "auf Anfrage",
    priceNote: "",
    guests: "Familien",
    size: "ca. 20 m²",
    image: "/images/bathroom.jpg",
    description:
      "Für Familien bieten wir individuelle Lösungen an. Sprechen Sie uns einfach an — wir finden die passende Zimmerkombination.",
    extras: ["Klimaanlage", "Auf Anfrage", "Ebenerdige Dusche"],
  },
];

export default function RoomGrid() {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced || !gridRef.current) return;

    const cards = gridRef.current.querySelectorAll("[data-room-card]");
    if (cards.length === 0) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        cards,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: gridRef.current,
            start: "top 80%",
            once: true,
          },
        }
      );
    }, gridRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={gridRef}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
    >
      {rooms.map((room, i) => (
        <div
          key={i}
          data-room-card
          className={`glass-white rounded-[var(--radius-xl)] overflow-hidden group flex flex-col transition-shadow duration-500 hover:shadow-premium-ui ${
            room.popular ? "ring-1 ring-sage/20" : ""
          }`}
        >
          <div className="relative h-64 overflow-hidden">
            <Image
              src={room.image}
              alt={room.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
            />
            {room.popular && (
              <div className="absolute top-4 left-4 bg-sage text-white text-xs font-medium px-3 py-1 rounded-full">
                Beliebteste Wahl
              </div>
            )}
            <div className="absolute top-4 right-4 glass px-4 py-1.5 rounded-full text-[var(--color-primary)] text-sm font-medium">
              {room.price}
            </div>
          </div>

          <div className="p-7 flex flex-col flex-grow">
            <h3 className="text-xl font-serif text-[var(--color-primary)] mb-1">
              {room.title}
            </h3>
            <p className="text-earth-muted text-xs mb-4">
              {room.guests} · {room.size} · {room.priceNote}
            </p>

            <p className="text-[var(--color-text)] text-sm font-light leading-relaxed mb-5 flex-grow">
              {room.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-6">
              {room.extras.map((extra) => (
                <span key={extra} className="text-[11px] text-earth-muted border border-[var(--color-glass-border)] rounded-full px-3 py-1">
                  {extra}
                </span>
              ))}
            </div>

            <OrganicButton href="/kontakt" variant="outline" arrow className="w-full justify-center text-center">
              Anfragen
            </OrganicButton>
          </div>
        </div>
      ))}
    </div>
  );
}
