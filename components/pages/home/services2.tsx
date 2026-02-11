import React from "react";
import { cn } from "@/lib/utils";
import { IconPlus, IconTrophy, IconUser, IconUsers } from "@tabler/icons-react";
import Image from "next/image";

import type { GymTheme } from "@/lib/gyms";

import {
  IconCheck,
  IconClock,
  IconExclamationCircle,
  IconLoader2,
  IconPrison,
  IconRipple,
} from "@tabler/icons-react";
import { div, style } from "motion/react-m";

export function Features({ gym }: { gym: GymTheme }) {
  return (
    <div id="services" className="mx-auto max-w-7xl px-4 py-10 md:px-8 md:py-20 lg:py-32">
      <div className="flex flex-col justify-start gap-10 xl:flex-row xl:items-baseline-last">
        <h2 className="text-2xl font-bold tracking-tight md:text-4xl lg:text-5xl">
          Training Programs <br /> Built for <span className="italic" style={gym.accent ? { color: gym.accent } : {}}>Real Results</span>
        </h2>
        <p className="font-inter max-w-md text-base text-neutral-400 md:text-lg">
          From high-energy group classes to personalized coaching 
          and athlete development, our programs are designed to 
          help you train with purpose.
        </p>
      </div>
      <div className="my-10 grid grid-cols-1 gap-4 md:my-20 lg:grid-cols-3">
        <Card className="rounded-tl-3xl rounded-bl-3xl">
          <CardSkeleton accent={gym.accent}>
            <SkeletonOne accent={gym.accent} />
          </CardSkeleton>
          <CardContent>
          <div className="flex flex-col items-center gap-2">
            <div className="w-full flex justify-between items-center gap-2">
              <CardTitle>Personal Training</CardTitle>
              <CardCTA>
                <IconUser style={gym.accent ? { color: gym.accent } : {}}/>
              </CardCTA>
            </div>
            <CardDescription>One-on-one coaching tailored to your goals, schedule, and experience level — ideal for beginners or anyone wanting a more personalized approach.</CardDescription>
          </div>
          </CardContent>
        </Card>
        <Card>
          <CardSkeleton>
            <SkeletonTwo />
          </CardSkeleton>
          <CardContent>
          <div className="flex flex-col items-center gap-2">
            <div className="w-full flex justify-between items-center gap-2">
              <CardTitle>Group Training</CardTitle>
              <CardCTA>
                <IconUsers style={gym.accent ? { color: gym.accent } : {}}/>
              </CardCTA>
            </div>
            <CardDescription>High-energy, coach-led workouts designed to build strength, improve conditioning, and keep you accountable in a motivating group environment.</CardDescription>
          </div>
          </CardContent>
        </Card>
        <Card className="rounded-tr-3xl rounded-br-3xl">
          <CardSkeleton>
            <SkeletonThree />
          </CardSkeleton>
          <CardContent>
            <div className="flex flex-col items-center gap-2">
              <div className="w-full flex justify-between items-center gap-2">
                <CardTitle>Youth Development</CardTitle>
                <CardCTA>
                  <IconTrophy style={gym.accent ? { color: gym.accent } : {}}/>
                </CardCTA>
              </div>
            <CardDescription>Age-appropriate training programs focused on strength, speed, and confidence for young athletes at every stage of development.</CardDescription>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn("rounded-lg bg-neutral-50 dark:bg-neutral-800", className)}
    >
      {children}
    </div>
  );
};

export const CardContent = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "flex items-center justify-between px-4 pb-6 md:px-8 md:pb-12",
        className,
      )}
    >
      {children}
    </div>
  );
};

export const CardCTA = ({
  className,
  children,
  ...rest
}: React.ComponentProps<"button">) => {
  return (
    <button
      className={cn(
        "hidden size-5 shrink-0 items-center justify-center rounded-full border border-neutral-200 transition duration-200 active:scale-[0.98] md:size-10 lg:flex dark:border-neutral-800",
        className,
      )}
      {...rest}
    >
      {children}
    </button>
  );
};

export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h3 className={cn("font-display text-lg font-bold md:text-xl", className)}>
      {children}
    </h3>
  );
};

