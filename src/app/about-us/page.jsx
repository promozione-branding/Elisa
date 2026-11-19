"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ShieldCheck,
  HeartPulse,
  Users,
  Target,
  Eye,
  Rocket,
  FlaskConical,
  Handshake,
  Award,
  CheckCircle2,
  Dna,
  Plus,
} from "lucide-react";
import Navbaar from "@/Components/Navbaar";
import Footer from "@/Components/Footer";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: "easeOut" },
  },
};

const strengths = [
  { icon: ShieldCheck, title: "High-Quality", sub: "Formulations" },
  { icon: HeartPulse, title: "Cost-Effective", sub: "Solutions" },
  { icon: FlaskConical, title: "Modern", sub: "Manufacturing" },
  { icon: Users, title: "Patient-Centric", sub: "Approach" },
  { icon: Handshake, title: "Reliable", sub: "Partner" },
];

const values = [
  {
    icon: Target,
    title: "Our Purpose",
    text: "To make essential medicines accessible and affordable for a healthier society.",
  },
  {
    icon: Eye,
    title: "Our Vision",
    text: "To be a trusted and preferred pharmaceutical partner, known for quality, affordability, and care.",
  },
  {
    icon: Rocket,
    title: "Our Mission",
    text: "To develop, manufacture, and deliver reliable, high-quality medicines that address real healthcare needs.",
  },
];

const qualityPoints = [
  { icon: Award, title: "GMP", sub: "Quality-focused practices" },
  { icon: ShieldCheck, title: "ISO", sub: "Quality systems" },
  { icon: CheckCircle2, title: "Regulatory", sub: "Compliance mindset" },
  { icon: HeartPulse, title: "Patient", sub: "Well-being first" },
];

function SectionLabel({ children }) {
  return (
    <div className="mb-4 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.24em] text-[var(--secondary)]">
      {children}
      <span className="h-[3px] w-10 rounded-full bg-[var(--accent)]" />
    </div>
  );
}

