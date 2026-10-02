import Link from "next/link"
import { ArrowRight, Clock, Wifi, Settings, Smartphone } from "lucide-react"

const features = [
  { icon: Clock, title: "Zamanlama", text: "Playlist ve anonslar belirlediğiniz saatlerde otomatik devreye girer." },
  { icon: Wifi, title: "Bulut tabanlı", text: "Her şubeyi, her yerden tek panelden yönetin." },
  { icon: Settings, title: "Kolay yönetim", text: "Kullanıcı dostu arayüz ve sade bir kontrol paneli." },
  { icon: Smartphone, title: "Mobil uyumlu", text: "Tüm cihazlardan erişin ve kontrol edin." },
]

export function PlayerSection() {
  return (
    <section id="player" className="py-24 md:py-32">
      <div className="container mx-auto px-4">
        <div className="overflow-hidden rounded-[2.5rem] border border-brand-line bg-gradient-to-br from-white via-brand-wash to-[#f7e0dd]">
          <div className="grid items-center gap-12 p-8 md:p-14 lg:grid-cols-2">
            <div>
              <p className="rtp-eyebrow mb-4">RTP Medya Player</p>
              <h2 className="rtp-display text-brand-ink text-4xl md:text-6xl">
                Müziğin ritmi.
                <br />
                <span className="text-brand">Tek merkezden.</span>
              </h2>
              <p className="mt-6 max-w-lg text-lg leading-relaxed text-brand-muted">
                Müzik, anons ve ses seviyesi şubenize özel bir akışla yönetilir. Kurulumu kolay, kullanımı sade.
              </p>

              <div className="mt-10 grid gap-5 sm:grid-cols-2">
                {features.map((f) => (
                  <div key={f.title} className="rounded-2xl border border-brand-line bg-white/80 p-5">
                    <f.icon className="text-brand" size={22} />
                    <h3 className="mt-3 font-semibold text-brand-ink">{f.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-brand-muted">{f.text}</p>
                  </div>
                ))}
              </div>

              <Link
                href="/player"
                className="mt-10 inline-flex items-center gap-2 rounded-2xl bg-brand px-7 py-4 font-semibold text-white transition-colors hover:bg-brand-hover"
              >
                Player’ı indir
                <ArrowRight size={18} />
              </Link>
            </div>

            <div className="relative">
              <img
                src="/rtp-player-interface-v2.png"
                alt="RTP Medya Player arayüzü"
                className="w-full rounded-[1.5rem] border border-brand-line bg-white shadow-[0_40px_80px_-40px_rgba(138,28,28,0.5)]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
