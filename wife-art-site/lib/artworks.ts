// ============================================================
// Every painting on the site comes from here. To add a piece:
// 1. Put the photo in /public/artworks/ (e.g. bare-layers.jpg)
// 2. Copy a block below and fill in the fields
// 3. Save — the site updates automatically
// ============================================================

export type Artwork = {
  slug: string;          // used for the image filename, no spaces/accents
  title: string;
  year?: string;         // leave blank ("") until you have it
  medium: string;
  dimensions: string;
  image: string;         // path in /public
  featured?: boolean;    // true = shows larger on the home page
  available?: boolean;   // true = "Available", false = "Sold"
};

export const artist = {
  name: "Zi Moreira",
  bio: "Write 2–4 sentences here about who the artist is, where she's from, and what drives her work. This text appears on the About page.",
  email: "contact@example.com",
  instagram: "https://instagram.com/",
};

const MEDIUM = "Acrylic on canvas";

export const artworks: Artwork[] = [
  { slug: "bare-layers", title: "Bare Layers", dimensions: "36 × 36 in", medium: MEDIUM, image: "/artworks/bare-layers.jpg", featured: true, available: true },
  { slug: "blue-fog", title: "Blue Fog", dimensions: "12 × 12 in", medium: MEDIUM, image: "/artworks/blue-fog.jpg", available: true },
  { slug: "bubble-of-light", title: "Bubble of Light", dimensions: "30 × 30 in", medium: MEDIUM, image: "/artworks/bubble-of-light.jpg", available: true },
  { slug: "blue-fog-2", title: "Blue Fog 2", dimensions: "12 × 12 in", medium: MEDIUM, image: "/artworks/blue-fog-2.jpg", available: true },
  { slug: "chicago", title: "Chicago", dimensions: "24 × 30 in", medium: MEDIUM, image: "/artworks/chicago.jpg", available: true },
  { slug: "defining-lines", title: "Defining Lines", dimensions: "24 × 30 in", medium: MEDIUM, image: "/artworks/defining-lines.jpg", available: true },
  { slug: "entrance-door", title: "Entrance Door", dimensions: "24 × 36 in", medium: MEDIUM, image: "/artworks/entrance-door.jpg", available: true },
  { slug: "fewest-words", title: "Fewest Words", dimensions: "24 × 24 in", medium: MEDIUM, image: "/artworks/fewest-words.jpg", available: true },
  { slug: "fondest-memories", title: "Fondest Memories", dimensions: "24 × 24 in", medium: MEDIUM, image: "/artworks/fondest-memories.jpg", available: true },
  { slug: "foreword", title: "Foreword", dimensions: "24 × 30 in", medium: MEDIUM, image: "/artworks/foreword.jpg", available: true },
  { slug: "inlet-blue", title: "Inlet Blue", dimensions: "24 × 36 in", medium: MEDIUM, image: "/artworks/inlet-blue.jpg", available: true },
  { slug: "irreplaceable", title: "Irreplaceable", dimensions: "36 × 36 in", medium: MEDIUM, image: "/artworks/irreplaceable.jpg", available: true },
  { slug: "layers-of-ash", title: "Layers of Ash", dimensions: "30 × 30 in", medium: MEDIUM, image: "/artworks/layers-of-ash.jpg", available: true },
  { slug: "layers-of-silence", title: "Layers of Silence", dimensions: "24 × 24 in", medium: MEDIUM, image: "/artworks/layers-of-silence.jpg", available: true },
  { slug: "lost-my-head", title: "Lost My Head", dimensions: "24 × 24 in", medium: MEDIUM, image: "/artworks/lost-my-head.jpg", available: true },
  { slug: "old-soul", title: "Old Soul", dimensions: "24 × 30 in", medium: MEDIUM, image: "/artworks/old-soul.jpg", available: true },
  { slug: "out-of-place", title: "Out of Place", dimensions: "36 × 36 in", medium: MEDIUM, image: "/artworks/out-of-place.jpg", available: true },
  { slug: "overrated-anyway", title: "Overrated Anyway", dimensions: "24 × 24 in", medium: MEDIUM, image: "/artworks/overrated-anyway.jpg", available: true },
  { slug: "sand-storm", title: "Sand Storm", dimensions: "24 × 36 in", medium: MEDIUM, image: "/artworks/sand-storm.jpg", available: true },
  { slug: "shades-of-blue-2", title: "Shades of Blue 2", dimensions: "24 × 24 in", medium: MEDIUM, image: "/artworks/shades-of-blue-2.jpg", available: true },
  { slug: "shades-of-blue-3", title: "Shades of Blue 3", dimensions: "24 × 30 in", medium: MEDIUM, image: "/artworks/shades-of-blue-3.jpg", available: true },
  { slug: "shades-of-blue-4", title: "Shades of Blue 4", dimensions: "24 × 24 in", medium: MEDIUM, image: "/artworks/shades-of-blue-4.jpg", available: true },
  { slug: "shapes-and-colors", title: "Shapes and Colors", dimensions: "24 × 36 in", medium: MEDIUM, image: "/artworks/shapes-and-colors.jpg", available: true },
  { slug: "silent-mind", title: "Silent Mind", dimensions: "24 × 24 in", medium: MEDIUM, image: "/artworks/silent-mind.jpg", available: true },
  { slug: "sliver-of-a-moment", title: "Sliver of a Moment", dimensions: "24 × 24 in", medium: MEDIUM, image: "/artworks/sliver-of-a-moment.jpg", available: true },
  { slug: "so-far-so-peaceful", title: "So Far, so Peaceful", dimensions: "24 × 24 in", medium: MEDIUM, image: "/artworks/so-far-so-peaceful.jpg", available: true },
  { slug: "somewhere", title: "Somewhere", dimensions: "24 × 36 in", medium: MEDIUM, image: "/artworks/somewhere.jpg", available: true },
  { slug: "source-of-healing", title: "Source of Healing", dimensions: "24 × 30 in", medium: MEDIUM, image: "/artworks/source-of-healing.jpg", available: true },
  { slug: "take-a-moment-of-breath", title: "Take a Moment of Breath", dimensions: "24 × 36 in", medium: MEDIUM, image: "/artworks/take-a-moment-of-breath.jpg", available: true },
  { slug: "the-sun", title: "The Sun", dimensions: "36 × 36 in", medium: MEDIUM, image: "/artworks/the-sun.jpg", featured: true, available: true },
  { slug: "the-tower", title: "The Tower", dimensions: "24 × 36 in", medium: MEDIUM, image: "/artworks/the-tower.jpg", available: true },
  { slug: "the-world-outside-my-window", title: "The World Outside My Window", dimensions: "24 × 24 in", medium: MEDIUM, image: "/artworks/the-world-outside-my-window.jpg", available: true },
  { slug: "too-deep-to-turn-back", title: "To Deep to Turn Back", dimensions: "24 × 30 in", medium: MEDIUM, image: "/artworks/too-deep-to-turn-back.jpg", available: true },
  { slug: "under-a-strong-storm", title: "Under a Strong Storm", dimensions: "30 × 30 in", medium: MEDIUM, image: "/artworks/under-a-strong-storm.jpg", available: true },
  { slug: "underrated-anyway", title: "Underrated Anyway", dimensions: "24 × 24 in", medium: MEDIUM, image: "/artworks/underrated-anyway.jpg", available: true },
  { slug: "unexpected", title: "Unexpected", dimensions: "24 × 24 in", medium: MEDIUM, image: "/artworks/unexpected.jpg", available: true },
  { slug: "youre-just-on-time", title: "You're Just on Time", dimensions: "24 × 30 in", medium: MEDIUM, image: "/artworks/youre-just-on-time.jpg", available: true },
];
