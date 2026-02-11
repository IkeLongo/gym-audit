"use client";
import React from "react";
import {
  IconCircleCheckFilled,
  IconMessageCircleQuestion,
} from "@tabler/icons-react";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { motion } from "motion/react";
import { SimpleCenteredContactForm } from "@/components/ui/forms/simple-contact";
import type { GymTheme } from "@/lib/gyms";

export function PricingWithSwitchAndAddOn({ gym }: { gym: GymTheme }) {

  return (
    <div id="pricing" className="relative mx-auto h-full w-full pt-20 md:pt-20">
      {/* <Scales /> */}
      {/* <Icon className="absolute -left-4 -top-4" />
      <Icon className="absolute -right-4 -top-4" />
      <Icon className="absolute -bottom-4 -left-4" />
      <Icon className="absolute -bottom-4 -right-4" /> */}
      <div className="relative w-full px-4 md:px-8">
        <h2 className="bg-clip-text text-center text-xl font-bold tracking-tight text-neutral-100 md:text-4xl">
          Choose the plan that suits your needs
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-sm font-normal text-neutral-400 md:text-base">
          Pick a plan that suits your needs and get started instantly.
        </p>
      </div>
      <Pricing 
        gym={gym}
      />
    </div>
  );
}

export function Pricing({ gym }: { gym: GymTheme }) {
  const [active, setActive] = useState("monthly");
  const tabs = [
    { name: "Monthly", value: "monthly" },
    { name: "Yearly", value: "yearly" },
  ];
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="relative mx-0 lg:mx-20">
      <div className="border-b">
        <div className="mx-auto mb-12 mt-10 flex w-fit items-center justify-center overflow-hidden rounded-full bg-neutral-800">
          {tabs.map((tab) => (
            <button
              key={tab.value}
              className={cn(
                "relative rounded-md px-4 py-2 text-sm font-medium text-neutral-400",
                active === tab.value ? "text-white" : "",
              )}
              onClick={() => setActive(tab.value)}
            >
              {active === tab.value && (
                <motion.span
                  layoutId="moving-div"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  className="absolute inset-0"
                  style={{ backgroundColor: gym.primary || "#4f46e5" }}
                />
              )}
              <span className="relative z-10">{tab.name}</span>
            </button>
          ))}
        </div>
      </div>
      <div className="relative mx-auto mt-4 grid grid-cols-1 items-center border-b border-t border-neutral-800 bg-neutral-950 px-4 md:mb-10 md:mt-0 md:grid-cols-2 md:px-10 xl:grid-cols-3">
        {tiers.map((tier, tierIdx) => (
          <div
            key={tier.id}
            className={cn(
              "flex h-full flex-col justify-between bg-neutral-950 px-6 py-8 sm:mx-8 lg:mx-0",
              tier.featured &&
                "relative bg-zinc-900 shadow-2xl",
            )}
          >
            <div className="">
              <h3
                id={tier.id}
                className={cn(
                  "text-base font-semibold leading-7 text-neutral-200",
                  tier.featured && "text-white",
                )}
              >
                {tier.name}
              </h3>
              <p className="mt-4">
                <motion.span
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{
                    duration: 0.2,
                    ease: "easeOut",
                    delay: 0.1 * tierIdx,
                  }}
                  key={active}
                  className={cn(
                    "inline-block text-4xl font-bold tracking-tight text-neutral-200",
                    tier.featured && "text-white",
                  )}
                >
                  {active === "monthly" ? tier.priceMonthly : tier.priceYearly}
                </motion.span>
              </p>
              <p
                className={cn(
                  "my-6 h-12 text-sm leading-7 text-neutral-300 md:h-12 xl:h-12",
                  tier.featured && "text-neutral-300",
                )}
              >
                {tier.description}
              </p>
              <ul
                role="list"
                className={cn(
                  "mt-2 space-y-3 text-sm leading-6 text-neutral-300 sm:mt-4",
                  tier.featured && "text-neutral-300",
                )}
              >
                {tier.features.map((feature) => (
                  <li key={feature} className="flex gap-x-3">
                    <IconCircleCheckFilled
                      className={cn(
                        "h-6 w-5 flex-none text-neutral-400",
                        tier.featured && "text-white",
                      )}
                      aria-hidden="true"
                    />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <button
                onClick={() => {
                  setModalOpen(true);
                }}
                aria-describedby={tier.id}
                className={cn(
                  "mt-8 block w-full rounded-lg px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-[0px_2px_0px_0px_rgba(255,255,255,0.5)_inset] transition duration-200 hover:-translate-y-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 sm:mt-10",
                )}
                style={gym.primary2 ? {
                  background: `linear-gradient(to bottom, ${gym.primary}, ${gym.primary2})`
                } : { backgroundColor: gym.primary || "#4f46e5" }}
              >
                {tier.cta}
              </button>
            </div>
            {/* Modal */}
            {modalOpen && (
              <div className="fixed inset-0 z-[100] flex items-center justify-center bg-transparent">
                <div className="relative w-full max-w-lg mx-auto">
                  <SimpleCenteredContactForm
                    onClose={() => setModalOpen(false)}
                  />
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
      {/* <AddOn /> */}
    </div>
  );
}

export type Tier = {
  name: string;
  id: string;
  href: string;
  priceMonthly: string;
  priceYearly: string;
  description: string;
  features: string[];
  featured: boolean;
  cta: string;
  onClick: () => void;
};

export const tiers: Tier[] = [
  {
    name: "Group Training",
    id: "tier-group",
    href: "#",
    priceMonthly: "$150/mo",
    priceYearly: "$1,560/yr",
    description: "Best for members who enjoy training in a motivating group environment.",
    features: [
      "Unlimited group training classes",
      "Coach-led workouts",
      "Strength & conditioning focused programming",
      "Supportive community atmosphere",
      "Beginner-friendly options available",
    ],
    featured: false,
    cta: "Get Started",
    onClick: () => {},
  },
  {
    name: "Personal Training",
    id: "tier-personal",
    href: "#",
    priceMonthly: "$350/mo",
    priceYearly: "$3,640/yr",
    description: "Best for members who want personalized coaching and results.",
    features: [
      "One-on-one or semi-private coaching",
      "Customized training programs",
      "Flexible scheduling",
      "Progress tracking & accountability",
      "Group training access included",
    ],
    featured: true,
    cta: "Schedule a Consultation",
    onClick: () => {},
  },
  {
    name: "Youth & Athlete Programs",
    id: "tier-athlete",
    href: "#",
    priceMonthly: "Contact Us",
    priceYearly: "Contact Us",
    description: "Best for youth athletes and competitive training programs.",
    features: [
      "Age-appropriate training programs",
      "Speed, strength, and agility development",
      "Team and small group training options",
      "Seasonal camps & clinics",
      "Customized programs by sport and age",
    ],
    featured: false,
    cta: "Contact Us",
    onClick: () => {},
  },
];

export const Icon = ({ className, ...rest }: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1"
      stroke="currentColor"
      className={cn(
        "h-4 w-4 text-neutral-600 md:h-8 md:w-8",
        className,
      )}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};