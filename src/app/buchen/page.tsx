import { Suspense } from "react";
import type { Metadata } from "next";
import BookingForm from "@/components/booking/BookingForm";

export const metadata: Metadata = {
  title: "Buchungsanfrage | Das Gästehaus Eimeldingen",
  description:
    "Stellen Sie eine unverbindliche Buchungsanfrage für Ihren Aufenthalt im Gästehaus Eimeldingen.",
};

export default function BuchenPage() {
  return (
    <main className="pt-32 pb-[clamp(4rem,10vh,8rem)]">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-sage font-medium text-[11px] uppercase tracking-[0.25em] mb-4">
            Buchungsanfrage
          </p>
          <h1 className="text-[clamp(2rem,5vw,3.25rem)] font-serif text-[var(--color-primary)] tracking-tight leading-tight mb-4">
            Ihren Aufenthalt planen
          </h1>
          <p className="text-[var(--color-text)] font-light text-base md:text-lg max-w-lg mx-auto">
            Füllen Sie das Formular Schritt für Schritt aus — wir melden uns
            innerhalb von 24 Stunden bei Ihnen.
          </p>
        </div>

        {/* Form */}
        <Suspense
          fallback={
            <div className="max-w-2xl mx-auto animate-pulse space-y-4">
              <div className="h-1 rounded-full bg-[var(--color-sage-muted)]/40" />
              <div className="h-64 rounded-2xl bg-[var(--surface)]" />
            </div>
          }
        >
          <BookingForm />
        </Suspense>
      </div>
    </main>
  );
}
