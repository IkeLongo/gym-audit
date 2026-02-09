
import GymLanding from "@/components/pages/gym-landing/gym-landing";
import { DEFAULT_GYM } from "@/lib/gyms";

export default function Home() {
  return <GymLanding gym={DEFAULT_GYM} />;
}
