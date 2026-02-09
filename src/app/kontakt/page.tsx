import ContactForm from "@/components/ContactForm";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import FadeIn from "@/components/ui/FadeIn";

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-soft-white selection:bg-secondary/30 pb-20">
            {/* Page Header */}
            <section className="bg-neutral-100 py-20 px-6">
                <div className="container mx-auto text-center">
                    <FadeIn direction="up">
                        <h1 className="text-4xl md:text-5xl font-serif text-neutral-800 mb-4">
                            Kontakt & Anfahrt
                        </h1>
                        <p className="max-w-xl mx-auto text-neutral-600 leading-relaxed">
                            Wir freuen uns auf Ihre Anfrage. Kontaktieren Sie uns gerne telefonisch oder über unser Formular.
                        </p>
                    </FadeIn>
                </div>
            </section>

            <div className="container mx-auto px-6 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

                    {/* Contact Details */}
                    <FadeIn direction="right" delay={0.2} className="space-y-8">
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-neutral-100">
                            <h2 className="text-2xl font-serif text-neutral-800 mb-6">Informationen</h2>

                            <ul className="space-y-6">
                                <li className="flex items-start space-x-4">
                                    <div className="p-3 bg-primary/10 rounded-full text-primary">
                                        <MapPin size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-medium text-neutral-900">Adresse</h3>
                                        <p className="text-neutral-600">Hauptstraße 12<br />79591 Eimeldingen</p>
                                    </div>
                                </li>

                                <li className="flex items-start space-x-4">
                                    <div className="p-3 bg-primary/10 rounded-full text-primary">
                                        <Phone size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-medium text-neutral-900">Telefon</h3>
                                        <p className="text-neutral-600">
                                            <a href="tel:+497621123456" className="hover:text-primary transition-colors">+49 7621 123456</a>
                                        </p>
                                    </div>
                                </li>

                                <li className="flex items-start space-x-4">
                                    <div className="p-3 bg-primary/10 rounded-full text-primary">
                                        <Mail size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-medium text-neutral-900">E-Mail</h3>
                                        <p className="text-neutral-600">
                                            <a href="mailto:info@gaestehaus-eimeldingen.de" className="hover:text-primary transition-colors">info@gaestehaus-eimeldingen.de</a>
                                        </p>
                                    </div>
                                </li>

                                <li className="flex items-start space-x-4">
                                    <div className="p-3 bg-primary/10 rounded-full text-primary">
                                        <Clock size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-medium text-neutral-900">Check-in / Check-out</h3>
                                        <p className="text-neutral-600">Check-in: ab 15:00 Uhr<br />Check-out: bis 11:00 Uhr</p>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        {/* Google Maps Embed */}
                        <div className="h-64 rounded-2xl overflow-hidden shadow-sm border border-neutral-100 relative">
                            <iframe
                                width="100%"
                                height="100%"
                                id="gmap_canvas"
                                src="https://maps.google.com/maps?q=Hauptstra%C3%9Fe+12,+79591+Eimeldingen&t=&z=15&ie=UTF8&iwloc=&output=embed"
                                frameBorder="0"
                                scrolling="no"
                                marginHeight={0}
                                marginWidth={0}
                                className="absolute inset-0 w-full h-full"
                                title="Standort Karte"
                            />
                        </div>
                    </FadeIn>

                    {/* Contact Form */}
                    <FadeIn direction="left" delay={0.4}>
                        <ContactForm />
                    </FadeIn>

                </div>
            </div>
        </main>
    );
}
