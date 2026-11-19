
"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useVelocity } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const categories = [
  "Gastrointestinal Medicines",
  "Anti-inflammatory & Anticold",
  "Antibiotics Medicine",
  "Nutraceutical Medicines",
  "Dermatology",
  "Anti-Allergic",
  "Neuro Psychiatry",
];

export default function CategoryMarquee() {
  const [direction, setDirection] = useState(1);

  const { scrollY } = useScroll();
  const velocity = useVelocity(scrollY);

  useEffect(() => {
    return velocity.on("change", (latest) => {
      if (latest > 0) setDirection(1);
      else if (latest < 0) setDirection(-1);
    });
  }, [velocity]);

  const items = [...categories, ...categories, ...categories];

  return (
    <section className="relative overflow-hidden border-y border-[#DCEBF2] bg-white py-7 md:py-9">

      {/* Soft background accents */}
      <div className="pointer-events-none absolute -left-20 top-0 h-40 w-40 rounded-full bg-[#16A6B5]/10 blur-[70px]" />
      <div className="pointer-events-none absolute -right-20 bottom-0 h-40 w-40 rounded-full bg-[#0876AD]/10 blur-[70px]" />

      {/* Edge fade */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-white to-transparent md:w-32" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-white to-transparent md:w-32" />

      <motion.div
        className="relative flex w-max items-center"
        animate={{
          x: direction === 1 ? ["-33.333%", "0%"] : ["0%", "-33.333%"],
        }}
        transition={{
          duration: 42,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {items.map((category, index) => (
          <div
            key={`${category}-${index}`}
            className="group flex shrink-0 items-center gap-5 px-5 md:gap-7 md:px-8"
          >
            {/* Number */}
            <span className="text-xs font-bold tracking-widest text-[#16A6B5]">
              {String((index % categories.length) + 1).padStart(2, "0")}
            </span>

            {/* Category */}
            <span className="whitespace-nowrap text-base font-semibold tracking-tight text-[#0B2D50] transition-colors duration-300 group-hover:text-[#0876AD] md:text-xl">
              {category}
            </span>

            {/* Accent separator */}
            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#DCEBF2] bg-[#F2FAFC] text-[#0876AD] transition-all duration-300 group-hover:border-[#16A6B5] group-hover:bg-[#16A6B5] group-hover:text-white">
              <ArrowUpRight size={17} />
            </span>

            <span className="h-1.5 w-1.5 rounded-full bg-[#16A6B5]/50" />
          </div>
        ))}
      </motion.div>
    </section>
  );
}
