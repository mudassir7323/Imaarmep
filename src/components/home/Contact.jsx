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

function Contact() {
  const [ref, isVisible] = useOnScreen({ threshold: 0.3 });

  return (
    <section className="bg-gray-50 py-24 px-6 md:px-12 lg:px-[5%] relative overflow-hidden">
      
      {/* Container acting as the highlighted banner */}
      <div 
        ref={ref}
        className={`relative max-w-[1400px] mx-auto rounded-[40px] overflow-hidden py-24 md:py-32 px-8 md:px-16 text-center text-white shadow-2xl transition-all duration-1000 ease-out transform ${isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-20 scale-95"}`}
        style={{ backgroundImage: `linear-gradient(135deg, ${theme.colors.primary}, ${theme.colors.secondary})` }}
      >
        {/* Decorative Grid Texture */}
        <div 
          className="absolute inset-0 bg-repeat opacity-[0.05] pointer-events-none mix-blend-overlay" 
          style={{ backgroundImage: "url('/assets/images/grid.svg')" }} 
        />

        {/* Decorative Glow Effect */}
        <div 
          className="absolute top-[-50%] left-1/2 -translate-x-1/2 w-[800px] h-[800px] blur-[140px] rounded-full pointer-events-none opacity-40 mix-blend-screen" 
          style={{ backgroundColor: theme.colors.accent }} 
        />

        {/* Content */}
        <div className="relative z-10 max-w-[800px] mx-auto">
          
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-extrabold mb-8 tracking-tight drop-shadow-md">
            Ready to Start Your <span style={{ color: theme.colors.accent }}>Project?</span>
          </h2>

          <p className="text-blue-50 text-lg md:text-2xl leading-relaxed mb-12 font-medium opacity-90 max-w-[650px] mx-auto drop-shadow-sm">
            Get in touch with our team to discuss your MEP engineering
            requirements. We would love to hear about your project and explore how we can help.
          </p>

          {/* Epic CTA Button */}
          <Link
            to="/Contact-Us"
            className="inline-flex items-center gap-4 font-bold text-lg px-12 py-5 rounded-2xl shadow-xl hover:shadow-[0_20px_40px_rgba(33,118,255,0.4)] hover:-translate-y-2 transition-all duration-300 group"
            style={{ backgroundColor: theme.colors.accent, color: theme.colors.white }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = theme.colors.primaryLight}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = theme.colors.accent}
          >
            Get in Touch
            <svg
              className="transition-transform duration-300 group-hover:translate-x-3"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Contact;