import { useState, useRef } from "react";
import ContactHero from "../components/ContactHero"
import Location from "../components/Location";
import { Link } from "react-router-dom";

// ─── Constants ────────────────────────────────────────────────────────────────

const CONTACT_INFO = [
  {
    id: "phone",
    label: "Phone",
    value: "+44 (0) 000 000 0000",
    href: "tel:+440000000000",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.16h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.67a16 16 0 0 0 8.07 8.07l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 24 17.92" />
      </svg>
    ),
  },
  {
    id: "email",
    label: "Email",
    value: "info@imaarmep.co.uk",
    href: "mailto:info@imaarmep.co.uk",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
  },
  {
    id: "location",
    label: "Location",
    value: "Birmingham, United Kingdom",
    href: null,
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    value: "IMAAR MEP on LinkedIn",
    href: "YOUR_LINKEDIN_URL",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
];

const SERVICE_OPTIONS = [
  { value: "electrical", label: "Electrical Engineering" },
  { value: "mechanical", label: "Mechanical Engineering" },
  { value: "environmental", label: "Environmental / Compliance" },
  { value: "surveys", label: "Surveys & Reports" },
  { value: "specialist", label: "Specialist Services" },
  { value: "industrial", label: "Industrial" },
  { value: "leisure", label: "Leisure" },
  { value: "power", label: "Power" },
  { value: "other", label: "Other / Not sure yet" },
];

const STYLES = `
  @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;1,9..40,300&family=Fraunces:ital,wght@0,700;0,800;1,700&display=swap');

  .contact-page { font-family: 'DM Sans', sans-serif; }

  .display-font { font-family: 'Fraunces', serif; }

  /* Animated entry */
  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(28px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes fadeIn {
    from { opacity: 0; }
    to   { opacity: 1; }
  }
  .anim-1 { animation: fadeUp 0.7s ease both; }
  .anim-2 { animation: fadeUp 0.7s 0.12s ease both; }
  .anim-3 { animation: fadeUp 0.7s 0.24s ease both; }
  .anim-info { animation: fadeUp 0.7s 0.1s ease both; }
  .anim-form { animation: fadeUp 0.7s 0.22s ease both; }

  /* Info card hover */
  .info-card {
    transition: background 0.2s, transform 0.2s, box-shadow 0.2s;
  }
  .info-card:hover {
    background: rgba(26,86,219,0.06);
    transform: translateX(4px);
  }

  /* Input focus */
  .form-input {
    transition: border-color 0.2s, box-shadow 0.2s, background 0.2s;
  }
  .form-input:focus {
    outline: none;
    border-color: #1a56db;
    box-shadow: 0 0 0 3px rgba(26,86,219,0.12);
    background: #fff;
  }
  .form-input:hover:not(:focus) {
    border-color: #94a3b8;
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
    box-shadow: 0 4px 16px rgba(26,86,219,0.25);
  }
  .submit-btn:hover:not(:disabled) {
    background: #1341b0;
    transform: translateY(-2px);
    box-shadow: 0 8px 28px rgba(26,86,219,0.35);
  }
  .submit-btn:active:not(:disabled) {
    transform: translateY(0);
  }
  .submit-btn:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }

  /* Success check animation */
  @keyframes scaleIn {
    from { transform: scale(0.5); opacity: 0; }
    to   { transform: scale(1); opacity: 1; }
  }
  .success-icon { animation: scaleIn 0.4s 0.1s ease both; }

  /* Decorative grid pattern */
  .dot-grid {
    background-image: radial-gradient(rgba(26,86,219,0.12) 1px, transparent 1px);
    background-size: 24px 24px;
  }

  /* Map placeholder */
  .map-placeholder {
    background: linear-gradient(135deg, #f1f5f9 0%, #e2e8f0 100%);
  }
`;


const FormField = ({ label, required, children, className = "" }) => (
  <div className={`flex flex-col gap-1.5 ${className}`}>
    <label className="text-[0.78rem] font-600 uppercase tracking-[0.07em] text-slate-500">
      {label}
      {required && <span className="text-blue-500 ml-0.5">*</span>}
    </label>
    {children}
  </div>
);

const inputClass =
  "form-input w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-[0.9rem] text-slate-800 placeholder:text-slate-400 font-normal";


