import { Hero } from "../components/Hero";
import { SuccessStories } from "../components/SuccessStories";
import { CapabilitiesGrid } from "../components/CapabilitiesGrid";
import { Platforms } from "../components/Platforms";
import { Insights } from "../components/Insights";
import { Testimonial } from "../components/Testimonial";
import { CTASection } from "../components/CTASection";

export default function Home() {
  return (
    <main>
      <Hero />
      <CapabilitiesGrid />
      <SuccessStories />
      <Platforms />
      <Insights />
      <Testimonial />
      <CTASection />
    </main>
  );
}
