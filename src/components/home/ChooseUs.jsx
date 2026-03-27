import React, { useEffect, useRef, useState, useMemo } from "react";
import { Link } from "react-router-dom";
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

function ChooseUs() {
  const [headerRef, headerVisible] = useOnScreen({ threshold: 0.2 });
  const [cardsRef, cardsVisible] = useOnScreen({ threshold: 0.1 });

  const features = [
    {
      title: "Every Stage Covered",
      desc: "Full RIBA Stage 1–7 capability across all MEP disciplines, from concept to completion.",
      icon: (
        <>
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" />
        </>
      ),
    },
    {
      title: "Innovative Solutions",
      desc: "No alternative idea goes unheard — inclusive engineering that consistently delivers exciting outcomes.",
      icon: (
        <>
          <path d="M12 2a10 10 0 1 0 10 10" />
          <path d="M12 6v6l4 2" />
        </>
      ),
    },
    {
      title: "Sustainable by Design",
      desc: "Low and zero-carbon solutions integrated from the earliest design stages, not bolted on after.",
      icon: (
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
      ),
    },
    {
      title: "True Collaboration",
      desc: "We embed ourselves in your project team — your priorities become ours from day one.",
      icon: (
        <>
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </>
      ),
    },
  ];

  return (
    <section 
      className="relative text-white py-28 px-6 md:px-12 lg:px-[5%] overflow-hidden"
      style={{ backgroundColor: theme.colors.primary }}
    >
      {/* Background Image Texture */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20 mix-blend-overlay"
        style={{ backgroundImage: "url('/assets/images/why-us-bg.jpg')" }}
      />

      {/* Modern Gradient Overlay */}
      <div 
        className="absolute inset-0 opacity-90"
        style={{ backgroundImage: `linear-gradient(135deg, ${theme.colors.primary}, ${theme.colors.secondary})` }}
      />

      {/* Content Container */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center max-w-[1400px] mx-auto">

        {/* ───── LEFT CONTENT ───── */}
        <div 
          ref={headerRef}
          className={`transition-all duration-1000 ease-out transform ${headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"}`}
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="h-[2px] w-12 rounded-full" style={{ backgroundColor: theme.colors.primaryLight }}></div>
            <p 
              className="uppercase tracking-[0.25em] text-sm font-bold shadow-sm"
              style={{ color: theme.colors.primaryLight }}
            >
              Why IMAAR MEP
            </p>
          </div>

          <h2 className="text-5xl md:text-6xl font-extrabold leading-tight mb-8">
            Engineering You <br className="hidden md:block"/>
            <span style={{ color: theme.colors.accent }}>Can Rely On</span>
          </h2>

          <p className="text-blue-50 text-lg md:text-xl leading-relaxed mb-10 max-w-[600px] font-medium opacity-90">
            Our commitment to smart, sustainable engineering and attention to detail at every stage of design
            sets us apart. We prioritise collaboration and forward-thinking solutions that deliver lasting value.
          </p>

          <Link
            to="/Contact-Us"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-lg font-bold transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl group"
            style={{ 
              backgroundColor: theme.colors.accent, 
              color: theme.colors.white 
            }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = theme.colors.primaryLight}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = theme.colors.accent}
          >
            Start a Project
            <svg 
              className="transition-transform duration-300 group-hover:translate-x-2"
              width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        {/* ───── RIGHT CARDS (Sliding from left) ───── */}
        <div 
          ref={cardsRef} 
          className="grid grid-cols-1 sm:grid-cols-2 gap-6 relative"
        >
          {features.map((item, i) => (
            <div
              key={i}
              className={`group bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-3xl shadow-lg 
              transition-all duration-700 ease-out transform ${cardsVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-24"}
              hover:scale-[1.03] hover:-translate-y-2 hover:bg-white/10 hover:shadow-2xl hover:border-white/20`}
              style={{ transitionDelay: `${cardsVisible ? i * 200 : 0}ms` }}
            >
              {/* Icon */}
              <div 
                className="mb-6 w-16 h-16 flex items-center justify-center rounded-2xl bg-white/10 shadow-inner transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6"
                style={{ color: theme.colors.primaryLight }}
              >
                <svg 
                  width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"
                >
                  {item.icon}
                </svg>
              </div>
              
              <h4 className="font-bold text-xl mb-3 text-white tracking-wide transition-colors group-hover:text-blue-100">
                {item.title}
              </h4>
              
              <p className="text-blue-50/80 text-base leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default ChooseUs;