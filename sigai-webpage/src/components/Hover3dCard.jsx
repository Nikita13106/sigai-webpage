import "../App.css";

export default function Hover3DCard({
  title,
  description,
  mainImage,
  extraImages = [],
}) {
  if (!mainImage) return null;

  return (
    <div className="h3d-container">
      {/* Text */}
      <div className="h3d-text">
        <h1>{title}</h1>
        <p>{description}</p>
      </div>

      {/* Image stack */}
      <div className="h3d-image-wrapper">
        <img src={mainImage} className="h3d-image main" alt="Main" />

        {extraImages[0] && (
          <img src={extraImages[0]} className="h3d-image img1" alt="Extra 1" />
        )}

        {extraImages[1] && (
          <img src={extraImages[1]} className="h3d-image img2" alt="Extra 2" />
        )}
      </div>
    </div>
  );
}
