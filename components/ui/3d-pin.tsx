"use client";
import React, { useState } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { GymTheme } from "@/lib/gyms";

export const PinContainer = ({
  children,
  title,
  gym,
  className,
  containerClassName,
}: {
  children: React.ReactNode;
  title?: string;
  gym?: GymTheme;
  className?: string;
  containerClassName?: string;
}) => {

  const [transform, setTransform] = useState("translate(-50%,-50%) rotateX(0deg) scale(1)");
  const [perspectiveActive, setPerspectiveActive] = useState(false);

  // Detect touch device
  const isTouchDevice = typeof window !== "undefined" && (
    "ontouchstart" in window || navigator.maxTouchPoints > 0
  );

  const activatePerspective = () => {
    setTransform("translate(-50%,-50%) rotateX(40deg) scale(0.8)");
    setPerspectiveActive(true);
  };
  const deactivatePerspective = () => {
    setTransform("translate(-50%,-50%) rotateX(0deg) scale(1)");
    setPerspectiveActive(false);
  };

  const handleMouseEnter = () => {
    if (!isTouchDevice) activatePerspective();
  };
  const handleMouseLeave = () => {
    if (!isTouchDevice) deactivatePerspective();
  };
  const handleClick = () => {
    if (isTouchDevice) {
      perspectiveActive ? deactivatePerspective() : activatePerspective();
    }
  };

  return (
    <a
      className={cn(
        "relative group/pin z-50 cursor-pointer w-full block",
        containerClassName,
        perspectiveActive ? "pin-perspective-active" : ""
      )}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      tabIndex={0}
      aria-label={title || "Pin"}
    >
      {/* Spacer to maintain height */}
      <div className="w-full h-14" />

      <div
        style={{
          perspective: "1000px",
          transform: "rotateX(70deg) translateZ(0deg)",
        }}
        className="absolute left-1/2 top-1/2 ml-[0.09375rem] mt-4 -translate-x-1/2 -translate-y-1/2 w-[calc(100%-2rem)] max-w-full"
      >
        <div
          style={{
            transform: transform,
          }}
          className="absolute left-1/2 p-4 top-1/2 flex justify-start items-start rounded-2xl shadow-[0_8px_16px_rgb(0_0_0/0.4)] bg-black border border-white/[0.1] group-hover/pin:border-white/[0.2] transition duration-700 overflow-hidden w-full"
        >
          <div className={cn(" relative z-50 w-full", className)}>{children}</div>
        </div>
      </div>
      <PinPerspective title={title} gym={gym} perspectiveActive={perspectiveActive} />
    </a>
  );
};

