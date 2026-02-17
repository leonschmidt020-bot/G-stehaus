"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import { gsap } from "@/lib/gsap";

const galleryImages = [
  { src: "/images/exterior2.jpg", alt: "Das Gästehaus von außen" },
  { src: "/images/doppelbett.jpg", alt: "Gemütliches Doppelbett" },
  { src: "/images/balkon.jpg", alt: "Balkon bei Sonnenuntergang" },
  { src: "/images/aufenthalt.jpg", alt: "Heller Aufenthaltsraum" },
];

export default function UeberUns() {
  const containerRef = useRef<HTMLDivElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced || !containerRef.current) return;

    const ctx = gsap.context(() => {
      const textBlocks =
        containerRef.current!.querySelectorAll("[data-reveal]");
      textBlocks.forEach((block) => {
        gsap.fromTo(
          block,
          { y: 60, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: block,
              start: "top 85%",
              once: true,
            },
          }
        );
      });

      /* Gallery items */
      const items = containerRef.current!.querySelectorAll("[data-gallery]");
      if (items.length) {
        gsap.fromTo(
          items,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.08,
            ease: "power3.out",
            scrollTrigger: {
              trigger: galleryRef.current,
              start: "top 85%",
              once: true,
            },
          }
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef}>
      {/* ── Block 1: Willkommen — editorial two-column split (Brecon section01) ── */}
      <section className="py-[clamp(6rem,14vh,10rem)]">
        <div className="container mx-auto px-6 max-w-6xl">
          <div
            data-reveal
            className="grid md:grid-cols-[2fr_3fr] gap-8 md:gap-20 items-start"
          >
            <div>
              <h2 className="text-[clamp(1.75rem,4vw,2.75rem)] font-serif text-[var(--color-primary)] leading-tight">
                Willkommen im Gästehaus
              </h2>
            </div>
            <div className="space-y-5">
              <p className="text-[var(--color-text)] font-light leading-relaxed text-base md:text-[17px]">
                Das Gästehaus in Eimeldingen verfügt über sechs gemütlich
                eingerichtete Zimmer für Geschäftsreisende und
                Urlaubsgäste. Sauber und persönlich.
              </p>
              <p className="text-[var(--color-text)] font-light leading-relaxed text-base md:text-[17px]">
                Alle Zimmer haben kostenloses WLAN, Klimaanlage, Flachbild-TV
                und ein eigenes Bad mit ebenerdiger Dusche. Einige Zimmer haben
                einen Balkon.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Horizontal-scroll gallery (Brecon section01 carousel) ── */}
      <section ref={galleryRef} className="pb-[clamp(4rem,10vh,8rem)] overflow-hidden">
        <div className="flex gap-3 md:gap-4 overflow-x-auto px-6 snap-x snap-mandatory scrollbar-hide">
          {galleryImages.map((img, i) => (
            <div
              key={i}
              data-gallery
              className="flex-none w-[280px] md:w-[350px] lg:w-[420px] aspect-square relative snap-start overflow-hidden group"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 768px) 280px, (max-width: 1024px) 350px, 420px"
                className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </section>

      {/* ── Full-bleed image (Brecon section02) ── */}
      <section className="relative w-full h-[70vh] min-h-[400px] max-h-[800px]">
        <Image
          src="/images/balkon.jpg"
          alt="Balkon bei Sonnenuntergang"
          fill
          sizes="100vw"
          className="object-cover"
        />
      </section>

      {/* ── Block 2: Lage — editorial two-column split (Brecon section04) ── */}
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
                Im Dreiländereck Deutschland–Frankreich–Schweiz
              </h3>
            </div>
            <div className="space-y-5">
              <p className="text-[var(--color-text)] font-light leading-relaxed text-base md:text-[17px]">
                Eimeldingen liegt im Dreiländereck
                Deutschland–Frankreich–Schweiz. Die Schweizer Grenze, Basel und
                Lörrach erreichen Sie in wenigen Minuten. Die Autobahn A5
                befindet sich in unmittelbarer Nähe, kostenfreie Parkplätze
                stehen direkt am Haus zur Verfügung.
              </p>
              <p className="text-[var(--color-text)] font-light leading-relaxed text-base md:text-[17px]">
                Trotz der verkehrsgünstigen Lage genießen Sie eine angenehme,
                ruhige Atmosphäre. Der Bahnhof liegt nur wenige Gehminuten
                entfernt – mit S-Bahn und Bus erreichen Sie Lörrach, Basel und
                Freiburg bequem.
              </p>
              <p className="text-[var(--color-text)] font-light leading-relaxed text-base md:text-[17px]">
                Ideal für Geschäftsreisende und alle, die das Markgräflerland
                und die nahe Umgebung erkunden möchten.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Block 3: Zimmer — text + image (Brecon section07) ── */}
      <section className="pb-[clamp(6rem,14vh,10rem)]">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
            <div data-reveal>
              <p className="text-sage font-medium text-[11px] uppercase tracking-[0.25em] mb-4">
                Unsere Zimmer
              </p>
              <h3 className="text-[clamp(1.5rem,3vw,2.25rem)] font-serif text-[var(--color-primary)] mb-6 leading-tight">
                Sechs Zimmer – mit allem was Sie brauchen
              </h3>
              <div className="space-y-5">
                <p className="text-[var(--color-text)] font-light leading-relaxed text-base md:text-[17px]">
                  Die Zimmer sind ca. 20 m² groß und als Einzel- oder
                  Doppelzimmer buchbar. Einige Zimmer sind mit bis zu zwei
                  weiteren Betten als Familienzimmer nutzbar. Einige haben einen
                  Balkon.
                </p>
                <p className="text-[var(--color-text)] font-light leading-relaxed text-base md:text-[17px]">
                  Im Haus stehen kostenfreier Kaffee und Tee sowie ein
                  Gemeinschaftskühlschrank bereit. Im hellen Aufenthaltsraum
                  können Sie entspannt mit einer Tasse Kaffee oder Tee in den
                  Tag starten.
                </p>
                <p className="text-[var(--color-text)] font-light leading-relaxed text-base md:text-[17px]">
                  Frühstück bieten wir nicht an – dafür sind Bäckerei, Metzgerei
                  und Supermärkte fußläufig erreichbar.
                </p>
              </div>
            </div>
            <div
              data-reveal
              className="relative aspect-[4/5] overflow-hidden"
            >
              <Image
                src="/images/doppelzimmer.jpg"
                alt="Doppelzimmer mit grünen Kissen"
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
