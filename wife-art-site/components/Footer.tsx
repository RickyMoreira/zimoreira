import { artista } from "@/lib/artworks";

export default function Footer() {
  return (
    <footer className="footer wrap">
      <span>© {new Date().getFullYear()} {artista.nome}</span>
      <span>Todas as obras reproduzidas aqui são de autoria da artista.</span>
    </footer>
  );
}
