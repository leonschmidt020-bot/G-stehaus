export const dynamic = "force-dynamic";

import Link from "next/link";
import { getRooms } from "@/lib/data/rooms";
import { getFeatures } from "@/lib/data/features";
import { getTestimonials } from "@/lib/data/testimonials";
import { getNearbySpots } from "@/lib/data/nearby-spots";

export default async function AdminDashboard() {
  const [rooms, features, testimonials, spots] = await Promise.all([
    getRooms(),
    getFeatures(),
    getTestimonials(),
    getNearbySpots(),
  ]);

  const cards = [
    { label: "Zimmer", count: rooms.length, href: "/admin/rooms" },
    { label: "Features", count: features.length, href: "/admin/features" },
    { label: "Bewertungen", count: testimonials.length, href: "/admin/testimonials" },
    { label: "In der Nähe", count: spots.length, href: "/admin/nearby-spots" },
  ];

  return (
    <div>
      <h1 className="text-2xl font-serif text-white mb-8">Dashboard</h1>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {cards.map((card) => (
          <Link
            key={card.href}
            href={card.href}
            className="bg-neutral-900 border border-neutral-800 rounded-xl p-6 hover:border-neutral-700 transition-colors"
          >
            <p className="text-3xl font-serif text-white mb-1">{card.count}</p>
            <p className="text-sm text-neutral-400">{card.label}</p>
          </Link>
        ))}
      </div>

      <div className="mt-8 bg-neutral-900 border border-neutral-800 rounded-xl p-6">
        <h2 className="text-lg font-medium text-white mb-4">Schnellzugriff</h2>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/admin/settings"
            className="px-4 py-2 bg-neutral-800 rounded-lg text-sm text-neutral-300 hover:text-white transition-colors"
          >
            Einstellungen bearbeiten
          </Link>
          <Link
            href="/"
            target="_blank"
            className="px-4 py-2 bg-neutral-800 rounded-lg text-sm text-neutral-300 hover:text-white transition-colors"
          >
            Website ansehen
          </Link>
        </div>
      </div>
    </div>
  );
}
