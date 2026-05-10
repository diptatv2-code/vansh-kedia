const testimonials = [
  { name: "Sarah Mitchell", role: "CEO, GrowthStack SaaS", quote: "Vansh completely transformed our content strategy. Our organic traffic doubled in 3 months. The writing quality is exceptional — never generic, always on-brand." },
  { name: "Arjun Patel", role: "Founder, StyleVault", quote: "The product descriptions Vansh wrote converted like crazy. 23% higher add-to-cart rate. Worth every penny and then some." },
  { name: "Emma Clarke", role: "Head of Marketing, TechNova", quote: "Fast, reliable, and the quality speaks for itself. Our blog went from 0 to 12K monthly readers in 4 months with Vansh's articles." },
]

export default function Testimonials() {
  return (
    <section style={{ padding: "6rem 2rem", background: "#0A0F1E" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <p className="section-label" style={{ marginBottom: "1rem" }}>Social Proof</p>
          <h2 style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", fontWeight: 700, color: "#F5F0E8" }}>
            What Clients <span className="gold-text">Say</span>
          </h2>
          <div className="divider" style={{ margin: "1.5rem auto" }} />
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: "1.5rem" }}>
          {testimonials.map(({ name, role, quote }) => (
            <div key={name} className="card" style={{ position: "relative" }}>
              <div style={{ fontSize: "4rem", color: "rgba(201,168,76,0.2)", fontFamily: "Georgia, serif", lineHeight: 1, marginBottom: "1rem" }}>&ldquo;</div>
              <p style={{ color: "#D1D5DB", lineHeight: 1.8, fontStyle: "italic", marginBottom: "1.5rem", fontSize: "0.95rem" }}>{quote}</p>
              <div style={{ borderTop: "1px solid #2A3347", paddingTop: "1rem" }}>
                <div style={{ fontWeight: 700, color: "#F5F0E8", fontFamily: "Playfair Display, serif" }}>{name}</div>
                <div style={{ fontSize: "0.8rem", color: "#C9A84C", marginTop: "0.25rem" }}>{role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
