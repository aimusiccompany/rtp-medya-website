"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { AnimatePresence, motion } from "framer-motion"
import { Menu, X, ChevronDown } from "lucide-react"

type NavItem = {
  label: string
  href: string
  dropdown?: { label: string; href: string }[]
}

const navItems: NavItem[] = [
  { label: "Biz kimiz", href: "/hakkimizda" },
  {
    label: "Hizmetler",
    href: "#",
    dropdown: [
      { label: "Kurumsal Radyo", href: "/hizmetler/kurumsal-radyo" },
      { label: "Profesyonel Seslendirme", href: "/hizmetler/profesyonel-seslendirme" },
    ],
  },
  {
    label: "Sektörler",
    href: "#",
    dropdown: [
      { label: "Restoran İçi Müzik Yayını", href: "/hizmet-alanlari/restoran" },
      { label: "Kafeterya İçi Müzik Yayını", href: "/hizmet-alanlari/kafeterya" },
      { label: "Mağaza İçi Müzik Yayını", href: "/hizmet-alanlari/magaza" },
      { label: "Market İçi Müzik Yayını", href: "/hizmet-alanlari/market" },
      { label: "AVM İçi Müzik Yayını", href: "/hizmet-alanlari/avm" },
      { label: "Otel İçi Müzik Yayını", href: "/hizmet-alanlari/otel" },
      { label: "Gym & Spa İçi Müzik Yayını", href: "/hizmet-alanlari/gym-spa" },
      { label: "Güzellik Merkezi İçi Müzik", href: "/hizmet-alanlari/guzellik-merkezi" },
      { label: "Hastane İçi Müzik Yayını", href: "/hizmet-alanlari/hastane" },
      { label: "Akaryakıt İstasyonu Müzik", href: "/hizmet-alanlari/akaryakit" },
    ],
  },
  { label: "RTP Medya Player", href: "/player" },
  { label: "İletişim", href: "/iletisim" },
]

const PANEL_URL = "https://panel.rtpmedya.com/"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [openMobileGroup, setOpenMobileGroup] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 12)
    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [isMobileMenuOpen])

  return (
    <header className="fixed left-0 right-0 top-0 z-50 px-3 pt-3 md:px-6">
      <div
        className={`mx-auto flex h-16 max-w-7xl items-center justify-between gap-6 rounded-full border px-5 transition-all duration-500 ${
          isScrolled
            ? "border-white/[0.1] bg-[#0d080a]/75 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.9),0_0_40px_-20px_rgba(232,16,28,0.5)] backdrop-blur-2xl"
            : "border-white/[0.06] bg-white/[0.02] backdrop-blur-md"
        }`}
      >
        <Link href="/" className="flex shrink-0 items-center" aria-label="RTP Medya ana sayfa">
          <div className="relative h-9 w-[88px]">
            <Image src="/images/rtp-logo-light.png" alt="RTP Medya" fill className="object-contain object-left" priority />
          </div>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Ana menü">
          {navItems.map((item) =>
            item.dropdown ? (
              <div key={item.label} className="group relative">
                <button className="flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium text-white/65 transition-colors group-hover:text-white">
                  {item.label}
                  <ChevronDown size={14} className="transition-transform duration-300 group-hover:rotate-180" />
                </button>
                <div className="invisible absolute left-1/2 top-full w-72 -translate-x-1/2 pt-3 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100">
                  <div className="rounded-2xl border border-white/[0.1] bg-[#110b0d]/95 p-2 shadow-2xl shadow-black/60 backdrop-blur-2xl">
                    {item.dropdown.map((sub) => (
                      <Link
                        key={sub.href}
                        href={sub.href}
                        className="block rounded-xl px-4 py-2.5 text-sm text-white/60 transition-colors hover:bg-brand/15 hover:text-white"
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-full px-4 py-2 text-sm font-medium text-white/65 transition-colors hover:text-white"
              >
                {item.label}
              </Link>
            ),
          )}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <Link
            href="/teklif-al"
            className="rounded-full border border-white/[0.14] bg-white/[0.04] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:border-brand-glow/60 hover:bg-white/[0.09]"
          >
            Teklif iste
          </Link>
          <a
            href={PANEL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-gradient-to-r from-brand-hover to-brand px-5 py-2.5 text-sm font-semibold text-white shadow-[0_10px_30px_-10px_rgba(232,16,28,0.9)] transition-all hover:brightness-110"
          >
            Panel ↗
          </a>
        </div>

        <button
          className="text-white lg:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? "Menüyü kapat" : "Menüyü aç"}
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-x-3 top-[84px] max-h-[calc(100vh-100px)] overflow-y-auto rounded-3xl border border-white/[0.1] bg-[#0d080a]/95 p-6 shadow-2xl backdrop-blur-2xl lg:hidden"
          >
            <nav className="flex flex-col gap-4">
              {navItems.map((item) =>
                item.dropdown ? (
                  <div key={item.label}>
                    <button
                      onClick={() => setOpenMobileGroup(openMobileGroup === item.label ? null : item.label)}
                      className="flex w-full items-center justify-between font-medium text-white"
                    >
                      {item.label}
                      <ChevronDown
                        size={16}
                        className={`transition-transform duration-300 ${openMobileGroup === item.label ? "rotate-180" : ""}`}
                      />
                    </button>
                    {openMobileGroup === item.label && (
                      <div className="ml-4 mt-3 flex flex-col gap-2 border-l border-white/10 pl-4">
                        {item.dropdown.map((sub) => (
                          <Link
                            key={sub.href}
                            href={sub.href}
                            className="py-1 text-sm text-white/60 hover:text-white"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {sub.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="font-medium text-white"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ),
              )}
              <Link href="/teklif-al" onClick={() => setIsMobileMenuOpen(false)} className="btn-ghost mt-2">
                Teklif iste
              </Link>
              <a href={PANEL_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">
                Panel ↗
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Header
