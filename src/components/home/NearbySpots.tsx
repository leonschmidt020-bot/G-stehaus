"use client";

import { useRef, useEffect } from "react";
import { gsap } from "@/lib/gsap";

const spots = [
  { name: "Bäckerei", walk: "2 Min.", drive: null },
  { name: "Aldi", walk: "5 Min.", drive: "2 Min." },
  { name: "Penny", walk: "5 Min.", drive: "2 Min." },
  { name: "DM", walk: "5 Min.", drive: "2 Min." },
];

export default function NearbySpots() {
  const stripRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced || !stripRef.current) return;

    const ctx = gsap.context(() => {
      const lines = stripRef.current!.querySelectorAll("[data-line]");
      const texts = stripRef.current!.querySelectorAll("[data-text]");
      const details = stripRef.current!.querySelectorAll("[data-detail]");

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: stripRef.current,
          start: "top 90%",
          once: true,
        },
      });

      // Lines draw in from left
      tl.fromTo(
        lines,
        { scaleX: 0 },
        {
          scaleX: 1,
          duration: 1,
          stagger: 0.15,
          ease: "power2.inOut",
        }
      );

      // Names fade up
      tl.fromTo(
        texts,
        { y: 10, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.12,
          ease: "power2.out",
        },
        "-=0.6"
      );

      // Details fade in
      tl.fromTo(
        details,
        { y: 6, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.12,
          ease: "power2.out",
        },
        "-=0.5"
      );
    }, stripRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={stripRef} className="py-8 md:py-10">
      <div className="container mx-auto px-6 max-w-6xl">
        <p className="text-sage font-medium text-[11px] uppercase tracking-[0.25em] mb-6">
          In der Nähe
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-6 gap-x-6 md:gap-x-10">
          {spots.map((spot) => (
            <div key={spot.name} data-spot>
              <div
                data-line
                className="h-px bg-[var(--color-primary)]/20 mb-4 origin-left"
              />
              <p
                data-text
                className="text-[var(--color-primary)] font-medium text-[15px] tracking-wide"
              >
                {spot.name}
              </p>
              <p
                data-detail
                className="text-[var(--color-text)] font-light text-[13px] mt-1"
              >
                {spot.walk} zu Fuß
                {spot.drive && (
                  <span className="text-[var(--color-text)]/50">
                    {" · "}
                    {spot.drive} mit Auto
                  </span>
                )}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
