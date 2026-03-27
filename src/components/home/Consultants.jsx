import React, { useEffect, useRef, useState, useMemo } from "react";
import theme from "../../theme/Theme.js";
import consultancy from "../../assets/home/consultancy.jpg"

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

function Consultants() {
  const [headerRef, headerVisible] = useOnScreen({ threshold: 0.2 });
  const [cardsRef, cardsVisible] = useOnScreen({ threshold: 0.1 });
  const [graphicRef, graphicVisible] = useOnScreen({ threshold: 0.2 });

  return (
    <section className="bg-gray-50 py-20 lg:py-32 px-6 md:px-12 lg:px-24 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">

        {/* LEFT SIDE: Text & Cards */}
        <div className="flex-1 max-w-2xl w-full">
          {/* Header Section */}
          <div
            ref={headerRef}
            className={`transition-all duration-1000 ease-out transform ${headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
          >
            <div
              className="text-sm md:text-base uppercase font-bold tracking-widest mb-3 md:mb-4"
              style={{ color: theme.colors.primary }}
            >
              Engineering Consultants
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
              A Proven Force in <br className="hidden md:block" />
              <span style={{ color: theme.colors.accent }}>Multi-Disciplinary <br className="hidden lg:block" />Engineering</span>
            </h2>

            <p className="text-gray-700 text-lg mb-4 leading-relaxed">
              IMAAR MEP is a fully integrated, multi-disciplinary engineering consultancy with a proven track record of excellence. Our teams have spent years delivering technically rigorous, cost-effective, and sympathetically designed solutions for a diverse and prestigious client portfolio — across projects of every scale and complexity.
            </p>

            <p className="text-gray-700 text-lg mb-10 leading-relaxed">
              We believe buildings are living, breathing environments — not merely static structures. They must respond intelligently to environmental shifts, evolving usage patterns, and the demands of those who inhabit them.
            </p>
          </div>

          {/* FEATURES LIST */}
          <div ref={cardsRef} className="space-y-6">
            {/* Card 1 */}
            <div
              className={`flex gap-5 p-6 bg-white rounded-2xl shadow-md border border-gray-100 hover:shadow-xl transition-all duration-700 ease-out transform ${cardsVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"}`}
              style={{ transitionDelay: '100ms' }}
            >
              <div
                className="flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center"
                style={{ backgroundColor: `${theme.colors.primaryLight}20`, color: theme.colors.primary }}
              >
                <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 text-lg mb-2">Cohesive, Multi-Disciplinary Teams</h4>
                <p className="text-gray-600 text-base leading-relaxed">
                  Our engineers, designers, and technical specialists collaborate seamlessly across every discipline, delivering unified solutions with no gaps in coordination.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div
              className={`flex gap-5 p-6 bg-white rounded-2xl shadow-md border border-gray-100 hover:shadow-xl transition-all duration-700 ease-out transform ${cardsVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"}`}
              style={{ transitionDelay: '300ms' }}
            >
              <div
                className="flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center"
                style={{ backgroundColor: `${theme.colors.primaryLight}20`, color: theme.colors.primary }}
              >
                <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 8v4l3 3" />
                </svg>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 text-lg mb-2">Adaptive, Future-Focused Design</h4>
                <p className="text-gray-600 text-base leading-relaxed">
                  We engineer buildings that evolve — responsive to environmental change, shifting usage patterns, and tomorrow's performance standards.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div
              className={`flex gap-5 p-6 bg-white rounded-2xl shadow-md border border-gray-100 hover:shadow-xl transition-all duration-700 ease-out transform ${cardsVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"}`}
              style={{ transitionDelay: '500ms' }}
            >
              <div
                className="flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center"
                style={{ backgroundColor: `${theme.colors.primaryLight}20`, color: theme.colors.primary }}
              >
                <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 text-lg mb-2">Innovation at Every Stage</h4>
                <p className="text-gray-600 text-base leading-relaxed">
                  Backed by academic excellence and real-world experience, we provide creative, precise, and forward-thinking answers to the most complex engineering challenges.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE: Graphic Display */}
        <div
          ref={graphicRef}
          className={`w-full lg:flex-1 relative transition-all duration-1000 ease-out transform ${graphicVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"}`}
        >
          <div
            className="rounded-3xl aspect-[4/3] lg:aspect-square xl:aspect-[4/3] relative overflow-hidden shadow-2xl transition-transform hover:scale-[1.02] duration-500 bg-gray-900"
          >
            {/* Background Image */}
            <img
              src={consultancy}
              alt="Engineering Consultancy"
              className="absolute inset-0 w-full h-full object-cover z-0"
            />

            {/* Overlay to ensure text/icons remain visible and look branded */}
            <div
              className="absolute inset-0 opacity-70 z-10 mix-blend-multiply"
              style={{ backgroundImage: `linear-gradient(to bottom right, ${theme.colors.primary}, ${theme.colors.secondary})` }}
            />

            {/* Blueprint grid overlay */}
            <div
              className="absolute inset-0 bg-repeat bg-[length:40px_40px] opacity-20 pointer-events-none z-10"
              style={{ backgroundImage: "url('/assets/images/grid.svg')" }}
            />

            {/* Center icon */}
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-80 transition-transform duration-700 hover:scale-110 hover:opacity-100 z-20 drop-shadow-lg"
              style={{ color: theme.colors.white }}
            >
              <svg
                width="120"
                height="120"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                className="stroke-current lg:w-[150px] lg:h-[150px]"
              >
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" />
              </svg>
            </div>

            {/* RIBA badge top-right */}
            <div
              className="absolute top-6 right-6 text-white text-xs md:text-sm font-bold tracking-wide rounded-full px-4 py-2 flex items-center gap-2 select-none shadow-lg backdrop-blur-sm"
              style={{ backgroundColor: `${theme.colors.accent}d9` }} // dynamic hex with alpha
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                viewBox="0 0 24 24"
              >
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                <polyline points="22 4 12 14.01 9 11.01" />
              </svg>
              RIBA Stage 1–7
            </div>

            {/* Stats card bottom-left */}
            <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8 bg-white rounded-xl shadow-xl px-6 py-4 flex flex-wrap gap-8 md:gap-12 w-max select-none">
              <div className="text-center">
                <div
                  className="text-2xl md:text-3xl font-extrabold"
                  style={{ color: theme.colors.primary }}
                >
                  150+
                </div>
                <div className="text-[10px] md:text-xs font-bold text-gray-400 tracking-wider uppercase mt-1">Projects</div>
              </div>
              <div className="text-center">
                <div
                  className="text-2xl md:text-3xl font-extrabold"
                  style={{ color: theme.colors.primary }}
                >
                  8+
                </div>
                <div className="text-[10px] md:text-xs font-bold text-gray-400 tracking-wider uppercase mt-1">Disciplines</div>
              </div>
              <div className="text-center">
                <div
                  className="text-2xl md:text-3xl font-extrabold"
                  style={{ color: theme.colors.primary }}
                >
                  10YR
                </div>
                <div className="text-[10px] md:text-xs font-bold text-gray-400 tracking-wider uppercase mt-1">Experience</div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Consultants;