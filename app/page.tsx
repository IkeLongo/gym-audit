import Image from "next/image";
import { HeroWithBackgroundAndNavbar } from "@/components/pages/home/hero";
import { ServicesWithStickyScroll } from "@/components/pages/home/services";
import { PricingWithSwitchAndAddOn } from "@/components/pages/home/pricing";
import { TestimonialsMasonryGrid } from "@/components/pages/home/testimonials";
import GymMapNewsletterSection from "@/components/pages/home/location";
import { Features } from "@/components/pages/home/services2";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-black font-sans">
      <HeroWithBackgroundAndNavbar />
      <Features />
      {/* <ServicesWithStickyScroll /> */}
      <PricingWithSwitchAndAddOn />
      <TestimonialsMasonryGrid />
      <GymMapNewsletterSection />
    </div>
  );
}
