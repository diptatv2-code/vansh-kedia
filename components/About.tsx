export default function About() {
  return (
    <section id="about" style={{ padding: "6rem 2rem", background: "#111827" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))", gap: "5rem", alignItems: "center" }}>
        <div style={{ position: "relative" }}>
          <div style={{
            width: "100%", aspectRatio: "4/5", borderRadius: "8px",
            background: "linear-gradient(135deg, #1a2035, #2A3347)",
            border: "1px solid #2A3347", display: "flex", alignItems: "center",
            justifyContent: "center", flexDirection: "column", gap: "1rem",
          }}>
            <div style={{ fontSize: "5rem" }}>✍️</div>
            <p style={{ color: "#6B7A99", fontSize: "0.875rem" }}>Vansh Kedia</p>
          </div>
          <div style={{
            position: "absolute", bottom: "-20px", right: "-20px",
            width: "140px", height: "140px", background: "rgba(201,168,76,0.08)",
            border: "1px solid rgba(201,168,76,0.3)", borderRadius: "8px", zIndex: -1,
          }} />
        </div>

        <div>
          <p className="section-label" style={{ marginBottom: "1rem" }}>About Me</p>
          <h2 style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)", fontWeight: 700, color: "#F5F0E8", marginBottom: "1.5rem", lineHeight: 1.2 }}>
            Crafting Stories<br /><span className="gold-text">Since 2021</span>
          </h2>
          <div className="divider" />
          <p style={{ color: "#9CA3AF", lineHeight: 1.8, marginTop: "1.5rem", marginBottom: "1.5rem" }}>
            I&apos;m Vansh Kedia — a content writer obsessed with the power of the right words. With over 3 years of experience across SaaS, e-commerce, personal branding, and B2B industries, I help brands cut through the noise with content that&apos;s strategic, engaging, and built to convert.
          </p>
          <p style={{ color: "#9CA3AF", lineHeight: 1.8, marginBottom: "2rem" }}>
            Every piece I write starts with deep research, a clear understanding of your audience, and the goal of creating something genuinely useful — not just content for content&apos;s sake.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
            {[["Fast Turnaround", "24–48h delivery"], ["SEO-First", "Every article optimized"], ["2 Free Revisions", "Included on every project"], ["100% Original", "Plagiarism-free guarantee"]].map(([title, sub]) => (
              <div key={title} style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start" }}>
                <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#C9A84C", marginTop: "0.5rem", flexShrink: 0 }} />
                <div>
                  <div style={{ fontWeight: 600, color: "#F5F0E8", fontSize: "0.875rem" }}>{title}</div>
                  <div style={{ color: "#6B7A99", fontSize: "0.8rem", marginTop: "0.1rem" }}>{sub}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
