import Fancybox from "../Fancybox/Fancybox";

export default function GalleryCards({ images }) {
  if (!images || images.length === 0) return null;

  const bigImage = images.find((img) => img.type === "big");
  const smallImages = images.filter((img) => img.type === "small");

  return (
    <Fancybox
      options={{
        Carousel: {
          infinite: false,
        },
      }}
    >
      <div className="gallerycards__wrapper">
        {bigImage && (
          <a
            data-fancybox="gallery"
            href={bigImage.img}
            className="bigCard__img"
          >
            <img src={bigImage.img} alt={bigImage.name} />
          </a>
        )}

        <div className="smallCards__group">
          {smallImages.map((img) => (
            <a
              data-fancybox="gallery"
              href={img.img}
              className="smallCards__img"
              key={img.id}
            >
              <img src={img.img} alt={img.name} />
            </a>
          ))}
        </div>
      </div>
    </Fancybox>
  );
}
