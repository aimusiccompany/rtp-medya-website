import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Twitter, Youtube, Linkedin } from "lucide-react"
import { Equalizer } from "@/components/fx/equalizer"

const socials = [
  { icon: Facebook, label: "Facebook", href: "https://www.facebook.com/people/AI-Music/61565593201997/" },
  { icon: Instagram, label: "Instagram", href: "https://www.instagram.com/rtpmedya/" },
  { icon: Twitter, label: "X", href: "https://x.com/aimusictr?s=21&t=kYXi7dATTiNj2Kdsv3hR5g" },
  { icon: Youtube, label: "YouTube", href: "https://www.youtube.com/@rtpmedya3400" },
  { icon: Linkedin, label: "LinkedIn", href: "https://tr.linkedin.com/company/rtp-medya" },
]

const linkClass = "text-white/55 transition-colors hover:text-white"

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/[0.08] bg-transparent">
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 opacity-30">
        <Equalizer bars={96} className="h-full" />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />

      <div className="container relative mx-auto px-4 py-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div>
            <div className="relative mb-6 h-11 w-28">
              <Image src="/images/rtp-logo-light.png" alt="RTP Medya" fill className="object-contain object-left" />
            </div>
            <p className="max-w-xs text-sm leading-relaxed text-white/50">
              2005 yılından beri profesyonel medya çözümleriyle markanızın sesini duyuruyoruz.
            </p>
          </div>

          <div>
            <h3 className="eyebrow mb-5">Hizmetler</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/hizmetler/kurumsal-radyo" className={linkClass}>
                  Kurumsal Radyo
                </Link>
              </li>
              <li>
                <Link href="/hizmetler/profesyonel-seslendirme" className={linkClass}>
                  Profesyonel Seslendirme
                </Link>
              </li>
              <li>
                <Link href="/teklif-al" className={linkClass}>
                  Teklif Al
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="eyebrow mb-5">Kurumsal</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/hakkimizda" className={linkClass}>
                  Hakkımızda
                </Link>
              </li>
              <li>
                <Link href="/player" className={linkClass}>
                  RTP Medya Player
                </Link>
              </li>
              <li>
                <Link href="/iletisim" className={linkClass}>
                  İletişim
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="eyebrow mb-5">Bizi takip edin</h3>
            <div className="flex flex-wrap gap-3">
              {socials.map(({ icon: Icon, label, href }) => (
                <Link
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/[0.12] bg-white/[0.04] text-white/60 transition-all hover:border-brand-glow hover:bg-brand hover:text-white hover:shadow-[0_0_24px_rgba(232,16,28,0.7)]"
                >
                  <Icon size={17} />
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-white/[0.08] pt-8 text-center text-sm text-white/40">
          <p>&copy; {new Date().getFullYear()} RTP Medya. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
