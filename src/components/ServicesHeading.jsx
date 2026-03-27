import { motion } from "framer-motion";
import theme from "../theme/Theme";
import ServicesCard from "./ServicesCard";

const bandVariants = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const iconVariants = {
  hidden: { opacity: 0, scale: 0.6, rotate: -15 },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: { duration: 0.6, ease: "easeOut", delay: 0.2 },
  },
};

const textBlockVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.3 },
  },
};

const lineVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

const ServicesHeading = ({
  index,
  title,
  description,
  items = [],
  icon,
  imagePath,
}) => {
  const isEven = index % 2 === 0;
  const orderLabel = `Discipline ${String(index).padStart(2, "0")}`;
  const bgNum = String(index).padStart(2, "0");

  // Use theme colors to build gradient
  const bandBg = isEven
    ? `linear-gradient(135deg, ${theme.colors.textPrimary} 0%, ${theme.colors.primary} 100%)`
    : `linear-gradient(135deg, ${theme.colors.primary} 0%, ${theme.colors.secondary} 100%)`;

  // Slug for scroll target
  const sectionId = `svc-${title.toLowerCase().replace(/\s+/g, "-")}`;

  return (
    <div
      id={sectionId}
      className="svc-block relative border-b scroll-mt-[160px]"
      style={{ borderColor: `${theme.colors.grayLight}` }}
    >
      {/* VISUAL BAND */}
      <motion.div
        variants={bandVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="relative flex items-center py-16 md:py-[72px] px-[5%] overflow-hidden min-h-[300px]"
        style={{ background: bandBg }}
      >
        {/* Background Image */}
        {imagePath && (
          <div
            className="svc-photo absolute inset-0 z-[1] opacity-[0.18] bg-cover bg-center"
            style={{ backgroundImage: `url('${imagePath}')` }}
          />
        )}

        {/* Glow accent */}
        <div
          className="absolute -top-20 -right-20 w-[300px] h-[300px] rounded-full opacity-20 blur-3xl pointer-events-none z-[2]"
          style={{ backgroundColor: theme.colors.primaryLight }}
        />

        {/* Content */}
        <div className="relative z-[3] flex flex-col md:flex-row items-start md:items-center gap-7 md:gap-12 w-full max-w-[860px]">

          {/* Icon */}
          <motion.div
            variants={iconVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ duration: 0.3 }}
            className="w-[72px] h-[72px] md:w-[100px] md:h-[100px] rounded-[18px] md:rounded-[24px] flex items-center justify-center text-white shrink-0 border backdrop-blur-md"
            style={{
              backgroundColor: "rgba(255,255,255,0.1)",
              borderColor: "rgba(255,255,255,0.2)",
            }}
          >
            {icon}
          </motion.div>

          {/* Text */}
          <motion.div
            variants={textBlockVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.p
              variants={lineVariants}
              className="text-[0.7rem] font-bold tracking-[0.16em] uppercase mb-3"
              style={{ color: theme.colors.primaryLight }}
            >
              {orderLabel}
            </motion.p>

            <motion.h2
              variants={lineVariants}
              className="text-white text-3xl md:text-5xl font-bold mb-4"
            >
              {title}
            </motion.h2>

            <motion.p
              variants={lineVariants}
              className="text-sm leading-relaxed max-w-[560px]"
              style={{ color: "rgba(255,255,255,0.70)" }}
            >
              {description}
            </motion.p>
          </motion.div>
        </div>

        {/* Big background number */}
        <motion.span
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
          className="absolute right-[5%] bottom-[-20px] hidden md:block select-none pointer-events-none"
          style={{
            fontSize: "10rem",
            color: "rgba(255,255,255,0.05)",
            fontWeight: 900,
            lineHeight: 1,
          }}
        >
          {bgNum}
        </motion.span>
      </motion.div>

      {/* ITEMS */}
      {items.length > 0 && (
        <ServicesCard items={items} isEven={isEven} />
      )}
    </div>
  );
};

export default ServicesHeading;