const CheckIcon = () => (
  <svg
    width="11"
    height="11"
    viewBox="0 0 12 12"
    fill="none"
    stroke="white"
    strokeWidth="2.2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="2 6 5 9 10 3" />
  </svg>
);

function ServicesCard({ items = [], isEven }) {
  return (
    <div className={`px-[5%] py-[60px] ${isEven ? "bg-slate-50" : "bg-white"}`}>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 max-w-[1200px]">
        
        {items.map((item, i) => (
          <div
            key={i}
            className="group flex items-start gap-3.5 px-5 py-4 bg-white rounded-[12px] border border-slate-100 text-sm text-slate-600 leading-[1.55]
            transition-all duration-300 ease-out
            hover:scale-[1.06] hover:-translate-y-1
            hover:shadow-[0_20px_40px_rgba(26,86,219,0.25)]
            hover:border-blue-200 hover:bg-blue-50 cursor-pointer"
          >
            
            {/* Icon */}
            <div
              className="w-[22px] h-[22px] rounded-[6px] flex items-center justify-center shrink-0 mt-[1px]
              bg-gradient-to-br from-blue-700 to-blue-400
              transition-all duration-300
              group-hover:scale-110 group-hover:rotate-3 group-hover:shadow-md"
            >
              <CheckIcon />
            </div>

            {/* Text */}
            <span className="transition-all duration-300 group-hover:text-blue-800 group-hover:font-medium">
              {item}
            </span>

          </div>
        ))}

      </div>
    </div>
  );
}

export default ServicesCard;