
"use client";

import { useEffect, useState } from "react";
import { X, User, Phone, MapPin, Mail, MessageSquare, Send } from "lucide-react";

export default function ContactPopup({ onClose }) {
  const [isOpen, setIsOpen] = useState(true);
  const [submitted, setSubmitted] = useState(false);

  const closePopup = () => {
    setIsOpen(false);
    onClose?.();
  };

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") closePopup();
    };

    document.addEventListener("keydown", handleEscape);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (!isOpen) return null;

  return (
    <div className="elisa-popup-overlay" onClick={closePopup}>
      <div
        className="elisa-popup"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="elisa-close"
          onClick={closePopup}
          aria-label="Close popup"
        >
          <X size={27} />
        </button>

        {/* LEFT CONTENT */}
        <div className="elisa-popup-left">
          <div className="elisa-logo">
            <div className="elisa-logo-icon">
              <span>✦</span>
            </div>
            <div>
              <h2>Elisa</h2>
              <p>Biotech Pvt. Ltd.</p>
            </div>
          </div>

          <div className="elisa-left-content">
            <div className="elisa-line"></div>

            <h3>Get in Touch</h3>

            <p>
              For Product Enquiry, Pricing or Any Assistance
            </p>
          </div>

          <div className="elisa-medicine-image">
            <img
              src="/images/medicine-popup.png"
              alt="Pharmaceutical medicines"
            />
          </div>

          <div className="elisa-blue-wave"></div>
        </div>

        {/* RIGHT FORM */}
        <div className="elisa-popup-right">
          {submitted ? (
            <div className="elisa-success">
              <div className="success-icon">✓</div>
              <h2>Thank You!</h2>
              <p>
                Your enquiry has been received successfully.
                Our team will contact you soon.
              </p>
              <button onClick={closePopup}>
                Close
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="elisa-form-group">
                <User />
                <input
                  type="text"
                  placeholder="Your Name *"
                  required
                />
              </div>

              <div className="elisa-form-group">
                <Phone />
                <input
                  type="tel"
                  placeholder="Mobile Number *"
                  pattern="[0-9+\-\s]{10,15}"
                  required
                />
              </div>

              <div className="elisa-form-group">
                <Mail />
                <input
                  type="email"
                  placeholder="Email ID *"
                  required
                />
              </div>

              <div className="elisa-form-group">
                <MapPin />
                <input
                  type="text"
                  placeholder="Your Place / City *"
                  required
                />
              </div>

              <div className="elisa-form-group elisa-message">
                <MessageSquare />
                <textarea
                  placeholder="Your Message (Optional)"
                  rows="3"
                />
              </div>

              <button
                type="submit"
                className="elisa-submit"
              >
                <Send size={22} />
                Submit Enquiry
              </button>
            </form>
          )}
        </div>
      </div>

      <style jsx>{`
        .elisa-popup-overlay {
          position: fixed;
          inset: 0;
          z-index: 99999;
          background: rgba(8, 22, 43, 0.68);
          backdrop-filter: blur(7px);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
          animation: fadeIn 0.3s ease;
        }

        .elisa-popup {
          width: 100%;
          max-width: 1320px;
          min-height: 650px;
          display: grid;
          grid-template-columns: 38% 62%;
          background: #fff;
          border-radius: 28px;
          overflow: visible;
          position: relative;
          box-shadow: 0 25px 80px rgba(0, 0, 0, 0.25);
          animation: popupIn 0.4s ease;
        }

        .elisa-close {
          position: absolute;
          right: -22px;
          top: -22px;
          width: 58px;
          height: 58px;
          border: none;
          border-radius: 50%;
          background: #fff;
          color: #082d60;
          display: grid;
          place-items: center;
          cursor: pointer;
          z-index: 10;
          box-shadow: 0 5px 20px rgba(0, 0, 0, 0.15);
          transition: 0.3s;
        }

        .elisa-close:hover {
          transform: rotate(90deg);
          background: #eaf4ff;
        }

        .elisa-popup-left {
          background: linear-gradient(145deg, #eaf6ff, #f8fcff);
          border-radius: 28px 0 0 28px;
          padding: 70px 45px 40px;
          position: relative;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }

        .elisa-logo {
          display: flex;
          align-items: center;
          gap: 15px;
          position: relative;
          z-index: 2;
        }

        .elisa-logo-icon {
          width: 85px;
          height: 85px;
          background: linear-gradient(145deg, #0d71d5, #0b3978);
          color: white;
          border-radius: 50% 50% 50% 8px;
          display: grid;
          place-items: center;
          font-size: 42px;
          transform: rotate(-12deg);
        }

        .elisa-logo-icon span {
          transform: rotate(12deg);
        }

        .elisa-logo h2 {
          color: #0862b9;
          font-size: 55px;
          font-weight: 800;
          line-height: 1;
          margin: 0;
        }

        .elisa-logo p {
          color: #102c52;
          font-size: 19px;
          margin: 5px 0 0;
        }

        .elisa-left-content {
          margin-top: 65px;
          position: relative;
          z-index: 2;
        }

        .elisa-line {
          width: 120px;
          height: 4px;
          border-radius: 10px;
          background: #0b4c98;
          margin: 0 auto 30px;
        }

        .elisa-left-content h3 {
          font-size: 40px;
          color: #092c5b;
          font-weight: 750;
          margin: 0 0 15px;
        }

        .elisa-left-content p {
          color: #18385f;
          font-size: 23px;
          line-height: 1.5;
          max-width: 370px;
          margin: 0 auto;
        }

        .elisa-medicine-image {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 220px;
          z-index: 1;
        }

        .elisa-medicine-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
        }

        .elisa-blue-wave {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 24px;
          background: #0879d4;
          z-index: 2;
        }

        .elisa-popup-right {
          padding: 65px 65px 55px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .elisa-popup-right form {
          width: 100%;
          max-width: 700px;
        }

        .elisa-form-group {
          display: flex;
          align-items: center;
          gap: 22px;
          width: 100%;
          min-height: 72px;
          border: 1.5px solid #d4d9e4;
          border-radius: 16px;
          padding: 0 28px;
          margin-bottom: 25px;
          background: #fff;
          transition: 0.25s;
        }

        .elisa-form-group:focus-within {
          border-color: #0873cc;
          box-shadow: 0 0 0 3px rgba(8, 115, 204, 0.09);
        }

        .elisa-form-group :global(svg) {
          color: #093d78;
          width: 25px;
          min-width: 25px;
          height: 25px;
        }

        .elisa-form-group input,
        .elisa-form-group textarea {
          width: 100%;
          border: none;
          outline: none;
          background: transparent;
          color: #183354;
          font-family: inherit;
          font-size: 20px;
        }

        .elisa-form-group input::placeholder,
        .elisa-form-group textarea::placeholder {
          color: #737c8e;
        }

        .elisa-message {
          min-height: 155px;
          align-items: flex-start;
          padding-top: 24px;
        }

        .elisa-message textarea {
          resize: vertical;
          min-height: 100px;
        }

        .elisa-submit {
          width: 75%;
          min-height: 78px;
          margin: 12px auto 0;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 18px;
          border: none;
          border-radius: 50px;
          background: linear-gradient(100deg, #07356f, #0864b5);
          color: white;
          font-size: 23px;
          font-weight: 700;
          cursor: pointer;
          transition: 0.3s;
        }

        .elisa-submit:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 25px rgba(5, 65, 130, 0.25);
        }

        .elisa-success {
          text-align: center;
          max-width: 450px;
          color: #12345a;
        }

        .success-icon {
          width: 75px;
          height: 75px;
          margin: 0 auto 20px;
          border-radius: 50%;
          background: #e5f4eb;
          color: #16864a;
          display: grid;
          place-items: center;
          font-size: 40px;
        }

        .elisa-success h2 {
          font-size: 32px;
        }

        .elisa-success p {
          line-height: 1.7;
          color: #637083;
        }

        .elisa-success button {
          background: #084b91;
          color: white;
          padding: 14px 35px;
          border: none;
          border-radius: 30px;
          cursor: pointer;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes popupIn {
          from { opacity: 0; transform: translateY(25px) scale(0.97); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }

        @media (max-width: 900px) {
          .elisa-popup {
            max-width: 600px;
            grid-template-columns: 1fr;
            max-height: 90vh;
            overflow-y: auto;
          }

          .elisa-popup-left {
            min-height: 300px;
            padding: 35px 25px 120px;
            border-radius: 28px 28px 0 0;
          }

          .elisa-logo h2 {
            font-size: 40px;
          }

          .elisa-logo-icon {
            width: 60px;
            height: 60px;
          }

          .elisa-left-content {
            margin-top: 30px;
          }

          .elisa-left-content h3 {
            font-size: 29px;
          }

          .elisa-left-content p {
            font-size: 17px;
          }

          .elisa-medicine-image {
            height: 110px;
          }

          .elisa-popup-right {
            padding: 35px 25px;
          }

          .elisa-close {
            right: 12px;
            top: 12px;
            width: 42px;
            height: 42px;
          }
        }

        @media (max-width: 480px) {
          .elisa-popup-overlay {
            padding: 12px;
          }

          .elisa-popup {
            max-height: 94vh;
            border-radius: 20px;
          }

          .elisa-popup-left {
            min-height: 260px;
            padding: 30px 20px 90px;
          }

          .elisa-logo h2 {
            font-size: 35px;
          }

          .elisa-logo p {
            font-size: 14px;
          }

          .elisa-left-content {
            margin-top: 22px;
          }

          .elisa-left-content h3 {
            font-size: 25px;
          }

          .elisa-left-content p {
            font-size: 15px;
          }

          .elisa-popup-right {
            padding: 28px 18px;
          }

          .elisa-form-group {
            min-height: 58px;
            padding: 0 15px;
            gap: 12px;
            margin-bottom: 15px;
            border-radius: 12px;
          }

          .elisa-form-group input,
          .elisa-form-group textarea {
            font-size: 15px;
          }

          .elisa-message {
            min-height: 115px;
            padding-top: 18px;
          }

          .elisa-submit {
            width: 100%;
            min-height: 60px;
            font-size: 17px;
          }
        }
      `}</style>
    </div>
  );
}
