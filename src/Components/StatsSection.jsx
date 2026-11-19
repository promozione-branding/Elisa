"use client";

import { useEffect, useRef, useState } from "react";
import {
  motion,
  useInView,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";
import { Plus_Jakarta_Sans } from "next/font/google";
import { Boxes, Factory, Users, Award } from "lucide-react";

const font = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const ease = [0.22, 1, 0.36, 1];

const stats = [
  {
    number: 10,
    suffix: "+",
    label: ["Pharmaceutical", "Product Categories"],
    Icon: Boxes,
  },
  {
    number: 5,
    suffix: "+",
    label: ["Wholesale", "Trading Partner"],
    Icon: Factory,
  },
  {
    number: 1000,
    suffix: "+",
    label: ["Customer-Oriented", "Approach"],
    Icon: Users,
  },
  {
    number: 30,
    suffix: "+",
    label: ["Diverse", "Product Range"],
    Icon: Award,
  },
];

function useCount(target, go, delay, reduce) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!go) return;

    if (reduce) {
      setValue(target);
      return;
    }

    let raf;
    let startTime = null;

    const tick = (time) => {
      if (startTime === null) startTime = time + delay * 1000;

      const progress = Math.min(
        Math.max((time - startTime) / 1800, 0),
        1
      );

      setValue(
        Math.round(
          target *
            (progress === 1
              ? 1
              : 1 - Math.pow(2, -10 * progress))
        )
      );

      if (progress < 1) {
        raf = requestAnimationFrame(tick);
      }
    };

    raf = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(raf);
  }, [go, target, delay, reduce]);

  return value;
}

