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
  Microscope,
  CheckCircle2,
  Dna,
  Activity,
  Plus,
} from "lucide-react";
import Navbaar from "@/Components/Navbaar";
import Footer from "@/Components/Footer";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: "easeOut" } },
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
    accent: "blue",
    text: "To make essential medicines accessible and affordable for a healthier society.",
  },
  {
    icon: Eye,
    title: "Our Vision",
    accent: "green",
    text: "To be a trusted and preferred pharmaceutical partner, known for quality, affordability, and care.",
  },
  {
    icon: Rocket,
    title: "Our Mission",
    accent: "blue",
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
    <div className="mb-4 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.24em] text-[#14558b]">
      {children}
      <span className="h-[3px] w-10 rounded-full bg-[#83c341]" />
    </div>
  );
}

function ValueCard({ item, index }) {
  const Icon = item.icon;
  return (
    <motion.div
      variants={fadeUp}
      custom={index}
      className={`group relative overflow-hidden rounded-[28px] border border-white/80 p-7 shadow-[0_15px_45px_rgba(16,75,122,0.07)] transition duration-500 hover:-translate-y-2 ${
        item.accent === "green"
          ? "bg-gradient-to-br from-[#f2faef] to-[#dff1df]"
          : "bg-gradient-to-br from-white to-[#e1f2fc]"
      }`}
    >
      <div className="absolute -bottom-12 -right-10 h-36 w-36 rounded-full bg-white/40 transition duration-500 group-hover:scale-150" />
      <div className="relative z-10 flex gap-5">
        <div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-white text-[#1264a0] shadow-sm">
          <Icon size={29} strokeWidth={1.8} />
        </div>
        <div>
          <h3 className="mb-3 text-xl font-bold tracking-tight text-[#102b4c]">
            {item.title}
          </h3>
          <p className="max-w-xs text-sm leading-6 text-slate-700">{item.text}</p>
        </div>
      </div>
    </motion.div>
  );
}

export default function AboutUsPage() {
  return (
    <main className="overflow-hidden bg-[#f8fcff] text-[#102744]">
   <Navbaar/>

      {/* Hero */}
      <section className="relative isolate min-h-[570px] overflow-hidden bg-[#073b67]">
        <div className="absolute inset-0 -z-10">
          <img
            src="https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=2000&q=85"
            alt="Pharmaceutical laboratory research"
            className="h-full w-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#062d51] via-[#073d68]/95 to-[#07517d]/25" />
        </div>
        <div className="pointer-events-none absolute -right-24 top-16 h-80 w-80 rounded-full border border-white/10" />
        <div className="pointer-events-none absolute right-24 top-28 text-white/20">
          <Dna size={100} strokeWidth={0.7} />
        </div>
        <div className="mx-auto grid min-h-[570px] max-w-[1380px] items-center px-5 py-20 lg:grid-cols-[1.02fr_.98fr] lg:px-10">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} className="relative z-10 max-w-2xl">
            <SectionLabel>About Elisa Biotech</SectionLabel>
            <h1 className="text-4xl font-bold leading-[1.12] tracking-tight text-white sm:text-5xl lg:text-[64px]">
              Better medicines.
              <span className="mt-2 block text-[#a5dc55]">Better possibilities.</span>
            </h1>
            <p className="mt-7 max-w-xl text-base leading-8 text-blue-50 sm:text-lg">
              Elisa Biotech Pvt. Ltd. is committed to delivering high-quality,
              affordable medicines that improve healthcare and support better lives.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a href="#about" className="inline-flex items-center gap-3 rounded-full bg-[#8bc943] px-7 py-3.5 text-sm font-bold text-[#102e4c] transition hover:bg-white">
                Discover Our Story <ArrowRight size={17} />
              </a>
              <a href="#quality" className="rounded-full border border-white/40 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10">
                Our Commitment
              </a>
            </div>
            <div className="mt-12 grid max-w-lg grid-cols-3 border-t border-white/20 pt-6">
              {[
                ["01", "Quality first"],
                ["02", "Accessible care"],
                ["03", "Better lives"],
              ].map(([number, label]) => (
                <div key={number} className="border-r border-white/20 pl-4 first:pl-0 last:border-0">
                  <span className="block text-xs font-bold text-[#a5dc55]">{number}</span>
                  <span className="mt-1 block text-xs font-medium text-white sm:text-sm">{label}</span>
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
            <div className="absolute bottom-5 left-0 rounded-2xl border border-white/30 bg-white/90 p-5 shadow-xl backdrop-blur">
              <div className="flex items-center gap-3">
                <div className="grid h-11 w-11 place-items-center rounded-full bg-[#e7f5db] text-[#4b9425]">
                  <HeartPulse size={23} />
                </div>
                <div>
                  <p className="text-sm font-bold text-[#102b4c]">Care in every commitment</p>
                  <p className="mt-1 text-xs text-slate-500">Focused on healthier communities</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute -bottom-1 left-0 h-12 w-full rounded-t-[50%] bg-[#f8fcff]" />
      </section>

      {/* Story */}
      <section id="about" className="relative mx-auto max-w-[1380px] px-5 py-20 lg:px-10 lg:py-15">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeUp} className="relative">
            <div className="absolute -left-5 -top-5 h-28 w-28 rounded-tl-[42px] border-l-[5px] border-t-[5px] border-[#8bc943]" />
            <div className="relative h-[340px] overflow-hidden rounded-[34px] sm:h-[440px]">
              <img
                src="/Benz-Honey Syrup Product Display.png"
                alt="Modern pharmaceutical laboratory"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#052e52]/50 to-transparent" />
              <div className="absolute bottom-6 left-6 rounded-2xl bg-white/95 px-5 py-4 shadow-lg backdrop-blur">
                <p className="text-xs font-bold uppercase tracking-widest text-[#6da936]">Our commitment</p>
                <p className="mt-1 text-lg font-bold text-[#102b4c]">Healthcare for all</p>
              </div>
            </div>
            <div className="absolute -bottom-7 -right-4 -z-10 h-40 w-40 rounded-full bg-[#e3f3d7]" />
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeUp}>
            <SectionLabel>Our Story</SectionLabel>
            <h2 className="text-3xl font-bold leading-tight tracking-tight text-[#102b4c] sm:text-5xl">
              A growing force
              <span className="block text-[#1769a7]">in better healthcare.</span>
            </h2>
            <p className="mt-7 text-base leading-8 text-slate-600">
              Elisa Biotech Pvt. Ltd. is dedicated to making quality healthcare
              more accessible. We believe that dependable medicines and a
              responsible approach to healthcare can make a meaningful difference
              in people&apos;s lives.
            </p>
            <p className="mt-4 text-base leading-8 text-slate-600">
              With a focus on quality, safety, innovation, and affordability, we
              aim to build trust with healthcare professionals, partners, and the
              communities we serve.
            </p>
            <a href="#contact" className="mt-8 inline-flex items-center gap-3 border-b-2 border-[#8bc943] pb-2 text-sm font-bold text-[#14558b]">
              Get to know us <ArrowRight size={17} />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Purpose / Vision / Mission */}
      <section className="relative bg-white py-15">
        <div className="pointer-events-none absolute right-0 top-0 h-64 w-64 rounded-bl-full bg-[#eff8fc]" />
        <div className="relative mx-auto max-w-[1380px] px-5 lg:px-10">
          <div className="mx-auto mb-12 max-w-4xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-[#102b4c] sm:text-4xl">
              Guided by purpose. <span className="text-[#1769a7]">Driven by care.</span>
            </h2>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {values.map((item, index) => <ValueCard key={item.title} item={item} index={index} />)}
          </div>
        </div>
      </section>

      {/* Why choose */}
      <section className="mx-auto max-w-[1380px] px-5 py-20 lg:px-10 lg:py-15">
        <div className="grid gap-10 lg:grid-cols-[.8fr_1.7fr] lg:items-center">
          <div>
            <SectionLabel>Why Choose Us</SectionLabel>
            <h2 className="text-3xl font-bold leading-tight tracking-tight text-[#102b4c] sm:text-4xl">
              A trusted partner
              <span className="block text-[#1769a7]">in healthcare.</span>
            </h2>
            <p className="mt-5 max-w-sm text-sm leading-7 text-slate-600">
              We are committed to quality, affordability, and long-term well-being
              through a responsible approach to healthcare.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {strengths.map(({ icon: Icon, title, sub }) => (
              <motion.div
                key={title}
                whileHover={{ y: -7 }}
                className="rounded-2xl border border-sky-100 bg-white px-4 py-7 text-center shadow-[0_10px_35px_rgba(16,75,122,0.06)]"
              >
                <Icon className="mx-auto mb-4 text-[#5b9f2e]" size={34} strokeWidth={1.6} />
                <h3 className="text-sm font-bold text-[#102b4c]">{title}</h3>
                <p className="mt-1 text-xs text-slate-500">{sub}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Manufacturing */}
      <section id="manufacturing" className="bg-[#edf7fc] py-12 lg:py-15">
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
            <h2 className="text-3xl font-bold leading-tight tracking-tight text-[#102b4c] sm:text-5xl">
              A commitment to
              <span className="block text-[#1769a7]">quality and progress.</span>
            </h2>
            <p className="mt-6 text-base leading-8 text-slate-600">
              We value robust processes, responsible practices, and continuous
              improvement. Our approach is centered on delivering dependable
              pharmaceutical solutions while keeping patient needs at the heart
              of every decision.
            </p>
            <div className="mt-8 space-y-4">
              {["Quality-led processes", "Focus on safety and consistency", "Continuous improvement"].map((item) => (
                <div key={item} className="flex items-center gap-3 text-sm font-semibold text-[#183a59]">
                  <span className="grid h-7 w-7 place-items-center rounded-full bg-[#dff0d1] text-[#4c9429]">
                    <CheckCircle2 size={17} />
                  </span>
                  {item}
                </div>
              ))}
            </div>
            <a href="#contact" className="mt-9 inline-flex items-center gap-3 rounded-full bg-[#1769a7] px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-900/15 transition hover:bg-[#0d426d]">
              Connect with our team <ArrowRight size={17} />
            </a>
          </div>
        </div>
      </section>

      {/* Quality */}
      <section id="quality" className="relative overflow-hidden bg-white py-20 lg:py-24">
        <div className="absolute -right-20 top-0 h-72 w-72 rounded-full bg-[#eef8e8]" />
        <div className="relative mx-auto grid max-w-[1380px] gap-12 px-5 lg:grid-cols-[.85fr_1.15fr] lg:items-center lg:px-10">
          <div>
            <SectionLabel>Quality & Responsibility</SectionLabel>
            <h2 className="text-3xl font-bold leading-tight tracking-tight text-[#102b4c] sm:text-5xl">
              Quality is at the
              <span className="block text-[#1769a7]">heart of our work.</span>
            </h2>
            <p className="mt-6 max-w-lg text-base leading-8 text-slate-600">
              We believe trust is built through consistency, transparency, and
              responsibility. Our quality commitment guides the way we work and
              the standards we strive to uphold.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {qualityPoints.map(({ icon: Icon, title, sub }) => (
              <div key={title} className="rounded-3xl border border-sky-100 bg-[#f7fbfe] px-4 py-7 text-center">
                <div className="mx-auto mb-4 grid h-16 w-16 place-items-center rounded-full border border-sky-100 bg-white text-[#4d982b] shadow-md">
                  <Icon size={30} strokeWidth={1.6} />
                </div>
                <h3 className="font-bold text-[#102b4c]">{title}</h3>
                <p className="mt-2 text-xs leading-5 text-slate-500">{sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="relative isolate overflow-hidden bg-[#073b67] py-12 lg:py-15">
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
            <div className="mb-5 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.25em] text-[#b4e77b]">
              <Plus size={19} /> Better health starts with commitment
            </div>
            <h2 className="text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              Delivering better health
              <span className="block text-[#a5dc55]">for a healthier tomorrow.</span>
            </h2>
            <p className="mt-6 max-w-xl text-base leading-8 text-blue-100">
              Together, let&apos;s make quality healthcare more accessible and
              support healthier communities.
            </p>
          </div>
          <a href="mailto:info@elisabiotech.com" className="inline-flex shrink-0 items-center gap-3 rounded-full bg-[#8bc943] px-8 py-4 text-sm font-bold text-[#102e4c] transition hover:bg-white">
            Contact Elisa Biotech <ArrowRight size={18} />
          </a>
        </div>
      </section>

{/* Footer  */}

<Footer/>
    </main>
  );
}