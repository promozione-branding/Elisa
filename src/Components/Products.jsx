
"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";

const products = [
  {
    id: "01",
    name: "Pharmaceutical Tablets",
    eyebrow: "PHARMACEUTICAL COLLECTION",
    title: "Pharmaceutical Tablets",
    description:
      "Explore our pharmaceutical tablet range, supplied through our wholesale trading portfolio.",
    image: "/Elyvit Syru.webp",
    href: "/products",
  },
  {
    id: "02",
    name: "Allopathic Tablets",
    eyebrow: "ALLOPATHIC COLLECTION",
    title: "Allopathic Medicines",
    description:
      "Discover our range of allopathic tablet products for pharmaceutical wholesale requirements.",
    image: "/Elyvit Syru.webp",
    href: "/products",
  },
  {
    id: "03",
    name: "Pharmaceutical Capsules",
    eyebrow: "CAPSULE COLLECTION",
    title: "Pharmaceutical Capsules",
    description:
      "Browse pharmaceutical capsules from our diverse product portfolio.",
    image: "/Elyvit Syru.webp",
    href: "/products",
  },
  {
    id: "04",
    name: "Wholesale Trading",
    eyebrow: "ELISA BIOTECH",
    title: "Your Wholesale Healthcare Partner",
    description:
      "Reliable pharmaceutical wholesale support with a focus on product selection and dependable service.",
    image: "/Elyvit Syru.webp",
    href: "/contact-us",
  },
];

const ease = [0.22, 1, 0.36, 1];

export default function Products() {
  const [activeIndex, setActiveIndex] = useState(0);
  const cardContainerRef = useRef(null);

  const activeProduct = products[activeIndex];

 const selectProduct = (index) => {
  setActiveIndex(index);

  const container = cardContainerRef.current;
  const card = container?.children[index];

  if (!container || !card) return;

  const maxScroll = container.scrollWidth - container.clientWidth;

  const targetScroll = Math.max(
    0,
    Math.min(
      card.offsetLeft - container.offsetLeft,
      maxScroll
    )
  );

  container.scrollTo({
    left: targetScroll,
    behavior: "smooth",
  });
};
  const previous = () => {
    selectProduct(
      (activeIndex - 1 + products.length) % products.length
    );
  };

  const next = () => {
    selectProduct((activeIndex + 1) % products.length);
  };

  return (
    <section
      id="products"
      className="relative isolate min-h-[680px] overflow-hidden bg-[#062b49] text-white lg:h-[650px] lg:min-h-0"
    >
      {/* BACKGROUND PRODUCT IMAGE */}
      <AnimatePresence mode="sync">
        <motion.img
          key={activeProduct.image}
          src={activeProduct.image}
          alt={activeProduct.name}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            opacity: { duration: 0.8, ease },
            scale: { duration: 1.3, ease },
          }}
          className="absolute inset-0 -z-20 h-full w-full object-cover"
        />
      </AnimatePresence>

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 -z-10 bg-[#061f38]/75" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#031c32]/95 via-[#073b60]/65 to-[#041f39]/60" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#041b30]/60 via-transparent to-[#062a48]/25" />

      {/* BACKGROUND LIGHT */}
      <motion.div
        className="pointer-events-none absolute -right-20 top-0 -z-10 h-[500px] w-[500px] rounded-full bg-[#05b8bd]/20 blur-[120px]"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, -35, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* CONTENT */}
      <div className="relative mx-auto flex min-h-[680px] max-w-[1600px] flex-col justify-center px-5 py-16 sm:px-8 lg:h-full lg:min-h-0 lg:px-[3%] lg:py-10">

        <div className="grid items-center gap-12 lg:grid-cols-[0.82fr_1.5fr] lg:gap-10">

          {/* LEFT PRODUCT INFORMATION */}
          <div className="relative z-20 max-w-[470px]">
            <motion.div
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease }}
              className="mb-5 flex items-center gap-3"
            >
              <span className="h-[2px] w-9 bg-[#14c2bd]" />
              <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-white/80">
                Elisa Biotech Collection
              </span>
            </motion.div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 25, filter: "blur(5px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -15, filter: "blur(4px)" }}
                transition={{ duration: 0.5, ease }}
              >
                <p className="mb-3 text-sm font-semibold text-[#80d5d5]">
                  {activeProduct.eyebrow}
                </p>

                <h2 className="text-[42px] font-bold uppercase leading-[0.98] tracking-[-0.045em] text-white sm:text-6xl lg:text-[65px]">
                  {activeProduct.title}
                </h2>

                <p className="mt-6 max-w-[410px] text-[14px] leading-7 text-white/75 sm:text-[15px]">
                  {activeProduct.description}
                </p>

                <Link
                  href={activeProduct.href}
                  className="group mt-8 inline-flex min-h-[50px] items-center gap-5 rounded-full bg-[#08a99e] px-6 text-sm font-semibold text-white shadow-[0_10px_35px_rgba(0,190,180,0.2)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#0bc0b2]"
                >
                  Explore Product
                  <ArrowUpRight
                    size={19}
                    className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </Link>
              </motion.div>
            </AnimatePresence>

            {/* ACTIVE PRODUCT COUNTER */}
            <div className="mt-10 flex items-center gap-3">
              <span className="text-3xl font-bold tabular-nums text-white">
                {activeProduct.id}
              </span>
              <span className="text-sm text-white/50">
                / {String(products.length).padStart(2, "0")}
              </span>
              <div className="ml-3 h-[2px] w-20 overflow-hidden bg-white/20">
                <motion.div
                  className="h-full bg-[#13c3bd]"
                  animate={{
                    width: `${((activeIndex + 1) / products.length) * 100}%`,
                  }}
                  transition={{ duration: 0.5, ease }}
                />
              </div>
            </div>
          </div>

          {/* RIGHT PRODUCT CARDS */}
          <div className="relative z-20 min-w-0">

            <div
              ref={cardContainerRef}
              className="flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            >
              {products.map((product, index) => {
                const selected = activeIndex === index;

                return (
                  <motion.button
                    key={product.id}
                    type="button"
                    onClick={() => selectProduct(index)}
                    whileHover={{ y: -7 }}
                    whileTap={{ scale: 0.98 }}
                    aria-pressed={selected}
                    className={`group relative h-[210px] w-[82%] shrink-0 snap-center overflow-hidden rounded-2xl border text-left transition-all duration-500 sm:h-[250px] sm:w-[46%] lg:h-[205px] lg:w-[48%] xl:h-[230px] ${
                      selected
                        ? "border-[#16c5bd] shadow-[0_0_25px_rgba(12,190,185,0.22)]"
                        : "border-white/20 hover:border-white/60"
                    }`}
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      className={`absolute inset-0 h-full w-full object-cover transition-transform duration-700 ${
                        selected
                          ? "scale-100"
                          : "scale-105 group-hover:scale-110"
                      }`}
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#031827]/95 via-[#062b46]/15 to-transparent" />

                    {/* SELECTED INDICATOR */}
                    <motion.span
                      initial={false}
                      animate={{
                        opacity: selected ? 1 : 0,
                        scale: selected ? 1 : 0.5,
                      }}
                      className="absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-full bg-white/90 text-[#087f8d] shadow-lg"
                    >
                      <ArrowUpRight size={19} />
                    </motion.span>

                    <div className="absolute bottom-0 left-0 w-full p-4">
                      <p className="mb-1 text-[9px] font-bold uppercase tracking-[0.14em] text-white/65">
                        {product.eyebrow}
                      </p>
                      <h3 className="text-[55px] font-bold leading-tight text-white sm:text-xl">
                        {product.name}
                      </h3>
                    </div>
                  </motion.button>
                );
              })}
            </div>

         {/* SLIDER CONTROLS */}
