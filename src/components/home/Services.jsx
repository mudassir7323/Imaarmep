import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import theme from "../../theme/Theme.js";

function Services() {
  const containerRef = useRef(null);
  const scrollRef = useRef(null);

  useEffect(() => {
    const section = containerRef.current;
    const scroller = scrollRef.current;

    const handleScroll = () => {
      if (!section || !scroller) return;

      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // When section is sticky (top is at or above 0, bottom is below viewport)
      if (rect.top <= 0 && rect.bottom >= windowHeight) {
        const scrollAmount = window.scrollY - section.offsetTop;
        const maxScrollY = section.offsetHeight - windowHeight;
        const maxScrollX = scroller.scrollWidth - scroller.clientWidth;
        
        // Calculate percentage of scroll completed and map to horizontal scroll
        const scrollPercent = Math.max(0, Math.min(scrollAmount / maxScrollY, 1));
        scroller.scrollLeft = scrollPercent * maxScrollX;
      }
    };

    window.addEventListener("scroll", handleScroll);
    // Trigger once on mount to set initial state
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const services = [
    { 
      title: "Electrical Engineering", 
      desc: "Power, lighting, renewables, and full IT infrastructure integration.",
      icon: <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
    },
    { 
      title: "Mechanical Engineering", 
      desc: "Advanced HVAC, thermal modeling, and intelligent building systems.",
      icon: <path d="M18.36 6.64a9 9 0 1 1-12.73 0M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
    },
    { 
      title: "Environmental", 
      desc: "Low-carbon engineering, BREEAM assessments, and sustainability.",
      icon: <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14h-2v-2h2v2zm0-4h-2V7h2v5z" /> // wait, this is info icon, let's use a leaf-like or globe
    },
    { 
      title: "Surveys & Reports", 
      desc: "Condition surveys, feasibility studies, and compliance audits.",
      icon: <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zM14 9V3.5L19.5 9H14zM8 12h8M8 16h6" />
    },
    { 
      title: "Specialist Services", 
      desc: "Fire engineering, CFD simulations, and smart home systems.",
      icon: <path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z" />
    },
    { 
      title: "Industrial & Power", 
      desc: "Heavy duty energy systems and industrial infrastructure.",
      icon: <path d="M22 12v4a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-4M12 2v20M2 12l10-10 10 10" />
    },
  ];

  // Fixing the environmental icon manually here
  services[2].icon = <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0zM12 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />; // using a pin/globe-ish shape for env, or a leaf:
  services[2].icon = <path d="M11 20A7 7 0 0 1 4 13c0-3.5 2.5-8.5 7.5-11.5a18 18 0 0 1 7.5 11.5 7 7 0 0 1-8 6.9zM11 20v-5" />; // A leaf!

  return (
    <section
      ref={containerRef}
      className="relative h-[250vh] text-white overflow-clip"
    >
      {/* Background Gradient using Theme */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: `linear-gradient(to bottom right, ${theme.colors.primary}, ${theme.colors.secondary})` }}
      />
      {/* Subtle overlay to give it texture */}
      <div 
        className="absolute inset-0 z-0 opacity-10 mix-blend-overlay"
        style={{ backgroundImage: "url('/assets/images/grid.svg')" }}
      />

      {/* Sticky Wrapper */}
      <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden px-[5%] z-10 w-full max-w-full">
        {/* HEADER */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 max-w-[1400px] mx-auto w-full gap-6">
          <div>
            <p 
              className="uppercase tracking-[0.25em] text-sm md:text-base font-bold mb-4 drop-shadow"
              style={{ color: theme.colors.primaryLight }}
            >
              What We Do
            </p>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight">
              Our Core <span style={{ color: theme.colors.accent }}>Services</span>
            </h2>
          </div>

          <Link
            to="/services"
            className="border-2 px-8 py-4 rounded-lg font-bold transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl group flex items-center gap-3 whitespace-nowrap"
            style={{ 
              borderColor: theme.colors.accent, 
              color: theme.colors.white 
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = theme.colors.accent;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
            }}
          >
            Explore All Services
            <svg
              className="transition-transform group-hover:translate-x-2"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        {/* HORIZONTAL SCROLL - Hide scrollbar but allow scrolling */}
        <div 
          ref={scrollRef} 
          className="flex gap-8 overflow-x-hidden max-w-[1400px] mx-auto w-full pb-10"
          style={{ scrollBehavior: 'auto' }}
        >
          {services.map((item, i) => (
            <div
              key={i}
              className="group min-w-[320px] md:min-w-[380px] lg:min-w-[420px] max-w-[420px] flex-shrink-0
                p-10 rounded-3xl border border-white/20
                bg-white/5 backdrop-blur-2xl shadow-lg
                transition-all duration-500 ease-out
                hover:scale-[1.05] hover:-translate-y-4
                hover:bg-white/15 cursor-pointer relative overflow-hidden"
              style={{ borderColor: 'rgba(255,255,255,0.15)' }}
            >
              {/* Decorative hover glow behind icon */}
              <div 
                className="absolute top-10 right-10 w-24 h-24 rounded-full blur-3xl opacity-0 group-hover:opacity-40 transition-opacity duration-700 pointer-events-none"
                style={{ backgroundColor: theme.colors.accent }}
              ></div>

              {/* ICON */}
              <div
                className="w-20 h-20 flex items-center justify-center rounded-2xl mb-8
                  bg-white/10 shadow-inner
                  transition-all duration-500 ease-out
                  group-hover:scale-110 group-hover:rotate-6
                  group-hover:shadow-2xl"
                style={{ color: theme.colors.primaryLight }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = theme.colors.accent;
                  e.currentTarget.style.color = theme.colors.white;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                  e.currentTarget.style.color = theme.colors.primaryLight;
                }}
              >
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {item.icon}
                </svg>
              </div>

              {/* TITLE */}
              <h3 className="text-2xl md:text-3xl font-bold mb-4 tracking-tight transition-colors duration-300" style={{ color: theme.colors.white }}>
                {item.title}
              </h3>

              {/* DESC */}
              <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                {item.desc}
              </p>

              {/* SUBTLE LINE (premium touch) */}
              <div 
                className="mt-8 h-[2px] w-0 transition-all duration-500 ease-out group-hover:w-full opacity-70"
                style={{ backgroundColor: theme.colors.accent }}
              ></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
