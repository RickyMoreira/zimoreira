// ============================================================
// Everything shown on the Show Room page comes from here.
// To add a piece:
// 1. Put the photo or video in /public/showroom/
// 2. Copy a block below, set type to "image" or "video",
//    and fill in the filename
// 3. Save — the site updates automatically
//
// Videos should be .mp4 (best browser support). They autoplay
// muted and loop, like a live "in the room" preview.
// ============================================================

export type ShowroomItem = {
  slug: string;
  type: "image" | "video";
  file: string;       // path in /public/showroom, e.g. "/showroom/gray.jpg"
  caption?: string;   // optional short label shown under the item
};

export const showroomItems: ShowroomItem[] = [
  { slug: "badroom", type: "image", file: "/showroom/badroom.jpeg", caption: "Bedroom" },
  { slug: "bare-layers-room", type: "image", file: "/showroom/bare-layers-room.jpg", caption: "Bare Layers" },
  { slug: "blue", type: "image", file: "/showroom/blue.jpg", caption: "Blue" },
  { slug: "claro", type: "image", file: "/showroom/claro.jpg", caption: "Claro" },
  { slug: "fire-in-the-fireplace", type: "video", file: "/showroom/fire-in-the-fireplace.mp4", caption: "Fire in the Fireplace" },
  { slug: "gallery-room", type: "image", file: "/showroom/gallery-room.jpg", caption: "Gallery" },
  { slug: "gray", type: "image", file: "/showroom/gray.jpg", caption: "Gray" },
  { slug: "gray-2", type: "image", file: "/showroom/gray-2.jpg", caption: "Gray" },
  { slug: "gray-3", type: "image", file: "/showroom/gray-3.jpg", caption: "Gray" },
  { slug: "gray-4", type: "image", file: "/showroom/gray-4.jpg", caption: "Gray" },
  { slug: "green", type: "image", file: "/showroom/green.jpeg", caption: "Green" },
  { slug: "nice", type: "image", file: "/showroom/nice.jpeg", caption: "Nice" },
  { slug: "sala", type: "image", file: "/showroom/sala.jpg", caption: "Sala" },
  { slug: "sala-2", type: "image", file: "/showroom/sala-2.jpg", caption: "Sala" },
  { slug: "sand-storm-2", type: "image", file: "/showroom/sand-storm-2.jpg", caption: "Sand Storm" },
  { slug: "sand-storm-room", type: "image", file: "/showroom/sand-storm-room.jpg", caption: "Sand Storm" },
  { slug: "shapes-and-colors-room", type: "image", file: "/showroom/shapes-and-colors-room.jpg", caption: "Shapes and Colors" },
  { slug: "somewhere-room", type: "image", file: "/showroom/somewhere-room.jpg", caption: "Somewhere" },
  { slug: "source-of-healing-room", type: "image", file: "/showroom/source-of-healing-room.jpg", caption: "Source of Healing" },
  { slug: "source", type: "image", file: "/showroom/source.jpg", caption: "Source" },
  { slug: "the-sun-2", type: "image", file: "/showroom/the-sun-2.jpg", caption: "The Sun" },
  { slug: "the-sun-room", type: "image", file: "/showroom/the-sun-room.jpg", caption: "The Sun" },
  { slug: "the-tower-room", type: "image", file: "/showroom/the-tower-room.jpg", caption: "The Tower" },
  { slug: "the-world-outside-room", type: "image", file: "/showroom/the-world-outside-room.jpg", caption: "The World Outside My Window" },
  { slug: "white", type: "image", file: "/showroom/white.jpg", caption: "White" },
  { slug: "woman-walking", type: "video", file: "/showroom/woman-walking.mp4", caption: "Woman Walking" },
];
