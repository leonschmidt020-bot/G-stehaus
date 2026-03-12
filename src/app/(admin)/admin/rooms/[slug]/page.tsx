"use client";

import { useState, useEffect, useCallback } from "react";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import { updateRoom, updateRoomImages, uploadImage } from "@/app/(admin)/admin/actions";
import SaveButton from "@/components/admin/SaveButton";
import type { Room, RoomImage } from "@/lib/supabase/types";

export default function EditRoomPage() {
  const params = useParams();
  const router = useRouter();
  const slug = params.slug as string;

  const [room, setRoom] = useState<Room | null>(null);
  const [images, setImages] = useState<RoomImage[]>([]);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState<string | null>(null);

  const fetchRoom = useCallback(async () => {
    const res = await fetch(`/api/admin/room?slug=${slug}`);
    if (res.ok) {
      const data = await res.json();
      setRoom(data.room);
      setImages(data.images);
    }
    setLoading(false);
  }, [slug]);

  useEffect(() => {
    fetchRoom();
  }, [fetchRoom]);

  if (loading) return <div className="text-neutral-400">Laden...</div>;
  if (!room) return <div className="text-red-400">Zimmer nicht gefunden</div>;

  async function handleSave(formData: FormData) {
    formData.set("id", room!.id);
    formData.set("extras", JSON.stringify(room!.extras));
    formData.set("amenities", JSON.stringify(room!.amenities));
    const result = await updateRoom(formData);
    if (result?.error) {
      setMessage(`Fehler: ${result.error}`);
    } else {
      setMessage("Gespeichert!");
      setTimeout(() => setMessage(null), 3000);
    }
  }

  async function handleImageUpload() {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "image/jpeg,image/png,image/webp";
    input.onchange = async (e) => {
      const file = (e.target as HTMLInputElement).files?.[0];
      if (!file) return;
      const formData = new FormData();
      formData.append("file", file);
      const result = await uploadImage(formData);
      if (result.url) {
        const newImage = {
          id: crypto.randomUUID(),
          room_id: room!.id,
          src: result.url,
          alt: file.name.replace(/\.[^/.]+$/, ""),
          sort_order: images.length + 1,
        };
        setImages([...images, newImage]);
      }
    };
    input.click();
  }

  async function handleSaveImages() {
    const formData = new FormData();
    formData.set("room_id", room!.id);
    formData.set("images", JSON.stringify(images.map((img) => ({ src: img.src, alt: img.alt }))));
    const result = await updateRoomImages(formData);
    if (result?.error) {
      setMessage(`Fehler: ${result.error}`);
    } else {
      setMessage("Bilder gespeichert!");
      setTimeout(() => setMessage(null), 3000);
    }
  }

  function removeImage(id: string) {
    setImages(images.filter((img) => img.id !== id));
  }

  return (
    <div className="max-w-3xl">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-serif text-white">{room.title} bearbeiten</h1>
        <button
          onClick={() => router.push("/admin/rooms")}
          className="text-sm text-neutral-400 hover:text-white transition-colors"
        >
          &larr; Zurück
        </button>
      </div>

      {message && (
        <div className={`mb-4 px-4 py-2 rounded-lg text-sm ${message.startsWith("Fehler") ? "bg-red-900/50 text-red-300" : "bg-green-900/50 text-green-300"}`}>
          {message}
        </div>
      )}

      {/* Room Info Form */}
      <form action={handleSave} className="space-y-6 bg-neutral-900 border border-neutral-800 rounded-xl p-6 mb-6">
        <h2 className="text-lg font-medium text-white">Zimmer-Informationen</h2>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm text-neutral-400 mb-1">Titel</label>
            <input name="title" defaultValue={room.title} className="w-full px-3 py-2 bg-neutral-800 border border-neutral-700 rounded-lg text-white focus:border-neutral-500 focus:outline-none" />
          </div>
          <div>
            <label className="block text-sm text-neutral-400 mb-1">Untertitel</label>
            <input name="subtitle" defaultValue={room.subtitle} className="w-full px-3 py-2 bg-neutral-800 border border-neutral-700 rounded-lg text-white focus:border-neutral-500 focus:outline-none" />
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4">
          <div>
            <label className="block text-sm text-neutral-400 mb-1">Preis</label>
            <input name="price" defaultValue={room.price} className="w-full px-3 py-2 bg-neutral-800 border border-neutral-700 rounded-lg text-white focus:border-neutral-500 focus:outline-none" />
          </div>
          <div>
            <label className="block text-sm text-neutral-400 mb-1">Preis-Hinweis</label>
            <input name="price_note" defaultValue={room.price_note} className="w-full px-3 py-2 bg-neutral-800 border border-neutral-700 rounded-lg text-white focus:border-neutral-500 focus:outline-none" />
          </div>
          <div>
            <label className="block text-sm text-neutral-400 mb-1">Gäste</label>
            <input name="guests" defaultValue={room.guests} className="w-full px-3 py-2 bg-neutral-800 border border-neutral-700 rounded-lg text-white focus:border-neutral-500 focus:outline-none" />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm text-neutral-400 mb-1">Größe</label>
            <input name="size" defaultValue={room.size} className="w-full px-3 py-2 bg-neutral-800 border border-neutral-700 rounded-lg text-white focus:border-neutral-500 focus:outline-none" />
          </div>
          <div>
            <label className="block text-sm text-neutral-400 mb-1">Kartenbild</label>
            <input name="card_image" defaultValue={room.card_image} className="w-full px-3 py-2 bg-neutral-800 border border-neutral-700 rounded-lg text-white focus:border-neutral-500 focus:outline-none" />
          </div>
        </div>

        <div>
          <label className="block text-sm text-neutral-400 mb-1">Kurzbeschreibung (Karte)</label>
          <textarea name="description" defaultValue={room.description} rows={2} className="w-full px-3 py-2 bg-neutral-800 border border-neutral-700 rounded-lg text-white focus:border-neutral-500 focus:outline-none resize-none" />
        </div>

        <div>
          <label className="block text-sm text-neutral-400 mb-1">Detail-Beschreibung</label>
          <textarea name="detail_description" defaultValue={room.detail_description} rows={3} className="w-full px-3 py-2 bg-neutral-800 border border-neutral-700 rounded-lg text-white focus:border-neutral-500 focus:outline-none resize-none" />
        </div>

        <div>
          <label className="block text-sm text-neutral-400 mb-1">Detail-Details</label>
          <textarea name="detail_details" defaultValue={room.detail_details} rows={3} className="w-full px-3 py-2 bg-neutral-800 border border-neutral-700 rounded-lg text-white focus:border-neutral-500 focus:outline-none resize-none" />
        </div>

        <div className="flex items-center gap-2">
          <input
            name="popular"
            type="checkbox"
            defaultChecked={room.popular}
            className="w-4 h-4 accent-white"
          />
          <label className="text-sm text-neutral-400">Beliebteste Wahl</label>
        </div>

        <div>
          <label className="block text-sm text-neutral-400 mb-1">Extras (kommagetrennt)</label>
          <input
            defaultValue={room.extras.join(", ")}
            onChange={(e) => setRoom({ ...room, extras: e.target.value.split(",").map((s) => s.trim()).filter(Boolean) })}
            className="w-full px-3 py-2 bg-neutral-800 border border-neutral-700 rounded-lg text-white focus:border-neutral-500 focus:outline-none"
          />
        </div>

        <div>
          <label className="block text-sm text-neutral-400 mb-1">Ausstattung (kommagetrennt)</label>
          <input
            defaultValue={room.amenities.join(", ")}
            onChange={(e) => setRoom({ ...room, amenities: e.target.value.split(",").map((s) => s.trim()).filter(Boolean) })}
            className="w-full px-3 py-2 bg-neutral-800 border border-neutral-700 rounded-lg text-white focus:border-neutral-500 focus:outline-none"
          />
        </div>

        <SaveButton />
      </form>

      {/* Room Images */}
      <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-medium text-white">Bilder</h2>
          <button
            type="button"
            onClick={handleImageUpload}
            className="text-sm text-neutral-400 hover:text-white transition-colors"
          >
            + Bild hinzufügen
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {images.map((img) => (
            <div key={img.id} className="relative group">
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                <Image src={img.src} alt={img.alt} fill sizes="200px" className="object-cover" />
              </div>
              <button
                type="button"
                onClick={() => removeImage(img.id)}
                className="absolute top-2 right-2 w-6 h-6 bg-black/60 rounded-full text-white text-xs opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center"
              >
                &times;
              </button>
              <input
                value={img.alt}
                onChange={(e) => setImages(images.map((i) => i.id === img.id ? { ...i, alt: e.target.value } : i))}
                placeholder="Alt-Text"
                className="mt-1 w-full px-2 py-1 bg-neutral-800 border border-neutral-700 rounded text-xs text-white focus:outline-none"
              />
            </div>
          ))}
        </div>

        <button
          type="button"
          onClick={handleSaveImages}
          className="mt-4 px-6 py-2.5 bg-white text-black text-sm font-medium rounded-lg hover:bg-neutral-200 transition-colors"
        >
          Bilder speichern
        </button>
      </div>
    </div>
  );
}
