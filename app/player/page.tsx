import type { Metadata } from "next"
import { Download, Music, Radio, Clock, Wifi, Settings, Smartphone } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PageHero } from "@/components/page-hero"
import { CtaBand } from "@/components/cta-band"
import { SectionHeading } from "@/components/section-heading"
import { Reveal } from "@/components/fx/reveal"
import { SpotlightCard } from "@/components/fx/spotlight-card"

export const metadata: Metadata = {
  title: "RTP Medya Player | RTP Medya",
  description:
    "İşletmeniz için özel olarak tasarlanmış profesyonel müzik yayın platformu. Windows için indirin.",
}

// GitHub Release üzerinden indirilecek dosya
const DOWNLOAD_URL =
  "https://github.com/aimusiccompany/rtp-medya-website/releases/download/RtpMediaPlayer.Setup.0.1.25/RtpMediaPlayer.Setup.0.1.25.exe"

const features = [
  { icon: Music, title: "Geniş Müzik Kütüphanesi", description: "Binlerce lisanslı müzik parçasına anında erişim" },
  { icon: Radio, title: "Canlı Radyo Yayını", description: "Kesintisiz profesyonel radyo yayını" },
  { icon: Clock, title: "Zamanlama Özellikleri", description: "Otomatik program ve playlist yönetimi" },
  { icon: Wifi, title: "Bulut Tabanlı", description: "Her yerden erişim ve yönetim imkanı" },
  { icon: Settings, title: "Kolay Yönetim", description: "Kullanıcı dostu arayüz ve kontrol paneli" },
  { icon: Smartphone, title: "Mobil Uyumlu", description: "Tüm cihazlardan kontrol edebilme" },
]

const benefits = [
  {
    title: "Lisanslı Müzik Kütüphanesi",
    description:
      "Telif hakkı sorunu yaşamadan, geniş müzik arşivimizden işletmenize uygun müzikleri seçin ve yayınlayın.",
  },
  {
    title: "Otomatik Program Yönetimi",
    description:
      "Günün farklı saatlerinde farklı müzik türleri çalın. Sabah, öğle ve akşam için özel playlistler oluşturun.",
  },
  {
    title: "Profesyonel Ses Kalitesi",
    description: "Yüksek kaliteli ses dosyaları ile müşterilerinize en iyi dinleme deneyimini sunun.",
  },
]

export default function PlayerPage() {
  return (
    <main className="min-h-screen">
      <Header />

      <PageHero
        eyebrow="Profesyonel müzik yayın çözümü"
        title="RTP Medya"
        accent="Player"
        description="İşletmeniz için özel olarak tasarlanmış profesyonel müzik yayın platformu. Restoran, otel, mağaza ve cafe'niz için mükemmel müzik deneyimi."
      >
        <a href={DOWNLOAD_URL} download className="btn-primary">
          <Download size={18} />
          Windows İçin İndir
        </a>
        <p className="text-sm text-white/45">Windows 7 ve üzeri sürümlerle uyumludur.</p>
      </PageHero>

      <section className="pb-24 md:pb-32">
        <div className="container mx-auto px-4">
          <Reveal y={60}>
            <div className="relative mx-auto max-w-5xl" style={{ perspective: 1600 }}>
              <div className="absolute -inset-6 rounded-[3rem] bg-brand/25 blur-3xl" />
              <img
                src="/rtp-player-interface-v2.png"
                alt="RTP Medya Player Arayüzü"
                width={1200}
                height={675}
                className="relative h-auto w-full rounded-[1.5rem] border border-white/[0.12] shadow-[0_60px_120px_-40px_rgba(232,16,28,0.6)]"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="pb-24 md:pb-32">
        <div className="container mx-auto px-4">
          <SectionHeading
            eyebrow="Özellikler"
            title="İşletmenizin müzik yayınını"
            accent="profesyonelce yönetin."
          />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {features.map((f, i) => (
              <Reveal key={f.title} delay={(i % 3) * 0.1}>
                <SpotlightCard tilt className="h-full rounded-[1.75rem] p-8">
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl border border-brand/30 bg-brand/10 text-brand-glow">
                    <f.icon size={26} />
                  </span>
                  <h3 className="mt-6 text-xl font-semibold text-white">{f.title}</h3>
                  <p className="mt-3 leading-relaxed text-white/55">{f.description}</p>
                </SpotlightCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-24 md:pb-32">
        <div className="container mx-auto px-4">
          <SectionHeading eyebrow="Avantajlar" title="Neden" accent="RTP Medya Player?" />
          <div className="grid gap-6 md:grid-cols-3">
            {benefits.map((b, i) => (
              <Reveal key={b.title} delay={i * 0.1}>
                <SpotlightCard className="h-full rounded-[1.75rem] p-8">
                  <p className="font-mono text-sm text-brand-glow">{String(i + 1).padStart(2, "0")}</p>
                  <h3 className="mt-4 text-2xl font-semibold text-white">{b.title}</h3>
                  <p className="mt-3 leading-relaxed text-white/55">{b.description}</p>
                </SpotlightCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Hemen başlayın."
        description="RTP Medya Player’ı indirin ve işletmenizin müzik deneyimini dönüştürün."
        href="/teklif-al"
        label="Teklif alın"
      />
      <Footer />
    </main>
  )
}
