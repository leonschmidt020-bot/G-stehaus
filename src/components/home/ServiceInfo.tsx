import { Coffee, MapPin } from "lucide-react";
import FadeIn from "@/components/ui/FadeIn";

export default function ServiceInfo() {
  return (
    <section className="py-20 bg-white relative z-20 -mt-10 rounded-t-[3rem] shadow-[0_-10px_40px_rgba(0,0,0,0.03)]">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">

          {/* Coffee/Tea Station Card */}
          <FadeIn direction="up" delay={0.2} className="h-full">
            <div className="bg-soft-white p-8 rounded-[2rem] shadow-inner-soft hover:shadow-soft-ui transition-all duration-300 group h-full">
              <div className="w-14 h-14 bg-white rounded-2xl shadow-soft-ui flex items-center justify-center text-accent mb-6 group-hover:scale-110 transition-transform">
                <Coffee size={28} />
              </div>
              <h3 className="text-2xl font-serif text-primary mb-3">Kaffee & Tee Station</h3>
              <p className="text-neutral-600 leading-relaxed">
                Starten Sie entspannt. Eine kostenlose Kaffee- und Teestation steht Ihnen rund um die Uhr zur Verfügung. Genießen Sie eine Tasse, wann immer Sie möchten.
              </p>
            </div>
          </FadeIn>

          {/* Bakery Card */}
          <FadeIn direction="up" delay={0.4} className="h-full">
            <div className="bg-soft-white p-8 rounded-[2rem] shadow-inner-soft hover:shadow-soft-ui transition-all duration-300 group h-full">
              <div className="w-14 h-14 bg-white rounded-2xl shadow-soft-ui flex items-center justify-center text-accent mb-6 group-hover:scale-110 transition-transform">
                <MapPin size={28} />
              </div>
              <h3 className="text-2xl font-serif text-primary mb-3">Bäckerei nebenan</h3>
              <p className="text-neutral-600 leading-relaxed">
                Für ein frisches Frühstück ist bestens gesorgt. Die lokale Bäckerei ist nur <span className="font-semibold text-primary">2 Gehminuten</span> entfernt und bietet täglich frische Brötchen und Gebäck.
              </p>
            </div>
          </FadeIn>

        </div>
      </div>
    </section>
  );
}
