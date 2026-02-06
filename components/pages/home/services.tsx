"use client";
import React, { useRef, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
} from "motion/react";
import { IconUsers, IconUser, IconTrophy } from "@tabler/icons-react";

const services = [
  {
    icon: <IconUser className="h-8 w-8 text-neutral-200" />,
    title: "Personal Training",
    description:
      "One-on-one coaching tailored to your goals, schedule, and experience level — ideal for beginners or anyone wanting a more personalized approach.",
    content: (
      <img
        src="/lets-just-do-a-quick-body-assessment.jpg"
        alt="gym trainer leading a group training session"
        height="500"
        width="500"
        className="rounded-lg"
      />
    ),
  },
  {
    icon: <IconUsers className="h-8 w-8 text-neutral-200" />,
    title: "Group Training",
    description:
      "High-energy, coach-led workouts designed to build strength, improve conditioning, and keep you accountable in a motivating group environment.",
    content: (
      <img
        src="/athletes-doing-air-bike-indoor.jpg"
        alt="personal trainer coaching an athlete in the gym"
        height="500"
        width="500"
        className="rounded-lg"
      />
    ),
  },
  {
    icon: <IconTrophy className="h-8 w-8 text-neutral-200" />,
    title: "Youth & Athlete Training",
    description:
      "Age-appropriate training programs focused on strength, speed, and confidence for young athletes at every stage of development.",
    content: (
      <div className="relative">
        <div className="-rotate-[10deg]">
          <img
            src="/woman-exercising-pulling-dumbbell-during-strength.jpeg"
            alt="athlete strength training with dumbbells"
            height="500"
            width="500"
            className="rounded-lg"
          />
        </div>
        <div className="absolute inset-0 rotate-[10deg] transform">
          <img
            src="/boy-on-exercise-machine-active-training-in-gym.jpg"
            alt="youth athlete training in a gym"
            height="500"
            width="500"
            className="rounded-lg"
          />
        </div>
      </div>
    ),
  },
];


export function ServicesWithStickyScroll() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const backgrounds = ["#000000", "#000000", "#000000"];

  const [gradient, setGradient] = useState(backgrounds[0]);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = services.map(
      (_, index) => index / services.length,
    );
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index;
        }
        return acc;
      },
      0,
    );
    setGradient(backgrounds[closestBreakpointIndex % backgrounds.length]);
  });
  return (
    <motion.div
      animate={{ background: gradient }}
      transition={{ duration: 0.5 }}
      ref={ref}
      className="relative mx-auto h-full w-full pt-20 md:pt-20"
    >
      <div className="flex flex-col items-center px-6 text-center">
        <Scales />
        <h2 className="mt-4 text-lg font-bold text-white md:text-2xl lg:text-4xl">
          Training Programs Built for Real Results
        </h2>
        <p className="mx-auto mt-4 max-w-md text-sm text-white md:text-base">
          From high-energy group classes to personalized coaching and athlete 
          development, our programs are designed to help you train with purpose.
        </p>
      </div>
      <StickyScroll content={services} />
    </motion.div>
  );
}

export const StickyScroll = ({
  content,
}: {
  content: { title: string; description: string; icon?: React.ReactNode }[];
}) => {
  return (
    <div className="py-4 md:py-20">
      <motion.div className="relative mx-auto hidden h-full max-w-7xl flex-col justify-between p-10 lg:flex">
        {content.map((item, index) => (
          <ScrollContent key={item.title + index} item={item} index={index} />
        ))}
      </motion.div>
      <motion.div className="relative mx-auto flex max-w-7xl flex-col justify-between p-10 lg:hidden">
        {content.map((item, index) => (
          <ScrollContentMobile
            key={item.title + index}
            item={item}
            index={index}
          />
        ))}
      </motion.div>
    </div>
  );
};

export const ScrollContent = ({
  item,
  index,
}: {
  item: {
    title: string;
    description: string;
    icon?: React.ReactNode;
    content?: React.ReactNode;
  };
  index: number;
}) => {
  const ref = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const translate = useTransform(scrollYProgress, [0, 1], [-150, 250]);
  const translateContent = useTransform(scrollYProgress, [0, 1], [50, -100]);
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.05, 0.5, 0.7, 1],
    [0, 1, 1, 0, 0],
  );

  const opacityContent = useTransform(
    scrollYProgress,
    [0, 0.2, 0.4, 0.55, 0.7],
    [0, 0, 1, 1, 0],
  );

  return (
    <motion.div
      ref={ref}
      transition={{ duration: 0.3 }}
      key={item.title + index}
      className="relative ml-10 my-32 grid grid-cols-2 gap-8"
    >
      <div className="w-full">
        <motion.div
          style={{ y: translate, opacity: opacityContent }}
          className=""
        >
          <div>{item.icon}</div>
          <motion.h2 className="mt-2 inline-block max-w-md bg-gradient-to-b from-white to-white bg-clip-text text-left text-2xl font-bold text-transparent lg:text-4xl">
            {item.title}
          </motion.h2>

          <motion.p className="font-regular mt-2 max-w-sm text-lg text-neutral-500">
            {item.description}
          </motion.p>
        </motion.div>
      </div>
      <motion.div
        key={item.title + index}
        style={{ y: translateContent, opacity: opacity }}
        className="h-full w-full self-center rounded-md"
      >
        {item.content && item.content}
      </motion.div>
    </motion.div>
  );
};

export const ScrollContentMobile = ({
  item,
  index,
}: {
  item: {
    title: string;
    description: string;
    icon?: React.ReactNode;
    content?: React.ReactNode;
  };
  index: number;
}) => {
  return (
    <motion.div
      transition={{ duration: 0.3 }}
      key={item.title + index}
      className="relative my-10 mx-6 lg:mx-0 flex flex-col md:flex-row md:gap-20"
    >
      <motion.div
        key={item.title + index}
        className="mb-8 w-full self-center rounded-md"
      >
        {item.content && item.content}
      </motion.div>
      <div className="w-full">
        <motion.div className="mb-6">
          <div>{item.icon}</div>
          <motion.h2 className="mt-2 inline-block bg-gradient-to-b from-white to-white bg-clip-text text-left text-2xl font-bold text-transparent lg:text-4xl">
            {item.title}
          </motion.h2>

          <motion.p className="mt-2 max-w-sm text-sm font-bold text-neutral-500 md:text-base">
            {item.description}
          </motion.p>
        </motion.div>
      </div>
    </motion.div>
  );
};

const Scales = () => {
  return (
    <>
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px w-full bg-neutral-200 md:top-0 dark:bg-neutral-800"></div>
      <div className="pointer-events-none absolute inset-x-0 bottom-4 h-px w-full bg-neutral-200 md:bottom-10 dark:bg-neutral-800"></div>
      <div className="pointer-events-none absolute inset-y-0 left-4 h-full w-px bg-neutral-200 md:left-10 dark:bg-neutral-800"></div>
      <div className="pointer-events-none absolute inset-y-0 right-4 h-full w-px bg-neutral-200 md:right-10 dark:bg-neutral-800"></div>
    </>
  );
};