const Contact = () => {
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
    // Simulate async submission — wire up your real endpoint here
    await new Promise((r) => setTimeout(r, 1400));
    setSubmitting(false);
    setSubmitted(true);
  };

  return (
    <div className="contact-page min-h-screen bg-white">
      <style>{STYLES}</style>

      {/* ── HERO ── */}
      <ContactHero/>
      {/* ── MAIN SECTION ── */}
      <section className="px-[5%] py-20 bg-white">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-12 xl:gap-20 items-start">

          {/* ── LEFT: INFO ── */}
          <div className="anim-info">
            {/* Label */}
            <p className="inline-flex items-center gap-2 text-[0.72rem] font-bold uppercase tracking-[0.14em] text-blue-600 mb-4">
              <span className="w-6 h-px bg-blue-500 block" />
              Reach Out
            </p>

            <h2 className="display-font text-4xl md:text-[2.6rem] font-bold text-slate-900 leading-[1.1] tracking-tight mb-5">
              Let's Discuss<br />
              <span className="italic text-blue-600">Your Project</span>
            </h2>

            <p className="text-slate-500 text-[0.95rem] leading-[1.75] mb-10 max-w-sm">
              Whether you're at the early concept stage or need specialist MEP
              support mid-project, we're here to help.
            </p>

            {/* Contact Items */}
            <div className="flex flex-col gap-2 mb-10">
              {CONTACT_INFO.map(({ id, label, value, href, icon }) => (
                <div
                  key={id}
                  className="info-card flex items-center gap-4 p-4 rounded-2xl border border-slate-100 cursor-default"
                >
                  <div className="w-11 h-11 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
                    {icon}
                  </div>
                  <div className="min-w-0">
                    <p className="text-[0.72rem] font-bold uppercase tracking-[0.1em] text-slate-400 mb-0.5">
                      {label}
                    </p>
                    {href ? (
                      <a
                        href={href}
                        target={href.startsWith("http") ? "_blank" : undefined}
                        rel="noopener noreferrer"
                        className="text-[0.9rem] font-medium text-slate-700 hover:text-blue-600 transition-colors no-underline truncate block"
                      >
                        {value}
                      </a>
                    ) : (
                      <p className="text-[0.9rem] font-medium text-slate-700 truncate">
                        {value}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Response time badge */}
            <div className="relative overflow-hidden rounded-2xl p-5 border border-blue-100 bg-gradient-to-br from-blue-50 to-sky-50">
              {/* Decorative circle */}
              <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-blue-100 opacity-50" />
              <div className="relative flex gap-3 items-start">
                <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center shrink-0 mt-0.5">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.2">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                </div>
                <div>
                  <p className="text-[0.8rem] font-bold text-blue-900 mb-1">
                    Typical Response Time
                  </p>
                  <p className="text-[0.83rem] text-blue-700 leading-relaxed">
                    We aim to respond within <strong>24 hours</strong> during
                    business hours (Mon–Fri, 9am–5pm GMT).
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ── RIGHT: FORM ── */}
          <div className="anim-form">
            <div className="bg-white rounded-3xl border border-slate-100 shadow-[0_8px_48px_rgba(15,31,61,0.08)] overflow-hidden">

              {/* Form header strip */}
              <div className="bg-gradient-to-r from-[#1a56db] to-[#526eaa] px-8 py-6">
                <h3 className="display-font text-2xl font-bold text-white">
                  Send Us a Message
                </h3>
                <p className="text-white/60 text-sm mt-1">
                  Fill in the form and we'll be in touch shortly.
                </p>
              </div>

              {submitted ? (
                /* ── SUCCESS STATE ── */
                <div className="flex flex-col items-center justify-center text-center px-10 py-20 gap-5">
                  <div className="success-icon w-20 h-20 rounded-full bg-green-50 border border-green-100 flex items-center justify-center text-green-500">
                    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                      <polyline points="22 4 12 14.01 9 11.01" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="display-font text-2xl font-bold text-slate-900 mb-2">
                      Message Sent!
                    </h3>
                    <p className="text-slate-500 text-[0.95rem] leading-relaxed max-w-xs mx-auto">
                      Thank you for reaching out. We'll be in touch within 24 hours.
                    </p>
                  </div>
                  <button
                    onClick={() => { setSubmitted(false); setFormData({ firstName:"",lastName:"",email:"",phone:"",company:"",service:"",message:"" }); }}
                    className="mt-2 text-blue-600 text-sm font-medium underline underline-offset-2 hover:text-blue-800 transition-colors"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                /* ── FORM ── */
                <form
                  ref={formRef}
                  onSubmit={handleSubmit}
                  noValidate
                  className="p-8 grid grid-cols-1 sm:grid-cols-2 gap-5"
                >
                  <FormField label="First Name" required>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder="John"
                      className={`${inputClass} ${errors.firstName ? "border-red-400 bg-red-50" : ""}`}
                    />
                    {errors.firstName && (
                      <p className="text-red-500 text-[0.75rem] mt-0.5">{errors.firstName}</p>
                    )}
                  </FormField>

                  <FormField label="Last Name" required>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder="Smith"
                      className={`${inputClass} ${errors.lastName ? "border-red-400 bg-red-50" : ""}`}
                    />
                    {errors.lastName && (
                      <p className="text-red-500 text-[0.75rem] mt-0.5">{errors.lastName}</p>
                    )}
                  </FormField>

                  <FormField label="Email Address" required>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@company.com"
                      className={`${inputClass} ${errors.email ? "border-red-400 bg-red-50" : ""}`}
                    />
                    {errors.email && (
                      <p className="text-red-500 text-[0.75rem] mt-0.5">{errors.email}</p>
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
                    />
                  </FormField>

                  <FormField label="Service of Interest" className="sm:col-span-2">
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className={`${inputClass} cursor-pointer`}
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
                      className={`${inputClass} resize-none leading-relaxed ${errors.message ? "border-red-400 bg-red-50" : ""}`}
                    />
                    {errors.message && (
                      <p className="text-red-500 text-[0.75rem] mt-0.5">{errors.message}</p>
                    )}
                  </FormField>

                  <div className="sm:col-span-2">
                    <button
                      type="submit"
                      disabled={submitting}
                      className="submit-btn w-full flex items-center justify-center gap-2.5 bg-[#1a56db] text-white text-[0.875rem] font-semibold uppercase tracking-[0.07em] py-4 rounded-xl"
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
                    </button>
                    <p className="text-center text-slate-400 text-[0.75rem] mt-3">
                      We'll never share your details with third parties.
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── MAP ── */}
      <Location/>
    </div>
  );
};

export default Contact;
