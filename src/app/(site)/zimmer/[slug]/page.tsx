export const dynamic = "force-dynamic";

import { notFound } from "next/navigation";
import RoomDetail from "@/components/rooms/RoomDetail";
import { getRoomBySlug, getRoomImages } from "@/lib/data/rooms";
import { getSettings } from "@/lib/data/settings";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const room = await getRoomBySlug(slug);
  if (!room) return {};
  return {
    title: `${room.title} | Das Gästehaus Eimeldingen`,
    description: room.description,
  };
}

export default async function RoomPage({ params }: Props) {
  const { slug } = await params;
  const room = await getRoomBySlug(slug);
  if (!room) notFound();

  const [images, settings] = await Promise.all([
    getRoomImages(room.id),
    getSettings(),
  ]);

  const s = Object.fromEntries(settings.map((s) => [s.key, s.value]));

  return (
    <RoomDetail
      title={room.title}
      subtitle={room.subtitle}
      price={room.price}
      priceNote={room.price_note}
      guests={room.guests}
      size={room.size}
      description={room.detail_description}
      details={room.detail_details}
      images={images.map((img) => ({ src: img.src, alt: img.alt }))}
      amenities={room.amenities}
      popular={room.popular}
      checkinTime={s.checkin_time}
      checkoutTime={s.checkout_time}
      paymentMethods={s.payment_methods}
    />
  );
}
