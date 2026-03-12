export const dynamic = "force-dynamic";

import Hero from "@/components/home/Hero";
import NearbySpots from "@/components/home/NearbySpots";
import UeberUns from "@/components/home/UeberUns";
import Features from "@/components/home/Features";
import Testimonials from "@/components/home/Testimonials";
import { getFeatures } from "@/lib/data/features";
import { getTestimonials } from "@/lib/data/testimonials";
import { getNearbySpots } from "@/lib/data/nearby-spots";
import { getSettings } from "@/lib/data/settings";

export default async function Home() {
  const [features, testimonials, nearbySpots, settings] = await Promise.all([
    getFeatures(),
    getTestimonials(),
    getNearbySpots(),
    getSettings(),
  ]);

  const s = Object.fromEntries(settings.map((s) => [s.key, s.value]));

  return (
    <>
      <Hero
        titleLine1={s.hero_title_line1}
        titleLine2={s.hero_title_line2}
        titleLine3={s.hero_title_line3}
        subtitle={s.hero_subtitle}
      />
      <UeberUns
        aboutTitle={s.about_title}
        aboutText1={s.about_text1}
        aboutText2={s.about_text2}
        locationTitle={s.about_location_title}
        locationText1={s.about_location_text1}
        locationText2={s.about_location_text2}
        locationText3={s.about_location_text3}
        roomsTitle={s.about_rooms_title}
        roomsText1={s.about_rooms_text1}
        roomsText2={s.about_rooms_text2}
        roomsText3={s.about_rooms_text3}
      />
      <Features features={features} />
      <NearbySpots spots={nearbySpots} />
      <Testimonials
        testimonials={testimonials}
        rating={s.testimonials_rating}
        summary={s.testimonials_summary}
      />
    </>
  );
}
