"use client";

import { useRef, useEffect } from "react";
import { gsap } from "@/lib/gsap";

interface CheckInInfoProps {
  checkinTime?: string;
  checkoutTime?: string;
  paymentMethods?: string;
}

export default function CheckInInfo({
  checkinTime = "Täglich von 16:00 bis 20:00 Uhr",
  checkoutTime = "Bis 10:00 Uhr",
  paymentMethods = "Bar, EC-Karte oder Kreditkarte",
}: CheckInInfoProps) {
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
              {checkinTime}
            </h3>
          </div>

          <div data-info>
            <p className="text-sage font-medium text-[11px] uppercase tracking-[0.25em] mb-3">
              Check-out
            </p>
            <h3 className="text-lg font-serif text-[var(--color-primary)] mb-2">
              {checkoutTime}
            </h3>
          </div>

          <div data-info>
            <p className="text-sage font-medium text-[11px] uppercase tracking-[0.25em] mb-3">
              Bezahlung
            </p>
            <h3 className="text-lg font-serif text-[var(--color-primary)] mb-2">
              {paymentMethods}
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}
