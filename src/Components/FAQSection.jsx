
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
    <section className="relative min-h-screen overflow-hidden bg-[#F1F8FA] flex items-center py-16 lg:py-12">

      {/* Background details */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-cyan-200/20 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal-200/30 rounded-full blur-[110px]" />

      <div className="relative z-10 max-w-[1440px] w-full mx-auto px-5 sm:px-8 lg:px-12">

        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-10 xl:gap-16 items-center">

          {/* LEFT CONTENT */}
          <div className="relative z-10">

            <motion.div
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-6"
            >
              <span className="w-12 h-[3px] bg-[#07999B]" />
              <span className="text-xs sm:text-sm uppercase tracking-[0.24em] font-bold text-[#527080]">
                Frequently Asked Questions
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-[42px] sm:text-5xl xl:text-[52px] leading-[1.08] 
              font-bold tracking-tight text-[#092B40]"
            >
              Have Questions?
              <span className="block text-[#07999B]">
                We've Got Answers.
              </span>
            </motion.h2>



            {/* FAQ ACCORDION */}
            <div className="space-y-3">
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
                        ? "bg-white shadow-[0_12px_35px_rgba(9,43,64,0.10)]"
                        : "bg-white/90 hover:bg-white shadow-sm"
                    }`}
                  >
                    <button
                      onClick={() =>
                        setActive(isActive ? -1 : index)
                      }
                      aria-expanded={isActive}
                      className={`w-full flex items-center gap-4 px-5 py-4 text-left transition-all ${
                        isActive
                          ? "bg-gradient-to-r from-[#07506B] to-[#087D89] text-white"
                          : "text-[#102E42]"
                      }`}
                    >
                      <span
                        className={`w-11 h-11 shrink-0 rounded-full flex items-center justify-center font-bold ${
                          isActive
                            ? "bg-[#12A8A6] text-white"
                            : "bg-[#DDF1F1] text-[#07506B]"
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

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, x: 30 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative min-h-[520px] lg:min-h-[650px] flex items-center justify-center"
          >

            {/* Image shape */}
            <div className="absolute inset-0 rounded-[48%_48%_42%_42%] bg-gradient-to-br from-[#12C3BC] to-[#07506B] rotate-[-5deg] scale-[1.015]" />

            <div className="relative w-full h-[520px] lg:h-[650px] overflow-hidden rounded-[48%_48%_42%_42%] border-[7px] border-white shadow-2xl">

              <Image
                src="/Pharmaceutical Product Display Collection.png"
                alt="Elisa Biotech laboratory research"
                fill
                priority
                className="object-cover object-center"
                sizes="w-full"
              />

              <div className="absolute inset-0 bg-gradient-to-t 
              from-[#062B40]/65 via-transparent to-transparent" />

              {/* <div className="absolute bottom-12 left-8 right-8 text-white">
                <span className="text-xs tracking-[0.25em] uppercase text-teal-200">
                  Science. Quality. Trust.
                </span>
                <h3 className="text-3xl md:text-4xl font-bold mt-3 leading-tight">
                  Advancing Quality
                  <br />
                  Through Innovation.
                </h3>
              </div> */}
            </div>

            {/* Floating icon */}
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute top-[12%] left-[-2%] md:left-[-5%] w-[82px] h-[82px] rounded-3xl bg-[#087F88] text-white shadow-xl flex items-center justify-center border-4 border-white"
            >
              <FlaskConical size={34} />
            </motion.div>

            {/* Floating contact card */}
            {/* <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 5, repeat: Infinity }}
              className="absolute bottom-[9%] right-[-1%] md:right-[-4%] max-w-[290px] w-[85%] rounded-3xl bg-white/95 backdrop-blur-xl p-5 shadow-2xl border border-white"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-[#DDF3F1] text-[#087F88] flex items-center justify-center">
                  <Headset size={25} />
                </div>
                <div>
                  <h4 className="font-bold text-[#092B40] text-lg">
                    Need more help?
                  </h4>
                  <p className="text-xs text-[#6C7E8B]">
                    Our team is here to assist you.
                  </p>
                </div>
              </div>

              <Link
                href="/contact-us"
                className="mt-5 w-full rounded-full bg-gradient-to-r from-[#087F88] to-[#13AAA5] text-white py-3 px-5 flex items-center justify-center gap-3 font-semibold hover:shadow-lg hover:scale-[1.02] transition-all"
              >
                Contact Us <ArrowUpRight size={19} />
              </Link>
            </motion.div> */}

            {/* Decorative DNA */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 35,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute top-[8%] right-[3%] text-[#0C9C9D]/20 pointer-events-none"
            >
              <Atom size={95} strokeWidth={0.8} />
            </motion.div>

            <div className="absolute bottom-[6%] left-[0%] text-[#0C9C9D]/20 pointer-events-none">
              <Dna size={90} strokeWidth={0.8} />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
