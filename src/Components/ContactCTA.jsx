
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Pill,
  ShieldCheck,
  Truck,
  UserRound,
  Phone,
  Mail,
  Layers3,
  MessageSquare,
  Plus,
  FlaskConical,
} from "lucide-react";

const benefits = [
  { icon: Pill, title: "Wide", subtitle: "Product Range" },
  { icon: ShieldCheck, title: "Assured", subtitle: "Quality" },
  { icon: Truck, title: "On-Time", subtitle: "Delivery" },
];

const products = [
  "Pharmaceutical Tablets",
  "Allopathic Tablets",
  "Pharmaceutical Capsules",
  "Other Product Enquiry",
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function ContactCTA() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    product: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="relative isolate overflow-hidden bg-[#E8F7FA] text-[#0B2D50]"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 -z-20 bg-[linear-gradient(112deg,#ffffff_0%,#E8F7FA_48%,#D9F0F6_100%)]" />

      <div className="pointer-events-none absolute -left-24 top-20 -z-10 h-72 w-72 rounded-full bg-[#0876AD]/10 blur-[90px]" />

      <div className="pointer-events-none absolute bottom-[-170px] right-[-100px] -z-10 h-[430px] w-[430px] rounded-full bg-[#16A6B5]/15 blur-[100px]" />

      <div className="mx-auto flex min-h-[100svh] w-full max-w-[1600px] items-center px-5 py-14 sm:px-8 lg:h-full lg:min-h-0 lg:px-12 lg:py-8 xl:px-16">

        <div className="grid w-full items-center gap-12 lg:grid-cols-[1.04fr_0.96fr] lg:gap-8 xl:gap-14">

          {/* LEFT CONTENT */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="relative z-10 order-2 pb-4 lg:order-1 lg:pb-0"
          >
            <motion.div
              variants={fadeUp}
              className="mb-7 inline-flex items-center gap-3"
            >
              <span className="grid h-10 w-10 place-items-center rounded-full border-2 border-[#0876AD] text-[#0876AD]">
                <Pill size={21} strokeWidth={1.8} />
              </span>

              <span className="text-[19px] font-bold tracking-tight text-[#0B2D50]">
                Elisa Biotech
              </span>

              <span className="ml-2 h-[2px] w-12 bg-[#0876AD]" />
            </motion.div>

            <motion.h2
              variants={fadeUp}
              className="max-w-[760px] text-[38px] font-bold leading-[1.06] tracking-[-0.055em] text-[#0B2D50] sm:text-[48px] md:text-[56px] xl:text-[62px]"
            >
              Grow Your
              <br />
              Pharmaceutical Business
              <br />
              with a{" "}
              <span className="relative inline-block text-[#0876AD]">
                Trusted Partner
                <span className="absolute -bottom-2 left-0 h-[4px] w-[82%] -rotate-2 rounded-full bg-[#16A6B5]" />
              </span>
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="mt-8 max-w-[650px] text-[15px] leading-[1.75] text-[#35536F] sm:text-[17px] xl:text-[18px]"
            >
              Wholesale supply of high-quality pharmaceutical tablets,
              allopathic tablets and capsules with assured quality, timely
              delivery and competitive pricing.
            </motion.p>

            {/* Benefits */}
            <motion.div
              variants={fadeUp}
              className="mt-8 grid max-w-[620px] grid-cols-3"
            >
              {benefits.map((item, index) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className={`flex flex-col items-center px-2 text-center sm:px-5 ${
                      index !== 2 ? "border-r border-[#B9DCE7]" : ""
                    }`}
                  >
                    <span className="mb-3 grid h-16 w-16 place-items-center rounded-[22px] bg-[#E8F7FA] text-[#0876AD] shadow-[inset_0_0_0_1px_rgba(8,118,173,0.12)] sm:h-[76px] sm:w-[76px]">
                      <Icon size={34} strokeWidth={1.8} />
                    </span>

                    <span className="text-[13px] font-bold leading-tight text-[#0B2D50] sm:text-[16px]">
                      {item.title}
                    </span>

                    <span className="text-[13px] font-bold leading-tight text-[#0B2D50] sm:text-[16px]">
                      {item.subtitle}
                    </span>
                  </div>
                );
              })}
            </motion.div>

            {/* Product image area */}
            <motion.div
              variants={fadeUp}
              className="pointer-events-none relative mt-5 h-[190px] w-full max-w-[760px] sm:h-[235px] lg:mt-2 lg:h-[210px] xl:h-[245px]"
            />
          </motion.div>

          {/* RIGHT NAVY PANEL + FORM */}
          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
            className="relative order-1 mx-auto flex min-h-[570px] w-full max-w-[690px] items-center justify-center lg:order-2 lg:min-h-[min(78vh,760px)]"
          >

            {/* Navy curved backdrop */}
            <div className="absolute inset-y-[-8%] right-[-8%] w-[88%] overflow-hidden rounded-[46%_0_0_46%] bg-gradient-to-br from-[#0B2D50] via-[#0B3F68] to-[#0876AD] lg:right-[-13%]">

              <div className="absolute -right-20 top-[-12%] h-[340px] w-[340px] rounded-full border border-[#16A6B5]/30" />

              <div className="absolute right-10 top-8 flex gap-3 text-white/75">
                <span className="grid h-14 w-14 place-items-center rounded-2xl border border-white/25 bg-white/10">
                  <Plus size={30} />
                </span>

                <span className="grid h-14 w-14 place-items-center rounded-2xl border border-white/25 bg-white/10">
                  <Pill size={27} />
                </span>

                <span className="hidden h-14 w-14 place-items-center rounded-2xl border border-white/25 bg-white/10 sm:grid">
                  <FlaskConical size={27} />
                </span>
              </div>
            </div>

            {/* Teal accent */}
            <div className="pointer-events-none absolute bottom-[3%] left-[-4%] h-[65%] w-[20%] rounded-l-full border-l-[7px] border-[#16A6B5] opacity-90" />

            {/* Form card */}
            <div className="relative z-10 w-full rounded-[30px] border border-white/80 bg-white/95 px-5 pb-7 pt-10 shadow-[0_28px_80px_rgba(11,45,80,0.22)] backdrop-blur-xl sm:rounded-[38px] sm:px-9 sm:pb-9 sm:pt-12 lg:ml-2 lg:px-10">

              <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 rounded-[18px] bg-gradient-to-r from-[#0B2D50] to-[#0876AD] px-9 py-3 text-[12px] font-bold uppercase tracking-[0.2em] text-white shadow-lg">
                Get In Touch
              </div>

              <div className="mb-7 flex items-center gap-5">
                <span className="hidden h-[74px] w-[74px] shrink-0 place-items-center rounded-[25px] bg-[#E8F7FA] text-[#0876AD] shadow-[0_12px_25px_rgba(8,118,173,0.12)] sm:grid">
                  <Mail size={36} strokeWidth={1.7} />
                </span>

                <div>
                  <h3 className="text-[32px] font-bold leading-tight tracking-[-0.045em] text-[#0B2D50] sm:text-[38px]">
                    Send Your Enquiry
                  </h3>

                  <p className="mt-2 text-[13px] leading-relaxed text-[#536D83] sm:text-[15px]">
                    Share your requirement and our team will get back to you shortly.
                  </p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-3.5">

                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">

                  <label className="relative block">
                    <UserRound className="absolute left-4 top-1/2 -translate-y-1/2 text-[#0876AD]" size={20} />

                    <input
                      required
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your Name *"
                      className="h-[54px] w-full rounded-xl border border-[#C5DCE6] bg-white pl-12 pr-4 text-sm text-[#0B2D50] outline-none transition placeholder:text-[#78909F] focus:border-[#0876AD] focus:ring-4 focus:ring-[#0876AD]/10"
                    />
                  </label>

                  <label className="relative block">
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-[#0876AD]" size={20} />

                    <input
                      required
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="Mobile Number *"
                      className="h-[54px] w-full rounded-xl border border-[#C5DCE6] bg-white pl-12 pr-4 text-sm text-[#0B2D50] outline-none transition placeholder:text-[#78909F] focus:border-[#0876AD] focus:ring-4 focus:ring-[#0876AD]/10"
                    />
                  </label>
                </div>

                <label className="relative block">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-[#0876AD]" size={20} />

                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                    className="h-[54px] w-full rounded-xl border border-[#C5DCE6] bg-white pl-12 pr-4 text-sm text-[#0B2D50] outline-none transition placeholder:text-[#78909F] focus:border-[#0876AD] focus:ring-4 focus:ring-[#0876AD]/10"
                  />
                </label>

                <label className="relative block">
                  <Layers3 className="absolute left-4 top-1/2 -translate-y-1/2 text-[#0876AD]" size={20} />

                  <select
                    required
                    name="product"
                    value={form.product}
                    onChange={handleChange}
                    className="h-[54px] w-full appearance-none rounded-xl border border-[#C5DCE6] bg-white pl-12 pr-10 text-sm text-[#536D83] outline-none transition focus:border-[#0876AD] focus:ring-4 focus:ring-[#0876AD]/10"
                  >
                    <option value="">Product Requirement *</option>
                    {products.map((product) => (
                      <option key={product} value={product}>
                        {product}
                      </option>
                    ))}
                  </select>

                  <span className="pointer-events-none absolute right-5 top-1/2 -translate-y-1/2 text-[#0876AD]">
                    ⌄
                  </span>
                </label>

                <label className="relative block">
                  <MessageSquare className="absolute left-4 top-4 text-[#0876AD]" size={20} />

                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Your Message"
                    className="min-h-[105px] w-full resize-y rounded-xl border border-[#C5DCE6] bg-white py-4 pl-12 pr-4 text-sm text-[#0B2D50] outline-none transition placeholder:text-[#78909F] focus:border-[#0876AD] focus:ring-4 focus:ring-[#0876AD]/10"
                  />
                </label>

                <button
                  type="submit"
                  className="group mx-auto mt-3 flex min-h-[62px] w-full max-w-[370px] items-center justify-between rounded-full bg-gradient-to-r from-[#0876AD] to-[#0B2D50] py-1.5 pl-7 pr-2 text-[15px] font-bold text-white shadow-[0_13px_28px_rgba(8,118,173,0.24)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_34px_rgba(8,118,173,0.32)]"
                >
                  <span className="flex-1 text-center">
                    Send Enquiry
                  </span>

                  <span className="grid h-12 w-12 place-items-center rounded-full bg-[#E8F7FA] text-[#0876AD] transition-transform duration-300 group-hover:translate-x-0.5">
                    <ArrowRight size={22} />
                  </span>
                </button>

                {submitted && (
                  <p className="text-center text-sm font-medium text-[#0876AD]" role="status">
                    Thank you! Your details are ready. Connect this form to your enquiry API to receive submissions.
                  </p>
                )}
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
