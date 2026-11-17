
"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
} from "lucide-react";

const items = [
  {
    number: "01",
    label: "Pharmaceutical Tablets",
    eyebrow: "TABLETS",
    title: "A Wide Range of Pharmaceutical Tablets",
    description:
      "Explore our range of pharmaceutical tablets offered through Elisa Biotech Pvt. Ltd.'s wholesale trading portfolio.",
    href: "/products",
  },
  {
    number: "02",
    label: "Allopathic Tablets",
    eyebrow: "ALLOPATHIC TABLETS",
    title: "Allopathic Products for Wholesale Supply",
    description:
      "Discover allopathic tablet products as part of our diverse pharmaceutical wholesale range.",
    href: "/products",
  },
  {
    number: "03",
    label: "Pharmaceutical Capsules",
    eyebrow: "CAPSULES",
    title: "Pharmaceutical Capsules for Your Requirements",
    description:
      "Browse pharmaceutical capsules from our product portfolio, with support for your wholesale enquiries.",
    href: "/products",
  },
  {
    number: "04",
    label: "Wholesale Trading",
    eyebrow: "WHOLESALE TRADING",
    title: "Your Pharmaceutical Wholesale Trading Partner",
    description:
      "Elisa Biotech Pvt. Ltd. is a wholesale trader focused on pharmaceutical tablets, allopathic tablets and pharmaceutical capsules.",
    href: "/contact-us",
  },
];

const ease = [0.22, 1, 0.36, 1];

const slideVariants = {
  enter: (direction) => ({
    opacity: 0,
    x: direction > 0 ? 100 : -100,
    filter: "blur(8px)",
    scale: 0.96,
  }),
  center: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    scale: 1,
    transition: {
      x: { duration: 0.65, ease },
      opacity: { duration: 0.45 },
      scale: { duration: 0.65, ease },
      filter: { duration: 0.45 },
      staggerChildren: 0.09,
    },
  },
  exit: (direction) => ({
    opacity: 0,
    x: direction > 0 ? -85 : 85,
    filter: "blur(6px)",
    scale: 0.97,
    transition: {
      duration: 0.35,
      ease: "easeInOut",
    },
  }),
};

const textVariants = {
  enter: {
    opacity: 0,
    y: 22,
  },
  center: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease,
    },
  },
  exit: {
    opacity: 0,
    y: -12,
    transition: {
      duration: 0.2,
    },
  },
};

