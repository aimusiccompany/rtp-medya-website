"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { AnimatePresence, motion } from "framer-motion"
import { Menu, X, ChevronDown } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"

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
        className={`mx-auto flex h-16 max-w-7xl items-center justify-between gap-6 rounded-full border bg-header px-5 backdrop-blur-lg transition-shadow duration-300 ${
          isScrolled ? "border-surface-border shadow-[0_14px_40px_-22px_rgba(43,35,33,0.45)]" : "border-surface-border"
        }`}
      >
        {/* Orijinal logo; koyu temada okunabilirlik için açık bir zemin üzerinde durur */}
        <Link
          href="/"
          className="flex shrink-0 items-center rounded-xl dark:bg-white dark:px-2.5 dark:py-1"
          aria-label="RTP Medya ana sayfa"
        >
          <div className="relative h-9 w-[88px]">
            <Image src="/images/rtp-logo.png" alt="RTP Medya" fill sizes="88px" className="object-contain object-left" priority />
          </div>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Ana menü">
          {navItems.map((item) =>
            item.dropdown ? (
              <div key={item.label} className="group relative">
                <button className="flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium text-foreground/65 transition-colors group-hover:text-foreground">
                  {item.label}
                  <ChevronDown size={14} className="transition-transform duration-300 group-hover:rotate-180" />
                </button>
                <div className="invisible absolute left-1/2 top-full w-72 -translate-x-1/2 pt-3 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100">
                  <div className="rounded-2xl border border-foreground/[0.1] bg-popover p-2 shadow-xl">
                    {item.dropdown.map((sub) => (
                      <Link
                        key={sub.href}
                        href={sub.href}
                        className="block rounded-xl px-4 py-2.5 text-sm text-foreground/60 transition-colors hover:bg-brand/15 hover:text-foreground"
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
                className="rounded-full px-4 py-2 text-sm font-medium text-foreground/65 transition-colors hover:text-foreground"
              >
                {item.label}
              </Link>
            ),
          )}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <ThemeToggle />
          <Link
            href="/teklif-al"
            className="rounded-full border border-surface-border bg-surface px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:border-brand"
          >
            Teklif iste
          </Link>
          <a
            href={PANEL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-brand px-5 py-2.5 text-sm font-semibold text-white shadow-[0_10px_26px_-12px_var(--shadow-glow)] transition-colors hover:bg-brand-hover"
          >
            Panel ↗
          </a>
        </div>

        <div className="flex items-center gap-3 lg:hidden">
          <ThemeToggle />
        </div>

        <button
          className="text-foreground lg:hidden"
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
            className="fixed inset-x-3 top-[84px] max-h-[calc(100vh-100px)] overflow-y-auto rounded-3xl border border-foreground/[0.1] bg-popover p-6 shadow-2xl lg:hidden"
          >
            <nav className="flex flex-col gap-4">
              {navItems.map((item) =>
                item.dropdown ? (
                  <div key={item.label}>
                    <button
                      onClick={() => setOpenMobileGroup(openMobileGroup === item.label ? null : item.label)}
                      className="flex w-full items-center justify-between font-medium text-foreground"
                    >
                      {item.label}
                      <ChevronDown
                        size={16}
                        className={`transition-transform duration-300 ${openMobileGroup === item.label ? "rotate-180" : ""}`}
                      />
                    </button>
                    {openMobileGroup === item.label && (
                      <div className="ml-4 mt-3 flex flex-col gap-2 border-l border-foreground/10 pl-4">
                        {item.dropdown.map((sub) => (
                          <Link
                            key={sub.href}
                            href={sub.href}
                            className="py-1 text-sm text-foreground/60 hover:text-foreground"
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
                    className="font-medium text-foreground"
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
