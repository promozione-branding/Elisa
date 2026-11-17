"use client";

import { useEffect, useState } from "react";
import {
  X,
  ArrowRight,
  Send,
  Phone,
  Mail,
  Package,
  CheckCircle2,
} from "lucide-react";

/**
 * Product enquiry popup
 *
 * Usage:
 * <ProductEnquiryPopup
 *   isOpen={showEnquiry}
 *   onClose={() => setShowEnquiry(false)}
 *   product={product}
 *   onSubmit={(formData) => {
 *     // Connect this callback to your API / email / CRM.
 *     console.log(formData);
 *   }}
 * />
 */

export default function Popup({
  isOpen,
  onClose,
  product,
  onSubmit,
}) {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    quantity: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      setSubmitted(false);
      setLoading(false);
      setForm({
        name: "",
        phone: "",
        email: "",
        quantity: "",
        message: "",
      });
      return;
    }

    const handleKeyDown = (event) => {
      if (event.key === "Escape") onClose?.();
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const updateField = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!onSubmit || loading) return;

    try {
      setLoading(true);
      await onSubmit({
        ...form,
        productName: product?.name || "",
        productSlug: product?.slug || "",
      });
      setSubmitted(true);
    } catch (error) {
      console.error("Product enquiry submission failed:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center overflow-y-auto bg-[#071d31]/70 p-3 backdrop-blur-sm sm:p-6"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose?.();
      }}
      role="presentation"
    >
      <section
        role="dialog"
        aria-modal="true"
        aria-labelledby="product-enquiry-title"
        className="relative my-auto w-full max-w-[760px] overflow-hidden rounded-[26px] bg-white shadow-[0_30px_100px_rgba(0,0,0,0.28)]"
      >
        <div className="relative overflow-hidden bg-gradient-to-r from-[#082f52] via-[#0d527e] to-[#1479a8] px-6 py-7 text-white sm:px-9 sm:py-8">
          <div className="pointer-events-none absolute -right-10 -top-24 h-64 w-64 rounded-full border border-white/10" />
          <div className="pointer-events-none absolute -right-2 -top-16 h-48 w-48 rounded-full border border-[#8fc94a]/40" />

          <button
            type="button"
            onClick={onClose}
            aria-label="Close enquiry popup"
            className="absolute right-4 top-4 z-10 grid h-10 w-10 place-items-center rounded-full border border-white/20 bg-white/10 text-white transition hover:bg-white/20"
          >
            <X size={19} />
          </button>

          <p className="relative text-[10px] font-extrabold uppercase tracking-[0.22em] text-[#bce58e]">
            Elisa Biotech Pvt. Ltd.
          </p>
          <h2
            id="product-enquiry-title"
            className="relative mt-2 max-w-xl text-2xl font-extrabold leading-tight sm:text-3xl"
          >
            {submitted ? "Thank you for your enquiry!" : "Enquire About This Product"}
          </h2>
          <p className="relative mt-2 max-w-lg text-sm leading-6 text-blue-100">
            {submitted
              ? "Your enquiry has been submitted successfully."
              : "Share your details and our team can get back to you with product information."}
          </p>
        </div>

        {submitted ? (
          <div className="flex flex-col items-center px-6 py-12 text-center sm:px-10">
            <div className="grid h-16 w-16 place-items-center rounded-full bg-[#edf8e8] text-[#5b9e35]">
              <CheckCircle2 size={34} />
            </div>
            <h3 className="mt-5 text-xl font-extrabold text-[#163956]">
              Enquiry received
            </h3>
            <p className="mt-2 max-w-md text-sm leading-6 text-slate-500">
              Thank you for contacting Elisa Biotech. You can close this window now.
            </p>
            <button
              type="button"
              onClick={onClose}
              className="mt-7 rounded-full bg-[#0c4c78] px-7 py-3 text-sm font-bold text-white transition hover:bg-[#176fa7]"
            >
              Close
            </button>
          </div>
        ) : (
          <div className="grid md:grid-cols-[0.78fr_1.22fr]">
            <aside className="border-b border-[#e8eff4] bg-[#f3f9fc] p-6 md:border-b-0 md:border-r md:p-7">
              <div className="flex h-36 items-center justify-center overflow-hidden rounded-2xl border border-[#e1edf4] bg-white p-3">
                {product?.image ? (
                  <img
                    src={product.image}
                    alt={product?.name || "Product"}
                    className="h-full w-full object-contain"
                  />
                ) : (
                  <Package size={52} className="text-[#5b91b2]" strokeWidth={1.3} />
                )}
              </div>

              <p className="mt-5 text-[10px] font-extrabold uppercase tracking-[0.18em] text-[#77a93f]">
                Product enquiry
              </p>
              <h3 className="mt-2 text-lg font-extrabold leading-snug text-[#153957]">
                {product?.name || "Pharmaceutical Product"}
              </h3>
              <p className="mt-2 text-xs leading-5 text-slate-500">
                {product?.composition || "Contact us for product composition and details."}
              </p>

              <div className="mt-5 space-y-3 border-t border-[#e0eaf1] pt-4 text-xs text-[#506c82]">
                {product?.strength && (
                  <p><strong className="text-[#193d5b]">Strength:</strong> {product.strength}</p>
                )}
                {product?.packaging && (
                  <p><strong className="text-[#193d5b]">Packaging:</strong> {product.packaging}</p>
                )}
                {product?.brand && (
                  <p><strong className="text-[#193d5b]">Brand:</strong> {product.brand}</p>
                )}
              </div>

              <div className="mt-6 flex items-center gap-2 text-xs font-semibold text-[#47738f]">
                <Phone size={15} className="text-[#6aa83d]" />
                Product & business enquiries
              </div>
              <div className="mt-2 flex items-center gap-2 text-xs font-semibold text-[#47738f]">
                <Mail size={15} className="text-[#6aa83d]" />
                Elisa Biotech team
              </div>
            </aside>

            <form onSubmit={handleSubmit} className="p-6 sm:p-8">
              <div className="mb-5">
                <h3 className="text-lg font-extrabold text-[#153957]">Your details</h3>
                <p className="mt-1 text-xs text-slate-500">
                  Fields marked * are required.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block">
                  <span className="mb-1.5 block text-xs font-bold text-[#36556d]">Full name *</span>
                  <input
                    required
                    name="name"
                    value={form.name}
                    onChange={updateField}
                    placeholder="Enter your name"
                    autoComplete="name"
                    className="h-11 w-full rounded-xl border border-[#dce7ef] bg-[#fbfdff] px-3.5 text-sm text-[#173954] outline-none transition placeholder:text-slate-400 focus:border-[#3988b5] focus:ring-4 focus:ring-[#3988b5]/10"
                  />
                </label>

                <label className="block">
                  <span className="mb-1.5 block text-xs font-bold text-[#36556d]">Phone number *</span>
                  <input
                    required
                    name="phone"
                    type="tel"
                    value={form.phone}
                    onChange={updateField}
                    placeholder="Enter phone number"
                    autoComplete="tel"
                    className="h-11 w-full rounded-xl border border-[#dce7ef] bg-[#fbfdff] px-3.5 text-sm text-[#173954] outline-none transition placeholder:text-slate-400 focus:border-[#3988b5] focus:ring-4 focus:ring-[#3988b5]/10"
                  />
                </label>

                <label className="block sm:col-span-2">
                  <span className="mb-1.5 block text-xs font-bold text-[#36556d]">Email address</span>
                  <input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={updateField}
                    placeholder="you@example.com"
                    autoComplete="email"
                    className="h-11 w-full rounded-xl border border-[#dce7ef] bg-[#fbfdff] px-3.5 text-sm text-[#173954] outline-none transition placeholder:text-slate-400 focus:border-[#3988b5] focus:ring-4 focus:ring-[#3988b5]/10"
                  />
                </label>

                <label className="block sm:col-span-2">
                  <span className="mb-1.5 block text-xs font-bold text-[#36556d]">Required quantity</span>
                  <input
                    name="quantity"
                    value={form.quantity}
                    onChange={updateField}
                    placeholder="e.g. 100 boxes"
                    className="h-11 w-full rounded-xl border border-[#dce7ef] bg-[#fbfdff] px-3.5 text-sm text-[#173954] outline-none transition placeholder:text-slate-400 focus:border-[#3988b5] focus:ring-4 focus:ring-[#3988b5]/10"
                  />
                </label>

                <label className="block sm:col-span-2">
                  <span className="mb-1.5 block text-xs font-bold text-[#36556d]">Message</span>
                  <textarea
                    name="message"
                    rows={3}
                    value={form.message}
                    onChange={updateField}
                    placeholder="Tell us what information you need..."
                    className="w-full resize-none rounded-xl border border-[#dce7ef] bg-[#fbfdff] px-3.5 py-3 text-sm text-[#173954] outline-none transition placeholder:text-slate-400 focus:border-[#3988b5] focus:ring-4 focus:ring-[#3988b5]/10"
                  />
                </label>
              </div>

              {!onSubmit && (
                <p className="mt-3 text-xs leading-5 text-amber-700">
                  Connect the onSubmit prop to your enquiry API before using this form.
                </p>
              )}

              <button
                type="submit"
                disabled={!onSubmit || loading}
                className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#0c4c78] px-6 py-3.5 text-sm font-extrabold text-white shadow-lg shadow-[#0c4c78]/15 transition hover:bg-[#176fa7] disabled:cursor-not-allowed disabled:opacity-50"
              >
                {loading ? "Submitting..." : "Submit Enquiry"}
                <Send size={16} />
              </button>
              <p className="mt-3 text-center text-[10px] leading-5 text-slate-400">
                Product information is for catalogue enquiries. Please consult a qualified healthcare professional for medical advice.
              </p>
            </form>
          </div>
        )}
      </section>
    </div>
  );
}