export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p className={cn("font-display text-md md:text-md", className)}>
      {children}
    </p>
  );
};

export const CardSkeleton = ({
  className,
  accent,
  children,
}: {
  className?: string;
  accent?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "relative h-60 overflow-hidden perspective-distant transform-3d md:h-80",
        className, accent
      )}
    >
      {children}
    </div>
  );
};

export const SkeletonOne = ({ accent }: { accent?: string }) => {
  return (
    <div className="h-full w-full -translate-y-10 scale-[1.2] rotate-x-30 -rotate-y-20 rotate-z-15 mask-r-from-50% mask-radial-from-50% perspective-distant">
      <SkeletonCard
        className="absolute -bottom-16 left-1/2 sm:-bottom-16 sm:left-1/2 lg:-bottom-4 lg:left-18 z-30 max-w-sm"
        icon={<IconCheck className="size-4" style={accent ? { color: accent } : {}} />}
        title="Personalized Coaching"
        description="Work one-on-one with a certified trainer to create a custom fitness plan."
        imageSrc="/lets-just-do-a-quick-body-assessment.webp"
      />
      <SkeletonCard
        className="absolute -bottom-12 left-1/4 lg:bottom-0 lg:left-12 z-20 max-w-sm"
        icon={<IconCheck className="size-4" style={accent ? { color: accent } : {}} />}
        title="Group Training"
        description="Join a supportive community in high-energy group classes led by expert coaches."
        imageSrc="/coach-praising-athlete.webp"
      />
      <SkeletonCard
        className="absolute -bottom-12 left-6 lg:-bottom-4 lg:left-6 z-10 max-w-sm"
        icon={<IconCheck className="size-4" style={accent ? { color: accent } : {}} />}
        title="Athlete Development"
        description="Unlock your athletic potential with specialized programs focused on speed, strength, and confidence."
        imageSrc="/man-exercising-with-barbell-in-sport-gym.webp"
      />
    </div>
  );
};

const SkeletonCard = ({
  icon,
  title,
  description,
  className,
  imageSrc,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
  imageSrc?: string;
}) => {
  return (
    <div
      className={cn(
        "mx-auto my-auto h-fit w-full max-w-[85%] rounded-2xl border border-neutral-200 bg-neutral-100 p-3 shadow-2xl dark:border-neutral-700 dark:bg-neutral-800",
        className,
      )}
    >
      {imageSrc && (
        <Image
          src={imageSrc}
          alt={title}
          className="mb-3 w-full rounded-xl object-cover object-top max-h-40"
          width={400}
          height={300}
        />
      )}
      <div className="flex items-center gap-3">
        {icon}
        <p className="text-sm font-normal text-black dark:text-white">
          {title}
        </p>
      </div>
      <p className="mt-3 text-sm font-normal text-neutral-400 dark:text-neutral-400">
        {description}
      </p>
      {/* <div className="mt-4 flex flex-wrap items-center gap-2">
        <Tag text="Google Ads" />
        <Tag text="SaaS" />
        <Tag text="Content" />
      </div> */}
    </div>
  );
};

const Tag = ({ text }: { text: string }) => {
  return (
    <div className="rounded-sm bg-neutral-200 px-2 py-1 text-xs dark:bg-neutral-700">
      {text}
    </div>
  );
};

const Badge = ({
  variant = "success",
  text,
}: {
  variant?: "danger" | "success" | "warning";
  text: string;
}) => {
  return (
    <div
      className={cn(
        "flex w-fit items-center gap-1 rounded-full border px-1 py-0.5",

        variant === "danger" && "border-red-300 bg-red-300/10 text-red-500",
        variant === "warning" &&
          "border-yellow-300 bg-yellow-300/10 text-yellow-500",
        variant === "success" &&
          "border-green-300 bg-green-300/10 text-green-500",
      )}
    >
      <IconClock className={cn("size-3")} />
      <IconRipple className="size-3" />
      <p className="text-[10px] font-bold">{text}</p>
    </div>
  );
};

