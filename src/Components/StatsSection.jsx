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
  style: ["normal", "italic"],
  weight: ["400", "500", "600", "700", "800"],
});

// Optional: drop a transparent PNG of the flask / bottles / blister pack in
// /public and set the path here (e.g. "/images/stats-left-decor.png").
const DECOR_LEFT = null;

const ease = [0.22, 1, 0.36, 1];
const SKEW = -11;

const stats = [
  { number: 10, suffix: "+", label: ["Pharmaceutical", "Product Categories"], Icon: Boxes, x: 575, y: 228, w: 345, h: 348 },
  { number: 5, suffix: "+", label: ["Wholesale", "Trading Partner"], Icon: Factory, x: 950, y: 224, w: 345, h: 352 },
  { number: 1000, suffix: "+", label: ["Customer-Oriented", "Approach"], Icon: Users, x: 1325, y: 218, w: 350, h: 358 },
  { number: 30, suffix: "+", label: ["Diverse", "Product Range"], Icon: Award, x: 1708, y: 210, w: 350, h: 366 },
];

function useCount(target, go, delay, reduce) {
  const [v, setV] = useState(0);
  useEffect(() => {
    if (!go) return;
    if (reduce) {
      setV(target);
      return;
    }
    let raf;
    let t0 = null;
    const tick = (t) => {
      if (t0 === null) t0 = t + delay * 1000;
      const p = Math.min(Math.max((t - t0) / 1800, 0), 1);
      setV(Math.round(target * (p === 1 ? 1 : 1 - Math.pow(2, -10 * p))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [go, target, delay, reduce]);
  return v;
}

function StatCard({ s, i, inView, reduce }) {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rotateY = useSpring(useTransform(mx, [-1, 1], [-9, 9]), { stiffness: 150, damping: 16 });
  const rotateX = useSpring(useTransform(my, [-1, 1], [7, -7]), { stiffness: 150, damping: 16 });
  const delay = 0.45 + i * 0.16;
  const value = useCount(s.number, inView, delay, reduce);

  const onMove = (e) => {
    const b = e.currentTarget.getBoundingClientRect();
    mx.set(((e.clientX - b.left) / b.width) * 2 - 1);
    my.set(((e.clientY - b.top) / b.height) * 2 - 1);
  };
  const onLeave = () => {
    mx.set(0);
    my.set(0);
  };

  return (
    <motion.div
      className="absolute"
      style={{ left: s.x, top: s.y, width: s.w, height: s.h }}
      initial={{ opacity: 0, y: 90 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: 0.3 + i * 0.14, duration: 1, ease }}
    >
      <motion.div
        className="group relative h-full w-full cursor-default"
        style={{ rotateX, rotateY, transformPerspective: 1000 }}
        whileHover={{ y: -12, scale: 1.04 }}
        transition={{ type: "spring", stiffness: 220, damping: 18 }}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
      >
        {/* glass shell */}
        <div
          className="absolute inset-0 overflow-hidden rounded-[72px] border border-white/90 transition-shadow duration-500 group-hover:shadow-[0_34px_70px_rgba(14,140,150,0.28)]"
          style={{
            transform: `skewX(${SKEW}deg)`,
            background: "linear-gradient(150deg,rgba(255,255,255,.92) 0%,rgba(236,246,249,.72) 60%,rgba(223,240,244,.6) 100%)",
            boxShadow: "0 22px 50px rgba(40,100,130,0.14), inset 0 0 0 1px rgba(255,255,255,.6)",
          }}
        >
          {/* corner ribbon */}
          <motion.svg
            className="absolute right-[20px] top-[14px] origin-top-right"
            width="84"
            height="84"
            viewBox="0 0 84 84"
            initial={{ scale: 0, opacity: 0 }}
            animate={inView ? { scale: 1, opacity: 1 } : {}}
            transition={{ delay: delay + 0.2, duration: 0.8, ease }}
          >
            <defs>
              <linearGradient id={`eb-rib-${i}`} x1="0" y1="0" x2="1" y2="1">
                <stop offset="0" stopColor="#2ed0cc" />
                <stop offset="1" stopColor="#0a7f8f" />
              </linearGradient>
            </defs>
            <path d="M0 0H76C80 0 84 4 82 10C74 50 44 76 4 84C22 54 18 24 0 0Z" fill={`url(#eb-rib-${i})`} />
          </motion.svg>

          {/* periodic light sweep */}
          {!reduce && (
            <motion.span
              className="absolute inset-y-0 -left-24 w-24 bg-gradient-to-r from-transparent via-white/70 to-transparent"
              animate={{ x: [0, 520] }}
              transition={{ duration: 1.8, repeat: Infinity, repeatDelay: 6 + i * 1.2, delay: 2 + i * 0.8, ease: "easeInOut" }}
            />
          )}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_55%,rgba(18,190,190,0.2),transparent_65%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        </div>

        {/* content */}
        <div className="pointer-events-none absolute inset-0 flex flex-col items-center">
          <motion.div
            className="relative mt-[30px] text-[#0b7a85]"
            animate={reduce ? undefined : { y: [0, -6, 0] }}
            transition={{ duration: 3.4, repeat: Infinity, ease: "easeInOut", delay: i * 0.35 }}
          >
            <motion.span
              className="block transition-transform duration-500 group-hover:-rotate-[10deg] group-hover:scale-[1.18]"
            >
              <s.Icon size={92} strokeWidth={1.4} />
            </motion.span>
            {/* pulse once the counter lands */}
            <motion.span
              className="absolute inset-0 rounded-full border-2 border-[#12b5a6]"
              initial={{ scale: 0.6, opacity: 0 }}
              animate={inView && !reduce ? { scale: [0.6, 1.5], opacity: [0.6, 0] } : {}}
              transition={{ delay: delay + 1.8, duration: 0.9, ease: "easeOut" }}
            />
          </motion.div>

          <div className="mt-[16px] text-[76px] font-extrabold italic leading-[80px] tracking-[-0.03em] text-[#0b6676] transition-colors duration-300 group-hover:text-[#0eaaa9]">
            {value.toLocaleString("en-IN")}
            {s.suffix}
          </div>

          <span className="mt-[18px] h-[3px] w-[78px] rounded-full bg-[#0eaaa9] transition-all duration-500 group-hover:w-[150px]" />

          <p className="mt-[28px] text-center text-[26px] font-medium italic leading-[33px] text-[#101c27]">
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
  const [scale, setScale] = useState(0);
  const inView = useInView(wrap, { once: true, amount: 0.25 });
  const reduce = useReducedMotion();

  useEffect(() => {
    const el = wrap.current;
    if (!el) return;
    const ro = new ResizeObserver(([e]) => setScale(e.contentRect.width / 2172));
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const drift = (x, y, d) =>
    reduce ? {} : { animate: { x: [0, x, 0], y: [0, y, 0] }, transition: { duration: d, repeat: Infinity, ease: "easeInOut" } };

  return (
    <section className={`${font.className} w-full bg-white`} aria-label="Our strength in numbers">
      <div ref={wrap} className="relative w-full overflow-hidden" style={{ aspectRatio: "2172 / 724" }}>
        <div
          className="absolute left-0 top-0 h-[724px] w-[2172px] origin-top-left overflow-hidden"
          style={{
            transform: `scale(${scale})`,
            opacity: scale ? 1 : 0,
            background: "linear-gradient(100deg,#e8f2f6 0%,#f5f9fb 28%,#f7fafc 60%,#e7f1f5 100%)",
          }}
        >
          {/* ---------- BACKGROUND ---------- */}
          <svg className="absolute inset-0" width="2172" height="724" viewBox="0 0 2172 724" fill="none">
            <defs>
              <linearGradient id="eb-tealwave" x1="0" x2="1">
                <stop offset="0" stopColor="#c8f2ef" />
                <stop offset=".55" stopColor="#25c4c4" />
                <stop offset="1" stopColor="#0a7384" />
              </linearGradient>
              <filter id="eb-b2"><feGaussianBlur stdDeviation="3" /></filter>
              <filter id="eb-b10"><feGaussianBlur stdDeviation="10" /></filter>
              <filter id="eb-b26"><feGaussianBlur stdDeviation="26" /></filter>
            </defs>

            {/* blurred lab shelves, right */}
            <g filter="url(#eb-b10)" opacity=".7">
              <rect x="1960" y="0" width="212" height="300" fill="#e3edf2" />
              {[2010, 2075, 2130].map((x, k) => (
                <rect key={x} x={x} y={90 + k * 20} width="34" height={120 - k * 10} rx="8" fill="#c9dbe5" />
              ))}
              <rect x="1960" y="62" width="212" height="8" fill="#fff" />
              <rect x="1960" y="214" width="212" height="8" fill="#fff" />
            </g>

            {/* blurred plant, left */}
            <g filter="url(#eb-b2)" opacity=".9">
              <path d="M300 340C290 260 270 190 250 120" stroke="#5aa84a" strokeWidth="5" />
              {[
                [190, 220, 70, 26, -50, "#6dbb52"],
                [250, 150, 72, 26, -75, "#7cc965"],
                [330, 120, 74, 26, -30, "#5aa84a"],
                [400, 190, 78, 26, -20, "#6dbb52"],
                [440, 175, 60, 22, 10, "#80c768"],
                [330, 250, 76, 26, 25, "#5aa84a"],
                [220, 310, 66, 24, -10, "#7cc965"],
                [150, 140, 52, 20, -60, "#6dbb52"],
              ].map(([cx, cy, rx, ry, rot, c], k) => (
                <ellipse key={k} cx={cx} cy={cy} rx={rx} ry={ry} fill={c} transform={`rotate(${rot} ${cx} ${cy})`} />
              ))}
            </g>

            {/* flask with blue liquid, left */}
            <g filter="url(#eb-b2)">
              <path d="M30 40C30 120 20 200 -30 400H210C170 300 130 200 120 60Z" fill="#fff" opacity=".35" />
              <path d="M-10 318C50 306 130 312 178 330L196 430C140 452 50 448 -20 436Z" fill="#37b7da" opacity=".8" />
            </g>
            <ellipse cx="420" cy="400" rx="70" ry="120" fill="#fff" opacity=".35" filter="url(#eb-b10)" />

            {/* drifting bokeh */}
            <motion.circle cx="520" cy="120" r="70" fill="#fff" opacity=".6" filter="url(#eb-b26)" {...drift(40, 20, 14)} />
            <motion.circle cx="1500" cy="40" r="90" fill="#dff0f5" opacity=".7" filter="url(#eb-b26)" {...drift(-50, 20, 18)} />
            <motion.circle cx="1900" cy="420" r="80" fill="#fff" opacity=".6" filter="url(#eb-b26)" {...drift(-30, -20, 16)} />

            {/* waves */}
            <motion.path
              d="M200 724C500 640 760 596 980 636C1200 676 1500 704 2172 640V724Z"
              fill="#fff"
              opacity=".85"
              animate={reduce ? undefined : { d: [
                "M200 724C500 640 760 596 980 636C1200 676 1500 704 2172 640V724Z",
                "M200 724C500 650 760 610 980 628C1200 650 1500 710 2172 650V724Z",
                "M200 724C500 640 760 596 980 636C1200 676 1500 704 2172 640V724Z",
              ] }}
              transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.path
              d="M1250 702C1650 708 1990 650 2172 520V724H1250Z"
              fill="url(#eb-tealwave)"
              initial={{ opacity: 0, x: 120 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 1.4, ease }}
            />
            <motion.path
              d="M1250 702C1650 708 1990 650 2172 520"
              stroke="#fff"
              strokeOpacity=".7"
              strokeWidth="3"
              strokeDasharray="60 900"
              animate={reduce ? undefined : { strokeDashoffset: [0, -960] }}
              transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
            />
          </svg>

          {DECOR_LEFT && (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={DECOR_LEFT} alt="" className="absolute bottom-0 left-0 h-[560px] w-auto select-none" />
          )}

          {/* ---------- HEADING ---------- */}
          <div className="absolute left-0 top-[34px] flex w-[2172px] flex-col items-center pl-[198px]">
            <div className="flex items-center gap-6">
              <motion.span
                className="h-[2px] w-[50px] origin-right bg-[#12a9a3]"
                initial={{ scaleX: 0 }}
                animate={inView ? { scaleX: 1 } : {}}
                transition={{ duration: 0.7, ease }}
              />
              <motion.span
                className="text-[25px] font-semibold tracking-[0.32em] text-[#0b4a6b]"
                initial={{ opacity: 0, letterSpacing: "0.6em" }}
                animate={inView ? { opacity: 1, letterSpacing: "0.32em" } : {}}
                transition={{ duration: 1, ease }}
              >
                OUR STRENGTH IN NUMBERS
              </motion.span>
              <motion.span
                className="h-[2px] w-[70px] origin-left bg-[#12a9a3]"
                initial={{ scaleX: 0 }}
                animate={inView ? { scaleX: 1 } : {}}
                transition={{ duration: 0.7, ease }}
              />
            </div>

            <h2 className="mt-[8px] flex gap-[16px] text-[58px] font-extrabold italic leading-[72px] tracking-[-0.02em] text-[#0a2e4d]">
              {["A Trusted", "Pharmaceutical", "Partner"].map((w, k) => (
                <span key={w} className="block overflow-hidden pr-1">
                  <motion.span
                    className={`block ${k === 1 ? "bg-[linear-gradient(90deg,#0aa9a4,#17cbc5,#0b7f93,#0aa9a4)] bg-[length:250%_100%] bg-clip-text text-transparent" : ""}`}
                    initial={{ y: "115%" }}
                    animate={
                      inView
                        ? { y: 0, ...(k === 1 && !reduce ? { backgroundPositionX: ["0%", "250%"] } : {}) }
                        : {}
                    }
                    transition={{
                      y: { delay: 0.2 + k * 0.14, duration: 0.85, ease },
                      backgroundPositionX: { duration: 5, repeat: Infinity, ease: "linear", delay: 1.4 },
                    }}
                  >
                    {w}
                  </motion.span>
                </span>
              ))}
            </h2>

            <svg width="270" height="22" viewBox="0 0 270 22" className="mt-[2px] ml-[-30px] overflow-visible" fill="none">
              <defs>
                <linearGradient id="eb-under" x1="0" x2="1">
                  <stop offset="0" stopColor="#0a8f9a" stopOpacity=".3" />
                  <stop offset=".35" stopColor="#0a7f8f" />
                  <stop offset="1" stopColor="#12b5a6" stopOpacity="0" />
                </linearGradient>
              </defs>
              <motion.path
                d="M0 18C90 6 190 0 270 3C190 5 100 11 0 18Z"
                fill="url(#eb-under)"
                initial={{ clipPath: "inset(0 100% 0 0)" }}
                animate={inView ? { clipPath: "inset(0 0% 0 0)" } : {}}
                transition={{ delay: 0.9, duration: 1, ease }}
              />
            </svg>
          </div>

          {/* ---------- CARDS ---------- */}
          {stats.map((s, i) => (
            <StatCard key={s.label[0]} s={s} i={i} inView={inView} reduce={reduce} />
          ))}
        </div>
      </div>
    </section>
  );
}