"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/admin", label: "Dashboard" },
  { href: "/admin/rooms", label: "Zimmer" },
  { href: "/admin/features", label: "Features" },
  { href: "/admin/testimonials", label: "Bewertungen" },
  { href: "/admin/nearby-spots", label: "In der Nähe" },
  { href: "/admin/settings", label: "Einstellungen" },
];

export default function AdminNav() {
  const pathname = usePathname();

  return (
    <nav className="hidden md:flex flex-col w-56 bg-neutral-900 border-r border-neutral-800 p-4 gap-1">
      <Link href="/admin" className="text-lg font-serif text-white mb-6 px-3">
        Gästehaus CMS
      </Link>
      {links.map((link) => {
        const active =
          link.href === "/admin"
            ? pathname === "/admin"
            : pathname.startsWith(link.href);
        return (
          <Link
            key={link.href}
            href={link.href}
            className={`px-3 py-2 rounded-lg text-sm transition-colors ${
              active
                ? "bg-neutral-800 text-white"
                : "text-neutral-400 hover:text-white hover:bg-neutral-800/50"
            }`}
          >
            {link.label}
          </Link>
        );
      })}
    </nav>
  );
}
