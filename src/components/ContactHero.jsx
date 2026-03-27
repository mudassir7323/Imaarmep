import { Link } from "react-router-dom";

const HERO_STYLES = `
  @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500&family=Fraunces:ital,wght@0,700;1,600&display=swap');

  .hero-bg-img {
    background-image: url('assets/images/contact_bg.jpg');
    background-size: cover;
    background-position: center;
  }
  .hero-dark-overlay {
    background: linear-gradient(to right, rgba(26, 86, 219, 1) 40%, rgba(8,16,36,0.55) 100%);
  }
`;

const ContactHero = () => (
  <>
    <style>{HERO_STYLES}</style>

    <section className="relative h-[46vh] min-h-[320px] flex items-center overflow-hidden">
      {/* Background image */}
      <div className="hero-bg-img absolute inset-0" />

      {/* Dark overlay */}
      <div className="hero-dark-overlay absolute inset-0" />

      {/* Subtle bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white/10 to-transparent" />

      {/* Content */}
      <div className="relative z-10 px-[5%] w-full max-w-[1200px] mx-auto">

        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 mb-7" aria-label="Breadcrumb">
          <Link
            to="/"
            className="text-[0.75rem] uppercase tracking-[0.1em] font-medium text-white/40 hover:text-white/70 transition-colors duration-200 no-underline"
          >
            Home
          </Link>
          <span className="text-white text-xs">›</span>
          <span className="text-[0.75rem] uppercase tracking-[0.1em] font-medium text-white">
            Contact
          </span>
        </nav>

        {/* Heading */}
        <h1
          className="text-[2.6rem] md:text-[3.5rem] font-bold text-white leading-[1.1] tracking-tight mb-4"
          style={{ fontFamily: "'Fraunces', serif" }}
        >
          Get In Touch
        </h1>

        {/* Divider */}
        <div className="w-10 h-[2px] bg-blue-500 mb-4" />

        {/* Subtext */}
        <p
          className="text-white text-[0.9rem] max-w-sm leading-relaxed"
          style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300 }}
        >
          We respond to all enquiries within 24 hours during business hours.
        </p>
      </div>
    </section>
  </>
);

export default ContactHero;
