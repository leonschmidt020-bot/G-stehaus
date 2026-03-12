"use client";

import { useState, useEffect } from "react";
import { updateNearbySpots } from "@/app/(admin)/admin/actions";
import type { NearbySpot } from "@/lib/supabase/types";

export default function AdminNearbySpotsPage() {
  const [spots, setSpots] = useState<NearbySpot[]>([]);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState<string | null>(null);

  useEffect(() => {
    fetch("/api/admin/nearby-spots")
      .then((r) => r.json())
      .then((data) => {
        setSpots(data);
        setLoading(false);
      });
  }, []);

  function addSpot() {
    setSpots([
      ...spots,
      { id: crypto.randomUUID(), name: "", walk_time: "", drive_time: null, sort_order: spots.length + 1 },
    ]);
  }

  function removeSpot(id: string) {
    setSpots(spots.filter((s) => s.id !== id));
  }

  function updateSpot(id: string, field: string, value: string | null) {
    setSpots(spots.map((s) => (s.id === id ? { ...s, [field]: value } : s)));
  }

  async function handleSave() {
    const formData = new FormData();
    formData.set(
      "spots",
      JSON.stringify(spots.map((s) => ({ name: s.name, walk_time: s.walk_time, drive_time: s.drive_time })))
    );
    const result = await updateNearbySpots(formData);
    if (result?.error) {
      setMessage(`Fehler: ${result.error}`);
    } else {
      setMessage("Gespeichert!");
      setTimeout(() => setMessage(null), 3000);
    }
  }

  if (loading) return <div className="text-neutral-400">Laden...</div>;

  return (
    <div className="max-w-3xl">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-serif text-white">In der Nähe</h1>
        <button
          onClick={addSpot}
          className="text-sm text-neutral-400 hover:text-white transition-colors"
        >
          + Hinzufügen
        </button>
      </div>

      {message && (
        <div className={`mb-4 px-4 py-2 rounded-lg text-sm ${message.startsWith("Fehler") ? "bg-red-900/50 text-red-300" : "bg-green-900/50 text-green-300"}`}>
          {message}
        </div>
      )}

      <div className="space-y-4">
        {spots.map((s, i) => (
          <div key={s.id} className="bg-neutral-900 border border-neutral-800 rounded-xl p-4">
            <div className="flex items-start justify-between gap-4">
              <span className="text-neutral-600 text-sm mt-2">{i + 1}</span>
              <div className="flex-1 space-y-3">
                <input
                  value={s.name}
                  onChange={(e) => updateSpot(s.id, "name", e.target.value)}
                  placeholder="Name (z.B. Bäckerei)"
                  className="w-full px-3 py-2 bg-neutral-800 border border-neutral-700 rounded-lg text-white focus:border-neutral-500 focus:outline-none"
                />
                <div className="grid grid-cols-2 gap-3">
                  <input
                    value={s.walk_time}
                    onChange={(e) => updateSpot(s.id, "walk_time", e.target.value)}
                    placeholder="Zu Fuß (z.B. 5 Min.)"
                    className="w-full px-3 py-2 bg-neutral-800 border border-neutral-700 rounded-lg text-white focus:border-neutral-500 focus:outline-none"
                  />
                  <input
                    value={s.drive_time || ""}
                    onChange={(e) => updateSpot(s.id, "drive_time", e.target.value || null)}
                    placeholder="Mit Auto (optional)"
                    className="w-full px-3 py-2 bg-neutral-800 border border-neutral-700 rounded-lg text-white focus:border-neutral-500 focus:outline-none"
                  />
                </div>
              </div>
              <button
                onClick={() => removeSpot(s.id)}
                className="text-neutral-600 hover:text-red-400 transition-colors mt-2"
              >
                &times;
              </button>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={handleSave}
        className="mt-6 px-6 py-2.5 bg-white text-black text-sm font-medium rounded-lg hover:bg-neutral-200 transition-colors"
      >
        Speichern
      </button>
    </div>
  );
}
