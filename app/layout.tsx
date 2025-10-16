import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "RTP Medya - Kurumsal Radyo Hizmeti",
  description:
    "Kurumsal radyo, işletme içi anons, radyo hizmetleri ve dijital medya hizmetleri ile markanızı bir adım öne taşıyoruz.",
  generator: "v0.app",
  icons: {
    icon: "/favicon.ico",       // Tarayıcı sekmesindeki ana ikon
    shortcut: "/favicon.ico",   // Kısayol ve pinned tab için
    apple: "/apple-touch-icon.png", // iOS cihazlar için (isteğe bağlı)
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="tr">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
