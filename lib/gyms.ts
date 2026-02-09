export type GymTheme = {
  slug: string;              // subdomain: maximstrong
  name: string;              // display name
  logoSrc: string;           // /gyms/maximstrong-logo.svg
  logoHeight?: number;       // optional height for logo in px
  logoWidth?: number;        // optional width for logo in px
  primary: string;           // hex
  primary2?: string;          // hex (optional)
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
  primary2: "oklch(58.5% 0.233 277.117)",
  accent: "oklch(67.3% 0.182 276.935)",
  textOnPrimary: "#0A0A0A",
};

export const GYMS: Record<string, GymTheme> = {
  specializedfitness: {
    slug: "specializedfitness",
    name: "Specialized Fitness",
    logoSrc: "/logo-specialized-fitness.png",
    logoHeight: 70,
    logoWidth: 130,
    primary: "oklch(51.1% 0.096 186.391)",
    primary2: "oklch(70.4% 0.14 182.503)",
    accent: "oklch(92.5% 0.084 155.995)",
    textOnPrimary: "#0A0A0A",
  },
  phoenix830: {
    slug: "phoenix830",
    name: "Phoenix 830",
    logoSrc: "/logo-phoenix-830.png",
    logoHeight: 50,
    logoWidth: 50,
    primary: "oklch(72.3% 0.219 149.579)",
    primary2: "oklch(52.7% 0.154 150.069)",
    accent: "oklch(87.1% 0.15 154.449)",
    textOnPrimary: "#0A0A0A",
  },
  orionfitness: {
    slug: "orionfitness",
    name: "Orion Fitness",
    logoSrc: "/logo-orion-fitness.png",
    logoHeight: 70,
    logoWidth: 140,
    primary: "oklch(71.5% 0.143 215.221)",
    primary2: "oklch(52% 0.105 223.128)",
    accent: "oklch(91.7% 0.08 205.041)",
    textOnPrimary: "#0A0A0A",
  },
};
