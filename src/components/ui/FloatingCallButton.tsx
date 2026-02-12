"use client";

import { Phone } from "lucide-react";
import { useState } from "react";

export default function FloatingCallButton() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a
      href="tel:+4976214248233"
      className="fixed bottom-6 right-6 z-50 group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      aria-label="Anrufen"
    >
      {/* Pulsing background ring */}
      <div className="absolute inset-0 rounded-full bg-sage/30 animate-ping" />

      {/* Main button */}
      <div className="relative flex items-center gap-3 bg-sage hover:bg-sage/90 text-cream rounded-full shadow-2xl transition-all duration-300 overflow-hidden">
        {/* Phone icon container */}
        <div className="flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16">
          <Phone
            className="w-6 h-6 sm:w-7 sm:h-7 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12"
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </div>

        {/* Expandable text */}
        <div
          className={`pr-5 overflow-hidden transition-all duration-300 ${
            isHovered ? "max-w-[200px] opacity-100" : "max-w-0 opacity-0"
          }`}
        >
          <span className="text-sm font-medium whitespace-nowrap">
            Jetzt anrufen
          </span>
        </div>
      </div>

      {/* Tooltip for mobile */}
      <div className="absolute bottom-full right-0 mb-2 px-3 py-1.5 bg-earth text-cream text-xs rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap sm:hidden">
        +49 (0) 7621 4 24 82 33
      </div>
    </a>
  );
}
