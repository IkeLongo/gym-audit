"use client";
import Link from "next/link";
import {
  IconBrandFacebook,
  IconBrandTwitter,
  IconBrandInstagram,
} from "@tabler/icons-react";
import confetti from "canvas-confetti";


export function SimpleCenteredContactForm({ onClose }: { onClose?: () => void }) {
  const shootConfetti = () => {
    function randomInRange(min: number, max: number) {
      return Math.random() * (max - min) + min;
    }

    confetti({
      angle: randomInRange(55, 125),
      spread: randomInRange(50, 70),
      particleCount: randomInRange(50, 100),
      origin: { y: 0.8 }
    });
  };

  const handleSubmit = (
    e: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement>
  ) => {
    e.preventDefault();
    const target = e.target as HTMLFormElement;
    console.log(target);
    shootConfetti();
  };

  const socials = [
    {
      title: "twitter",
      href: "#",
      icon: (
        <IconBrandTwitter className="h-5 w-5 text-neutral-600 hover:text-indigo-400" />
      ),
    },
    {
      title: "facebook",
      href: "#",
      icon: (
        <IconBrandFacebook className="h-5 w-5 text-neutral-600 hover:text-indigo-400" />
      ),
    },
    {
      title: "instagram",
      href: "#",
      icon: (
        <IconBrandInstagram className="h-5 w-5 text-neutral-600 hover:text-indigo-400" />
      ),
    },
  ];

  return (
    <div className="w-full flex items-center justify-center">
      <div className="flex relative px-4 z-20 items-center w-full justify-center py-10">
        <div className="mx-auto w-full max-w-lg bg-white dark:bg-neutral-950 px-4 md:px-10 py-8 shadow-input rounded-3xl relative">
          {onClose && (
            <button
              className="absolute top-2 right-2 z-10 rounded-full bg-white/80 px-3 py-1 text-black hover:bg-white"
              onClick={onClose}
              aria-label="Close contact form"
              type="button"
            >
              ×
            </button>
          )}
          <div>
            <h1 className="mt-8 text-2xl font-bold leading-9 tracking-tight text-black dark:text-white">
              Contact Us
            </h1>
            <p className="mt-4 text-neutral-600 dark:text-neutral-400  text-sm max-w-sm">
              Simply reach out and we’ll do the heavy lifting.
            </p>
          </div>

          <div className="py-10">
            <div>
              <form onSubmit={handleSubmit} className="space-y-4">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium leading-6 text-neutral-700 dark:text-neutral-400"
                >
                  Full Name
                </label>

                <div className="mt-2">
                  <input
                    id="name"
                    type="name"
                    placeholder="Manu Arora"
                    className="block w-full bg-white dark:bg-neutral-900 px-4 rounded-md border-0 py-1.5  shadow-input text-black placeholder:text-gray-400 focus:ring-2 focus:ring-neutral-400 focus:outline-none sm:text-sm sm:leading-6 dark:text-white"
                  />
                </div>

                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-neutral-700 dark:text-neutral-400"
                >
                  Email address
                </label>

                <div className="mt-2">
                  <input
                    id="email"
                    type="email"
                    placeholder="hello@johndoe.com"
                    className="block w-full bg-white dark:bg-neutral-900 px-4 rounded-md border-0 py-1.5  shadow-input text-black placeholder:text-gray-400 focus:ring-2 focus:ring-neutral-400 focus:outline-none sm:text-sm sm:leading-6 dark:text-white"
                  />
                </div>

                <label
                  htmlFor="company"
                  className="block text-sm font-medium leading-6 text-neutral-700 dark:text-neutral-400"
                >
                  Company
                </label>

                <div className="mt-2">
                  <input
                    id="company"
                    type="company"
                    placeholder="Aceternity Labs, LLC"
                    className="block w-full bg-white dark:bg-neutral-900 px-4 rounded-md border-0 py-1.5  shadow-input text-black placeholder:text-gray-400 focus:ring-2 focus:ring-neutral-400 focus:outline-none sm:text-sm sm:leading-6 dark:text-white"
                  />
                </div>

                <label
                  htmlFor="message"
                  className="block text-sm font-medium leading-6 text-neutral-700 dark:text-neutral-400"
                >
                  message
                </label>

                <div className="mt-2">
                  <textarea
                    rows={5}
                    id="message"
                    placeholder="Enter your message here"
                    className="block w-full bg-white dark:bg-neutral-900 px-4 rounded-md border-0 py-1.5  shadow-input text-black placeholder:text-gray-400 focus:ring-2 focus:ring-neutral-400 focus:outline-none sm:text-sm sm:leading-6 dark:text-white"
                  />
                </div>

                <div>
                  <button
                  onClick={handleSubmit}
                  className="bg-black relative z-10 hover:bg-black/90  text-white text-sm md:text-sm transition font-medium duration-200  rounded-full px-4 py-2  flex items-center justify-center w-full dark:text-black dark:bg-white dark:hover:bg-neutral-100 dark:hover:shadow-xl">
                    Submit for Confetti 🎉
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="flex items-center justify-center space-x-4 py-4">
            {socials.map((social) => (
              <Link href={social.href} key={social.title}>
                {social.icon}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
