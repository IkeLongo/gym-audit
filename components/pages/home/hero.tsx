"use client";

import { cn } from "@/lib/utils";
import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import { SimpleCenteredContactForm } from "@/components/ui/forms/simple-contact";
import Image from "next/image";

import type { GymTheme } from "@/lib/gyms";

const navLinks = [
  { name: "Services", href: "#services" },
  { name: "Pricing", href: "#pricing" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Location", href: "#location" },
];

export function HeroWithBackgroundAndNavbar({ gym }: { gym: GymTheme }) {
  const [modalOpen, setModalOpen] = useState(false);
  
  return (
    <div className={cn("relative w-full")}> 
      {/* Navbar */}
      <nav className="absolute inset-x-4 top-4 z-50 flex items-center justify-between px-4 py-4 md:inset-x-10 md:top-10 md:px-10">
        <Logo 
          className="py-0"
          logoSrc={gym.logoSrc}
          logoHeight={gym.logoHeight}
          logoWidth={gym.logoWidth}
          name={gym.name}
        />
        <div className="flex items-center gap-4 md:gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hidden text-sm font-medium text-neutral-600 mix-blend-multiply transition-colors hover:text-neutral-900 sm:block dark:text-neutral-400 dark:hover:text-neutral-100"
            >
              {link.name}
            </a>
          ))}
          <Button
            text="Try for free"
            onClick={() => setModalOpen(true)}
            primaryColor={gym.primary}
          />
        </div>
      </nav>
      <div className={cn("relative flex min-h-screen w-full flex-col justify-end p-4 md:p-14 transition duration-300")}> 
        {/* Background image with fade-in */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="pointer-events-none absolute inset-4 overflow-hidden md:inset-10"
        >
          <Image
            src="/athletic-young-man-doing-hiit-workout-in-gym.webp"
            alt="Background"
            className="h-full w-full mask-t-from-70% mask-b-from-50% mask-l-from-50% object-cover object-center"
            fill
          />
        </motion.div>
        {/* <Scales /> */}
        <div className="relative z-40 p-4 md:p-4">
          <h1 className="max-w-3xl text-3xl font-medium tracking-tight text-neutral-800 sm:text-4xl md:text-6xl lg:text-8xl dark:text-neutral-200">
            Your Fitness Journey Begins Here
          </h1>
          <p className="mt-4 max-w-xl text-base text-neutral-600 md:mt-6 md:text-lg dark:text-neutral-400">
            Our state of the art facilities and expert trainers 
            are here to support you every step of the way. Whether 
            you're a beginner or a seasoned athlete, we have 
            everything you need to achieve your fitness goals.
          </p>
          <div className="mt-6 flex flex-col items-start gap-4 sm:flex-row sm:items-center md:mt-10">
            <Button
              text="Try for free"
              onClick={() => setModalOpen(true)}
              primaryColor={gym.primary}
            />
            {/* <button className="text-sm font-medium text-neutral-600 dark:text-neutral-400">
              Read Documentation &rarr;
            </button> */}
          </div>
        </div>
        {/* Modal */}
        {modalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center bg-transparent">
            <div className="relative w-full max-w-lg mx-auto">
              <SimpleCenteredContactForm onClose={() => setModalOpen(false)} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

const Scales = () => {
  return (
    <>
      <div className="pointer-events-none absolute inset-x-0 top-4 h-px w-full bg-neutral-200 md:top-10 dark:bg-neutral-800"></div>
      <div className="pointer-events-none absolute inset-x-0 bottom-4 h-px w-full bg-neutral-200 md:bottom-10 dark:bg-neutral-800"></div>
      <div className="pointer-events-none absolute inset-y-0 left-4 h-full w-px bg-neutral-200 md:left-10 dark:bg-neutral-800"></div>
      <div className="pointer-events-none absolute inset-y-0 right-4 h-full w-px bg-neutral-200 md:right-10 dark:bg-neutral-800"></div>
    </>
  );
};

export const Button = ({
  text = "Try for free",
  containerClassName,
  onClick,
  primaryColor,
}: {
  text?: string;
  showAvatar?: boolean;
  containerClassName?: string;
  onClick?: () => void;
  primaryColor?: string;
}) => {
  return (
    <button
      className={cn(
        "group/button relative flex cursor-pointer items-center gap-2 rounded-lg border border-white/20 bg-black py-2 pr-4 pl-11 tracking-tight",
        containerClassName,
      )}
      onClick={onClick}
    >
      <Box primaryColor={primaryColor} />
      <div className="absolute -inset-px rounded-lg bg-white/20 transition-[clip-path] duration-400 ease-out [clip-path:inset(0_100%_0_0)] group-hover/button:[clip-path:inset(0_0%_0_0)]" />
      <span className="inline-block text-white transition-transform duration-400 group-hover/button:-translate-x-8">
        {text}
      </span>
    </button>
  );
};

const Box = ({ primaryColor }: { primaryColor?: string }) => {
  return (
    <div 
      className="absolute inset-y-0 left-1 z-40 my-auto flex size-8 flex-col items-center justify-center gap-px rounded-[5px] transition-all duration-400 ease-out group-hover/button:left-[calc(100%-2.3rem)] group-hover/button:rotate-180 group-hover/button:transform"
      style={primaryColor ? { backgroundColor: primaryColor } : {}}
    >
      <BubblesGroup />
    </div>
  );
};
 
const BubblesGroup = () => {
  return (
    <div className={cn("flex flex-col gap-px")}>
      <div className="flex gap-px">
        <Bubble />
        <Bubble />
        <Bubble highlight />
        <Bubble />
        <Bubble />
      </div>
      <div className="flex gap-px">
        <Bubble />
        <Bubble />
        <Bubble />
        <Bubble highlight />
        <Bubble />
      </div>
      <div className="flex gap-px">
        <Bubble highlight />
        <Bubble highlight />
        <Bubble highlight />
        <Bubble highlight />
        <Bubble highlight />
      </div>
      <div className="flex gap-px">
        <Bubble />
        <Bubble />
        <Bubble />
        <Bubble highlight />
        <Bubble />
      </div>
      <div className="flex gap-px">
        <Bubble />
        <Bubble />
        <Bubble highlight />
        <Bubble />
        <Bubble />
      </div>
    </div>
  );
};
 
const Bubble = ({ highlight }: { highlight?: boolean }) => {
  return (
    <span
      className={cn(
        "inline-block size-[3px] shrink-0 rounded-full bg-white/10",
        highlight && "animate-pulse bg-white duration-200 ease-linear",
      )}
    />
  );
};

export const Logo = ({ 
  className,
  logoSrc,
  logoHeight,
  logoWidth,
  name,
} : { 
  className?: string,
  logoSrc?: string,
  logoHeight?: number,
  logoWidth?: number,
  name?: string,
}) => {
  return (
    <a
      href="/"
      className={cn(
        "flex items-center justify-center space-x-2 py-6 text-center text-2xl font-bold text-neutral-600 selection:bg-emerald-500 dark:text-gray-100",
        className,
      )}
    >
      <div 
        className="relative flex items-center justify-center rounded-md bg-black text-sm text-white antialiased"
        style={{ height: logoHeight, width: logoWidth }}
      >
        <div className="absolute inset-x-0 -top-10 h-10 w-full rounded-full bg-white/[0.2] blur-xl" />
        <div className="relative z-20 text-sm">
          <Image
            src={logoSrc || ""}
            height={logoHeight}
            width={logoWidth}
            alt="Logo"
          />
        </div>
      </div>
      <div className="hidden flex-col sm:flex">
        <h1 className={cn("font-sans text-black dark:text-white")}>
          {" "}
          {name}
        </h1>
      </div>
    </a>
  );
};
