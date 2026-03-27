import { motion } from "framer-motion";
import theme from "../theme/Theme";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const Location = () => {
  const MAP_EMBED_SRC =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9731.89152657655!2d-1.9026911!3d52.4814339!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4870942d1b417173%3A0xa89142a7a1208edd!2sBirmingham%2C%20UK!5e0!3m2!1sen!2sus!4v1700000000000";

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
      }}
      className="px-[5%] pb-20"
      style={{ backgroundColor: theme.colors.background }}
    >
      <div className="max-w-[1200px] mx-auto">

        {/* Label */}
        <motion.div variants={fadeUp} className="flex items-center gap-3 mb-5">
          <p
            className="flex items-center gap-2 text-[0.72rem] font-bold uppercase tracking-[0.14em]"
            style={{ color: theme.colors.accent }}
          >
            <span
              className="w-6 h-px block"
              style={{ backgroundColor: theme.colors.primaryLight }}
            />
            Our Location
          </p>
        </motion.div>

        {/* Map wrapper */}
        <motion.div
          variants={fadeUp}
          className="rounded-2xl overflow-hidden border h-[380px] relative"
          style={{
            borderColor: theme.colors.grayLight,
            boxShadow: `0 4px 24px ${theme.colors.primary}12`,
          }}
          whileHover={{
            boxShadow: `0 8px 40px ${theme.colors.primary}20`,
            transition: { duration: 0.4 },
          }}
        >
          <iframe
            src={MAP_EMBED_SRC}
            width="100%"
            height="100%"
            style={{ border: 0, display: "block" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="IMAAR MEP Office Location"
          />
        </motion.div>

        {/* Footer strip */}
        <motion.div variants={fadeUp} className="flex items-center gap-2 mt-3 px-1">
          <svg
            width="13"
            height="13"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="shrink-0"
            style={{ color: theme.colors.accent }}
          >
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
            <circle cx="12" cy="10" r="3" />
          </svg>
          <p className="text-[0.78rem]" style={{ color: theme.colors.textSecondary }}>
            Birmingham, United Kingdom
          </p>
        </motion.div>

      </div>
    </motion.section>
  );
};

export default Location;
