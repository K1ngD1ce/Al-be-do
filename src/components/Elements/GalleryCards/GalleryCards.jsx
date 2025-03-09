export default function GalleryCards({ images }) {
  if (!images || images.length === 0) return null;

  const bigImage = images.find((img) => img.type === "big");
  const smallImages = images.filter((img) => img.type === "small");

  return (
    <div className="gallerycards__wrapper">
      {bigImage && (
        <div className="bigCard__img">
          <img src={bigImage.img} alt={bigImage.name} />
        </div>
      )}

      <div className="smallCards__group">
        {smallImages.map((img) => (
          <div className="smallCards__img" key={img.id}>
            <img src={img.img} alt={img.name} />
          </div>
        ))}
      </div>
    </div>
  );
}
