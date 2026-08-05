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
  file: string;       // path in /public/showroom, e.g. "/showroom/gray-living-room.jpg"
  caption?: string;   // optional short label shown under the item
};

export const showroomItems: ShowroomItem[] = [
  // Example — replace with the real files once picked:
  // { slug: "gray-living-room", type: "image", file: "/showroom/gray-living-room.jpg", caption: "Living room" },
  // { slug: "fireplace", type: "video", file: "/showroom/fireplace.mp4", caption: "By the fireplace" },
];
