
"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Plus_Jakarta_Sans } from "next/font/google";
import {
  ArrowRight,
  Coins,
  Pill,
  PackageOpen,
  ShieldCheck,
  Handshake,
} from "lucide-react";

const font = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

/* ------------------------------------------------------------------ */
/* DATA                                                                */
/* ------------------------------------------------------------------ */

const items = [
  {
    label: ["Pharmaceutical", "Tablets"],
    Icon: Coins,
    title: "Pharmaceutical Tablets",
    text: "A comprehensive range of high-quality pharmaceutical tablets, sourced from reliable and certified manufacturers.",
    points: [
      "Wide Therapeutic Range",
      "WHO-GMP Compliant",
      "Safe & Effective Formulations",
      "Bulk & Competitive Supply",
    ],
    cta: "View Products",
    href: "/products",
    scene: "tablets",
  },
  {
    label: ["Allopathic", "Tablets"],
    Icon: Coins,
    title: "Allopathic Tablets",
    text: "Allopathic tablets for everyday and specialty therapies, supplied in dependable bulk quantities.",
    points: [
      "Trusted Allopathic Range",
      "Consistent Batch Quality",
      "Quick Order Turnaround",
      "Competitive Wholesale Pricing",
    ],
    cta: "View Products",
    href: "/products",
    scene: "caplets",
  },
  {
    label: ["Pharmaceutical", "Capsules"],
    Icon: Pill,
    title: "Pharmaceutical Capsules",
    text: "Capsules across multiple therapeutic categories, ready to support your wholesale requirements.",
    points: [
      "Hard & Soft Capsule Options",
      "Multiple Strengths Available",
      "Hygienic Sealed Packaging",
      "Flexible Order Quantities",
    ],
    cta: "View Products",
    href: "/products",
    scene: "capsules",
  },
  {
    label: ["Wholesale", "Trading"],
    Icon: PackageOpen,
    title: "Wholesale Trading",
    text: "One partner for tablets, allopathic tablets and capsules, with dependable supply and prompt enquiry support.",
    points: [
      "Single-Source Convenience",
      "Reliable Dispatch & Logistics",
      "Dedicated Enquiry Support",
      "Long-Term Supply Partnerships",
    ],
    cta: "Contact Us",
    href: "/contact-us",
    scene: "boxes",
  },
];

const ease = [0.22, 1, 0.36, 1];
const STEP = 44;
const CENTER_ANGLE = (i) => -66 + i * STEP;
const NODE_X = [1432, 1480, 1523, 1570];
const TRACK_START = 1383;

/* ------------------------------------------------------------------ */
/* GEOMETRY                                                            */
/* ------------------------------------------------------------------ */

const rad = (d) => (d * Math.PI) / 180;

const pt = (r, a) =>
  `${(r * Math.cos(rad(a))).toFixed(1)} ${(r * Math.sin(rad(a))).toFixed(1)}`;

function sector(r1, r2, a1, a2, p = 10) {
  const ri = r1 + p;
  const ro = r2 - p;
  const di = (p / ri) * (180 / Math.PI);
  const dO = (p / ro) * (180 / Math.PI);

  return `M${pt(ro, a1 + dO)} A${ro} ${ro} 0 0 1 ${pt(
    ro,
    a2 - dO
  )} L${pt(ri, a2 - di)} A${ri} ${ri} 0 0 0 ${pt(ri, a1 + di)} Z`;
}

const basePaths = items.map((_, i) =>
  sector(168, 345, CENTER_ANGLE(i) - 20, CENTER_ANGLE(i) + 20)
);

const highlightPath = sector(
  158,
  358,
  CENTER_ANGLE(0) - 21,
  CENTER_ANGLE(0) + 21
);

const labelPos = (i) => {
  const a = rad(CENTER_ANGLE(i));
  return {
    left: 400 + 258 * Math.cos(a),
    top: 400 + 258 * Math.sin(a),
  };
};

/* ------------------------------------------------------------------ */
/* SMALL PARTS                                                         */
/* ------------------------------------------------------------------ */