<div className="relative z-30 mt-5 flex items-center justify-between gap-5">

  <div className="flex items-center gap-3">

    {/* Previous */}
    <motion.button
      type="button"
      onClick={previous}
      whileHover={{ scale: 1.08, x: -3 }}
      whileTap={{ scale: 0.9 }}
      aria-label="Previous product"
      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/45 bg-white/10 text-white transition-all duration-300 hover:border-[#12bbb6] hover:bg-[#12bbb6]"
    >
      <ArrowLeft
        className="!block !h-5 !w-5 shrink-0"
        stroke="currentColor"
        strokeWidth={2.5}
        fill="none"
      />
    </motion.button>

    {/* Next */}
    <motion.button
      type="button"
      onClick={next}
      whileHover={{ scale: 1.08, x: 3 }}
      whileTap={{ scale: 0.9 }}
      aria-label="Next product"
      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/45 bg-white/10 text-white transition-all duration-300 hover:border-[#12bbb6] hover:bg-[#12bbb6]"
    >
      <ArrowRight
        className="!block !h-5 !w-5 shrink-0"
        stroke="currentColor"
        strokeWidth={2.5}
        fill="none"
      />
    </motion.button>

    {/* Progress bar */}
    <div className="ml-2 hidden h-[2px] w-28 overflow-hidden bg-white/25 sm:block">
      <motion.div
        className="h-full bg-[#14c2bd]"
        animate={{
          width: `${((activeIndex + 1) / products.length) * 100}%`,
        }}
        transition={{ duration: 0.5 }}
      />
    </div>
  </div>

  {/* Counter */}
  <div className="flex items-center gap-2 text-sm font-semibold text-white/60">
    <span className="text-2xl text-white">
      {activeProduct.id}
    </span>
    / {String(products.length).padStart(2, "0")}
  </div>
</div>

            {/* SCROLL HINT */}
            <p className="mt-5 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/50">
              Select a collection to explore
            </p>
          </div>
        </div>
      </div>

      {/* BOTTOM ACCENT */}
      <div className="absolute bottom-0 left-0 h-[3px] w-full bg-gradient-to-r from-transparent via-[#13b9b6] to-transparent" />
    </section>
  );
}
