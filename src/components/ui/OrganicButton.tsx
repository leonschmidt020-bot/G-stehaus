"use client";

import { useRef } from "react";
import Link from "next/link";

interface OrganicButtonProps {
  href?: string;
  variant?: "primary" | "outline" | "ghost";
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  arrow?: boolean;
}

export default function OrganicButton({
  href,
  variant = "primary",
  children,
  className = "",
  onClick,
  type = "button",
  arrow = false,
}: OrganicButtonProps) {
  const ref = useRef<HTMLElement>(null);

  const baseClasses =
    "relative inline-flex items-center gap-2 px-8 py-4 rounded-full font-sans font-medium text-sm tracking-wide transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] cursor-pointer select-none";

  const variants = {
    primary:
      "bg-sage text-white hover:bg-sage-light hover:shadow-[0_8px_30px_rgba(139,158,139,0.3)] hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]",
    outline:
      "bg-transparent text-earth border-[1.5px] border-earth/20 hover:bg-earth hover:text-cream-warm hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]",
    ghost:
      "bg-transparent text-sage hover:bg-sage-muted/30 active:scale-[0.98]",
  };

  const arrowEl = arrow ? (
    <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
      &#8594;
    </span>
  ) : null;

  const classes = `${baseClasses} ${variants[variant]} group ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes} ref={ref as React.Ref<HTMLAnchorElement>}>
        {children}
        {arrowEl}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={classes}
      ref={ref as React.Ref<HTMLButtonElement>}
    >
      {children}
      {arrowEl}
    </button>
  );
}
