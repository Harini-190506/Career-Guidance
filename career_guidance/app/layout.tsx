import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "CareerSync AI - Personalized Career Recommendation Framework",
  description: "ML-powered career guidance platform for students with personalized roadmaps and AI insights",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className} style={{ backgroundColor: "#151515" }}>
        {children}
      </body>
    </html>
  )
}
