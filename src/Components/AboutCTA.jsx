
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, HeartPulse } from "lucide-react";

export default function AboutCTA() {
  return (
    <section className="bg-[#F7FBFE] px-5 py-12 md:px-10 md:py-16">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#0B2D50] via-[#10476D] to-[#0876AD] px-7 py-9 shadow-xl shadow-[#0B2D50]/10 md:px-12 md:py-11"
        >
          {/* Decorative elements */}
          <div className="absolute -right-12 -top-20 h-64 w-64 rounded-full border border-white/10" />
          <div className="absolute -right-4 -top-12 h-48 w-48 rounded-full border border-white/10" />
          <div className="absolute bottom-0 right-1/3 h-32 w-32 rounded-full bg-[#16A6B5]/20 blur-3xl" />

          <div className="relative z-10 flex flex-col items-start justify-between gap-7 md:flex-row md:items-center">
            
            {/* Left Content */}
            <div className="flex items-start gap-4">
              <div className="hidden h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-[#16A6B5]/30 bg-[#16A6B5]/15 text-[#65DCE3] sm:flex">
                <HeartPulse size={30} />
              </div>

              <div>
                <h2 className="text-2xl font-bold leading-tight text-white md:text-3xl">
                  Let's Build a Healthier Future Together
                </h2>

                <p className="mt-3 max-w-2xl text-sm leading-7 text-blue-100/80 md:text-base">
                  Elisa Biotech Pvt. Ltd. is committed to delivering
                  high-quality, affordable medicines that improve
                  healthcare and support better lives.
                </p>
              </div>
            </div>

            {/* Right Button */}
            <Link
              href="/contact-us"
              className="group inline-flex shrink-0 items-center gap-3 rounded-full bg-white px-7 py-4 text-sm font-bold text-[#0B2D50] shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-[#16A6B5] hover:text-white"
            >
              Contact Now
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#E8F7FA] text-[#0876AD] transition-all group-hover:rotate-45 group-hover:bg-white/20 group-hover:text-white">
                <ArrowUpRight size={19} />
              </span>
            </Link>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
