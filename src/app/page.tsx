import Hero from "@/components/home/Hero";
import ServiceInfo from "@/components/home/ServiceInfo";
import Features from "@/components/home/Features";
import Gallery from "@/components/home/Gallery";

export default function Home() {
  return (
    <main className="min-h-screen bg-soft-white selection:bg-secondary/30">
      <Hero />
      <ServiceInfo />
      <Features />
      <Gallery />
    </main>
  );
}
