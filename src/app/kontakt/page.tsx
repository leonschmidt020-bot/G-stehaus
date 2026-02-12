import ContactForm from "@/components/ContactForm";

export default function ContactPage() {
  return (
    <>
      {/* Page Header */}
      <section className="py-[clamp(3rem,8vh,5rem)] bg-[var(--surface)]">
        <div className="container mx-auto px-6 max-w-3xl">
          <h1 className="text-[clamp(2.25rem,5vw,3.75rem)] font-serif text-[var(--color-primary)] tracking-tight">
            Schreiben Sie uns
          </h1>
          <p className="text-[var(--color-text)] mt-4 font-light leading-relaxed text-lg">
            Ob Buchungsanfrage, Frage zur Anreise oder Sonderwunsch, wir antworten
            in der Regel innerhalb weniger Stunden. Oder rufen Sie einfach an.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-[clamp(3rem,8vh,5rem)]">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start max-w-6xl mx-auto">
            {/* Contact Details */}
            <div className="space-y-6">
              <div className="glass-white rounded-[var(--radius-xl)] p-8">
                <ul className="space-y-6">
                  <li>
                    <h3 className="font-medium text-[var(--color-primary)] text-sm mb-1">Adresse</h3>
                    <p className="text-[var(--color-text)] text-sm font-light">
                      Haltinger Weg 3, 79591 Eimeldingen
                    </p>
                  </li>

                  <li>
                    <h3 className="font-medium text-[var(--color-primary)] text-sm mb-1">Telefon</h3>
                    <p className="text-[var(--color-text)] text-sm font-light">
                      <a href="tel:+4976214248233" className="hover:text-sage transition-colors">
                        +49 (0) 7621 4 24 82 33
                      </a>
                    </p>
                  </li>

                  <li>
                    <h3 className="font-medium text-[var(--color-primary)] text-sm mb-1">E-Mail</h3>
                    <p className="text-[var(--color-text)] text-sm font-light">
                      <a href="mailto:info@dasgaestehaus-eimeldingen.de" className="hover:text-sage transition-colors">
                        info@dasgaestehaus-eimeldingen.de
                      </a>
                    </p>
                  </li>

                  <li>
                    <h3 className="font-medium text-[var(--color-primary)] text-sm mb-1">Check-in / Check-out</h3>
                    <p className="text-[var(--color-text)] text-sm font-light">
                      Check-in ab 15 Uhr · Check-out bis 11 Uhr
                    </p>
                    <p className="text-earth-muted text-xs mt-1">
                      Andere Zeiten nach Absprache möglich.
                    </p>
                  </li>

                  <li>
                    <h3 className="font-medium text-[var(--color-primary)] text-sm mb-1">Anreise</h3>
                    <p className="text-[var(--color-text)] text-sm font-light">
                      Direkt an der A5, Nähe Basel, Lörrach und Schweizer Grenze.
                      Kostenloser Parkplatz direkt am Haus.
                    </p>
                  </li>
                </ul>
              </div>

              {/* Map */}
              <div className="h-64 rounded-[var(--radius-xl)] overflow-hidden shadow-soft-ui">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://maps.google.com/maps?q=Haltinger+Weg+3,+79591+Eimeldingen&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-full border-0"
                  title="Standort Karte"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Form */}
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
