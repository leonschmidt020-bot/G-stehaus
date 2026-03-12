"use client";

import { useRef, useEffect } from "react";
import { gsap } from "@/lib/gsap";
import type { Testimonial } from "@/lib/supabase/types";

interface TestimonialsProps {
  testimonials: Testimonial[];
  rating: string;
  summary: string;
}

export default function Testimonials({ rating, summary }: TestimonialsProps) {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      const cards = sectionRef.current!.querySelectorAll("[data-review]");
      gsap.fromTo(
        cards,
        { opacity: 0, y: 25 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.15,
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
    <section ref={sectionRef} className="py-[clamp(6rem,14vh,10rem)]">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid md:grid-cols-[2fr_3fr] gap-8 md:gap-20 items-start">
          <div data-review>
            <h2 className="text-[clamp(1.75rem,4vw,2.75rem)] font-serif text-[var(--color-primary)] tracking-tight leading-tight mb-3">
              Was Gäste sagen
            </h2>
            <div className="flex items-center gap-2 text-sm text-earth-muted">
              <span className="text-sage">&#9733;&#9733;&#9733;&#9733;&#9733;</span>
              <span>{rating}</span>
            </div>
          </div>

          <div data-review>
            <p className="text-[var(--color-primary)] font-serif italic text-base md:text-lg leading-relaxed">
              {summary}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
