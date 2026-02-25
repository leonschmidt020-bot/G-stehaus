"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import OrganicButton from "@/components/ui/OrganicButton";
import {
  rooms,
  bookingSteps,
  initialBookingData,
  type BookingFormData,
  type RoomType,
} from "@/lib/booking-data";

/* ──────────────────────────────────────────────
   Animation variants
   ────────────────────────────────────────────── */

const stepVariants = {
  enter: (dir: number) => ({
    x: dir > 0 ? 80 : -80,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] as const },
  },
  exit: (dir: number) => ({
    x: dir < 0 ? 80 : -80,
    opacity: 0,
    transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] as const },
  }),
};

/* ──────────────────────────────────────────────
   Progress Bar
   ────────────────────────────────────────────── */

function ProgressBar({ current, total }: { current: number; total: number }) {
  return (
    <div className="mb-10">
      {/* Step labels — desktop */}
      <div className="hidden sm:flex justify-between mb-3">
        {bookingSteps.map((label, i) => (
          <button
            key={label}
            type="button"
            className={`text-xs uppercase tracking-[0.15em] font-medium transition-colors duration-300 ${
              i <= current
                ? "text-sage"
                : "text-[var(--color-earth-muted)]/50"
            }`}
            disabled
          >
            {label}
          </button>
        ))}
      </div>
      {/* Mobile label */}
      <p className="sm:hidden text-xs uppercase tracking-[0.15em] font-medium text-sage mb-3">
        Schritt {current + 1} von {total} — {bookingSteps[current]}
      </p>
      {/* Bar */}
      <div className="h-1 rounded-full bg-[var(--color-sage-muted)]/40 overflow-hidden">
        <motion.div
          className="h-full rounded-full bg-sage"
          initial={false}
          animate={{ width: `${((current + 1) / total) * 100}%` }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        />
      </div>
    </div>
  );
}

/* ──────────────────────────────────────────────
   Shared input styles
   ────────────────────────────────────────────── */

const inputClass =
  "w-full px-4 py-3 rounded-xl border border-[var(--color-primary)]/10 bg-[var(--surface)] text-[var(--color-primary)] text-sm font-light placeholder:text-[var(--color-earth-muted)]/60 focus:outline-none focus:ring-2 focus:ring-sage/40 focus:border-sage/40 transition-all duration-300";

const labelClass =
  "block text-xs uppercase tracking-[0.15em] font-medium text-[var(--color-earth-muted)] mb-2";

/* ──────────────────────────────────────────────
   Step 1: Aufenthalt
   ────────────────────────────────────────────── */

function StepAufenthalt({
  data,
  onChange,
}: {
  data: BookingFormData;
  onChange: (patch: Partial<BookingFormData>) => void;
}) {
  const today = new Date().toISOString().split("T")[0];
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-[clamp(1.5rem,3vw,2.25rem)] font-serif text-[var(--color-primary)] mb-2">
          Wann möchten Sie anreisen?
        </h2>
        <p className="text-[var(--color-text)] font-light">
          Wählen Sie Ihren Reisezeitraum und die Anzahl der Gäste.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className={labelClass}>Anreise</label>
          <input
            type="date"
            min={today}
            value={data.checkIn}
            onChange={(e) => onChange({ checkIn: e.target.value })}
            className={inputClass}
            required
          />
        </div>
        <div>
          <label className={labelClass}>Abreise</label>
          <input
            type="date"
            min={data.checkIn || today}
            value={data.checkOut}
            onChange={(e) => onChange({ checkOut: e.target.value })}
            className={inputClass}
            required
          />
        </div>
        <div>
          <label className={labelClass}>Erwachsene</label>
          <select
            value={data.adults}
            onChange={(e) => onChange({ adults: Number(e.target.value) })}
            className={inputClass}
          >
            {[1, 2, 3, 4, 5, 6].map((n) => (
              <option key={n} value={n}>
                {n} {n === 1 ? "Erwachsener" : "Erwachsene"}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className={labelClass}>Kinder</label>
          <select
            value={data.children}
            onChange={(e) => onChange({ children: Number(e.target.value) })}
            className={inputClass}
          >
            {[0, 1, 2, 3, 4, 5, 6].map((n) => (
              <option key={n} value={n}>
                {n} {n === 1 ? "Kind" : "Kinder"}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}

/* ──────────────────────────────────────────────
   Step 2: Zimmerwahl
   ────────────────────────────────────────────── */

function StepZimmerwahl({
  data,
  onChange,
}: {
  data: BookingFormData;
  onChange: (patch: Partial<BookingFormData>) => void;
}) {
  const toggle = (id: string) => {
    const selected = data.selectedRooms.includes(id)
      ? data.selectedRooms.filter((r) => r !== id)
      : [...data.selectedRooms, id];
    onChange({ selectedRooms: selected });
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-[clamp(1.5rem,3vw,2.25rem)] font-serif text-[var(--color-primary)] mb-2">
          Welches Zimmer darf es sein?
        </h2>
        <p className="text-[var(--color-text)] font-light">
          Sie können auch mehrere Zimmer auswählen.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {rooms.map((room: RoomType) => {
          const isSelected = data.selectedRooms.includes(room.id);
          return (
            <button
              key={room.id}
              type="button"
              onClick={() => toggle(room.id)}
              className={`group relative flex flex-col sm:flex-row items-stretch overflow-hidden rounded-2xl border-2 transition-all duration-300 text-left ${
                isSelected
                  ? "border-sage bg-[var(--color-sage-muted)]/20 shadow-[0_8px_30px_rgba(139,158,139,0.15)]"
                  : "border-[var(--color-primary)]/8 bg-[var(--surface)] hover:border-sage/30 hover:shadow-[0_4px_20px_-4px_rgba(74,66,57,0.08)]"
              }`}
            >
              {/* Image */}
              <div className="relative w-full sm:w-48 h-44 sm:h-auto shrink-0 overflow-hidden">
                <Image
                  src={room.image}
                  alt={room.title}
                  fill
                  sizes="(max-width: 640px) 100vw, 192px"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {room.popular && (
                  <span className="absolute top-3 left-3 bg-sage text-white text-[10px] font-medium px-2.5 py-1 rounded-full uppercase tracking-wider">
                    Beliebt
                  </span>
                )}
              </div>

              {/* Content */}
              <div className="flex-1 p-5 sm:p-6 flex flex-col justify-between">
                <div>
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-lg font-serif text-[var(--color-primary)]">
                      {room.title}
                    </h3>
                    <div className="text-right shrink-0">
                      <span className="text-lg font-serif text-[var(--color-primary)]">
                        {room.price}
                      </span>
                      <span className="block text-xs text-[var(--color-earth-muted)]">
                        {room.priceNote}
                      </span>
                    </div>
                  </div>
                  <p className="text-sm text-[var(--color-text)] font-light mt-2 leading-relaxed">
                    {room.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {room.extras.map((extra) => (
                      <span
                        key={extra}
                        className="text-[11px] text-[var(--color-earth-muted)] bg-[var(--color-primary)]/5 px-2.5 py-1 rounded-full"
                      >
                        {extra}
                      </span>
                    ))}
                    <span className="text-[11px] text-[var(--color-earth-muted)] bg-[var(--color-primary)]/5 px-2.5 py-1 rounded-full">
                      {room.guests}
                    </span>
                    <span className="text-[11px] text-[var(--color-earth-muted)] bg-[var(--color-primary)]/5 px-2.5 py-1 rounded-full">
                      {room.size}
                    </span>
                  </div>
                </div>

                {/* Checkmark */}
                <div className="mt-4 flex items-center gap-2">
                  <span
                    className={`inline-flex items-center justify-center w-5 h-5 rounded-full border-2 transition-all duration-300 ${
                      isSelected
                        ? "border-sage bg-sage text-white"
                        : "border-[var(--color-primary)]/20"
                    }`}
                  >
                    {isSelected && (
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    )}
                  </span>
                  <span
                    className={`text-xs font-medium transition-colors ${
                      isSelected ? "text-sage" : "text-[var(--color-earth-muted)]"
                    }`}
                  >
                    {isSelected ? "Ausgewählt" : "Auswählen"}
                  </span>
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}

/* ──────────────────────────────────────────────
   Step 3: Persönliche Daten
   ────────────────────────────────────────────── */

function StepPersoenlich({
  data,
  onChange,
}: {
  data: BookingFormData;
  onChange: (patch: Partial<BookingFormData>) => void;
}) {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-[clamp(1.5rem,3vw,2.25rem)] font-serif text-[var(--color-primary)] mb-2">
          Ihre Kontaktdaten
        </h2>
        <p className="text-[var(--color-text)] font-light">
          Damit wir Ihre Anfrage bearbeiten können.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className={labelClass}>
            Vorname <span className="text-terracotta">*</span>
          </label>
          <input
            type="text"
            value={data.firstName}
            onChange={(e) => onChange({ firstName: e.target.value })}
            placeholder="Max"
            className={inputClass}
            required
          />
        </div>
        <div>
          <label className={labelClass}>
            Nachname <span className="text-terracotta">*</span>
          </label>
          <input
            type="text"
            value={data.lastName}
            onChange={(e) => onChange({ lastName: e.target.value })}
            placeholder="Mustermann"
            className={inputClass}
            required
          />
        </div>
        <div>
          <label className={labelClass}>
            E-Mail <span className="text-terracotta">*</span>
          </label>
          <input
            type="email"
            value={data.email}
            onChange={(e) => onChange({ email: e.target.value })}
            placeholder="max@beispiel.de"
            className={inputClass}
            required
          />
        </div>
        <div>
          <label className={labelClass}>Telefon</label>
          <input
            type="tel"
            value={data.phone}
            onChange={(e) => onChange({ phone: e.target.value })}
            placeholder="+49 123 456 789"
            className={inputClass}
          />
        </div>
        <div className="sm:col-span-2">
          <label className={labelClass}>Straße und Hausnummer</label>
          <input
            type="text"
            value={data.street}
            onChange={(e) => onChange({ street: e.target.value })}
            placeholder="Musterstraße 1"
            className={inputClass}
          />
        </div>
        <div>
          <label className={labelClass}>PLZ und Ort</label>
          <input
            type="text"
            value={data.zipCity}
            onChange={(e) => onChange({ zipCity: e.target.value })}
            placeholder="79591 Eimeldingen"
            className={inputClass}
          />
        </div>
        <div>
          <label className={labelClass}>Land</label>
          <select
            value={data.country}
            onChange={(e) => onChange({ country: e.target.value })}
            className={inputClass}
          >
            <option value="Deutschland">Deutschland</option>
            <option value="Österreich">Österreich</option>
            <option value="Schweiz">Schweiz</option>
            <option value="Frankreich">Frankreich</option>
            <option value="Andere">Andere</option>
          </select>
        </div>
      </div>
    </div>
  );
}

/* ──────────────────────────────────────────────
   Step 4: Sonderwünsche
   ────────────────────────────────────────────── */

function StepSonderwuensche({
  data,
  onChange,
}: {
  data: BookingFormData;
  onChange: (patch: Partial<BookingFormData>) => void;
}) {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-[clamp(1.5rem,3vw,2.25rem)] font-serif text-[var(--color-primary)] mb-2">
          Haben Sie besondere Wünsche?
        </h2>
        <p className="text-[var(--color-text)] font-light">
          Alles, was Ihren Aufenthalt noch angenehmer macht.
        </p>
      </div>

      <div>
        <label className={labelClass}>Anmerkungen</label>
        <textarea
          value={data.specialRequests}
          onChange={(e) => onChange({ specialRequests: e.target.value })}
          placeholder="z.B. späte Anreise, Allergien, besondere Anlässe..."
          rows={4}
          className={`${inputClass} resize-none`}
        />
      </div>

    </div>
  );
}

/* ──────────────────────────────────────────────
   Step 5: Zusammenfassung
   ────────────────────────────────────────────── */

function StepZusammenfassung({
  data,
  onChange,
}: {
  data: BookingFormData;
  onChange: (patch: Partial<BookingFormData>) => void;
}) {
  const selectedRoomData = rooms.filter((r) =>
    data.selectedRooms.includes(r.id)
  );

  const formatDate = (dateStr: string) => {
    if (!dateStr) return "–";
    const d = new Date(dateStr + "T00:00:00");
    return d.toLocaleDateString("de-DE", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    });
  };

  const nights =
    data.checkIn && data.checkOut
      ? Math.max(
          0,
          Math.ceil(
            (new Date(data.checkOut).getTime() -
              new Date(data.checkIn).getTime()) /
              (1000 * 60 * 60 * 24)
          )
        )
      : 0;

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-[clamp(1.5rem,3vw,2.25rem)] font-serif text-[var(--color-primary)] mb-2">
          Ihre Buchungsanfrage
        </h2>
        <p className="text-[var(--color-text)] font-light">
          Bitte überprüfen Sie Ihre Angaben vor dem Absenden.
        </p>
      </div>

      {/* Summary sections */}
      <div className="space-y-5">
        {/* Aufenthalt */}
        <div className="rounded-2xl border border-[var(--color-primary)]/8 bg-[var(--surface)] p-5">
          <p className="text-sage font-medium text-[11px] uppercase tracking-[0.25em] mb-3">
            Aufenthalt
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm">
            <div>
              <span className="text-[var(--color-earth-muted)] text-xs">Anreise</span>
              <p className="text-[var(--color-primary)] font-medium mt-0.5">
                {formatDate(data.checkIn)}
              </p>
            </div>
            <div>
              <span className="text-[var(--color-earth-muted)] text-xs">Abreise</span>
              <p className="text-[var(--color-primary)] font-medium mt-0.5">
                {formatDate(data.checkOut)}
              </p>
            </div>
            <div>
              <span className="text-[var(--color-earth-muted)] text-xs">Nächte</span>
              <p className="text-[var(--color-primary)] font-medium mt-0.5">
                {nights}
              </p>
            </div>
            <div>
              <span className="text-[var(--color-earth-muted)] text-xs">Gäste</span>
              <p className="text-[var(--color-primary)] font-medium mt-0.5">
                {data.adults} Erw.{data.children > 0 ? `, ${data.children} Kind${data.children > 1 ? "er" : ""}` : ""}
              </p>
            </div>
          </div>
        </div>

        {/* Zimmer */}
        <div className="rounded-2xl border border-[var(--color-primary)]/8 bg-[var(--surface)] p-5">
          <p className="text-sage font-medium text-[11px] uppercase tracking-[0.25em] mb-3">
            Zimmer
          </p>
          <div className="space-y-3">
            {selectedRoomData.map((room) => (
              <div key={room.id} className="flex items-center gap-4">
                <div className="relative w-16 h-12 rounded-lg overflow-hidden shrink-0">
                  <Image
                    src={room.image}
                    alt={room.title}
                    fill
                    sizes="64px"
                    className="object-cover"
                  />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-[var(--color-primary)] font-medium">
                    {room.title}
                  </p>
                  <p className="text-xs text-[var(--color-earth-muted)]">
                    {room.price} {room.priceNote}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Kontaktdaten */}
        <div className="rounded-2xl border border-[var(--color-primary)]/8 bg-[var(--surface)] p-5">
          <p className="text-sage font-medium text-[11px] uppercase tracking-[0.25em] mb-3">
            Kontaktdaten
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
            <div>
              <span className="text-[var(--color-earth-muted)] text-xs">Name</span>
              <p className="text-[var(--color-primary)] font-medium mt-0.5">
                {data.firstName} {data.lastName}
              </p>
            </div>
            <div>
              <span className="text-[var(--color-earth-muted)] text-xs">E-Mail</span>
              <p className="text-[var(--color-primary)] font-medium mt-0.5">
                {data.email}
              </p>
            </div>
            {data.phone && (
              <div>
                <span className="text-[var(--color-earth-muted)] text-xs">Telefon</span>
                <p className="text-[var(--color-primary)] font-medium mt-0.5">
                  {data.phone}
                </p>
              </div>
            )}
            {data.street && (
              <div>
                <span className="text-[var(--color-earth-muted)] text-xs">Adresse</span>
                <p className="text-[var(--color-primary)] font-medium mt-0.5">
                  {data.street}
                  {data.zipCity ? `, ${data.zipCity}` : ""}
                </p>
              </div>
            )}
            {data.country && (
              <div>
                <span className="text-[var(--color-earth-muted)] text-xs">Land</span>
                <p className="text-[var(--color-primary)] font-medium mt-0.5">
                  {data.country}
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Sonderwünsche */}
        {(data.specialRequests || data.breakfast || data.parking) && (
          <div className="rounded-2xl border border-[var(--color-primary)]/8 bg-[var(--surface)] p-5">
            <p className="text-sage font-medium text-[11px] uppercase tracking-[0.25em] mb-3">
              Sonderwünsche
            </p>
            <div className="space-y-2 text-sm">
              {data.breakfast && (
                <div className="flex items-center gap-2 text-[var(--color-primary)]">
                  <span className="w-1.5 h-1.5 rounded-full bg-sage shrink-0" />
                  Frühstück gewünscht
                </div>
              )}
              {data.parking && (
                <div className="flex items-center gap-2 text-[var(--color-primary)]">
                  <span className="w-1.5 h-1.5 rounded-full bg-sage shrink-0" />
                  Parkplatz benötigt
                </div>
              )}
              {data.specialRequests && (
                <p className="text-[var(--color-text)] font-light mt-2 leading-relaxed">
                  &ldquo;{data.specialRequests}&rdquo;
                </p>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Privacy consent */}
      <label className="flex items-start gap-3 cursor-pointer group pt-2">
        <input
          type="checkbox"
          checked={data.privacyConsent}
          onChange={(e) => onChange({ privacyConsent: e.target.checked })}
          className="sr-only peer"
        />
        <span className="mt-0.5 w-5 h-5 rounded-md border-2 border-[var(--color-primary)]/15 bg-[var(--surface)] peer-checked:bg-sage peer-checked:border-sage transition-all duration-300 flex items-center justify-center shrink-0">
          <svg
            className="w-3 h-3 text-white opacity-0 peer-checked:opacity-100 transition-opacity"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </span>
        <span className="text-sm text-[var(--color-text)] font-light leading-relaxed">
          Ich stimme der{" "}
          <a
            href="/datenschutz"
            target="_blank"
            className="text-sage underline underline-offset-2 hover:text-sage-dark transition-colors"
          >
            Datenschutzerklärung
          </a>{" "}
          zu. <span className="text-terracotta">*</span>
        </span>
      </label>
    </div>
  );
}

/* ──────────────────────────────────────────────
   Main Booking Form
   ────────────────────────────────────────────── */

export default function BookingForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const preselectedRoom = searchParams.get("zimmer");

  const [step, setStep] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const [formData, setFormData] = useState<BookingFormData>(() => {
    const initial = { ...initialBookingData };
    if (preselectedRoom) {
      const matchedRoom = rooms.find(
        (r) => r.title.toLowerCase() === preselectedRoom.toLowerCase() || r.id === preselectedRoom.toLowerCase()
      );
      if (matchedRoom) {
        initial.selectedRooms = [matchedRoom.id];
      }
    }
    return initial;
  });

  const updateData = useCallback(
    (patch: Partial<BookingFormData>) => {
      setFormData((prev) => ({ ...prev, ...patch }));
      setError("");
    },
    []
  );

  const totalSteps = bookingSteps.length;

  const validateStep = (): string | null => {
    switch (step) {
      case 0:
        if (!formData.checkIn) return "Bitte wählen Sie ein Anreisedatum.";
        if (!formData.checkOut) return "Bitte wählen Sie ein Abreisedatum.";
        if (formData.checkOut <= formData.checkIn)
          return "Das Abreisedatum muss nach dem Anreisedatum liegen.";
        return null;
      case 1:
        if (formData.selectedRooms.length === 0)
          return "Bitte wählen Sie mindestens ein Zimmer aus.";
        return null;
      case 2:
        if (!formData.firstName.trim()) return "Bitte geben Sie Ihren Vornamen ein.";
        if (!formData.lastName.trim()) return "Bitte geben Sie Ihren Nachnamen ein.";
        if (!formData.email.trim()) return "Bitte geben Sie Ihre E-Mail-Adresse ein.";
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
          return "Bitte geben Sie eine gültige E-Mail-Adresse ein.";
        return null;
      case 3:
        return null;
      case 4:
        if (!formData.privacyConsent)
          return "Bitte stimmen Sie der Datenschutzerklärung zu.";
        return null;
      default:
        return null;
    }
  };

  const goNext = () => {
    const err = validateStep();
    if (err) {
      setError(err);
      return;
    }
    setDirection(1);
    setStep((s) => Math.min(s + 1, totalSteps - 1));
    setError("");
  };

  const goBack = () => {
    setDirection(-1);
    setStep((s) => Math.max(s - 1, 0));
    setError("");
  };

  const handleSubmit = async () => {
    const err = validateStep();
    if (err) {
      setError(err);
      return;
    }

    setIsSubmitting(true);
    setError("");

    try {
      const res = await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        const json = await res.json().catch(() => ({}));
        throw new Error(json.error || "Fehler beim Senden der Anfrage");
      }

      router.push("/buchen/erfolg");
    } catch (e) {
      setError(
        e instanceof Error
          ? e.message
          : "Es ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const steps = [
    <StepAufenthalt key="aufenthalt" data={formData} onChange={updateData} />,
    <StepZimmerwahl key="zimmerwahl" data={formData} onChange={updateData} />,
    <StepPersoenlich key="persoenlich" data={formData} onChange={updateData} />,
    <StepSonderwuensche key="sonderwuensche" data={formData} onChange={updateData} />,
    <StepZusammenfassung key="zusammenfassung" data={formData} onChange={updateData} />,
  ];

  return (
    <div className="w-full max-w-2xl mx-auto">
      <ProgressBar current={step} total={totalSteps} />

      {/* Step content */}
      <div className="relative min-h-[400px]">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={step}
            custom={direction}
            variants={stepVariants}
            initial="enter"
            animate="center"
            exit="exit"
          >
            {steps[step]}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Error */}
      <AnimatePresence>
        {error && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="mt-4 p-3 rounded-xl bg-terracotta/10 border border-terracotta/20 text-terracotta text-sm font-light"
          >
            {error}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Navigation buttons */}
      <div className="flex justify-between items-center mt-8 pt-6 border-t border-[var(--color-primary)]/8">
        {step > 0 ? (
          <button
            type="button"
            onClick={goBack}
            className="inline-flex items-center gap-2 text-sm text-[var(--color-earth-muted)] hover:text-[var(--color-primary)] transition-colors duration-300 font-medium"
          >
            <span>&#8592;</span> Zurück
          </button>
        ) : (
          <div />
        )}

        {step < totalSteps - 1 ? (
          <OrganicButton onClick={goNext} variant="primary" arrow>
            Weiter
          </OrganicButton>
        ) : (
          <OrganicButton
            onClick={handleSubmit}
            variant="primary"
            type="submit"
            className={isSubmitting ? "pointer-events-none opacity-70" : ""}
          >
            {isSubmitting ? (
              <span className="flex items-center gap-2">
                <svg
                  className="animate-spin w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <circle
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="3"
                    className="opacity-25"
                  />
                  <path
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                    fill="currentColor"
                    className="opacity-75"
                  />
                </svg>
                Wird gesendet…
              </span>
            ) : (
              "Anfrage absenden"
            )}
          </OrganicButton>
        )}
      </div>
    </div>
  );
}
