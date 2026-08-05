"use client";

import { useEffect, useCallback } from "react";
import type { ShowroomItem } from "@/lib/showroom";

export default function ShowroomLightbox({
  items,
  index,
  onClose,
  onNavigate,
}: {
  items: ShowroomItem[];
  index: number;
  onClose: () => void;
  onNavigate: (newIndex: number) => void;
}) {
  const item = items[index];

  const goPrev = useCallback(() => {
    onNavigate((index - 1 + items.length) % items.length);
  }, [index, items.length, onNavigate]);

  const goNext = useCallback(() => {
    onNavigate((index + 1) % items.length);
  }, [index, items.length, onNavigate]);

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

  if (!item) return null;

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
        aria-label="Previous"
      >
        ‹
      </button>

      <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
        <div className="lightbox-frame">
          <div className="lightbox-image-wrap">
            {item.type === "video" ? (
              <video
                src={item.file}
                controls
                autoPlay
                loop
                muted
                playsInline
                className="lightbox-image lightbox-video"
              />
            ) : (
              <img src={item.file} alt={item.caption ?? item.slug} className="lightbox-image" />
            )}
          </div>
        </div>
        {item.caption && (
          <div className="lightbox-caption">
            <div className="placa-titulo">{item.caption}</div>
          </div>
        )}
      </div>

      <button
        className="lightbox-nav lightbox-next"
        onClick={(e) => {
          e.stopPropagation();
          goNext();
        }}
        aria-label="Next"
      >
        ›
      </button>
    </div>
  );
}
