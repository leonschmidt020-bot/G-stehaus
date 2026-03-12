"use client";

import { useRef, useEffect } from "react";
import { gsap } from "@/lib/gsap";
import type { Feature } from "@/lib/supabase/types";

interface FeaturesProps {
  features: Feature[];
}

export default function Features({ features }: FeaturesProps) {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced || !sectionRef.current) return;

    const isMobile = window.innerWidth < 768;

    const ctx = gsap.context(() => {
      const items = sectionRef.current!.querySelectorAll("[data-feature]");
      gsap.fromTo(
        items,
        { opacity: 0, y: isMobile ? 0 : 25 },
        {
          opacity: 1,
          y: 0,
          duration: isMobile ? 0.5 : 1,
          stagger: isMobile ? 0.06 : 0.12,
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
    <section
      ref={sectionRef}
      className="py-[clamp(6rem,14vh,10rem)] bg-[var(--surface)]"
    >
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid md:grid-cols-[2fr_3fr] gap-8 md:gap-20 items-start">
          <div data-feature>
            <h2 className="text-[clamp(1.75rem,4vw,2.75rem)] font-serif text-[var(--color-primary)] tracking-tight leading-tight">
              Gut zu wissen
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-x-14 gap-y-10">
            {features.map((f) => (
              <div key={f.id} data-feature>
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
