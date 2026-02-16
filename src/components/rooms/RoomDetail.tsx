"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useEffect } from "react";
import { gsap } from "@/lib/gsap";
import OrganicButton from "@/components/ui/OrganicButton";
import CheckInInfo from "@/components/CheckInInfo";

interface RoomDetailProps {
  title: string;
  subtitle: string;
  price: string;
  priceNote: string;
  guests: string;
  size: string;
  description: string;
  details: string;
  images: { src: string; alt: string }[];
  amenities: string[];
  popular?: boolean;
}

export default function RoomDetail({
  title,
  subtitle,
  price,
  priceNote,
  guests,
  size,
  description,
  details,
  images,
  amenities,
  popular,
}: RoomDetailProps) {
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced || !pageRef.current) return;

    const ctx = gsap.context(() => {
      const reveals = pageRef.current!.querySelectorAll("[data-reveal]");
      reveals.forEach((el) => {
        gsap.fromTo(
          el,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
              once: true,
            },
          }
        );
      });
    }, pageRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={pageRef}>
      {/* ── Hero image ── */}
      <section className="relative w-full h-[60vh] min-h-[350px] max-h-[650px] -mt-20">
        <Image
          src={images[0].src}
          alt={images[0].alt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--background)] via-transparent to-black/20" />

        {/* Back link */}
        <div className="absolute top-28 left-6 z-10">
          <Link
            href="/zimmer"
            className="inline-flex items-center gap-2 text-white/70 text-sm font-medium hover:text-white transition-colors"
          >
            <span>&#8592;</span>
            Alle Zimmer
          </Link>
        </div>
      </section>

      {/* ── Title + meta bar ── */}
      <section className="pt-8 pb-[clamp(3rem,6vh,5rem)]">
        <div className="container mx-auto px-6 max-w-6xl">
          <div
            data-reveal
            className="flex flex-col md:flex-row md:items-end md:justify-between gap-6"
          >
            <div>
              {popular && (
                <span className="inline-block bg-sage text-white text-xs font-medium px-3 py-1 rounded-full mb-4">
                  Beliebteste Wahl
                </span>
              )}
              <h1 className="text-[clamp(2.25rem,5vw,3.75rem)] font-serif text-[var(--color-primary)] tracking-tight leading-tight">
                {title}
              </h1>
              <p className="text-[var(--color-text)] font-light text-lg mt-2">
                {subtitle}
              </p>
            </div>
            <div className="flex items-baseline gap-2 shrink-0">
              <span className="text-[clamp(1.5rem,3vw,2rem)] font-serif text-[var(--color-primary)]">
                {price}
              </span>
              <span className="text-[var(--color-text)] text-sm font-light">
                {priceNote}
              </span>
            </div>
          </div>

          {/* Quick facts */}
          <div
            data-reveal
            className="flex flex-wrap gap-6 mt-8 pt-8 border-t border-[var(--color-primary)]/10"
          >
            <div>
              <p className="text-sage font-medium text-[11px] uppercase tracking-[0.25em] mb-1">
                Gäste
              </p>
              <p className="text-[var(--color-primary)] text-sm">{guests}</p>
            </div>
            <div>
              <p className="text-sage font-medium text-[11px] uppercase tracking-[0.25em] mb-1">
                Größe
              </p>
              <p className="text-[var(--color-primary)] text-sm">{size}</p>
            </div>
            <div>
              <p className="text-sage font-medium text-[11px] uppercase tracking-[0.25em] mb-1">
                Preis
              </p>
              <p className="text-[var(--color-primary)] text-sm">{price}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Description — editorial two-column split ── */}
      <section className="pb-[clamp(4rem,10vh,8rem)]">
        <div className="container mx-auto px-6 max-w-6xl">
          <div
            data-reveal
            className="grid md:grid-cols-[2fr_3fr] gap-8 md:gap-20 items-start"
          >
            <div>
              <p className="text-sage font-medium text-[11px] uppercase tracking-[0.25em] mb-4">
                Über das Zimmer
              </p>
              <h2 className="text-[clamp(1.5rem,3vw,2.25rem)] font-serif text-[var(--color-primary)] leading-tight">
                Alles was Sie brauchen
              </h2>
            </div>
            <div className="space-y-5">
              <p className="text-[var(--color-text)] font-light leading-relaxed text-base md:text-[17px]">
                {description}
              </p>
              <p className="text-[var(--color-text)] font-light leading-relaxed text-base md:text-[17px]">
                {details}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Image gallery — two remaining images side by side ── */}
      {images.length > 1 && (
        <section className="pb-[clamp(4rem,10vh,8rem)]">
          <div className="container mx-auto px-6 max-w-6xl">
            <div
              data-reveal
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
            >
              {images.slice(1).map((img, i) => (
                <div
                  key={i}
                  className="relative aspect-[4/3] overflow-hidden group"
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Amenities grid ── */}
      <section className="pb-[clamp(4rem,10vh,8rem)] bg-[var(--surface)]">
        <div className="container mx-auto px-6 max-w-6xl py-[clamp(4rem,10vh,8rem)]">
          <div
            data-reveal
            className="grid md:grid-cols-[2fr_3fr] gap-8 md:gap-20 items-start"
          >
            <div>
              <p className="text-sage font-medium text-[11px] uppercase tracking-[0.25em] mb-4">
                Ausstattung
              </p>
              <h2 className="text-[clamp(1.5rem,3vw,2.25rem)] font-serif text-[var(--color-primary)] leading-tight">
                Im Zimmer enthalten
              </h2>
            </div>
            <div className="grid grid-cols-2 gap-y-5 gap-x-8">
              {amenities.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 text-[var(--color-text)] text-[15px] font-light"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-sage shrink-0" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Check-in / Check-out / Bezahlung ── */}
      <CheckInInfo />

      {/* ── CTA ── */}
      <section className="py-[clamp(4rem,10vh,8rem)]">
        <div className="container mx-auto px-6 max-w-6xl text-center">
          <div data-reveal>
            <h2 className="text-[clamp(1.75rem,4vw,2.75rem)] font-serif text-[var(--color-primary)] mb-4">
              Interesse?
            </h2>
            <p className="text-[var(--color-text)] font-light text-base md:text-lg mb-8 max-w-lg mx-auto">
              Schreiben Sie uns oder rufen Sie an – wir antworten in der Regel
              innerhalb weniger Stunden.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <OrganicButton href="/kontakt" variant="primary" arrow>
                Verfügbarkeit anfragen
              </OrganicButton>
              <OrganicButton href="/zimmer" variant="outline" arrow>
                Alle Zimmer ansehen
              </OrganicButton>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
