"use client";

import Link from "next/link";
import { useState, useEffect, useCallback } from "react";
import FullscreenMenu from "./FullscreenMenu";
import styles from "@/styles/glassmorphism.module.css";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Zimmer", href: "/zimmer" },
  { label: "Kontakt", href: "/kontakt" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = useCallback(() => setIsMenuOpen(false), []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ${
          isScrolled ? `${styles.glassNavbar} shadow-soft py-3` : "bg-transparent py-5"
        }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          {/* Logo */}
          <Link
            href="/"
            className="text-xl font-serif font-semibold text-[var(--color-primary)] tracking-wide"
          >
            Das Gästehaus
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-[var(--color-primary)]/70 hover:text-[var(--color-primary)] transition-all duration-300 font-medium text-xs uppercase tracking-[0.2em] relative group"
              >
                {item.label}
                <span className="absolute bottom-[-6px] left-1/2 -translate-x-1/2 w-0 h-[1.5px] bg-sage transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          {/* Mobile Hamburger */}
          <button
            type="button"
            onClick={() => setIsMenuOpen(true)}
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-full hover:bg-sage-muted/20 transition-colors"
            aria-label="Menü öffnen"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
              <line x1="4" y1="7" x2="20" y2="7" />
              <line x1="4" y1="17" x2="20" y2="17" />
            </svg>
          </button>
        </div>
      </header>

      <FullscreenMenu isOpen={isMenuOpen} onClose={closeMenu} />
    </>
  );
}
