"use client"

import Link from "next/link"
import { ArrowRight, Radio, Volume2, MapPin } from "lucide-react"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
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
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] })
  const y = useTransform(scrollYProgress, [0, 1], [0, 140])
  const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  return (
    <section ref={ref} id="home" className="relative isolate min-h-screen overflow-hidden pt-32 pb-20">
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

      <motion.div style={{ y, opacity: fade }} className="container relative mx-auto px-4">
        <div className="grid items-center gap-16 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="mb-8 inline-flex items-center gap-3 rounded-full border border-white/[0.1] bg-white/[0.04] px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/70 backdrop-blur-md"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="ping-ring absolute inline-flex h-full w-full rounded-full bg-brand-glow" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-brand-glow" />
              </span>
              20+ yıl · Kesintisiz yayın
            </motion.p>

            <h1 className="font-display text-[2.8rem] text-white sm:text-6xl lg:text-[5.4rem]">
              <WordReveal text="Markanızın sesini" delay={0.1} />
              <br />
              <WordReveal text="geleceğe taşıyoruz." className="text-gradient-red" delay={0.35} />
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="mt-8 max-w-xl text-lg leading-relaxed text-white/60 md:text-xl"
            >
              Kurumsal radyo, işletme içi müzik yayını ve profesyonel seslendirme. Müzik, anons ve ses kimliğiniz tek
              merkezden, kesintisiz yönetilir.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
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
              transition={{ duration: 1, delay: 1.2 }}
              className="mt-16 grid max-w-xl grid-cols-3 gap-6 border-t border-white/[0.1] pt-8"
            >
              {stats.map((s) => (
                <div key={s.label}>
                  <dt className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
                    <Counter value={s.value} />
                  </dt>
                  <dd className="mt-1 text-xs text-white/45 md:text-sm">{s.label}</dd>
                </div>
              ))}
            </motion.dl>
          </div>

          {/* Yüzen yayın paneli */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotateY: -18 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 1.1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="float-y relative hidden lg:block"
            style={{ perspective: 1200 }}
          >
            <div className="absolute -inset-6 rounded-[3rem] bg-brand/20 blur-3xl" />
            <div className="neon-border glass relative rounded-[2rem] p-7">
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-2 text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-white/60">
                  <Radio size={14} className="text-brand-glow" />
                  Canlı yayın
                </span>
                <span className="rounded-full bg-brand/20 px-3 py-1 text-xs font-semibold text-brand-glow">7/24</span>
              </div>

              <Equalizer bars={28} className="mt-8 h-36" />

              <div className="mt-8 flex items-end justify-between border-t border-white/[0.08] pt-6">
                <div>
                  <p className="text-2xl font-semibold tracking-tight text-white">RTP Medya</p>
                  <p className="mt-1 text-sm text-white/50">İşletmenizin ses dünyası</p>
                </div>
                <Volume2 className="text-white/40" size={22} />
              </div>

              <div className="mt-6 grid grid-cols-2 gap-3">
                <div className="rounded-2xl border border-white/[0.08] bg-white/[0.03] p-4">
                  <MapPin size={16} className="text-brand-glow" />
                  <p className="mt-2 text-xs text-white/45">Şube bazlı akış</p>
                  <p className="text-sm font-semibold text-white">Tek merkezden</p>
                </div>
                <div className="rounded-2xl border border-white/[0.08] bg-white/[0.03] p-4">
                  <Radio size={16} className="text-brand-glow" />
                  <p className="mt-2 text-xs text-white/45">Müzik kütüphanesi</p>
                  <p className="text-sm font-semibold text-white">%100 lisanslı</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 md:block" aria-hidden="true">
        <div className="flex h-10 w-6 justify-center rounded-full border border-white/25 pt-2">
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
