import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-neutral-900 text-white py-16">
            <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
                {/* Brand & Description */}
                <div className="space-y-4">
                    <h3 className="text-2xl font-serif font-bold tracking-wide">Das Gästehaus</h3>
                    <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
                        Erleben Sie erholsame Tage im Markgräflerland. Unser familiengeführtes Haus bietet Komfort und persönliche Gastfreundschaft.
                    </p>
                </div>

                {/* Quick Links */}
                <div className="space-y-4">
                    <h4 className="text-lg font-medium text-gray-200 uppercase tracking-wider text-sm">Navigation</h4>
                    <ul className="space-y-2 text-gray-400">
                        <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
                        <li><Link href="/zimmer" className="hover:text-primary transition-colors">Zimmer & Preise</Link></li>
                        <li><Link href="/kontakt" className="hover:text-primary transition-colors">Kontakt & Anfahrt</Link></li>
                    </ul>
                </div>

                {/* Contact Info */}
                <div className="space-y-4">
                    <h4 className="text-lg font-medium text-gray-200 uppercase tracking-wider text-sm">Kontakt</h4>
                    <ul className="space-y-3 text-gray-400">
                        <li className="flex items-start space-x-3">
                            <MapPin size={18} className="mt-1 flex-shrink-0 text-primary" />
                            <span>Hauptstraße 12<br />79591 Eimeldingen</span>
                        </li>
                        <li className="flex items-center space-x-3">
                            <Phone size={18} className="flex-shrink-0 text-primary" />
                            <a href="tel:+497621123456" className="hover:text-white transition-colors">+49 7621 123456</a>
                        </li>
                        <li className="flex items-center space-x-3">
                            <Mail size={18} className="flex-shrink-0 text-primary" />
                            <a href="mailto:info@gaestehaus-eimeldingen.de" className="hover:text-white transition-colors">info@gaestehaus-eimeldingen.de</a>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500 text-sm">
                <p>&copy; {currentYear} Das Gästehaus Eimeldingen. Alle Rechte vorbehalten.</p>
            </div>
        </footer>
    );
}
