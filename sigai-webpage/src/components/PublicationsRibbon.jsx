const PublicationsRibbon = ({ position = "top" }) => {
  const rotation = position === "top" ? "rotate-[-3deg]" : "rotate-[-1deg]";

  return (
    <div
      className={`
        absolute
        ${position === "top" ? "top-4 sm:top-6" : "bottom-4 sm:bottom-6"}
        left-1/2
        -translate-x-1/2
        ${rotation}
        bg-[#00E0FF]
        w-[150%] sm:w-[130%] lg:w-[120%]
        py-1 sm:py-2 lg:py-3
        overflow-x-auto
        pointer-events-none
      `}
    >
      <div
        className="flex items-center justify-center gap-4 sm:gap-6 lg:gap-10 whitespace-nowrap"
        style={{ fontFamily: "Poppins, sans-serif" }}
      >
        {Array.from({ length: 5 }).map((_, i) => (
          <span
            key={i}
            className="flex items-center gap-2 sm:gap-4 lg:gap-5 text-black font-normal text-xl sm:text-3xl lg:text-4xl"
          >
            PUBLICATIONS
            <span className="text-[#07165F] text-xl sm:text-3xl lg:text-4xl">
              ✶
            </span>
          </span>
        ))}
      </div>
    </div>
  );
};

export default PublicationsRibbon;
