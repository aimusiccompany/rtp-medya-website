import type React from "react"
import type { Metadata } from "next"
import { DM_Sans } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const dmSans = DM_Sans({ subsets: ["latin", "latin-ext"], variable: "--font-dm-sans" })

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
      <body className={`${dmSans.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
