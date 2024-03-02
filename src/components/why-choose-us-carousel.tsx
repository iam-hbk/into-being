"use client";
import * as React from "react";
import { color, motion } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { cn } from "@/lib/utils";

const SLIDES = [
  {
    colors: {
      light: "text-primary",
      dark: "dark:text-primary",
    },
    icon: <SearchCheckIcon />,
    title: "Targeted Candidate Sourcing",
    description:
      "Our approach focuses on proactively sourcing and referring candidates of the highest caliber, ensuring a direct match with your specific requirements for optimal outcomes.",
  },
  {
    colors: {
      light: "text-blue-500",
      dark: "dark:text-blue-400",
    },
    icon: <StopWatchIcon />,
    title: "Rapid Turnaround",
    description:
      "We guarantee a strict 24-72 hour turnaround time for delivering high-quality CVs or providing feedback, ensuring swift progress in your recruitment efforts.",
  },
  {
    colors: {
      light: "text-indigo-500",
      dark: "dark:text-indigo-400",
    },
    icon: <LightbulbIcon />,
    title: "Expertise-Driven Consulting",
    description:
      "Our consultants bring deep knowledge in their areas of specialization, offering added value through their expertise to guide you effectively through the hiring process.",
  },
  {
    colors: {
      light: "text-red-500",
      dark: "dark:text-red-400",
    },
    icon: <HeartHandshakeIcon />,
    title: "Ongoing Support",
    description:
      "We provide continuous support to our clients throughout the entire recruitment process and beyond, ensuring a smooth and effective partnership.",
  },
];

export function WhyChooseUsCarousel() {
  return (
    <Carousel
      opts={{
        loop: true,
      }}
      plugins={[Autoplay({ delay: 6500 })]}
      className="h-64 w-full "
    >
      <CarouselContent>
        {SLIDES.map((slide, index) => (
          <CarouselItem key={index}>
            <div className="flex h-64 items-center justify-center p-1">
              <span className={cn(slide.colors.light, slide.colors.dark)}>
                {slide.icon}
              </span>
              <div className="m-4 flex w-[50%] flex-col items-center justify-center gap-2">
                <h3
                  className={cn(
                    "text-5xl font-bold ",
                    slide.colors.light,
                    slide.colors.dark,
                  )}
                >
                  {slide.title}
                </h3>
                <p className="w-[80%] text-center">{slide.description}</p>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}

const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i: number) => ({
    pathLength: 1,
    opacity: 1,
    transition: {
      pathLength: {
        delay: 1 + i * 0.5,
        type: "spring",
        duration: 1,
        bounce: 0,
        repeat: Infinity, // Infinite loop
        repeatType: "mirror", // Use "yoyo" for older versions of Framer Motion
        repeatDelay: 1.5,
      },
    },
  }),
};

function SearchCheckIcon() {
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      width="224"
      height="224"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-search-check"
      initial="hidden"
      animate="visible"
    >
      {/* Checkmark */}
      <motion.path d="m8 11 2 2 4-4" variants={draw} custom={1} />
      {/* Outer Circle */}
      <motion.circle cx="11" cy="11" r="8" variants={draw} custom={2} />
      {/* Magnifying Glass Handle */}
      <motion.path d="m21 21-4.3-4.3" variants={draw} custom={3} />
    </motion.svg>
  );
}

function StopWatchIcon() {
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      width="224"
      height="224"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-timer"
      initial="hidden" // Set initial animation state
      animate="visible" // Set the state to animate to
    >
      {/* Apply animations to specific elements as needed */}
      <motion.line variants={draw} custom={2} x1="10" x2="14" y1="2" y2="2" />
      <motion.line
        variants={draw} // Ensure you apply variants where needed
        custom={1} // Adjust custom delay as needed
        initial="hidden"
        animate="visible"
        x1="12"
        x2="15"
        y1="14"
        y2="11"
      />
      <motion.circle
        variants={draw}
        custom={3} // Adjust custom delay as needed
        initial="hidden"
        animate="visible"
        cx="12"
        cy="14"
        r="8"
      />
    </motion.svg>
  );
}

function LightbulbIcon() {
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      width="224"
      height="224"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-lightbulb"
      initial="hidden"
      animate="visible"
    >
      {/* Lightbulb Body */}
      <motion.path
        d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"
        variants={draw}
        custom={1}
      />
      {/* Base of the Lightbulb */}
      <motion.path d="M9 18h6" variants={draw} custom={2} />
      {/* Thread at the Bottom */}
      <motion.path d="M10 22h4" variants={draw} custom={3} />
    </motion.svg>
  );
}

function HeartHandshakeIcon() {
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      width="224"
      height="224"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-heart-handshake"
      initial="hidden"
      animate="visible"
    >
      {/* Main Heart Shape */}
      <motion.path
        d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"
        variants={draw}
        custom={1}
      />
      {/* Handshake Details */}
      <motion.path
        d="M12 5 9.04 7.96a2.17 2.17 0 0 0 0 3.08v0c.82.82 2.13.85 3 .07l2.07-1.9a2.82 2.82 0 0 1 3.79 0l2.96 2.66"
        variants={draw}
        custom={2}
      />
      {/* Additional Handshake Lines */}
      <motion.path d="m18 15-2-2" variants={draw} custom={3} />
      <motion.path d="m15 18-2-2" variants={draw} custom={4} />
    </motion.svg>
  );
}
