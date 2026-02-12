"use client";

import { useRef, useEffect } from "react";
import { gsap } from "@/lib/gsap";

const reviews = [
  {
    text: "Wir waren zur Messe in Basel und hatten ein super ruhiges Zimmer. Gute Lage direkt an der A5, in 10 Minuten ist man in Basel. Kommen gerne wieder.",
    name: "Stefan K.",
    source: "Google",
    date: "Oktober 2024",
  },
  {
    text: "Sauber, unkompliziert, nette Leute. Genau das was man braucht wenn man geschäftlich unterwegs ist. Parkplatz vor der Tür ist Gold wert.",
    name: "Claudia M.",
    source: "Booking.com",
    date: "September 2024",
  },
  {
    text: "Schönes, ruhiges Zimmer mit Klimaanlage, im Sommer sehr angenehm. Die ebenerdige Dusche ist top. Bäckerei und Supermarkt sind gleich ums Eck.",
    name: "Markus B.",
    source: "Google",
    date: "August 2024",
  },
];

export default function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      const cards = sectionRef.current!.querySelectorAll("[data-review]");
      gsap.fromTo(
        cards,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.12,
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
    <section ref={sectionRef} className="py-[clamp(4rem,10vh,8rem)]">
      <div className="container mx-auto px-6 max-w-5xl">

        <div className="flex items-baseline justify-between mb-10 flex-wrap gap-4">
          <h2 className="text-[clamp(1.75rem,4vw,2.75rem)] font-serif text-[var(--color-primary)] tracking-tight">
            Was Gäste sagen
          </h2>
          <div className="flex items-center gap-2 text-sm text-earth-muted">
            <span className="text-sage">&#9733;&#9733;&#9733;&#9733;&#9733;</span>
            <span>4.8 / 5 auf Google</span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((review, i) => (
            <blockquote
              key={i}
              data-review
              className="glass-white rounded-[var(--radius-xl)] p-7 flex flex-col"
            >
              <p className="text-[var(--color-primary)] font-light leading-relaxed text-[15px] mb-6 flex-grow">
                &ldquo;{review.text}&rdquo;
              </p>
              <footer className="flex items-center justify-between text-sm">
                <div>
                  <cite className="not-italic font-medium text-[var(--color-primary)]">
                    {review.name}
                  </cite>
                  <p className="text-earth-muted text-xs mt-0.5">{review.date}</p>
                </div>
                <span className="text-earth-muted text-xs">{review.source}</span>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
