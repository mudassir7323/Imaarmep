import React, { useEffect, useState, useCallback } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/logo/logo.png";
import theme from "../../theme/Theme.js";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
];

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  // Highlight active routes dynamically
  const isActive = useCallback(
    (href) => {
      if (href === "/") return location.pathname === "/";
      return location.pathname.startsWith(href);
    },
    [location.pathname]
  );

  // Close mobile menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  // Handle scroll events to shrink/style header
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Check initial state
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on desktop resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-[1000] flex items-center justify-between px-6 lg:px-12 transition-all duration-500 ease-in-out border-b ${
          scrolled
            ? "h-[80px] bg-white shadow-md border-gray-100"
            : "h-[100px] bg-white border-transparent"
        }`}
      >
        {/* LOGO */}
        <Link
          to="/"
          className="flex items-center gap-3 no-underline group transition-transform duration-300"
        >
          {/* Logo size increased, white background blends into header bg-white */}
          <img
            src={logo}
            alt="IMAAR MEP Logo"
            className={`w-auto transition-all duration-500 ease-out mix-blend-multiply ${scrolled ? 'h-[50px] md:h-[60px]' : 'h-[60px] md:h-[75px]'}`}
            onError={(e) => {
              e.currentTarget.style.display = "none";
              e.currentTarget.nextSibling.style.display = "flex";
            }}
          />
          {/* Fallback Text Logo */}
          <span
            className="hidden font-extrabold text-3xl tracking-tight transition-colors duration-300 items-center justify-center"
            style={{ color: theme.colors.primary }}
          >
            IMAAR <span style={{ color: theme.colors.accent, marginLeft: "6px" }}>MEP</span>
          </span>
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-8 lg:gap-12">
          {NAV_LINKS.map(({ label, href }) => {
            const active = isActive(href);
            return (
              <Link
                key={href}
                to={href}
                className={`relative text-[16px] font-bold uppercase tracking-wider py-2 transition-all duration-300 no-underline group flex items-center justify-center`}
                style={{ color: active ? theme.colors.accent : theme.colors.primary }}
                onMouseEnter={(e) => { if (!active) e.currentTarget.style.color = theme.colors.accent; }}
                onMouseLeave={(e) => { if (!active) e.currentTarget.style.color = theme.colors.primary; }}
              >
                {label}
                {/* Clean, thick block underline on active / hover */}
                <span
                  className={`absolute -bottom-1 left-0 h-[3px] rounded-full transition-all duration-300 ease-out bg-current ${active ? 'w-full' : 'w-0 group-hover:w-full'}`}
                />
              </Link>
            );
          })}

          {/* Premium CTA Button */}
          <Link
            to="/Contact-Us"
            className="flex items-center gap-2 text-[15px] font-bold uppercase tracking-widest text-white px-8 py-3.5 rounded-sm shadow-md transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl group overflow-hidden relative"
            style={{ backgroundColor: theme.colors.primary }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = theme.colors.accent}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = theme.colors.primary}
          >
            <span className="relative z-10 flex items-center gap-2">
              Start Project
              <svg
                className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                viewBox="0 0 16 16"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M3 8h10M9 4l4 4-4 4" />
              </svg>
            </span>
          </Link>
        </nav>

        {/* MOBILE HAMBURGER MENU BUTTON */}
        <button
          onClick={toggleMenu}
          aria-label="Toggle mobile menu"
          className="md:hidden flex flex-col justify-center items-center w-12 h-12 rounded-sm transition-colors duration-300 z-[1001]"
          style={{ backgroundColor: menuOpen ? `${theme.colors.accent}15` : `${theme.colors.primary}10` }}
        >
          <div className="relative w-6 h-[18px] flex flex-col justify-between overflow-hidden">
            <span
              className={`w-full h-[2px] rounded-full transition-all duration-300 origin-left ${menuOpen ? 'rotate-45 translate-x-[2px] -translate-y-[1px]' : ''}`}
              style={{ backgroundColor: menuOpen ? theme.colors.accent : theme.colors.primary }}
            />
            <span
              className={`w-full h-[2px] rounded-full transition-all duration-300 ${menuOpen ? 'opacity-0 translate-x-4' : ''}`}
              style={{ backgroundColor: menuOpen ? theme.colors.accent : theme.colors.primary }}
            />
            <span
              className={`w-full h-[2px] rounded-full transition-all duration-300 origin-left ${menuOpen ? '-rotate-45 translate-x-[2px] translate-y-[1px]' : ''}`}
              style={{ backgroundColor: menuOpen ? theme.colors.accent : theme.colors.primary }}
            />
          </div>
        </button>
      </header>

      {/* MOBILE MENU DROPDOWN */}
      <div
        className={`md:hidden fixed inset-x-0 bg-white border-b border-gray-100 shadow-2xl transition-all duration-500 ease-in-out z-[999] overflow-hidden flex flex-col ${menuOpen ? `max-h-[500px] opacity-100 py-6 px-6` : `max-h-0 opacity-0 py-0 px-6 pointer-events-none`}`}
        style={{ top: scrolled ? '70px' : '100px' }}
      >
        <div className="flex flex-col gap-3 mt-4">
          {NAV_LINKS.map(({ label, href }, i) => {
            const active = isActive(href);
            return (
              <Link
                key={href}
                to={href}
                onClick={closeMenu}
                className={`py-4 px-5 text-lg font-bold uppercase tracking-widest rounded-sm transition-all duration-300 flex items-center justify-between group border-l-4 ${active ? 'bg-gray-50' : 'bg-transparent filter hover:bg-gray-50'}`}
                style={{ 
                  color: active ? theme.colors.accent : theme.colors.primary,
                  borderColor: active ? theme.colors.accent : 'transparent'
                }}
              >
                {label}
                <svg
                  className={`w-5 h-5 transition-transform duration-300 ${active ? 'translate-x-0 opacity-100' : 'opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0'}`}
                  viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                  style={{ color: active ? theme.colors.accent : theme.colors.primaryLight }}
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            );
          })}

          <div className="w-full h-px bg-gray-100 my-4" />

          <Link
            to="/Contact-Us"
            onClick={closeMenu}
            className="flex items-center justify-center gap-3 w-full text-lg font-bold uppercase tracking-widest text-white py-5 rounded-sm shadow-md transition-transform duration-300 active:scale-95"
            style={{ backgroundColor: theme.colors.primary }}
          >
            Start Project
          </Link>
        </div>
      </div>
    </>
  );
}

export default Header;
