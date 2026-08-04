import WorkCard from "@/components/WorkCard";
import { artista, obras } from "@/lib/artworks";

export default function Home() {
  return (
    <main>
      <section className="hero wrap">
        <div className="hero-eyebrow">Pinturas</div>
        <h1>{artista.nome}</h1>
        <p>{artista.bio}</p>
      </section>

      <section className="galeria">
        {obras.map((obra) => (
          <WorkCard key={obra.slug} obra={obra} />
        ))}
      </section>
    </main>
  );
}
