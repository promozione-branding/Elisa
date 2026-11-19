"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, ArrowRight, CheckCircle2 } from "lucide-react";

export default function Popup({
  isOpen,
  onClose,
  productName = "",
}) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    product: productName,
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    setFormData((prev) => ({
      ...prev,
      product: productName || "",
    }));
  }, [productName]);

  useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (e) => {
      if (e.key === "Escape") onClose();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "phone" && !/^\d{0,20}$/.test(value)) {
      return;
    }

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!/^\d{10,20}$/.test(formData.phone)) {
      setError("Please enter a valid mobile number (10–20 digits).");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("/api/enquiry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.message || "Something went wrong.");
      }

      setSuccess(true);

      setTimeout(() => {
        setSuccess(false);
        setFormData({
          name: "",
          email: "",
          phone: "",
          product: "",
          message: "",
        });
        onClose();
      }, 2000);
    } catch (err) {
      setError(err.message || "Unable to submit enquiry.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) onClose();
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.96 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="relative w-full max-w-2xl overflow-hidden rounded-2xl bg-[var(--surface)] shadow-2xl"
          >
            {/* Header */}
            <div className="relative bg-[var(--primary-dark)] px-6 py-3 md:px-5">
              <button
                type="button"
                onClick={onClose}
                aria-label="Close enquiry form"
                className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
              >
                <X size={20} />
              </button>

              <p className="mb-2 text-xs font-semibold uppercase tracking-[3px] text-[var(--accent)]">
                Let's Connect
              </p>

              <h2 className="text-2xl font-bold text-[var(--text-light)] md:text-3xl">
                Get In Touch With Us
              </h2>
            </div>

            {/* Form */}
            <div className="p-4 md:p-5">
              {success ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <CheckCircle2
                    size={55}
                    className="mb-4 text-[var(--secondary)]"
                  />
                  <h3 className="text-2xl font-bold text-[var(--dark)]">
                    Thank You!
                  </h3>
                  <p className="mt-2 text-[var(--text-secondary)]">
                    Your enquiry has been submitted successfully.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                    <div>
                      <label className="mb-2 block text-sm font-semibold text-[var(--dark)]">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        placeholder="Enter your name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full rounded-lg border border-[var(--border-color)] bg-[var(--background)] px-4 py-3 text-sm text-[var(--text-primary)] outline-none transition placeholder:text-[var(--text-secondary)] focus:border-[var(--secondary)] focus:bg-[var(--surface)]"
                      />
                    </div>

                    <div>
                      <label className="mb-2 block text-sm font-semibold text-[var(--dark)]">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full rounded-lg border border-[var(--border-color)] bg-[var(--background)] px-4 py-3 text-sm text-[var(--text-primary)] outline-none transition placeholder:text-[var(--text-secondary)] focus:border-[var(--secondary)] focus:bg-[var(--surface)]"
                      />
                    </div>

                    <div>
                      <label className="mb-2 block text-sm font-semibold text-[var(--dark)]">
                        Mobile Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        placeholder="Enter mobile number"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        inputMode="numeric"
                        maxLength={20}
                        className="w-full rounded-lg border border-[var(--border-color)] bg-[var(--background)] px-4 py-3 text-sm text-[var(--text-primary)] outline-none transition placeholder:text-[var(--text-secondary)] focus:border-[var(--secondary)] focus:bg-[var(--surface)]"
                      />
                    </div>

                    <div>
                      <label className="mb-2 block text-sm font-semibold text-[var(--dark)]">
                        Product / Service
                      </label>
                      <input
                        type="text"
                        name="product"
                        placeholder="Enter product name"
                        value={formData.product}
                        onChange={handleChange}
                        className="w-full rounded-lg border border-[var(--border-color)] bg-[var(--background)] px-4 py-3 text-sm text-[var(--text-primary)] outline-none transition placeholder:text-[var(--text-secondary)] focus:border-[var(--secondary)] focus:bg-[var(--surface)]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-semibold text-[var(--dark)]">
                      Your Message *
                    </label>
                    <textarea
                      name="message"
                      rows={4}
                      placeholder="Tell us about your requirements..."
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="w-full resize-none rounded-lg border border-[var(--border-color)] bg-[var(--background)] px-4 py-3 text-sm text-[var(--text-primary)] outline-none transition placeholder:text-[var(--text-secondary)] focus:border-[var(--secondary)] focus:bg-[var(--surface)]"
                    />
                  </div>

                  {error && (
                    <p role="alert" className="text-sm text-red-600">
                      {error}
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={loading}
                    className="group flex w-full items-center justify-center gap-3 rounded-lg bg-[image:var(--button-gradient)] px-6 py-4 text-sm font-semibold text-white transition hover:bg-[image:var(--button-hover)] disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {loading ? "Submitting..." : "Submit Enquiry"}
                    {!loading && (
                      <ArrowRight
                        size={18}
                        className="transition-transform group-hover:translate-x-1"
                      />
                    )}
                  </button>

                  <p className="text-center text-xs text-[var(--text-secondary)]">
                    Your information will only be used to respond to your enquiry.
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}