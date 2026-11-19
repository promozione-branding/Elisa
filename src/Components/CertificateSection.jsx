
"use client";

import { motion } from "framer-motion";
import { Award, ShieldCheck, ArrowUpRight, FileCheck2 } from "lucide-react";

const certificates = [
  {
    title: "ISO Certification",
    subtitle: "Quality Management System",
    number: "EB / ISO / 001",
    year: "2026",
  },
  {
    title: "GMP Certification",
    subtitle: "Good Manufacturing Practices",
    number: "EB / GMP / 002",
    year: "2026",
  },
  {
    title: "WHO-GMP Certification",
    subtitle: "Quality & Compliance Standards",
    number: "EB / WHO / 003",
    year: "2026",
  },
  {
    title: "FSSAI Certification",
    subtitle: "Food Safety & Standards",
    number: "EB / FSSAI / 004",
    year: "2026",
  },
];

export default function CertificatesSection() {
  return (
    <section className="relative overflow-hidden bg-[var(--background)] py-15 md:py-15">
      <div className="absolute -left-32 top-20 h-72 w-72 rounded-full bg-[var(--accent)]/10 blur-[100px]" />
      <div className="absolute -right-32 bottom-0 h-72 w-72 rounded-full bg-[var(--secondary)]/10 blur-[100px]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-14 max-w-2xl text-center"
        >
          <div className="mb-1 inline-flex items-center gap-2 rounded-full border border-[var(--border-color)] bg-[var(--surface)] px-4 py-2 text-sm font-semibold text-[var(--secondary)]">
            <ShieldCheck size={16} />
            Our Certifications
          </div>

          <h2 className="text-3xl font-bold leading-tight text-[var(--dark)] sm:text-4xl lg:text-5xl">
            Recognitions That Reflect
            <span className="text-[var(--secondary)]"> Our Commitment</span>
          </h2>

          
        </motion.div>

        {/* Certificate Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {certificates.map((certificate, index) => (
            <motion.div
              key={certificate.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-2xl border border-[var(--border-color)] bg-[var(--surface)] p-3 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-xl">
                {/* Certificate Demo */}
                <div className="relative flex aspect-[1/1.12] flex-col overflow-hidden border-[5px] border-double border-[var(--secondary)]/50 bg-[var(--surface-blue)] p-4 sm:p-5">
                  {/* Decorative corners */}
                  <div className="absolute -left-9 -top-9 h-24 w-24 rounded-full border-[12px] border-[var(--accent)]/10" />
                  <div className="absolute -bottom-9 -right-9 h-24 w-24 rounded-full border-[12px] border-[var(--secondary)]/10" />

                  <div className="relative flex items-center justify-between border-b border-[var(--secondary)]/20 pb-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[var(--primary)] text-white">
                      <Award size={20} />
                    </div>
                    <span className="text-[8px] font-bold uppercase tracking-widest text-[var(--secondary)]">
                      Elisa Biotech
                    </span>
                  </div>

                  <div className="relative flex flex-1 flex-col items-center justify-center text-center">
                    <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full border border-[var(--accent)] text-[var(--secondary)]">
                      <FileCheck2 size={23} />
                    </div>

                    <p className="text-[8px] font-bold uppercase tracking-[0.25em] text-[var(--accent)]">
                      Certificate of
                    </p>

                    <h3 className="mt-2 text-lg font-extrabold leading-tight text-[var(--primary)]">
                      {certificate.title}
                    </h3>

                    <div className="my-3 h-0.5 w-12 rounded-full bg-[var(--accent)]" />

                    <p className="max-w-[180px] text-[10px] leading-5 text-[var(--text-secondary)]">
                      {certificate.subtitle}
                    </p>

                    <p className="mt-4 text-[9px] font-semibold text-[var(--dark)]">
                      ELISA BIOTECH PVT. LTD.
                    </p>
                  </div>

                  <div className="relative flex items-end justify-between border-t border-[var(--secondary)]/20 pt-3">
                    <div>
                      <p className="text-[7px] uppercase tracking-wider text-[var(--text-secondary)]">
                        Reference
                      </p>
                      <p className="mt-1 text-[9px] font-bold text-[var(--primary)]">
                        {certificate.number}
                      </p>
                    </div>

                    <div className="text-right">
                      <p className="text-[7px] uppercase tracking-wider text-[var(--text-secondary)]">
                        Demo Year
                      </p>
                      <p className="mt-1 text-[9px] font-bold text-[var(--primary)]">
                        {certificate.year}
                      </p>
                    </div>
                  </div>

                  <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                    <span className="rotate-[-30deg] text-4xl font-black tracking-widest text-[var(--primary)]/[0.055]">
                      DEMO
                    </span>
                  </div>
                </div>

                {/* Card Footer */}
                <div className="flex items-center justify-between gap-2 px-2 pb-2 pt-5">
                  <div>
                    <h4 className="text-sm font-bold text-[var(--dark)] transition-colors group-hover:text-[var(--secondary)]">
                      {certificate.title}
                    </h4>
            
                  </div>

                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[var(--surface-blue)] text-[var(--secondary)] transition-all duration-300 group-hover:bg-[var(--primary)] group-hover:text-white">
                    <ArrowUpRight size={18} />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
