
"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  FlaskConical,
  UsersRound,
  ArrowUpRight,
  Plus,
  Activity,
  Cross,
  Sparkles,
  Pill,
  Dna,
  HeartPulse,
} from "lucide-react";
import Popup from "./Popup";

const highlights = [
  {
    icon: ShieldCheck,
    title: "High Quality",
    subtitle: "Quality Standards",
  },
  {
    icon: FlaskConical,
    title: "Advanced",
    subtitle: "Research",
  },
  {
    icon: UsersRound,
    title: "Affordable",
    subtitle: "Healthcare",
  },
];

const reveal = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

export default function Hero() {
  const [popupOpen, setPopupOpen] = useState(false);

  return (
    <section className="relative isolate overflow-hidden bg-[var(--background)] text-[var(--text-primary)]">

      {/* BACKGROUND */}
      <div className="absolute inset-0 -z-30 bg-gradient-to-br from-[var(--surface)] via-[var(--surface-light)] to-[var(--surface-blue)]" />

      <div className="absolute -right-32 top-10 -z-20 h-[600px] w-[600px] rounded-full bg-[var(--secondary)]/15 blur-[110px]" />

      <div className="absolute -bottom-48 -left-32 -z-20 h-[500px] w-[500px] rounded-full bg-[var(--primary)]/10 blur-[110px]" />

      {/* BACKGROUND WAVES */}
      <svg
        className="pointer-events-none absolute bottom-0 left-0 -z-10 h-[220px] w-full opacity-60 sm:h-[300px]"
        viewBox="0 0 1440 300"
        fill="none"
        preserveAspectRatio="none"
      >
        <path
          d="M0 150C190 260 300 260 470 190C650 115 770 140 930 210C1100 285 1280 250 1440 130V300H0V150Z"
          fill="var(--secondary)"
          fillOpacity=".10"
        />
        <path
          d="M0 210C200 300 330 290 510 225C700 155 850 175 1010 235C1170 295 1310 275 1440 205"
          stroke="var(--surface)"
          strokeWidth="3"
        />
      </svg>

      {/* MAIN CONTENT */}
      <div className="relative mx-auto grid w-full max-w-[1600px] items-center gap-2 px-5 pb-10 pt-24 sm:px-8 sm:pb-14 lg:min-h-[740px] lg:grid-cols-[0.94fr_1.06fr] lg:gap-4 lg:px-[5%] lg:pb-16 lg:pt-20">

        {/* LEFT CONTENT */}
        <motion.div
          className="relative z-20 mx-auto w-full max-w-[620px] lg:mx-0"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.p
            variants={reveal}
            className="mb-5 flex items-center gap-3 text-xs font-semibold text-[var(--secondary)] sm:mb-6 sm:text-base"
          >
            <span className="h-[2px] w-8 bg-[var(--secondary)] sm:w-9" />
            Caring for Life. Committed to Health.
          </motion.p>

          <motion.h1
            variants={reveal}
            className="text-[clamp(36px,6vw,66px)] font-bold leading-[1.1] tracking-[-0.045em] text-[var(--primary)]"
          >
            Trusted Medicines,
            <span className="relative mt-1 block text-[var(--secondary)]">
              Healthier Tomorrow.
              <motion.span
                className="absolute -bottom-2 left-0 h-[4px] rounded-full bg-[var(--accent)]"
                initial={{ width: 0 }}
                animate={{ width: "68%" }}
                transition={{
                  delay: 1,
                  duration: 1,
                  ease: "easeOut",
                }}
              />
            </span>
          </motion.h1>

          <motion.p
            variants={reveal}
            className="mt-6 max-w-[500px] text-sm leading-[1.9] text-[var(--text-secondary)] sm:mt-8 sm:text-base"
          >
            Elisa Biotech Pvt. Ltd. is committed to delivering
            high-quality, affordable medicines that improve
            healthcare and support better lives.
          </motion.p>

          {/* CTA BUTTONS */}
          <motion.div
            variants={reveal}
            className="mt-7 flex flex-wrap gap-3 sm:mt-9 sm:gap-4"
          >
            <Link
              href="/products"
              className="group inline-flex min-h-[52px] items-center gap-3 rounded-xl bg-[image:var(--button-gradient)] px-5 text-sm font-semibold text-[var(--text-light)] shadow-[0_14px_30px_rgba(7,62,95,0.2)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_38px_rgba(7,62,95,0.3)] sm:min-h-[58px] sm:gap-4 sm:px-7"
            >
              Our Products
              <span className="grid h-8 w-8 place-items-center rounded-full bg-white/15 transition-all duration-300 group-hover:rotate-45 group-hover:bg-[var(--surface)] group-hover:text-[var(--primary)] sm:h-9 sm:w-9">
                <ArrowUpRight size={19} />
              </span>
            </Link>

            <button
              onClick={() => setPopupOpen(true)}
              className="group inline-flex min-h-[52px] items-center gap-2 rounded-xl border border-[var(--primary)]/40 bg-[var(--surface)]/80 px-5 text-sm font-semibold text-[var(--primary)] transition-all duration-300 hover:-translate-y-1 hover:border-[var(--secondary)] hover:bg-[image:var(--button-gradient)] hover:text-[var(--text-light)] sm:min-h-[58px] sm:gap-3 sm:px-8"
            >
              Get a Quote
              <ArrowUpRight
                size={17}
                className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </button>
          </motion.div>

          {/* HIGHLIGHTS */}
          <motion.div
            variants={containerVariants}
            className="mt-9 grid max-w-[550px] grid-cols-3 gap-1 border-t border-[var(--border-color)] pt-5 sm:mt-12 sm:gap-2 sm:pt-7"
          >
            {highlights.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  variants={reveal}
                  className={`flex min-w-0 items-center gap-1.5 sm:gap-3 ${
                    index !== 0
                      ? "border-l border-[var(--border-color)] pl-2 sm:pl-5"
                      : ""
                  }`}
                >
                  <motion.div
                    whileHover={{ rotate: 12, scale: 1.1 }}
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[var(--secondary)]/25 bg-[var(--surface)]/80 text-[var(--secondary)] sm:h-12 sm:w-12"
                  >
                    <Icon size={19} strokeWidth={1.8} />
                  </motion.div>

                  <div className="min-w-0">
                    <h3 className="text-[9px] font-bold text-[var(--dark)] sm:text-xs">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-[8px] leading-tight text-[var(--text-secondary)] sm:text-[11px]">
                      {item.subtitle}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>

        {/* RIGHT PRODUCT SHOWCASE */}
        <div className="relative mx-auto mt-5 flex min-h-[350px] w-full max-w-[650px] items-center justify-center sm:mt-8 sm:min-h-[500px] lg:mt-0 lg:min-h-[610px]">

          {/* GLOW */}
          <motion.div
            className="absolute left-1/2 top-[46%] h-[260px] w-[260px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--secondary)]/20 blur-[65px] sm:h-[420px] sm:w-[420px] sm:blur-[75px] lg:h-[480px] lg:w-[480px]"
            animate={{
              scale: [1, 1.15, 1],
              opacity: [0.45, 0.8, 0.45],
            }}
            transition={{ duration: 7, repeat: Infinity }}
          />

          {/* CIRCULAR ARCH */}
          <motion.div
            className="absolute left-1/2 top-[44%] h-[250px] w-[250px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[var(--surface)]/90 shadow-[0_0_45px_rgba(7,62,95,0.12)] sm:h-[430px] sm:w-[430px] lg:h-[520px] lg:w-[520px]"
            animate={{ rotate: 360 }}
            transition={{
              duration: 90,
              repeat: Infinity,
              ease: "linear",
            }}
          />

          <motion.div
            className="absolute left-1/2 top-[44%] h-[215px] w-[215px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-[var(--secondary)]/30 sm:h-[370px] sm:w-[370px] lg:h-[455px] lg:w-[455px]"
            animate={{ rotate: -360 }}
            transition={{
              duration: 75,
              repeat: Infinity,
              ease: "linear",
            }}
          />

          {/* MARBLE PEDESTAL */}
          <div className="absolute bottom-[5%] left-1/2 z-[2] h-[38px] w-[76%] -translate-x-1/2 rounded-[50%] border border-[var(--surface)] bg-gradient-to-b from-[var(--surface)] via-[var(--surface-blue)] to-[var(--secondary)]/40 shadow-[0_18px_35px_rgba(7,62,95,0.2)] sm:bottom-[8%] sm:h-[70px]">
            <div className="absolute inset-x-[5%] top-1 h-[35%] rounded-[50%] bg-[var(--surface)]/90 blur-[2px]" />
            <div className="absolute inset-x-[8%] bottom-[-12px] h-7 rounded-[50%] bg-[var(--secondary)]/25 blur-xl" />
          </div>

          {/* PRODUCT IMAGE */}
          <motion.img
            src="/medicine.webp"
            alt="Elisa Biotech pharmaceutical medicines"
            initial={{ opacity: 0, scale: 0.82, y: 35 }}
            animate={{
              opacity: 1,
              scale: 1,
              y: [0, -9, 0],
            }}
            transition={{
              opacity: { duration: 1, delay: 0.25 },
              scale: { duration: 1.2, delay: 0.25 },
              y: { duration: 5, repeat: Infinity, ease: "easeInOut" },
            }}
            className="relative z-10 h-[310px] w-[95%] object-contain drop-shadow-[0_25px_25px_rgba(7,62,95,0.18)] sm:h-[460px] lg:h-[540px]"
          />

          {/* VITAMINS BADGE */}
          <motion.div
            animate={{ y: [0, -12, 0], rotate: [0, 3, 0] }}
            transition={{ duration: 4.5, repeat: Infinity }}
            className="absolute left-[1%] top-[17%] z-20 flex h-[62px] w-[62px] flex-col items-center justify-center rounded-full border border-[var(--secondary)]/25 bg-gradient-to-br from-[var(--surface)] to-[var(--surface-blue)] text-[var(--primary)] shadow-[0_0_25px_rgba(7,62,95,0.15)] sm:left-[8%] sm:h-[100px] sm:w-[100px]"
          >
            <Pill size={19} className="sm:h-[23px] sm:w-[23px]" />
            <span className="mt-1 text-[9px] font-bold sm:text-xs">
              Vitamins
            </span>
          </motion.div>

          {/* MINERALS BADGE */}
          <motion.div
            animate={{ y: [0, 12, 0], rotate: [0, -3, 0] }}
            transition={{ duration: 5, repeat: Infinity }}
            className="absolute right-[1%] top-[36%] z-20 flex h-[62px] w-[62px] flex-col items-center justify-center rounded-full border border-[var(--secondary)]/25 bg-gradient-to-br from-[var(--surface)] to-[var(--surface-blue)] text-[var(--primary)] shadow-[0_0_25px_rgba(7,62,95,0.15)] sm:right-[3%] sm:h-[96px] sm:w-[96px]"
          >
            <Dna size={19} className="sm:h-[23px] sm:w-[23px]" />
            <span className="mt-1 text-[9px] font-bold sm:text-xs">
              Minerals
            </span>
          </motion.div>

          {/* IMMUNITY BADGE */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
            className="absolute bottom-[20%] right-[2%] z-20 flex h-[64px] w-[64px] flex-col items-center justify-center rounded-full border border-[var(--secondary)]/25 bg-gradient-to-br from-[var(--surface)] to-[var(--surface-blue)] text-[var(--primary)] shadow-[0_0_25px_rgba(7,62,95,0.15)] sm:h-[100px] sm:w-[100px]"
          >
            <HeartPulse size={20} className="sm:h-[24px] sm:w-[24px]" />
            <span className="mt-1 text-center text-[9px] font-bold leading-tight sm:text-[11px]">
              Immunity
              <br />
              Support
            </span>
          </motion.div>

          {/* QUALITY CARD */}
          <motion.div
            initial={{ opacity: 0, x: 35 }}
            animate={{ opacity: 1, x: 0, y: [0, -8, 0] }}
            transition={{
              opacity: { delay: 0.8, duration: 0.8 },
              x: { delay: 0.8, duration: 0.8 },
              y: { delay: 1.5, duration: 4, repeat: Infinity },
            }}
            className="absolute right-0 top-[9%] z-30 hidden items-center gap-3 rounded-2xl border border-[var(--surface)] bg-[var(--surface)]/90 p-4 shadow-[0_15px_40px_rgba(7,62,95,0.13)] backdrop-blur-xl lg:flex"
          >
            <div className="grid h-11 w-11 place-items-center rounded-xl bg-[var(--surface-blue)] text-[var(--secondary)]">
              <ShieldCheck size={23} />
            </div>
            <div>
              <p className="text-xs font-bold text-[var(--primary)]">
                Quality Assured
              </p>
              <p className="mt-1 text-[10px] text-[var(--text-secondary)]">
                Trusted Healthcare
              </p>
            </div>
          </motion.div>

          {/* RESEARCH CARD */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            animate={{ opacity: 1, x: 0, y: [0, 9, 0] }}
            transition={{
              opacity: { delay: 1, duration: 0.8 },
              x: { delay: 1, duration: 0.8 },
              y: { delay: 1.7, duration: 5, repeat: Infinity },
            }}
            className="absolute bottom-[15%] left-0 z-30 hidden items-center gap-3 rounded-2xl border border-[var(--surface)] bg-[var(--surface)]/90 p-4 shadow-[0_15px_40px_rgba(7,62,95,0.13)] backdrop-blur-xl lg:flex"
          >
            <div className="grid h-11 w-11 place-items-center rounded-xl bg-[var(--surface-blue)] text-[var(--secondary)]">
              <FlaskConical size={23} />
            </div>
            <div>
              <p className="text-xs font-bold text-[var(--primary)]">
                Advanced Research
              </p>
              <p className="mt-1 text-[10px] text-[var(--text-secondary)]">
                Better Healthcare
              </p>
            </div>
          </motion.div>

          {/* FLOATING MEDICAL DETAILS */}
          <motion.div
            className="absolute left-[19%] top-[11%] z-20 text-[var(--secondary)]"
            animate={{
              rotate: [0, 90, 180],
              scale: [1, 1.15, 1],
            }}
            transition={{ duration: 8, repeat: Infinity }}
          >
            <Plus size={22} />
          </motion.div>

          <motion.div
            className="absolute right-[17%] bottom-[17%] z-20 text-[var(--accent)]"
            animate={{ rotate: 360 }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <Cross size={22} />
          </motion.div>

          <motion.div
            className="absolute right-[30%] top-[13%] z-20 text-[var(--secondary)]"
            animate={{
              opacity: [0.3, 1, 0.3],
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <Sparkles size={20} />
          </motion.div>

          <motion.div
            className="absolute bottom-[13%] left-[35%] z-20 text-[var(--accent)]"
            animate={{
              y: [0, -12, 0],
              opacity: [0.4, 1, 0.4],
            }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            <Activity size={22} />
          </motion.div>
        </div>
      </div>

      {/* BOTTOM ACCENT */}
      <motion.div
        className="absolute bottom-0 left-0 h-[3px] bg-[image:var(--button-gradient)]"
        initial={{ width: "0%" }}
        animate={{ width: "100%" }}
        transition={{ duration: 1.8, delay: 0.5 }}
      />

      {/* POPUP */}
      <Popup
        isOpen={popupOpen}
        onClose={() => setPopupOpen(false)}
      />
    </section>
  );
}
