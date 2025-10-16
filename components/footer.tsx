import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Twitter, Youtube, Linkedin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gradient-to-b from-muted/50 to-muted border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="relative w-24 h-10">
                <Image src="/images/rtp-logo.png" alt="RTP Medya" fill className="object-contain" />
              </div>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              2005 yılından beri profesyonel medya çözümleri ile markanızı bir adım öne taşıyoruz.
            </p>
          </div>

          <div>
            <h3 className="font-bold mb-4">Hizmetlerimiz</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/hizmetler/kurumsal-radyo"
                  className="text-muted-foreground hover:text-red-600 transition-colors"
                >
                  Kurumsal Radyo
                </Link>
              </li>
              <li>
                <Link
                  href="/hizmetler/profesyonel-seslendirme"
                  className="text-muted-foreground hover:text-red-600 transition-colors"
                >
                  Profesyonel Seslendirme
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">Kurumsal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#about" className="text-muted-foreground hover:text-red-600 transition-colors">
                  Hakkımızda
                </Link>
              </li>
              <li>
                <Link href="/player" className="text-muted-foreground hover:text-red-600 transition-colors">
                  RTP Medya Player
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-muted-foreground hover:text-red-600 transition-colors">
                  İletişim
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">Bizi Takip Edin</h3>
            <div className="flex gap-3">
              <Link
                href="https://www.facebook.com/people/AI-Music/61565593201997/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-muted hover:bg-gradient-to-br hover:from-red-600 hover:to-red-800 rounded-lg flex items-center justify-center transition-all duration-300 group hover:shadow-lg"
              >
                <Facebook size={20} className="text-muted-foreground group-hover:text-white transition-colors" />
              </Link>
              <Link
                href="https://www.instagram.com/rtpmedya/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-muted hover:bg-gradient-to-br hover:from-red-600 hover:to-red-800 rounded-lg flex items-center justify-center transition-all duration-300 group hover:shadow-lg"
              >
                <Instagram size={20} className="text-muted-foreground group-hover:text-white transition-colors" />
              </Link>
              <Link
                href="https://x.com/aimusictr?s=21&t=kYXi7dATTiNj2Kdsv3hR5g"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-muted hover:bg-gradient-to-br hover:from-red-600 hover:to-red-800 rounded-lg flex items-center justify-center transition-all duration-300 group hover:shadow-lg"
              >
                <Twitter size={20} className="text-muted-foreground group-hover:text-white transition-colors" />
              </Link>
              <Link
                href="https://www.youtube.com/@rtpmedya3400"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-muted hover:bg-gradient-to-br hover:from-red-600 hover:to-red-800 rounded-lg flex items-center justify-center transition-all duration-300 group hover:shadow-lg"
              >
                <Youtube size={20} className="text-muted-foreground group-hover:text-white transition-colors" />
              </Link>
              <Link
                href="https://tr.linkedin.com/company/rtp-medya"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-muted hover:bg-gradient-to-br hover:from-red-600 hover:to-red-800 rounded-lg flex items-center justify-center transition-all duration-300 group hover:shadow-lg"
              >
                <Linkedin size={20} className="text-muted-foreground group-hover:text-white transition-colors" />
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} RTP Medya. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
