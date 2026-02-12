"use client";

import { useRef, useEffect } from "react";
import { gsap } from "@/lib/gsap";

interface BentoItem {
  colSpan?: number;
  rowSpan?: number;
  content: React.ReactNode;
  className?: string;
}

interface BentoGridProps {
  items: BentoItem[];
  className?: string;
}

export default function BentoGrid({ items, className = "" }: BentoGridProps) {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!gridRef.current) return;

    const cells = gridRef.current.querySelectorAll("[data-bento-cell]");
    if (cells.length === 0) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        cells,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: gridRef.current,
            start: "top 80%",
            once: true,
          },
        }
      );
    }, gridRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={gridRef}
      className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[minmax(200px,auto)] ${className}`}
    >
      {items.map((item, i) => {
        const colClass = item.colSpan === 2 ? "lg:col-span-2" : item.colSpan === 3 ? "lg:col-span-3" : item.colSpan === 4 ? "lg:col-span-4" : "";
        const rowClass = item.rowSpan === 2 ? "lg:row-span-2" : "";

        return (
          <div
            key={i}
            data-bento-cell
            className={`${colClass} ${rowClass} ${item.className || ""}`}
          >
            {item.content}
          </div>
        );
      })}
    </div>
  );
}
