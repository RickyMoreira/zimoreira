// ============================================================
// Every painting on the site comes from here. To add a piece:
// 1. Put the photo in /public/artworks/ (e.g. bare-layers.jpeg)
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
  bio: "Zi Moreira (Zizelda Moreira) is an abstract artist originally from Brazil, now based in the U.S. Her work is known for vibrant colors and dynamic compositions, created in acrylic, oil, and mixed media.",
  email: "zimoreira@ymail.com",
  photo: "/artist-portrait.jpg",
  instagram: "https://www.instagram.com/zimoreira_art/",
  facebook: "https://www.facebook.com/zi.moreira.3",
  youtube: "https://www.youtube.com/channel/UCyeN4rWnwXXqtTNorlYTzjQ",
};

const MEDIUM = "Acrylic on canvas";

export const artworks: Artwork[] = [
 
   { slug: "chicago", title: "Chicago", dimensions: "24 × 30 in", medium: MEDIUM, image: "/artworks/chicago.jpeg", available: true },
  { slug: "defining-lines", title: "Defining Lines", dimensions: "24 × 30 in", medium: MEDIUM, image: "/artworks/defining-lines.jpeg", available: true },
  { slug: "entrance-door", title: "Entrance Door", dimensions: "24 × 36 in", medium: MEDIUM, image: "/artworks/entrance-door.jpeg", available: true },
  { slug: "fewest-words", title: "Fewest Words", dimensions: "24 × 24 in", medium: MEDIUM, image: "/artworks/fewest-words.jpeg", available: true },
  { slug: "fondest-memories", title: "Fondest Memories", dimensions: "24 × 24 in", medium: MEDIUM, image: "/artworks/fondest-memories.jpeg", available: true },
  { slug: "foreword", title: "Foreword", dimensions: "24 × 30 in", medium: MEDIUM, image: "/artworks/foreword.jpeg", available: true },
  { slug: "inlet-blue", title: "Inlet Blue", dimensions: "24 × 36 in", medium: MEDIUM, image: "/artworks/inlet-blue.jpeg", available: true },
  { slug: "irreplaceable", title: "Irreplaceable", dimensions: "36 × 36 in", medium: MEDIUM, image: "/artworks/irreplaceable.jpeg", available: true },
  { slug: "layers-of-ash", title: "Layers of Ash", dimensions: "30 × 30 in", medium: MEDIUM, image: "/artworks/layers-of-ash.jpeg", available: true },
  { slug: "layers-of-silence", title: "Layers of Silence", dimensions: "24 × 24 in", medium: MEDIUM, image: "/artworks/layers-of-silence.jpeg", available: true },
  { slug: "lost-my-head", title: "Lost My Head", dimensions: "24 × 24 in", medium: MEDIUM, image: "/artworks/lost-my-head.jpeg", available: true },
  { slug: "old-soul", title: "Old Soul", dimensions: "24 × 30 in", medium: MEDIUM, image: "/artworks/old-soul.jpeg", available: true },
  { slug: "out-of-place", title: "Out of Place", dimensions: "36 × 36 in", medium: MEDIUM, image: "/artworks/out-of-place.jpeg", available: true },
  { slug: "overrated-anyway", title: "Overrated Anyway", dimensions: "24 × 24 in", medium: MEDIUM, image: "/artworks/overrated-anyway.jpeg", available: true },
  { slug: "sand-storm", title: "Sand Storm", dimensions: "24 × 36 in", medium: MEDIUM, image: "/artworks/sand-storm.jpeg", available: true },
  { slug: "shades-of-blue-2", title: "Shades of Blue 2", dimensions: "24 × 24 in", medium: MEDIUM, image: "/artworks/shades-of-blue-2.jpeg", available: true },
  { slug: "shades-of-blue-3", title: "Shades of Blue 3", dimensions: "24 × 30 in", medium: MEDIUM, image: "/artworks/shades-of-blue-3.jpeg", available: true },
  { slug: "shades-of-blue-4", title: "Shades of Blue 4", dimensions: "24 × 24 in", medium: MEDIUM, image: "/artworks/shades-of-blue-4.jpeg", available: true },
  { slug: "shapes-and-colors", title: "Shapes and Colors", dimensions: "24 × 36 in", medium: MEDIUM, image: "/artworks/shapes-and-colors.jpeg", available: true },
  { slug: "silent-mind", title: "Silent Mind", dimensions: "24 × 24 in", medium: MEDIUM, image: "/artworks/silent-mind.jpeg", available: true },
  { slug: "sliver-of-a-moment", title: "Sliver of a Moment", dimensions: "24 × 24 in", medium: MEDIUM, image: "/artworks/sliver-of-a-moment.jpeg", available: true },
  { slug: "so-far-so-peaceful", title: "So Far, so Peaceful", dimensions: "24 × 24 in", medium: MEDIUM, image: "/artworks/so-far-so-peaceful.jpeg", available: true },
  { slug: "somewhere", title: "Somewhere", dimensions: "24 × 36 in", medium: MEDIUM, image: "/artworks/somewhere.jpeg", available: true },
  { slug: "source-of-healing", title: "Source of Healing", dimensions: "24 × 30 in", medium: MEDIUM, image: "/artworks/source-of-healing.jpeg", available: true },
  { slug: "take-a-moment-of-breath", title: "Take a Moment of Breath", dimensions: "24 × 36 in", medium: MEDIUM, image: "/artworks/take-a-moment-of-breath.jpeg", available: true },
  { slug: "the-sun", title: "The Sun", dimensions: "36 × 36 in", medium: MEDIUM, image: "/artworks/the-sun.jpeg", featured: true, available: true },
  { slug: "the-tower", title: "The Tower", dimensions: "24 × 36 in", medium: MEDIUM, image: "/artworks/the-tower.jpeg", available: true },
  { slug: "the-world-outside-my-window", title: "The World Outside My Window", dimensions: "24 × 24 in", medium: MEDIUM, image: "/artworks/the-world-outside-my-window.jpeg", available: true },
  { slug: "too-deep-to-turn-back", title: "To Deep to Turn Back", dimensions: "24 × 30 in", medium: MEDIUM, image: "/artworks/too-deep-to-turn-back.jpeg", available: true },
  { slug: "under-a-strong-storm", title: "Under a Strong Storm", dimensions: "30 × 30 in", medium: MEDIUM, image: "/artworks/under-a-strong-storm.jpeg", available: true },
  { slug: "underrated-anyway", title: "Underrated Anyway", dimensions: "24 × 24 in", medium: MEDIUM, image: "/artworks/underrated-anyway.jpeg", available: true },
  { slug: "unexpected", title: "Unexpected", dimensions: "24 × 24 in", medium: MEDIUM, image: "/artworks/unexpected.jpeg", available: true },
  { slug: "youre-just-on-time", title: "You're Just on Time", dimensions: "24 × 30 in", medium: MEDIUM, image: "/artworks/youre-just-on-time.jpeg", available: true },
 { slug: "blue-fog", title: "Blue Fog", dimensions: "12 × 12 in", medium: MEDIUM, image: "/artworks/blue-fog.jpeg", available: true },
 { slug: "bare-layers", title: "Bare Layers", dimensions: "36 × 36 in", medium: MEDIUM, image: "/artworks/bare-layers.jpeg", featured: true, available: true },
  { slug: "bubble-of-light", title: "Bubble of Light", dimensions: "30 × 30 in", medium: MEDIUM, image: "/artworks/bubble-of-light.jpeg", available: true },
 { slug: "blue-fog-2", title: "Blue Fog 2", dimensions: "12 × 12 in", medium: MEDIUM, image: "/artworks/blue-fog-2.jpeg", available: true },
];