function Mortar({ size = 100 }) {
  return (
    <svg width={size} height={size} viewBox="-50 -50 100 100" fill="none">
      <rect
        x="2"
        y="-38"
        width="13"
        height="38"
        rx="6.5"
        transform="rotate(32 8 -10)"
        fill="#fff"
      />
      <path
        d="M-38 -4H38C38 24 20 40 0 40S-38 24 -38 -4Z"
        fill="#fff"
      />
      <rect x="-16" y="40" width="32" height="7" rx="3" fill="#fff" />
      <rect x="-4" y="6" width="8" height="26" rx="2" fill="#0876AD" />
      <rect x="-13" y="15" width="26" height="8" rx="2" fill="#0876AD" />
    </svg>
  );
}

function Check({ delay = 0 }) {
  return (
    <span className="grid h-[26px] w-[26px] shrink-0 place-items-center rounded-full bg-[#0797A5]">
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
        <motion.path
          d="M5 12.5l4.5 4.5L19 7"
          stroke="#fff"
          strokeWidth="3.4"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ delay: delay + 0.25, duration: 0.45, ease }}
        />
      </svg>
    </span>
  );
}

/* ------------------------------------------------------------------ */
/* PRODUCT ILLUSTRATIONS                                               */
/* ------------------------------------------------------------------ */

const Tab = ({
  x,
  y,
  r = 60,
  rot = 0,
  score = true,
  blur = 0,
  o = 1,
}) => (
  <g
    transform={`translate(${x} ${y}) rotate(${rot})`}
    opacity={o}
    style={blur ? { filter: `blur(${blur}px)` } : undefined}
  >
    <ellipse cx="0" cy={r * 0.26} rx={r} ry={r * 0.62} fill="#b9c9d6" />
    <ellipse cx="0" cy="0" rx={r} ry={r * 0.62} fill="url(#eb-tab)" />

    {score && (
      <path
        d={`M${-r * 0.88} ${r * 0.06}L${r * 0.88} ${-r * 0.1}`}
        stroke="#c2d1dc"
        strokeWidth="3.5"
        strokeLinecap="round"
      />
    )}
  </g>
);

const Caplet = ({
  x,
  y,
  l = 150,
  w = 62,
  rot = 0,
  c = "#fff",
  blur = 0,
  o = 1,
}) => (
  <g
    transform={`translate(${x} ${y}) rotate(${rot})`}
    opacity={o}
    style={blur ? { filter: `blur(${blur}px)` } : undefined}
  >
    <rect
      x={-l / 2}
      y={-w / 2 + 6}
      width={l}
      height={w}
      rx={w / 2}
      fill="#aebfcd"
    />
    <rect
      x={-l / 2}
      y={-w / 2}
      width={l}
      height={w}
      rx={w / 2}
      fill={c}
    />
    <rect
      x={-l / 2 + 14}
      y={-w / 2 + 8}
      width={l - 40}
      height="8"
      rx="4"
      fill="#fff"
      opacity=".55"
    />
  </g>
);

const Cap = ({
  x,
  y,
  l = 150,
  w = 56,
  rot = 0,
  a = "#0876AD",
  b = "#fff",
}) => (
  <g transform={`translate(${x} ${y}) rotate(${rot})`}>
    <rect
      x={-l / 2}
      y={-w / 2 + 6}
      width={l}
      height={w}
      rx={w / 2}
      fill="#9db3c3"
      opacity=".7"
    />
    <rect
      x={-l / 2}
      y={-w / 2}
      width={l}
      height={w}
      rx={w / 2}
      fill={b}
    />
    <path
      d={`M0 ${-w / 2}H${l / 2 - w / 2}A${w / 2} ${w / 2} 0 0 1 ${
        l / 2 - w / 2
      } ${w / 2}H0Z`}
      fill={a}
    />
    <rect
      x={-l / 2 + 12}
      y={-w / 2 + 8}
      width={l / 2 - 12}
      height="7"
      rx="3.5"
      fill="#fff"
      opacity=".6"
    />
  </g>
);

