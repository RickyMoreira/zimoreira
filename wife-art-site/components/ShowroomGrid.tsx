"use client";

import { useState } from "react";
import ShowroomLightbox from "@/components/ShowroomLightbox";
import type { ShowroomItem } from "@/lib/showroom";

export default function ShowroomGrid({ items }: { items: ShowroomItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <>
      <section className="showroom-grid wrap">
        {items.map((item, i) => (
          <button
            key={item.slug}
            type="button"
            className="showroom-item showroom-item-button"
            onClick={() => setOpenIndex(i)}
            aria-label={`View ${item.caption ?? item.slug} full screen`}
          >
            {item.type === "video" ? (
              <video
                src={item.file}
                autoPlay
                loop
                muted
                playsInline
                className="showroom-media"
              />
            ) : (
              <img src={item.file} alt={item.caption ?? item.slug} className="showroom-media" />
            )}
            {item.caption && <div className="showroom-caption">{item.caption}</div>}
          </button>
        ))}
      </section>

      {openIndex !== null && (
        <ShowroomLightbox
          items={items}
          index={openIndex}
          onClose={() => setOpenIndex(null)}
          onNavigate={(newIndex) => setOpenIndex(newIndex)}
        />
      )}
    </>
  );
}
