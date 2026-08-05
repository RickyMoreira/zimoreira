import Image from "next/image";
import type { Artwork } from "@/lib/artworks";

function getDimensions(dimensions: string): { wide: number; tall: number } {
  const match = dimensions.match(/(\d+(?:\.\d+)?)\s*[×x]\s*(\d+(?:\.\d+)?)/);
  if (!match) return { wide: 24, tall: 30 };
  const a = parseFloat(match[1]);
  const b = parseFloat(match[2]);
  return { wide: Math.max(a, b), tall: Math.min(a, b) };
}

export default function WorkCard({ artwork }: { artwork: Artwork }) {
  const { wide, tall } = getDimensions(artwork.dimensions);
  const ratio = `${wide} / ${tall}`;
  // Card width scales with the painting's real width in inches, so a 12" piece
  // renders visibly smaller than a 36" piece. Shrinks smoothly on small screens.
  const cardWidth = `clamp(140px, ${(wide * 1.8).toFixed(1)}vw, ${wide * 13}px)`;

  return (
    <article className="obra" style={{ width: cardWidth }}>
      <div className="obra-frame" style={{ aspectRatio: ratio }}>
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