export const PinPerspective = ({
  title,
  href,
  gym,
  perspectiveActive,
}: {
  title?: string;
  href?: string;
  gym?: GymTheme;
  perspectiveActive?: boolean;
}) => {
  // Helper to add alpha to OKLCH color string
  function oklchWithAlpha(oklch: string, alpha: number) {
    if (!oklch || !oklch.startsWith("oklch")) {
      return oklch;
    }
    const result = oklch.replace(")", ` / ${alpha})`);
    return result;
  }

  return (
    <motion.div className={cn(
      "pointer-events-none w-full h-60 flex items-center justify-center opacity-0 z-[60] transition duration-500",
      perspectiveActive ? "opacity-100" : "group-hover/pin:opacity-100"
    )}>
      <div className="w-full h-full -mt-7 flex-none inset-0">
        <div className="absolute left-0 right-0 top-0 flex justify-center">
          <div
            className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-0.5 px-4 ring-1 ring-white/10 "
            style={{ pointerEvents: "auto" }}
          >
            <span className="relative z-20 text-white text-xs font-bold inline-block py-0.5">
              {title}
            </span>
            <span 
              className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] transition-opacity duration-500 opacity-100 group-hover/pin:opacity-100"
              style={{
                background: gym?.primary2 && gym?.primary2.startsWith("oklch")
                  ? `linear-gradient(to right, transparent, ${gym.primary2}, transparent)`
                  : gym?.primary2
                    ? `linear-gradient(to right, transparent, ${gym.primary2}, transparent)`
                    : `linear-gradient(to right, transparent, #9b92c2, transparent)`
              }}
            ></span>
          </div>
        </div>

        <div
          style={{
            perspective: "1000px",
            transform: "rotateX(70deg) translateZ(0)",
          }}
          className="absolute left-1/2 top-6/10 ml-[0.09375rem] mt-4 -translate-x-1/2 -translate-y-1/2"
        >
          <>
            <motion.div
              initial={{
                opacity: 0,
                scale: 0,
                x: "-50%",
                y: "-50%",
              }}
              animate={{
                opacity: [0, 1, 0.5, 0],
                scale: 1,
                z: 0,
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                delay: 0,
              }}
              className="absolute left-1/2 top-1/2 -translate-y-1/2 h-[11.25rem] w-[11.25rem] rounded-[50%] shadow-[0_8px_16px_rgb(0_0_0/0.4)]"
              style={{
                background: gym?.primary2 && gym?.primary2.startsWith("oklch")
                  ? oklchWithAlpha(gym.primary2, 0.08)
                  : gym?.primary2
                    ? gym.primary2 + "14"
                    : "#4d31c914"
              }}
            ></motion.div>
            <motion.div
              initial={{
                opacity: 0,
                scale: 0,
                x: "-50%",
                y: "-50%",
              }}
              animate={{
                opacity: [0, 1, 0.5, 0],
                scale: 1,
                z: 0,
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                delay: 2,
              }}
              className="absolute left-1/2 top-1/2 -translate-y-1/2 h-[11.25rem] w-[11.25rem] rounded-[50%] shadow-[0_8px_16px_rgb(0_0_0/0.4)]"
              style={{
                background: gym?.primary2 && gym?.primary2.startsWith("oklch")
                  ? oklchWithAlpha(gym.primary2, 0.08)
                  : gym?.primary2
                    ? gym.primary2 + "14"
                    : "#4d31c914"
              }}
            ></motion.div>
            <motion.div
              initial={{
                opacity: 0,
                scale: 0,
                x: "-50%",
                y: "-50%",
              }}
              animate={{
                opacity: [0, 1, 0.5, 0],
                scale: 1,
                z: 0,
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                delay: 4,
              }}
              className="absolute left-1/2 top-1/2 -translate-y-1/2 h-[11.25rem] w-[11.25rem] rounded-[50%] shadow-[0_8px_16px_rgb(0_0_0/0.4)]"
              style={{
                background: gym?.primary2 && gym?.primary2.startsWith("oklch")
                  ? oklchWithAlpha(gym.primary2, 0.08)
                  : gym?.primary2
                    ? gym.primary2 + "14"
                    : "#4d31c914"
              }}
            ></motion.div>
          </>
        </div>

        <>
          <motion.div
            className="absolute left-1/2 bottom-1/2 translate-y-[14px] w-px h-20 group-hover/pin:h-40 blur-[2px]"
            style={{
              background: gym?.primary && gym?.primary.startsWith("oklch")
                ? `linear-gradient(to bottom, transparent, ${gym.primary})`
                : gym?.primary
                  ? `linear-gradient(to bottom, transparent, ${gym.primary})`
                  : "linear-gradient(to bottom, transparent, rgb(199 210 254))" // indigo-200 fallback
            }}
          />
          <motion.div 
            className="absolute left-1/2 bottom-1/2 translate-y-[14px] w-px h-20 group-hover/pin:h-40"
            style={{
              background: gym?.primary && gym?.primary.startsWith("oklch")
                ? `linear-gradient(to bottom, transparent, ${gym.primary})`
                : gym?.primary
                  ? `linear-gradient(to bottom, transparent, ${gym.primary})`
                  : "linear-gradient(to bottom, transparent, rgb(199 210 254))" // indigo-200 fallback
            }}
          />
          <motion.div 
            className="absolute left-1/2 translate-x-[1.5px] bottom-1/2 translate-y-[14px] w-[4px] h-[4px] rounded-full z-40 blur-[3px]"
            style={{
              backgroundColor: gym?.primary || "rgb(199 210 254)" // indigo-200 fallback
            }}
          />
          <motion.div 
            className="absolute left-1/2 translate-x-[0.5px] bottom-1/2 translate-y-[14px] w-[2px] h-[2px] rounded-full z-40"
            style={{
              backgroundColor: gym?.primary || "rgb(199 210 254)" // indigo-200 fallback
            }}
          />
        </>
      </div>
    </motion.div>
  );
};
