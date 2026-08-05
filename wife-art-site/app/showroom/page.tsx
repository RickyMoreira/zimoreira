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
        <section className="showroom-grid wrap">
          {showroomItems.map((item) => (
            <div key={item.slug} className="showroom-item">
              {item.type === "video" ? (
                <video
                  src={item.file}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="showroom-media"
                />
              ) : (
                <img src={item.file} alt={item.caption ?? item.slug} className="showroom-media" />
              )}
              {item.caption && <div className="showroom-caption">{item.caption}</div>}
            </div>
          ))}
        </section>
      )}
    </main>
  );
}
