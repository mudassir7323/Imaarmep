import { Link } from "react-router-dom";
import excelence from "../../assets/home/excellence.jpg";
import theme from "../../theme/Theme.js";

function Preview() {
  return (
    <section className="w-full bg-white py-20 md:py-32 px-6 md:px-12 lg:px-32 flex flex-col lg:flex-row items-center justify-center max-w-7xl mx-auto gap-12 lg:gap-20 overflow-hidden">
      {/* Left Image Section */}
      <div className="relative w-full lg:flex-1 max-w-xl min-h-[400px] md:min-h-[550px] rounded-3xl overflow-hidden shadow-2xl animate-fade-in-down mx-auto lg:mx-0">
        <img
          src={excelence}
          alt="IMAAR MEP Engineering team at work"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Badge */}
        <div 
          className="absolute top-6 left-6 md:top-8 md:left-8 text-white rounded-lg px-5 md:px-6 py-4 md:py-5 flex flex-col items-center shadow-lg select-none animate-fade-in-up delay-200"
          style={{ backgroundColor: theme.colors.primary }}
        >
          <span className="font-extrabold text-xl md:text-2xl leading-none">MEP</span>
          <span className="text-[10px] md:text-xs uppercase tracking-widest mt-1">
            Excellence
          </span>
        </div>

        {/* Accent Element (replacing broken image link) */}
        <div 
          className="absolute bottom-0 left-0 w-32 h-32 md:w-40 md:h-40 rounded-tr-3xl shadow-lg border-t-4 border-r-4 animate-fade-in-up delay-300 opacity-95 flex items-center justify-center"
          style={{ backgroundColor: theme.colors.accent, borderColor: theme.colors.white }}
        >
          <svg
            className="w-16 h-16 text-white opacity-40"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
             <circle cx="12" cy="12" r="10" />
             <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
             <path d="M2 12h20" />
          </svg>
        </div>
      </div>

      {/* Right Text Section */}
      <div className="w-full lg:flex-1 max-w-3xl space-y-8 lg:space-y-10 animate-fade-in-up delay-100">
        <div 
          className="text-sm md:text-base uppercase font-bold tracking-widest"
          style={{ color: theme.colors.primary }}
        >
          About IMAAR MEP
        </div>
        
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
          Built on Technical <span style={{ color: theme.colors.accent }}>Excellence</span>
        </h2>
        
        <p className="text-gray-700 text-lg md:text-xl leading-relaxed max-w-2xl">
          Founded in Birmingham, UK, IMAAR MEP Engineering Consultancy delivers
          innovative and efficient MEP design solutions tailored to modern built
          environments. We combine technical excellence with a practical,
          client-focused approach.
        </p>

        {/* Points List with Cards */}
        <div className="flex flex-col gap-5 md:gap-6 w-full">
          <PointCard
            icon={
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
            }
            title="Smart, Sustainable Engineering"
            description="Forward-thinking designs that minimise energy use and meet modern environmental targets."
            delay="delay-200"
          />
          <PointCard
            icon={
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
            }
            title="Client-Focused from Day One"
            description="Every project is shaped by your requirements — no two solutions are the same."
            delay="delay-300"
          />
          <PointCard
            icon={
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                <polyline points="22 4 12 14.01 9 11.01" />
              </svg>
            }
            title="Academic & Industry Excellence"
            description="Led by UCL and Southampton alumni with deep sector expertise."
            delay="delay-400"
          />
        </div>

        {/* Button */}
        <Link
          to="/services"
          className="inline-flex items-center text-white font-semibold rounded-md px-8 py-4 mt-4 shadow-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl animate-fade-in-up delay-500"
          style={{ backgroundColor: theme.colors.primary }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = theme.colors.primaryLight)}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = theme.colors.primary)}
        >
          Explore Our Services
          <svg
            className="ml-3"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </section>
  );
}

function PointCard({ icon, title, description, delay }) {
  return (
    <div className={`flex flex-col sm:flex-row gap-4 md:gap-5 p-5 md:p-6 bg-white rounded-2xl shadow-sm border border-gray-100 cursor-pointer hover:shadow-xl hover:-translate-y-1 transition-all duration-300 w-full animate-fade-in-up ${delay}`}>
      <div 
        className="flex-shrink-0 p-3 md:p-4 rounded-lg w-fit h-fit"
        style={{ backgroundColor: `${theme.colors.primaryLight}20`, color: theme.colors.primary }}
      >
        {icon}
      </div>
      <div>
        <strong className="block text-gray-900 text-lg md:text-xl mb-1 md:mb-2">{title}</strong>
        <p className="text-gray-600 text-sm md:text-base">{description}</p>
      </div>
    </div>
  );
}

export default Preview;
