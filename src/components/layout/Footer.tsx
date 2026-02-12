import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-earth text-cream/80 py-[clamp(3rem,8vh,5rem)]">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
        {/* Brand */}
        <div className="space-y-5">
          <h3 className="text-xl font-serif font-semibold text-cream tracking-wide">
            Das Gästehaus
          </h3>
          <p className="text-cream/50 text-sm leading-relaxed max-w-xs font-light">
            Haltinger Weg 3, 79591 Eimeldingen.
            Direkt an der A5, 10 Minuten von Basel.
          </p>
        </div>

        {/* Navigation */}
        <div className="space-y-5">
          <h4 className="text-[11px] font-medium text-sage uppercase tracking-[0.2em]">
            Seiten
          </h4>
          <ul className="space-y-3 text-cream/50">
            <li>
              <Link href="/" className="hover:text-sage transition-colors duration-300 text-sm">
                Startseite
              </Link>
            </li>
            <li>
              <Link href="/zimmer" className="hover:text-sage transition-colors duration-300 text-sm">
                Zimmer & Preise
              </Link>
            </li>
            <li>
              <Link href="/kontakt" className="hover:text-sage transition-colors duration-300 text-sm">
                Kontakt & Anfahrt
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div className="space-y-5">
          <h4 className="text-[11px] font-medium text-sage uppercase tracking-[0.2em]">
            Kontakt
          </h4>
          <ul className="space-y-3 text-cream/50 text-sm font-light">
            <li>
              <a
                href="tel:+4976214248233"
                className="hover:text-sage transition-colors duration-300"
              >
                +49 (0) 7621 4 24 82 33
              </a>
            </li>
            <li>
              <a
                href="mailto:info@dasgaestehaus-eimeldingen.de"
                className="hover:text-sage transition-colors duration-300"
              >
                info@dasgaestehaus-eimeldingen.de
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-cream/5 mt-12 pt-8 text-cream/25 text-xs font-light tracking-wide container mx-auto px-6 flex flex-col sm:flex-row justify-between gap-4">
        <p>&copy; {currentYear} Das Gästehaus Eimeldingen</p>
        <div className="flex gap-6">
          <Link href="/impressum" className="hover:text-cream/50 transition-colors">
            Impressum
          </Link>
          <Link href="/datenschutz" className="hover:text-cream/50 transition-colors">
            Datenschutz
          </Link>
        </div>
      </div>
    </footer>
  );
}
