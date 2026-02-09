"use client";

import React, { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";
import { PinContainer } from "@/components/ui/3d-pin";

type GymMapNewsletterSectionProps = {
  headline?: string;
  addressLabel?: string;
  // San Antonio default
  center?: [number, number];
  marker?: [number, number];
};

export default function GymMapNewsletterSection({
  headline = "Stay Up to Date With Training & Events",
  addressLabel = "9464 Columbia Ave,\nSan Antonio, TX 78229",
  center = [-98.4936, 29.4241],
  marker = [-98.4936, 29.4241],
}: GymMapNewsletterSectionProps) {
  const mapContainerRef = useRef<HTMLDivElement | null>(null);
  const mapRef = useRef<mapboxgl.Map | null>(null);

  useEffect(() => {
    if (!mapContainerRef.current) return;
    if (mapRef.current) return;

    const token = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;
    if (!token) {
      // Fail gracefully without crashing the whole page
      console.warn("Missing NEXT_PUBLIC_MAPBOX_TOKEN in .env.local");
      return;
    }

    mapboxgl.accessToken = token;

    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: "mapbox://styles/mapbox/dark-v11",
      center,
      zoom: 12,
      pitch: 0,
      bearing: 0,
      attributionControl: false,
    });

    mapRef.current = map;

    // Basic marker
    new mapboxgl.Marker({ color: "#4d31c9" })
      .setLngLat(marker)
      .addTo(map);

    // Optional: disable scroll zoom so it feels like a card
    map.scrollZoom.disable();

    return () => {
      map.remove();
      mapRef.current = null;
    };
  }, [center, marker]);

  return (
    <section className="relative mx-auto h-full w-full py-20 md:py-4">
      {/* <Scales /> */}
      <div className="mx-auto max-w-6xl px-6 md:px-18 py-2 md:py-16">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          {/* LEFT: Newsletter */}
          <div className="mx-2">
            <h2 className="whitespace-pre-line text-3xl font-extrabold uppercase leading-tight tracking-tight md:text-4xl">
              {headline}
            </h2>

            <div className="mt-8 flex w-full max-w-md items-center gap-3 rounded-full bg-neutral-900/80 p-2 ring-1 ring-white/50">
              <input
                type="email"
                placeholder="Email..."
                className="w-full bg-transparent px-4 py-2 text-sm text-white placeholder:text-white/40 focus:outline-none"
              />
              <button
                type="button"
                className="shrink-0 rounded-full bg-gradient-to-b from-indigo-500 to-indigo-700 px-5 py-2 text-xs font-semibold text-white shadow-sm transition hover:bg-yellow-300"
              >
                Subscribe
              </button>
            </div>

            <p className="mt-3 w-full text-xs text-white/50">
              We respect your privacy. Your information is safe and will never be shared.
            </p>
          </div>

          {/* RIGHT: Map Card */}
          <PinContainer title="San Antonio, TX" href="#">
            <div className="w-full">
              <div className="relative overflow-hidden rounded-2xl bg-neutral-900 ring-1 ring-white/10 shadow-2xl w-full">
                {/* Tooltip label */}
                <div className="absolute left-4 top-4 z-10 rounded-lg bg-neutral-900/90 px-3 py-2 text-xs text-white/90 ring-1 ring-white/10 backdrop-blur">
                  <div className="whitespace-pre-line leading-snug">
                    {addressLabel}
                  </div>
                </div>
                {/* Map container */}
                <div
                  ref={mapContainerRef}
                  className="w-full h-[240px] md:h-[320px]"
                />
              </div>
              {/* little glow / accent */}
              <div className="pointer-events-none absolute -inset-6 -z-10 rounded-3xl bg-yellow-400/10 blur-2xl" />
            </div>
          </PinContainer>
        </div>
      </div>
    </section>
  );
}

const Scales = () => {
  return (
    <>
      <div className="pointer-events-none z-20 absolute inset-x-0 top-0 h-px w-full bg-neutral-200 md:top-0 dark:bg-neutral-800"></div>
      <div className="pointer-events-none z-20 absolute inset-x-0 bottom-4 h-px w-full bg-neutral-200 md:bottom-10 dark:bg-neutral-800"></div>
      <div className="pointer-events-none z-20 absolute inset-y-0 left-4 h-full w-px bg-neutral-200 md:left-10 dark:bg-neutral-800"></div>
      <div className="pointer-events-none z-20 absolute inset-y-0 right-4 h-full w-px bg-neutral-200 md:right-10 dark:bg-neutral-800"></div>
    </>
  );
};