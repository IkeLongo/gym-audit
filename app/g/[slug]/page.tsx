import { GYMS, DEFAULT_GYM } from "@/lib/gyms";
import GymLanding from "@/components/pages/gym-landing/gym-landing";
import { CenteredWithLogo } from "@/components/layout/footer";

export default async function GymPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const gym = GYMS[slug] ?? DEFAULT_GYM;
  return (
    <>
      <GymLanding gym={gym} />
      <CenteredWithLogo gym={gym} />
    </>
  );
}
