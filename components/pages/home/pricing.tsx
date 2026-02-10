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
        <p className="mx-auto mt-4 max-w-2xl text-center text-sm font-normal text-neutral-700 md:text-base dark:text-neutral-400">
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
        <div className="mx-auto mb-12 mt-10 flex w-fit items-center justify-center overflow-hidden rounded-full bg-neutral-100 dark:bg-neutral-800">
          {tabs.map((tab) => (
            <button
              key={tab.value}
              className={cn(
                "relative rounded-md px-4 py-2 text-sm font-medium text-gray-500 dark:text-neutral-400",
                active === tab.value ? "text-white dark:text-white" : "",
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
      <div className="relative mx-auto mt-4 grid grid-cols-1 items-center border-b border-t border-neutral-200 bg-neutral-100 px-4 md:mb-10 md:mt-0 md:grid-cols-2 md:px-10 xl:grid-cols-3 dark:border-neutral-800 dark:bg-neutral-950">
        {tiers.map((tier, tierIdx) => (
          <div
            key={tier.id}
            className={cn(
              "flex h-full flex-col justify-between bg-neutral-100 px-6 py-8 sm:mx-8 lg:mx-0 dark:bg-neutral-950",
              tier.featured &&
                "relative bg-white shadow-2xl dark:bg-zinc-900",
            )}
          >
            <div className="">
              <h3
                id={tier.id}
                className={cn(
                  "text-base font-semibold leading-7 text-neutral-700 dark:text-neutral-200",
                  tier.featured && "text-black dark:text-white",
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
                    "inline-block text-4xl font-bold tracking-tight text-neutral-900 dark:text-neutral-200",
                    tier.featured && "text-black dark:text-white",
                  )}
                >
                  {active === "monthly" ? tier.priceMonthly : tier.priceYearly}
                </motion.span>
              </p>
              <p
                className={cn(
                  "my-6 h-12 text-sm leading-7 text-neutral-600 md:h-12 xl:h-12 dark:text-neutral-300",
                  tier.featured && "text-neutral-600 dark:text-neutral-300",
                )}
              >
                {tier.description}
              </p>
              <ul
                role="list"
                className={cn(
                  "mt-2 space-y-3 text-sm leading-6 text-neutral-600 sm:mt-4 dark:text-neutral-300",
                  tier.featured && "text-neutral-600 dark:text-neutral-300",
                )}
              >
                {tier.features.map((feature) => (
                  <li key={feature} className="flex gap-x-3">
                    <IconCircleCheckFilled
                      className={cn(
                        "h-6 w-5 flex-none text-neutral-700 dark:text-neutral-400",
                        tier.featured && "text-black dark:text-white",
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

const AddOn = () => {
  return (
    <section className="relative z-20 mx-auto my-20 grid w-full max-w-6xl grid-cols-1 justify-start bg-gradient-to-br from-gray-100 to-white md:my-40 md:grid-cols-3 dark:from-neutral-900 dark:to-neutral-950">
      <GridLineHorizontal className="top-0" offset="200px" />
      <GridLineHorizontal className="bottom-0 top-auto" offset="200px" />
      <GridLineVertical className="left-4" offset="80px" />
      <GridLineVertical className="left-auto right-4" offset="80px" />
      <div className="p-8 md:col-span-2 md:p-14">
        <h2 className="text-left text-xl font-medium tracking-tight text-neutral-500 md:text-3xl dark:text-neutral-200">
          Buy for your team of{" "}
          <span className="font-bold text-black dark:text-white">
            10 people{" "}
          </span>
          and get
          <span className="font-bold text-indigo-500 dark:text-indigo-500">
            {" "}
            pro upgrade absolutely free
          </span>
          .
        </h2>

        <div className="flex flex-col items-start sm:flex-row sm:items-center sm:gap-4">
          <button className="group mt-8 flex items-center space-x-2 rounded-lg bg-gradient-to-b from-indigo-500 to-indigo-700 px-4 py-2 text-base text-white shadow-[0px_2px_0px_0px_rgba(255,255,255,0.3)_inset]">
            <span>Buy now</span>
          </button>
          <button className="group mt-8 flex items-center space-x-2 rounded-lg border border-neutral-200 px-4 py-2 text-base text-black shadow-[0px_2px_0px_0px_rgba(255,255,255,0.3)_inset] dark:border-neutral-800 dark:text-white">
            <span>Talk to us</span>
            <IconMessageCircleQuestion className="mt-0.5 h-3 w-3 stroke-[1px] text-black transition-transform duration-200 group-hover:translate-x-1 dark:text-white" />
          </button>
        </div>
      </div>
      <div className="border-t border-dashed p-8 md:border-l md:border-t-0 md:p-14">
        <p className="text-base text-neutral-700 dark:text-neutral-200">
          &quot;This is the best product ever when it comes to shipping. Ten on
          ten recommended. I just can&apos;t wait to see what happens with this
          product.&quot;
        </p>
        <div className="mt-4 flex flex-col items-start gap-1 text-sm">
          <p className="font-bold text-neutral-800 dark:text-neutral-200">
            Michael Scarn
          </p>
          <p className="text-neutral-500 dark:text-neutral-400">
            Side projects builder
          </p>
        </div>
      </div>
    </section>
  );
};

const GridLineHorizontal = ({
  className,
  offset,
}: {
  className?: string;
  offset?: string;
}) => {
  return (
    <div
      style={
        {
          "--background": "#ffffff",
          "--color": "rgba(0, 0, 0, 0.2)",
          "--height": "1px",
          "--width": "5px",
          "--fade-stop": "90%",
          "--offset": offset || "200px", //-100px if you want to keep the line inside
          "--color-dark": "rgba(255, 255, 255, 0.2)",
          maskComposite: "exclude",
        } as React.CSSProperties
      }
      className={cn(
        "absolute left-[calc(var(--offset)/2*-1)] h-[var(--height)] w-[calc(100%+var(--offset))]",
        "bg-[linear-gradient(to_right,var(--color),var(--color)_50%,transparent_0,transparent)]",
        "[background-size:var(--width)_var(--height)]",
        "[mask:linear-gradient(to_left,var(--background)_var(--fade-stop),transparent),_linear-gradient(to_right,var(--background)_var(--fade-stop),transparent),_linear-gradient(black,black)]",
        "[mask-composite:exclude]",
        "z-30",
        "dark:bg-[linear-gradient(to_right,var(--color-dark),var(--color-dark)_50%,transparent_0,transparent)]",
        className,
      )}
    ></div>
  );
};

const GridLineVertical = ({
  className,
  offset,
}: {
  className?: string;
  offset?: string;
}) => {
  return (
    <div
      style={
        {
          "--background": "#ffffff",
          "--color": "rgba(0, 0, 0, 0.2)",
          "--height": "5px",
          "--width": "1px",
          "--fade-stop": "90%",
          "--offset": offset || "150px", //-100px if you want to keep the line inside
          "--color-dark": "rgba(255, 255, 255, 0.2)",
          maskComposite: "exclude",
        } as React.CSSProperties
      }
      className={cn(
        "absolute top-[calc(var(--offset)/2*-1)] h-[calc(100%+var(--offset))] w-[var(--width)]",
        "bg-[linear-gradient(to_bottom,var(--color),var(--color)_50%,transparent_0,transparent)]",
        "[background-size:var(--width)_var(--height)]",
        "[mask:linear-gradient(to_top,var(--background)_var(--fade-stop),transparent),_linear-gradient(to_bottom,var(--background)_var(--fade-stop),transparent),_linear-gradient(black,black)]",
        "[mask-composite:exclude]",
        "z-30",
        "dark:bg-[linear-gradient(to_bottom,var(--color-dark),var(--color-dark)_50%,transparent_0,transparent)]",
        className,
      )}
    ></div>
  );
};

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
        "h-4 w-4 text-neutral-400 md:h-8 md:w-8 dark:text-neutral-600",
        className,
      )}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};

const Scales = () => {
  return (
    <>
      <div className="pointer-events-none z-20 absolute inset-x-0 top-0 h-px w-full bg-neutral-200 md:top-0 dark:bg-neutral-800"></div>
      <div className="pointer-events-none z-20 absolute inset-y-0 left-4 h-full w-px bg-neutral-200 md:left-10 dark:bg-neutral-800"></div>
      <div className="pointer-events-none z-20 absolute inset-x-0 bottom-4 h-px w-full bg-neutral-200 md:bottom-10 dark:bg-neutral-800"></div>
      <div className="pointer-events-none z-20 absolute inset-y-0 right-4 h-full w-px bg-neutral-200 md:right-10 dark:bg-neutral-800"></div>
    </>
  );
};