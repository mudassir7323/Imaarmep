import { motion } from "framer-motion";
import services from "../assets/services/services.jpg";
import theme from "../theme/Theme";

const ServicesHero = () => {
  // Animation variants
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <>
      {/* ───────── HERO ───────── */}
      <section className="relative h-[85vh] flex items-center justify-center overflow-hidden">

        {/* Background Image with slow zoom in effect */}
        <motion.div
          initial={{ scale: 1.15 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${services})` }}
        />

        {/* Primary Overlay (Theme Color) */}
        <div
          className="absolute inset-0 backdrop-blur-[6px]"
          style={{ backgroundColor: `${theme.colors.primary}D6` }} // D9 is approx 85% opacity
        />

        {/* Gradient Depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/50" />

        {/* Decorative Circles */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="absolute right-[-100px] top-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-white/10 rounded-full"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.7 }}
          className="absolute right-[-50px] top-1/2 -translate-y-1/2 w-[280px] h-[280px] border border-white/20 rounded-full"
        />

        {/* Content */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="relative z-10 text-center px-6"
        >
          {/* Breadcrumb */}
          <motion.p variants={fadeUp} className="text-white/80 text-sm mb-4 tracking-wider uppercase font-medium">
            <a href="/" className="hover:text-white transition-colors duration-300">Home</a>
            <span className="mx-2">/</span>
            <span style={{ color: theme.colors.primaryLight }}>Services</span>
          </motion.p>

          {/* Title */}
          <motion.h1 variants={fadeUp} className="text-white font-extrabold leading-tight text-5xl md:text-7xl tracking-tighter">
            Our <br />
            <span style={{ color: theme.colors.primaryLight }} className="relative inline-block mt-2">
              Services
              {/* Animated underline */}
              <motion.span
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 1, delay: 1 }}
                style={{ backgroundColor: theme.colors.accent }}
                className="absolute bottom-0 left-0 h-[4px] rounded-full opacity-80"
              />
            </span>
          </motion.h1>
        </motion.div>
      </section>

      {/* ───────── INTRO ───────── */}
      <section className="py-24 px-[5%] text-center relative overflow-hidden" style={{ backgroundColor: theme.colors.background }}>

        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gray-300 to-transparent opacity-50" />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-4xl mx-auto"
        >
          {/* Label */}
          <motion.p
            variants={fadeUp}
            style={{ color: theme.colors.accent }}
            className="uppercase tracking-[0.25em] text-xs font-bold mb-4"
          >
            What We Offer
          </motion.p>

          {/* Heading */}
          <motion.h2
            variants={fadeUp}
            style={{ color: theme.colors.textPrimary }}
            className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-8"
          >
            Engineering Excellence <br />
            <span style={{ color: theme.colors.primary }} className="font-light italic">Across Every Discipline</span>
          </motion.h2>

          {/* Description */}
          <motion.p
            variants={fadeUp}
            style={{ color: theme.colors.textSecondary }}
            className="mx-auto leading-relaxed text-lg md:text-xl font-light"
          >
            Across our full range of engineering design services for the built environment,
            our starting point is always the same: how can we make this building perform
            at its absolute best? Every member of the team contributes to shaping our
            engineering response — no innovative idea goes unheard.
          </motion.p>
        </motion.div>

      </section>
    </>
  );
};

export default ServicesHero;