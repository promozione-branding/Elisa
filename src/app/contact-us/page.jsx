"use client";

import React, { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Send,
  Building2,
  ArrowUpRight,
  CheckCircle2,
  ChevronDown,
} from "lucide-react";
import Navbaar from "@/Components/Navbaar";
import Footer from "@/Components/Footer";

const contactDetails = [
  {
    icon: MapPin,
    title: "Our Office",
    lines: [
      "Elisa Biotech Pvt. Ltd.",
      "2nd Floor, House No 22, S-Block, Phase-1, Badli Industrial Area, New Delhi - 110042, Delhi, India",
    ],
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
    setForm((current) => ({
      ...current,
      [e.target.name]: e.target.value,
    }));
    setSubmitted(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const subject = encodeURIComponent(
      `Website enquiry: ${form.enquiry || "General"}`
    );

    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\nEnquiry: ${form.enquiry}\n\nMessage:\n${form.message}`
    );

    // Uses the company's provided enquiry email address.
    window.location.href = `mailto:info@elisabiotechindia.com?subject=${subject}&body=${body}`;

    setSubmitted(true);
  };

  return (
    <main className="w-full overflow-hidden bg-[var(--background)] text-[var(--text-primary)]">
      <Navbaar />

      {/* HERO */}
      <section className="relative isolate min-h-[390px] overflow-hidden bg-[var(--surface-blue)]">
        <div className="absolute inset-y-0 right-0 w-full lg:w-[58%]">
          <img
            src="https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=1800&q=85"
            alt="Scientist working in a pharmaceutical laboratory"
            className="h-full w-full object-cover object-center"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-[var(--surface-blue)] via-[var(--surface-blue)]/80 to-transparent lg:from-[var(--surface-blue)] lg:via-[var(--surface-blue)]/25 lg:to-transparent" />
        </div>

        <div className="absolute -right-16 top-0 hidden h-[470px] w-[58%] rounded-l-[48%] border-l-[12px] border-[var(--accent)] lg:block" />

        <div className="absolute -right-10 top-0 hidden h-[470px] w-[58%] rounded-l-[48%] border-l-[8px] border-[var(--surface)] lg:block" />

        <div className="relative mx-auto flex min-h-[390px] max-w-[1440px] items-center px-6 py-14 sm:px-10 lg:px-14">
          <div className="max-w-[590px]">
            <div className="mb-5 mt-20 inline-flex items-center gap-2 rounded-full border-l-[3px] border-[var(--accent)] bg-[var(--surface)]/85 px-4 py-2 text-xs font-extrabold tracking-[0.16em] text-[var(--primary-dark)]">
              CONTACT US
            </div>

            <h1 className="text-4xl font-extrabold leading-[1.08] tracking-[-0.04em] text-[var(--primary-dark)] sm:text-5xl lg:text-[62px]">
              Get in Touch with
              <span className="block text-[var(--secondary)]">
                Elisa Biotech
              </span>
            </h1>

            <div className="mt-6 h-[5px] w-20 rounded-full bg-[var(--accent)]" />

            <p className="mt-5 max-w-[500px] text-base leading-7 text-[var(--text-secondary)] sm:text-lg">
              Have a query, business inquiry, or partnership opportunity?
              We’re here to help. Reach out to our team and we’ll get back
              to you.
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT INFORMATION + FORM */}
      <section className="relative bg-gradient-to-b from-[var(--surface-blue)] to-[var(--background)] px-5 py-10 sm:px-8 lg:px-12 lg:py-14">
        <div className="pointer-events-none absolute -right-16 top-12 h-64 w-64 rounded-full bg-[var(--accent)]/10 blur-3xl" />

        <div className="relative mx-auto grid max-w-[1340px] gap-6 lg:grid-cols-[0.82fr_1.18fr]">

          {/* CONTACT DETAILS */}
          <aside className="rounded-[30px] border border-[var(--surface)] bg-gradient-to-br from-[var(--surface-blue)] to-[var(--surface-light)] p-6 shadow-[0_18px_50px_rgba(7,62,95,0.08)] sm:p-8">
            {contactDetails.map(({ icon: Icon, title, lines }, index) => (
              <div
                key={title}
                className={`flex gap-4 py-5 first:pt-0 last:pb-0 ${
                  index !== contactDetails.length - 1
                    ? "border-b border-[var(--border-color)]"
                    : ""
                }`}
              >
                <div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-[var(--surface)] text-[var(--secondary)] shadow-sm">
                  <Icon size={27} strokeWidth={1.8} />
                </div>

                <div className="min-w-0">
                  <h2 className="text-lg font-extrabold text-[var(--primary-dark)]">
                    {title}
                  </h2>

                  {lines.map((line) => (
                    <p
                      key={line}
                      className="mt-0.5 break-words text-sm leading-5 text-[var(--text-secondary)]"
                    >
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </aside>

          {/* CONTACT FORM */}
          <div className="relative overflow-hidden rounded-[30px] border border-[var(--surface)] bg-[var(--surface)]/95 p-6 shadow-[0_18px_55px_rgba(7,62,95,0.10)] backdrop-blur sm:p-8 lg:p-9">
            <div className="absolute -right-20 -top-20 h-52 w-52 rounded-full bg-[var(--surface-blue)]" />

            <div className="relative">
              <p className="mb-2 text-xs font-extrabold uppercase tracking-[0.2em] text-[var(--secondary)]">
                We’d love to hear from you
              </p>

              <h2 className="text-3xl font-extrabold tracking-tight text-[var(--primary-dark)] sm:text-4xl">
                Send Us a{" "}
                <span className="text-[var(--secondary)]">Message</span>
              </h2>

              <div className="mt-4 h-[5px] w-16 rounded-full bg-[var(--accent)]" />

              <form
                onSubmit={handleSubmit}
                className="mt-7 grid gap-4 sm:grid-cols-2"
              >
                {/* NAME */}
                <label className="block">
                  <span className="sr-only">Your name</span>
                  <input
                    required
                    name="name"
                    value={form.name}
                    onChange={update}
                    placeholder="Your Name *"
                    className="h-[54px] w-full rounded-xl border border-[var(--border-color)] bg-[var(--background)] px-4 text-sm text-[var(--primary-dark)] outline-none transition placeholder:text-[var(--text-secondary)] focus:border-[var(--secondary)] focus:ring-2 focus:ring-[var(--secondary)]/10"
                  />
                </label>

                {/* EMAIL */}
                <label className="block">
                  <span className="sr-only">Your email</span>
                  <input
                    required
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={update}
                    placeholder="Your Email *"
                    className="h-[54px] w-full rounded-xl border border-[var(--border-color)] bg-[var(--background)] px-4 text-sm text-[var(--primary-dark)] outline-none transition placeholder:text-[var(--text-secondary)] focus:border-[var(--secondary)] focus:ring-2 focus:ring-[var(--secondary)]/10"
                  />
                </label>

                {/* PHONE */}
                <label className="block">
                  <span className="sr-only">Phone number</span>
                  <input
                    name="phone"
                    value={form.phone}
                    onChange={update}
                    placeholder="Phone Number"
                    className="h-[54px] w-full rounded-xl border border-[var(--border-color)] bg-[var(--background)] px-4 text-sm text-[var(--primary-dark)] outline-none transition placeholder:text-[var(--text-secondary)] focus:border-[var(--secondary)] focus:ring-2 focus:ring-[var(--secondary)]/10"
                  />
                </label>

                {/* ENQUIRY TYPE */}
                <label className="relative block">
                  <span className="sr-only">Enquiry type</span>
                  <select
                    required
                    name="enquiry"
                    value={form.enquiry}
                    onChange={update}
                    className="h-[54px] w-full appearance-none rounded-xl border border-[var(--border-color)] bg-[var(--background)] px-4 pr-10 text-sm text-[var(--text-secondary)] outline-none transition focus:border-[var(--secondary)] focus:ring-2 focus:ring-[var(--secondary)]/10"
                  >
                    <option value="">Enquiry Type *</option>
                    <option value="Product enquiry">Product enquiry</option>
                    <option value="Business enquiry">Business enquiry</option>
                    <option value="Partnership">Partnership</option>
                    <option value="General enquiry">General enquiry</option>
                  </select>

                  <ChevronDown
                    className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[var(--secondary)]"
                    size={18}
                  />
                </label>

                {/* MESSAGE */}
                <label className="block sm:col-span-2">
                  <span className="sr-only">Your message</span>
                  <textarea
                    required
                    name="message"
                    value={form.message}
                    onChange={update}
                    placeholder="Your Message *"
                    rows={5}
                    className="w-full resize-y rounded-xl border border-[var(--border-color)] bg-[var(--background)] px-4 py-4 text-sm text-[var(--primary-dark)] outline-none transition placeholder:text-[var(--text-secondary)] focus:border-[var(--secondary)] focus:ring-2 focus:ring-[var(--secondary)]/10"
                  />
                </label>

                {/* SUBMIT */}
                <div className="sm:col-span-2">
                  <button
                    type="submit"
                    className="inline-flex min-h-[52px] items-center gap-3 rounded-full bg-[image:var(--button-gradient)] px-8 text-sm font-bold text-white shadow-lg shadow-[var(--primary-dark)]/20 transition hover:-translate-y-0.5 hover:bg-[image:var(--button-hover)] hover:shadow-xl"
                  >
                    <Send size={17} />
                    Send Message
                    <ArrowUpRight size={17} />
                  </button>

                  {submitted && (
                    <p className="mt-3 flex items-center gap-2 text-xs font-medium text-[var(--secondary)]">
                      <CheckCircle2 size={16} />
                      Your email app should open with the enquiry details.
                    </p>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* GOOGLE MAP */}
      <section className="bg-[var(--background)] px-5 pb-10 sm:px-8 lg:px-12 lg:pb-14">
        <div className="mx-auto grid max-w-[1340px] overflow-hidden rounded-[30px] border border-[var(--surface)] shadow-[0_18px_55px_rgba(7,62,95,0.12)] lg:grid-cols-[270px_1fr]">

          <div className="relative flex flex-col justify-center overflow-hidden bg-gradient-to-br from-[var(--secondary)] to-[var(--primary-dark)] p-8 text-white">
            <div className="absolute -right-16 top-1/2 h-56 w-56 -translate-y-1/2 rounded-full border-[14px] border-[var(--accent)]/70" />

            <MapPin
              size={42}
              className="relative mb-5 text-[var(--accent)]"
              strokeWidth={1.7}
            />

            <h2 className="relative text-3xl font-extrabold leading-tight">
              Find Us
              <br />
              on Map
            </h2>

            <p className="relative mt-4 max-w-[190px] text-sm leading-6 text-[var(--surface-blue)]">
              Visit our office. We’d be happy to connect with you.
            </p>

            <span className="relative mt-6 h-1 w-14 rounded-full bg-[var(--accent)]" />
          </div>

          <div className="relative min-h-[360px] bg-[var(--surface-blue)] sm:min-h-[440px]">
            <iframe
              title="Map showing Elisa Biotech Pvt. Ltd. location"
              src="https://www.google.com/maps?q=2nd%20Floor%2C%20House%20No%2022%2C%20S-Block%2C%20Phase-1%2C%20Badli%20Industrial%20Area%2C%20New%20Delhi%20110042%2C%20India&output=embed"
              className="absolute inset-0 h-full w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />

            <div className="pointer-events-none absolute bottom-4 left-4 max-w-[270px] rounded-xl border border-[var(--border-color)] bg-[var(--surface)]/95 p-4 shadow-lg backdrop-blur">
              <div className="flex items-center gap-2 text-sm font-extrabold text-[var(--primary-dark)]">
                <Building2 size={17} className="text-[var(--secondary)]" />
                Elisa Biotech Pvt. Ltd.
              </div>

              <p className="mt-1 text-xs leading-5 text-[var(--text-secondary)]">
                Badli Industrial Area, New Delhi - 110042, India
              </p>
            </div>
          </div>
        </div>
      </section>


    </main>
  );
}