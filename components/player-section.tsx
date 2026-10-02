import Link from "next/link"
import { ArrowRight, Clock, Wifi, Settings, Smartphone } from "lucide-react"
import { Reveal } from "@/components/fx/reveal"
import { SpotlightCard } from "@/components/fx/spotlight-card"

const features = [
  { icon: Clock, title: "Zamanlama", text: "Playlist ve anonslar belirlediğiniz saatlerde otomatik devreye girer." },
  { icon: Wifi, title: "Bulut tabanlı", text: "Her şubeyi, her yerden tek panelden yönetin." },
  { icon: Settings, title: "Kolay yönetim", text: "Kullanıcı dostu arayüz ve sade bir kontrol paneli." },
  { icon: Smartphone, title: "Mobil uyumlu", text: "Tüm cihazlardan erişin ve kontrol edin." },
]

export function PlayerSection() {
  return (
    <section id="player" className="relative py-28 md:py-40">
      <div className="container mx-auto px-4">
        <div className="neon-border relative overflow-hidden rounded-[2.5rem] border border-white/[0.08] bg-gradient-to-br from-[#1a0709] via-[#0f0809] to-[#09060a]">
          <div className="pointer-events-none absolute -right-32 -top-32 h-[500px] w-[500px] rounded-full bg-brand/25 blur-[120px]" />
          <div className="grid items-center gap-14 p-8 md:p-14 lg:grid-cols-2">
            <div className="relative">
              <Reveal>
                <p className="eyebrow mb-5">RTP Medya Player</p>
                <h2 className="font-display text-4xl text-white md:text-6xl">
                  Müziğin ritmi. <span className="text-gradient-red">Tek merkezden.</span>
                </h2>
                <p className="mt-6 max-w-lg text-lg leading-relaxed text-white/55">
                  Müzik, anons ve ses seviyesi şubenize özel bir akışla yönetilir. Kurulumu kolay, kullanımı sade.
                </p>
              </Reveal>

              <div className="mt-10 grid gap-4 sm:grid-cols-2">
                {features.map((f, i) => (
                  <Reveal key={f.title} delay={0.1 + i * 0.08}>
                    <SpotlightCard className="h-full rounded-2xl p-5">
                      <f.icon className="text-brand-glow" size={22} />
                      <h3 className="mt-3 font-semibold text-white">{f.title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-white/50">{f.text}</p>
                    </SpotlightCard>
                  </Reveal>
                ))}
              </div>

              <Reveal delay={0.5}>
                <Link href="/player" className="btn-primary mt-10">
                  Player’ı keşfet
                  <ArrowRight size={18} />
                </Link>
              </Reveal>
            </div>

            <Reveal x={40} y={0} delay={0.2}>
              <div className="relative" style={{ perspective: 1400 }}>
                <div className="absolute -inset-4 rounded-[2rem] bg-brand/25 blur-3xl" />
                <img
                  src="/rtp-player-interface-v2.png"
                  alt="RTP Medya Player arayüzü"
                  className="relative w-full rounded-[1.5rem] border border-white/[0.12] shadow-[0_50px_100px_-30px_rgba(232,16,28,0.55)] transition-transform duration-700 hover:[transform:rotateY(-6deg)_rotateX(3deg)]"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
