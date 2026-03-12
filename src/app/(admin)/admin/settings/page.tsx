"use client";

import { useState, useEffect } from "react";
import { updateSettings } from "@/app/(admin)/admin/actions";
import type { SiteSetting } from "@/lib/supabase/types";

export default function AdminSettingsPage() {
  const [settings, setSettings] = useState<SiteSetting[]>([]);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState<string | null>(null);

  useEffect(() => {
    fetch("/api/admin/settings")
      .then((r) => r.json())
      .then((data) => {
        setSettings(data);
        setLoading(false);
      });
  }, []);

  function updateSetting(key: string, value: string) {
    setSettings(settings.map((s) => (s.key === key ? { ...s, value } : s)));
  }

  async function handleSave() {
    const formData = new FormData();
    formData.set(
      "settings",
      JSON.stringify(settings.map((s) => ({ key: s.key, value: s.value })))
    );
    const result = await updateSettings(formData);
    if (result?.error) {
      setMessage(`Fehler: ${result.error}`);
    } else {
      setMessage("Gespeichert!");
      setTimeout(() => setMessage(null), 3000);
    }
  }

  if (loading) return <div className="text-neutral-400">Laden...</div>;

  // Group settings
  const groups: Record<string, SiteSetting[]> = {};
  settings.forEach((s) => {
    if (!groups[s.group]) groups[s.group] = [];
    groups[s.group].push(s);
  });

  const groupLabels: Record<string, string> = {
    hero: "Hero-Bereich",
    kontakt: "Kontaktdaten",
    checkin: "Check-in / Check-out",
    about: "Über uns",
    testimonials: "Bewertungen",
  };

  return (
    <div className="max-w-3xl">
      <h1 className="text-2xl font-serif text-white mb-8">Einstellungen</h1>

      {message && (
        <div className={`mb-4 px-4 py-2 rounded-lg text-sm ${message.startsWith("Fehler") ? "bg-red-900/50 text-red-300" : "bg-green-900/50 text-green-300"}`}>
          {message}
        </div>
      )}

      <div className="space-y-6">
        {Object.entries(groups).map(([group, items]) => (
          <div key={group} className="bg-neutral-900 border border-neutral-800 rounded-xl p-6">
            <h2 className="text-lg font-medium text-white mb-4">
              {groupLabels[group] || group}
            </h2>
            <div className="space-y-4">
              {items.map((setting) => (
                <div key={setting.key}>
                  <label className="block text-sm text-neutral-400 mb-1">
                    {setting.label}
                  </label>
                  {setting.input_type === "textarea" ? (
                    <textarea
                      value={setting.value}
                      onChange={(e) => updateSetting(setting.key, e.target.value)}
                      rows={3}
                      className="w-full px-3 py-2 bg-neutral-800 border border-neutral-700 rounded-lg text-white focus:border-neutral-500 focus:outline-none resize-none"
                    />
                  ) : (
                    <input
                      value={setting.value}
                      onChange={(e) => updateSetting(setting.key, e.target.value)}
                      className="w-full px-3 py-2 bg-neutral-800 border border-neutral-700 rounded-lg text-white focus:border-neutral-500 focus:outline-none"
                    />
                  )}
                </div>
              ))}
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
