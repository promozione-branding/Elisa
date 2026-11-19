"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  PackageCheck,
  ShieldCheck,
  Truck,
  Pill,
  Plus,
  Microscope,
} from "lucide-react";

const strengths = [
  {
    icon: PackageCheck,
    title: "Wide Product Range",
    description: "A broad selection of pharmaceutical products.",
  },
  {
    icon: ShieldCheck,
    title: "Quality-Focused Sourcing",
    description: "A careful approach to product selection.",
  },
  {
    icon: Truck,
    title: "Reliable Wholesale Supply",
    description: "Dependable service for the pharmaceutical trade.",
  },
];

const ease = [0.22, 1, 0.36, 1];

const reveal = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease },
  },
};

const stagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

export default function About() {
  return (
    <section
      id="about"
      className="relative isolate min-h-[100svh] overflow-hidden bg-[#E8F7FA] text-[#0B2D50]"
    >
      {/* Background atmosphere */}
      <div className="pointer-events-none absolute inset-0 -z-20 bg-[radial-gradient(circle_at_78%_42%,#D0EEF4_0%,transparent_42%),linear-gradient(115deg,#FFFFFF_0%,#F1FAFC_56%,#E8F7FA_100%)]" />

      <div className="pointer-events-none absolute -right-32 top-[-18%] -z-10 h-[520px] w-[520px] rounded-full bg-[#0797A5]/15 blur-[90px]" />

      <div className="pointer-events-none absolute -bottom-48 left-[-10%] -z-10 h-[420px] w-[620px] rounded-full bg-[#0876AD]/10 blur-[100px]" />

      <div className="mx-auto flex min-h-[100svh] w-full max-w-[1600px] flex-col justify-center px-5 py-16 sm:px-8 lg:h-full lg:min-h-0 lg:px-12 lg:py-8 xl:px-16">
        <div className="grid items-center gap-10 lg:h-full lg:grid-cols-[0.92fr_1.08fr] lg:gap-8 xl:gap-14">

          {/* LEFT CONTENT */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="relative z-10 order-2 mx-auto w-full max-w-[650px] lg:order-1 lg:mx-0 lg:py-8"
          >
            <motion.div
              variants={reveal}
              className="mb-5 flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.32em] text-[#0876AD] sm:text-xs"
            >
              <span className="h-[4px] w-10 rounded-full bg-[#0797A5]" />
              About Elisa Biotech
            </motion.div>

            <motion.h1
              variants={reveal}
              className="max-w-[700px] text-[38px] font-semibold leading-[1.08] tracking-[-0.055em] text-[#0B2D50] sm:text-[48px] md:text-[56px] xl:text-[64px]"
            >
              Your Trusted Wholesale Partner for{" "}
              <span className="bg-gradient-to-r from-[#0876AD] to-[#0797A5] bg-clip-text text-transparent">
                Pharmaceutical Products.
              </span>
            </motion.h1>

            <motion.div
              variants={reveal}
              className="mt-5 h-[5px] w-28 rounded-full bg-gradient-to-r from-[#0876AD] to-[#0797A5]"
            />

            <motion.p
              variants={reveal}
              className="mt-7 max-w-[590px] text-[15px] leading-[1.8] text-[#526B80] sm:text-[17px] xl:text-[18px]"
            >
              Supplying high-quality pharmaceutical tablets and capsules with
              a wide product range, reliable sourcing, and a customer-focused
              approach.
            </motion.p>

            <motion.div
              variants={stagger}
              className="mt-8 grid max-w-[610px] grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-3"
            >
              {strengths.map((item) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.title}
                    variants={reveal}
                    whileHover={{ y: -5 }}
                    className="flex items-center gap-3 sm:block sm:border-r sm:border-[#C7DDE7] sm:pr-3 last:border-0"
                  >
                    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-[#DDF1F6] text-[#0876AD] sm:mb-3 sm:h-14 sm:w-14">
                      <Icon size={25} strokeWidth={1.7} />
                    </span>

                    <div>
                      <h3 className="text-[13px] font-semibold leading-snug text-[#0B2D50] sm:text-[15px]">
                        {item.title}
                      </h3>

                      <p className="mt-1 hidden text-[11px] leading-relaxed text-[#718699] sm:block">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>

            <motion.div variants={reveal} className="mt-8">
              <Link
                href="/about-us"
                className="group inline-flex min-h-[54px] items-center gap-7 rounded-full bg-[#0B2D50] py-1.5 pl-7 pr-1.5 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(11,45,80,0.2)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#0797A5]"
              >
                Read More

                <span className="grid h-11 w-11 place-items-center rounded-full bg-white text-[#0876AD] transition-transform duration-300 group-hover:translate-x-0.5">
                  <ArrowRight size={20} />
                </span>
              </Link>
            </motion.div>
          </motion.div>

          {/* RIGHT VISUAL */}
          <motion.div
            initial={{ opacity: 0, x: 35, scale: 0.97 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1, ease }}
            className="relative order-1 mx-auto h-[360px] w-full max-w-[760px] sm:h-[470px] lg:order-2 lg:h-[min(76vh,700px)] lg:max-h-[700px]"
          >
            {/* Curved healthcare blue framing shapes */}
            <div className="absolute -right-5 -top-5 h-[46%] w-[75%] rounded-tr-[150px] bg-[#0797A5]/80 sm:-right-8 sm:-top-8" />

            <div className="absolute -bottom-5 -left-5 h-[38%] w-[60%] rounded-bl-[100px] bg-gradient-to-r from-[#0B2D50] to-[#0876AD] sm:-bottom-8 sm:-left-8" />

            <div className="absolute inset-0 overflow-hidden rounded-[30px] bg-[#DDF1F6] shadow-[0_28px_70px_rgba(11,45,80,0.2)] sm:rounded-[42px]">
              <img
                src="https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=1500&q=90"
                alt="Pharmaceutical tablets, capsules and medicine packaging"
                className="h-full w-full object-cover object-center"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#0B2D50]/40 via-transparent to-[#0876AD]/10" />

              {/* Floating medical symbols */}
              <div className="absolute right-5 top-5 flex gap-2 sm:right-8 sm:top-8">
                <span className="grid h-11 w-11 place-items-center rounded-2xl border border-white/50 bg-white/25 text-white backdrop-blur-md sm:h-14 sm:w-14">
                  <Pill size={25} />
                </span>

                <span className="grid h-11 w-11 place-items-center rounded-2xl border border-white/50 bg-white/25 text-white backdrop-blur-md sm:h-14 sm:w-14">
                  <Plus size={25} />
                </span>

                <span className="hidden h-14 w-14 place-items-center rounded-2xl border border-white/50 bg-white/25 text-white backdrop-blur-md sm:grid">
                  <Microscope size={25} />
                </span>
              </div>

              {/* Image caption */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.45, duration: 0.7 }}
                className="absolute bottom-5 left-5 rounded-2xl border border-white/60 bg-white/90 px-5 py-3 shadow-xl backdrop-blur-xl sm:bottom-8 sm:left-8 sm:px-6 sm:py-4"
              >
                <span className="block text-[9px] font-bold uppercase tracking-[0.22em] text-[#0876AD] sm:text-[10px]">
                  Elisa Biotech Pvt. Ltd.
                </span>

                <span className="mt-1 block text-sm font-semibold text-[#0B2D50] sm:text-base">
                  Pharmaceutical Wholesale
                </span>
              </motion.div>
            </div>

            {/* Floating pill badge */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -left-5 top-[43%] z-10 grid h-[76px] w-[76px] place-items-center rounded-full border-[7px] border-white bg-white shadow-[0_14px_35px_rgba(8,74,105,0.16)] sm:-left-8 sm:h-[90px] sm:w-[90px]"
            >
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-[#E8F7FA] text-[#0876AD] sm:h-14 sm:w-14">
                <Pill size={27} strokeWidth={1.7} />
              </span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}