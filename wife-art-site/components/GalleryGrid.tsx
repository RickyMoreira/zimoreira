"use client";

import { useState } from "react";
import WorkCard from "@/components/WorkCard";
import Lightbox from "@/components/Lightbox";
import type { Artwork } from "@/lib/artworks";

export default function GalleryGrid({ artworks }: { artworks: Artwork[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <>
      <section className="galeria">
        {artworks.map((artwork, i) => (
          <WorkCard key={artwork.slug} artwork={artwork} onClick={() => setOpenIndex(i)} />
        ))}
      </section>

      {openIndex !== null && (
        <Lightbox
          artworks={artworks}
          index={openIndex}
          onClose={() => setOpenIndex(null)}
          onNavigate={(newIndex) => setOpenIndex(newIndex)}
        />
      )}
    </>
  );
}
