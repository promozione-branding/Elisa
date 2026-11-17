"use client";

import React, { useState } from "react";
import {
  MapPin, Phone, Mail, Clock, Send, Building2, ArrowUpRight,
  CheckCircle2, ChevronDown,
  Footprints
} from "lucide-react";
import Navbaar from "@/Components/Navbaar";
import Footer from "@/Components/Footer";

const contactDetails = [
  {
    icon: MapPin,
    title: "Our Office",
    lines: ["Elisa Biotech Pvt. Ltd.", "2nd Floor, House No 22, S-Block, Phase-1, Badli Industrial Area, New Delhi - 110042, Delhi, India"],
  },
  {
    icon: Phone,
    title: "Call Us",
    lines: ["+91-8048268766"],
  },
  {
    icon: Mail,
    title: "Email Us",
    lines: ["info@elisabiotechindia.com"],
  },
];

export default function ContactUsSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    enquiry: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const update = (e) => {
    setForm((current) => ({ ...current, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Website enquiry: ${form.enquiry || "General"}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\nEnquiry: ${form.enquiry}\n\nMessage:\n${form.message}`
    );
    // Replace this address with the company's verified enquiry email.
    window.location.href = `mailto:YOUR-EMAIL@example.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <main className="w-full overflow-hidden bg-[#f4faff] text-[#102b49]">

      {/* Hero – intentionally no site header or footer */}
      <section className="relative isolate min-h-[390px] overflow-hidden bg-[#eaf6fd]">
        <div className="absolute inset-y-0 right-0 w-full lg:w-[58%]">
          <img
            src="https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=1800&q=85"
            alt="Scientist working in a pharmaceutical laboratory"
            className="h-full w-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#edf7fd] via-[#edf7fd]/80 to-transparent lg:from-[#edf7fd] lg:via-[#edf7fd]/25 lg:to-transparent" />
        </div>

        <div className="absolute -right-16 top-0 hidden h-[470px] w-[58%] rounded-l-[48%] border-l-[12px] border-[#8bcf32] lg:block" />
        <div className="absolute -right-10 top-0 hidden h-[470px] w-[58%] rounded-l-[48%] border-l-[8px] border-white lg:block" />

        <div className="relative mx-auto flex min-h-[390px] max-w-[1440px] items-center px-6 py-14 sm:px-10 lg:px-14">
          <div className="max-w-[590px]">
            

            <div className="mb-5 mt-20 inline-flex items-center gap-2 rounded-full border-l-[3px] border-[#83c441] bg-white/75 px-4 py-2 text-xs font-extrabold tracking-[0.16em] text-[#163b5d]">
              CONTACT US
            </div>
            <h1 className="text-4xl font-extrabold leading-[1.08] tracking-[-0.04em] text-[#102b49] sm:text-5xl lg:text-[62px]">
              Get in Touch with
              <span className="block text-[#1769b0]">Elisa Biotech</span>
            </h1>
            <div className="mt-6 h-[5px] w-20 rounded-full bg-[#82c341]" />
            <p className="mt-5 max-w-[500px] text-base leading-7 text-[#263c50] sm:text-lg">
              Have a query, business inquiry, or partnership opportunity? We’re
              here to help. Reach out to our team and we’ll get back to you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact information + form */}
      <section className="relative bg-gradient-to-b from-[#edf7fd] to-[#f8fcff] 
      px-5 py-10 sm:px-8 lg:px-12 lg:py-14">
        <div className="pointer-events-none absolute -right-16 top-12 h-64 w-64 rounded-full bg-[#e5f3df]
         blur-3xl" />
        <div className="relative mx-auto grid max-w-[1340px] gap-6 lg:grid-cols-[0.82fr_1.18fr]">
          <aside className="rounded-[30px] border border-white bg-gradient-to-br from-[#e6f4fd] to-[#d9edfa] p-6 shadow-[0_18px_50px_rgba(20,78,119,0.08)] sm:p-8">
            {contactDetails.map(({ icon: Icon, title, lines }, index) => (
              <div
                key={title}
                className={`flex gap-4 py-5 first:pt-0 last:pb-0 ${
                  index !== contactDetails.length - 1 ? "border-b border-[#a9cde3]/70" : ""
                }`}
              >
                <div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-white/85 text-[#123b60] shadow-sm">
                  <Icon size={27} strokeWidth={1.8} />
                </div>
                <div className="min-w-0">
                  <h2 className="text-lg font-extrabold text-[#112e4c]">{title}</h2>
                  {lines.map((line) => (
                    <p key={line} className="mt-0.5 break-words text-sm leading-5 text-[#263e54]">
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </aside>

          <div className="relative overflow-hidden rounded-[30px] border border-white bg-white/90 p-6 shadow-[0_18px_55px_rgba(20,78,119,0.10)] backdrop-blur sm:p-8 lg:p-9">
            <div className="absolute -right-20 -top-20 h-52 w-52 rounded-full bg-[#e8f5fb]" />
            <div className="relative">
              <p className="mb-2 text-xs font-extrabold uppercase tracking-[0.2em] text-[#397eac]">We’d love to hear from you</p>
              <h2 className="text-3xl font-extrabold tracking-tight text-[#102b49] sm:text-4xl">
                Send Us a <span className="text-[#1769b0]">Message</span>
              </h2>
              <div className="mt-4 h-[5px] w-16 rounded-full bg-[#82c341]" />

              <form onSubmit={handleSubmit} className="mt-7 grid gap-4 sm:grid-cols-2">
                <label className="block">
                  <span className="sr-only">Your name</span>
                  <input
                    required name="name" value={form.name} onChange={update}
                    placeholder="Your Name *"
                    className="h-[54px] w-full rounded-xl border border-[#c7d6e2] bg-[#f9fcff] px-4 text-sm text-[#17324e] outline-none transition placeholder:text-[#263746] focus:border-[#1769b0] focus:ring-2 focus:ring-[#1769b0]/10"
                  />
                </label>
                <label className="block">
                  <span className="sr-only">Your email</span>
                  <input
                    required type="email" name="email" value={form.email} onChange={update}
                    placeholder="Your Email *"
                    className="h-[54px] w-full rounded-xl border border-[#c7d6e2] bg-[#f9fcff] px-4 text-sm text-[#17324e] outline-none transition placeholder:text-[#263746] focus:border-[#1769b0] focus:ring-2 focus:ring-[#1769b0]/10"
                  />
                </label>
                <label className="block">
                  <span className="sr-only">Phone number</span>
                  <input
                    name="phone" value={form.phone} onChange={update}
                    placeholder="Phone Number"
                    className="h-[54px] w-full rounded-xl border border-[#c7d6e2] bg-[#f9fcff] px-4 text-sm text-[#17324e] outline-none transition placeholder:text-[#263746] focus:border-[#1769b0] focus:ring-2 focus:ring-[#1769b0]/10"
                  />
                </label>
                <label className="relative block">
                  <span className="sr-only">Enquiry type</span>
                  <select
                    required name="enquiry" value={form.enquiry} onChange={update}
                    className="h-[54px] w-full appearance-none rounded-xl border border-[#c7d6e2] bg-[#f9fcff] px-4 pr-10 text-sm text-[#263746] outline-none transition focus:border-[#1769b0] focus:ring-2 focus:ring-[#1769b0]/10"
                  >
                    <option value="">Enquiry Type *</option>
                    <option value="Product enquiry">Product enquiry</option>
                    <option value="Business enquiry">Business enquiry</option>
                    <option value="Partnership">Partnership</option>
                    <option value="General enquiry">General enquiry</option>
                  </select>
                  <ChevronDown className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#17324e]" size={18} />
                </label>
                <label className="block sm:col-span-2">
                  <span className="sr-only">Your message</span>
                  <textarea
                    required name="message" value={form.message} onChange={update}
                    placeholder="Your Message *" rows={5}
                    className="w-full resize-y rounded-xl border border-[#c7d6e2] bg-[#f9fcff] px-4 py-4 text-sm text-[#17324e] outline-none transition placeholder:text-[#263746] focus:border-[#1769b0] focus:ring-2 focus:ring-[#1769b0]/10"
                  />
                </label>
                <div className="sm:col-span-2">
                  <button
                    type="submit"
                    className="inline-flex min-h-[52px] items-center gap-3 rounded-full bg-gradient-to-r from-[#0b3c68] to-[#11649c] px-8 text-sm font-bold text-white shadow-lg shadow-[#0b3c68]/20 transition hover:-translate-y-0.5 hover:shadow-xl"
                  >
                    <Send size={17} /> Send Message <ArrowUpRight size={17} />
                  </button>
                  {submitted && (
                    <p className="mt-3 flex items-center gap-2 text-xs font-medium text-[#397f2b]">
                      <CheckCircle2 size={16} /> Your email app should open with the enquiry details.
                    </p>
                  )}
               
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map – replace query with the verified full office address */}
      <section className="bg-[#f8fcff] px-5 pb-10 sm:px-8 lg:px-12 lg:pb-14">
        <div className="mx-auto grid max-w-[1340px] overflow-hidden rounded-[30px] border border-white shadow-[0_18px_55px_rgba(20,78,119,0.12)] lg:grid-cols-[270px_1fr]">
          <div className="relative flex flex-col justify-center overflow-hidden bg-gradient-to-br from-[#087eae] to-[#07345f] p-8 text-white">
            <div className="absolute -right-16 top-1/2 h-56 w-56 -translate-y-1/2 rounded-full border-[14px] border-[#8bcf32]/90" />
            <MapPin size={42} className="relative mb-5 text-[#a6df36]" strokeWidth={1.7} />
            <h2 className="relative text-3xl font-extrabold leading-tight">Find Us<br />on Map</h2>
            <p className="relative mt-4 max-w-[190px] text-sm leading-6 text-blue-50">
              Visit our office. We’d be happy to connect with you.
            </p>
            <span className="relative mt-6 h-1 w-14 rounded-full bg-[#a6df36]" />
          </div>
          <div className="relative min-h-[360px] bg-[#e5edf1] sm:min-h-[440px]">
            <iframe
              title="Map showing Elisa Biotech Pvt. Ltd. location"
              src="https://www.google.com/maps?q=Elisa%20Biotech%20Pvt.%20Ltd.%2C%20New%20Delhi%2C%20India&output=embed"
              className="absolute inset-0 h-full w-full border-0 grayscale-[10%]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
            <div className="pointer-events-none absolute bottom-4 left-4 max-w-[270px] rounded-xl border border-slate-200 bg-white/95 p-4 shadow-lg backdrop-blur">
              <div className="flex items-center gap-2 text-sm font-extrabold text-[#102b49]">
                <Building2 size={17} className="text-[#1769b0]" /> Elisa Biotech Pvt. Ltd.
              </div>
              <p className="mt-1 text-xs leading-5 text-slate-600">
                Add your verified office address here to ensure the map points to the correct location.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}