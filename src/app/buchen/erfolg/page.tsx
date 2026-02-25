import type { Metadata } from "next";
import Link from "next/link";
import OrganicButton from "@/components/ui/OrganicButton";

export const metadata: Metadata = {
  title: "Anfrage gesendet | Das Gästehaus Eimeldingen",
  description: "Ihre Buchungsanfrage wurde erfolgreich gesendet.",
};

export default function ErfolgPage() {
  return (
    <main className="pt-32 pb-[clamp(4rem,10vh,8rem)]">
      <div className="container mx-auto px-6 max-w-2xl text-center">
        {/* Checkmark animation */}
        <div className="mx-auto w-20 h-20 rounded-full bg-sage/10 flex items-center justify-center mb-8 animate-fade-in">
          <svg
            className="w-10 h-10 text-sage"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>

        <h1 className="text-[clamp(1.75rem,4vw,2.75rem)] font-serif text-[var(--color-primary)] mb-4 animate-fade-in">
          Vielen Dank für Ihre Anfrage!
        </h1>

        <p className="text-[var(--color-text)] font-light text-base md:text-lg leading-relaxed max-w-md mx-auto mb-3 animate-fade-in">
          Wir haben Ihre Buchungsanfrage erhalten und senden Ihnen eine
          Bestätigung per E-Mail.
        </p>

        <p className="text-[var(--color-primary)] font-medium text-base mb-10 animate-fade-in">
          Wir melden uns innerhalb von 24 Stunden bei Ihnen.
        </p>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in">
          <OrganicButton href="/" variant="primary" arrow>
            Zurück zur Startseite
          </OrganicButton>
          <OrganicButton href="/zimmer" variant="outline" arrow>
            Unsere Zimmer ansehen
          </OrganicButton>
        </div>

        {/* Contact info for urgent requests */}
        <div className="rounded-2xl border border-[var(--color-primary)]/8 bg-[var(--surface)] p-6 text-left animate-fade-in">
          <p className="text-sage font-medium text-[11px] uppercase tracking-[0.25em] mb-3">
            Dringende Anfragen?
          </p>
          <p className="text-[var(--color-text)] font-light text-sm leading-relaxed mb-4">
            Für dringende Anliegen erreichen Sie uns auch direkt:
          </p>
          <div className="space-y-2 text-sm">
            <p className="text-[var(--color-primary)]">
              <span className="text-[var(--color-earth-muted)]">Telefon: </span>
              <a
                href="tel:+4976214248233"
                className="font-medium hover:text-sage transition-colors"
              >
                +49 (0) 7621 4 24 82 33
              </a>
            </p>
            <p className="text-[var(--color-primary)]">
              <span className="text-[var(--color-earth-muted)]">E-Mail: </span>
              <a
                href="mailto:info@dasgaestehaus-eimeldingen.de"
                className="font-medium hover:text-sage transition-colors"
              >
                info@dasgaestehaus-eimeldingen.de
              </a>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
