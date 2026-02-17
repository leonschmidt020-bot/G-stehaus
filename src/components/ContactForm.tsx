"use client";

import { useSearchParams } from "next/navigation";
import OrganicButton from "@/components/ui/OrganicButton";

export default function ContactForm() {
  const searchParams = useSearchParams();
  const zimmer = searchParams.get("zimmer");

  const defaultBetreff = zimmer ? `Buchungsanfrage ${zimmer}` : "";
  const defaultNachricht = zimmer
    ? `Guten Tag,\n\nich interessiere mich für Ihr ${zimmer} und würde gerne die Verfügbarkeit für folgenden Zeitraum anfragen:\n\nAnreise: \nAbreise: \nAnzahl Personen: \n\nMit freundlichen Grüßen`
    : "";

  return (
    <div className="rounded-[var(--radius-xl)] border border-[var(--color-primary)]/10 p-8 md:p-10 relative overflow-hidden bg-[var(--surface)]">
      <div className="relative z-10">
        <h2 className="text-2xl font-serif text-[var(--color-primary)] mb-8">
          Nachricht senden
        </h2>

        <form className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-[var(--color-primary)] mb-2">
                Name
              </label>
              <input
                type="text"
                className="w-full px-5 py-3.5 rounded-[var(--radius-md)] bg-[var(--background)] border border-[var(--color-primary)]/15 focus:ring-2 focus:ring-sage/40 focus:border-sage outline-none transition-all text-[var(--color-primary)] placeholder:text-[var(--color-text)]/50"
                placeholder="Ihr Name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[var(--color-primary)] mb-2">
                E-Mail
              </label>
              <input
                type="email"
                className="w-full px-5 py-3.5 rounded-[var(--radius-md)] bg-[var(--background)] border border-[var(--color-primary)]/15 focus:ring-2 focus:ring-sage/40 focus:border-sage outline-none transition-all text-[var(--color-primary)] placeholder:text-[var(--color-text)]/50"
                placeholder="ihre@email.com"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-[var(--color-primary)] mb-2">
              Betreff
            </label>
            <input
              type="text"
              defaultValue={defaultBetreff}
              className="w-full px-5 py-3.5 rounded-[var(--radius-md)] bg-[var(--background)] border border-[var(--color-primary)]/15 focus:ring-2 focus:ring-sage/40 focus:border-sage outline-none transition-all text-[var(--color-primary)] placeholder:text-[var(--color-text)]/50"
              placeholder="Buchungsanfrage, Frage, ..."
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-[var(--color-primary)] mb-2">
              Nachricht
            </label>
            <textarea
              rows={5}
              defaultValue={defaultNachricht}
              className="w-full px-5 py-3.5 rounded-[var(--radius-md)] bg-[var(--background)] border border-[var(--color-primary)]/15 focus:ring-2 focus:ring-sage/40 focus:border-sage outline-none transition-all resize-none text-[var(--color-primary)] placeholder:text-[var(--color-text)]/50"
              placeholder="Wie können wir Ihnen helfen?"
            />
          </div>

          <OrganicButton type="submit" variant="primary">
            Nachricht senden
          </OrganicButton>
        </form>
      </div>
    </div>
  );
}
