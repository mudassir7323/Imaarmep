const PAGES = [
  { label: "Home", href: "index.html" },
  { label: "Services", href: "services.html" },
  { label: "Contact", href: "contact.html" },
];

const SERVICES = [
  { label: "Electrical", href: "services.html#electrical" },
  { label: "Mechanical", href: "services.html#mechanical" },
  { label: "Environmental", href: "services.html#environmental" },
  { label: "Specialist", href: "services.html#specialist" },
  { label: "Surveys & Reports", href: "services.html#surveys" },
];

const LinkedInIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const PhoneIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="shrink-0 mt-0.5 text-blue-400">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.16h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.67a16 16 0 0 0 8.07 8.07l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 24 17.92" />
  </svg>
);

const EmailIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="shrink-0 mt-0.5 text-blue-400">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);

const PinIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="shrink-0 mt-0.5 text-blue-400">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const SocialLink = ({ href, label, iconSize }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    className="w-[34px] h-[34px] border border-white/[0.12] rounded-lg flex items-center justify-center text-white/40 transition-all duration-200 hover:bg-blue-500 hover:border-blue-500 hover:text-white"
  >
    <LinkedInIcon size={iconSize} />
  </a>
);

const Footer = () => {
  const LINKEDIN_URL = "YOUR_LINKEDIN_URL";

  return (
    <footer className="bg-gray-900 px-[5%] pt-[72px]">
      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr] gap-12 pb-14 border-b border-white/[0.08]">

        {/* Brand */}
        <div>
          <a href="index.html" className="block mb-5">
            <img
              src="assets/logo/logo.svg"
              alt="IMAAR MEP"
              className="h-11 w-auto"
              onError={(e) => {
                e.target.style.display = "none";
                e.target.nextSibling.style.display = "block";
              }}
            />
            <span className="hidden text-white font-bold text-xl tracking-tight">
              IMAAR <span className="text-blue-400">MEP</span>
            </span>
          </a>
          <p className="text-[0.88rem] text-white/45 leading-[1.7] mb-6 max-w-[260px]">
            Delivering innovative mechanical, electrical, and public health design solutions tailored to the modern built environment.
          </p>
          <div className="flex gap-2.5">
            <SocialLink href={LINKEDIN_URL} label="LinkedIn" iconSize={16} />
          </div>
        </div>

        {/* Pages */}
        <div>
          <h4 className="text-[0.75rem] font-bold tracking-[0.12em] uppercase text-white/40 mb-5">
            Pages
          </h4>
          <ul className="flex flex-col gap-2.5">
            {PAGES.map(({ label, href }) => (
              <li key={href}>
                <a
                  href={href}
                  className="text-[0.88rem] text-white/60 transition-colors duration-200 hover:text-blue-400"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-[0.75rem] font-bold tracking-[0.12em] uppercase text-white/40 mb-5">
            Core Services
          </h4>
          <ul className="flex flex-col gap-2.5">
            {SERVICES.map(({ label, href }) => (
              <li key={href}>
                <a
                  href={href}
                  className="text-[0.88rem] text-white/60 transition-colors duration-200 hover:text-blue-400"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-[0.75rem] font-bold tracking-[0.12em] uppercase text-white/40 mb-5">
            Contact Us
          </h4>
          <div className="flex flex-col gap-3">
            <div className="flex items-start gap-2.5 text-[0.84rem] text-white/55 leading-[1.5]">
              <PhoneIcon />
              +44 (0) 000 000 0000
            </div>
            <div className="flex items-start gap-2.5 text-[0.84rem] text-white/55 leading-[1.5]">
              <EmailIcon />
              info@imaarmep.co.uk
            </div>
            <div className="flex items-start gap-2.5 text-[0.84rem] text-white/55 leading-[1.5]">
              <PinIcon />
              Birmingham, United Kingdom
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="py-5 flex flex-wrap justify-between items-center gap-3">
        <p className="text-[0.8rem] text-white/30">
          &copy; 2025 IMAAR MEP Engineering Consultancy Ltd. All rights reserved.
        </p>
        <div className="flex gap-2.5">
          <SocialLink href={LINKEDIN_URL} label="LinkedIn" iconSize={14} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
