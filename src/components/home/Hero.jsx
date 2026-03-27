import React, { useEffect, useState } from "react";
import hero from "../../assets/home/hero.jpg";
import theme from "../../theme/Theme.js";

function Hero() {
  // Animate counters from 0 to target value
  const [counters, setCounters] = useState({
    projects: 0,
    disciplines: 0,
    satisfaction: 0,
    experience: 0,
  });

  useEffect(() => {
    const targets = {
      projects: 150,
      disciplines: 8,
      satisfaction: 100,
      experience: 10,
    };

    let animationFrameId;
    const duration = 1500; // animation duration in ms
    const startTime = performance.now();

    function animate(time) {
      const elapsed = time - startTime;
      const progress = Math.min(elapsed / duration, 1);

      setCounters({
        projects: Math.floor(progress * targets.projects),
        disciplines: Math.floor(progress * targets.disciplines),
        satisfaction: Math.floor(progress * targets.satisfaction),
        experience: Math.floor(progress * targets.experience),
      });

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate);
      }
    }

    animationFrameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  const stripItems = [
    "RIBA Stage 1–7 Design",
    "Sustainable MEP Solutions",
    "BRUKL & SAP Compliance",
    "Birmingham & Nationwide",
    "UCL & Southampton Qualified",
    "Innovative Systems Design",
    "Public Health Engineering",
  ];

  return (
    <>
      <section className="hero relative text-white overflow-hidden min-h-[90vh] flex flex-col justify-center">
        {/* Background image and overlays */}
        <div
          className="hero-bg absolute inset-0 -z-30 opacity-80"
          style={{
            backgroundImage: `linear-gradient(to right, ${theme.colors.grayLight}, ${theme.colors.grayDark})`,
          }}
        ></div>

        <div
          className="hero-bg-image absolute inset-0 bg-cover bg-center -z-20"
          style={{ backgroundImage: `url(${hero})` }}
        ></div>

        <div className="hero-overlay absolute inset-0 bg-black opacity-60 -z-10"></div>

        <div className="hero-geometric absolute inset-0 pointer-events-none -z-10"></div>

        {/* Content container */}
        <div className="hero-content max-w-7xl mx-auto px-6 py-24 md:py-36 relative z-10 w-full animate-fade-in-up">
          <div
            className="hero-label uppercase tracking-widest mb-4 pt-5 font-semibold text-sm md:text-base animate-fade-in-down delay-100"
            style={{ color: theme.colors.primaryLight }}
          >
            M&E Engineering Consultancy · Birmingham, UK
          </div>

          <h1 className="hero-title font-extrabold text-6xl md:text-7xl lg:text-8xl leading-none mb-6 animate-fade-in-down xl:text-9xl">
            Precision <br className="hidden md:block" />
            <span
              className="accent-line"
              style={{ color: theme.colors.accent }}
            >
              Engineering.
            </span>
          </h1>

          <p
            className="hero-subtitle uppercase tracking-wide text-lg md:text-xl font-medium mb-6 opacity-90 animate-fade-in-up delay-200"
            style={{ color: theme.colors.grayLight }}
          >
            Exceptional Results.
          </p>

          <p
            className="hero-desc max-w-2xl text-lg md:text-2xl animate-fade-in-up delay-300"
            style={{ color: theme.colors.white }}
          >
            Innovative mechanical, electrical, and public health design
            solutions tailored to the modern built environment.
          </p>
        </div>

        {/* Stats */}
        <div
          className="hero-stats max-w-7xl mx-auto w-full px-6 flex flex-col sm:flex-row flex-wrap justify-between border-t py-8 text-sm md:text-base font-semibold tracking-wide relative z-10 animate-fade-in-up delay-400 gap-y-8"
          style={{ borderColor: theme.colors.primaryLight }}
        >
          <div
            className="hero-stat flex flex-col items-start w-1/2 sm:w-auto sm:border-r border-opacity-50 sm:pr-6"
            style={{ borderColor: theme.colors.primaryLight }}
          >
            <div
              className="hero-stat-number text-4xl md:text-5xl font-extrabold"
              style={{ color: theme.colors.white }}
            >
              {counters.projects}+
            </div>
            <div
              className="hero-stat-label uppercase mt-2 opacity-80"
              style={{ color: theme.colors.primaryLight }}
            >
              Projects Delivered
            </div>
          </div>

          <div
            className="hero-stat flex flex-col items-start w-1/2 sm:w-auto sm:border-r border-opacity-50 px-0 pl-6 sm:px-6"
            style={{ borderColor: theme.colors.primaryLight }}
          >
            <div
              className="hero-stat-number text-4xl md:text-5xl font-extrabold"
              style={{ color: theme.colors.white }}
            >
              {counters.disciplines}+
            </div>
            <div
              className="hero-stat-label uppercase mt-2 opacity-80"
              style={{ color: theme.colors.primaryLight }}
            >
              Service Disciplines
            </div>
          </div>

          <div
            className="hero-stat flex flex-col items-start w-1/2 sm:w-auto sm:border-r border-opacity-50 sm:pr-6 md:px-6"
            style={{ borderColor: theme.colors.primaryLight }}
          >
            <div
              className="hero-stat-number text-4xl md:text-5xl font-extrabold"
              style={{ color: theme.colors.white }}
            >
              {counters.satisfaction}%
            </div>
            <div
              className="hero-stat-label uppercase mt-2 opacity-80"
              style={{ color: theme.colors.primaryLight }}
            >
              Client Satisfaction
            </div>
          </div>

          <div className="hero-stat flex flex-col items-start w-1/2 sm:w-auto pl-6 sm:pl-6">
            <div
              className="hero-stat-number text-4xl md:text-5xl font-extrabold"
              style={{ color: theme.colors.white }}
            >
              {counters.experience}yr
            </div>
            <div
              className="hero-stat-label uppercase mt-2 opacity-80"
              style={{ color: theme.colors.primaryLight }}
            >
              Combined Experience
            </div>
          </div>
        </div>
      </section>

      {/* Intro strip - continuously scrolling */}
      <div
        className="intro-strip py-5 overflow-hidden relative animate-fade-in delay-500 flex"
        style={{
          backgroundColor: theme.colors.primary,
          borderTop: `2px solid ${theme.colors.accent}`,
          borderBottom: `2px solid ${theme.colors.accent}`,
        }}
      >
        <div className="flex animate-marquee group cursor-default">
          {[...stripItems, ...stripItems].map((item, i) => (
            <div
              key={i}
              className="flex px-8 md:px-12 items-center gap-3 text-sm md:text-base font-medium tracking-widest shrink-0 uppercase whitespace-nowrap"
              style={{ color: theme.colors.white }}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke={theme.colors.accent}
                strokeWidth="3"
                className="inline-block shrink-0"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
              {item}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Hero;
