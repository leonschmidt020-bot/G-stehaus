"use client";

import { useState, useEffect } from "react";
import { updateTestimonials } from "@/app/(admin)/admin/actions";
import type { Testimonial } from "@/lib/supabase/types";

export default function AdminTestimonialsPage() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState<string | null>(null);

  useEffect(() => {
    fetch("/api/admin/testimonials")
      .then((r) => r.json())
      .then((data) => {
        setTestimonials(data);
        setLoading(false);
      });
  }, []);

  function addTestimonial() {
    setTestimonials([
      ...testimonials,
      { id: crypto.randomUUID(), text: "", name: "", source: "Google", sort_order: testimonials.length + 1 },
    ]);
  }

  function removeTestimonial(id: string) {
    setTestimonials(testimonials.filter((t) => t.id !== id));
  }

  function updateTestimonial(id: string, field: string, value: string) {
    setTestimonials(testimonials.map((t) => (t.id === id ? { ...t, [field]: value } : t)));
  }

  async function handleSave() {
    const formData = new FormData();
    formData.set(
      "testimonials",
      JSON.stringify(testimonials.map((t) => ({ text: t.text, name: t.name, source: t.source })))
    );
    const result = await updateTestimonials(formData);
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
        <h1 className="text-2xl font-serif text-white">Bewertungen</h1>
        <button
          onClick={addTestimonial}
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
        {testimonials.map((t, i) => (
          <div key={t.id} className="bg-neutral-900 border border-neutral-800 rounded-xl p-4">
            <div className="flex items-start justify-between gap-4">
              <span className="text-neutral-600 text-sm mt-2">{i + 1}</span>
              <div className="flex-1 space-y-3">
                <textarea
                  value={t.text}
                  onChange={(e) => updateTestimonial(t.id, "text", e.target.value)}
                  placeholder="Bewertungstext"
                  rows={3}
                  className="w-full px-3 py-2 bg-neutral-800 border border-neutral-700 rounded-lg text-white focus:border-neutral-500 focus:outline-none resize-none"
                />
                <div className="grid grid-cols-2 gap-3">
                  <input
                    value={t.name}
                    onChange={(e) => updateTestimonial(t.id, "name", e.target.value)}
                    placeholder="Name"
                    className="w-full px-3 py-2 bg-neutral-800 border border-neutral-700 rounded-lg text-white focus:border-neutral-500 focus:outline-none"
                  />
                  <input
                    value={t.source}
                    onChange={(e) => updateTestimonial(t.id, "source", e.target.value)}
                    placeholder="Quelle (z.B. Google)"
                    className="w-full px-3 py-2 bg-neutral-800 border border-neutral-700 rounded-lg text-white focus:border-neutral-500 focus:outline-none"
                  />
                </div>
              </div>
              <button
                onClick={() => removeTestimonial(t.id)}
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
