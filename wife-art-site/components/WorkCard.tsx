import Image from "next/image";
import type { Artwork } from "@/lib/artworks";
import { getDimensions } from "@/lib/dimensions";

export default function WorkCard({
  artwork,
  onClick,
}: {
  artwork: Artwork;
  onClick?: () => void;
}) {
  const { wide, tall } = getDimensions(artwork.dimensions);
  const ratio = `${wide} / ${tall}`;
  // Card width scales with the painting's real width in inches, so a 12" piece
  // renders visibly smaller than a 36" piece. Shrinks smoothly on small screens.
  const cardWidth = `clamp(110px, ${(wide * 1.1).toFixed(1)}vw, ${wide * 9}px)`;

  return (
    <article className="obra" style={{ width: cardWidth }}>
      <button
        type="button"
        className="obra-frame obra-frame-button"
        style={{ aspectRatio: ratio }}
        onClick={onClick}
        aria-label={`View ${artwork.title} full screen`}
      >
        <div className="obra-frame-mat">
          {/* Replace with the real photo in /public/artworks — until then, we show this note */}
          {artwork.image ? (
            <Image
              src={artwork.image}
              alt={artwork.title}
              width={1200}
              height={1500}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          ) : (
            <div className="obra-frame vazio">Photo pending — {artwork.slug}</div>
          )}
        </div>
      </button>
      <div className="placa">
        <div className="placa-titulo">
          {artwork.title}{artwork.year ? `, ${artwork.year}` : ""}
        </div>
        <div className="placa-meta">
          {artwork.dimensions}
        </div>
      </div>
    </article>
  );
}
