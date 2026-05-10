"use client"
import { useState } from "react"
import { submitLead } from "@/lib/supabase"

const services = ["Blog & Articles", "Website Copy", "SEO Content", "Email Newsletter", "LinkedIn Articles", "Product Descriptions", "Other"]

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", service: "", message: "" })
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("loading")
    try {
      await submitLead(form)
      setStatus("success")
      setForm({ name: "", email: "", service: "", message: "" })
    } catch {
      setStatus("error")
    }
  }

  return (
    <section id="contact" style={{ padding: "6rem 2rem", background: "#0A0F1E" }}>
      <div style={{ maxWidth: "700px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
          <p className="section-label" style={{ marginBottom: "1rem" }}>Get In Touch</p>
          <h2 style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", fontWeight: 700, color: "#F5F0E8" }}>
            Start Your <span className="gold-text">Project</span>
          </h2>
          <div className="divider" style={{ margin: "1.5rem auto" }} />
          <p style={{ color: "#9CA3AF", marginTop: "1rem" }}>Fill the form below — I&apos;ll get back within 24 hours.</p>
        </div>

        <div className="card" style={{ padding: "3rem" }}>
          {status === "success" ? (
            <div style={{ textAlign: "center", padding: "2rem 0" }}>
              <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>🎉</div>
              <h3 style={{ color: "#C9A84C", fontFamily: "Playfair Display", fontSize: "1.5rem", marginBottom: "0.5rem" }}>Message Sent!</h3>
              <p style={{ color: "#9CA3AF" }}>I&apos;ll reach out within 24 hours. Let&apos;s create something great.</p>
              <button onClick={() => setStatus("idle")} className="btn-outline" style={{ marginTop: "1.5rem" }}>Send Another</button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.25rem" }}>
                {(["name", "email"] as const).map(field => (
                  <div key={field}>
                    <label style={{ display: "block", fontSize: "0.75rem", fontWeight: 600, color: "#9CA3AF", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "0.5rem" }}>{field}</label>
                    <input
                      type={field === "email" ? "email" : "text"}
                      required
                      value={form[field]}
                      onChange={e => setForm(p => ({ ...p, [field]: e.target.value }))}
                      style={{ width: "100%", background: "#0A0F1E", border: "1px solid #2A3347", borderRadius: "6px", padding: "0.875rem 1rem", color: "#F5F0E8", fontSize: "0.95rem", outline: "none", transition: "border-color 0.2s", fontFamily: "Inter, sans-serif" }}
                      onFocus={e => (e.target.style.borderColor = "#C9A84C")}
                      onBlur={e => (e.target.style.borderColor = "#2A3347")}
                    />
                  </div>
                ))}
              </div>
              <div>
                <label style={{ display: "block", fontSize: "0.75rem", fontWeight: 600, color: "#9CA3AF", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "0.5rem" }}>Service Needed</label>
                <select
                  value={form.service}
                  onChange={e => setForm(p => ({ ...p, service: e.target.value }))}
                  style={{ width: "100%", background: "#0A0F1E", border: "1px solid #2A3347", borderRadius: "6px", padding: "0.875rem 1rem", color: form.service ? "#F5F0E8" : "#6B7A99", fontSize: "0.95rem", outline: "none", fontFamily: "Inter, sans-serif", cursor: "pointer" }}
                >
                  <option value="">Select a service...</option>
                  {services.map(s => <option key={s} value={s}>{s}</option>)}
                </select>
              </div>
              <div>
                <label style={{ display: "block", fontSize: "0.75rem", fontWeight: 600, color: "#9CA3AF", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "0.5rem" }}>Message</label>
                <textarea
                  rows={5}
                  required
                  value={form.message}
                  onChange={e => setForm(p => ({ ...p, message: e.target.value }))}
                  placeholder="Tell me about your project..."
                  style={{ width: "100%", background: "#0A0F1E", border: "1px solid #2A3347", borderRadius: "6px", padding: "0.875rem 1rem", color: "#F5F0E8", fontSize: "0.95rem", outline: "none", resize: "vertical", fontFamily: "Inter, sans-serif", transition: "border-color 0.2s" }}
                  onFocus={e => (e.target.style.borderColor = "#C9A84C")}
                  onBlur={e => (e.target.style.borderColor = "#2A3347")}
                />
              </div>
              {status === "error" && (
                <p style={{ color: "#EF4444", fontSize: "0.875rem" }}>Something went wrong. Please try again.</p>
              )}
              <button type="submit" className="btn-primary" disabled={status === "loading"} style={{ width: "100%", padding: "1rem", fontSize: "0.9rem" }}>
                {status === "loading" ? "Sending..." : "Send Message →"}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
