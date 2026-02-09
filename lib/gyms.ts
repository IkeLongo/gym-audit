export type GymTheme = {
  slug: string;              // subdomain: maximstrong
  name: string;              // display name
  logoSrc: string;           // /gyms/maximstrong-logo.svg
  logoHeight?: number;         // optional height for logo in px
  logoWidth?: number;          // optional width for logo in px
  primary: string;           // hex
  accent?: string;           // hex (optional)
  textOnPrimary?: string;    // hex (optional)
};

export const DEFAULT_GYM: GymTheme = {
  slug: "example",
  name: "Gym Audit",
  logoSrc: "/logo-example.png",
  logoHeight: 50,
  logoWidth: 50,
  primary: "oklch(58.5% 0.233 277.117)",
  accent: "#22C55E",
  textOnPrimary: "#0A0A0A",
};

export const GYMS: Record<string, GymTheme> = {
  specializedfitness: {
    slug: "specializedfitness",
    name: "Specialized Fitness",
    logoSrc: "/logo-specialized-fitness.png",
    logoHeight: 70,
    logoWidth: 130,
    primary: "oklch(43.7% 0.078 188.216)",
    accent: "#60A5FA",
    textOnPrimary: "#0A0A0A",
  },
  phoenix830: {
    slug: "phoenix830",
    name: "Phoenix 830",
    logoSrc: "/logo-phoenix-830.png",
    logoHeight: 50,
    logoWidth: 50,
    primary: "oklch(72.3% 0.219 149.579)",
    accent: "#F97316",
    textOnPrimary: "#0A0A0A",
  },
  orionfitness: {
    slug: "orionfitness",
    name: "Orion Fitness",
    logoSrc: "/logo-orion-fitness.png",
    logoHeight: 70,
    logoWidth: 140,
    primary: "oklch(58.8% 0.158 241.966)",
    accent: "#F97316",
    textOnPrimary: "#0A0A0A",
  },
};
