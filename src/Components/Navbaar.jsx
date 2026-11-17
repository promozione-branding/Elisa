"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  ArrowUpRight,
  Search,
  Menu,
  X,
  ChevronDown,
} from "lucide-react";

const navItems = [
  { label: "Home", href: "/", active: true },
  { label: "About Us", href: "/about-us" },
  { label: "Products", href: "/products", dropdown: true },
  { label: "Quality", href: "/quality" },
  { label: "Articles", href: "/articles" },
  { label: "Contact", href: "/contact-us" },
];

export default function Navbaar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      {/* Floating glass header */}
      <header
        className={`fixed left-0 top-[18px] z-[100] w-full px-3 transition-all duration-300 sm:px-6 ${
          scrolled ? "top-2" : ""
        }`}
      >
        <nav
          aria-label="Main navigation"
          className={`mx-auto flex w-full max-w-[1450px] items-center gap-3 rounded-[22px] border
             border-white/90 bg-white/[0.78] px-4 py-3 shadow-[0_12px_40px_rgba(8,74,105,0.11)] 
             backdrop-blur-2xl transition-all duration-300 sm:gap-6 sm:rounded-full sm:px-7 ${
            scrolled
              ? "min-h-[68px] bg-white/95 shadow-[0_14px_38px_rgba(8,74,105,0.15)]"
              : "min-h-[76px] sm:min-h-[82px]"
          }`}
        >
          {/* Logo */}
          <Link
            href="/"
            aria-label="Elisa Biotech home"
            onClick={() => setMobileOpen(false)}
            className="flex min-w-0 flex-1 items-center gap-2.5 text-[#102d4b] sm:flex-none sm:gap-3"
          >
           <img src="Elisa (1).webp" alt="Elisa Biotech" className="h-full w-[130px] object-contain" />        
            </Link>
          <span className="hidden h-10 w-px shrink-0 bg-gradient-to-b from-transparent via-[#058197]/50 to-transparent lg:block" />

          {/* Desktop navigation */}
          <div className="hidden min-w-0 flex-1 items-center justify-center gap-8 xl:flex 2xl:gap-7">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={`group relative inline-flex shrink-0 items-center gap-1.5 py-3 text-[15px] 
                    font-bold transition-colors duration-200 2xl:text-sm ${
                  item.active
                    ? "text-[#087d8a]"
                    : "text-[#142f49] hover:text-[#087d8a]"
                }`}
              >
                {item.label}
                {item.dropdown && <ChevronDown size={14} strokeWidth={2.2} />}
                <span
                  className={`absolute bottom-1 left-0 h-0.5 origin-left rounded-full bg-[#078c98] transition-transform duration-300 ${
                    item.active
                      ? "w-full scale-x-100"
                      : "w-full scale-x-0 group-hover:scale-x-100"
                  }`}
                />
              </Link>
            ))}
          </div>

          {/* Desktop actions */}
          <div className="hidden shrink-0 items-center gap-3 xl:flex">
            <span className="h-10 w-px bg-gradient-to-b from-transparent via-[#058197]/50 to-transparent" />

            <button
              type="button"
              aria-label={searchOpen ? "Close search" : "Open search"}
              onClick={() => setSearchOpen((value) => !value)}
              className={`grid h-12 w-12 place-items-center rounded-full border border-white/90 shadow-inner transition-all duration-300 hover:-translate-y-0.5 ${
                searchOpen
                  ? "bg-[#087f8d] text-white"
                  : "bg-white/70 text-[#0b405c] hover:bg-[#e7f8fb]"
              }`}
            >
              {searchOpen ? <X size={21} /> : <Search size={21} />}
            </button>

            <Link
              href="/contact"
              className="inline-flex min-h-12 items-center gap-4 rounded-full bg-gradient-to-r from-[#07556b] to-[#078e9e] px-6 text-[13px] font-extrabold text-white shadow-[0_9px_23px_rgba(3,112,130,0.2)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_14px_28px_rgba(3,112,130,0.27)]"
            >
              Get in Touch
              <ArrowUpRight size={18} />
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((value) => !value)}
            className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-white/75 text-[#0b405c] transition hover:bg-[#e7f8fb] xl:hidden"
          >
            {mobileOpen ? <X size={23} /> : <Menu size={23} />}
          </button>
        </nav>

        {/* Search dropdown */}
        {searchOpen && (
          <form
            onSubmit={(event) => {
              event.preventDefault();
              setSearchOpen(false);
            }}
            className="absolute right-6 top-[calc(100%+12px)] flex min-h-[66px] w-[min(430px,calc(100vw-48px))] animate-in slide-in-from-top-2 items-center gap-3 rounded-2xl border border-white/90 bg-white/95 p-3 pl-5 text-[#087f8d] shadow-[0_18px_45px_rgba(8,74,105,0.15)] backdrop-blur-xl duration-200"
          >
            <Search size={19} />
            <input
              type="search"
              placeholder="Search products, capabilities..."
              aria-label="Search website"
              autoFocus
              className="min-w-0 flex-1 bg-transparent text-[13px] text-[#12334d] outline-none placeholder:text-slate-400"
            />
            <button
              type="submit"
              className="rounded-xl bg-[#087f8d] px-4 py-2.5 text-xs font-bold text-white transition hover:bg-[#07556b]"
            >
              Search
            </button>
          </form>
        )}
      </header>

      {/* Mobile overlay */}
      <button
        type="button"
        aria-label="Close navigation overlay"
        onClick={() => setMobileOpen(false)}
        className={`fixed inset-0 z-[109] bg-[#051e30]/40 backdrop-blur-sm transition-all duration-300 xl:hidden ${
          mobileOpen ? "visible opacity-100" : "invisible opacity-0"
        }`}
      />

      {/* Mobile slide-in menu */}
      <aside
        className={`fixed right-0 top-0 z-[110] flex h-dvh w-[min(390px,88vw)] flex-col bg-gradient-to-br from-[#f8fdff] to-[#e7f8fb] p-6 shadow-[-20px_0_60px_rgba(5,48,70,0.15)] transition-transform duration-500 ease-[cubic-bezier(0.2,0.8,0.2,1)] xl:hidden ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
        aria-hidden={!mobileOpen}
      >
        <div className="flex items-center justify-between border-b border-[#d5e9ee] pb-6">
          <span className="text-[15px] font-extrabold text-[#0c344f]">
            Explore Elisa Biotech
          </span>
          <button
            type="button"
            aria-label="Close menu"
            onClick={() => setMobileOpen(false)}
            className="grid h-10 w-10 place-items-center rounded-full bg-white text-[#0c5268] transition hover:bg-[#dff4f7]"
          >
            <X size={22} />
          </button>
        </div>

        <div className="flex flex-col py-4">
          {navItems.map((item, index) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              style={{ transitionDelay: `${index * 45}ms` }}
              className="flex min-h-[57px] animate-in slide-in-from-right-3 items-center justify-between border-b border-[#dcecf0] text-base font-bold text-[#173950] duration-300"
            >
              <span>{item.label}</span>
              {item.dropdown ? (
                <ChevronDown size={17} className="text-[#078b96]" />
              ) : (
                <ArrowUpRight size={16} className="text-[#078b96]" />
              )}
            </Link>
          ))}
        </div>

        <Link
          href="/contact"
          onClick={() => setMobileOpen(false)}
          className="mt-auto inline-flex min-h-[55px] items-center justify-center gap-3 rounded-full bg-gradient-to-r from-[#07556b] to-[#078e9e] text-sm font-extrabold text-white shadow-lg shadow-[#087f8d]/20 transition hover:-translate-y-1"
        >
          Let&apos;s Talk <ArrowUpRight size={18} />
        </Link>

        <p className="mt-5 text-center text-[10px] tracking-[1.5px] text-[#78909e]">
          Science · Innovation · Better Health
        </p>
      </aside>
    </>
  );
}
