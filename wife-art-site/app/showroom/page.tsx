import ShowroomGrid from "@/components/ShowroomGrid";
import { showroomItems } from "@/lib/showroom";

export default function ShowRoom() {
  return (
    <main>
      <section className="hero wrap" style={{ paddingBottom: "24px" }}>
        <div className="hero-eyebrow">In the Room</div>
        <h1>Show Room</h1>
        <p>See the paintings in a living space.</p>
      </section>

      {showroomItems.length === 0 ? (
        <section className="wrap" style={{ padding: "24px 0 80px" }}>
          <p style={{ color: "var(--stone)" }}>More coming soon.</p>
        </section>
      ) : (
        <ShowroomGrid items={showroomItems} />
      )}
    </main>
  );
}
