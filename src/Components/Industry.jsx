
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  ArrowUpRight,
  Pill,
  Utensils,
  CarFront,
  Leaf,
  Recycle,
} from "lucide-react";

const industries = [
  {
    title: "Pharmaceutical",
    number: "01",
    description:
      "Supporting pharmaceutical businesses with product-focused solutions and dependable wholesale supply.",
    image:
      "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=1400&q=90",
    href: "/industries/pharmaceutical",
    icon: Pill,
  },
  {
    title: "Food Solutions",
    number: "02",
    description:
      "Solutions for food-related businesses, with a focus on quality, consistency and customer requirements.",
    image:
      "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1400&q=90",
    href: "/industries/food-solutions",
    icon: Utensils,
  },
  {
    title: "Automotive",
    number: "03",
    description:
      "Explore solutions and products serving the needs of the automotive industry and its supply chain.",
    image:
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=1400&q=90",
    href: "/industries/automotive",
    icon: CarFront,
  },
  {
    title: "Agriculture",
    number: "04",
    description:
      "Product and supply support for businesses connected with agriculture and allied sectors.",
    image:
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1400&q=90",
    href: "/industries/agriculture",
    icon: Leaf,
  },
  {
    title: "Environmental",
    number: "05",
    description:
      "A focus on responsible practices and solutions for businesses working in environmental sectors.",
    image:
      "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1400&q=90",
    href: "/industries/environmental",
    icon: Recycle,
  },
];

const ease = [0.22, 1, 0.36, 1];

