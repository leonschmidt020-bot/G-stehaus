"use client";

import { useRef, useEffect } from "react";
import { gsap } from "@/lib/gsap";
import ParallaxImage from "@/components/ui/ParallaxImage";

export default function UeberUns() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced || !containerRef.current) return;

    const ctx = gsap.context(() => {
      const textBlocks = containerRef.current!.querySelectorAll("[data-reveal]");

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
              start: "top 80%",
              once: true,
            },
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="py-[clamp(4rem,10vh,8rem)]">
      <div ref={containerRef} className="container mx-auto px-6 max-w-6xl">

        {/* Block 1: Personal intro — image left, text right */}
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16 mb-[clamp(4rem,10vh,8rem)]">
          <div className="w-full md:w-1/2">
            <ParallaxImage
              src="/images/exterior.jpg"
              alt="Das Gästehaus von außen — ein ruhiges Haus mit Garten"
              speed={0.2}
              className="aspect-[4/3] rounded-[var(--radius-xl)]"
            />
          </div>
          <div data-reveal className="w-full md:w-1/2">
            <h2 className="text-[clamp(1.75rem,4vw,2.75rem)] font-serif text-[var(--color-primary)] mb-5 leading-tight">
              Willkommen im Gästehaus
            </h2>
            <p className="text-[var(--color-text)] font-light leading-relaxed text-base md:text-lg mb-4">
              Das Gästehaus in Eimeldingen bietet sechs gemütliche Zimmer für
              Geschäftsreisende, Messebesucher und Urlauber. Unkompliziert, sauber
              und persönlich — so wie es sein soll.
            </p>
            <p className="text-[var(--color-text)] font-light leading-relaxed text-base md:text-lg">
              Alle Zimmer sind mit Klimaanlage, Flachbild-TV, eigenem Bad mit
              ebenerdiger Dusche und kostenlosem WLAN ausgestattet. Einige haben
              einen Balkon mit Blick ins Grüne.
            </p>
          </div>
        </div>

        {/* Block 2: Location — full width text, no matching image pattern */}
        <div data-reveal className="max-w-2xl mb-[clamp(4rem,10vh,8rem)]">
          <p className="text-sage font-medium text-sm tracking-wide mb-3">Lage</p>
          <h3 className="text-[clamp(1.5rem,3vw,2.25rem)] font-serif text-[var(--color-primary)] mb-5 leading-tight">
            Zwischen Basel und dem Schwarzwald
          </h3>
          <p className="text-[var(--color-text)] font-light leading-relaxed text-base md:text-lg mb-4">
            Eimeldingen liegt direkt am Dreiländereck — die Schweizer Grenze, Basel
            und Lörrach sind nur wenige Minuten entfernt. Die Autobahnauffahrt A5 ist
            quasi vor der Tür, kostenlose Parkplätze stehen direkt am Haus.
          </p>
          <p className="text-[var(--color-text)] font-light leading-relaxed text-base md:text-lg">
            Ideal für Messebesucher, Geschäftsreisende oder alle, die das
            Markgräflerland und die Region Basel erkunden möchten.
          </p>
        </div>

        {/* Block 3: Room teaser — image right, text left */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-8 md:gap-16">
          <div className="w-full md:w-1/2">
            <ParallaxImage
              src="/images/room.jpg"
              alt="Helles Zimmer mit Holzboden und weißer Bettwäsche"
              speed={0.35}
              className="aspect-[4/3] rounded-[var(--radius-xl)]"
            />
          </div>
          <div data-reveal className="w-full md:w-1/2">
            <h3 className="text-[clamp(1.5rem,3vw,2.25rem)] font-serif text-[var(--color-primary)] mb-5 leading-tight">
              Sechs Zimmer, alles dabei
            </h3>
            <p className="text-[var(--color-text)] font-light leading-relaxed text-base md:text-lg mb-4">
              Jedes Zimmer ist ca. 20 m² groß und als Einzel-, Doppel- oder
              Familienzimmer buchbar. Bequeme Betten, Klimaanlage, Flachbild-TV,
              eigenes Bad mit ebenerdiger Dusche — und bei einigen Zimmern ein Balkon.
            </p>
            <p className="text-[var(--color-text)] font-light leading-relaxed text-base md:text-lg">
              Im Haus stehen Kaffee, Tee und ein Kühlschrank bereit. Frühstück bieten
              wir nicht an, aber Bäckerei, Metzgerei und Supermarkt sind fußläufig
              erreichbar.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
