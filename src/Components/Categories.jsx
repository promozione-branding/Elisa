
"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight,
  Plus,
  FlaskConical,
  ArrowUpLeft,
  ArrowLeft,
  ArrowRight
} from "lucide-react";

const categories = [
  {
    title: "Pharmaceutical Tablets",
    subtitle: "A broad range of tablet formulations",
    description:
      "Explore our pharmaceutical tablet range and discover products designed to meet diverse requirements.",
    image:
      "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=1600&q=90",
    href: "/products?category=pharmaceutical-tablets",
    number: "01",
  },
  {
    title: "Allopathic Tablets",
    subtitle: "Explore our allopathic product range",
    description:
      "Discover our allopathic product collection with a focus on quality, consistency and reliable supply.",
    image:
      "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&w=1600&q=90",
    href: "/products?category=allopathic-tablets",
    number: "02",
  },
  {
    title: "Pharmaceutical Capsules",
    subtitle: "Capsule products for wholesale enquiries",
    description:
      "Explore our capsule collection and connect with our team for product and bulk enquiry requirements.",
    image:
      "https://images.unsplash.com/photo-1550572017-edd951b55104?auto=format&fit=crop&w=1600&q=90",
    href: "/products?category=pharmaceutical-capsules",
    number: "03",
  },
];

const ease = [0.22, 1, 0.36, 1];

