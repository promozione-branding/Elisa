"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Pill, Package, Droplet, CheckCircle2 } from "lucide-react";

const products = [
  {
    title: "Pharmaceutical Tablets",
    image: "/pharma.webp",
    icon: Pill,
    bg: "from-[#E6F7F5] to-[#CDEEEA]",
    iconColor: "text-[#0E9F8F]",
    link: "#",
  },
  {
    title: "Allopathic Tablets",
    image: "/Allopathic Tablets.webp",
    icon: Pill,
    bg: "from-[#FFF1E4] to-[#FDE0C6]",
    iconColor: "text-[#F28A3A]",
     link: "#",
  },
  {
    title: "Pharmaceutical Injection",
    image: "/Pharmaceutical_Injection-removebg-preview.webp",
    icon: Pill,
    bg: "from-[#E8F2FD] to-[#CFE3F8]",
    iconColor: "text-[#2B7BD1]",
     link: "#",
  },
  {
    title: "Antibiotics Medicine",
    image: "/linezolid-600-mg-tablet-500x500-removebg-preview.webp",
    icon: Package,
    bg: "from-[#F1EEFD] to-[#E0DAF8]",
    iconColor: "text-[#4B4FC4]",
     link: "#",
  },
  {
    title: "Pharmaceutical Syrup",
    image: "/medicine.webp",
    icon: Droplet,
    bg: "from-[#E8FBEF] to-[#D2F3DF]",
    iconColor: "text-[#1FA35B]",
     link: "#",
  },
];

const ease = [0.22, 1, 0.36, 1];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
};

const cardVariant = {
  hidden: { opacity: 0, y: 40, scale: 0.96 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease } },
};

export default function ProductRange() {
  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-br from-[#F7FCFB] via-[#EEF8F7] to-[#E6F4F3] text-[#0B2E40]">
      {/* Decorative curved shape */}
      <div className="pointer-events-none absolute -left-24 -top-24 -z-10 h-[420px] w-[420px] rounded-full bg-[#0D9996]/5 blur-3xl" />
      <div className="pointer-events-none absolute right-[-120px] top-[-120px] -z-10 h-[360px] w-[360px] rounded-full border border-[#0D9996]/15" />

      <div className="mx-auto max-w-[1400px] px-5 pb-8 pt-10 sm:px-8 lg:px-12 lg:pb-10 lg:pt-12">
        {/* HERO */}
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-6">
          {/* Left content */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="relative z-10 order-1"
          >
            <motion.div variants={fadeUp} className="mb-4 flex items-center gap-3">
              <span className="h-[2px] w-8 bg-[#0B9C99]" />
              <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#078F91] sm:text-[11px]">
                Discover Our Collection
              </span>
              <span className="h-[2px] w-6 bg-[#0B9C99]" />
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="text-[2.1rem] font-bold leading-[1.08] tracking-tight sm:text-5xl lg:text-[3.6rem]"
            >
              Our Pharmaceutical
              <span className="mt-1 block text-[#0B9C99]">Categories</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-5 max-w-md text-sm leading-relaxed text-[#3D5A66] sm:text-base"
            >
              A comprehensive range of high-quality pharmaceutical products,
              manufactured with precision and care for better health and
              well-being.
            </motion.p>

            <motion.div variants={fadeUp} className="mt-7">
              <motion.a
                href="/products"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="group inline-flex items-center gap-3 rounded-full bg-[#0B8F86] px-7 py-3.5 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(11,143,134,0.3)] transition-colors hover:bg-[#087870]"
              >
                Explore Products
                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right image */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease, delay: 0.2 }}
            className="relative order-2 flex justify-center lg:justify-end"
          >
            <motion.img
              src="/steptodown.com172127.webp"
              alt="Elisa Biotech pharmaceutical products"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="w-full max-w-[640px] object-contain drop-shadow-[0_25px_40px_rgba(8,65,77,0.15)]"
            />

            {/* Trusted badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.6, rotate: -20 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, delay: 0.9, ease }}
              className="absolute bottom-2 right-2 flex h-24 w-24 items-center justify-center sm:h-28 sm:w-28 lg:bottom-6 lg:right-4 lg:h-32 lg:w-32"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full border-[3px] border-dashed border-[#0B8F86]/40"
              />
              <div className="relative flex h-[88%] w-[88%] flex-col items-center justify-center rounded-full bg-gradient-to-br from-[#0E8C7F] to-[#0A6E65] text-center text-white shadow-[0_15px_35px_rgba(10,110,101,0.35)] ring-4 ring-white">
                <span className="text-[10px] font-bold leading-tight sm:text-xs">
                  Trusted
                  <br />
                  Pharma
                  <br />
                  Range
                </span>
                <CheckCircle2 size={14} className="mt-1 opacity-90" />
              </div>
            </motion.div>
          </motion.div>
        </div>

      

{/* PRODUCT CARDS */}
<motion.div
  variants={container}
  initial="hidden"
  whileInView="show"
  viewport={{ once: true, amount: 0.2 }}
  className="mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4
  [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden
  lg:mt-12 lg:grid lg:grid-cols-5 lg:gap-5 lg:overflow-visible lg:pb-0"
>
  {products.map((item) => {
    const Icon = item.icon;

    return (
      <motion.div
        key={item.title}
        variants={cardVariant}
        whileHover={{ y: -7 }}
        transition={{ type: "spring", stiffness: 250, damping: 20 }}
        className={`group relative h-[270px] min-w-[70%] shrink-0
        snap-start overflow-hidden rounded-[22px]
        border border-white/80 bg-gradient-to-br ${item.bg}
        shadow-[0_10px_30px_rgba(8,65,77,0.08)]
        transition-shadow duration-500
        hover:shadow-[0_22px_45px_rgba(8,65,77,0.16)]
        sm:min-w-[42%] lg:h-[220px] lg:min-w-0`}
      >
        <Link
          href={item.link}
          className="absolute inset-0 z-10 flex flex-col p-5"
        >
          {/* Icon + Title */}
          <div>
            <Icon
              size={25}
              strokeWidth={1.8}
              className={item.iconColor}
            />

            <h3 className="mt-2 max-w-[85%] text-[16px] font-bold
            leading-snug text-[#0B2E40] lg:text-[17px]">
              {item.title}
            </h3>
          </div>

          {/* Product Image */}
          <div className="absolute inset-x-0 bottom-0 flex h-[155px]
          items-center justify-center px-4 pt-2">
            <motion.img
              src={item.image}
              alt={item.title}
              whileHover={{ scale: 1.08, rotate: -2 }}
              transition={{ duration: 0.5, ease }}
              className="h-full w-full object-contain object-center
              drop-shadow-[0_10px_12px_rgba(0,0,0,0.12)]"
            />
          </div>

          {/* Arrow */}
          <span className="absolute bottom-3 right-3 z-20 flex
          h-9 w-9 items-center justify-center rounded-full
          bg-white text-[#0B2E40] shadow-md transition-all
          duration-300 group-hover:bg-[#0B8F86]
          group-hover:text-white">
            <ArrowRight size={17} />
          </span>
        </Link>
      </motion.div>
    );
  })}
</motion.div>


      </div>
    </section>
  );
}