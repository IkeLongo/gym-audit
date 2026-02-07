"use client";

import { cn } from "@/lib/utils";
import { FaQuoteLeft } from "react-icons/fa";

export function TestimonialsMasonryGrid() {
  const first = testimonials.slice(0, 3);
  const second = testimonials.slice(3, 6);
  const third = testimonials.slice(6, 9);
  const fourth = testimonials.slice(9, 12);

  const grid = [first, second, third, fourth];
  return (
    <div className="relative mx-auto h-full w-full py-20 md:py-20">
      <Scales />
      <h2
        id="reviews-title"
        className={cn(
          "mx-8 text-3xl font-medium tracking-tight text-neutral-900 sm:text-center dark:text-white",
        )}
      >
        Real Members. Real Results.
      </h2>
      <p
        className={cn(
          "mt-2 mx-8 text-lg text-neutral-600 sm:text-center dark:text-neutral-200",
        )}
      >
        See what our members are saying about the coaching, community, and results they’ve experienced inside the gym.
      </p>

      <div className="mx-auto mt-10 grid max-w-7xl grid-cols-1 items-start gap-4 px-8 md:grid-cols-2 md:px-14 lg:grid-cols-4">
        {grid.map((testimonialsCol, index) => (
          <div
            key={`testimonials-col-${index}`}
            className="grid items-start gap-4"
          >
            {testimonialsCol.map((testimonial) => (
              <Card key={`testimonial-${testimonial.src}-${index}`}>
                <Quote>{testimonial.quote}</Quote>
                <div className="mt-8 flex items-center gap-2">
                  <img
                    src={testimonial.src}
                    alt="Manu Arora"
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                  <div className="flex flex-col">
                    <QuoteDescription>{testimonial.name}</QuoteDescription>
                    <QuoteDescription className="text-[10px]">
                      {testimonial.designation}
                    </QuoteDescription>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        ))}
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
      className={cn(
        "group relative rounded-xl border border-transparent bg-white p-8 shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] dark:border-[rgba(255,255,255,0.10)] dark:bg-[rgba(40,40,40,0.30)] dark:shadow-[2px_4px_16px_0px_rgba(248,248,248,0.06)_inset]",
        className,
      )}
    >
      <FaQuoteLeft className="absolute top-2 left-2 text-neutral-300" />
      {children}
    </div>
  );
};

export const Quote = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <h3
      className={cn(
        "relative py-2 text-base font-normal text-black dark:text-white",
        className,
      )}
    >
      {children}
    </h3>
  );
};

export const QuoteDescription = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <p
      className={cn(
        "max-w-sm text-xs font-normal text-neutral-600 dark:text-neutral-400",
        className,
      )}
    >
      {children}
    </p>
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

interface Testimonial {
  src: string;
  quote: string;
  name: string;
  designation?: string;
}

export const testimonials: Testimonial[] = [
  {
    name: "Manu Arora",
    quote:
      "I’ve tried a lot of gyms over the years, but this is the first place that actually kept me consistent. The coaching and community make it easy to show up.",
    src: "https://i.pravatar.cc/150?img=1",
    designation: "Group Training Member",
  },
  {
    name: "Tyler Durden",
    quote:
      "The coaches genuinely care and push you in the right way. I’ve gotten stronger and more confident since joining.",
    src: "https://i.pravatar.cc/150?img=2",
    designation: "Personal Training Client",
  },
  {
    name: "Lee Johnson",
    quote:
      "I was nervous starting out, but the coaches made me feel comfortable from day one. The workouts are challenging but always approachable.",
    src: "https://i.pravatar.cc/150?img=3",
    designation: "Group Training Member",
  },
  {
    name: "Bob Smith",
    quote:
      "What sets this gym apart is the structure and accountability. It’s not just workouts — it’s real coaching.",
    src: "https://i.pravatar.cc/150?img=4",
    designation: "Coaching Program Member",
  },
  {
    name: "Cathy Lee",
    quote:
      "I’ve made more progress here in a few months than I did in years at other gyms. The environment keeps me motivated.",
    src: "https://i.pravatar.cc/150?img=5",
    designation: "Group Training Member",
  },
  {
    name: "David Wright",
    quote:
      "The personalized coaching has made a huge difference for me. Everything feels intentional and tailored to my goals.",
    src: "https://i.pravatar.cc/150?img=6",
    designation: "Personal Training Client",
  },
  {
    name: "Henry Ford",
    quote:
      "This gym feels like a community, not just a place to work out. Everyone is supportive and encouraging.",
    src: "https://i.pravatar.cc/150?img=7",
    designation: "Long-Term Member",
  },
  {
    name: "Frank Moore",
    quote:
      "The coaching here keeps me accountable and consistent. I actually look forward to training now.",
    src: "https://i.pravatar.cc/150?img=8",
    designation: "Group Training Member",
  },
  {
    name: "Grace Hall",
    quote:
      "I love how scalable the workouts are. No matter your fitness level, you feel challenged and supported.",
    src: "https://i.pravatar.cc/150?img=9",
    designation: "Group Training Member",
  },
  {
    name: "Eva Green",
    quote:
      "The structure and programming are top-notch. I’ve seen steady progress without feeling burned out.",
    src: "https://i.pravatar.cc/150?img=10",
    designation: "Coaching Program Member",
  },
  {
    name: "Earl Wilson",
    quote:
      "The coaches pay attention to the details and really know their stuff. I feel stronger and more confident every week.",
    src: "https://i.pravatar.cc/150?img=11",
    designation: "Personal Training Client",
  },
  {
    name: "Jack Brown",
    quote:
      "It’s more than just workouts — it’s accountability, coaching, and a great group of people to train with.",
    src: "https://i.pravatar.cc/150?img=12",
    designation: "Group Training Member",
  },
  {
    name: "Kathy Adams",
    quote:
      "I appreciate how welcoming the environment is. From beginners to experienced athletes, everyone fits in.",
    src: "https://i.pravatar.cc/150?img=13",
    designation: "Community Member",
  },
  {
    name: "Leo Carter",
    quote:
      "This gym helped me build a routine I can actually stick to. The coaching and support make all the difference.",
    src: "https://i.pravatar.cc/150?img=14",
    designation: "Long-Term Member",
  },
];
