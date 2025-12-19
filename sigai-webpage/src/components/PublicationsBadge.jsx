const PublicationsBadge = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="
        rounded-full
        bg-[#BBFBFF]
        px-8 py-2
        text-md
        font-black
        text-[#07165F]
        transition-transform duration-300 ease-in-out
        hover:scale-105
        active:scale-95
        border-none
        focus:outline-none
      "
      style={{ fontFamily: "'Abril Fatface', serif" }}
    >
      publications
    </button>
  );
};

export default PublicationsBadge;
