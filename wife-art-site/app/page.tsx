import Link from "next/link";
import { artist } from "@/lib/artworks";

export default function Home() {
  return (
    <main>
      <section className="landing wrap">
        <div className="landing-portrait">
          {/* Plain <img>, not next/image — avoids the Vercel image optimizer
              choking on a large source photo. Fine for a single portrait. */}
          <img
            src={artist.photo}
            alt={artist.name}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>
        <div className="hero-eyebrow">Abstract Art</div>
        <h1>{artist.name}</h1>
        <p className="landing-tagline">Creator of abstract art</p>

        <p className="landing-statement">
          My vision is to create works that call for the participation of
          the viewer to become involved with the art. My goal is to draw
          the audience in as ideas are expressed through different mediums,
          exploring texture, color, line, and movement. My art is for
          anyone who believes in the transformation of the human being, the
          evolution of the human mind.
        </p>

        <div className="landing-links">
          <Link href="/gallery" className="landing-link landing-link-primary">
            View Gallery
          </Link>
          <Link href="/about" className="landing-link">
            More About Zi
          </Link>
        </div>
      </section>

      <section className="touch wrap">
        <h2 className="touch-title">Get in Touch</h2>
        <a href={`mailto:${artist.email}`} className="touch-email">
          {artist.email}
        </a>
        <ul className="social-list">
          <li><a href={artist.facebook} target="_blank" rel="noopener noreferrer">Facebook</a></li>
          <li><a href={artist.youtube} target="_blank" rel="noopener noreferrer">YouTube</a></li>
          <li><a href={artist.instagram} target="_blank" rel="noopener noreferrer">Instagram</a></li>
        </ul>
      </section>
    </main>
  );
}
