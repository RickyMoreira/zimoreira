import { artista } from "@/lib/artworks";

export default function Sobre() {
  return (
    <main className="wrap">
      <section className="pagina">
        <div className="retrato" />
        <h1>Sobre</h1>
        <p>{artista.bio}</p>
        <p>
          Substitua este texto por um parágrafo mais longo sobre a trajetória,
          formação e processo da artista — o que inspira as pinturas, os
          materiais preferidos, exposições anteriores, etc.
        </p>
      </section>
    </main>
  );
}
