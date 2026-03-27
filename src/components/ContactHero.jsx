import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import theme from "../theme/Theme";
import contact from "../assets/contact/contact.jpg";

const HERO_STYLES = `
  @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500&family=Fraunces:ital,wght@0,700;1,600&display=swap');

  .hero-bg-img {
    background-image: url(${contact});
    background-size: cover;
    background-position: center;
  }
`;

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const stagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const ContactHero = () => (
  <>
    <style>{HERO_STYLES}</style>

    <section className="relative h-[46vh] min-h-[320px] flex items-center overflow-hidden">
      {/* Background image with zoom effect */}
      <motion.div
        initial={{ scale: 1.12 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.8, ease: "easeOut" }}
        className="hero-bg-img absolute inset-0"
      />

      {/* Theme-colored overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(to right, ${theme.colors.primary} 40%, rgba(8,16,36,0.55) 100%)`,
        }}
      />

      {/* Subtle bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white/10 to-transparent" />

      {/* Decorative circle */}
      <motion.div
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, delay: 0.6 }}
        className="absolute right-[8%] top-1/2 -translate-y-1/2 w-[260px] h-[260px] border border-white/10 rounded-full hidden md:block"
      />

      {/* Content */}
      <motion.div
        variants={stagger}
        initial="hidden"
        animate="visible"
        className="relative z-10 px-[5%] pt-17 w-full max-w-[1200px] mx-auto"
      >
        {/* Breadcrumb */}
        <motion.nav
          variants={fadeUp}
          className="flex items-center gap-2 mb-7"
          aria-label="Breadcrumb"
        >
          <Link
            to="/"
            className="text-[0.75rem] uppercase tracking-[0.1em] font-medium text-white/40 hover:text-white/70 transition-colors duration-200 no-underline"
          >
            Home
          </Link>
          <span className="text-white text-xs">›</span>
          <span
            className="text-[0.75rem] uppercase tracking-[0.1em] font-medium"
            style={{ color: theme.colors.primaryLight }}
          >
            Contact
          </span>
        </motion.nav>

        {/* Heading */}
        <motion.h1
          variants={fadeUp}
          className="text-[2.6rem] md:text-[3.5rem] font-bold text-white leading-[1.1] tracking-tight mb-4"
          style={{ fontFamily: "'Fraunces', serif" }}
        >
          Get In Touch
        </motion.h1>

        {/* Divider */}
        <motion.div
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: 40, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="h-[2px] mb-4"
          style={{ backgroundColor: theme.colors.accent }}
        />

        {/* Subtext */}
        <motion.p
          variants={fadeUp}
          className="text-white/80 text-[0.9rem] max-w-sm leading-relaxed"
          style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300 }}
        >
          We respond to all enquiries within 24 hours during business hours.
        </motion.p>
      </motion.div>
    </section>
  </>
);

export default ContactHero;
