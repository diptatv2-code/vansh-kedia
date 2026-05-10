import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Vansh Kedia — Content Writing Services",
  description: "Professional content writing services — blogs, web copy, SEO articles, and more. Words that convert.",
  openGraph: {
    title: "Vansh Kedia — Content Writing Services",
    description: "Words that convert. Hire Vansh Kedia for content that drives results.",
    type: "website",
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
