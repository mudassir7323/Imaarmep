import { useContext, useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import theme from "../theme/Theme";
import { ServicesContext } from "../context/ServicesContext";

function ServicesNav() {
  const services = useContext(ServicesContext);
  const [activeId, setActiveId] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const navRef = useRef(null);

  // Generate slug from title (matches ServicesHeading id pattern)
  const toSlug = (title) => `svc-${title.toLowerCase().replace(/\s+/g, "-")}`;

  // Show nav only after scrolling past the hero
  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Track which section is in view via IntersectionObserver
  useEffect(() => {
    const ids = services.map((svc) => toSlug(svc.title));
    const elements = ids.map((id) => document.getElementById(id)).filter(Boolean);

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        // Pick the first entry that is intersecting
        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible) {
          setActiveId(visible.target.id);
        }
      },
      { rootMargin: "-180px 0px -60% 0px", threshold: 0 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [services]);

  // Smooth-scroll to a section
  const scrollTo = (slug) => {
    const el = document.getElementById(slug);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // Horizontal scroll the active pill into view
  useEffect(() => {
    if (!navRef.current || !activeId) return;
    const activeBtn = navRef.current.querySelector(`[data-slug="${activeId}"]`);
    if (activeBtn) {
      activeBtn.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
    }
  }, [activeId]);

  return (
    <motion.div
      initial={{ y: -20, opacity: 0 }}
      animate={{
        y: isVisible ? 0 : -20,
        opacity: isVisible ? 1 : 0,
        pointerEvents: isVisible ? "auto" : "none",
      }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="fixed left-0 right-0 z-[998]"
      style={{ top: "80px" }}
    >
      {/* Glass background */}
      <div
        className="backdrop-blur-lg border-b"
        style={{
          backgroundColor: `${theme.colors.white}E6`,
          borderColor: theme.colors.grayLight,
        }}
      >
        <div
          ref={navRef}
          className="flex items-center gap-1.5 px-6 lg:px-12 py-2.5 overflow-x-auto scrollbar-hide"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {services.map((svc) => {
            const slug = toSlug(svc.title);
            const isActive = activeId === slug;

            return (
              <button
                key={slug}
                data-slug={slug}
                onClick={() => scrollTo(slug)}
                className="relative shrink-0 px-5 py-2 rounded-full text-[13px] font-semibold tracking-wide transition-all duration-300 cursor-pointer border whitespace-nowrap"
                style={{
                  backgroundColor: isActive ? theme.colors.primary : "transparent",
                  color: isActive ? theme.colors.white : theme.colors.textSecondary,
                  borderColor: isActive ? theme.colors.primary : theme.colors.grayLight,
                }}
                onMouseEnter={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.backgroundColor = `${theme.colors.primaryLight}18`;
                    e.currentTarget.style.borderColor = theme.colors.primaryLight;
                    e.currentTarget.style.color = theme.colors.primary;
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.backgroundColor = "transparent";
                    e.currentTarget.style.borderColor = theme.colors.grayLight;
                    e.currentTarget.style.color = theme.colors.textSecondary;
                  }
                }}
              >
                {svc.title}

                {/* Active dot indicator */}
                {isActive && (
                  <motion.span
                    layoutId="services-nav-dot"
                    className="absolute -bottom-[5px] left-1/2 -translate-x-1/2 w-[5px] h-[5px] rounded-full"
                    style={{ backgroundColor: theme.colors.accent }}
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}

export default ServicesNav;