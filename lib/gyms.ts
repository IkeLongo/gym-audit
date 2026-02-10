export type GymTheme = {
  slug: string;              // subdomain: maximstrong
  name: string;              // display name
  logoSrc: string;           // /gyms/maximstrong-logo.svg
  logoHeight?: number;       // optional height for logo in px
  logoWidth?: number;        // optional width for logo in px
  primary: string;           // hex
  primary2?: string;          // hex (optional)
  accent?: string;           // hex (optional)
  addressLabel?: string;      // optional custom address for map section
  addressTitle?: string;    // hex (optional, defaults to black or white based on primary color)
  geoCenter?: [number, number]; // optional custom map center [lng, lat]
  geoMarker?: [number, number]; // optional custom marker position [lng, lat]
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
  addressLabel: "9464 Columbia Ave,\nSan Antonio, TX 78229",
  addressTitle: "San Antonio",
  geoCenter: [-98.4936, 29.4241],
  geoMarker: [-98.4936, 29.4241],
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
    addressLabel: "31007 I-10 West,\nBoerne, TX 78006",
    addressTitle: "Specialized Fitness",
    geoCenter: [-98.699467, 29.748656],
    geoMarker: [-98.699467, 29.748656],
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
    addressLabel: "30875 I-10 West,\nBoerne, TX 78006",
    addressTitle: "Phoenix 830",
    geoCenter: [-98.698339, 29.747596],
    geoMarker: [-98.698339, 29.747596],
  },
  orionfitness: {
    slug: "orionfitness",
    name: "Orion Fitness",
    logoSrc: "/logo-orion-fitness.png",
    logoHeight: 70,
    logoWidth: 140,
    primary: "oklch(71.5% 0.143 215.221)",
    primary2: "oklch(52% 0.105 223.128)",
    addressLabel: "21195 I-10 West,\nSan Antonio, TX 78257",
    addressTitle: "Orion Fitness",
    geoCenter: [-98.617497, 29.63918],
    geoMarker: [-98.617497, 29.63918],
  },
};
