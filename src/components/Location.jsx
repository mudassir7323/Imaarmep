const Location = () => {
  // ── Replace this src with your real Google Maps embed URL ──
  // To get your embed URL:
  // 1. Go to maps.google.com and search your address
  // 2. Click Share → Embed a map → Copy HTML
  // 3. Paste only the src="..." value below
  const MAP_EMBED_SRC =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9731.89152657655!2d-1.9026911!3d52.4814339!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4870942d1b417173%3A0xa89142a7a1208edd!2sBirmingham%2C%20UK!5e0!3m2!1sen!2sus!4v1700000000000";

  return (
    <section className="px-[5%] pb-20">
      <div className="max-w-[1200px] mx-auto">

        {/* Label */}
        <div className="flex items-center gap-3 mb-5">
          <p className="flex items-center gap-2 text-[0.72rem] font-bold uppercase tracking-[0.14em] text-blue-600">
            <span className="w-6 h-px bg-blue-500 block" />
            Our Location
          </p>
        </div>

        {/* Map wrapper */}
        <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-[0_4px_24px_rgba(15,31,61,0.07)] h-[380px] relative">
          <iframe
            src={MAP_EMBED_SRC}
            width="100%"
            height="100%"
            style={{ border: 0, display: "block" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="IMAAR MEP Office Location"
          />
        </div>

        {/* Footer strip */}
        <div className="flex items-center gap-2 mt-3 px-1">
          <svg
            width="13"
            height="13"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="text-blue-500 shrink-0"
          >
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
            <circle cx="12" cy="10" r="3" />
          </svg>
          <p className="text-slate-400 text-[0.78rem]">
            Birmingham, United Kingdom
          </p>
        </div>

      </div>
    </section>
  );
};

export default Location;
