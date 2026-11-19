"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowUpRight,
  MapPin,
  Phone,
  Mail,
  Atom,
  Dna,
} from "lucide-react";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about-us" },
  { name: "Our Products", href: "/products" },
  { name: "Articles", href: "/articles" },
  { name: "Contact Us", href: "/contact-us" },
];

export const productLinks = [
  {
    name: "Pharmaceutical Tablets",
    href: "/products?category=pharmaceutical-tablets",
  },
  {
    name: "Allopathic Tablets",
    href: "/products?category=allopathic-tablets",
  },
  {
    name: "Pharmaceutical Capsules",
    href: "/products?category=pharmaceutical-capsules",
  },
  {
    name: "Gastrointestinal Medicines",
    href: "/products?category=gastrointestinal-medicines",
  },
  {
    name: "Anti-inflammatory & Anticold",
    href: "/products?category=anti-inflammatory-anticold",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Footer() {
  return (
    <footer className="relative isolate overflow-hidden bg-[var(--primary-dark)] text-[var(--text-light)]">

      {/* BACKGROUND EFFECTS */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_15%_80%,rgba(25,160,184,0.14),transparent_35%),radial-gradient(ellipse_at_90%_10%,rgba(10,111,142,0.20),transparent_35%)]" />

      <motion.div
        className="absolute -right-24 top-10 -z-10 text-[var(--accent)]/[0.07]"
        animate={{ rotate: 360 }}
        transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
      >
        <Atom size={340} strokeWidth={0.5} />
      </motion.div>

      <motion.div
        className="absolute -left-16 bottom-10 -z-10 text-[var(--secondary)]/[0.12]"
        animate={{ y: [0, -20, 0], rotate: [0, 8, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
      >
        <Dna size={220} strokeWidth={0.6} />
      </motion.div>

      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">

        {/* MAIN FOOTER */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.5fr_0.8fr_1fr_1.2fr] gap-12 lg:gap-10 py-16 md:py-20">

          {/* COMPANY INFORMATION */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-sm"
          >
            <Link href="/" className="inline-flex items-center gap-3 mb-7">
              <img
                src="/Elisa (1).webp"
                alt="Elisa Biotech Pvt. Ltd."
                className="bg-[var(--surface)] rounded-2xl w-[200px]"
              />
            </Link>

            <p className="text-sm text-[var(--surface-blue)]/75 leading-7">
              Established in 2007, Elisa Biotech Pvt. Ltd. is committed to
              delivering quality products and dependable solutions from
              Badli Industrial Estate, Delhi, India.
            </p>

            <div className="mt-8 inline-flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.05] px-4 py-3">
              <span className="text-3xl font-bold text-[var(--accent)]">
                17+
              </span>
              <div>
                <p className="text-xs font-semibold text-white">
                  Years of Experience
                </p>
                <p className="text-[10px] text-[var(--surface-blue)]/60">
                  Established in 2007
                </p>
              </div>
            </div>
          </motion.div>

          {/* QUICK LINKS */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="text-base font-bold mb-7">
              Quick Links
            </h4>

            <div className="w-9 h-[2px] bg-[var(--accent)] mb-7" />

            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-2 text-sm text-[var(--surface-blue)]/75 hover:text-[var(--accent)] transition-colors"
                  >
                    <span className="w-1 h-1 rounded-full bg-[var(--accent)] group-hover:w-3 transition-all" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* PRODUCTS */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="text-base font-bold mb-7">
              Our Products
            </h4>

            <div className="w-9 h-[2px] bg-[var(--accent)] mb-7" />

            <ul className="space-y-5">
              {productLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="group flex items-start gap-2 text-sm leading-6 text-[var(--surface-blue)]/75 hover:text-[var(--accent)] transition-colors"
                  >
                    <ArrowUpRight
                      size={15}
                      className="mt-1 shrink-0 text-[var(--accent)] transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                    />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* CONTACT INFORMATION */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h4 className="text-base font-bold mb-7">
              Get In Touch
            </h4>

            <div className="w-9 h-[2px] bg-[var(--accent)] mb-7" />

            <div className="space-y-6">

              {/* ADDRESS */}
              <div className="flex gap-4">
                <div className="w-10 h-10 shrink-0 rounded-xl bg-[var(--secondary)]/20 border border-[var(--secondary)]/30 flex items-center justify-center text-[var(--accent)]">
                  <MapPin size={19} />
                </div>

                <div>
                  <p className="text-xs font-semibold mb-2 text-white">
                    Our Location
                  </p>
                  <p className="text-sm leading-6 text-[var(--surface-blue)]/75">
                    2nd Floor, House No 22, S-Block, Phase-1, Badli
                    Industrial Area, New Delhi - 110042, Delhi, India
                  </p>
                </div>
              </div>

              {/* PHONE */}
              <div className="flex gap-4">
                <div className="w-10 h-10 shrink-0 rounded-xl bg-[var(--secondary)]/20 border border-[var(--secondary)]/30 flex items-center justify-center text-[var(--accent)]">
                  <Phone size={19} />
                </div>

                <div>
                  <p className="text-xs font-semibold mb-2 text-white">
                    Call Us
                  </p>
                  <a
                    href="tel:+918048268766"
                    className="text-sm text-[var(--surface-blue)]/75 hover:text-[var(--accent)] transition-colors"
                  >
                    +91-8048268766
                  </a>
                </div>
              </div>

              {/* EMAIL */}
              <div className="flex gap-4">
                <div className="w-10 h-10 shrink-0 rounded-xl bg-[var(--secondary)]/20 border border-[var(--secondary)]/30 flex items-center justify-center text-[var(--accent)]">
                  <Mail size={19} />
                </div>

                <div>
                  <p className="text-xs font-semibold mb-2 text-white">
                    Email Us
                  </p>
                  <a
                    href="mailto:info@elisabiotechindia.com"
                    className="text-sm text-[var(--surface-blue)]/75 hover:text-[var(--accent)] transition-colors break-all"
                  >
                    info@elisabiotechindia.com
                  </a>
                </div>
              </div>

            </div>
          </motion.div>

        </div>

        {/* BOTTOM BAR */}
        <div className="border-t border-white/15 py-7 flex flex-col md:flex-row items-center justify-between gap-3 w-full mx-auto">

          <p className="text-xs text-[var(--surface-blue)]/60 text-center md:text-left">
            © {new Date().getFullYear()} Elisa Biotech Pvt. Ltd. All Rights Reserved.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-1
           text-xs text-[var(--surface-blue)]/60">
            <span>Website Designed By Inquiry Bazaar Pvt. Ltd. - </span>
           
                <a
              href="https://inquirybazaar.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--accent)] hover:text-white transition-colors"
            >B2B Marketplace
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
}