import Image from "next/image";
import type { Artwork } from "@/lib/artworks";

export default function WorkCard({ artwork }: { artwork: Artwork }) {
  return (
    <article className="obra">
      <div className="obra-frame">
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