const Box = ({ x, y, s = 80, h = 90, tone = "#fff" }) => (
  <g>
    <path
      d={`M${x} ${y}L${x + s} ${y + s / 2}L${x} ${y + s}L${x - s} ${
        y + s / 2
      }Z`}
      fill={tone}
    />
    <path
      d={`M${x - s} ${y + s / 2}L${x} ${y + s}V${y + s + h}L${x - s} ${
        y + s / 2 + h
      }Z`}
      fill="#d6e3ec"
    />
    <path
      d={`M${x} ${y + s}L${x + s} ${y + s / 2}V${y + s / 2 + h}L${x} ${
        y + s + h
      }Z`}
      fill="#b7cbd9"
    />
    <path
      d={`M${x} ${y + s}L${x + s} ${y + s / 2}V${y + s / 2 + 22}L${x} ${
        y + s + 22
      }Z`}
      fill="#0876AD"
    />
    <path
      d={`M${x - s} ${y + s / 2}L${x} ${y + s}V${y + s + 22}L${x - s} ${
        y + s / 2 + 22
      }Z`}
      fill="#0797A5"
    />
  </g>
);

/* ------------------------------------------------------------------ */
/* SCENE                                                               */
/* ------------------------------------------------------------------ */

function Scene({ type }) {
  return (
    <svg
      viewBox="0 0 330 560"
      className="h-full w-full"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <linearGradient id="eb-sceneBg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#E8F7FA" />
          <stop offset="1" stopColor="#b8cedd" />
        </linearGradient>

        <radialGradient id="eb-tab" cx=".35" cy=".3" r=".9">
          <stop offset="0" stopColor="#fff" />
          <stop offset="1" stopColor="#dfe8ef" />
        </radialGradient>
      </defs>

      <rect width="330" height="560" fill="url(#eb-sceneBg)" />

      {type === "tablets" && (
        <>
          <Tab x={280} y={90} r={46} blur={5} o={0.6} />
          <Tab x={70} y={140} r={60} blur={6} o={0.55} score={false} />
          <Tab x={215} y={260} r={105} rot={-8} />
          <Tab x={250} y={440} r={95} rot={6} />
          <Tab x={70} y={500} r={62} rot={-10} blur={2} />
        </>
      )}

      {type === "caplets" && (
        <>
          <Caplet x={250} y={80} l={120} w={48} rot={-30} blur={5} o={0.55} />
          <Caplet x={150} y={190} rot={-24} />
          <Caplet x={210} y={320} c="#cfe9f7" rot={18} />
          <Caplet x={130} y={450} rot={-12} />
          <Caplet
            x={270}
            y={500}
            l={110}
            w={50}
            c="#cfe9f7"
            rot={30}
            blur={2}
          />
        </>
      )}

      {type === "capsules" && (
        <>
          <Cap x={250} y={90} l={110} w={42} rot={40} />
          <Cap x={160} y={230} l={190} w={70} rot={-28} />
          <Cap x={190} y={380} l={190} w={70} rot={22} a="#0876AD" />
          <Cap x={110} y={500} l={150} w={58} rot={-14} a="#0797A5" />
        </>
      )}

      {type === "boxes" && (
        <>
          <Box x={230} y={80} s={70} h={70} />
          <Box x={140} y={200} s={92} h={100} />
          <Box x={230} y={340} s={86} h={96} />
          <Box x={100} y={420} s={64} h={64} />
        </>
      )}
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/* ANIMATION VARIANTS                                                  */
/* ------------------------------------------------------------------ */

const panel = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
  exit: {
    transition: { staggerChildren: 0.03, staggerDirection: -1 },
  },
};

const rise = {
  hidden: { opacity: 0, y: 26, filter: "blur(6px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.6, ease },
  },
  exit: {
    opacity: 0,
    y: -14,
    filter: "blur(4px)",
    transition: { duration: 0.2 },
  },
};

const rowIn = {
  hidden: { opacity: 0, x: 34 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease },
  },
  exit: {
    opacity: 0,
    x: -20,
    transition: { duration: 0.15 },
  },
};

/* ------------------------------------------------------------------ */
/* MAIN COMPONENT                                                      */
/* ------------------------------------------------------------------ */

