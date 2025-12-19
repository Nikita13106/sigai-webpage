import PublicationsBadge from "./PublicationsBadge";

const PublicationsContent = () => {
  return (
    <div
      className="
        w-full
        max-w-xl
        flex flex-col
        items-center md:items-start
        text-center md:text-left
        px-2 sm:px-0
      "
    >
      <h1
        className="text-[#00E0FF] leading-[130%]"
        style={{
          fontFamily: "'Abril Fatface', serif",
          fontWeight: 400,
          fontSize: "clamp(2.75rem, 8vw, 100px)",
        }}
      >
        EXPLORE
      </h1>

      <div
        className="
          mt-1
          flex flex-wrap
          items-center
          justify-center md:justify-start
          gap-3
        "
      >
        <span
          className="
    text-[#00E0FF]
    max-w-[253px]
    min-h-[52px]
    flex items-center
    whitespace-nowrap
  "
          style={{
            fontFamily: "'Abril Fatface', serif",
            fontWeight: 400,
            fontSize: "clamp(22px, 5vw, 40px)",
            lineHeight: "130%",
            letterSpacing: "0%",
          }}
        >
          our newest
        </span>

        <PublicationsBadge />
      </div>

      <p
        className="
          mt-6
          text-sm sm:text-base
          leading-relaxed
          text-gray-300
          max-w-md
          mx-auto md:mx-0
        "
      >
        Explore our latest collection of publications that showcase our
        research, insights, and contributions across various topics and fields.
      </p>
    </div>
  );
};

export default PublicationsContent;
