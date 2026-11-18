
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
import ContactPopup from "./Popup";
import { useFormState } from "react-dom";

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

    const [showPopup, setShowPopup] = useState(false);
  return (
    <section className="relative isolate overflow-hidden bg-[#f5fbfc] text-[#102d49]">

      {/* BACKGROUND */}
      <div className="absolute inset-0 -z-30 bg-gradient-to-br from-white via-[#eefaff] to-[#d8f2f5]" />

      <div className="absolute -right-32 top-10 -z-20 h-[600px] w-[600px] rounded-full bg-[#8ed9e7]/30 blur-[110px]" />
      <div className="absolute -bottom-48 -left-32 -z-20 h-[500px] w-[500px] rounded-full bg-[#d9edcf]/40 blur-[110px]" />

      {/* SOFT BACKGROUND WAVES */}
      <svg
        className="pointer-events-none absolute bottom-0 left-0 -z-10 h-[300px] w-full opacity-60"
        viewBox="0 0 1440 300"
        fill="none"
        preserveAspectRatio="none"
      >
        <path
          d="M0 150C190 260 300 260 470 190C650 115 770 140 930 210C1100 285 1280 250 1440 130V300H0V150Z"
          fill="#b8eaf0"
          fillOpacity=".38"
        />
        <path
          d="M0 210C200 300 330 290 510 225C700 155 850 175 1010 235C1170 295 1310 275 1440 205"
          stroke="white"
          strokeWidth="3"
        />
      </svg>

      {/* MAIN CONTENT */}
      <div className="relative mx-auto grid min-h-[680px] max-w-[1600px] items-center px-5 pb-14 pt-24 sm:px-8 lg:min-h-[740px] lg:grid-cols-[0.94fr_1.06fr] lg:px-[5%] lg:pb-16 lg:pt-20">

        {/* LEFT CONTENT */}
        <motion.div
          className="relative z-20 max-w-[620px]"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.p
            variants={reveal}
            className="mb-6 flex items-center gap-3 text-sm font-semibold text-[#70a957] sm:text-base"
          >
            <span className="h-[2px] w-9 bg-[#70a957]" />
            Caring for Life. Committed to Health.
          </motion.p>

          <motion.h1
            variants={reveal}
            className="text-[43px] font-bold leading-[1.08] tracking-[-0.045em] text-[#102c50] sm:text-5xl lg:text-[66px]"
          >
            Trusted Medicines,
            <span className="relative mt-1 block text-[#075b91]">
              Healthier Tomorrow.
              <motion.span
                className="absolute -bottom-2 left-0 h-[4px] rounded-full bg-[#76b65e]"
                initial={{ width: 0 }}
                animate={{ width: "68%" }}
                transition={{ delay: 1, duration: 1, ease: "easeOut" }}
              />
            </span>
          </motion.h1>

          <motion.p
            variants={reveal}
            className="mt-8 max-w-[500px] text-[15px] leading-[1.95] text-[#687987] sm:text-base"
          >
            Elisa Biotech Pvt. Ltd. is committed to delivering
            high-quality, affordable medicines that improve
            healthcare and support better lives.
          </motion.p>

          {/* CTA */}
          <motion.div
            variants={reveal}
            className="mt-9 flex flex-wrap gap-4"
          >
            <Link
              href="/products"
              className="group inline-flex min-h-[58px] items-center gap-4 rounded-xl bg-gradient-to-r from-[#07518a] to-[#087e99] px-7 text-sm font-semibold text-white shadow-[0_14px_30px_rgba(7,81,138,0.2)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_38px_rgba(7,81,138,0.3)]"
            >
              Our Products
              <span className="grid h-9 w-9 place-items-center rounded-full bg-white/15 transition-all duration-300 group-hover:rotate-45 group-hover:bg-white group-hover:text-[#07518a]">
                <ArrowUpRight size={19} />
              </span>
            </Link>

            <button  onClick={() => setShowPopup(true)}
              className="group inline-flex min-h-[58px] items-center gap-3 rounded-xl border border-[#8198ac] bg-white/80 px-8 text-sm font-semibold text-[#173b5b] transition-all duration-300 hover:-translate-y-1 hover:border-[#07518a] hover:bg-[#07518a] hover:text-white"
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
            className="mt-12 grid max-w-[550px] grid-cols-3 border-t border-[#dce8e9] pt-7"
          >
            {highlights.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  variants={reveal}
                  className={`flex items-center gap-2 sm:gap-3 ${
                    index !== 0
                      ? "border-l border-[#dce8e9] pl-3 sm:pl-5"
                      : ""
                  }`}
                >
                  <motion.div
                    whileHover={{ rotate: 12, scale: 1.1 }}
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#b9dcae] bg-white/80 text-[#65a34c] sm:h-12 sm:w-12"
                  >
                    <Icon size={21} strokeWidth={1.8} />
                  </motion.div>

                  <div>
                    <h3 className="text-[10px] font-bold text-[#263b4b] sm:text-xs">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-[9px] text-[#75838e] sm:text-[11px]">
                      {item.subtitle}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>

        {/* RIGHT PRODUCT SHOWCASE */}
        <div className="relative mt-12 flex min-h-[440px] items-center justify-center sm:min-h-[540px] lg:mt-0 lg:min-h-[610px]">

          {/* GLOW */}
          <motion.div
            className="absolute left-1/2 top-[46%] h-[340px] w-[340px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#72d2e2]/35 blur-[75px] sm:h-[480px] sm:w-[480px]"
            animate={{
              scale: [1, 1.15, 1],
              opacity: [0.45, 0.8, 0.45],
            }}
            transition={{ duration: 7, repeat: Infinity }}
          />

          {/* CIRCULAR ARCH */}
          <motion.div
            className="absolute left-1/2 top-[44%] h-[320px] w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/90 shadow-[0_0_45px_rgba(85,187,208,0.15)] sm:h-[490px] sm:w-[490px] lg:h-[520px] lg:w-[520px]"
            animate={{ rotate: 360 }}
            transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
          />

          <motion.div
            className="absolute left-1/2 top-[44%] h-[280px] w-[280px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-[#67b2c3]/30 sm:h-[420px] sm:w-[420px] lg:h-[455px] lg:w-[455px]"
            animate={{ rotate: -360 }}
            transition={{ duration: 75, repeat: Infinity, ease: "linear" }}
          />

          {/* BOTANICAL DECORATION */}
          <div className="absolute bottom-[17%] left-[8%] z-[1] flex -rotate-12 gap-1 opacity-90">
            <div className="h-20 w-9 rotate-[-35deg] rounded-[100%_0_100%_0] bg-gradient-to-br from-[#a4d85c] to-[#287e48] shadow-lg sm:h-28 sm:w-12" />
            <div className="mt-5 h-24 w-10 rotate-[25deg] rounded-[100%_0_100%_0] bg-gradient-to-br from-[#c4e878] to-[#3d9855] shadow-lg sm:h-32 sm:w-14" />
            <div className="mt-10 h-16 w-8 rotate-[55deg] rounded-[100%_0_100%_0] bg-gradient-to-br from-[#8fce56] to-[#327d49] sm:h-24 sm:w-11" />
          </div>

          <div className="absolute bottom-[18%] right-[6%] z-[1] flex rotate-12 gap-1 opacity-90">
            <div className="h-20 w-9 rotate-[-35deg] rounded-[100%_0_100%_0] bg-gradient-to-br from-[#b5df69] to-[#39864c] shadow-lg sm:h-28 sm:w-12" />
            <div className="mt-6 h-24 w-10 rotate-[25deg] rounded-[100%_0_100%_0] bg-gradient-to-br from-[#d0ec8b] to-[#438e50] shadow-lg sm:h-32 sm:w-14" />
          </div>

          {/* MARBLE PEDESTAL */}
          <div className="absolute bottom-[7%] left-1/2 z-[2] h-[48px] w-[76%] -translate-x-1/2 rounded-[50%] border border-white bg-gradient-to-b from-white via-[#e5f1f3] to-[#9cbcc8] shadow-[0_18px_35px_rgba(31,98,117,0.2)] sm:bottom-[8%] sm:h-[70px]">
            <div className="absolute inset-x-[5%] top-1 h-[35%] rounded-[50%] bg-white/90 blur-[2px]" />
            <div className="absolute inset-x-[8%] bottom-[-12px] h-7 rounded-[50%] bg-[#75bdce]/25 blur-xl" />
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
            className="relative z-10 h-[390px] w-[95%] object-contain drop-shadow-[0_25px_25px_rgba(20,65,75,0.18)] sm:h-[500px] lg:h-[540px]"
          />

          {/* VITAMIN BADGE */}
          <motion.div
            animate={{ y: [0, -12, 0], rotate: [0, 3, 0] }}
            transition={{ duration: 4.5, repeat: Infinity }}
            className="absolute left-[2%] top-[20%] z-20 flex h-[82px] w-[82px] flex-col items-center justify-center rounded-full border border-[#ffe7a0] bg-gradient-to-br from-[#fff9cf] to-[#ffdc69] text-[#173b5b] shadow-[0_0_25px_rgba(255,211,86,0.4)] sm:left-[8%] sm:h-[100px] sm:w-[100px]"
          >
            <Pill size={23} />
            <span className="mt-1 text-xs font-bold">Vitamins</span>
          </motion.div>

          {/* MINERALS BADGE */}
          <motion.div
            animate={{ y: [0, 12, 0], rotate: [0, -3, 0] }}
            transition={{ duration: 5, repeat: Infinity }}
            className="absolute right-[1%] top-[38%] z-20 flex h-[78px] w-[78px] flex-col items-center justify-center rounded-full border border-[#ffe7a0] bg-gradient-to-br from-[#fff9cf] to-[#ffdc69] text-[#173b5b] shadow-[0_0_25px_rgba(255,211,86,0.4)] sm:right-[3%] sm:h-[96px] sm:w-[96px]"
          >
            <Dna size={23} />
            <span className="mt-1 text-xs font-bold">Minerals</span>
          </motion.div>

          {/* IMMUNITY BADGE */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
            className="absolute bottom-[23%] right-[3%] z-20 flex h-[82px] w-[82px] flex-col items-center justify-center rounded-full border border-[#ffe7a0] bg-gradient-to-br from-[#fff9cf] to-[#ffdc69] text-[#173b5b] shadow-[0_0_25px_rgba(255,211,86,0.4)] sm:h-[100px] sm:w-[100px]"
          >
            <HeartPulse size={24} />
            <span className="mt-1 text-center text-[11px] font-bold leading-tight">
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
            className="absolute right-0 top-[9%] z-30 hidden items-center gap-3 rounded-2xl border border-white bg-white/90 p-4 shadow-[0_15px_40px_rgba(22,82,110,0.13)] backdrop-blur-xl sm:flex"
          >
            <div className="grid h-11 w-11 place-items-center rounded-xl bg-[#eaf6ed] text-[#65a34c]">
              <ShieldCheck size={23} />
            </div>
            <div>
              <p className="text-xs font-bold text-[#183d59]">Quality Assured</p>
              <p className="mt-1 text-[10px] text-[#82919b]">Trusted Healthcare</p>
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
            className="absolute bottom-[15%] left-0 z-30 hidden items-center gap-3 rounded-2xl border border-white bg-white/90 p-4 shadow-[0_15px_40px_rgba(22,82,110,0.13)] backdrop-blur-xl sm:flex"
          >
            <div className="grid h-11 w-11 place-items-center rounded-xl bg-[#eaf5fb] text-[#0876aa]">
              <FlaskConical size={23} />
            </div>
            <div>
              <p className="text-xs font-bold text-[#183d59]">Advanced Research</p>
              <p className="mt-1 text-[10px] text-[#82919b]">Better Healthcare</p>
            </div>
          </motion.div>

          {/* FLOATING MEDICAL DETAILS */}
          <motion.div
            className="absolute left-[19%] top-[11%] z-20 text-[#75b65e]"
            animate={{ rotate: [0, 90, 180], scale: [1, 1.15, 1] }}
            transition={{ duration: 8, repeat: Infinity }}
          >
            <Plus size={25} />
          </motion.div>

          <motion.div
            className="absolute right-[17%] bottom-[17%] z-20 text-[#65b2c4]"
            animate={{ rotate: 360 }}
            transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
          >
            <Cross size={24} />
          </motion.div>

          <motion.div
            className="absolute right-[30%] top-[13%] z-20 text-[#70b65d]"
            animate={{ opacity: [0.3, 1, 0.3], scale: [0.8, 1.2, 0.8] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <Sparkles size={22} />
          </motion.div>

          <motion.div
            className="absolute bottom-[13%] left-[35%] z-20 text-[#2b94b9]"
            animate={{ y: [0, -12, 0], opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            <Activity size={24} />
          </motion.div>

        </div>
      </div>

      {/* BOTTOM ACCENT */}
      <motion.div
        className="absolute bottom-0 left-0 h-[3px] bg-gradient-to-r from-[#70a957] via-[#075b91] to-[#8dd6e3]"
        initial={{ width: "0%" }}
        animate={{ width: "100%" }}
        transition={{ duration: 1.8, delay: 0.5 }}
      />

       {showPopup && (
        <ContactPopup
          onClose={() => setShowPopup(false)}
        />
      )}
    </section>
  );
}
