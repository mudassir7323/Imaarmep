import { useState, useRef, useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ContactHero from "../components/ContactHero";
import Location from "../components/Location";
import theme from "../theme/Theme";
import { ContactContext } from "../context/contact/ContactContext";

// ─── Constants ────────────────────────────────────────────────────────────────
// Data is provided by ContactContext


const STYLES = `
  @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;1,9..40,300&family=Fraunces:ital,wght@0,700;0,800;1,700&display=swap');

  .contact-page { font-family: 'DM Sans', sans-serif; }
  .display-font { font-family: 'Fraunces', serif; }

  /* Input focus */
  .form-input {
    transition: border-color 0.2s, box-shadow 0.2s, background 0.2s;
  }
  .form-input:focus {
    outline: none;
    border-color: ${theme.colors.primary};
    box-shadow: 0 0 0 3px ${theme.colors.primary}1F;
    background: ${theme.colors.white};
  }
  .form-input:hover:not(:focus) {
    border-color: ${theme.colors.textSecondary};
  }

  /* Select arrow */
  select.form-input {
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%2364748b' stroke-width='1.5' fill='none' stroke-linecap='round'/%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-position: right 14px center;
    appearance: none;
    -webkit-appearance: none;
    padding-right: 40px;
  }

  /* Submit button */
  .submit-btn {
    transition: background 0.22s, transform 0.18s, box-shadow 0.22s;
    box-shadow: 0 4px 16px ${theme.colors.primary}40;
  }
  .submit-btn:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: 0 8px 28px ${theme.colors.primary}59;
  }
  .submit-btn:active:not(:disabled) {
    transform: translateY(0);
  }
  .submit-btn:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;

// ─── Animation variants ───────────────────────────────────────────────────────

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: "easeOut" } },
};

const stagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const cardHover = {
  rest: { x: 0, backgroundColor: "transparent" },
  hover: {
    x: 4,
    backgroundColor: `${theme.colors.primaryLight}10`,
    transition: { duration: 0.2 },
  },
};

// ─── Sub-components ───────────────────────────────────────────────────────────

const FormField = ({ label, required, children, className = "" }) => (
  <div className={`flex flex-col gap-1.5 ${className}`}>
    <label
      className="text-[0.78rem] font-600 uppercase tracking-[0.07em]"
      style={{ color: theme.colors.textSecondary }}
    >
      {label}
      {required && (
        <span className="ml-0.5" style={{ color: theme.colors.accent }}>*</span>
      )}
    </label>
    {children}
  </div>
);

const inputClass =
  `form-input w-full px-4 py-3 rounded-xl border text-[0.9rem] placeholder:text-gray-400 font-normal`;

// ─── Main Component ───────────────────────────────────────────────────────────

const Contact = () => {
  const { CONTACT_INFO, SERVICE_OPTIONS } = useContext(ContactContext);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});
  const formRef = useRef(null);

  const validate = () => {
    const e = {};
    if (!formData.firstName.trim()) e.firstName = "Required";
    if (!formData.lastName.trim()) e.lastName = "Required";
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email))
      e.email = "Valid email required";
    if (!formData.message.trim()) e.message = "Required";
    return e;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 1400));
    setSubmitting(false);
    setSubmitted(true);
  };

  return (
    <div className="contact-page min-h-screen" style={{ backgroundColor: theme.colors.white }}>
      <style>{STYLES}</style>

      {/* ── HERO ── */}
      <ContactHero />

      {/* ── MAIN SECTION ── */}
      <section
        className="px-[5%] py-20"
        style={{ backgroundColor: theme.colors.white }}
      >
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-12 xl:gap-20 items-start">

          {/* ── LEFT: INFO ── */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
          >
            {/* Label */}
            <motion.p
              variants={fadeUp}
              className="inline-flex items-center gap-2 text-[0.72rem] font-bold uppercase tracking-[0.14em] mb-4"
              style={{ color: theme.colors.accent }}
            >
              <span
                className="w-6 h-px block"
                style={{ backgroundColor: theme.colors.primaryLight }}
              />
              Reach Out
            </motion.p>

            <motion.h2
              variants={fadeUp}
              className="display-font text-4xl md:text-[2.6rem] font-bold leading-[1.1] tracking-tight mb-5"
              style={{ color: theme.colors.textPrimary }}
            >
              Let's Discuss<br />
              <span className="italic" style={{ color: theme.colors.primary }}>
                Your Project
              </span>
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="text-[0.95rem] leading-[1.75] mb-10 max-w-sm"
              style={{ color: theme.colors.textSecondary }}
            >
              Whether you're at the early concept stage or need specialist MEP
              support mid-project, we're here to help.
            </motion.p>

            {/* Contact Items */}
            <motion.div variants={fadeUp} className="flex flex-col gap-2 mb-10">
              {CONTACT_INFO.map(({ id, label, value, href, icon }, i) => (
                <motion.div
                  key={id}
                  custom={i}
                  variants={{
                    hidden: { opacity: 0, x: -16 },
                    visible: (i) => ({
                      opacity: 1,
                      x: 0,
                      transition: { duration: 0.5, delay: i * 0.08 },
                    }),
                  }}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  whileHover={{
                    x: 4,
                    backgroundColor: `${theme.colors.primaryLight}12`,
                    transition: { duration: 0.2 },
                  }}
                  className="flex items-center gap-4 p-4 rounded-2xl border cursor-default transition-all duration-200"
                  style={{ borderColor: theme.colors.grayLight }}
                >
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                    style={{
                      backgroundColor: `${theme.colors.primaryLight}18`,
                      color: theme.colors.primary,
                    }}
                  >
                    {icon}
                  </div>
                  <div className="min-w-0">
                    <p
                      className="text-[0.72rem] font-bold uppercase tracking-[0.1em] mb-0.5"
                      style={{ color: theme.colors.textSecondary }}
                    >
                      {label}
                    </p>
                    {href ? (
                      <a
                        href={href}
                        target={href.startsWith("http") ? "_blank" : undefined}
                        rel="noopener noreferrer"
                        className="text-[0.9rem] font-medium no-underline truncate block transition-colors duration-200"
                        style={{ color: theme.colors.grayDark }}
                        onMouseEnter={(e) => (e.currentTarget.style.color = theme.colors.accent)}
                        onMouseLeave={(e) => (e.currentTarget.style.color = theme.colors.grayDark)}
                      >
                        {value}
                      </a>
                    ) : (
                      <p
                        className="text-[0.9rem] font-medium truncate"
                        style={{ color: theme.colors.grayDark }}
                      >
                        {value}
                      </p>
                    )}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Response time badge */}
            <motion.div
              variants={fadeUp}
              className="relative overflow-hidden rounded-2xl p-5 border"
              style={{
                borderColor: `${theme.colors.primaryLight}40`,
                background: `linear-gradient(135deg, ${theme.colors.primaryLight}12, ${theme.colors.accent}0A)`,
              }}
            >
              {/* Decorative circle */}
              <div
                className="absolute -top-6 -right-6 w-24 h-24 rounded-full opacity-30"
                style={{ backgroundColor: theme.colors.primaryLight }}
              />
              <div className="relative flex gap-3 items-start">
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 mt-0.5"
                  style={{ backgroundColor: theme.colors.primary }}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.2">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                </div>
                <div>
                  <p
                    className="text-[0.8rem] font-bold mb-1"
                    style={{ color: theme.colors.textPrimary }}
                  >
                    Typical Response Time
                  </p>
                  <p
                    className="text-[0.83rem] leading-relaxed"
                    style={{ color: theme.colors.primary }}
                  >
                    We aim to respond within <strong>24 hours</strong> during
                    business hours (Mon–Fri, 9am–5pm GMT).
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* ── RIGHT: FORM ── */}
          <motion.div
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <div
              className="rounded-3xl border overflow-hidden"
              style={{
                backgroundColor: theme.colors.white,
                borderColor: theme.colors.grayLight,
                boxShadow: `0 8px 48px ${theme.colors.primary}14`,
              }}
            >
              {/* Form header strip */}
              <div
                className="px-8 py-6"
                style={{
                  background: `linear-gradient(135deg, ${theme.colors.primary}, ${theme.colors.secondary})`,
                }}
              >
                <h3
                  className="display-font text-2xl font-bold"
                  style={{ color: theme.colors.white }}
                >
                  Send Us a Message
                </h3>
                <p className="text-sm mt-1" style={{ color: "rgba(255,255,255,0.6)" }}>
                  Fill in the form and we'll be in touch shortly.
                </p>
              </div>

              <AnimatePresence mode="wait">
                {submitted ? (
                  /* ── SUCCESS STATE ── */
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="flex flex-col items-center justify-center text-center px-10 py-20 gap-5"
                  >
                    <motion.div
                      initial={{ scale: 0.5, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.4, delay: 0.1, type: "spring" }}
                      className="w-20 h-20 rounded-full border flex items-center justify-center"
                      style={{
                        backgroundColor: `${theme.colors.success}10`,
                        borderColor: `${theme.colors.success}30`,
                        color: theme.colors.success,
                      }}
                    >
                      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                        <polyline points="22 4 12 14.01 9 11.01" />
                      </svg>
                    </motion.div>
                    <div>
                      <h3
                        className="display-font text-2xl font-bold mb-2"
                        style={{ color: theme.colors.textPrimary }}
                      >
                        Message Sent!
                      </h3>
                      <p
                        className="text-[0.95rem] leading-relaxed max-w-xs mx-auto"
                        style={{ color: theme.colors.textSecondary }}
                      >
                        Thank you for reaching out. We'll be in touch within 24 hours.
                      </p>
                    </div>
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({ firstName: "", lastName: "", email: "", phone: "", company: "", service: "", message: "" });
                      }}
                      className="mt-2 text-sm font-medium underline underline-offset-2 transition-colors cursor-pointer"
                      style={{ color: theme.colors.accent }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = theme.colors.primary)}
                      onMouseLeave={(e) => (e.currentTarget.style.color = theme.colors.accent)}
                    >
                      Send another message
                    </button>
                  </motion.div>
                ) : (
                  /* ── FORM ── */
                  <motion.form
                    key="form"
                    ref={formRef}
                    onSubmit={handleSubmit}
                    noValidate
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="p-8 grid grid-cols-1 sm:grid-cols-2 gap-5"
                  >
                    <FormField label="First Name" required>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        placeholder="John"
                        className={inputClass}
                        style={{
                          borderColor: errors.firstName ? theme.colors.error : theme.colors.grayLight,
                          backgroundColor: errors.firstName ? `${theme.colors.error}0A` : theme.colors.background,
                          color: theme.colors.textPrimary,
                        }}
                      />
                      {errors.firstName && (
                        <p className="text-[0.75rem] mt-0.5" style={{ color: theme.colors.error }}>{errors.firstName}</p>
                      )}
                    </FormField>

                    <FormField label="Last Name" required>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        placeholder="Smith"
                        className={inputClass}
                        style={{
                          borderColor: errors.lastName ? theme.colors.error : theme.colors.grayLight,
                          backgroundColor: errors.lastName ? `${theme.colors.error}0A` : theme.colors.background,
                          color: theme.colors.textPrimary,
                        }}
                      />
                      {errors.lastName && (
                        <p className="text-[0.75rem] mt-0.5" style={{ color: theme.colors.error }}>{errors.lastName}</p>
                      )}
                    </FormField>

                    <FormField label="Email Address" required>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@company.com"
                        className={inputClass}
                        style={{
                          borderColor: errors.email ? theme.colors.error : theme.colors.grayLight,
                          backgroundColor: errors.email ? `${theme.colors.error}0A` : theme.colors.background,
                          color: theme.colors.textPrimary,
                        }}
                      />
                      {errors.email && (
                        <p className="text-[0.75rem] mt-0.5" style={{ color: theme.colors.error }}>{errors.email}</p>
                      )}
                    </FormField>

                    <FormField label="Phone Number">
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+44 (0)..."
                        className={inputClass}
                        style={{
                          borderColor: theme.colors.grayLight,
                          backgroundColor: theme.colors.background,
                          color: theme.colors.textPrimary,
                        }}
                      />
                    </FormField>

                    <FormField label="Company / Organisation" className="sm:col-span-2">
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Your company name"
                        className={inputClass}
                        style={{
                          borderColor: theme.colors.grayLight,
                          backgroundColor: theme.colors.background,
                          color: theme.colors.textPrimary,
                        }}
                      />
                    </FormField>

                    <FormField label="Service of Interest" className="sm:col-span-2">
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className={`${inputClass} cursor-pointer`}
                        style={{
                          borderColor: theme.colors.grayLight,
                          backgroundColor: theme.colors.background,
                          color: theme.colors.textPrimary,
                        }}
                      >
                        <option value="" disabled>
                          Select a service...
                        </option>
                        {SERVICE_OPTIONS.map(({ value, label }) => (
                          <option key={value} value={value}>
                            {label}
                          </option>
                        ))}
                      </select>
                    </FormField>

                    <FormField label="Project Details" required className="sm:col-span-2">
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={5}
                        placeholder="Tell us about your project — location, scale, RIBA stage, key challenges..."
                        className={`${inputClass} resize-none leading-relaxed`}
                        style={{
                          borderColor: errors.message ? theme.colors.error : theme.colors.grayLight,
                          backgroundColor: errors.message ? `${theme.colors.error}0A` : theme.colors.background,
                          color: theme.colors.textPrimary,
                        }}
                      />
                      {errors.message && (
                        <p className="text-[0.75rem] mt-0.5" style={{ color: theme.colors.error }}>{errors.message}</p>
                      )}
                    </FormField>

                    <div className="sm:col-span-2">
                      <motion.button
                        type="submit"
                        disabled={submitting}
                        whileHover={!submitting ? { y: -2 } : {}}
                        whileTap={!submitting ? { y: 0 } : {}}
                        className="submit-btn w-full flex items-center justify-center gap-2.5 text-[0.875rem] font-semibold uppercase tracking-[0.07em] py-4 rounded-xl cursor-pointer"
                        style={{
                          backgroundColor: theme.colors.primary,
                          color: theme.colors.white,
                        }}
                        onMouseEnter={(e) => {
                          if (!submitting) e.currentTarget.style.backgroundColor = theme.colors.accent;
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = theme.colors.primary;
                        }}
                      >
                        {submitting ? (
                          <>
                            <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                            </svg>
                            Sending…
                          </>
                        ) : (
                          <>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                              <line x1="22" y1="2" x2="11" y2="13" />
                              <polygon points="22 2 15 22 11 13 2 9 22 2" />
                            </svg>
                            Send Message
                          </>
                        )}
                      </motion.button>
                      <p
                        className="text-center text-[0.75rem] mt-3"
                        style={{ color: theme.colors.textSecondary }}
                      >
                        We'll never share your details with third parties.
                      </p>
                    </div>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── MAP ── */}
      <Location />
    </div>
  );
};

export default Contact;
