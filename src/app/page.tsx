import Hero from "@/components/home/Hero";
import Impressionen from "@/components/home/Impressionen";
import NearbySpots from "@/components/home/NearbySpots";
import UeberUns from "@/components/home/UeberUns";
import Features from "@/components/home/Features";
import Testimonials from "@/components/home/Testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <Impressionen />
      <UeberUns />
      <Features />
      <NearbySpots />
      <Testimonials />
    </>
  );
}
