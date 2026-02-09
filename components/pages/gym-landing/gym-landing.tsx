

import type { GymTheme } from "@/lib/gyms";
import { HeroWithBackgroundAndNavbar } from "../home/hero";
import { Features } from "../home/services2";
import { PricingWithSwitchAndAddOn } from "../home/pricing";
import { TestimonialsMasonryGrid } from "../home/testimonials";
import GymMapNewsletterSection from "../home/location";

export default function GymLanding({ gym }: { gym: GymTheme }) {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-black font-sans">
      <HeroWithBackgroundAndNavbar gym={gym} />
      <Features gym={gym} />
      <PricingWithSwitchAndAddOn gym={gym} />
      <TestimonialsMasonryGrid />
      <GymMapNewsletterSection />
    </div>
  );
}
