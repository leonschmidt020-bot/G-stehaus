export default function ImpressumPage() {
  return (
    <section className="py-[clamp(3rem,8vh,5rem)]">
      <div className="container mx-auto px-6 max-w-3xl">
        <h1 className="text-3xl font-serif text-[var(--color-primary)] mb-8">Impressum</h1>

        <div className="space-y-6 text-[var(--color-text)] font-light leading-relaxed text-[15px]">
          <div>
            <h2 className="font-medium text-[var(--color-primary)] mb-2">Angaben gemäß § 5 TMG</h2>
            <p>
              Hierholzer GmbH &amp; Co. KG<br />
              Das Gästehaus<br />
              Haltinger Weg 3<br />
              79591 Eimeldingen
            </p>
          </div>

          <div>
            <h2 className="font-medium text-[var(--color-primary)] mb-2">Vertreten durch</h2>
            <p>
              Hierholzer Verwaltungs GmbH<br />
              diese vertreten durch die Geschäftsführung: Frau Sabine Hierholzer
            </p>
          </div>

          <div>
            <h2 className="font-medium text-[var(--color-primary)] mb-2">Kontakt</h2>
            <p>
              Telefon: +49 (0) 7621 4 24 82 33<br />
              E-Mail: info@dasgaestehaus-eimeldingen.de
            </p>
          </div>

          <div>
            <h2 className="font-medium text-[var(--color-primary)] mb-2">Registereintrag</h2>
            <p>
              Eintragung im Handelsregister.<br />
              Registergericht: Amtsgericht Freiburg i. Br.<br />
              Registernummer: HRB 721296
            </p>
          </div>

          <div>
            <h2 className="font-medium text-[var(--color-primary)] mb-2">Umsatzsteuer-ID</h2>
            <p>
              Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
              DE 327860499
            </p>
          </div>

          <div>
            <h2 className="font-medium text-[var(--color-primary)] mb-2">Inhaltlich verantwortlich gemäß § 55 Abs. 2 RStV</h2>
            <p>
              Nicole Bauer<br />
              Haltinger Weg 3<br />
              79591 Eimeldingen
            </p>
          </div>

          <div>
            <h2 className="font-medium text-[var(--color-primary)] mb-2">Streitschlichtung</h2>
            <p>
              Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung
              (OS) bereit. Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren
              vor einer Verbraucherschlichtungsstelle teilzunehmen.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
