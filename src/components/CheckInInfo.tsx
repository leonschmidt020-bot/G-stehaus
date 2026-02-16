"use client";

import { useRef, useEffect } from "react";
import { gsap } from "@/lib/gsap";

export default function CheckInInfo() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      const items = sectionRef.current!.querySelectorAll("[data-info]");
      gsap.fromTo(
        items,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
            once: true,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-[clamp(4rem,10vh,8rem)] bg-[var(--surface)]">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid md:grid-cols-3 gap-10 md:gap-16">
          <div data-info>
            <p className="text-sage font-medium text-[11px] uppercase tracking-[0.25em] mb-3">
              Check-in
            </p>
            <h3 className="text-lg font-serif text-[var(--color-primary)] mb-2">
              Täglich von 16:00 bis 20:00 Uhr
            </h3>
            <p className="text-[var(--color-text)] font-light leading-relaxed text-[15px]">
              Persönliche Übergabe vor Ort.
            </p>
          </div>

          <div data-info>
            <p className="text-sage font-medium text-[11px] uppercase tracking-[0.25em] mb-3">
              Check-out
            </p>
            <h3 className="text-lg font-serif text-[var(--color-primary)] mb-2">
              Bis 10:00 Uhr
            </h3>
            <p className="text-[var(--color-text)] font-light leading-relaxed text-[15px]">
              Oder nach vorheriger Vereinbarung.
            </p>
          </div>

          <div data-info>
            <p className="text-sage font-medium text-[11px] uppercase tracking-[0.25em] mb-3">
              Bezahlung
            </p>
            <h3 className="text-lg font-serif text-[var(--color-primary)] mb-2">
              Bar, EC-Karte oder Kreditkarte
            </h3>
            <p className="text-[var(--color-text)] font-light leading-relaxed text-[15px]">
              Wie es Ihnen am liebsten ist.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
