"use client"

import Link from "next/link"
import { ArrowRight, Radio, Volume2, MapPin } from "lucide-react"
import { motion } from "framer-motion"
import { WaveCanvas } from "@/components/fx/wave-canvas"
import { WordReveal } from "@/components/fx/reveal"
import { Equalizer } from "@/components/fx/equalizer"
import { Counter } from "@/components/fx/counter"

const stats = [
  { value: "20+", label: "yıllık deneyim" },
  { value: "500+", label: "mutlu müşteri" },
  { value: "46.000+", label: "tamamlanan proje" },
]

export function HeroSection() {
  return (
    <section id="home" className="relative isolate min-h-screen overflow-hidden pt-32 pb-20">
      <div className="aurora">
        <span />
        <span />
        <span />
      </div>
      <div className="bg-grid absolute inset-0 -z-10" />
      <div className="absolute inset-0 -z-10">
        <WaveCanvas />
      </div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-background to-transparent" />

      <div className="container relative mx-auto px-4">
        <div className="grid items-center gap-16 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="mb-8 inline-flex items-center gap-3 rounded-full border border-foreground/[0.1] bg-foreground/[0.04] px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-foreground/70"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="ping-ring absolute inline-flex h-full w-full rounded-full bg-brand-glow" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-brand-glow" />
              </span>
              20+ yıl · Kesintisiz yayın
            </motion.p>

            <h1 className="font-display text-[2.6rem] text-foreground sm:text-6xl lg:text-[4.3rem] xl:text-[4.8rem]">
              <WordReveal text="Kurumsal radyo ile" delay={0.05} />
              <br />
              <WordReveal text="markanızın sesini duyurun." className="text-gradient-red" delay={0.2} />
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-8 max-w-xl text-lg leading-relaxed text-foreground/60 md:text-xl"
            >
              2005’ten beri işletme içi müzik yayını, anons ve profesyonel seslendirme. Mağaza, restoran, otel ve AVM’niz için
              lisanslı müzik ve ses kimliği tek merkezden, kesintisiz yönetilir.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-10 flex flex-col gap-4 sm:flex-row"
            >
              <Link href="/teklif-al" className="btn-primary">
                Ücretsiz teklif al
                <ArrowRight size={18} />
              </Link>
              <Link href="/player" className="btn-ghost">
                RTP Medya Player’ı keşfet
              </Link>
            </motion.div>

            <motion.dl
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-16 grid max-w-xl grid-cols-3 gap-6 border-t border-foreground/[0.1] pt-8"
            >
              {stats.map((s) => (
                <div key={s.label}>
                  <dt className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
                    <Counter value={s.value} />
                  </dt>
                  <dd className="mt-1 text-xs text-foreground/45 md:text-sm">{s.label}</dd>
                </div>
              ))}
            </motion.dl>
          </div>

          {/* Yüzen yayın paneli */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative hidden lg:block"
          >
            <div className="neon-border glass relative rounded-[2rem] p-7">
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-2 text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-foreground/60">
                  <Radio size={14} className="text-brand-glow" />
                  Canlı yayın
                </span>
                <span className="rounded-full bg-brand/20 px-3 py-1 text-xs font-semibold text-brand-glow">7/24</span>
              </div>

              <Equalizer bars={24} className="mt-8 h-36" />

              <div className="mt-8 flex items-end justify-between border-t border-foreground/[0.08] pt-6">
                <div>
                  <p className="text-2xl font-semibold tracking-tight text-foreground">RTP Medya</p>
                  <p className="mt-1 text-sm text-foreground/50">İşletmenizin ses dünyası</p>
                </div>
                <Volume2 className="text-foreground/40" size={22} />
              </div>

              <div className="mt-6 grid grid-cols-2 gap-3">
                <div className="rounded-2xl border border-foreground/[0.08] bg-foreground/[0.03] p-4">
                  <MapPin size={16} className="text-brand-glow" />
                  <p className="mt-2 text-xs text-foreground/45">Şube bazlı akış</p>
                  <p className="text-sm font-semibold text-foreground">Tek merkezden</p>
                </div>
                <div className="rounded-2xl border border-foreground/[0.08] bg-foreground/[0.03] p-4">
                  <Radio size={16} className="text-brand-glow" />
                  <p className="mt-2 text-xs text-foreground/45">Müzik kütüphanesi</p>
                  <p className="text-sm font-semibold text-foreground">%100 lisanslı</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 md:block" aria-hidden="true">
        <div className="flex h-10 w-6 justify-center rounded-full border border-foreground/25 pt-2">
          <motion.span
            animate={{ y: [0, 14, 0], opacity: [1, 0.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="h-2 w-1 rounded-full bg-brand-glow"
          />
        </div>
      </div>
    </section>
  )
}
