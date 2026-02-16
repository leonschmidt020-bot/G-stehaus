import Hero from "@/components/home/Hero";
import NearbySpots from "@/components/home/NearbySpots";
import UeberUns from "@/components/home/UeberUns";
import Features from "@/components/home/Features";
import CheckInInfo from "@/components/CheckInInfo";
import Testimonials from "@/components/home/Testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <NearbySpots />
      <UeberUns />
      <Features />
      <CheckInInfo />
      <Testimonials />
    </>
  );
}
