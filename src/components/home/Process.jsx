import React, { useEffect, useRef, useState, useMemo } from "react";
import theme from "../../theme/Theme.js";

function useOnScreen(options) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  // useMemo ensures options object identity is stable
  const optionsMemo = useMemo(() => options, [options?.threshold, options?.rootMargin]);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        if (ref.current) observer.unobserve(ref.current);
      }
    }, optionsMemo);

    const currentRef = ref.current;
    if (currentRef) observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, [optionsMemo]);

  return [ref, isVisible];
}

function Process() {
  const [headerRef, headerVisible] = useOnScreen({ threshold: 0.2 });
  const [gridRef, gridVisible] = useOnScreen({ threshold: 0.1 });

  const steps = [
    {
      num: "01",
      title: "Brief & Consultation",
      desc: "We listen carefully to understand your project requirements, site constraints, and performance targets.",
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      )
    },
    {
      num: "02",
      title: "Design & Development",
      desc: "Our engineers develop innovative MEP solutions tailored to your brief, coordinated from early stages.",
      icon: (
        <>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 20h9" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
        </>
      )
    },
    {
      num: "03",
      title: "Review & Coordination",
      desc: "We collaborate closely with architects and stakeholders to ensure seamless integration.",
      icon: (
        <>
          <circle cx="18" cy="18" r="3" />
          <circle cx="6" cy="6" r="3" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 21V9a9 9 0 0 0 9 9" />
        </>
      )
    },
    {
      num: "04",
      title: "Delivery & Support",
      desc: "On-site tech support through construction and commissioning to deliver exceptional results.",
      icon: (
        <>
          <path strokeLinecap="round" strokeLinejoin="round" d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
          <polyline strokeLinecap="round" strokeLinejoin="round" points="22 4 12 14.01 9 11.01" />
        </>
      )
    }
  ];

  return (
    <section className="bg-white py-28 px-6 md:px-12 lg:px-[5%] relative overflow-hidden border-t-2 border-gray-50">
      
      {/* Background Subtle Grid Texture */}
      <div 
        className="absolute inset-0 bg-repeat opacity-[0.02] pointer-events-none" 
        style={{ backgroundImage: "url('/assets/images/grid.svg')" }} 
      />

      {/* ───── HEADER ───── */}
      <div 
        ref={headerRef}
        className={`text-center max-w-[800px] mx-auto mb-20 relative transition-all duration-1000 ease-out transform ${headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
      >
        <p 
          className="uppercase tracking-[0.2em] text-sm md:text-base font-bold mb-4"
          style={{ color: theme.colors.primary }}
        >
          How We Work
        </p>

        <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
          Our <span style={{ color: theme.colors.accent }}>Process</span>
        </h2>

        <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
          From initial brief to project handover, we guide you through every
          stage of the engineering design journey with clarity and expertise.
        </p>
      </div>

      {/* ───── STEPS GRID ───── */}
      <div 
        ref={gridRef}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 max-w-[1400px] mx-auto relative"
      >
        {/* Decorative connecting line for desktop */}
        <div 
          className="hidden lg:block absolute top-[68px] left-10 right-10 h-[2px] opacity-10"
          style={{ backgroundColor: theme.colors.primary }}
        />

        {steps.map((item, i) => (
          <div 
            key={i} 
            className={`group relative p-8 md:p-10 border border-gray-100 rounded-3xl bg-white shadow-md
              transition-all duration-700 ease-out transform ${gridVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"}
              hover:scale-[1.03] hover:-translate-y-3 hover:shadow-2xl overflow-hidden cursor-default backdrop-blur-sm`}
            style={{ transitionDelay: `${gridVisible ? i * 200 : 0}ms` }}
          >
            
            {/* Elegant Top Progress Border Effect */}
            <div 
              className="absolute top-0 left-0 h-1.5 w-0 transition-all duration-500 ease-in-out group-hover:w-full opacity-90 rounded-r-full"
              style={{ backgroundColor: theme.colors.accent }}
            />

            {/* Massive Modern Watermark Number */}
            <div 
              className="absolute -right-4 -bottom-6 text-[140px] font-black tracking-tighter opacity-[0.03] select-none transition-transform duration-700 group-hover:scale-110 group-hover:-translate-y-4"
              style={{ color: theme.colors.primary }}
            >
              {item.num}
            </div>

            {/* Interactive Floating Icon */}
            <div 
              className="w-16 h-16 flex items-center justify-center rounded-2xl mb-8 relative z-10
              transition-all duration-500 shadow-inner group-hover:scale-110 group-hover:rotate-6 group-hover:shadow-[0_10px_20px_rgba(33,118,255,0.3)]"
              style={{ backgroundColor: `${theme.colors.primaryLight}15`, color: theme.colors.primaryLight }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = theme.colors.accent;
                e.currentTarget.style.color = theme.colors.white;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = `${theme.colors.primaryLight}15`;
                e.currentTarget.style.color = theme.colors.primaryLight;
              }}
            >
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="drop-shadow-sm">
                {item.icon}
              </svg>

              {/* Step counter badge on the icon */}
              <div 
                className="absolute -top-3 -right-3 w-7 h-7 flex items-center justify-center rounded-full text-xs font-bold text-white shadow-sm border-2 border-white transition-transform duration-300 group-hover:scale-110"
                style={{ backgroundColor: theme.colors.primary }}
              >
                {i + 1}
              </div>
            </div>

            {/* Card Content Text */}
            <h3 
              className="text-2xl font-bold text-gray-900 mb-4 transition-colors duration-300 relative z-10"
              onMouseEnter={(e) => e.target.style.color = theme.colors.accent}
              onMouseLeave={(e) => e.target.style.color = ''}
            >
              {item.title}
            </h3>

            <p className="text-gray-500 text-base md:text-lg leading-relaxed relative z-10">
              {item.desc}
            </p>
            
          </div>
        ))}
      </div>
    </section>
  );
}

export default Process;