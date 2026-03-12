"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { logoutAction } from "@/app/(admin)/admin/actions";

const links = [
  { href: "/admin", label: "Dashboard" },
  { href: "/admin/rooms", label: "Zimmer" },
  { href: "/admin/features", label: "Features" },
  { href: "/admin/testimonials", label: "Bewertungen" },
  { href: "/admin/nearby-spots", label: "In der Nähe" },
  { href: "/admin/settings", label: "Einstellungen" },
];

export default function AdminHeader() {
  const pathname = usePathname();

  return (
    <header className="flex items-center justify-between px-6 py-3 bg-neutral-900 border-b border-neutral-800">
      {/* Mobile nav */}
      <div className="flex md:hidden gap-2 overflow-x-auto">
        {links.map((link) => {
          const active =
            link.href === "/admin"
              ? pathname === "/admin"
              : pathname.startsWith(link.href);
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`px-3 py-1.5 rounded-lg text-xs whitespace-nowrap transition-colors ${
                active
                  ? "bg-neutral-800 text-white"
                  : "text-neutral-400 hover:text-white"
              }`}
            >
              {link.label}
            </Link>
          );
        })}
      </div>

      <div className="hidden md:block" />

      <div className="flex items-center gap-4">
        <Link
          href="/"
          target="_blank"
          className="text-xs text-neutral-500 hover:text-neutral-300 transition-colors"
        >
          Website ansehen
        </Link>
        <form action={logoutAction}>
          <button
            type="submit"
            className="text-xs text-neutral-500 hover:text-red-400 transition-colors"
          >
            Abmelden
          </button>
        </form>
      </div>
    </header>
  );
}
