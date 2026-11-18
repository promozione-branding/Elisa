
"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowUpRight,
  ArrowRight,
  MapPin,
  Phone,
  Mail,
  FlaskConical,
  Atom,
  Dna,
  ChevronUp,
} from "lucide-react";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about-us" },
  { name: "Our Products", href: "/products" },
  { name: "Categories", href: "/categories" },
  { name: "FAQs", href: "/faqs" },
  { name: "Contact Us", href: "/contact-us" },
];

const productLinks = [
  { name: "Pharmaceutical Tablets", href: "/products?category=pharmaceutical-tablets" },
  { name: "Allopathic Tablets", href: "/products?category=allopathic-tablets" },
  { name: "Pharmaceutical Capsules", href: "/products?category=pharmaceutical-capsules" },
];

// const socials = [
//   { icon: Linkedin, href: "#", label: "LinkedIn" },
//   { icon: Instagram, href: "#", label: "Instagram" },
//   { icon: Facebook, href: "#", label: "Facebook" },
//   { icon: Youtube, href: "#", label: "YouTube" },
// ];

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
    <footer className="relative isolate overflow-hidden bg-[#061D2C] text-white">

      {/* BACKGROUND EFFECTS */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_15%_80%,rgba(0,157,164,0.16),transparent_35%),radial-gradient(ellipse_at_90%_10%,rgba(30,112,153,0.15),transparent_35%)]" />

      <motion.div
        className="absolute -right-24 top-10 -z-10 text-[#19B9B1]/[0.07]"
        animate={{ rotate: 360 }}
        transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
      >
        <Atom size={340} strokeWidth={0.5} />
      </motion.div>

      <motion.div
        className="absolute -left-16 bottom-10 -z-10 text-[#19B9B1]/[0.06]"
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
             <img src="/Elisa (1).webp" alt="" className="bg-white rounded-2xl w-[200px]" />
            </Link>

            <p className="text-sm text-slate-400 leading-7">
              Established in 2007, Elisa Biotech Pvt. Ltd. is committed to
              delivering quality products and dependable solutions from
              Badli Industrial Estate, Delhi, India.
            </p>

            <div className="mt-8 inline-flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3">
              <span className="text-3xl font-bold text-[#32BEB6]">17+</span>
              <div>
                <p className="text-xs font-semibold text-white">
                  Years of Experience
                </p>
                <p className="text-[10px] text-slate-500">
                  Established in 2007
                </p>
              </div>
            </div>

            {/* SOCIAL LINKS */}
            {/* <div className="flex items-center gap-3 mt-8">
              {socials.map((social) => {
                const Icon = social.icon;

                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 rounded-full border border-white/10 bg-white/[0.04] flex items-center justify-center text-slate-400 hover:bg-[#13A7A4] hover:text-white hover:border-[#13A7A4] transition-all duration-300 hover:-translate-y-1"
                  >
                    <Icon size={17} />
                  </a>
                );
              })}
            </div> */}
          </motion.div>

          {/* QUICK LINKS */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="text-base font-bold mb-7">Quick Links</h4>

            <div className="w-9 h-[2px] bg-[#16AAA6] mb-7" />

            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-2 text-sm text-slate-400 hover:text-[#39C5BD] transition-colors"
                  >
                    <span className="w-1 h-1 rounded-full bg-[#159E9D] group-hover:w-3 transition-all" />
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
            <h4 className="text-base font-bold mb-7">Our Products</h4>

            <div className="w-9 h-[2px] bg-[#16AAA6] mb-7" />

            <ul className="space-y-5">
              {productLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="group flex items-start gap-2 text-sm leading-6 text-slate-400 hover:text-[#39C5BD] transition-colors"
                  >
                    <ArrowUpRight
                      size={15}
                      className="mt-1 shrink-0 text-[#16AAA6] transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
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
            <h4 className="text-base font-bold mb-7">Get In Touch</h4>

            <div className="w-9 h-[2px] bg-[#16AAA6] mb-7" />

            <div className="space-y-6">

              <div className="flex gap-4">
                <div className="w-10 h-10 shrink-0 rounded-xl bg-[#0C3C4C] flex items-center justify-center text-[#36C3BA]">
                  <MapPin size={19} />
                </div>
                <div>
                  <p className="text-xs font-semibold mb-2 text-white">
                    Our Location
                  </p>
                  <p className="text-sm leading-6 text-slate-400">
                    Badli Industrial Estate,
                    <br />
                    Delhi, India.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 shrink-0 rounded-xl bg-[#0C3C4C] flex items-center justify-center text-[#36C3BA]">
                  <Phone size={19} />
                </div>
                <div>
                  <p className="text-xs font-semibold mb-2 text-white">
                    Call Us
                  </p>
                  <p className="text-sm text-slate-400">
                    Contact our team
                  </p>
                  <Link
                    href="/contact-us"
                    className="text-xs text-[#36C3BA] hover:underline mt-1 inline-block"
                  >
                    Request a Call Back
                  </Link>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 shrink-0 rounded-xl bg-[#0C3C4C] flex items-center justify-center text-[#36C3BA]">
                  <Mail size={19} />
                </div>
                <div>
                  <p className="text-xs font-semibold mb-2 text-white">
                    Email Us
                  </p>
                  <Link
                    href="/contact-us"
                    className="text-sm text-slate-400 hover:text-[#36C3BA] transition-colors"
                  >
                    Send an Enquiry
                  </Link>
                </div>
              </div>

            </div>
          </motion.div>

        </div>

        {/* BOTTOM BAR */}
        <div className="border-t border-white/10 py-7 flex flex-col md:flex-row items-center justify-between gap-5">

          <p className="text-xs text-slate-500 text-center md:text-left">
            © {new Date().getFullYear()} Elisa Biotech Pvt. Ltd. All Rights Reserved.
          </p>

          <div className="flex items-center gap-6 text-xs text-slate-500">
            <Link
              href="/privacy-policy"
              className="hover:text-[#36C3BA] transition-colors"
            >
              Privacy Policy
            </Link>

            <Link
              href="/terms-and-conditions"
              className="hover:text-[#36C3BA] transition-colors"
            >
              Terms & Conditions
            </Link>
          </div>

          <button
            onClick={() =>
              window.scrollTo({ top: 0, behavior: "smooth" })
            }
            aria-label="Back to top"
            className="w-10 h-10 rounded-full border border-white/10 bg-white/[0.04] flex items-center justify-center text-[#36C3BA] hover:bg-[#13A7A4] hover:text-white transition-all"
          >
            <ChevronUp size={19} />
          </button>

        </div>
      </div>

    </footer>
  );
}
