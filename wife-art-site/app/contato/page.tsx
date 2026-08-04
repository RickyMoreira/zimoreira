import { artista } from "@/lib/artworks";

export default function Contato() {
  return (
    <main className="wrap">
      <section className="pagina">
        <h1>Contato</h1>
        <p>
          Para encomendas, disponibilidade de uma obra ou qualquer outra
          pergunta, entre em contato pelos canais abaixo.
        </p>
        <ul className="contato-lista">
          <li>
            <span>E-mail</span>
            <a href={`mailto:${artista.email}`}>{artista.email}</a>
          </li>
          <li>
            <span>Instagram</span>
            <a href={artista.instagram} target="_blank" rel="noopener noreferrer">
              @perfil
            </a>
          </li>
        </ul>
      </section>
    </main>
  );
}