function ValueCard({ item, index }) {
  const Icon = item.icon;

  return (
    <motion.div
      variants={fadeUp}
      custom={index}
      className="group relative overflow-hidden rounded-[28px] border border-[var(--border-color)] bg-gradient-to-br from-[var(--surface)] to-[var(--surface-blue)] p-7 shadow-[0_15px_45px_rgba(7,62,95,0.07)] transition duration-500 hover:-translate-y-2"
    >
      <div className="absolute -bottom-12 -right-10 h-36 w-36 rounded-full bg-[var(--accent)]/10 transition duration-500 group-hover:scale-150" />

      <div className="relative z-10 flex gap-5">
        <div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-[var(--surface)] text-[var(--secondary)] shadow-sm">
          <Icon size={29} strokeWidth={1.8} />
        </div>

        <div>
          <h3 className="mb-3 text-xl font-bold tracking-tight text-[var(--primary-dark)]">
            {item.title}
          </h3>
          <p className="max-w-xs text-sm leading-6 text-[var(--text-secondary)]">
            {item.text}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default function AboutUsPage() {
  return (
    <main className="overflow-hidden bg-[var(--background)] text-[var(--text-primary)]">
      <Navbaar />

      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-[var(--primary-dark)]">
        <div className="absolute inset-0 -z-10">
          <img
            src="https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=2000&q=85"
            alt="Pharmaceutical laboratory research"
            className="h-full w-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--primary-dark)] via-[var(--primary-dark)]/95 to-[var(--secondary)]/25" />
        </div>

        <div className="pointer-events-none absolute -right-24 top-16 h-80 w-80 rounded-full border border-white/10" />

        <div className="pointer-events-none absolute right-24 top-28 text-[var(--accent)]/30">
          <Dna size={100} strokeWidth={0.7} />
        </div>

        <div className="mx-auto grid max-w-[1380px] items-center px-5 py-35 lg:grid-cols-[1.02fr_.98fr] lg:px-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="relative z-10 max-w-2xl"
          >
            <h1 className="text-4xl font-bold leading-[1.12] tracking-tight text-white sm:text-5xl lg:text-[60px]">
              Better medicines.
              <span className="mt-2 block text-[var(--accent)]">
                Better possibilities.
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-base leading-8 text-[var(--surface-blue)] sm:text-lg">
              Elisa Biotech Pvt. Ltd. is committed to delivering high-quality,
              affordable medicines that improve healthcare and support better
              lives.
            </p>

            <div className="mt-12 grid max-w-lg grid-cols-3 border-t border-white/20 pt-6">
              {[
                ["01", "Quality first"],
                ["02", "Accessible care"],
                ["03", "Better lives"],
              ].map(([number, label]) => (
                <div
                  key={number}
                  className="border-r border-white/20 pl-4 first:pl-0 last:border-0"
                >
                  <span className="block text-xs font-bold text-[var(--accent)]">
                    {number}
                  </span>
                  <span className="mt-1 block text-xs font-medium text-white sm:text-sm">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="relative hidden h-[420px] lg:block">
            <div className="absolute right-0 top-1/2 h-[390px] w-[88%] -translate-y-1/2 overflow-hidden rounded-[45%_18%_18%_45%] border-[9px] border-white/15 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1585435557343-3b092031a831?auto=format&fit=crop&w=1100&q=85"
                alt="Medicine capsules in a pharmaceutical setting"
                className="h-full w-full object-cover"
              />
            </div>

            <div className="absolute bottom-5 left-0 rounded-2xl border border-white/30 bg-white/95 p-5 shadow-xl backdrop-blur">
              <div className="flex items-center gap-3">
                <div className="grid h-11 w-11 place-items-center rounded-full bg-[var(--surface-blue)] text-[var(--secondary)]">
                  <HeartPulse size={23} />
                </div>
                <div>
                  <p className="text-sm font-bold text-[var(--primary-dark)]">
                    Care in every commitment
                  </p>
                  <p className="mt-1 text-xs text-[var(--text-secondary)]">
                    Focused on healthier communities
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute -bottom-1 left-0 h-12 w-full rounded-t-[50%] bg-[var(--background)]" />
      </section>

      {/* OUR STORY */}
      <section
        id="about"
        className="relative mx-auto max-w-[1380px] px-5 py-20 lg:px-10 lg:py-15"
      >
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            className="relative"
          >
            <div className="absolute -left-5 -top-5 h-28 w-28 rounded-tl-[42px] border-l-[5px] border-t-[5px] border-[var(--accent)]" />

            <div className="relative h-[340px] overflow-hidden rounded-[34px] sm:h-[440px]">
              <img
                src="/product/Green Syrup Bottles on Marble Pedestal.webp"
                alt="Pharmaceutical product display"
                className="h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[var(--primary-dark)]/50 to-transparent" />

              <div className="absolute bottom-6 left-6 rounded-2xl bg-white/95 px-5 py-4 shadow-lg backdrop-blur">
                <p className="text-xs font-bold uppercase tracking-widest text-[var(--secondary)]">
                  Our commitment
                </p>
                <p className="mt-1 text-lg font-bold text-[var(--primary-dark)]">
                  Healthcare for all
                </p>
              </div>
            </div>

            <div className="absolute -bottom-7 -right-4 -z-10 h-40 w-40 rounded-full bg-[var(--surface-blue)]" />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
          >
            <SectionLabel>Our Story</SectionLabel>

            <h2 className="text-3xl font-bold leading-tight tracking-tight text-[var(--primary-dark)] sm:text-5xl">
              A growing force
              <span className="block text-[var(--secondary)]">
                in better healthcare.
              </span>
            </h2>

            <p className="mt-7 text-base leading-8 text-[var(--text-secondary)]">
              Elisa Biotech Pvt. Ltd. is dedicated to making quality healthcare
              more accessible. We believe that dependable medicines and a
              responsible approach to healthcare can make a meaningful
              difference in people&apos;s lives.
            </p>

            <p className="mt-4 text-base leading-8 text-[var(--text-secondary)]">
              With a focus on quality, safety, innovation, and affordability,
              we aim to build trust with healthcare professionals, partners,
              and the communities we serve.
            </p>
          </motion.div>
        </div>
      </section>

      {/* PURPOSE / VISION / MISSION */}
      <section className="relative bg-[var(--surface)] py-15">
        <div className="pointer-events-none absolute right-0 top-0 h-64 w-64 rounded-bl-full bg-[var(--surface-blue)]" />

        <div className="relative mx-auto max-w-[1380px] px-5 lg:px-10">
          <div className="mx-auto mb-12 max-w-4xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-[var(--primary-dark)] sm:text-4xl">
              Guided by purpose.{" "}
              <span className="text-[var(--secondary)]">Driven by care.</span>
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {values.map((item, index) => (
              <ValueCard key={item.title} item={item} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="mx-auto max-w-[1380px] px-5 py-20 lg:px-10 lg:py-15">
        <div className="grid gap-10 lg:grid-cols-[.8fr_1.7fr] lg:items-center">
          <div>
            <SectionLabel>Why Choose Us</SectionLabel>

            <h2 className="text-3xl font-bold leading-tight tracking-tight text-[var(--primary-dark)] sm:text-4xl">
              A trusted partner
              <span className="block text-[var(--secondary)]">
                in healthcare.
              </span>
            </h2>

            <p className="mt-5 max-w-sm text-sm leading-7 text-[var(--text-secondary)]">
              We are committed to quality, affordability, and long-term
              well-being through a responsible approach to healthcare.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {strengths.map(({ icon: Icon, title, sub }) => (
              <motion.div
                key={title}
                whileHover={{ y: -7 }}
                className="rounded-2xl border border-[var(--border-color)] bg-[var(--surface)] px-4 py-7 text-center shadow-[0_10px_35px_rgba(7,62,95,0.06)]"
              >
                <Icon
                  className="mx-auto mb-4 text-[var(--accent)]"
                  size={34}
                  strokeWidth={1.6}
                />
                <h3 className="text-sm font-bold text-[var(--primary-dark)]">
                  {title}
                </h3>
                <p className="mt-1 text-xs text-[var(--text-secondary)]">
                  {sub}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* MANUFACTURING / EXPERTISE */}
      <section
        id="manufacturing"
        className="bg-[var(--surface-blue)] py-12 lg:py-15"
      >
        <div className="mx-auto grid max-w-[1380px] items-center gap-12 px-5 lg:grid-cols-2 lg:px-10">
          <div className="grid grid-cols-2 gap-4">
            <div className="mt-10 h-[270px] overflow-hidden rounded-[28px] rounded-tr-[80px]">
              <img
                src="https://images.unsplash.com/photo-1582719471384-894fbb16e074?auto=format&fit=crop&w=800&q=85"
                alt="Scientist working in a laboratory"
                className="h-full w-full object-cover"
              />
            </div>

            <div className="h-[270px] overflow-hidden rounded-[28px] rounded-bl-[80px]">
              <img
                src="https://images.unsplash.com/photo-1581093588401-fbb62a02f120?auto=format&fit=crop&w=800&q=85"
                alt="Laboratory equipment"
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          <div>
            <SectionLabel>Our Expertise</SectionLabel>

            <h2 className="text-3xl font-bold leading-tight tracking-tight text-[var(--primary-dark)] sm:text-5xl">
              A commitment to
              <span className="block text-[var(--secondary)]">
                quality and progress.
              </span>
            </h2>

            <p className="mt-6 text-base leading-8 text-[var(--text-secondary)]">
              We value robust processes, responsible practices, and continuous
              improvement. Our approach is centered on delivering dependable
              pharmaceutical solutions while keeping patient needs at the
              heart of every decision.
            </p>

            <div className="mt-8 space-y-4">
              {[
                "Quality-led processes",
                "Focus on safety and consistency",
                "Continuous improvement",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 text-sm font-semibold text-[var(--primary-dark)]"
                >
                  <span className="grid h-7 w-7 place-items-center rounded-full bg-[var(--surface)] text-[var(--secondary)] shadow-sm">
                    <CheckCircle2 size={17} />
                  </span>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* QUALITY */}
      <section
        id="quality"
        className="relative overflow-hidden bg-[var(--surface)] py-20 lg:py-24"
      >
        <div className="absolute -right-20 top-0 h-72 w-72 rounded-full bg-[var(--surface-blue)]" />

        <div className="relative mx-auto grid max-w-[1380px] gap-12 px-5 lg:grid-cols-[.85fr_1.15fr] lg:items-center lg:px-10">
          <div>
            <SectionLabel>Quality & Responsibility</SectionLabel>

            <h2 className="text-3xl font-bold leading-tight tracking-tight text-[var(--primary-dark)] sm:text-5xl">
              Quality is at the
              <span className="block text-[var(--secondary)]">
                heart of our work.
              </span>
            </h2>

            <p className="mt-6 max-w-lg text-base leading-8 text-[var(--text-secondary)]">
              We believe trust is built through consistency, transparency,
              and responsibility. Our quality commitment guides the way we
              work and the standards we strive to uphold.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {qualityPoints.map(({ icon: Icon, title, sub }) => (
              <div
                key={title}
                className="rounded-3xl border border-[var(--border-color)] bg-[var(--background)] px-4 py-7 text-center"
              >
                <div className="mx-auto mb-4 grid h-16 w-16 place-items-center rounded-full border border-[var(--border-color)] bg-[var(--surface)] text-[var(--secondary)] shadow-md">
                  <Icon size={30} strokeWidth={1.6} />
                </div>

                <h3 className="font-bold text-[var(--primary-dark)]">
                  {title}
                </h3>
                <p className="mt-2 text-xs leading-5 text-[var(--text-secondary)]">
                  {sub}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        id="contact"
        className="relative isolate overflow-hidden bg-[var(--primary-dark)] py-12 lg:py-15"
      >
        <div className="absolute inset-0 -z-10 opacity-25">
          <img
            src="https://images.unsplash.com/photo-1530026405186-ed1f139313f8?auto=format&fit=crop&w=1800&q=80"
            alt=""
            className="h-full w-full object-cover"
          />
        </div>

        <div className="absolute -right-20 -top-28 -z-10 h-96 w-96 rounded-full border border-white/15" />

        <div className="mx-auto flex max-w-[1380px] flex-col items-start justify-between gap-10 px-5 lg:flex-row lg:items-center lg:px-10">
          <div className="max-w-3xl">
            <div className="mb-5 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.25em] text-[var(--accent)]">
              <Plus size={19} />
              Better health starts with commitment
            </div>

            <h2 className="text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              Delivering better health
              <span className="block text-[var(--accent)]">
                for a healthier tomorrow.
              </span>
            </h2>

            <p className="mt-6 max-w-xl text-base leading-8 text-[var(--surface-blue)]">
              Together, let&apos;s make quality healthcare more accessible
              and support healthier communities.
            </p>
          </div>

          <a
            href="/contact-us"
            className="inline-flex shrink-0 items-center gap-3 rounded-full bg-[var(--accent)] px-8 py-4 text-sm font-bold text-white transition hover:bg-[var(--surface)] hover:text-[var(--primary-dark)]"
          >
            Contact Elisa Biotech
            <ArrowRight size={18} />
          </a>
        </div>
      </section>

    </main>
  );
}