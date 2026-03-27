const ServicesHero = () => {
  return (
    <>
      {/* ───────── HERO ───────── */}
      <section className="relative h-[85vh] flex items-center justify-center overflow-hidden">

        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center scale-105"
          style={{ backgroundImage: "url('assets/images/services_bg.jpg')" }}
        />

        {/* Blue Overlay (Theme Color) */}
        <div className="absolute inset-0 bg-[rgba(26,86,219,0.88)] backdrop-blur-[6px]" />

        {/* Gradient Depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/40 via-blue-800/40 to-blue-900/60" />

        {/* Decorative Circles */}
        <div className="absolute right-[-100px] top-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-white/10 rounded-full" />
        <div className="absolute right-[-50px] top-1/2 -translate-y-1/2 w-[280px] h-[280px] border border-white/20 rounded-full" />

        {/* Content */}
        <div className="relative z-10 text-center px-6">
          
          {/* Breadcrumb */}
          <p className="text-white/70 text-sm mb-4 tracking-wide">
            <a href="/" className="hover:text-white transition">Home</a> / Services
          </p>

          {/* Title */}
          <h1 className="text-white font-bold leading-tight text-4xl md:text-6xl tracking-tight">
            Our <br />
            <span className="text-blue-200">Services</span>
          </h1>

        </div>
      </section>

      {/* ───────── INTRO ───────── */}
      <section className="bg-white py-20 px-[5%] text-center">
        
        {/* Label */}
        <p className="text-blue-600 uppercase tracking-[0.2em] text-xs font-semibold mb-4">
          What We Offer
        </p>

        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
          Engineering Excellence <br />
          <span className="text-blue-600">Across Every Discipline</span>
        </h2>

        {/* Description */}
        <p className="max-w-[720px] mx-auto text-gray-600 leading-relaxed text-[15px] md:text-base">
          Across our full range of engineering design services for the built environment, 
          our starting point is always the same: how can we make this building perform 
          at its absolute best? Every member of the team contributes to shaping our 
          engineering response — no innovative idea goes unheard.
        </p>

      </section>
    </>
  );
};

export default ServicesHero;