export const SkeletonTwo = () => {
  return (
    <div
      style={{
        transform: "rotateY(20deg) rotateX(20deg) rotateZ(-20deg)",
      }}
      className={cn(
        "group/bento-skeleton mx-auto my-auto flex h-full w-full max-w-[85%] flex-col rounded-2xl border border-neutral-300 bg-neutral-100 mask-b-from-50% mask-radial-from-50% p-3 shadow-2xl dark:border-neutral-700 dark:bg-neutral-800",
        "translate-x-0 lg:translatex-10",
        "[--pattern-bento:var(--color-neutral-950)]/5 dark:[--pattern-bento:var(--color-white)]/10",
      )}
    >
      <Image
        src="/athletes-doing-air-bike-indoor.webp"
        alt="Group Training"
        className="mb-3 w-full rounded-xl object-cover max-h-40"
        width={400}
        height={300}
      />
      <div className="flex items-center gap-3">
        <IconCheck className="size-4" />
        <p className="text-sm font-normal text-black dark:text-white">
          Group Training
        </p>
      </div>
      <div className="relative mt-4 flex-1 overflow-visible rounded-2xl border border-neutral-200 bg-neutral-200 dark:border-neutral-700 dark:bg-neutral-800">
        <Pattern />
        <div className="absolute inset-0 h-full w-full translate-x-4 -translate-y-4 translate-z-10 rounded-2xl bg-white transition-all duration-300 group-hover/bento-skeleton:translate-x-0 group-hover/bento-skeleton:-translate-y-0 dark:bg-neutral-700">
          <Row
            icon={<IconCheck className="size-3 fill-green-500 stroke-white" />}
            text="Dynamic warm-ups"
          />
          <GradientHr />
          <Row
            icon={<IconCheck className="size-3 fill-green-500 stroke-white" />}
            text="Coach-led conditioning"
          />
          <GradientHr />

          <Row
            icon={<IconCheck className="size-3 fill-green-500 stroke-white" />}
            text="Motivating group challenges"
          />
          <GradientHr />

          <Row
            icon={<IconCheck className="size-3 fill-green-500 stroke-white" />}
            text="Cool-down and recovery guidance"
          />
          <GradientHr />

          <Row
            icon={<IconLoader2 className="size-3 animate-spin text-white" />}
            text="Community support and accountability"
            variant="warning"
          />
        </div>
      </div>
    </div>
  );
};

const GradientHr = () => {
  return (
    <div className="h-px w-full bg-gradient-to-r from-transparent via-neutral-200 to-transparent"></div>
  );
};

const Row = ({
  icon,
  text,
  variant = "success",
}: {
  icon: React.ReactNode;
  text: string;
  variant?: "success" | "warning" | "danger";
}) => {
  return (
    <div className="flex items-center justify-between px-4 py-2">
      <div className="flex items-center gap-2">
        <div
          className={cn(
            "flex size-4 items-center justify-center rounded-full",
            variant === "success" && "bg-green-500",
            variant === "warning" && "bg-yellow-500",
          )}
        >
          {icon}
        </div>
        <p className="text-sm font-medium text-neutral-500 dark:text-neutral-400">
          {text}
        </p>
      </div>

      {/* <div className="flex items-center gap-1 text-neutral-400">
        <IconRipple className="size-3" />
        <p className="text-[10px] font-bold">{time}</p>
      </div> */}
    </div>
  );
};

const Pattern = () => {
  return (
    <div className="absolute inset-0 bg-[image:repeating-linear-gradient(315deg,_var(--pattern-bento)_0,_var(--pattern-bento)_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px] bg-fixed"></div>
  );
};

export const SkeletonThree = () => {
  return (
    <div className="relative flex h-full w-full items-center justify-center">
      <Image
        src="/boy-on-exercise-machine-active-training-in-gym.webp"
        alt="Youth athlete training in gym"
        className="relative z-20 w-full max-h-40 rounded-2xl object-cover object-top md:max-h-60 mx-8"
        width={400}
        height={300}
        style={{
          WebkitMaskImage:
            'radial-gradient(circle at 50% 50%, rgba(0,0,0,1) 10%, rgba(0,0,0,0) 100%)',
          maskImage:
            'radial-gradient(circle at 50% 50%, rgba(0,0,0,1) 10%, rgba(0,0,0,0) 100%)',
        }}
      />
    </div>
  );
};
