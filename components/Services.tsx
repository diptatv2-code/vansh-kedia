const services = [
  { icon: "✍️", title: "Blog & Articles", desc: "Long-form content that ranks on Google and keeps readers hooked from first word to last." },
  { icon: "🌐", title: "Website Copy", desc: "Homepage, about, services, landing pages — every word engineered to convert visitors." },
  { icon: "📈", title: "SEO Content", desc: "Keyword-optimized content that climbs search rankings without sounding robotic." },
  { icon: "📧", title: "Email Newsletters", desc: "Campaigns your subscribers actually open — storytelling that builds loyalty." },
  { icon: "💼", title: "LinkedIn Articles", desc: "Thought leadership content that builds authority and attracts the right connections." },
  { icon: "📦", title: "Product Descriptions", desc: "Compelling product copy that highlights benefits and drives purchase decisions." },
]

export default function Services() {
  return (
    <section id="services" style={{ padding: "6rem 2rem", background: "#0A0F1E" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <p className="section-label" style={{ marginBottom: "1rem" }}>What I Do</p>
          <h2 style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", fontWeight: 700, color: "#F5F0E8" }}>
            Content That <span className="gold-text">Works</span>
          </h2>
          <div className="divider" style={{ margin: "1.5rem auto" }} />
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: "1.5rem" }}>
          {services.map(({ icon, title, desc }) => (
            <div key={title} className="card">
              <div style={{ fontSize: "2.5rem", marginBottom: "1.25rem" }}>{icon}</div>
              <h3 style={{ fontSize: "1.25rem", fontWeight: 700, color: "#F5F0E8", marginBottom: "0.75rem", fontFamily: "Playfair Display, serif" }}>{title}</h3>
              <p style={{ color: "#9CA3AF", lineHeight: 1.7, fontSize: "0.95rem" }}>{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
