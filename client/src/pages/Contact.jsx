import { useState, useEffect } from "react";
import MainLayout from "../layouts/MainLayout";


/* =========================================
   API URL
========================================= */

const API_BASE_URL = (
  import.meta.env.VITE_API_URL || window.location.origin
).replace(/\/$/, "");
const CONTACT_API_URL = `${API_BASE_URL}/api/contact`;

/* =========================================
   TOAST COMPONENT
========================================= */

const Toast = ({ toast, onRemove }) => {
  useEffect(() => {
    const timer = setTimeout(() => onRemove(toast.id), 4000);
    return () => clearTimeout(timer);
  }, [toast.id, onRemove]);

  const isSuccess = toast.type === "success";

  return (
    <div
      className={`
        flex items-start gap-4 p-5 rounded-2xl shadow-2xl border
        backdrop-blur-sm min-w-[320px] max-w-[420px]
        animate-slideIn
        ${
          isSuccess
            ? "bg-white border-emerald-100"
            : "bg-white border-red-100"
        }
      `}
      style={{
        animation: "slideIn 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) forwards",
      }}
    >
      {/* Icon */}
      <div
        className={`
          w-11 h-11 rounded-xl flex items-center justify-center text-xl flex-shrink-0
          ${isSuccess ? "bg-emerald-50" : "bg-red-50"}
        `}
      >
        {isSuccess ? "🎉" : "❌"}
      </div>

      {/* Text */}
      <div className="flex-1 pt-0.5">
        <p
          className={`font-semibold text-sm ${
            isSuccess ? "text-emerald-700" : "text-red-700"
          }`}
        >
          {isSuccess ? "Message Sent!" : "Something went wrong"}
        </p>
        <p className="text-gray-500 text-sm mt-0.5 leading-relaxed">
          {toast.message}
        </p>
      </div>

      {/* Close */}
      <button
        onClick={() => onRemove(toast.id)}
        className="text-gray-300 hover:text-gray-500 transition-colors text-lg leading-none mt-0.5 flex-shrink-0"
      >
        ×
      </button>

      {/* Progress bar */}
      <div
        className={`
          absolute bottom-0 left-0 h-[3px] rounded-b-2xl
          ${isSuccess ? "bg-emerald-400" : "bg-red-400"}
        `}
        style={{ animation: "shrink 4s linear forwards" }}
      />
    </div>
  );
};

/* =========================================
   TOAST CONTAINER
========================================= */

const ToastContainer = ({ toasts, onRemove }) => {
  if (toasts.length === 0) return null;

  return (
    <div className="fixed top-6 right-6 z-[9999] flex flex-col gap-3">
      {toasts.map((toast) => (
        <div key={toast.id} className="relative">
          <Toast toast={toast} onRemove={onRemove} />
        </div>
      ))}
    </div>
  );
};

/* =========================================
   MAIN CONTACT COMPONENT
========================================= */

