"use client"
import { useState, useEffect } from "react"

export default function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
      padding: "1.25rem 2rem",
      background: scrolled ? "rgba(10,15,30,0.95)" : "transparent",
      backdropFilter: scrolled ? "blur(20px)" : "none",
      borderBottom: scrolled ? "1px solid #2A3347" : "none",
      display: "flex", alignItems: "center", justifyContent: "space-between",
      transition: "all 0.4s ease",
    }}>
      <div style={{ fontFamily: "Playfair Display, serif", fontSize: "1.5rem", fontWeight: 700, color: "#C9A84C" }}>
        VK<span style={{ color: "#F5F0E8", fontWeight: 400 }}> · Writing</span>
      </div>
      <nav style={{ display: "flex", gap: "2rem", alignItems: "center" }}>
        {["Services", "Portfolio", "About", "Contact"].map(item => (
          <a key={item} href={`#${item.toLowerCase()}`} style={{
            color: "#9CA3AF", textDecoration: "none", fontSize: "0.875rem",
            fontWeight: 500, letterSpacing: "0.05em", transition: "color 0.2s",
          }}
          onMouseEnter={e => (e.currentTarget.style.color = "#C9A84C")}
          onMouseLeave={e => (e.currentTarget.style.color = "#9CA3AF")}>
            {item}
          </a>
        ))}
        <a href="#contact" className="btn-primary" style={{ padding: "0.625rem 1.25rem", fontSize: "0.75rem" }}>
          Hire Me
        </a>
      </nav>
    </header>
  )
}
