import { motion } from "framer-motion";
import theme from "../theme/Theme";

const CheckIcon = () => (
  <svg
    width="11"
    height="11"
    viewBox="0 0 12 12"
    fill="none"
    stroke="white"
    strokeWidth="2.2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="2 6 5 9 10 3" />
  </svg>
);

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: i * 0.07,
      ease: "easeOut",
    },
  }),
};

function ServicesCard({ items = [], isEven }) {
  return (
    <div
      className="px-[5%] py-[60px]"
      style={{ backgroundColor: isEven ? theme.colors.grayLight : theme.colors.white }}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 max-w-[1200px]">

        {items.map((item, i) => (
          <motion.div
            key={i}
            custom={i}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            whileHover={{
              scale: 1.06,
              y: -4,
              boxShadow: `0 20px 40px ${theme.colors.secondary}40`,
              borderColor: theme.colors.primaryLight,
              backgroundColor: `${theme.colors.primaryLight}15`,
            }}
            className="flex items-start gap-3.5 px-5 py-4 rounded-[12px] border text-sm leading-[1.55] cursor-pointer transition-colors duration-300"
            style={{
              backgroundColor: theme.colors.white,
              borderColor: theme.colors.grayLight,
              color: theme.colors.textSecondary,
            }}
          >
            {/* Icon */}
            <motion.div
              whileHover={{ scale: 1.15, rotate: 6 }}
              transition={{ duration: 0.25 }}
              className="w-[22px] h-[22px] rounded-[6px] flex items-center justify-center shrink-0 mt-[1px]"
              style={{
                background: `linear-gradient(135deg, ${theme.colors.primary}, ${theme.colors.primaryLight})`,
              }}
            >
              <CheckIcon />
            </motion.div>

            {/* Text */}
            <span className="transition-all duration-300" style={{ color: theme.colors.textSecondary }}>
              {item}
            </span>
          </motion.div>
        ))}

      </div>
    </div>
  );
}

export default ServicesCard;