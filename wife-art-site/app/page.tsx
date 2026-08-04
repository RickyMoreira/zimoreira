import WorkCard from "@/components/WorkCard";
import { artist, artworks } from "@/lib/artworks";

export default function Home() {
  return (
    <main>
      <section className="hero wrap">
        <div className="hero-eyebrow">Paintings</div>
        <h1>{artist.name}</h1>
        <p>{artist.bio}</p>
      </section>

      <section className="galeria">
        {artworks.map((artwork) => (
          <WorkCard key={artwork.slug} artwork={artwork} />
        ))}
      </section>
    </main>
  );
}
