import type React from "react"
import type { Metadata, Viewport } from "next"
import { Sora } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { ScrollProgress } from "@/components/fx/scroll-progress"
import { CursorGlow } from "@/components/fx/cursor-glow"
import "./globals.css"

const sora = Sora({ subsets: ["latin", "latin-ext"], variable: "--font-sora" })

export const metadata: Metadata = {
  title: "RTP Medya - Kurumsal Radyo ve Profesyonel Seslendirme",
  description:
    "Kurumsal radyo, işletme içi müzik yayını, anons ve profesyonel seslendirme hizmetleriyle markanızın sesini duyuruyoruz.",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
}

export const viewport: Viewport = {
  themeColor: "#09060a",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="tr" className="dark">
      <body className={`${sora.variable} font-sans antialiased`}>
        <ScrollProgress />
        <CursorGlow />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
