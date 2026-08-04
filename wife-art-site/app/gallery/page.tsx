import WorkCard from "@/components/WorkCard";
import { artworks } from "@/lib/artworks";

export default function Gallery() {
  return (
    <main>
      <section className="hero wrap" style={{ paddingBottom: "24px" }}>
        <div className="hero-eyebrow">Paintings</div>
        <h1>Gallery</h1>
      </section>

      <section className="galeria">
        {artworks.map((artwork) => (
          <WorkCard key={artwork.slug} artwork={artwork} />
        ))}
      </section>
    </main>
  );
}
