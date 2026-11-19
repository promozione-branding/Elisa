"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight,
  Search,
  Menu,
  X,
  ChevronDown,
  Phone,
  MapPin,
  Mail,
  HeartPulse,
} from "lucide-react";
import Popup from "./Popup";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  { label: "Products", href: "/products", dropdown: true },
  { label: "Articles", href: "/articles" },
  { label: "Contact Us", href: "/contact-us" },
];

function LinkedInIcon({ size = 17 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9.75h4V21H3V9.75Zm6.5 0h3.83v1.54h.05c.53-1 1.84-2.06 3.79-2.06 4.05 0 4.8 2.67 4.8 6.13V21h-4v-4.9c0-1.17-.02-2.68-1.63-2.68-1.64 0-1.89 1.28-1.89 2.6V21h-4V9.75Z" />
    </svg>
  );
}

function InstagramIcon({ size = 17 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" />
    </svg>
  );
}

function YouTubeIcon({ size = 17 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M23 7.2a3 3 0 0 0-2.1-2.1C19 4.6 12 4.6 12 4.6s-7 0-8.9.5A3 3 0 0 0 1 7.2 31 31 0 0 0 .5 12 31 31 0 0 0 1 16.8a3 3 0 0 0 2.1 2.1c1.9.5 8.9.5 8.9.5s7 0 8.9-.5a3 3 0 0 0 2.1-2.1A31 31 0 0 0 23.5 12 31 31 0 0 0 23 7.2ZM9.8 15.1V8.9L15.6 12l-5.8 3.1Z" />
    </svg>
  );
}
const ease = [0.22, 1, 0.36, 1];

function WhatsAppIcon({ size = 22 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.9 9.9 0 0 0 4.74 1.21h.01c5.46 0 9.91-4.45 9.91-9.91A9.9 9.9 0 0 0 12.04 2Zm0 18.15h-.01a8.2 8.2 0 0 1-4.18-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.2 8.2 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.25-8.24a8.2 8.2 0 0 1 8.24 8.24c0 4.54-3.7 8.24-8.24 8.24Zm4.52-6.17c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.12-.16.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.24-1.47-1.38-1.72-.14-.25-.02-.38.11-.5.11-.11.25-.29.37-.43.12-.14.16-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.35-.77-1.85-.2-.49-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.23.25-.87.85-.87 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.14-1.18-.06-.11-.22-.17-.47-.29Z" />
    </svg>
  );
}

