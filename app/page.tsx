import Image from "next/image";
import { HeroWithBackgroundAndNavbar } from "@/components/pages/home/hero";
import { ServicesWithStickyScroll } from "@/components/pages/home/services";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-black font-sans">
      <HeroWithBackgroundAndNavbar />
      <ServicesWithStickyScroll />
    </div>
  );
}
