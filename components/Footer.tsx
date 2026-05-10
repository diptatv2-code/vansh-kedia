"use client"

export default function Footer() {
  return (
    <footer style={{ background: "#111827", borderTop: "1px solid #2A3347", padding: "3rem 2rem" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1.5rem" }}>
        <div>
          <div style={{ fontFamily: "Playfair Display, serif", fontSize: "1.25rem", fontWeight: 700, color: "#C9A84C", marginBottom: "0.5rem" }}>Vansh Kedia</div>
          <p style={{ color: "#6B7A99", fontSize: "0.875rem" }}>Words that move people to act.</p>
        </div>
        <div style={{ display: "flex", gap: "2rem" }}>
          {["Services", "Portfolio", "About", "Contact"].map(item => (
            <a key={item} href={`#${item.toLowerCase()}`} style={{ color: "#6B7A99", textDecoration: "none", fontSize: "0.875rem", transition: "color 0.2s" }}
            onMouseEnter={e => (e.currentTarget.style.color = "#C9A84C")}
            onMouseLeave={e => (e.currentTarget.style.color = "#6B7A99")}>
              {item}
            </a>
          ))}
        </div>
        <p style={{ color: "#4B5563", fontSize: "0.8rem" }}>© 2026 Vansh Kedia. All rights reserved.</p>
      </div>
    </footer>
  )
}