const Contact = () => {
  /* =========================================
     STATES
  ========================================= */

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [toasts, setToasts] = useState([]);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
  });

  /* =========================================
     TOAST HELPERS
  ========================================= */

  const addToast = (message, type = "success") => {
    const id = Date.now();
    setToasts((prev) => [...prev, { id, message, type }]);
  };

  const removeToast = (id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  /* =========================================
     HANDLE CHANGE
  ========================================= */

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  /* =========================================
     HANDLE SUBMIT  (Optimistic UI)
     - Show success toast immediately
     - Send API call in background
     - Revert only if API actually fails
  ========================================= */

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (loading) return;

    setLoading(true);

    // --- OPTIMISTIC: show success & reset form immediately ---
    const snapshot = { ...formData };

    setSubmitted(true);
    setFormData({ name: "", email: "", phone: "", service: "" });
    addToast(
      "Our team will reach out to you shortly. Check your inbox for a confirmation email! 🚀",
      "success"
    );

    try {
      const response = await fetch(CONTACT_API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(snapshot),
      });

      const data = await response.json();

      if (!data.success) {
        // Revert optimistic update on server-side failure
        setSubmitted(false);
        setFormData(snapshot);
        setToasts([]);
        addToast(
          data.message || "Failed to send message. Please try again.",
          "error"
        );
      }
    } catch {
      // Network error — revert
      setSubmitted(false);
      setFormData(snapshot);
      setToasts([]);
      addToast("Network error. Please check your connection and try again.", "error");
    } finally {
      setLoading(false);
    }
  };

  /* =========================================
     RENDER
  ========================================= */

  return (
    <MainLayout>
      {/* ── Toast animations ── */}
      <style>{`
        @keyframes slideIn {
          from { opacity: 0; transform: translateX(40px) scale(0.92); }
          to   { opacity: 1; transform: translateX(0)   scale(1);    }
        }
        @keyframes shrink {
          from { width: 100%; }
          to   { width: 0%;   }
        }
      `}</style>

      {/* ── Toast Container ── */}
      <ToastContainer toasts={toasts} onRemove={removeToast} />

      <section className="py-16 md:py-24 bg-[#F8FAFC]">
        <div className="container-custom">

          {/* TOP */}
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-primary/10 border border-primary/10">
              <span className="w-2.5 h-2.5 rounded-full bg-primary" />
              <p className="text-primary font-semibold uppercase tracking-[3px] text-xs md:text-sm">
                Contact Us
              </p>
            </div>

            <h2 className="text-4xl md:text-6xl font-bold font-outfit text-dark mt-7">
              Let's Grow Your Business
            </h2>

            <p className="paragraph mt-6 text-base md:text-lg">
              Send your requirements and our experts will contact you shortly.
            </p>
          </div>

          {/* CONTACT BOX */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-16">

            {/* LEFT — Contact Info */}
            <div className="bg-white rounded-[32px] p-8 md:p-12 shadow-lg border border-gray-100">
              <h3 className="text-3xl md:text-4xl font-bold font-outfit text-dark">
                Get In Touch
              </h3>

              <p className="paragraph mt-5">
                We help businesses with premium websites, SEO, digital
                marketing and AI automation.
              </p>

              <div className="space-y-6 mt-10">

                {/* ADDRESS */}
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-2xl flex-shrink-0">
                    📍
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-dark">Office Address</h4>
                    <p className="paragraph mt-2">Noida & Moradabad, Uttar Pradesh, India</p>
                  </div>
                </div>

                {/* PHONE */}
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-2xl flex-shrink-0">
                    📞
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-dark">Call Us</h4>
                    <p className="paragraph mt-2">+91 9958938205</p>
                  </div>
                </div>

                {/* EMAIL */}
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-2xl flex-shrink-0">
                    ✉️
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-dark">Email Address</h4>
                    <p className="paragraph mt-2">demo@growthgarage.in</p>
                  </div>
                </div>

              </div>
            </div>

            {/* RIGHT — Form or Success State */}
            <div className="bg-white rounded-[32px] p-8 md:p-12 shadow-lg border border-gray-100">

              {submitted ? (
                /* ── SUCCESS STATE ── */
                <div className="flex flex-col items-center justify-center h-full text-center py-8">
                  <div className="w-24 h-24 rounded-full bg-emerald-50 flex items-center justify-center text-5xl mb-6">
                    🎉
                  </div>
                  <h3 className="text-3xl font-bold font-outfit text-dark">
                    Message Received!
                  </h3>
                  <p className="paragraph mt-4 max-w-xs">
                    Our team will reach out to you within 24 hours. Please check your inbox for a confirmation email.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-8 gradient-btn justify-center px-8 py-3"
                  >
                    Send Another →
                  </button>
                </div>
              ) : (
                /* ── FORM ── */
                <>
                  <h3 className="text-3xl md:text-4xl font-bold font-outfit text-dark">
                    Send Message
                  </h3>

                  <p className="paragraph mt-5">
                    Fill the form and our team will contact you shortly.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-5 mt-10">

                    {/* NAME */}
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full h-[60px] rounded-2xl border border-gray-200 px-6 outline-none focus:border-primary transition-colors"
                      required
                    />

                    {/* EMAIL */}
                    <input
                      type="email"
                      name="email"
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full h-[60px] rounded-2xl border border-gray-200 px-6 outline-none focus:border-primary transition-colors"
                      required
                    />

                    {/* PHONE */}
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone Number"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full h-[60px] rounded-2xl border border-gray-200 px-6 outline-none focus:border-primary transition-colors"
                      required
                    />

                    {/* SERVICE */}
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full h-[60px] rounded-2xl border border-gray-200 px-6 outline-none focus:border-primary transition-colors bg-white"
                      required
                    >
                      <option value="">Select Service</option>
                      <option>Web Development</option>
                      <option>SEO Optimization</option>
                      <option>Digital Marketing</option>
                      <option>AI Automation</option>
                      <option>Branding</option>
                    </select>

                    {/* BUTTON */}
                    <button
                      type="submit"
                      disabled={loading}
                      className="gradient-btn w-full justify-center py-4 text-lg disabled:opacity-70"
                    >
                      {loading ? (
                        <span className="flex items-center gap-3 justify-center">
                          <svg
                            className="animate-spin w-5 h-5"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <circle
                              className="opacity-25"
                              cx="12" cy="12" r="10"
                              stroke="currentColor" strokeWidth="4"
                            />
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 00-8 8h4z"
                            />
                          </svg>
                          Sending...
                        </span>
                      ) : (
                        "Submit Now →"
                      )}
                    </button>

                  </form>
                </>
              )}

            </div>
          </div>

        </div>
      </section>
    </MainLayout>
  );
};

export default Contact;
