"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useEffect } from "react";
import { gsap } from "@/lib/gsap";


export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const captionRef = useRef<HTMLDivElement>(null);


  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
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

      if (captionRef.current) {
        const els = captionRef.current.querySelectorAll("[data-anim]");
        gsap.fromTo(
          els,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1.2,
            stagger: 0.15,
            ease: "power3.out",
            delay: 0.3,
          }
        );
      }

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-[100vh] min-h-[600px] w-full flex items-end -mt-20"
    >
      {/* Background image */}
      <div className="absolute inset-0 overflow-hidden">
        <div ref={imageRef} className="w-full h-[120%] -mt-[10%]">
          <Image
            src="/images/exterior.jpg"
            alt="Das Gästehaus Eimeldingen Außenansicht"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10" />

      {/* Centered caption at bottom */}
      <div
        ref={captionRef}
        className="relative z-10 w-full pb-[clamp(3rem,8vh,6rem)] px-6"
      >
        <div className="max-w-5xl mx-auto text-center">
          <h1
            data-anim
            className="font-serif text-[clamp(3rem,8vw,6rem)] leading-[0.95] tracking-tight text-white mb-8"
          >
            <span className="block">Ankommen.</span>
            <span className="block italic font-light text-white/90">
              Durchatmen.
            </span>
            <span className="block">Wohlfühlen.</span>
          </h1>

          <p
            data-anim
            className="text-white/75 text-base md:text-lg font-light max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Kleines, familiengeführtes Gästehaus in Eimeldingen – ruhig gelegen
            und dennoch direkt an der A5. Nur wenige Minuten von Basel entfernt,
            ideal für Geschäftsreisende, Kurzaufenthalte im Dreiländereck oder
            als Zwischenstopp auf Ihrer Reise.
          </p>

          <div
            data-anim
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              href="/kontakt"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-[#1E120A] text-sm font-medium tracking-wide hover:bg-white/90 transition-all duration-500 group"
            >
              Verfügbarkeit anfragen
              <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                &#8594;
              </span>
            </Link>
            <Link
              href="/zimmer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-white/25 text-white/80 text-sm font-medium tracking-wide hover:border-white/50 hover:text-white transition-all duration-500 group"
            >
              Zimmer ansehen
              <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                &#8594;
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
