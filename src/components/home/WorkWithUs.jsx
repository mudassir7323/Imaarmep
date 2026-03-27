import React, { useEffect, useRef, useState, useMemo } from "react";
import theme from "../../theme/Theme.js";
import commercial from "../../assets/home/commercial.jpg"
import localgovt from "../../assets/home/localgovt.jpg"
import schools from "../../assets/home/schools.jpg"
import hospitals from "../../assets/home/hospitals.jpg"
import residential from "../../assets/home/residential.jpg"
import retail from "../../assets/home/retail.jpg"
import leisure from "../../assets/home/leisure.jpg"
import waste from "../../assets/home/waste.jpg"
import industrial from "../../assets/home/industrial.jpg"

function useOnScreen(options) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  // useMemo ensures options object identity is stable if it's not defined outside
  const optionsMemo = useMemo(() => options, [options?.threshold, options?.rootMargin]);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        // Only trigger once
        if (ref.current) {
            observer.unobserve(ref.current);
        }
      }
    }, optionsMemo);

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [optionsMemo]);

  return [ref, isVisible];
}

function WorkWithUs() {
  const [headerRef, headerVisible] = useOnScreen({ threshold: 0.2 });
  const [gridRef, gridVisible] = useOnScreen({ threshold: 0.1 });

  const sectors = [
    {
      title: "Commercial",
      sub: "Offices & Business Hubs",
      img: commercial,
      icon: (
        <>
          <rect x="2" y="3" width="20" height="14" rx="1" />
          <path d="M8 21h8M12 17v4" />
        </>
      ),
    },
    {
      title: "Local Government",
      sub: "Public & Civic Facilities",
      img: localgovt,
      icon: (
        <path d="M3 21h18M3 10h18M5 6l7-3 7 3M4 10v11M20 10v11" />
      ),
    },
    {
      title: "Schools",
      sub: "Education & Academia",
      img: schools,
      icon: (
        <>
          <path d="M22 10v12H2V10" />
          <path d="M12 2l10 8H2z" />
        </>
      ),
    },
    {
      title: "Hospitals",
      sub: "Healthcare & Life Sciences",
      img: hospitals,
      icon: (
        <>
          <path d="M3 9h18v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9z" />
          <path d="M12 12v6M9 15h6" />
        </>
      ),
    },
    {
      title: "Residential",
      sub: "Homes & Developments",
      img: residential,
      icon: <path d="M3 9l9-7 9 7v11" />,
    },
    {
      title: "Retail",
      sub: "Shops & Shopping Centres",
      img: retail,
      icon: <path d="M6 2L3 6v14h18V6l-3-4z" />,
    },
    {
      title: "Leisure",
      sub: "Sports & Recreation",
      img: leisure,
      icon: <path d="M6 2L3 6v14h18V6l-3-4z" />,
    },
    {
      title: "Waste",
      sub: "Waste & Recycling",
      img: waste,
      icon: <path d="M6 2L3 6v14h18V6l-3-4z" />,
    },
    {
      title: "Industrial",
      sub: "Manufacturing & Energy",
      img: industrial,
      icon: <path d="M6 2L3 6v14h18V6l-3-4z" />,
    },
  ];

  return (
    <section className="bg-gray-50 py-28 px-6 md:px-12 lg:px-[5%] overflow-hidden relative">

      {/* ───── HEADER ───── */}
      <div 
        ref={headerRef}
        className={`text-center max-w-[800px] mx-auto mb-20 transition-all duration-1000 ease-out transform ${headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
      >
        <p 
          className="uppercase tracking-[0.2em] text-sm md:text-base font-bold mb-4"
          style={{ color: theme.colors.primary }}
        >
          Our Clients & Sectors
        </p>

        <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6">
          We Work <span style={{ color: theme.colors.accent }}>With</span>
        </h2>

        <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
          From commercial offices to critical infrastructure, our expertise spans
          the full breadth of the built environment — delivering precision
          engineering wherever it's needed most.
        </p>
      </div>

      {/* ───── GRID ───── */}
      <div 
        ref={gridRef}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 max-w-[1400px] mx-auto"
      >
        {sectors.map((item, i) => {
          // Stagger card appearances based on grid pattern (up to 3 per row)
          const delay = (i % 3) * 150 + Math.floor(i / 3) * 100;
          return (
            <div
              key={i}
              className={`group bg-white rounded-3xl overflow-hidden shadow-md border-t border-gray-100
              transition-all duration-700 ease-out transform ${gridVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"}
              hover:scale-[1.03] hover:-translate-y-2 hover:shadow-2xl relative`}
              style={{ transitionDelay: `${gridVisible ? delay : 0}ms` }}
            >
              
              {/* Premium Image Top Half */}
              <div className="relative h-[220px] md:h-[250px] overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-in-out group-hover:scale-110"
                  style={{ backgroundImage: `url(${item.img})` }}
                />
                
                {/* Gradient fade to integrate with bottom card */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 via-transparent to-transparent opacity-90 transition-opacity duration-300 group-hover:opacity-70" />
                
                {/* Modern Floating Icon Box over the junction */}
                <div 
                  className="absolute -bottom-6 right-8 w-14 h-14 flex items-center justify-center rounded-2xl shadow-xl z-20 transition-all duration-500 ease-out group-hover:-translate-y-2 group-hover:shadow-[0_15px_30px_rgba(33,118,255,0.4)]"
                  style={{ backgroundColor: theme.colors.primary, color: theme.colors.white }}
                >
                  <svg
                    width="26"
                    height="26"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    {item.icon}
                  </svg>
                </div>
              </div>

              {/* Content Bottom Half */}
              <div className="p-8 pb-10 pt-10 relative bg-white">
                <h4 
                  className="text-2xl font-bold text-gray-900 mb-2 transition-colors duration-300"
                  onMouseEnter={(e) => e.currentTarget.style.color = theme.colors.accent}
                  onMouseLeave={(e) => e.currentTarget.style.color = ''}
                >
                  {item.title}
                </h4>

                <p className="text-gray-500 text-base md:text-lg">
                  {item.sub}
                </p>

                {/* Animated active border line on hover */}
                <div 
                  className="absolute bottom-0 left-0 h-1.5 w-0 transition-all duration-500 ease-in-out group-hover:w-full opacity-90 rounded-r-full"
                  style={{ backgroundColor: theme.colors.accent }}
                />
              </div>

            </div>
          );
        })}
      </div>
    </section>
  );
}

export default WorkWithUs;