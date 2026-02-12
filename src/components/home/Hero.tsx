"use client";

import Image from "next/image";
import { useRef, useEffect } from "react";
import { gsap } from "@/lib/gsap";
import OrganicButton from "@/components/ui/OrganicButton";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subtextRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      if (imageRef.current) {
        gsap.fromTo(
          imageRef.current,
          { yPercent: 0 },
          {
            yPercent: 20,
            ease: "none",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top top",
              end: "bottom top",
              scrub: true,
            },
          }
        );
      }

      if (headlineRef.current) {
        const lines = headlineRef.current.querySelectorAll("[data-line]");
        gsap.fromTo(
          lines,
          { y: 80, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            stagger: 0.15,
            ease: "power3.out",
            delay: 0.2,
          }
        );
      }

      if (subtextRef.current) {
        gsap.fromTo(
          subtextRef.current,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
            delay: 0.7,
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-[100vh] min-h-[600px] w-full overflow-hidden flex items-end -mt-20"
    >
      <div
        ref={imageRef}
        className="absolute inset-0 w-full h-[120%] -mt-[10%]"
      >
        <Image
          src="/images/exterior.jpg"
          alt="Das Gästehaus Eimeldingen Außenansicht"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-[var(--background)] via-[var(--background)]/40 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-[var(--background)]/60 via-transparent to-transparent" />

      <div className="relative z-10 container mx-auto px-6 pb-[clamp(3rem,8vh,6rem)]">
        <div className="max-w-3xl">
          <h1
            ref={headlineRef}
            className="font-serif text-[clamp(3rem,8vw,6rem)] leading-[0.95] tracking-tight mb-8"
          >
            <span data-line className="block text-[var(--color-primary)]">
              Ankommen.
            </span>
            <span data-line className="block text-sage italic font-light">
              Durchatmen.
            </span>
          </h1>

          <div ref={subtextRef}>
            <p className="text-[var(--color-primary)]/70 text-lg md:text-xl font-light max-w-lg mb-10 leading-relaxed">
              Sechs gemütliche Zimmer in Eimeldingen, direkt an der A5,
              10 Minuten von Basel, mitten im Dreiländereck.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <OrganicButton href="/kontakt" variant="primary" arrow>
                Verfügbarkeit anfragen
              </OrganicButton>
              <OrganicButton href="/zimmer" variant="outline" arrow>
                Zimmer ansehen
              </OrganicButton>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 opacity-60">
        <span className="text-[10px] uppercase tracking-[0.3em] text-[var(--color-primary)]/50 font-medium">
          Scroll
        </span>
        <div className="w-[1px] h-8 bg-[var(--color-primary)]/20 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-sage animate-[scrollLine_2s_ease-in-out_infinite]" />
        </div>
      </div>
    </section>
  );
}
