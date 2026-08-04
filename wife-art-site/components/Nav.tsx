import Link from "next/link";
import { artist } from "@/lib/artworks";

export default function Nav() {
  return (
    <header className="nav">
      <div className="wrap nav-inner">
        <Link href="/" className="nav-brand">
          {artist.name}
        </Link>
        <ul className="nav-links">
          <li><Link href="/">Gallery</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>
      </div>
    </header>
  );
}