function StatCard({ s, i, inView, reduce }) {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);

  const rotateY = useSpring(
    useTransform(mx, [-1, 1], [-7, 7]),
    { stiffness: 150, damping: 16 }
  );

  const rotateX = useSpring(
    useTransform(my, [-1, 1], [6, -6]),
    { stiffness: 150, damping: 16 }
  );

  const delay = 0.3 + i * 0.15;
  const value = useCount(s.number, inView, delay, reduce);

  const onMove = (e) => {
    const bounds = e.currentTarget.getBoundingClientRect();

    mx.set(((e.clientX - bounds.left) / bounds.width) * 2 - 1);
    my.set(((e.clientY - bounds.top) / bounds.height) * 2 - 1);
  };

  const onLeave = () => {
    mx.set(0);
    my.set(0);
  };

  return (
    <motion.div
      className="h-full"
      initial={{ opacity: 0, y: 55 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        delay: delay,
        duration: 0.8,
        ease,
      }}
    >
      <motion.div
        className="group relative h-full overflow-hidden rounded-[30px] border
         border-white/90 bg-gradient-to-br from-white/95 via-[#F1FAFC]/95 to-[#DCEFF5]/95
         p-3 shadow-[0_18px_45px_rgba(11,45,80,0.10)] transition-shadow duration-500
         hover:shadow-[0_30px_60px_rgba(8,118,173,0.20)] sm:min-h-[300px] sm:p-4"
        style={{
          rotateX,
          rotateY,
          transformPerspective: 1000,
        }}
        whileHover={{
          y: -9,
          scale: 1.02,
        }}
        transition={{
          type: "spring",
          stiffness: 220,
          damping: 18,
        }}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
      >
        {/* Decorative corner ribbon */}
        <svg
          className="absolute right-0 top-0"
          width="75"
          height="75"
          viewBox="0 0 75 75"
          fill="none"
        >
          <path
            d="M0 0H67C73 0 76 5 73 11C64 42 41 65 0 75C17 48 15 22 0 0Z"
            fill="url(#stat-ribbon)"
          />
          <defs>
            <linearGradient
              id="stat-ribbon"
              x1="0"
              y1="0"
              x2="75"
              y2="75"
            >
              <stop stopColor="#0876AD" />
              <stop offset="1" stopColor="#0797A5" />
            </linearGradient>
          </defs>
        </svg>

        {/* Light effect */}
        {!reduce && (
          <motion.div
            className="pointer-events-none absolute inset-y-0 -left-24 w-24 bg-gradient-to-r from-transparent via-white/80 to-transparent"
            animate={{ x: [0, 430] }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
              repeatDelay: 6 + i * 1.2,
              delay: 2 + i * 0.8,
              ease: "easeInOut",
            }}
          />
        )}

        {/* Hover glow */}
        <div
          className="absolute inset-0
          bg-[radial-gradient(circle_at_50%_45%,rgba(8,118,173,0.14),transparent_65%)]
          opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        />

        {/* Card Content */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center">

          {/* Icon */}
          <motion.div
            className="mb-3 text-[#0876AD] sm:mb-5"
            animate={
              reduce
                ? undefined
                : { y: [0, -5, 0] }
            }
            transition={{
              duration: 3.4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.35,
            }}
          >
            <s.Icon
              size={20}
              strokeWidth={1.5}
              className="transition-transform duration-500 group-hover:rotate-[-8deg]
              group-hover:scale-110 sm:h-[46px] sm:w-[46px]"
            />
          </motion.div>

          {/* Number */}
          <div
            className="text-[42px] font-extrabold italic leading-none tracking-[-0.04em]
            text-[#0B2D50] transition-colors duration-300
            group-hover:text-[#0797A5] sm:text-[48px]"
          >
            {value.toLocaleString("en-IN")}
            {s.suffix}
          </div>

          {/* Divider */}
          <span className="mt-5 h-[3px] w-[65px] rounded-full bg-gradient-to-r from-[#0876AD] to-[#0797A5] transition-all duration-500 group-hover:w-[120px]" />

          {/* Label */}
          <p
            className="mt-5 text-center text-[15px] font-semibold italic
            leading-7 text-[#0B2D50] sm:text-[18px] sm:leading-8"
          >
            {s.label[0]}
            <br />
            {s.label[1]}
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function StatsSection() {
  const wrap = useRef(null);

  const inView = useInView(wrap, {
    once: true,
    amount: 0.2,
  });

  const reduce = useReducedMotion();

  return (
    <section
      ref={wrap}
      className={`${font.className} relative isolate w-full overflow-hidden
      bg-gradient-to-br from-[#E8F7FA] via-[#F5FBFD] to-[#E1F2F7]
      px-5 py-16 sm:px-8 sm:py-10 lg:px-12 lg:py-15`}
      aria-label="Our strength in numbers"
    >
      {/* Background decorative lights */}
      <div
        className="pointer-events-none absolute -left-32 top-10 -z-10
        h-[350px] w-[350px] rounded-full bg-[#0876AD]/10 blur-[100px]"
      />

      <div
        className="pointer-events-none absolute -right-32 bottom-0 -z-10
        h-[350px] w-[350px] rounded-full bg-[#0797A5]/10 blur-[110px]"
      />

      {/* Abstract waves */}
      <svg
        className="pointer-events-none absolute bottom-0 left-0 -z-10 h-auto w-full opacity-70"
        viewBox="0 0 1440 250"
        fill="none"
        preserveAspectRatio="none"
      >
        <motion.path
          d="M0 180C280 110 450 100 720 160C980 220 1200 160 1440 70V250H0Z"
          fill="#D5EDF4"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 0.8 } : {}}
          transition={{ duration: 1.5 }}
        />

        <motion.path
          d="M0 215C300 145 550 150 800 190C1060 230 1250 150 1440 110V250H0Z"
          fill="#BBDCEB"
          initial={{ opacity: 0, x: 80 }}
          animate={inView ? { opacity: 0.6, x: 0 } : {}}
          transition={{ duration: 1.5, ease }}
        />
      </svg>

      <div className="relative mx-auto max-w-[1400px]">

        {/* HEADING */}
        <div className="mb-7 flex flex-col items-center text-center sm:mb-16">

          <motion.div
            className="mb-4 flex items-center gap-4"
            initial={{ opacity: 0, y: 15 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease }}
          >
            <span className="h-[2px] w-8 bg-[#0797A5] sm:w-12" />

            <span className="text-[10px] font-bold tracking-[0.2em] text-[#0876AD] sm:text-[15px] sm:tracking-[0.32em]">
              OUR STRENGTH IN NUMBERS
            </span>

            <span className="h-[2px] w-8 bg-[#0797A5] sm:w-12" />
          </motion.div>

          <h2 className="flex flex-wrap justify-center gap-x-2 text-[30px] font-extrabold italic leading-tight tracking-[-0.03em] text-[#0B2D50] sm:gap-x-4 sm:text-[46px] md:text-[54px] lg:text-[58px]">
            {["A Trusted", "Pharmaceutical", "Partner"].map(
              (word, index) => (
                <span
                  key={word}
                  className="overflow-hidden pb-1"
                >
                  <motion.span
                    className={`block ${
                      index === 1
                        ? "bg-gradient-to-r from-[#0876AD] via-[#168DBB] to-[#0797A5] bg-clip-text text-transparent"
                        : ""
                    }`}
                    initial={{ y: "110%" }}
                    animate={inView ? { y: 0 } : {}}
                    transition={{
                      delay: 0.2 + index * 0.14,
                      duration: 0.85,
                      ease,
                    }}
                  >
                    {word}
                  </motion.span>
                </span>
              )
            )}
          </h2>

          <motion.div
            className="mt-4 h-[4px] w-24 rounded-full bg-gradient-to-r from-[#0876AD] to-[#0797A5] sm:w-36"
            initial={{ width: 0, opacity: 0 }}
            animate={inView ? { width: 144, opacity: 1 } : {}}
            transition={{
              delay: 0.8,
              duration: 0.9,
              ease,
            }}
          />
        </div>

        {/* STAT CARDS */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4 lg:gap-7">
          {stats.map((s, i) => (
            <StatCard
              key={s.label[0]}
              s={s}
              i={i}
              inView={inView}
              reduce={reduce}
            />
          ))}
        </div>
      </div>

      {/* Bottom accent */}
      <div className="absolute bottom-0 left-0 h-[3px] w-full bg-gradient-to-r from-transparent via-[#0797A5] to-transparent" />
    </section>
  );
}