export default function Categories() {
  const [active, setActive] = useState(0);

  return (
    <section className="relative isolate min-h-[680px] overflow-hidden bg-[#F4F8F8] text-[#0B2E40] lg:h-[80vh] lg:min-h-[620px]">

      {/* BACKGROUND */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_10%_20%,rgba(16,167,164,0.09),transparent_30%),linear-gradient(135deg,#f9fcfc,#edf5f5)]" />

      <div className="absolute -right-40 -top-40 -z-10 h-[500px] w-[500px] rounded-full border border-[#0D9996]/10" />
      <div className="absolute -right-24 -top-24 -z-10 h-[330px] w-[330px] rounded-full border border-[#0D9996]/10" />

      <div className="mx-auto flex h-full max-w-[1600px] flex-col px-5 py-10 sm:px-8 lg:px-12 lg:py-9">

        {/* HEADER */}
        <div className="mb-7 flex flex-wrap items-end justify-between gap-5">

          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="mb-3 flex items-center gap-3"
            >
              <span className="h-[2px] w-9 bg-[#0B9C99]" />
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#078F91]">
                Discover Our Collection
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl"
            >
              Explore Our
              <span className="text-[#0B9C99]"> Products.</span>
            </motion.h2>
          </div>

          <div className="hidden items-center gap-3 sm:flex">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#D9EEEE] text-[#078F91]">
              <FlaskConical size={21} />
            </div>
            <div>
              <p className="text-xs font-bold text-[#123B4D]">
                ELISA BIOTECH
              </p>
              <p className="mt-1 text-[10px] uppercase tracking-widest text-slate-400">
                Product Collection
              </p>
            </div>
          </div>

        </div>

        {/* EXPANDING PANELS */}
        <div className="flex min-h-[520px] flex-1 flex-col gap-3 lg:min-h-0 lg:flex-row lg:gap-4">

          {categories.map((item, index) => {
            const isActive = active === index;

            return (
              <motion.div
                key={item.number}
                layout
                onClick={() => setActive(index)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setActive(index);
                  }
                }}
                role="button"
                tabIndex={0}
                aria-expanded={isActive}
                aria-label={`Show ${item.title}`}
                animate={{
                  flex: isActive ? 3.4 : 0.8,
                }}
                transition={{
                  duration: 0.8,
                  ease,
                }}
                className={`group relative min-h-[105px] cursor-pointer overflow-hidden rounded-[24px] outline-none transition-shadow duration-500 lg:min-h-0 lg:rounded-[30px] ${
                  isActive
                    ? "shadow-[0_25px_65px_rgba(8,65,77,0.19)]"
                    : "shadow-[0_8px_25px_rgba(8,65,77,0.07)]"
                }`}
              >

                {/* BACKGROUND IMAGE */}
                <motion.img
                  src={item.image}
                  alt={item.title}
                  animate={{
                    scale: isActive ? 1 : 1.08,
                  }}
                  transition={{
                    duration: 1.2,
                    ease,
                  }}
                  className="absolute inset-0 h-full w-full object-cover"
                />

                {/* OVERLAY */}
                <div
                  className={`absolute inset-0 transition-all duration-700 ${
                    isActive
                      ? "bg-gradient-to-t from-[#042B3D]/95 via-[#063B50]/40 to-[#063B50]/10"
                      : "bg-gradient-to-t from-[#042B3D]/80 via-[#063B50]/25 to-[#042B3D]/35"
                  }`}
                />

                {/* NUMBER */}
                <div
                  className={`absolute top-5 z-10 text-sm font-bold tracking-widest text-white/80 transition-all duration-500 lg:top-7 ${
                    isActive
                      ? "left-6 lg:left-8"
                      : "left-5 lg:left-1/2 lg:-translate-x-1/2"
                  }`}
                >
                  {item.number}
                </div>

                {/* INACTIVE PANEL */}
                <AnimatePresence>
                  {!isActive && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="absolute inset-0 flex items-center justify-center"
                    >
                      <div className="flex w-full items-center justify-between px-6 lg:h-full lg:flex-col lg:justify-center lg:gap-10 lg:px-0">

                        <h3 className="text-base font-bold text-white sm:text-lg lg:[writing-mode:vertical-rl] lg:rotate-180 lg:text-xl lg:tracking-wide">
                          {item.title}
                        </h3>

                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/50 bg-white/10 text-white backdrop-blur-md transition-all group-hover:bg-white group-hover:text-[#087F8D]">
                          <Plus size={19} />
                        </div>

                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* ACTIVE CONTENT */}
                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.45 }}
                      className="absolute inset-0 flex flex-col justify-between p-6 sm:p-8 lg:p-10"
                    >

                      {/* TOP CONTENT */}
                      <div className="flex items-center justify-between gap-3">
                        <span className="rounded-full border border-white/30 bg-white/10 px-4 py-2 text-[9px] font-bold uppercase tracking-[0.2em] text-white backdrop-blur-lg">
                          Elisa Biotech · Product Range
                        </span>

                        <span className="hidden text-xs font-bold uppercase tracking-widest text-white/70 sm:block">
                          Category {item.number}
                        </span>
                      </div>

                      {/* BOTTOM CONTENT */}
                      <div className="max-w-[600px]">

                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.15, duration: 0.6, ease }}
                        >
                          <span className="mb-3 block text-[10px] font-bold uppercase tracking-[0.25em] text-[#5CE0D5]">
                            Explore The Collection
                          </span>

                          <h3 className="text-3xl font-bold leading-[1.08] tracking-tight text-white sm:text-4xl lg:text-5xl xl:text-6xl">
                            {item.title}
                          </h3>

                          <p className="mt-3 max-w-md text-sm leading-7 text-white/75 sm:text-base">
                            {item.description}
                          </p>

                          <Link
                            href={item.href}
                            onClick={(e) => e.stopPropagation()}
                            className="group/link mt-6 inline-flex items-center gap-5 rounded-full bg-white py-2 pl-6 pr-2 text-xs font-bold text-[#0B5269] transition-all duration-300 hover:-translate-y-1 hover:bg-[#DFF8F5]"
                          >
                            Explore Products

                            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0C9997] text-white transition-transform duration-300 group-hover/link:rotate-45">
                              <ArrowUpRight size={19} />
                            </span>
                          </Link>
                        </motion.div>

                      </div>

                    </motion.div>
                  )}
                </AnimatePresence>

                {/* ACTIVE BORDER */}
                {isActive && (
                  <motion.div
                    layoutId="categoryBorder"
                    className="pointer-events-none absolute inset-0 rounded-[24px] border-2 border-white/30 lg:rounded-[30px]"
                    transition={{ duration: 0.5 }}
                  />
                )}

              </motion.div>
            );
          })}

        </div>

        {/* BOTTOM NAVIGATION */}
        <div className="mt-6 flex items-center justify-between">

          <div className="flex items-center gap-3">
            <span className="text-xs font-bold text-[#0B5269]">
              {categories[active].number}
            </span>

            <div className="h-[3px] w-16 overflow-hidden rounded-full bg-[#D4E4E6]">
              <motion.div
                className="h-full rounded-full bg-[#0B9C99]"
                animate={{
                  width: `${((active + 1) / categories.length) * 100}%`,
                }}
                transition={{ duration: 0.5 }}
              />
            </div>

            <span className="text-xs text-slate-400">03</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() =>
                setActive((p) => (p - 1 + categories.length) % categories.length)
              }
              aria-label="Previous category"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[#D6E5E7] bg-white text-[#0B5269] transition-all hover:bg-[#0B5269] hover:text-white"
            >
             <ArrowLeft
                    size={19}
                    className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
            </button>

            <button
              onClick={() =>
                setActive((p) => (p + 1) % categories.length)
              }
              aria-label="Next category"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0B9395] text-white transition-all hover:bg-[#076B7C]"
            >

               <ArrowRight
                    size={19}
                    className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
        
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
