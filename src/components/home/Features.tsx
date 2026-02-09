import { Heart, Map, Sparkles } from "lucide-react";
import FadeIn from "@/components/ui/FadeIn";

const features = [
  {
    icon: Heart,
    title: "Familiär",
    text: "Wir sind ein familiengeführtes Haus. Persönlicher Service und Herzlichkeit stehen bei uns an erster Stelle."
  },
  {
    icon: Map,
    title: "Perfekte Lage",
    text: "Nur 10 Minuten nach Basel, 5 Minuten nach Frankreich. Der ideale Ausgangspunkt für Dreiländereck-Entdecker."
  },
  {
    icon: Sparkles,
    title: "Modern & Sauber",
    text: "Frisch renovierte Zimmer, modernes Design und höchste Hygienestandards für Ihr Wohlbefinden."
  }
];

export default function Features() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 bg-sage/5 -skew-y-3 transform origin-top-left scale-110" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {features.map((feature, i) => (
            <FadeIn key={i} direction="up" delay={i * 0.2}>
              <div className="text-center group">
                <div className="w-24 h-24 mx-auto bg-white rounded-full shadow-soft-ui flex items-center justify-center text-secondary mb-8 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                  <feature.icon size={40} strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl font-serif text-primary mb-4">{feature.title}</h3>
                <p className="text-neutral-600 leading-relaxed max-w-xs mx-auto">
                  {feature.text}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
