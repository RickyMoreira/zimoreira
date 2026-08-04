import Link from "next/link";
import { artista } from "@/lib/artworks";

export default function Nav() {
  return (
    <header className="nav">
      <div className="wrap nav-inner">
        <Link href="/" className="nav-brand">
          {artista.nome}
        </Link>
        <ul className="nav-links">
          <li><Link href="/">Galeria</Link></li>
          <li><Link href="/sobre">Sobre</Link></li>
          <li><Link href="/contato">Contato</Link></li>
        </ul>
      </div>
    </header>
  );
}
