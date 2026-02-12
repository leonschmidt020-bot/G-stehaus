"use client";

import { useRef, useEffect } from "react";
import { gsap } from "@/lib/gsap";

export default function Features() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      const items = sectionRef.current!.querySelectorAll("[data-feature]");
      gsap.fromTo(
        items,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.1,
          ease: "power3.out",
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
    <section ref={sectionRef} className="py-[clamp(4rem,10vh,8rem)] bg-[var(--surface)]">
      <div className="container mx-auto px-6 max-w-5xl">

        <h2 data-feature className="text-[clamp(1.75rem,4vw,2.75rem)] font-serif text-[var(--color-primary)] mb-12 tracking-tight">
          Gut zu wissen
        </h2>

        <div className="grid md:grid-cols-2 gap-x-16 gap-y-10">
          <div data-feature>
            <h3 className="text-lg font-serif text-[var(--color-primary)] mb-2">Kostenloser Parkplatz</h3>
            <p className="text-[var(--color-text)] font-light leading-relaxed text-[15px]">
              Direkt vor dem Haus. Kein Parkhaus, kein Suchen. Sie fahren vor, laden aus, fertig.
            </p>
          </div>

          <div data-feature>
            <h3 className="text-lg font-serif text-[var(--color-primary)] mb-2">Kaffee & Tee, rund um die Uhr</h3>
            <p className="text-[var(--color-text)] font-light leading-relaxed text-[15px]">
              Im Flur steht unsere Kaffeestation. Bedienen Sie sich, wann immer Sie möchten.
              Geht aufs Haus.
            </p>
          </div>

          <div data-feature>
            <h3 className="text-lg font-serif text-[var(--color-primary)] mb-2">Kein Frühstück, aber alles nah</h3>
            <p className="text-[var(--color-text)] font-light leading-relaxed text-[15px]">
              Frühstück bieten wir nicht an, dafür sind Bäckerei, Metzgerei und
              Supermarkt fußläufig erreichbar. Im Haus stehen Kaffee, Tee und ein
              Kühlschrank bereit.
            </p>
          </div>

          <div data-feature>
            <h3 className="text-lg font-serif text-[var(--color-primary)] mb-2">Klimaanlage & WLAN</h3>
            <p className="text-[var(--color-text)] font-light leading-relaxed text-[15px]">
              Alle Zimmer haben eine Klimaanlage und kostenloses WLAN. Dazu
              Flachbild-TV und eigenes Bad mit ebenerdiger Dusche.
            </p>
          </div>

          <div data-feature>
            <h3 className="text-lg font-serif text-[var(--color-primary)] mb-2">Check-in flexibel</h3>
            <p className="text-[var(--color-text)] font-light leading-relaxed text-[15px]">
              Regulär ab 15 Uhr. Wenn Sie früher oder später kommen, sagen Sie
              einfach Bescheid, wir finden eine Lösung.
            </p>
          </div>

          <div data-feature>
            <h3 className="text-lg font-serif text-[var(--color-primary)] mb-2">Bezahlung unkompliziert</h3>
            <p className="text-[var(--color-text)] font-light leading-relaxed text-[15px]">
              Bar, EC-Karte oder Kreditkarte, wie es Ihnen am liebsten ist.
              Bitte beachten Sie: Haustiere können wir leider nicht aufnehmen.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
