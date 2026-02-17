"use client";

import { useRef, useEffect } from "react";
import { gsap } from "@/lib/gsap";

const reviews = [
  {
    text: "Schönes hochwertiges Hotel, bzw. Gästehaus. Die Chefin gibt sich größte Mühe die Gäste gemütlich und zufrieden unterzubringen. Sehr sauber gehaltene große Zimmer mit moderner Ausstattung.",
    name: "Roman Tropmann",
    source: "Google",
    date: "Local Guide",
  },
  {
    text: "Ich war im Gästehaus Eimeldingen und es war sehr schön. Freundliche Gastgeberin, schönes, sauberes Zimmer. Liebe Grüße aus Sachsen!",
    name: "Tim Scholz",
    source: "Google",
    date: "Local Guide",
  },
  {
    text: "Sehr sauber. Gut gelegen für Ausflüge in die Schweiz.",
    name: "Bernd Grimm",
    source: "Google",
    date: "Local Guide",
  },
];

export default function Testimonials() {
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
        {/* Editorial two-column: heading left, reviews right */}
        <div className="grid md:grid-cols-[2fr_3fr] gap-8 md:gap-20 items-start">
          <div data-review>
            <h2 className="text-[clamp(1.75rem,4vw,2.75rem)] font-serif text-[var(--color-primary)] tracking-tight leading-tight mb-3">
              Was Gäste sagen
            </h2>
            <div className="flex items-center gap-2 text-sm text-earth-muted">
              <span className="text-sage">&#9733;&#9733;&#9733;&#9733;&#9733;</span>
              <span>4.8 / 5 auf Google</span>
            </div>
          </div>

          <div className="space-y-10">
            {reviews.map((review, i) => (
              <blockquote
                key={i}
                data-review
                className="border-t border-[var(--color-primary)]/10 pt-8 first:border-t-0 first:pt-0"
              >
                <p className="text-[var(--color-primary)] font-serif italic text-base md:text-lg leading-relaxed mb-5">
                  &ldquo;{review.text}&rdquo;
                </p>
                <footer className="flex items-center justify-between text-sm">
                  <div>
                    <cite className="not-italic font-medium text-[var(--color-primary)] text-[13px] tracking-wide">
                      {review.name}
                    </cite>
                    <p className="text-earth-muted text-xs mt-0.5">
                      {review.date}
                    </p>
                  </div>
                  <span className="text-earth-muted text-xs">
                    {review.source}
                  </span>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
