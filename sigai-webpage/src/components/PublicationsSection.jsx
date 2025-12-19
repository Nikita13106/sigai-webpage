import Hover3DCard from "./Hover3dCard";
import mainImg from "../assets/tejas-main.png";
import img1 from "../assets/tejas1.png";
import img2 from "../assets/tejas2.png";

import PublicationsRibbon from "./PublicationsRibbon";
import PublicationsContent from "./PublicationsContent";

const PublicationsSection = () => {
  return (
    <section
      className="
        relative
        min-h-screen
        bg-black
        overflow-hidden
        flex
        items-center
      "
    >
      <PublicationsRibbon position="top" />
      <PublicationsRibbon position="bottom" />

      <div
        className="
          relative z-10
          mx-auto
          w-full
          max-w-7xl
          px-4 sm:px-6 lg:px-8
          py-24
          flex
          flex-col
          md:flex-row
          items-center
          justify-center md:justify-between
          gap-16
        "
      >
        <PublicationsContent />

        <div className="w-full md:w-auto flex justify-center">
          <Hover3DCard
            title="TEJAS"
            description="Department of AIML • Volume 42"
            mainImage={mainImg}
            extraImages={[img1, img2]}
          />
        </div>
      </div>
    </section>
  );
};

export default PublicationsSection;
