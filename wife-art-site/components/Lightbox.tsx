"use client";

import { useEffect, useCallback } from "react";
import Image from "next/image";
import type { Artwork } from "@/lib/artworks";
import { getDimensions } from "@/lib/dimensions";

export default function Lightbox({
  artworks,
  index,
  onClose,
  onNavigate,
}: {
  artworks: Artwork[];
  index: number;
  onClose: () => void;
  onNavigate: (newIndex: number) => void;
}) {
  const artwork = artworks[index];
  const { wide, tall } = getDimensions(artwork?.dimensions ?? "24x30");

  const goPrev = useCallback(() => {
    onNavigate((index - 1 + artworks.length) % artworks.length);
  }, [index, artworks.length, onNavigate]);

  const goNext = useCallback(() => {
    onNavigate((index + 1) % artworks.length);
  }, [index, artworks.length, onNavigate]);

  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    }
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [onClose, goPrev, goNext]);

  if (!artwork) return null;

  return (
    <div className="lightbox-overlay" onClick={onClose}>
      <button className="lightbox-close" onClick={onClose} aria-label="Close">
        ✕
      </button>

      <button
        className="lightbox-nav lightbox-prev"
        onClick={(e) => {
          e.stopPropagation();
          goPrev();
        }}
        aria-label="Previous painting"
      >
        ‹
      </button>

      <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
        <div className="lightbox-frame">
          <div className="lightbox-image-wrap">
            <Image
              src={artwork.image}
              alt={artwork.title}
              width={wide * 100}
              height={tall * 100}
              className="lightbox-image"
              priority
            />
          </div>
        </div>
        <div className="lightbox-caption">
          <div className="placa-titulo">
            {artwork.title}{artwork.year ? `, ${artwork.year}` : ""}
          </div>
          <div className="placa-meta">{artwork.dimensions}</div>
        </div>
      </div>

      <button
        className="lightbox-nav lightbox-next"
        onClick={(e) => {
          e.stopPropagation();
          goNext();
        }}
        aria-label="Next painting"
      >
        ›
      </button>
    </div>
  );
}