export default function WhyChooseUs() {
  const [activeIndex, setActiveIndex] = useState(1);
  const [direction, setDirection] = useState(1);

  const active = items[activeIndex];

  const changeSlide = (index) => {
    if (index === activeIndex) return;

    setDirection(index > activeIndex ? 1 : -1);
    setActiveIndex(index);
  };

  const previous = () => {
    setDirection(-1);
    setActiveIndex((index) => (index - 1 + items.length) % items.length);
  };

  const next = () => {
    setDirection(1);
    setActiveIndex((index) => (index + 1) % items.length);
  };

  return (
    <section className="relative isolate overflow-hidden bg-white py-10 sm:py-14 lg:py-0">

      {/* MAIN BANNER */}
      <div className="relative min-h-[760px] overflow-hidden bg-[#082f50] lg:h-[525px] lg:min-h-0">

        {/* BACKGROUND IMAGE */}
        <motion.img
          src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=2200&q=90"
          alt="Pharmaceutical laboratory environment"
          initial={{ scale: 1.13 }}
          animate={{ scale: 1.02 }}
          transition={{ duration: 2.5, ease }}
          className="absolute inset-0 h-full w-full object-cover object-center"
        />

        {/* OVERLAYS */}
        <div className="absolute inset-0 bg-[#06345b]/80" />

        <div className="absolute inset-0 bg-gradient-to-r from-[#062b4c]/80 via-[#06365b]/45 to-[#082f50]/65" />

        <div className="absolute inset-0 bg-gradient-to-t from-[#052b4a]/40 via-transparent to-[#052b4a]/20" />

        {/* ANIMATED LIGHT */}
        <motion.div
          className="pointer-events-none absolute -right-20 top-0 h-[500px] w-[500px] rounded-full bg-[#16aeb5]/20 blur-[110px]"
          animate={{
            x: [0, -45, 0],
            y: [0, 30, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* ORBIT */}
        <motion.div
          className="pointer-events-none absolute right-[10%] top-[8%] hidden h-[440px] w-[440px] rounded-full border border-white/10 lg:block"
          animate={{ rotate: 360 }}
          transition={{
            duration: 60,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <span className="absolute left-[20%] top-0 h-3 w-3 rounded-full bg-[#20c4c0] shadow-[0_0_20px_#20c4c0]" />
        </motion.div>

        {/* LEFT CATEGORY MENU */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.12 },
            },
          }}
          className="relative z-20 flex w-full flex-col gap-[10px] pt-8 lg:absolute lg:left-0 lg:top-[57px] lg:w-[34.7%] lg:pt-0"
        >
          {items.map((item, index) => {
            const selected = index === activeIndex;

            return (
              <motion.button
                key={item.number}
                type="button"
                onClick={() => changeSlide(index)}
                aria-pressed={selected}
                variants={{
                  hidden: { opacity: 0, x: -40 },
                  visible: {
                    opacity: 1,
                    x: 0,
                    transition: { duration: 0.65, ease },
                  },
                }}
                whileHover={{ x: selected ? 0 : 6 }}
                whileTap={{ scale: 0.98 }}
                className={`group relative flex h-[68px] w-full items-center gap-5 overflow-hidden pl-5 pr-12 text-left transition-colors duration-300 sm:pl-8 lg:pl-[128px] ${
                  selected
                    ? "bg-[#13b2b5] text-white"
                    : "bg-[#174a73]/90 text-white hover:bg-[#205982]"
                }`}
                style={{
                  clipPath:
                    "polygon(0 0, 93.2% 0, 100% 50%, 93.2% 100%, 0 100%)",
                }}
              >
                {selected && (
                  <motion.span
                    layoutId="activeCategory"
                    className="absolute inset-0 bg-[#13b2b5]"
                    transition={{
                      type: "spring",
                      stiffness: 240,
                      damping: 28,
                    }}
                  />
                )}

                {/* NUMBER / ARROW */}
                <span
                  className={`relative z-10 grid h-10 w-10 shrink-0 place-items-center rounded-full border transition-all duration-300 ${
                    selected
                      ? "border-white bg-white text-[#0795a0]"
                      : "border-white/20 text-white group-hover:border-white/70"
                  }`}
                >
                  <AnimatePresence mode="wait" initial={false}>
                    {selected ? (
                      <motion.span
                        key="number"
                        initial={{ opacity: 0, scale: 0.5, rotate: -30 }}
                        animate={{ opacity: 1, scale: 1, rotate: 0 }}
                        exit={{ opacity: 0, scale: 0.5 }}
                        transition={{ duration: 0.25 }}
                        className="text-[15px] font-semibold"
                      >
                        {item.number}
                      </motion.span>
                    ) : (
                      <motion.span
                        key="arrow"
                        initial={{ opacity: 0, x: -5 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 5 }}
                      >
                        <ArrowRight size={20} strokeWidth={2.5} />
                      </motion.span>
                    )}
                  </AnimatePresence>
                </span>

                <span className="relative z-10 text-[16px] font-semibold sm:text-lg">
                  {item.label}
                </span>
              </motion.button>
            );
          })}
        </motion.div>

        {/* NAVIGATION CONTROLS */}
        <div className="relative z-30 mx-auto mt-7 flex w-fit gap-3 lg:absolute lg:left-[44.9%] lg:top-[337px] lg:mt-0 lg:flex-col">

          <motion.button
            type="button"
            onClick={previous}
            aria-label="Previous category"
            whileHover={{ scale: 1.08, x: -3 }}
            whileTap={{ scale: 0.9 }}
            className="grid h-[54px] w-[54px] place-items-center bg-white text-[#0b3c61] shadow-md transition-colors hover:bg-[#e4f8f7] hover:text-[#078b96]"
          >
            <ArrowLeft size={21} strokeWidth={2.5} />
          </motion.button>

          <motion.button
            type="button"
            onClick={next}
            aria-label="Next category"
            whileHover={{ scale: 1.08, x: 3 }}
            whileTap={{ scale: 0.9 }}
            className="grid h-[54px] w-[54px] place-items-center bg-white text-[#0b3c61] shadow-md transition-colors hover:bg-[#e4f8f7] hover:text-[#078b96]"
          >
            <ArrowRight size={21} strokeWidth={2.5} />
          </motion.button>
        </div>

        {/* HEXAGON PANEL */}
        <div
          className="relative z-10 mx-auto mt-8 flex min-h-[490px] w-full max-w-[570px] items-center justify-center overflow-hidden bg-[#19466f] px-8 py-16 text-center text-white shadow-[0_24px_60px_rgba(0,25,50,0.18)] lg:absolute lg:right-[8.9%] lg:top-[57px] lg:mx-0 lg:mt-0 lg:h-[623px] lg:min-h-0 lg:w-[540px] lg:max-w-none lg:px-[58px] lg:py-20"
          style={{
            clipPath:
              "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
          }}
        >
          {/* PANEL GLOW */}
          <motion.div
            className="pointer-events-none absolute left-1/2 top-1/2 h-[350px] w-[350px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#16b5b5]/15 blur-[85px]"
            animate={{
              scale: [0.85, 1.15, 0.85],
              opacity: [0.4, 0.85, 0.4],
            }}
            transition={{ duration: 6, repeat: Infinity }}
          />

          {/* HEXAGON BORDER EFFECT */}
          <div className="pointer-events-none absolute inset-[1px] opacity-50">
            <div className="absolute inset-0 border border-[#1cc7cb]/40" />
          </div>

          {/* SLIDING CONTENT */}
          <AnimatePresence
            mode="wait"
            initial={false}
            custom={direction}
          >
            <motion.div
              key={activeIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="relative z-10 flex w-full max-w-[440px] flex-col items-center"
            >
              {/* EYEBROW */}
              <motion.div
                variants={textVariants}
                className="mb-5 inline-flex items-center gap-2 text-[11px] font-extrabold tracking-[0.13em] text-[#11b8ba] sm:text-xs"
              >
                <span className="h-2 w-2 rounded-full bg-[#11b8ba] shadow-[0_0_12px_#11b8ba]" />
                {active.eyebrow}
              </motion.div>

              {/* TITLE */}
              <motion.h2
                variants={textVariants}
                className="max-w-[440px] text-[32px] font-semibold leading-[1.12] tracking-[-0.035em] text-white sm:text-[40px] lg:text-[44px]"
              >
                {active.title}
              </motion.h2>

              {/* DESCRIPTION */}
              <motion.p
                variants={textVariants}
                className="mt-6 max-w-[410px] text-[13px] leading-[1.75] text-[#d5e3ee] sm:text-[15px]"
              >
                {active.description}
              </motion.p>

              {/* READ MORE */}
              <motion.div variants={textVariants} className="mt-8">
                <Link
                  href={active.href}
                  className="group inline-flex min-h-[52px] items-center gap-5 rounded-full bg-white py-1.5 pl-7 pr-2 text-[13px] font-bold tracking-wide text-[#087f8d] shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_35px_rgba(0,0,0,0.2)]"
                >
                  READ MORE
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-[#e5f8f8] transition-all duration-300 group-hover:rotate-45 group-hover:bg-[#13b2b5] group-hover:text-white">
                    <ArrowUpRight size={20} />
                  </span>
                </Link>
              </motion.div>

              {/* SLIDE INDICATOR */}
              <motion.div
                variants={textVariants}
                className="mt-7 flex items-center gap-2"
              >
                {items.map((item, index) => (
                  <button
                    key={item.number}
                    type="button"
                    onClick={() => changeSlide(index)}
                    aria-label={`Go to ${item.label}`}
                    className={`h-[4px] rounded-full transition-all duration-500 ${
                      index === activeIndex
                        ? "w-9 bg-[#19c3c3]"
                        : "w-3 bg-white/35 hover:bg-white/70"
                    }`}
                  />
                ))}
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
