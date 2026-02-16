"use client";

import { useRef, useEffect } from "react";
import { gsap } from "@/lib/gsap";

const features = [
  {
    title: "Kostenloser Parkplatz",
    text: "Direkt vor dem Haus. Kein Parkhaus, kein Suchen. Sie fahren vor, laden aus, fertig.",
  },
  {
    title: "Kaffee & Tee, rund um die Uhr",
    text: "Im Flur steht unsere Kaffeestation. Bedienen Sie sich, wann immer Sie möchten. Geht aufs Haus.",
  },
  {
    title: "Kein Frühstück, aber alles nah",
    text: "Frühstück bieten wir nicht an, dafür sind Bäckerei, Metzgerei und Supermarkt fußläufig erreichbar. Im Haus stehen Kaffee, Tee und ein Kühlschrank bereit.",
  },
  {
    title: "Klimaanlage & WLAN",
    text: "Alle Zimmer haben eine Klimaanlage und kostenloses WLAN. Dazu Flachbild-TV und eigenes Bad mit ebenerdiger Dusche.",
  },
  {
    title: "Check-in flexibel",
    text: "Regulär ab 15 Uhr. Wenn Sie früher oder später kommen, sagen Sie einfach Bescheid, wir finden eine Lösung.",
  },
  {
    title: "Bezahlung unkompliziert",
    text: "Bar, EC-Karte oder Kreditkarte, wie es Ihnen am liebsten ist. Bitte beachten Sie: Haustiere können wir leider nicht aufnehmen.",
  },
];

export default function Features() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
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
    <section
      ref={sectionRef}
      className="py-[clamp(6rem,14vh,10rem)] bg-[var(--surface)]"
    >
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Editorial two-column: heading left, content right (Brecon section04 style) */}
        <div className="grid md:grid-cols-[2fr_3fr] gap-8 md:gap-20 items-start">
          <div data-feature>
            <h2 className="text-[clamp(1.75rem,4vw,2.75rem)] font-serif text-[var(--color-primary)] tracking-tight leading-tight">
              Gut zu wissen
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-x-14 gap-y-10">
            {features.map((f, i) => (
              <div key={i} data-feature>
                <h3 className="text-[15px] font-medium text-[var(--color-primary)] mb-2 tracking-wide">
                  {f.title}
                </h3>
                <p className="text-[var(--color-text)] font-light leading-relaxed text-[15px]">
                  {f.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
