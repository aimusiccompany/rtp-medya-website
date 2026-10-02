"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
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
    const handleScroll = () => setIsScrolled(window.scrollY > 8)
    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-white/85 backdrop-blur-xl border-b transition-shadow duration-300 ${
        isScrolled ? "border-brand-line shadow-[0_8px_30px_-16px_rgba(43,35,33,0.25)]" : "border-brand-line/60"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-[72px] gap-6">
          <Link href="/" className="flex items-center shrink-0" aria-label="RTP Medya ana sayfa">
            <div className="relative w-28 h-11">
              <Image src="/images/rtp-logo.png" alt="RTP Medya" fill className="object-contain" priority />
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-8" aria-label="Ana menü">
            {navItems.map((item) =>
              item.dropdown ? (
                <div key={item.label} className="relative group">
                  <button className="flex items-center gap-1 text-[15px] font-medium text-brand-muted group-hover:text-brand-ink transition-colors py-6">
                    {item.label}
                    <ChevronDown size={15} className="group-hover:rotate-180 transition-transform duration-300" />
                  </button>
                  <div className="absolute top-[calc(100%-12px)] left-0 w-72 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    <div className="bg-white rounded-2xl shadow-xl border border-brand-line p-2">
                      {item.dropdown.map((sub) => (
                        <Link
                          key={sub.href}
                          href={sub.href}
                          className="block px-4 py-2.5 rounded-xl text-sm text-brand-muted hover:text-brand-ink hover:bg-brand-wash transition-colors"
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
                  className="text-[15px] font-medium text-brand-muted hover:text-brand-ink transition-colors"
                >
                  {item.label}
                </Link>
              ),
            )}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/teklif-al"
              className="rounded-[10px] bg-brand-wash px-4 py-2.5 text-sm font-semibold text-brand hover:bg-[#f7dedc] transition-colors"
            >
              Teklif iste
            </Link>
            <a
              href={PANEL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-[10px] bg-brand px-4 py-2.5 text-sm font-semibold text-white hover:bg-brand-hover transition-colors"
            >
              Panel ↗
            </a>
          </div>

          <button
            className="lg:hidden text-brand-ink"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Menüyü kapat" : "Menüyü aç"}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="lg:hidden fixed left-0 right-0 top-[72px] bg-white border-t border-brand-line shadow-2xl max-h-[calc(100vh-72px)] overflow-y-auto">
          <div className="container mx-auto px-4 py-6">
            <nav className="flex flex-col gap-4">
              {navItems.map((item) =>
                item.dropdown ? (
                  <div key={item.label}>
                    <button
                      onClick={() => setOpenMobileGroup(openMobileGroup === item.label ? null : item.label)}
                      className="flex items-center justify-between w-full text-brand-ink font-medium"
                    >
                      {item.label}
                      <ChevronDown
                        size={16}
                        className={`transition-transform duration-300 ${openMobileGroup === item.label ? "rotate-180" : ""}`}
                      />
                    </button>
                    {openMobileGroup === item.label && (
                      <div className="ml-4 mt-2 flex flex-col gap-2">
                        {item.dropdown.map((sub) => (
                          <Link
                            key={sub.href}
                            href={sub.href}
                            className="text-brand-muted hover:text-brand-ink text-sm py-1"
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
                    className="text-brand-ink font-medium"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ),
              )}
              <Link
                href="/teklif-al"
                onClick={() => setIsMobileMenuOpen(false)}
                className="mt-2 rounded-[10px] bg-brand-wash px-4 py-3 text-center font-semibold text-brand"
              >
                Teklif iste
              </Link>
              <a
                href={PANEL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-[10px] bg-brand px-4 py-3 text-center font-semibold text-white"
              >
                Panel ↗
              </a>
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header
