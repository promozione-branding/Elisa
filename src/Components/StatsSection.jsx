
"use client";

import { useEffect, useState, useRef } from "react";

const stats = [
  {
    number: 10,
    suffix: "+",
    label: "Pharmaceutical Product Categories",
    icon: "pill",
  },
  {
    number: 5,
    suffix: "+",
    label: "Wholesale Trading Partner",
    icon: "building",
  },
  {
    number: 1000,
    suffix: "+",
    label: "Customer-Oriented Approach",
    icon: "users",
  },
  {
    number: 30,
    suffix: "+",
    label: "Diverse Product Range",
    icon: "award",
  },
];

function StatIcon({ type }) {
  const common = {
    width: 40,
    height: 40,
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round",
    strokeLinejoin: "round",
  };

  return (
    <svg viewBox="0 0 40 40" {...common}>
      {type === "pill" && (
        <>
          <rect x="8" y="12" width="24" height="16" rx="8" transform="rotate(-35 20 20)" />
          <path d="M14 27 L27 13" />
        </>
      )}

      {type === "building" && (
        <>
          <path d="M8 34V13L20 6L32 13V34" />
          <path d="M15 17H17M23 17H25M15 23H17M23 23H25M18 34V28H22V34" />
          <path d="M5 34H35" />
        </>
      )}

      {type === "users" && (
        <>
          <circle cx="15" cy="13" r="5" />
          <circle cx="27" cy="15" r="4" />
          <path d="M5 32C5 25 9 21 15 21C21 21 25 25 25 32" />
          <path d="M25 23C31 22 35 26 35 32" />
        </>
      )}

      {type === "award" && (
        <>
          <circle cx="20" cy="15" r="10" />
          <path d="M14 24L12 36L20 32L28 36L26 24" />
          <path d="M20 9L22 13L26 14L23 17L24 21L20 19L16 21L17 17L14 14L18 13Z" />
        </>
      )}
    </svg>
  );
}

export default function StatsSection() {
  const [visible, setVisible] = useState(false);
  const [counts, setCounts] = useState([0, 0, 0, 0]);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!visible) return;

    const duration = 2000;
    const start = performance.now();
    let frame;

    const animate = (time) => {
      const progress = Math.min((time - start) / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 4);

      setCounts(
        stats.map((item) =>
          Math.floor(item.number * ease)
        )
      );

      if (progress < 1) {
        frame = requestAnimationFrame(animate);
      }
    };

    frame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(frame);
  }, [visible]);

  return (
    <section
      ref={sectionRef}
      className="stats-section w-full bg-[#fafafa] py-10 md:py-10 overflow-hidden"
    >
      <div className="max-w-[1320px] mx-auto px-5">

        <div className="stats-grid grid grid-cols-2 md:grid-cols-4 border-t border-[#dedede]">

          {stats.map((item, index) => (
            <div
              key={index}
              className={`stat-card group relative flex flex-col items-center justify-center text-center py-9 px-3 md:py-14 overflow-hidden
                ${index !== 0 ? "border-l border-[#dedede]" : ""}
                ${index === 2 ? "md:border-l border-[#dedede]" : ""}
                ${visible ? "stat-visible" : ""}`}
              style={{
                "--delay": `${index * 180}ms`,
              }}
            >
              {/* Background glow */}
              <div className="stat-glow absolute inset-0 pointer-events-none" />

              {/* Icon */}
              <div className="stat-icon relative z-10 text-[#a0a0a0] mb-5">
                <StatIcon type={item.icon} />
              </div>

              {/* Counter */}
              <h3 className="stat-number relative z-10 text-[34px] md:text-[40px] leading-none font-semibold text-black mb-3 tracking-tight">
                {counts[index].toLocaleString("en-IN")}
                {item.suffix}
              </h3>

              {/* Label */}
              <p className="stat-label relative z-10 text-[13px] md:text-[15px] text-[#454545] leading-relaxed">
                {item.label}
              </p>

              {/* Bottom animated line */}
              <div className="stat-line absolute bottom-0 left-1/2 -translate-x-1/2 h-[3px] w-0 bg-[#c62828] rounded-full" />

            </div>
          ))}

        </div>
      </div>

      <style jsx>{`
        .stat-card {
          opacity: 0;
          transform: translateY(35px);
          transition:
            transform 0.6s ease,
            background 0.5s ease,
            box-shadow 0.5s ease,
            border-color 0.4s ease;
        }

        .stat-visible {
          animation: cardEntrance 0.8s cubic-bezier(.2,.8,.2,1) forwards;
          animation-delay: var(--delay);
        }

        @keyframes cardEntrance {
          from {
            opacity: 0;
            transform: translateY(35px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .stat-glow {
          opacity: 0;
          background: radial-gradient(
            circle at center,
            rgba(198, 40, 40, 0.09),
            transparent 70%
          );
          transform: scale(0.6);
          transition: all 0.6s ease;
        }

        .stat-icon {
          animation: floatIcon 3s ease-in-out infinite;
          transition:
            color 0.4s ease,
            transform 0.5s cubic-bezier(.2,.8,.2,1);
        }

        @keyframes floatIcon {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-5px);
          }
        }

        .stat-number {
          transition:
            color 0.4s ease,
            transform 0.5s cubic-bezier(.2,.8,.2,1);
        }

        .stat-label {
          transition: color 0.4s ease;
        }

        .stat-line {
          transition: width 0.5s cubic-bezier(.2,.8,.2,1);
        }

        .stat-card:hover {
          transform: translateY(-8px);
          background: #fff;
          box-shadow: 0 15px 35px rgba(0,0,0,0.045);
        }

        .stat-card:hover .stat-glow {
          opacity: 1;
          transform: scale(1.4);
        }

        .stat-card:hover .stat-icon {
          color: #c62828;
          transform: translateY(-8px) scale(1.2) rotate(-8deg);
          animation-play-state: paused;
        }

        .stat-card:hover .stat-number {
          color: #c62828;
          transform: scale(1.12);
        }

        .stat-card:hover .stat-label {
          color: #222;
        }

        .stat-card:hover .stat-line {
          width: 55%;
        }

        @media (max-width: 767px) {
          .stat-card {
            padding-top: 35px;
            padding-bottom: 35px;
          }

          .stat-card:hover {
            transform: translateY(-4px);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .stat-card,
          .stat-icon {
            animation: none !important;
            transition: none !important;
          }

          .stat-card {
            opacity: 1;
            transform: none;
          }
        }
      `}</style>
    </section>
  );
}
