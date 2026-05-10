export default function Hero() {
  return (
    <section style={{
      minHeight: "100vh",
      background: "linear-gradient(135deg, #0A0F1E 0%, #111827 50%, #0A0F1E 100%)",
      display: "flex", alignItems: "center", justifyContent: "center",
      padding: "6rem 2rem 4rem",
      position: "relative", overflow: "hidden",
    }}>
      <div style={{
        position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)",
        fontSize: "clamp(8rem, 20vw, 20rem)", fontFamily: "Playfair Display, serif",
        fontWeight: 900, color: "rgba(201,168,76,0.04)", letterSpacing: "-0.05em",
        whiteSpace: "nowrap", pointerEvents: "none", userSelect: "none",
      }}>WORDS</div>

      <div style={{ maxWidth: "900px", textAlign: "center", position: "relative", zIndex: 1 }}>
        <p className="section-label" style={{ marginBottom: "1.5rem" }}>Content Writing Services</p>
        <h1 style={{
          fontSize: "clamp(3rem, 7vw, 6rem)", fontWeight: 900, lineHeight: 1.05,
          marginBottom: "1.5rem", letterSpacing: "-0.02em",
        }}>
          <span className="gold-shimmer">Words</span>{" "}
          <span style={{ color: "#F5F0E8" }}>That Move</span><br />
          <span style={{ color: "#F5F0E8" }}>People to</span>{" "}
          <span className="gold-shimmer">Act</span>
        </h1>
        <p style={{
          fontSize: "1.25rem", color: "#9CA3AF", maxWidth: "600px", margin: "0 auto 2.5rem",
          lineHeight: 1.7, fontWeight: 300,
        }}>
          Premium content writing for brands that refuse to be ordinary.
          Blogs, web copy, SEO articles — crafted to convert.
        </p>
        <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
          <a href="#contact" className="btn-primary">Start a Project</a>
          <a href="#portfolio" className="btn-outline">View Work</a>
        </div>

        <div style={{
          display: "flex", gap: "3rem", justifyContent: "center", marginTop: "5rem", flexWrap: "wrap",
        }}>
          {[["50+", "Happy Clients"], ["500K+", "Words Written"], ["3+", "Years Experience"]].map(([num, label]) => (
            <div key={label} style={{ textAlign: "center" }}>
              <div style={{ fontSize: "2.5rem", fontFamily: "Playfair Display", fontWeight: 700, color: "#C9A84C" }}>{num}</div>
              <div style={{ fontSize: "0.8rem", color: "#6B7A99", letterSpacing: "0.1em", textTransform: "uppercase", marginTop: "0.25rem" }}>{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
