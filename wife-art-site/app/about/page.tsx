import { artist } from "@/lib/artworks";

export default function About() {
  return (
    <main className="wrap">
      <section className="pagina">
        <div className="retrato" />
        <h1>About</h1>
        <p>{artist.bio}</p>
        <p>
          Replace this with a longer paragraph about the artist's background,
          training, and process — what inspires the paintings, favorite
          materials, past exhibitions, etc.
        </p>
      </section>
    </main>
  );
}
