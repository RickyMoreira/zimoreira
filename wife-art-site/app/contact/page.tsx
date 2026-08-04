import { artist } from "@/lib/artworks";

export default function Contact() {
  return (
    <main className="wrap">
      <section className="pagina">
        <h1>Contact</h1>
        <p>
          For commissions, availability of a piece, or any other question,
          reach out through the channels below.
        </p>
        <ul className="contato-lista">
          <li>
            <span>Email</span>
            <a href={`mailto:${artist.email}`}>{artist.email}</a>
          </li>
          <li>
            <span>Instagram</span>
            <a href={artist.instagram} target="_blank" rel="noopener noreferrer">
              @zimoreira_art
            </a>
          </li>
          <li>
            <span>Facebook</span>
            <a href={artist.facebook} target="_blank" rel="noopener noreferrer">
              Zi Moreira
            </a>
          </li>
          <li>
            <span>YouTube</span>
            <a href={artist.youtube} target="_blank" rel="noopener noreferrer">
              Channel
            </a>
          </li>
        </ul>
      </section>
    </main>
  );
}
