import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Twitter, Youtube, Linkedin } from "lucide-react"

const socials = [
  { icon: Facebook, label: "Facebook", href: "https://www.facebook.com/people/AI-Music/61565593201997/" },
  { icon: Instagram, label: "Instagram", href: "https://www.instagram.com/rtpmedya/" },
  { icon: Twitter, label: "X", href: "https://x.com/aimusictr?s=21&t=kYXi7dATTiNj2Kdsv3hR5g" },
  { icon: Youtube, label: "YouTube", href: "https://www.youtube.com/@rtpmedya3400" },
  { icon: Linkedin, label: "LinkedIn", href: "https://tr.linkedin.com/company/rtp-medya" },
]

const linkClass = "text-brand-muted hover:text-brand transition-colors"

export function Footer() {
  return (
    <footer className="border-t border-brand-line bg-brand-wash">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <div className="relative mb-5 h-11 w-28">
              <Image src="/images/rtp-logo.png" alt="RTP Medya" fill className="object-contain object-left" />
            </div>
            <p className="max-w-xs text-sm leading-relaxed text-brand-muted">
              2005 yılından beri profesyonel medya çözümleriyle markanızın sesini duyuruyoruz.
            </p>
          </div>

          <div>
            <h3 className="rtp-eyebrow mb-4">Hizmetler</h3>
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
            <h3 className="rtp-eyebrow mb-4">Kurumsal</h3>
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
            <h3 className="rtp-eyebrow mb-4">Bizi takip edin</h3>
            <div className="flex gap-3">
              {socials.map(({ icon: Icon, label, href }) => (
                <Link
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="group flex h-10 w-10 items-center justify-center rounded-xl bg-white text-brand-muted transition-colors hover:bg-brand hover:text-white"
                >
                  <Icon size={18} />
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-14 border-t border-brand-line pt-8 text-center text-sm text-brand-muted">
          <p>&copy; {new Date().getFullYear()} RTP Medya. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
