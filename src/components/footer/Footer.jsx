import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import theme from "../../theme/Theme";
import { ContactContext } from "../../context/contact/ContactContext";
import logo from "../../assets/logo/logo1.png";

const PAGES = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Contact Us", href: "/Contact-Us" },
];

const SERVICES_LINKS = [
  {
    label: "Electrical Engineering",
    href: "/services#svc-electrical-engineering",
  },
  {
    label: "Mechanical Engineering",
    href: "/services#svc-mechanical-engineering",
  },
  { label: "Environmental", href: "/services#svc-environmental-engineering" },
  { label: "Specialist Services", href: "/services#svc-specialist-services" },
  { label: "Surveys & Reports", href: "/services#svc-surveys-&-reports" },
];

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const Footer = () => {
  const { CONTACT_INFO } = useContext(ContactContext);

  // Helper to find specific contact data safely
  const getContact = (id) => CONTACT_INFO?.find((c) => c.id === id) || {};

  const email = getContact("email");
  const phone = getContact("phone");
  const location = getContact("location");
  const linkedin = getContact("linkedin");

  return (
    <footer
      className="px-[5%] pt-[80px] pb-10 relative overflow-hidden text-white"
      style={{ backgroundColor: theme.colors.textPrimary }}
    >
      {/* Background Decorative Element */}
      <div
        className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full blur-[120px] opacity-10 pointer-events-none"
        style={{ backgroundColor: theme.colors.primary }}
      />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-[1200px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 pb-16 border-b border-white/[0.08]"
      >
        {/* Brand Column */}
        <motion.div variants={fadeUp} className="flex flex-col gap-6">
          <Link to="/" className="inline-block group">
            <div className="flex items-center gap-3">
              <img
                src={logo}
                alt="IMAAR MEP"
                className="h-14 w-auto object-contain  "
                //  style={{ mixBlendMode: "multiply" }}
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                  e.currentTarget.nextSibling.style.display = "block";
                }}
              />
              <span className="hidden font-extrabold text-2xl tracking-tighter text-white">
                IMAAR{" "}
                <span style={{ color: theme.colors.primaryLight }}>MEP</span>
              </span>
            </div>
          </Link>

          <p
            className="text-[0.92rem] leading-relaxed max-w-[280px]"
            style={{ color: "rgba(255,255,255,0.45)" }}
          >
            Delivering innovative mechanical, electrical, and public health
            design solutions tailored to the modern built environment with
            excellence.
          </p>

          {/* Social Links */}
          <div className="flex gap-3">
            <motion.a
              whileHover={{ scale: 1.1, backgroundColor: theme.colors.primary }}
              href={linkedin.href || "#"}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-10 h-10 border border-white/10 rounded-xl flex items-center justify-center transition-colors duration-300"
              style={{ color: "rgba(255,255,255,0.4)" }}
            >
              <div className="scale-75">{linkedin.icon}</div>
            </motion.a>
          </div>
        </motion.div>

        {/* Quick Links Column */}
        <motion.div variants={fadeUp} className="flex flex-col gap-6">
          <h4
            className="text-[0.7rem] font-black uppercase tracking-[0.2em]"
            style={{ color: theme.colors.primaryLight }}
          >
            Quick Navigation
          </h4>
          <ul className="flex flex-col gap-3.5">
            {PAGES.map(({ label, href }) => (
              <li key={href}>
                <Link
                  to={href}
                  className="text-[0.9rem] transition-all duration-300 hover:translate-x-1 inline-block"
                  style={{ color: "rgba(255,255,255,0.6)" }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = theme.colors.white)
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "rgba(255,255,255,0.6)")
                  }
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Services Column */}
        <motion.div variants={fadeUp} className="flex flex-col gap-6">
          <h4
            className="text-[0.7rem] font-black uppercase tracking-[0.2em]"
            style={{ color: theme.colors.primaryLight }}
          >
            Core Expertise
          </h4>
          <ul className="flex flex-col gap-3.5">
            {SERVICES_LINKS.map(({ label, href }) => (
              <li key={label}>
                <Link
                  to={href}
                  className="text-[0.9rem] transition-all duration-300 hover:translate-x-1 inline-block"
                  style={{ color: "rgba(255,255,255,0.6)" }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = theme.colors.white)
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "rgba(255,255,255,0.6)")
                  }
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Contact Info Column */}
        <motion.div
          variants={fadeUp}
          className="flex flex-col gap-6 text-[0.9rem]"
        >
          <h4
            className="text-[0.7rem] font-black uppercase tracking-[0.2em]"
            style={{ color: theme.colors.primaryLight }}
          >
            Get In Touch
          </h4>
          <div className="flex flex-col gap-5">
            {[phone, email, location].map((item, idx) => (
              <div key={idx} className="flex items-start gap-4 group">
                <div
                  className="w-9 h-9 border border-white/10 rounded-lg flex items-center justify-center shrink-0 transition-colors duration-300 group-hover:border-blue-400 group-hover:text-blue-400"
                  style={{ color: "rgba(255,255,255,0.4)" }}
                >
                  <div className="scale-[0.65]">{item.icon}</div>
                </div>
                <div className="flex flex-col">
                  <span className="text-[0.65rem] uppercase font-bold tracking-widest text-white/20 mb-1">
                    {item.label}
                  </span>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="transition-colors duration-200 hover:text-white"
                      style={{ color: "rgba(255,255,255,0.7)" }}
                    >
                      {item.value}
                    </a>
                  ) : (
                    <span style={{ color: "rgba(255,255,255,0.7)" }}>
                      {item.value}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* Bottom Legal Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="pt-10 flex flex-col md:flex-row justify-between items-center gap-6 text-[0.75rem]"
        style={{ color: "rgba(255,255,255,0.25)" }}
      >
        <p>
          &copy; {new Date().getFullYear()} IMAAR MEP Engineering Consultancy
          Ltd. All rights reserved.
        </p>
        <div className="flex gap-8">
          <Link
            to="/privacy-policy"
            className="hover:text-white transition-colors duration-300"
          >
            Privacy Policy
          </Link>
          <Link
            to="/terms-of-service"
            className="hover:text-white transition-colors duration-300"
          >
            Terms & Conditions
          </Link>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