export default function Industries() {
  const [active, setActive] = useState(0);

  const current = industries[active];

  return (
    <section
      id="industries"
      className="relative isolate overflow-hidden bg-gradient-to-br from-[#e8f2f6] via-[#f7fafc] to-[#e5f1f5] py-14 sm:py-16 lg:py-20"
    >
      {/* BACKGROUND DECORATION */}

      <div className="pointer-events-none absolute -right-40 top-0 h-[500px] w-[500px] rounded-full bg-[#12a9a3]/10 blur-[120px]" />

      <div className="pointer-events-none absolute -bottom-40 -left-40 h-[450px] w-[450px] rounded-full bg-[#0b6676]/10 blur-[120px]" />

      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#17cbc5]/5 blur-[130px]" />

      <div className="relative mx-auto max-w-[1450px] px-5 sm:px-8 lg:px-12">

        {/* HEADER */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease }}
          className="mb-10 flex flex-col justify-between gap-6 md:mb-12 md:flex-row md:items-end"
        >
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-[3px] w-10 rounded-full bg-[#12a9a3]" />

              <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#0b6676]">
                Our Expertise
              </span>
            </div>

            <h2 className="text-4xl font-extrabold leading-[1.05] tracking-[-0.045em] text-[#0a2e4d] sm:text-6xl lg:text-[58px]">
              Industries That
              <span className="block bg-[#0D3F67] bg-clip-text text-transparent">
                We Empower.
              </span>
            </h2>
          </div>

          <p className="max-w-[390px] text-sm leading-8 text-[#526c7e] md:pb-2 md:text-base">
            Delivering trusted pharmaceutical products and wholesale
            solutions across a wide range of industries.
          </p>
        </motion.div>

        {/* MAIN SHOWCASE */}

        <div className="grid items-stretch gap-6 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10">

          {/* LEFT FEATURED IMAGE */}

          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease }}
            className="group relative h-[420px] overflow-hidden rounded-[26px] border border-white/80 bg-[#0a2e4d] shadow-[0_20px_55px_rgba(10,46,77,0.14)] sm:h-[550px] lg:h-[80vh] lg:min-h-[560px] lg:max-h-[850px]"
          >
            {/* INDUSTRY IMAGE */}

            <AnimatePresence mode="wait">
              <motion.img
                key={current.image}
                src={current.image}
                alt={current.title}
                initial={{ opacity: 0, scale: 1.08 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.65, ease }}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              />
            </AnimatePresence>

            {/* IMAGE OVERLAY */}

            <div className="absolute inset-0 bg-gradient-to-t from-[#061e34] via-[#0a2e4d]/35 to-[#0a2e4d]/5" />

            {/* TOP LABEL */}

            <div className="absolute left-5 top-5 flex items-center gap-3 rounded-full border border-white/30 bg-[#0a2e4d]/35 px-4 py-2.5 text-white backdrop-blur-md sm:left-8 sm:top-8">
              <span className="h-2 w-2 rounded-full bg-[#17cbc5] shadow-[0_0_12px_#17cbc5]" />

              <span className="text-[10px] font-bold uppercase tracking-[0.2em]">
                Featured Industry
              </span>
            </div>

            {/* INDUSTRY NUMBER */}

            <div className="absolute right-6 top-5 text-6xl font-light tracking-tighter text-white/35 sm:right-9 sm:top-7 sm:text-8xl">
              {current.number}
            </div>

            {/* BOTTOM CONTENT */}

            <AnimatePresence mode="wait">
              <motion.div
                key={current.title}
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4, ease }}
                className="absolute bottom-0 left-0 w-full p-6 text-white sm:p-8 lg:p-9"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center 
                rounded-xl border border-white/30 bg-white/15 text-[##0D3F67] backdrop-blur-md">
                  <current.icon size={24} strokeWidth={1.7} />
                </div>

                <h3 className="max-w-[550px] text-3xl font-extrabold tracking-tight sm:text-5xl 
                lg:text-[48px]">
                  {current.title}
                </h3>

                <p className="mt-3 max-w-[470px] text-sm leading-7 text-white/80 sm:text-base">
                  {current.description}
                </p>
              </motion.div>
            </AnimatePresence>

            {/* IMAGE INDICATORS */}

            <div className="absolute bottom-8 right-7 hidden items-center gap-2 sm:flex lg:right-9">
              {industries.map((item, index) => (
                <button
                  key={item.number}
                  onClick={() => setActive(index)}
                  aria-label={`Show ${item.title}`}
                  aria-pressed={active === index}
                  className={`h-1.5 rounded-full transition-all duration-500 ${
                    active === index
                      ? "w-10 bg-[#17cbc5]"
                      : "w-3 bg-white/50 hover:bg-white"
                  }`}
                />
              ))}
            </div>
          </motion.div>

          {/* RIGHT INDUSTRY LIST */}

          <div className="flex flex-col justify-center">

            {/* LIST HEADER */}

            <div className="mb-3 flex items-center justify-between border-b border-[#c9dce5] pb-4">
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#526c7e]">
                Explore Our Industries
              </span>

              <span className="text-xs font-bold text-[#0b7f93]">
                05 Sectors
              </span>
            </div>

            {/* INDUSTRY ITEMS */}

            <div className="flex flex-col">
              {industries.map((industry, index) => {
                const Icon = industry.icon;
                const isActive = active === index;

                return (
                  <motion.div
                    key={industry.number}
                    onMouseEnter={() => setActive(index)}
                    onFocus={() => setActive(index)}
                    initial={{ opacity: 0, x: 25 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.55,
                      delay: index * 0.09,
                      ease,
                    }}
                  >
                    <Link
                      href={industry.href}
                      onClick={() => setActive(index)}
                      className={`group relative flex items-center gap-4 border-b border-[#c9dce5] py-4 transition-all duration-300 sm:gap-5 sm:py-5 ${
                        isActive ? "pl-3" : ""
                      }`}
                    >
                      {/* ACTIVE LINE */}

                      <motion.span
                        initial={false}
                        animate={{
                          height: isActive ? "65%" : "0%",
                          opacity: isActive ? 1 : 0,
                        }}
                        className="absolute left-0 top-1/2 w-[3px] -translate-y-1/2 rounded-full bg-[#12a9a3]"
                      />

                      {/* NUMBER */}

                      <span
                        className={`text-xs font-bold transition-colors ${
                          isActive
                            ? "text-[#0D3F67]"
                            : "text-[#94aab7]"
                        }`}
                      >
                        {industry.number}
                      </span>

                      {/* ICON */}

                      <motion.div
                        animate={{
                          scale: isActive ? 1.05 : 1,
                        }}
                        className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl transition-all duration-300 sm:h-12 sm:w-12 ${
                          isActive
                            ? "bg-gradient-to-br from-[#0D3F67] to-[#0b6676] text-white shadow-[0_8px_20px_rgba(11,102,118,0.22)]"
                            : "border border-white bg-white/80 text-[#0D3F67] group-hover:bg-[#dceff3]"
                        }`}
                      >
                        <Icon size={22} strokeWidth={1.7} />
                      </motion.div>

                      {/* TITLE + DESCRIPTION */}

                      <div className="min-w-0 flex-1">
                        <h3
                          className={`text-base font-bold tracking-tight transition-colors sm:text-lg ${
                            isActive
                              ? "text-[#0D3F67]"
                              : "text-[#0a2e4d]"
                          }`}
                        >
                          {industry.title}
                        </h3>

                        <p
                          className={`mt-1.5 max-w-[350px] text-[13px] leading-[1.6] transition-colors sm:text-xs ${
                            isActive
                              ? "text-[#526c7e]"
                              : "text-[#8399a7]"
                          }`}
                        >
                          {industry.description}
                        </p>
                      </div>

                      {/* ARROW */}

                      <motion.div
                        animate={{
                          x: isActive ? 0 : -5,
                          rotate: isActive ? 45 : 0,
                        }}
                        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                          isActive
                            ? "bg-gradient-to-br from-[#12b5a6] to-[#0D3F67] text-white shadow-md shadow-[#0b6676]/20"
                            : "border border-[#d5e5eb] bg-white/80 text-[#0D3F67] group-hover:bg-[# 0D3F67]"
                        }`}
                      >
                        <ArrowUpRight size={19} />
                      </motion.div>
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM ACCENT */}

      <div className="absolute bottom-0 left-0 h-[3px] w-full bg-gradient-to-r from-transparent via-[#12b5a3] to-transparent" />
    </section>
  );
}