export default function WhyChooseUs() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [scale, setScale] = useState(0);

  const wrap = useRef(null);
  const reduce = useReducedMotion();

  const item = items[active];

  useEffect(() => {
    const el = wrap.current;
    if (!el) return;

    const ro = new ResizeObserver(([e]) =>
      setScale(e.contentRect.width / 1928)
    );

    ro.observe(el);

    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    if (paused || reduce) return;

    const t = setTimeout(
      () => setActive((i) => (i + 1) % items.length),
      7000
    );

    return () => clearTimeout(t);
  }, [active, paused, reduce]);

  const words = item.title.split(" ");
  const last = words.pop();

  return (
    <section className={`${font.className} w-full bg-[#E8F7FA]`}>
      <style>{`
        @keyframes eb-spin {
          to { transform: rotate(360deg); }
        }

        @keyframes eb-ripple {
          0% { transform: scale(.8); opacity: .45; }
          100% { transform: scale(1.7); opacity: 0; }
        }

        @keyframes eb-glow {
          0%,100% { opacity: .35; }
          50% { opacity: .85; }
        }

        .eb-o {
          transform-box: view-box;
          transform-origin: 0 0;
        }

        .eb-spin {
          animation: eb-spin 38s linear infinite;
        }

        .eb-spin-rev {
          animation: eb-spin 26s linear infinite reverse;
        }

        .eb-ripple {
          animation: eb-ripple 3.6s ease-out infinite;
        }

        .eb-glow {
          animation: eb-glow 2.8s ease-in-out infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .eb-spin,
          .eb-spin-rev,
          .eb-ripple,
          .eb-glow {
            animation: none;
          }
        }
      `}</style>

      <div
        ref={wrap}
        className="relative w-full overflow-hidden"
        style={{ aspectRatio: "1928 / 815" }}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div
          className="absolute left-0 top-0 h-[815px] w-[1928px] origin-top-left overflow-hidden"
          style={{
            transform: `scale(${scale})`,
            opacity: scale ? 1 : 0,
            background:
              "linear-gradient(100deg,#FFFFFF 0%,#F5FBFD 35%,#E8F7FA 62%,#DCEFF5 100%)",
          }}
        >
          {/* ---------- BACKGROUND ---------- */}

          <svg
            className="absolute inset-0"
            width="1928"
            height="815"
            viewBox="0 0 1928 815"
            fill="none"
          >
            <defs>
              <linearGradient id="eb-swoosh" x1="0" x2="1">
                <stop offset="0" stopColor="#0876AD" stopOpacity="0" />
                <stop offset=".5" stopColor="#0876AD" />
                <stop offset="1" stopColor="#0797A5" />
              </linearGradient>

              <linearGradient id="eb-wave" x1="0" x2="1">
                <stop offset="0" stopColor="#DCEFF5" />
                <stop offset="1" stopColor="#0797A5" />
              </linearGradient>

              <filter id="eb-bokeh">
                <feGaussianBlur stdDeviation="28" />
              </filter>
            </defs>

            <circle
              cx="1200"
              cy="60"
              r="110"
              fill="#fff"
              opacity=".8"
              filter="url(#eb-bokeh)"
            />

            <circle
              cx="900"
              cy="30"
              r="90"
              fill="#DCEFF5"
              opacity=".7"
              filter="url(#eb-bokeh)"
            />

            <circle
              cx="1820"
              cy="30"
              r="80"
              fill="#0797A5"
              opacity=".25"
              filter="url(#eb-bokeh)"
            />

            {/* Large pale arc */}

            <path
              d="M300 0C560 20 760 130 800 330C830 520 700 700 480 815H0V0Z"
              fill="#fff"
              opacity=".9"
            />

            <path
              d="M300 0C560 20 760 130 800 330"
              stroke="url(#eb-swoosh)"
              strokeWidth="5"
              opacity=".85"
            />

            {/* Bottom swooshes */}

            <path
              d="M0 815V770C120 730 240 700 380 700C250 715 120 760 70 815Z"
              fill="#DCEFF5"
              opacity=".8"
            />

            <path
              d="M1450 815C1620 760 1790 720 1928 712V815Z"
              fill="url(#eb-wave)"
              opacity=".9"
            />

            <path
              d="M0 740C140 690 280 690 420 700"
              stroke="#B8DCEB"
              strokeWidth="4"
              opacity=".7"
            />
          </svg>

          {/* ---------- LEFT COPY ---------- */}

          <motion.div
            className="absolute left-[89px] top-[104px] flex items-center gap-4"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease }}
          >
            <span className="text-[17px] font-bold tracking-[0.2em] text-[#0B2D50]">
              ELISA BIOTECH PVT. LTD.
            </span>

            <motion.span
              className="h-[3px] rounded-full bg-[#0797A5]"
              initial={{ width: 0 }}
              animate={{ width: 44 }}
              transition={{ delay: 0.5, duration: 0.7, ease }}
            />
          </motion.div>

          <motion.h1
            className="absolute left-[89px] top-[150px] text-[56px] font-extrabold leading-[58px] tracking-[-0.025em] text-[#0B2D50]"
            initial="hidden"
            animate="show"
            variants={{
              show: {
                transition: {
                  staggerChildren: 0.12,
                  delayChildren: 0.15,
                },
              },
            }}
          >
            {[
              "Your Pharmaceutical",
              "Wholesale Trading",
              "Partner",
            ].map((line, i) => (
              <span key={line} className="block overflow-hidden pb-[2px]">
                <motion.span
                  className={`block ${
                    i === 1
                      ? "bg-gradient-to-r from-[#0876AD] to-[#0797A5] bg-clip-text text-transparent"
                      : ""
                  }`}
                  variants={{
                    hidden: { y: "110%" },
                    show: {
                      y: 0,
                      transition: { duration: 0.8, ease },
                    },
                  }}
                >
                  {line}
                </motion.span>
              </span>
            ))}
          </motion.h1>

          <motion.p
            className="absolute left-[89px] top-[338px] w-[470px] text-[20px] leading-[30px] text-[#526B80]"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.7, ease }}
          >
            A trusted wholesale trader for pharmaceutical tablets,
            allopathic tablets and pharmaceutical capsules.
          </motion.p>

          {/* ---------- BADGES ---------- */}

          {[
            { x: 65, Icon: ShieldCheck, t: ["Quality", "Assured"] },
            { x: 205, Icon: PackageOpen, t: ["Wide", "Range"] },
            { x: 350, Icon: Handshake, t: ["Reliable", "Supply"] },
          ].map(({ x, Icon, t }, i) => (
            <motion.div
              key={t[0]}
              className="absolute top-[455px] flex w-[120px] flex-col items-center"
              style={{ left: x }}
              initial={{ opacity: 0, y: 20, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                delay: 0.8 + i * 0.12,
                duration: 0.55,
                ease,
              }}
            >
              <motion.span
                animate={reduce ? undefined : { y: [0, -4, 0] }}
                transition={{
                  duration: 3 + i * 0.4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="text-black"
              >
                <Icon size={46} strokeWidth={1.7} />
              </motion.span>

              <span className="mt-2 text-center text-[18px] font-semibold leading-[22px] text-[#0B2D50]">
                {t[0]}
                <br />
                {t[1]}
              </span>
            </motion.div>
          ))}

          <span className="absolute left-[196px] top-[478px] h-[70px] w-px bg-[#C7DDE7]" />
          <span className="absolute left-[335px] top-[478px] h-[70px] w-px bg-[#C7DDE7]" />

          {/* ---------- READ MORE BUTTON ---------- */}

          <motion.div
            className="absolute left-[88px] top-[602px]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.6, ease }}
          >
            <Link
              href="/about-us"
              className="group relative flex h-[60px] w-[240px] items-center justify-between overflow-hidden rounded-full bg-gradient-to-r from-[#0876AD] to-[#0B2D50] pl-[34px] pr-[10px] text-[20px] font-semibold text-white shadow-[0_14px_30px_rgba(11,45,80,0.22)]"
            >
              <span className="relative z-10">Read More</span>

              <span className="relative z-10 grid h-[44px] w-[44px] place-items-center rounded-full bg-white text-[#0876AD] transition-transform duration-300 group-hover:translate-x-1">
                <ArrowRight size={22} strokeWidth={2.4} />
              </span>

              {!reduce && (
                <motion.span
                  className="absolute inset-y-0 -left-20 w-16 skew-x-[-20deg] bg-white/30"
                  animate={{ x: [0, 420] }}
                  transition={{
                    duration: 1.6,
                    repeat: Infinity,
                    repeatDelay: 3.4,
                    ease: "easeInOut",
                  }}
                />
              )}
            </Link>
          </motion.div>

          {/* ---------- WHEEL ---------- */}

          <div className="absolute left-[430px] top-[15px] h-[800px] w-[800px]">
            <svg
              viewBox="-400 -400 800 800"
              className="absolute inset-0 h-full w-full overflow-visible"
            >
              <defs>
                <linearGradient id="eb-glass" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0" stopColor="#FFFFFF" />
                  <stop offset="1" stopColor="#E8F7FA" />
                </linearGradient>

                <linearGradient id="eb-active" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0" stopColor="#0876AD" />
                  <stop offset="1" stopColor="#0797A5" />
                </linearGradient>

                <linearGradient id="eb-core" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0" stopColor="#0876AD" />
                  <stop offset="1" stopColor="#0B2D50" />
                </linearGradient>

                <filter
                  id="eb-shadow"
                  x="-30%"
                  y="-30%"
                  width="160%"
                  height="160%"
                >
                  <feDropShadow
                    dx="0"
                    dy="10"
                    stdDeviation="10"
                    floodColor="#0B2D50"
                    floodOpacity=".16"
                  />
                </filter>

                <filter id="eb-blurglow">
                  <feGaussianBlur stdDeviation="14" />
                </filter>
              </defs>

              <circle
                r="352"
                fill="#fff"
                opacity=".28"
                stroke="#fff"
                strokeOpacity=".8"
                strokeWidth="2"
              />

              <circle
                r="125"
                fill="#fff"
                opacity=".65"
                stroke="#D5E6EE"
                strokeWidth="2"
                filter="url(#eb-shadow)"
              />

              {/* Orbit ring */}

              <g className="eb-o eb-spin">
                <circle
                  r="182"
                  fill="none"
                  stroke="#0876AD"
                  strokeWidth="2"
                  strokeDasharray="200 940"
                />
                <circle cx="182" cy="0" r="7" fill="#0876AD" />
                <circle
                  cx="182"
                  cy="0"
                  r="14"
                  fill="#0876AD"
                  opacity=".25"
                />
              </g>

              <g className="eb-o eb-spin-rev">
                <circle
                  r="198"
                  fill="none"
                  stroke="#0797A5"
                  strokeWidth="1.5"
                  strokeDasharray="4 14"
                  opacity=".7"
                />
              </g>

              {/* Base segments */}

              {basePaths.map((d, i) => (
                <g
                  key={i}
                  role="button"
                  tabIndex={0}
                  aria-pressed={active === i}
                  aria-label={items[i].label.join(" ")}
                  onClick={() => setActive(i)}
                  onKeyDown={(e) =>
                    (e.key === "Enter" || e.key === " ") &&
                    setActive(i)
                  }
                  className="cursor-pointer outline-none transition-[filter,opacity] duration-300 hover:brightness-[0.96] focus-visible:brightness-95"
                  style={{ opacity: active === i ? 0 : 1 }}
                >
                  <path
                    d={d}
                    fill="url(#eb-glass)"
                    stroke="#F3F8FB"
                    strokeWidth="20"
                    strokeLinejoin="round"
                    filter="url(#eb-shadow)"
                  />
                  <path d={d} fill="url(#eb-glass)" />
                </g>
              ))}

              {/* Sliding selector */}

              <g
                className="pointer-events-none eb-o"
                style={{
                  transform: `rotate(${active * STEP}deg)`,
                  transition: reduce
                    ? "none"
                    : "transform 850ms cubic-bezier(.34,1.4,.5,1)",
                }}
              >
                <path
                  d={highlightPath}
                  fill="#0797A5"
                  filter="url(#eb-blurglow)"
                  className="eb-glow"
                />

                <path
                  d={highlightPath}
                  fill="url(#eb-active)"
                  stroke="url(#eb-active)"
                  strokeWidth="20"
                  strokeLinejoin="round"
                />

                <path
                  d={highlightPath}
                  fill="none"
                  stroke="#fff"
                  strokeOpacity=".55"
                  strokeWidth="2.5"
                />
              </g>

              {/* Center ripple */}

              <circle
                r="86"
                className="eb-o eb-ripple"
                fill="none"
                stroke="#0876AD"
                strokeWidth="2"
              />

              <circle
                r="86"
                className="eb-o eb-ripple"
                fill="none"
                stroke="#0797A5"
                strokeWidth="2"
                style={{ animationDelay: "1.8s" }}
              />

              <circle
                r="86"
                fill="url(#eb-core)"
                stroke="#fff"
                strokeWidth="4"
                filter="url(#eb-shadow)"
              />
            </svg>

            {/* Center mortar */}

            <motion.div
              className="pointer-events-none absolute left-[314px] top-[314px] grid h-[172px] w-[172px] place-items-center"
              animate={reduce ? undefined : { scale: [1, 1.07, 1] }}
              transition={{
                duration: 3.2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Mortar size={108} />
            </motion.div>

            {/* Wheel labels */}

            {items.map((it, i) => {
              const on = active === i;
              const { left, top } = labelPos(i);

              return (
                <div
                  key={i}
                  className="pointer-events-none absolute flex w-[170px] -translate-x-1/2 -translate-y-1/2 flex-col items-center"
                  style={{ left, top }}
                >
                  <motion.span
                    animate={{
                      scale: on ? 1.12 : 1,
                      y: on ? -2 : 0,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 260,
                      damping: 16,
                    }}
                    className={`transition-colors duration-500 ${
                      on ? "text-white" : "text-[#0876AD]"
                    }`}
                  >
                    <it.Icon size={50} strokeWidth={1.8} />
                  </motion.span>

                  <span
                    className={`mt-2 text-center text-[22px] font-semibold leading-[27px] transition-colors duration-500 ${
                      on ? "text-white" : "text-[#0B2D50]"
                    }`}
                  >
                    {it.label[0]}
                    <br />
                    {it.label[1]}
                  </span>
                </div>
              );
            })}
          </div>

          {/* ---------- RIGHT CARD ---------- */}

          <div
            className="absolute left-[1212px] top-[93px] h-[607px] w-[800px] overflow-hidden rounded-l-[90px] border border-white/80 shadow-[0_30px_70px_rgba(11,45,80,0.14)]"
            style={{
              background:
                "linear-gradient(120deg,rgba(255,255,255,.85),rgba(220,239,245,.85))",
            }}
          >
            {!reduce && (
              <motion.span
                className="absolute inset-y-0 -left-40 w-40 skew-x-[-18deg] bg-gradient-to-r from-transparent via-white/60 to-transparent"
                animate={{ x: [0, 1000] }}
                transition={{
                  duration: 2.6,
                  repeat: Infinity,
                  repeatDelay: 5,
                  ease: "easeInOut",
                }}
              />
            )}
          </div>

          {/* ---------- COUNTER + PROGRESS ---------- */}

          <div className="absolute left-[1277px] top-[128px] flex h-[28px] items-center text-[20px] font-semibold text-[#0876AD]">
            <span className="relative inline-block h-[28px] w-[30px] overflow-hidden">
              <AnimatePresence initial={false} mode="popLayout">
                <motion.span
                  key={active}
                  className="absolute left-0 top-0"
                  initial={{ y: 28, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -28, opacity: 0 }}
                  transition={{ duration: 0.4, ease }}
                >
                  {`0${active + 1}`}
                </motion.span>
              </AnimatePresence>
            </span>

            <span className="text-[#718699]">&nbsp;/ 04</span>
          </div>

          <div
            className="absolute top-[141px] h-[2px] rounded-full bg-[#C7DDE7]"
            style={{
              left: TRACK_START,
              width: 1570 - TRACK_START,
            }}
          />

          <motion.div
            className="absolute top-[141px] h-[2px] rounded-full bg-[#0797A5]"
            style={{ left: TRACK_START }}
            animate={{ width: NODE_X[active] - TRACK_START }}
            transition={{ duration: 0.7, ease }}
          />

          {NODE_X.map((x, i) => (
            <button
              key={x}
              type="button"
              aria-label={`Show ${items[i].title}`}
              aria-pressed={active === i}
              onClick={() => setActive(i)}
              className="absolute top-[131px] grid h-[22px] w-[22px] -translate-x-1/2 place-items-center rounded-full"
              style={{ left: x }}
            >
              <motion.span
                className="block rounded-full border-2"
                animate={{
                  width: i === active ? 18 : 16,
                  height: i === active ? 18 : 16,
                  backgroundColor:
                    i <= active ? "#0797A5" : "#FFFFFF",
                  borderColor:
                    i <= active ? "#0797A5" : "#C7DDE7",
                  boxShadow:
                    i === active
                      ? "0 0 0 6px rgba(7,151,165,0.2)"
                      : "0 0 0 0px rgba(7,151,165,0)",
                }}
              />
            </button>
          ))}

          {/* ---------- SWAPPING CONTENT ---------- */}

          <div className="absolute left-[1257px] top-0 h-[815px] w-[400px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                variants={panel}
                initial="hidden"
                animate="show"
                exit="exit"
                className="absolute inset-0"
              >
                <motion.h2
                  variants={rise}
                  className="absolute left-0 top-[186px] w-[460px] whitespace-nowrap text-[40px] font-bold leading-[52px] tracking-[-0.02em] text-[#0B2D50]"
                >
                  {words.join(" ")}
                  {words.length ? " " : ""}
                  <span className="text-black">{last}</span>
                </motion.h2>

                <motion.p
                  variants={rise}
                  className="absolute left-0 top-[262px] w-[385px] text-[20px] leading-[29px] text-[#526B80]"
                >
                  {item.text}
                </motion.p>

                <ul className="absolute left-0 top-[378px] flex flex-col gap-[13px]">
                  {item.points.map((p, i) => (
                    <motion.li
                      key={p}
                      variants={rowIn}
                      className="flex items-center gap-4 text-[19px] text-[#0B2D50]"
                    >
                      <Check delay={0.25 + i * 0.08} />
                      {p}
                    </motion.li>
                  ))}
                </ul>

                <motion.div
                  variants={rise}
                  className="absolute left-0 top-[566px]"
                >
                  <Link
                    href={item.href}
                    className="group flex h-[62px] items-center gap-6 rounded-full border-2 border-[#0876AD] bg-white/60 px-10 text-[20px] font-semibold text-[#0B2D50] transition-colors duration-300 hover:bg-[#0876AD] hover:text-white"
                  >
                    {item.cta}

                    <ArrowRight
                      size={24}
                      strokeWidth={2.2}
                      className="transition-transform duration-300 group-hover:translate-x-2"
                    />
                  </Link>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* ---------- PRODUCT IMAGE CAPSULE ---------- */}

          <div
            className="absolute left-[1625px] top-[130px] h-[545px] w-[340px] rotate-[14deg] rounded-[170px] p-[6px] shadow-[0_0_40px_rgba(8,118,173,0.25)]"
            style={{
              background:
                "linear-gradient(160deg,#FFFFFF,#0797A5 55%,#DCEFF5)",
            }}
          >
            <div className="relative h-full w-full overflow-hidden rounded-[164px] bg-[#E8F7FA]">
              <AnimatePresence mode="popLayout" initial={false}>
                <motion.div
                  key={item.scene}
                  className="absolute inset-0"
                  initial={{
                    clipPath: "circle(0% at 50% 60%)",
                    scale: 1.25,
                  }}
                  animate={{
                    clipPath: "circle(80% at 50% 60%)",
                    scale: 1,
                  }}
                  exit={{ opacity: 0.9 }}
                  transition={{ duration: 0.85, ease }}
                >
                  <motion.div
                    className="h-full w-full"
                    animate={
                      reduce
                        ? undefined
                        : { y: [0, -10, 0], rotate: [0, 1.2, 0] }
                    }
                    transition={{
                      duration: 7,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <Scene type={item.scene} />
                  </motion.div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
