import ServicesCard from "./ServicesCard";

const ServicesHeading = ({
  index,
  title,
  description,
  items = [],
  icon,
  imagePath,
}) => {
  const isEven = index % 2 === 0;
  const orderLabel = `Discipline ${String(index).padStart(2, "0")}`;
  const bgNum = String(index).padStart(2, "0");

  const gradientClass = isEven
    ? "bg-[linear-gradient(135deg,#0d1a2e_0%,#0f2552_100%)]"
    : "bg-[linear-gradient(135deg,#0f2552_0%,#1a3a7a_100%)]";

  return (
    <div className="svc-block relative border-b border-black/[0.06]">
      
      {/* VISUAL BAND */}
      <div
        className={`relative flex items-center py-16 md:py-[72px] px-[5%] overflow-hidden min-h-[300px] ${gradientClass}`}
      >
        {/* Background Image */}
        {imagePath && (
          <div
            className="svc-photo absolute inset-0 z-[1] opacity-[0.22]"
            style={{ backgroundImage: `url('${imagePath}')` }}
          />
        )}

        {/* Content */}
        <div className="relative z-[3] flex flex-col md:flex-row items-start md:items-center gap-7 md:gap-12 w-full max-w-[860px]">
          
          {/* Icon */}
          <div className="w-[72px] h-[72px] md:w-[100px] md:h-[100px] rounded-[18px] md:rounded-[24px] flex items-center justify-center text-white shrink-0 border bg-white/10 backdrop-blur-md border-white/20">
            {icon}
          </div>

          {/* Text */}
          <div>
            <p className="text-[0.7rem] font-bold tracking-[0.16em] uppercase text-blue-300 mb-3">
              {orderLabel}
            </p>

            <h2 className="text-white text-3xl md:text-5xl font-bold mb-4">
              {title}
            </h2>

            <p className="text-white/70 text-sm leading-relaxed max-w-[560px]">
              {description}
            </p>
          </div>
        </div>

        {/* Big number */}
        <span className="absolute right-[5%] bottom-[-20px] text-[10rem] text-white/5 hidden md:block">
          {bgNum}
        </span>
      </div>

      {/* ITEMS */}
      {items.length > 0 && (
        <ServicesCard items={items} isEven={isEven} />
      )}
    </div>
  );
};

export default ServicesHeading;