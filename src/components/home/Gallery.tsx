"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import { gsap } from "@/lib/gsap";

const images = [
  { src: "/images/exterior.jpg", alt: "Das Gästehaus von außen", span: "md:col-span-2 md:row-span-2" },
  { src: "/images/room.jpg", alt: "Zimmer mit bequemem Bett und Flachbild-TV" },
  { src: "/images/bathroom.jpg", alt: "Helles Badezimmer mit Dachfenster" },
  { src: "/images/breakfast.jpg", alt: "Gemeinschaftsbereich im Gästehaus" },
  { src: "/images/exterior.jpg", alt: "Eingangsbereich des Gästehauses", span: "md:col-span-2" },
];

export default function Gallery() {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced || !gridRef.current) return;

    const items = gridRef.current.querySelectorAll("[data-gallery-item]");
    if (items.length === 0) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        items,
        { opacity: 0, y: 50, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.7,
          stagger: 0.1,
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
    <section className="py-[clamp(4rem,10vh,8rem)] overflow-hidden">
      <div className="container mx-auto px-6 max-w-6xl">

        <div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-3 auto-rows-[250px]"
        >
          {images.map((img, i) => (
            <div
              key={i}
              data-gallery-item
              className={`relative overflow-hidden rounded-[var(--radius-lg)] group ${img.span || ""}`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
