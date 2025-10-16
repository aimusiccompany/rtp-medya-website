"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronDown } from "lucide-react"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const [isServiceAreasOpen, setIsServiceAreasOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { label: "Ana Sayfa", href: "/" },
    { label: "RTP Medya Player", href: "/player" },
    {
      label: "Hizmetlerimiz",
      href: "#",
      dropdown: [
        { label: "Kurumsal Radyo", href: "/hizmetler/kurumsal-radyo" },
        { label: "Profesyonel Seslendirme", href: "/hizmetler/profesyonel-seslendirme" },
      ],
    },
    {
      label: "Hizmet Alanlarımız",
      href: "#",
      dropdown: [
        { label: "Restoran İçi Müzik Yayını", href: "/hizmet-alanlari/restoran" },
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
    { label: "Hakkımızda", href: "/hakkimizda" },
    { label: "İletişim", href: "/iletisim" },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-lg border-b border-border"
          : "bg-gradient-to-b from-black/50 to-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-32 h-12 transition-transform duration-300 group-hover:scale-105">
              <Image src="/images/rtp-logo.png" alt="RTP Medya" fill className="object-contain" priority />
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) =>
              item.dropdown ? (
                <div key={item.label} className="relative group">
                  <button className="flex items-center gap-1 text-foreground/80 hover:text-foreground transition-colors font-medium">
                    {item.label}
                    <ChevronDown size={16} className="group-hover:rotate-180 transition-transform duration-300" />
                  </button>
                  <div className="absolute top-full left-0 mt-2 w-64 bg-background/95 backdrop-blur-md rounded-lg shadow-xl border border-border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                    {item.dropdown.map((subItem) => (
                      <Link
                        key={subItem.href}
                        href={subItem.href}
                        className="block px-4 py-3 text-foreground/80 hover:text-foreground hover:bg-red-600/10 transition-colors first:rounded-t-lg last:rounded-b-lg"
                      >
                        {subItem.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-foreground/80 hover:text-foreground transition-colors font-medium relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-red-600 after:to-red-800 hover:after:w-full after:transition-all after:duration-300"
                >
                  {item.label}
                </Link>
              ),
            )}
          </nav>

          <div className="hidden lg:block">
            <Link href="/teklif-al">
              <Button className="bg-gradient-to-r from-red-600 to-red-800 hover:from-red-700 hover:to-red-900 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                Teklif Al
              </Button>
            </Link>
          </div>

          <button className="lg:hidden text-foreground" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="lg:hidden fixed left-0 right-0 top-20 bg-background border-t border-border shadow-2xl max-h-[calc(100vh-5rem)] overflow-y-auto">
          <div className="container mx-auto px-4 py-6">
            <nav className="flex flex-col gap-4">
              {navItems.map((item) =>
                item.dropdown ? (
                  <div key={item.label}>
                    <button
                      onClick={() => {
                        if (item.label === "Hizmetlerimiz") {
                          setIsServicesOpen(!isServicesOpen)
                        } else {
                          setIsServiceAreasOpen(!isServiceAreasOpen)
                        }
                      }}
                      className="flex items-center justify-between w-full text-foreground/80 hover:text-foreground transition-colors font-medium"
                    >
                      {item.label}
                      <ChevronDown
                        size={16}
                        className={`transition-transform duration-300 ${
                          (item.label === "Hizmetlerimiz" && isServicesOpen) ||
                          (item.label === "Hizmet Alanlarımız" && isServiceAreasOpen)
                            ? "rotate-180"
                            : ""
                        }`}
                      />
                    </button>
                    {((item.label === "Hizmetlerimiz" && isServicesOpen) ||
                      (item.label === "Hizmet Alanlarımız" && isServiceAreasOpen)) && (
                      <div className="ml-4 mt-2 flex flex-col gap-2">
                        {item.dropdown.map((subItem) => (
                          <Link
                            key={subItem.href}
                            href={subItem.href}
                            className="text-foreground/70 hover:text-foreground transition-colors text-sm py-1"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {subItem.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-foreground/80 hover:text-foreground transition-colors font-medium"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ),
              )}
              <Link href="/teklif-al" onClick={() => setIsMobileMenuOpen(false)}>
                <Button className="bg-gradient-to-r from-red-600 to-red-800 hover:from-red-700 hover:to-red-900 text-white w-full mt-2">
                  Teklif Al
                </Button>
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header