export default function Navbar() {
  const [popupOpen, setPopupOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [activeHref, setActiveHref] = useState("/");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    if (!mobileOpen) return;
    const onKey = (e) => e.key === "Escape" && setMobileOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [mobileOpen]);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-[100]">
    

        {/* MAIN NAV */}
        <motion.div
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.15, ease }}
          className={`relative transition-all duration-300 ${scrolled ? "pt-2" : "pt-0"}`}
        >
          <nav
            aria-label="Main navigation"
            className="relative mx-auto flex max-w-[1450px] items-stretch"
          >
            {/* Logo block with navy slant */}
            <Link
              href="/"
              aria-label="Elisa Biotech home"
              onClick={() => setMobileOpen(false)}
              className="relative z-10 flex  w-[2360px] shrink-0 items-center overflow-hidden bg-gradient-to-r from-[#002f52] to-[#0a4e74] pl-6 sm:h-[84px] sm:w-[260px] sm:pl-10 lg:w-[300px] lg:pl-12"
              style={{ clipPath: "polygon(0 0, 100% 0, 88% 100%, 0 100%)" }}
            >
              <motion.img
                src="/Elisa Logo.webp"
                alt="Elisa Biotech"
                initial={{ opacity: 0, x: -15 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.6, ease }}
                className="h-[52px] w-auto object-contain sm:h-[60px]"
              />
            </Link>

            {/* White glass pill */}
            <div
              className={`relative -ml-12 flex flex-1 items-center gap-4 rounded-r-full rounded-l-[28px] border border-white bg-white/90 pl-14 pr-3 backdrop-blur-xl transition-all duration-300 sm:-ml-14 sm:pr-4 lg:pr-5 ${
                scrolled
                  ? "h-[66px] shadow-[0_14px_40px_rgba(8,74,105,0.18)]"
                  : "h-[74px] shadow-[0_12px_40px_rgba(8,74,105,0.12)] sm:h-[80px]"
              }`}
            >
              {/* Desktop nav links */}
              <div className="hidden flex-1 items-center justify-center gap-6 xl:flex 2xl:gap-9">
                {navItems.map((item) => {
                  const isActive = activeHref === item.href;
                  return (
                    <Link
                      key={item.label}
                      href={item.href}
                      onClick={() => setActiveHref(item.href)}
                      className={`group relative inline-flex items-center gap-1.5 py-2 text-[15px] font-bold transition-colors duration-200 ${
                        isActive ? "text-[#0b8fa0]" : "text-[#0b2f52] hover:text-[#0b8fa0]"
                      }`}
                    >
                      {item.label}
                      {item.dropdown && (
                        <ChevronDown size={16} strokeWidth={2.2} className="transition-transform group-hover:rotate-180" />
                      )}
                      <span
                        className={`absolute -bottom-1 left-0 h-[3px] w-full origin-left rounded-full bg-[#0a8fa3] transition-transform duration-300 ${
                          isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                        }`}
                      />
                    </Link>
                  );
                })}
              </div>

              {/* Spacer on smaller screens */}
              <div className="flex-1 xl:hidden" />

              {/* Desktop actions */}
              <div className="hidden shrink-0 items-center gap-3 xl:flex">
                <span className="h-9 w-px bg-[#0a8fa3]/30" />

                <motion.a
                  href="tel:+918048268766"
                  aria-label="Call Elisa Biotech"
                  whileHover={{ y: -3 }}
                  className="grid h-11 w-11 place-items-center rounded-full border border-[#cfe9ef] bg-white text-[#0b5a86] shadow-sm transition-colors hover:bg-[#0b5a86] hover:text-white"
                >
                  <Phone size={18} />
                </motion.a>

                <motion.a
                  href="https://wa.me/918048268766"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Chat on WhatsApp"
                  whileHover={{ y: -3 }}
                  className="grid h-11 w-11 place-items-center rounded-full border border-[#cdeedd] bg-white text-[#25D366] shadow-sm transition-colors hover:bg-[#25D366] hover:text-white"
                >
                  <WhatsAppIcon size={20} />
                </motion.a>

                <motion.button
                  type="button"
                  aria-label={searchOpen ? "Close search" : "Open search"}
                  onClick={() => setSearchOpen((v) => !v)}
                  whileHover={{ y: -3 }}
                  className={`grid h-11 w-11 place-items-center rounded-full border shadow-sm transition-colors ${
                    searchOpen
                      ? "border-[#0b5a86] bg-[#0b5a86] text-white"
                      : "border-[#cfe9ef] bg-white text-[#0b2f52] hover:bg-[#e6f6f9]"
                  }`}
                >
                  {searchOpen ? <X size={18} /> : <Search size={18} />}
                </motion.button>

                <motion.button
                  type="button"
                  onClick={() => setPopupOpen(true)}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  className="group inline-flex h-12 items-center gap-2.5 rounded-full bg-gradient-to-r from-[#07395a] to-[#0a6f8e] px-6 text-[14px] font-bold text-white shadow-[0_12px_28px_rgba(7,57,90,0.3)]"
                >
                  Get in Touch
                  <ArrowUpRight size={18} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </motion.button>
              </div>

              {/* Mobile: search + menu toggle */}
              <div className="flex items-center gap-2 xl:hidden">
                <button
                  type="button"
                  aria-label="Open search"
                  onClick={() => setSearchOpen((v) => !v)}
                  className="grid h-10 w-10 place-items-center rounded-full bg-[#e6f6f9] text-[#0b5a86]"
                >
                  <Search size={18} />
                </button>
                <button
                  type="button"
                  aria-label={mobileOpen ? "Close menu" : "Open menu"}
                  aria-expanded={mobileOpen}
                  onClick={() => setMobileOpen((v) => !v)}
                  className="grid h-10 w-10 place-items-center rounded-full bg-[#0b5a86] text-white"
                >
                  {mobileOpen ? <X size={20} /> : <Menu size={20} />}
                </button>
              </div>
            </div>
          </nav>

          {/* Search dropdown */}
          <AnimatePresence>
            {searchOpen && (
              <motion.form
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25, ease }}
                onSubmit={(e) => {
                  e.preventDefault();
                  setSearchOpen(false);
                }}
                className="absolute right-3 top-[calc(100%+10px)] flex w-[min(430px,calc(100vw-24px))] items-center gap-3 rounded-2xl border border-white bg-white/95 p-3 pl-5 text-[#0b5a86] shadow-[0_18px_45px_rgba(8,74,105,0.18)] backdrop-blur-xl sm:right-8"
              >
                <Search size={18} />
                <input
                  type="search"
                  autoFocus
                  placeholder="Search products, capabilities..."
                  aria-label="Search website"
                  className="min-w-0 flex-1 bg-transparent text-[14px] text-[#0c2d48] outline-none placeholder:text-slate-400"
                />
                <button
                  type="submit"
                  className="rounded-xl bg-[#0b5a86] px-4 py-2.5 text-xs font-bold text-white transition hover:bg-[#07395a]"
                >
                  Search
                </button>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>
      </header>

      {/* Mobile overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.button
            type="button"
            aria-label="Close navigation overlay"
            onClick={() => setMobileOpen(false)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[109] bg-[#051e30]/40 backdrop-blur-sm xl:hidden"
          />
        )}
      </AnimatePresence>

      {/* Mobile slide-in menu */}
      <aside
        className={`fixed right-0 top-0 z-[110] flex h-dvh w-[min(390px,88vw)] flex-col overflow-y-auto bg-gradient-to-br from-[#f8fdff] to-[#e6f6f9] p-6 shadow-[-20px_0_60px_rgba(5,48,70,0.15)] transition-transform duration-500 ease-[cubic-bezier(0.2,0.8,0.2,1)] xl:hidden ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
        aria-hidden={!mobileOpen}
      >
        <div className="flex items-center justify-between border-b border-[#cfe9ef] pb-6">
          <span className="text-[15px] font-extrabold text-[#0b2f52]">Explore Elisa Biotech</span>
          <button
            type="button"
            aria-label="Close menu"
            onClick={() => setMobileOpen(false)}
            className="grid h-10 w-10 place-items-center rounded-full bg-white text-[#0b5a86] transition hover:bg-[#e6f6f9]"
          >
            <X size={20} />
          </button>
        </div>

        <div className="flex flex-col py-4">
          {navItems.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, x: 20 }}
              animate={mobileOpen ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: index * 0.06 + 0.1, duration: 0.4, ease }}
            >
              <Link
                href={item.href}
                onClick={() => {
                  setActiveHref(item.href);
                  setMobileOpen(false);
                }}
                className={`flex min-h-[57px] items-center justify-between border-b border-[#dcecf0] text-base font-bold ${
                  activeHref === item.href ? "text-[#0b8fa0]" : "text-[#0b2f52]"
                }`}
              >
                <span>{item.label}</span>
                {item.dropdown ? (
                  <ChevronDown size={17} className="text-[#0a8fa3]" />
                ) : (
                  <ArrowUpRight size={16} className="text-[#0a8fa3]" />
                )}
              </Link>
            </motion.div>
          ))}
        </div>

        <button
          type="button"
          onClick={() => {
            setMobileOpen(false);
            setPopupOpen(true);
          }}
          className="mt-auto inline-flex min-h-[55px] items-center justify-center gap-3 rounded-full bg-gradient-to-r from-[#07395a] to-[#0a6f8e] text-sm font-bold text-white shadow-lg transition hover:-translate-y-1"
        >
          Get in Touch <ArrowUpRight size={18} />
        </button>

        <p className="mt-5 text-center text-[10px] tracking-[1.5px] text-[#6b8794]">
          Science · Innovation · Better Health
        </p>
      </aside>

      <Popup isOpen={popupOpen} onClose={() => setPopupOpen(false)} />
    </>
  );
}