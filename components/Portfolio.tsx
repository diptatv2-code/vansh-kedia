const works = [
  { category: "SaaS Blog", title: "How AI is Reshaping Remote Work in 2025", excerpt: "An in-depth 3,000-word guide exploring the paradigm shift in distributed teams, featuring original research and actionable frameworks.", tags: ["Long-form", "SEO", "Research"] },
  { category: "E-commerce", title: "Product Description Suite — 120 SKUs", excerpt: "Crafted benefit-led product descriptions for a fashion brand, resulting in a 23% increase in add-to-cart rate within 30 days.", tags: ["Copywriting", "E-commerce", "CRO"] },
  { category: "Personal Brand", title: "LinkedIn Thought Leadership Series", excerpt: "A 12-article series for a fintech founder — built from 0 to 8,000 followers in 4 months through consistent, valuable content.", tags: ["LinkedIn", "Strategy", "B2B"] },
  { category: "Website Copy", title: "Full Website Overhaul — Tech Startup", excerpt: "Rewrote homepage, about page, and 5 service pages for a B2B SaaS. Conversion rate improved by 34% post-launch.", tags: ["Web Copy", "SaaS", "Conversion"] },
]

export default function Portfolio() {
  return (
    <section id="portfolio" style={{ padding: "6rem 2rem", background: "#111827" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <p className="section-label" style={{ marginBottom: "1rem" }}>Selected Work</p>
          <h2 style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", fontWeight: 700, color: "#F5F0E8" }}>
            The <span className="gold-text">Portfolio</span>
          </h2>
          <div className="divider" style={{ margin: "1.5rem auto" }} />
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(520px, 1fr))", gap: "1.5rem" }}>
          {works.map(({ category, title, excerpt, tags }) => (
            <div key={title} className="card" style={{ position: "relative", overflow: "hidden" }}>
              <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "3px", background: "linear-gradient(90deg, #C9A84C, transparent)" }} />
              <p style={{ fontSize: "0.7rem", color: "#C9A84C", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "0.75rem", fontWeight: 600 }}>{category}</p>
              <h3 style={{ fontSize: "1.2rem", fontWeight: 700, color: "#F5F0E8", marginBottom: "0.875rem", fontFamily: "Playfair Display, serif", lineHeight: 1.4 }}>{title}</h3>
              <p style={{ color: "#9CA3AF", lineHeight: 1.7, fontSize: "0.9rem", marginBottom: "1.25rem" }}>{excerpt}</p>
              <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
                {tags.map(tag => (
                  <span key={tag} style={{ fontSize: "0.7rem", padding: "0.25rem 0.75rem", background: "rgba(201,168,76,0.1)", color: "#C9A84C", borderRadius: "999px", border: "1px solid rgba(201,168,76,0.2)", letterSpacing: "0.05em" }}>{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
