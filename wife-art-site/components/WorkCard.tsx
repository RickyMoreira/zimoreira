import Image from "next/image";
import type { Artwork } from "@/lib/artworks";

function getAspectRatio(dimensions: string): string {
  const match = dimensions.match(/(\d+(?:\.\d+)?)\s*[×x]\s*(\d+(?:\.\d+)?)/);
  if (!match) return "4 / 5";
  const a = parseFloat(match[1]);
  const b = parseFloat(match[2]);
  const wide = Math.max(a, b);
  const tall = Math.min(a, b);
  return `${wide} / ${tall}`;
}
export default function WorkCard({ artwork }: { artwork: Artwork }) {
  const ratio = getAspectRatio(artwork.dimensions);

  return (
    <article className="obra">
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