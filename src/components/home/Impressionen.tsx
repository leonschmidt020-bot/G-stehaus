"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import { gsap } from "@/lib/gsap";

const impressions = [
  { src: "/images/bad1.jpg", alt: "Modernes Bad mit ebenerdiger Dusche" },
  { src: "/images/bad2.jpg", alt: "Badezimmer mit Waschbecken und Dusche" },
  { src: "/images/bad3.jpg", alt: "Geräumiges Bad mit Glasdusche" },
  { src: "/images/aufenthalt.jpg", alt: "Heller Aufenthaltsraum" },
  { src: "/images/balkon.jpg", alt: "Balkon bei Sonnenuntergang" },
  { src: "/images/exterior2.jpg", alt: "Das Gästehaus von außen" },
];

export default function Impressionen() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced || !sectionRef.current) return;

    const isMobile = window.innerWidth < 768;

    const ctx = gsap.context(() => {
      const items = sectionRef.current!.querySelectorAll("[data-impression]");
      gsap.fromTo(
        items,
        { opacity: 0, y: isMobile ? 0 : 30 },
        {
          opacity: 1,
          y: 0,
          duration: isMobile ? 0.5 : 0.8,
          stagger: isMobile ? 0.06 : 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            once: true,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-[clamp(6rem,14vh,10rem)]">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid md:grid-cols-[2fr_3fr] gap-8 md:gap-20 items-start mb-12">
          <div data-impression>
            <p className="text-sage font-medium text-[11px] uppercase tracking-[0.25em] mb-4">
              Impressionen
            </p>
            <h2 className="text-[clamp(1.75rem,4vw,2.75rem)] font-serif text-[var(--color-primary)] tracking-tight leading-tight">
              Einblicke ins Gästehaus
            </h2>
          </div>
          <div data-impression>
            <p className="text-[var(--color-text)] font-light leading-relaxed text-base md:text-[17px]">
              Moderne Bäder mit ebenerdiger Dusche, ein heller Aufenthaltsraum
              und ein Balkon mit Blick über Eimeldingen – hier ein paar
              Eindrücke.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {impressions.map((img, i) => (
            <div
              key={i}
              data-impression
              className={`relative overflow-hidden group ${
                i === 0 ? "row-span-2 aspect-[3/4]" : "aspect-square"
              }`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 768px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
