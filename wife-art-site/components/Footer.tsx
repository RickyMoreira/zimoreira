import { artist } from "@/lib/artworks";

export default function Footer() {
  return (
    <footer className="footer wrap">
      <span>© {new Date().getFullYear()} {artist.name}</span>
      <span>All artwork shown here is original work by the artist.</span>
    </footer>
  );
}
