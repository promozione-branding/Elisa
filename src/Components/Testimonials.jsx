
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Quote,
  Star,
  ArrowLeft,
  ArrowRight,
  FlaskConical,
  Atom,
  Dna,
} from "lucide-react";

const testimonials = [
  {
    name: "Dr. Rajesh Sharma",
    role: "Research Director",
    company: "Healthcare Research Group",
    text: "Elisa Biotech has consistently delivered excellent quality products and dependable service. Their professional approach and commitment to quality make them a trusted partner for our research requirements.",
    initials: "RS",
  },
  {
    name: "Amit Verma",
    role: "Procurement Manager",
    company: "Advanced Life Sciences",
    text: "We appreciate the quality, reliability and timely support provided by Elisa Biotech. Their team understands our requirements and ensures that every order is handled professionally.",
    initials: "AV",
  },
  {
    name: "Priya Mehta",
    role: "Laboratory Head",
    company: "BioTech Solutions",
    text: "Working with Elisa Biotech has been a great experience. Their product quality and customer support have helped us maintain consistency in our laboratory operations.",
    initials: "PM",
  },
];

const fadeVariants = {
  initial: { opacity: 0, y: 25, rotateX: 8 },
  animate: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: { duration: 0.65, ease: "easeOut" },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: { duration: 0.3 },
  },
};

export default function Testimonials() {
  const [active, setActive] = useState(0);

  const next = () =>
    setActive((prev) => (prev + 1) % testimonials.length);

  const prev = () =>
    setActive(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );

  const item = testimonials[active];

  return (
   <section className="relative overflow-hidden bg-[#071C2B] min-h-screen flex flex-col justify-center py-12 md:py-16 text-white">

      {/* Background decorations */}
      <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-cyan-500/10 blur-[120px]" />
      <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-teal-500/10 blur-[120px]" />

      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
        className="absolute top-20 right-[12%] text-cyan-300/10"
      >
        <Atom size={180} strokeWidth={0.6} />
      </motion.div>

      <motion.div
        animate={{ y: [0, -18, 0], rotate: [0, 12, 0] }}
        transition={{ duration: 7, repeat: Infinity }}
        className="absolute bottom-16 left-[7%] text-teal-300/10"
      >
        <Dna size={110} strokeWidth={0.8} />
      </motion.div>

     <div className="relative z-10 max-w-7xl w-full mx-auto px-5 md:px-10 flex-1 flex flex-col justify-center">
        {/* Heading */}
       <div className="grid lg:grid-cols-2 gap-8 items-end mb-10">

          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-6"
            >
              <span className="w-10 h-[2px] bg-teal-400" />
              <span className="text-teal-300 uppercase tracking-[0.3em] text-xs font-semibold">
                Client Experiences
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-4xl sm:text-5xl md:text-6xl font-semibold leading-[1.1] tracking-tight"
            >
              Trust Built Through
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-cyan-400">
                Every Discovery.
              </span>
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-slate-400 text-base md:text-lg leading-8 max-w-lg lg:ml-auto"
          >
            Since 2007, Elisa Biotech has been committed to delivering
            quality, reliability and trusted solutions. Here's what our
            valued customers have to say about working with us.
          </motion.p>
        </div>

        {/* Main testimonial */}
       <div className="grid lg:grid-cols-[0.8fr_1.6fr] gap-5">

          {/* Left information panel */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative min-h-[350px] rounded-[28px] overflow-hidden 
            bg-gradient-to-br from-[#0C3447] to-[#0B2638] border border-white/10 p-3 md:p-10 flex flex-col justify-between"
          >
            <div>
              <div className="w-14 h-14 rounded-2xl bg-teal-400/10 border border-teal-300/20 flex items-center justify-center text-teal-300 mb-10">
                <FlaskConical size={27} />
              </div>

              <h3 className="text-3xl md:text-4xl font-semibold leading-tight">
                Excellence
                <br />
                That Speaks
                <br />
                <span className="text-teal-300">For Itself.</span>
              </h3>

              {/* <p className="mt-5 text-slate-400 leading-7 text-sm">
                Building lasting relationships through quality products,
                scientific expertise and customer satisfaction.
              </p> */}
            </div>

            <div className="pt-8 mt-8 border-t border-white/10">
              <p className="text-4xl font-bold text-white">2007</p>
              <p className="text-xs tracking-[0.2em] uppercase text-teal-300 mt-2">
                Our Journey Began
              </p>
            </div>

            <div className="absolute -right-12 -top-12 w-48 h-48 border border-teal-300/10 rounded-full" />
            <div className="absolute -right-5 -top-5 w-32 h-32 border border-teal-300/10 rounded-full" />
          </motion.div>

          {/* Testimonial card */}
          <div className="relative rounded-[28px] bg-[#F4F8FA] text-[#102B3A] p-3 md:p-12 min-h-[450px] flex flex-col justify-between overflow-hidden">

            <div className="absolute -right-10 -top-10 w-64 h-64 rounded-full bg-teal-100/60 blur-3xl" />

            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                variants={fadeVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                className="relative z-10 flex flex-col h-full"
              >
                <div className="flex justify-between items-start">
                  <div className="text-teal-600">
                    <Quote size={58} fill="currentColor" strokeWidth={0} />
                  </div>

                  <span className="text-xs uppercase tracking-[0.2em] text-slate-400 font-semibold">
                    0{active + 1} / 0{testimonials.length}
                  </span>
                </div>

                <div className="mt-4 mb-7">
                  <div className="flex gap-1 text-amber-500 mb-6">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} size={17} fill="currentColor" />
                    ))}
                  </div>

                  <p className="text-xl sm:text-2xl md:text-[20px] leading-[1.55] font-medium tracking-tight">
                    "{item.text}"
                  </p>
                </div>

                <div className="mt-auto pt-7 border-t border-slate-200 flex flex-wrap items-center justify-between gap-5">

                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-teal-600 to-cyan-700 flex items-center justify-center text-white text-lg font-bold shadow-lg">
                      {item.initials}
                    </div>

                    <div>
                      <h4 className="font-bold text-base">{item.name}</h4>
                      <p className="text-sm text-slate-500 mt-1">
                        {item.role}, {item.company}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={prev}
                      aria-label="Previous testimonial"
                      className="w-12 h-12 rounded-full border border-slate-300 hover:bg-[#0B3446] hover:text-white transition-all flex items-center justify-center"
                    >
                      <ArrowLeft size={19} />
                    </button>

                    <button
                      onClick={next}
                      aria-label="Next testimonial"
                      className="w-12 h-12 rounded-full bg-[#0B3446] text-white hover:bg-teal-600 transition-all flex items-center justify-center"
                    >
                      <ArrowRight size={19} />
                    </button>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Bottom indicators */}
        <div className="flex items-center justify-center gap-3 mt-9">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActive(index)}
              aria-label={`Go to testimonial ${index + 1}`}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                active === index
                  ? "w-12 bg-teal-400"
                  : "w-5 bg-white/20 hover:bg-white/50"
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
