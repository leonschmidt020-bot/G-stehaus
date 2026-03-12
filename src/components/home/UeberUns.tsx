"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import { gsap } from "@/lib/gsap";

interface UeberUnsProps {
  aboutTitle: string;
  aboutText1: string;
  aboutText2: string;
  locationTitle: string;
  locationText1: string;
  locationText2: string;
  locationText3: string;
  roomsTitle: string;
  roomsText1: string;
  roomsText2: string;
  roomsText3: string;
}

export default function UeberUns({
  aboutTitle,
  aboutText1,
  aboutText2,
  locationTitle,
  locationText1,
  locationText2,
  locationText3,
  roomsTitle,
  roomsText1,
  roomsText2,
  roomsText3,
}: UeberUnsProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced || !containerRef.current) return;

    const isMobile = window.innerWidth < 768;

    const ctx = gsap.context(() => {
      const textBlocks =
        containerRef.current!.querySelectorAll("[data-reveal]");
      textBlocks.forEach((block) => {
        gsap.fromTo(
          block,
          { y: isMobile ? 0 : 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: isMobile ? 0.5 : 1.2,
            ease: "power2.out",
            scrollTrigger: {
              trigger: block,
              start: "top 85%",
              once: true,
            },
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef}>
      {/* Block 1: Willkommen */}
      <section className="py-[clamp(6rem,14vh,10rem)]">
        <div className="container mx-auto px-6 max-w-6xl">
          <div
            data-reveal
            className="grid md:grid-cols-[2fr_3fr] gap-8 md:gap-20 items-start"
          >
            <div>
              <h2 className="text-[clamp(1.75rem,4vw,2.75rem)] font-serif text-[var(--color-primary)] leading-tight">
                {aboutTitle}
              </h2>
            </div>
            <div className="space-y-5">
              <p className="text-[var(--color-text)] font-light leading-relaxed text-base md:text-[17px]">
                {aboutText1}
              </p>
              <p className="text-[var(--color-text)] font-light leading-relaxed text-base md:text-[17px]">
                {aboutText2}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Full-bleed room image */}
      <section className="relative w-full h-[70vh] min-h-[400px] max-h-[800px]">
        <Image
          src="/images/doppelzimmer.jpg"
          alt="Gemütliches Doppelzimmer mit grünen Kissen"
          fill
          sizes="100vw"
          className="object-cover"
        />
      </section>

      {/* Block 2: Lage */}
      <section className="py-[clamp(6rem,14vh,10rem)]">
        <div className="container mx-auto px-6 max-w-6xl">
          <div
            data-reveal
            className="grid md:grid-cols-[2fr_3fr] gap-8 md:gap-20 items-start"
          >
            <div>
              <p className="text-sage font-medium text-[11px] uppercase tracking-[0.25em] mb-4">
                Lage
              </p>
              <h3 className="text-[clamp(1.5rem,3vw,2.25rem)] font-serif text-[var(--color-primary)] leading-tight">
                {locationTitle}
              </h3>
            </div>
            <div className="space-y-5">
              <p className="text-[var(--color-text)] font-light leading-relaxed text-base md:text-[17px]">
                {locationText1}
              </p>
              <p className="text-[var(--color-text)] font-light leading-relaxed text-base md:text-[17px]">
                {locationText2}
              </p>
              <p className="text-[var(--color-text)] font-light leading-relaxed text-base md:text-[17px]">
                {locationText3}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Block 3: Zimmer */}
      <section className="pb-[clamp(6rem,14vh,10rem)]">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
            <div data-reveal>
              <p className="text-sage font-medium text-[11px] uppercase tracking-[0.25em] mb-4">
                Unsere Zimmer
              </p>
              <h3 className="text-[clamp(1.5rem,3vw,2.25rem)] font-serif text-[var(--color-primary)] mb-6 leading-tight">
                {roomsTitle}
              </h3>
              <div className="space-y-5">
                <p className="text-[var(--color-text)] font-light leading-relaxed text-base md:text-[17px]">
                  {roomsText1}
                </p>
                <p className="text-[var(--color-text)] font-light leading-relaxed text-base md:text-[17px]">
                  {roomsText2}
                </p>
                <p className="text-[var(--color-text)] font-light leading-relaxed text-base md:text-[17px]">
                  {roomsText3}
                </p>
              </div>
            </div>
            <div
              data-reveal
              className="relative aspect-[4/5] overflow-hidden"
            >
              <Image
                src="/images/zimmer-kissen-blau.jpg"
                alt="Familienzimmer mit blauen Kissen"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
