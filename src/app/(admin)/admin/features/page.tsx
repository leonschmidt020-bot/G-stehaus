"use client";

import { useState, useEffect } from "react";
import { updateFeatures } from "@/app/(admin)/admin/actions";
import type { Feature } from "@/lib/supabase/types";

export default function AdminFeaturesPage() {
  const [features, setFeatures] = useState<Feature[]>([]);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState<string | null>(null);

  useEffect(() => {
    fetch("/api/admin/features")
      .then((r) => r.json())
      .then((data) => {
        setFeatures(data);
        setLoading(false);
      });
  }, []);

  function addFeature() {
    setFeatures([
      ...features,
      { id: crypto.randomUUID(), title: "", text: "", sort_order: features.length + 1 },
    ]);
  }

  function removeFeature(id: string) {
    setFeatures(features.filter((f) => f.id !== id));
  }

  function updateFeature(id: string, field: string, value: string) {
    setFeatures(features.map((f) => (f.id === id ? { ...f, [field]: value } : f)));
  }

  async function handleSave() {
    const formData = new FormData();
    formData.set("features", JSON.stringify(features.map((f) => ({ title: f.title, text: f.text }))));
    const result = await updateFeatures(formData);
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
        <h1 className="text-2xl font-serif text-white">Features</h1>
        <button
          onClick={addFeature}
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
        {features.map((f, i) => (
          <div key={f.id} className="bg-neutral-900 border border-neutral-800 rounded-xl p-4">
            <div className="flex items-start justify-between gap-4">
              <span className="text-neutral-600 text-sm mt-2">{i + 1}</span>
              <div className="flex-1 space-y-3">
                <input
                  value={f.title}
                  onChange={(e) => updateFeature(f.id, "title", e.target.value)}
                  placeholder="Titel"
                  className="w-full px-3 py-2 bg-neutral-800 border border-neutral-700 rounded-lg text-white focus:border-neutral-500 focus:outline-none"
                />
                <textarea
                  value={f.text}
                  onChange={(e) => updateFeature(f.id, "text", e.target.value)}
                  placeholder="Text"
                  rows={2}
                  className="w-full px-3 py-2 bg-neutral-800 border border-neutral-700 rounded-lg text-white focus:border-neutral-500 focus:outline-none resize-none"
                />
              </div>
              <button
                onClick={() => removeFeature(f.id)}
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
