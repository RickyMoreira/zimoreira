import { artist } from "@/lib/artworks";

const resume = [
  { year: "2016", place: "Midland, MI, USA", note: "Merit Award — Midland Artists Guild 2016 Annual Juried Art Exhibit" },
  { year: "2015", place: "Fort Lauderdale, FL, USA", note: "ArtBrazil 2015" },
  { year: "2015", place: "Midland, MI, USA", note: "Midland Artists Guild — 31st Annual Juried Art Exhibit" },
  { year: "2015", place: "Midland, MI, USA", note: "Midland Senior Citizen Exhibit" },
  { year: "2014", place: "Midland, MI, USA", note: "Merit and People's Choice Award — Midland Artists Guild 2014 Annual Juried Art Exhibit" },
  { year: "2013", place: "Michigan, USA", note: "MidMichigan Healing Arts Gallery Exhibit" },
  { year: "2013", place: "Midland, MI, USA", note: "Midland Artists Guild — Award of Excellence Winner" },
  { year: "2013", place: "Michigan, USA", note: "Northwood Gallery advertisement featured one of Zi's paintings in a national American Arts magazine" },
  { year: "2012", place: "Midland, MI, USA", note: "International Culture Exhibit — Grace A. Dow Memorial Library" },
  { year: "2012", place: "Midland, MI, USA", note: "First private exhibition, \"Angels in My Life,\" at Creative 360" },
  { year: "2003", place: "Jundiaí, São Paulo, Brazil", note: "Public's Choice Winner" },
];

export default function About() {
  return (
    <main className="wrap">
      <section className="pagina">
        <h1>About {artist.name}</h1>

        <p>
          I was born in Brazil and grew up with a passion for drawing, often
          sketching on anything I could find, including the margins of my
          school books. I never dreamed I would one day become an artist.
        </p>
        <p>
          Several years after taking my first painting class, I opened my own
          studio in Brazil and began teaching my own style. Most of my pieces
          are in acrylic, but I also work in oil and mixed media. In 2003, I
          was awarded the People's Choice Award at a public exhibition in
          Brazil.
        </p>
        <p>
          In 2010, I moved to the U.S. with my husband and two sons. My first
          U.S. exhibition followed a year later, titled "Os Anjos Em Minha
          Vida" (The Angels in My Life).
        </p>
        <p>
          My creative path has since moved toward abstract fine art and mixed
          media. I draw inspiration from my connection with the ethereal
          realm — while I live in the physical world, my art is shaped by the
          experiences and sensations I encounter while painting.
        </p>

        <h1 style={{ marginTop: "56px" }}>Statement</h1>
        <p>
          My vision as an artist is to create work that invites the viewer to
          take part in it — to be drawn in as ideas are expressed through
          different mediums, texture, color, line, and movement.
        </p>
        <p>
          My art is for anyone who believes in the transformation of the
          human being, the evolution of the human mind. I want to reflect
          depth and intensity through color: feelings expressed without fear,
          without needing to be explained or understood — just freedom of
          expression.
        </p>
        <p>
          The feelings in my soul come through in whatever form the color
          takes. Abstract art opens a world of thoughts and questions, for
          the artist and for whoever is looking at it.
        </p>

        <h1 style={{ marginTop: "56px" }}>Resume</h1>
        <ul className="contato-lista">
          {resume.map((item, i) => (
            <li key={i}>
              <span>{item.year} — {item.place}</span>
              <span style={{ textAlign: "right", maxWidth: "60%" }}>{item.note}</span>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
