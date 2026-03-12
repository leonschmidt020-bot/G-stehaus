export const dynamic = "force-dynamic";

import Link from "next/link";
import Image from "next/image";
import { getRooms } from "@/lib/data/rooms";

export default async function AdminRoomsPage() {
  const rooms = await getRooms();

  return (
    <div>
      <h1 className="text-2xl font-serif text-white mb-8">Zimmer</h1>

      <div className="grid gap-4">
        {rooms.map((room) => (
          <Link
            key={room.id}
            href={`/admin/rooms/${room.slug}`}
            className="flex items-center gap-4 bg-neutral-900 border border-neutral-800 rounded-xl p-4 hover:border-neutral-700 transition-colors"
          >
            <div className="relative w-20 h-14 rounded-lg overflow-hidden shrink-0">
              <Image
                src={room.card_image}
                alt={room.title}
                fill
                sizes="80px"
                className="object-cover"
              />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-white font-medium">{room.title}</h3>
              <p className="text-sm text-neutral-400 truncate">
                {room.price} · {room.guests} · {room.size}
              </p>
            </div>
            <span className="text-neutral-600 text-sm">Bearbeiten &rarr;</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
