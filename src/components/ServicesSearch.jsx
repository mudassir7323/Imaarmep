import { useState, useMemo, useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";
import theme from "../theme/Theme";
import { ServicesContext } from "../context/ServicesContext";

const SearchIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="11" cy="11" r="8" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>
);

const ClearIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

const resultVariants = {
  hidden: { opacity: 0, y: 12, scale: 0.97 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.35, delay: i * 0.06, ease: "easeOut" },
  }),
  exit: { opacity: 0, y: -8, scale: 0.97, transition: { duration: 0.2 } },
};

const ServicesSearch = () => {
  const services = useContext(ServicesContext);
  const [query, setQuery] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  // Flatten all service items with their parent title for search
  const allItems = useMemo(() => {
    return services.flatMap((svc) =>
      (svc.items || []).map((item) => ({
        item,
        parentTitle: svc.title,
        icon: svc.icon,
      }))
    );
  }, [services]);

  // Filter results
  const results = useMemo(() => {
    if (!query.trim()) return [];
    const q = query.toLowerCase();
    return allItems.filter(
      ({ item, parentTitle }) =>
        item.toLowerCase().includes(q) ||
        parentTitle.toLowerCase().includes(q)
    );
  }, [query, allItems]);

  const showResults = query.trim().length > 0;

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="py-16 px-[5%]"
      style={{ backgroundColor: theme.colors.background }}
    >
      <div className="max-w-[720px] mx-auto">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-center mb-8"
        >
          <p
            className="uppercase tracking-[0.25em] text-xs font-bold mb-2"
            style={{ color: theme.colors.accent }}
          >
            Quick Find
          </p>
          <h3
            className="text-2xl md:text-3xl font-bold"
            style={{ color: theme.colors.textPrimary }}
          >
            Search Our Services
          </h3>
        </motion.div>

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative"
        >
          <div
            className="relative flex items-center rounded-2xl overflow-hidden transition-all duration-400"
            style={{
              backgroundColor: theme.colors.white,
              border: `2px solid ${isFocused ? theme.colors.accent : theme.colors.grayLight}`,
              boxShadow: isFocused
                ? `0 8px 32px ${theme.colors.accent}20, 0 0 0 4px ${theme.colors.accent}10`
                : `0 4px 16px rgba(0,0,0,0.06)`,
            }}
          >
            {/* Search icon */}
            <div
              className="pl-5 pr-2 transition-colors duration-300"
              style={{ color: isFocused ? theme.colors.accent : theme.colors.textSecondary }}
            >
              <SearchIcon />
            </div>

            {/* Input */}
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              placeholder="Search for a service, e.g. HVAC, Fire Alarm..."
              className="w-full py-4 pr-12 text-[15px] bg-transparent outline-none placeholder:text-gray-400"
              style={{ color: theme.colors.textPrimary }}
            />

            {/* Clear button */}
            <AnimatePresence>
              {query && (
                <motion.button
                  initial={{ opacity: 0, scale: 0.6 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.6 }}
                  transition={{ duration: 0.2 }}
                  onClick={() => setQuery("")}
                  className="absolute right-4 p-1.5 rounded-full cursor-pointer transition-colors duration-200"
                  style={{
                    color: theme.colors.textSecondary,
                    backgroundColor: theme.colors.grayLight,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = theme.colors.error;
                    e.currentTarget.style.color = theme.colors.white;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = theme.colors.grayLight;
                    e.currentTarget.style.color = theme.colors.textSecondary;
                  }}
                >
                  <ClearIcon />
                </motion.button>
              )}
            </AnimatePresence>
          </div>

          {/* Results Dropdown */}
          <AnimatePresence>
            {showResults && (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 8 }}
                transition={{ duration: 0.3 }}
                className="absolute left-0 right-0 mt-3 rounded-2xl overflow-hidden z-20"
                style={{
                  backgroundColor: theme.colors.white,
                  border: `1px solid ${theme.colors.grayLight}`,
                  boxShadow: `0 20px 60px rgba(0,0,0,0.12), 0 4px 16px rgba(0,0,0,0.06)`,
                }}
              >
                {results.length > 0 ? (
                  <div className="max-h-[320px] overflow-y-auto py-2">
                    {results.map(({ item, parentTitle, icon }, i) => (
                      <motion.div
                        key={`${parentTitle}-${item}`}
                        custom={i}
                        variants={resultVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className="flex items-center gap-4 px-5 py-3.5 cursor-pointer transition-colors duration-200"
                        style={{ borderBottom: `1px solid ${theme.colors.grayLight}20` }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = `${theme.colors.primaryLight}12`;
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = "transparent";
                        }}
                      >
                        {/* Icon */}
                        <div
                          className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
                          style={{
                            background: `linear-gradient(135deg, ${theme.colors.primary}, ${theme.colors.accent})`,
                            color: theme.colors.white,
                          }}
                        >
                          <div className="scale-[0.45]">{icon}</div>
                        </div>

                        {/* Text */}
                        <div className="min-w-0">
                          <p
                            className="text-sm font-semibold truncate"
                            style={{ color: theme.colors.textPrimary }}
                          >
                            {highlightMatch(item, query)}
                          </p>
                          <p
                            className="text-xs mt-0.5 truncate"
                            style={{ color: theme.colors.textSecondary }}
                          >
                            {parentTitle}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                ) : (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="py-10 text-center"
                  >
                    <p
                      className="text-sm font-medium mb-1"
                      style={{ color: theme.colors.textSecondary }}
                    >
                      No services found for "{query}"
                    </p>
                    <p className="text-xs" style={{ color: theme.colors.grayDark }}>
                      Try a different keyword
                    </p>
                  </motion.div>
                )}

                {/* Footer */}
                {results.length > 0 && (
                  <div
                    className="px-5 py-2.5 text-xs font-medium flex items-center justify-between"
                    style={{
                      backgroundColor: `${theme.colors.grayLight}60`,
                      color: theme.colors.textSecondary,
                      borderTop: `1px solid ${theme.colors.grayLight}`,
                    }}
                  >
                    <span>
                      {results.length} result{results.length !== 1 ? "s" : ""} found
                    </span>
                    <span style={{ color: theme.colors.accent }}>●</span>
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </motion.section>
  );
};

/** Highlight the matching substring in bold accent color */
function highlightMatch(text, query) {
  if (!query.trim()) return text;
  const idx = text.toLowerCase().indexOf(query.toLowerCase());
  if (idx === -1) return text;
  const before = text.slice(0, idx);
  const matched = text.slice(idx, idx + query.length);
  const after = text.slice(idx + query.length);
  return (
    <span>
      {before}
      <span style={{ color: theme.colors.accent, fontWeight: 700 }}>{matched}</span>
      {after}
    </span>
  );
}

export default ServicesSearch;