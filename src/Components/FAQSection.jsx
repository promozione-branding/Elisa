
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Plus,
  Minus,
  ArrowUpRight,
  Headset,
  FlaskConical,
  Atom,
  Dna,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const faqs = [
  {
    question: "When was Elisa Biotech Pvt. Ltd. established?",
    answer:
      "Elisa Biotech Pvt. Ltd. was established in 2007 as a Private Limited Company at Badli Industrial Estate, Delhi, India.",
  },
  {
    question: "What products and solutions do you offer?",
    answer:
      "We offer biotechnology and laboratory-related products and solutions. Please contact our team for detailed product information and availability.",
  },
  {
    question: "Do you follow quality standards and compliance?",
    answer:
      "We are committed to maintaining product quality and professional standards throughout our business operations. Contact us for specific quality documentation.",
  },
  {
    question: "Can you support bulk or customized requirements?",
    answer:
      "Yes, our team can discuss bulk orders and specific requirements. Get in touch with us to discuss your needs.",
  },
  {
    question: "How can I get in touch with your team?",
    answer:
      "You can contact our team through our contact page or use the enquiry option to share your requirements.",
  },
];

export default function FAQSection() {
  const [active, setActive] = useState(0);

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#E8F7FA] flex items-center py-10 lg:py-12">

      {/* Background details */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-[#0876AD]/10 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#16A6B5]/15 rounded-full blur-[110px]" />

      <div className="relative z-10 max-w-[1440px] w-full mx-auto px-5 sm:px-8 lg:px-12">

        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-10 xl:gap-16 items-center">

          {/* Left IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, x: 30 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative min-h-[520px] lg:min-h-[650px] flex items-center justify-center"
          >

            {/* Image shape */}
            <div className="absolute inset-0 rounded-[48%_48%_42%_42%] bg-gradient-to-br from-[#0876AD] to-[#0B2D50] rotate-[-5deg] scale-[1.015]" />

            <div className="relative w-full h-[520px] lg:h-[650px] overflow-hidden rounded-[48%_48%_42%_42%] border-[7px] border-white shadow-2xl">

              <Image
                src="/Pharmaceutical Product Display Collection.png"
                alt="Elisa Biotech laboratory research"
                fill
                priority
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#0B2D50]/65 via-transparent to-transparent" />

            </div>

            {/* Floating icon */}
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute top-[12%] left-[-2%] md:left-[-5%] w-[82px] h-[82px] rounded-3xl bg-[#0876AD] text-white shadow-xl flex items-center justify-center border-4 border-white"
            >
              <FlaskConical size={34} />
            </motion.div>

            {/* Decorative Atom */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 35,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute top-[8%] right-[3%] text-[#16A6B5]/30 pointer-events-none"
            >
              <Atom size={95} strokeWidth={0.8} />
            </motion.div>

            {/* Decorative DNA */}
            <div className="absolute bottom-[6%] left-[0%] text-[#0876AD]/25 pointer-events-none">
              <Dna size={90} strokeWidth={0.8} />
            </div>
          </motion.div>

          {/* RIGHT CONTENT */}
          <div className="relative z-10">

            <motion.div
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-6"
            >
              <span className="w-12 h-[3px] bg-[#0876AD]" />
              <span className="text-xs sm:text-sm uppercase tracking-[0.24em] font-bold text-[#0876AD]">
                Frequently Asked Questions
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-[42px] sm:text-5xl xl:text-[45px] leading-[1.08] font-bold tracking-tight py-2 text-[#0B2D50]"
            >
              Have Questions?
              <span className="block text-[#0876AD]">
                We've Got Answers.
              </span>
            </motion.h2>

            {/* FAQ ACCORDION */}
            <div className="space-y-3 mt-5">
              {faqs.map((faq, index) => {
                const isActive = active === index;

                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.45,
                      delay: index * 0.08,
                    }}
                    className={`overflow-hidden rounded-2xl transition-all duration-300 ${
                      isActive
                        ? "bg-white shadow-[0_12px_35px_rgba(11,45,80,0.12)]"
                        : "bg-white/90 hover:bg-white shadow-sm"
                    }`}
                  >
                    <button
                      onClick={() => setActive(isActive ? -1 : index)}
                      aria-expanded={isActive}
                      className={`w-full flex items-center gap-4 px-5 py-4 text-left transition-all ${
                        isActive
                          ? "bg-gradient-to-r from-[#0B2D50] to-[#0876AD] text-white"
                          : "text-[#0B2D50]"
                      }`}
                    >
                      <span
                        className={`w-11 h-11 shrink-0 rounded-full flex items-center justify-center font-bold ${
                          isActive
                            ? "bg-[#16A6B5] text-white"
                            : "bg-[#E8F7FA] text-[#0876AD]"
                        }`}
                      >
                        Q
                      </span>

                      <span className="flex-1 text-[15px] sm:text-[17px] font-semibold">
                        {faq.question}
                      </span>

                      <span className="shrink-0">
                        {isActive ? (
                          <Minus size={21} />
                        ) : (
                          <Plus size={21} />
                        )}
                      </span>
                    </button>

                    <AnimatePresence initial={false}>
                      {isActive && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{
                            duration: 0.35,
                            ease: "easeInOut",
                          }}
                          className="overflow-hidden"
                        >
                          <p className="px-6 sm:px-8 py-5 pl-[76px] text-sm sm:text-[15px] leading-7 text-[#536879]">
                            {faq.answer}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
