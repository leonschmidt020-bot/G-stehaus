"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";

interface FullscreenMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const navItems = [
  { label: "Home", href: "/" },
  { label: "Zimmer", href: "/zimmer" },
  { label: "Kontakt", href: "/kontakt" },
];

const menuVariants = {
  closed: { opacity: 0 },
  open: { opacity: 1, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] as const } },
  exit: { opacity: 0, transition: { duration: 0.3, delay: 0.2 } },
};

const linkVariants = {
  closed: { y: 60, opacity: 0 },
  open: (i: number) => ({
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, delay: 0.15 + i * 0.08, ease: [0.16, 1, 0.3, 1] as const },
  }),
  exit: (i: number) => ({
    y: -30,
    opacity: 0,
    transition: { duration: 0.3, delay: i * 0.04 },
  }),
};

export default function FullscreenMenu({ isOpen, onClose }: FullscreenMenuProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          variants={menuVariants}
          initial="closed"
          animate="open"
          exit="exit"
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[var(--background)]"
          role="dialog"
          aria-modal="true"
          aria-label="Navigation"
        >
          {/* Decorative shapes */}
          <div className="absolute top-[15%] right-[10%] w-48 h-48 rounded-full bg-sage-muted/30 blur-[80px] pointer-events-none" />
          <div className="absolute bottom-[20%] left-[15%] w-64 h-64 rounded-full bg-terracotta/10 blur-[100px] pointer-events-none" />

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 w-12 h-12 flex items-center justify-center rounded-full hover:bg-sage-muted/20 transition-colors"
            aria-label="Menü schließen"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>

          {/* Nav links */}
          <nav className="flex flex-col items-center gap-2">
            {navItems.map((item, i) => (
              <motion.div
                key={item.href}
                custom={i}
                variants={linkVariants}
                initial="closed"
                animate="open"
                exit="exit"
              >
                <Link
                  href={item.href}
                  onClick={onClose}
                  className="block text-[clamp(2.5rem,8vw,4.5rem)] font-serif text-[var(--color-primary)] hover:text-sage transition-colors duration-300 leading-tight py-2"
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}
          </nav>

          {/* Bottom info */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 0.6 } }}
            exit={{ opacity: 0 }}
            className="absolute bottom-8 text-center"
          >
            <p className="text-earth-muted text-xs tracking-[0.15em] uppercase">
              Das Gästehaus Eimeldingen
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
