"use client"

import { useState } from "react"
import Link from "next/link"
import { AnimatePresence, motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"
import { Reveal } from "@/components/fx/reveal"

const sectors = [
  {
    name: "Kafe & restoran",
    title: "Bir fincan kahve. Biraz sohbet. Tam yerinde bir müzik.",
    text: "Sabah kahvesine yumuşak tonlar, akşam yemeğine sıcak bir ritim. Müziğiniz misafirlerinizin sohbetine eşlik eder.",
    image: "/cafe-interior.jpg",
    link: "/hizmet-alanlari/kafeterya",
  },
  {
    name: "Mağaza & perakende",
    title: "Alışverişin ritmini siz belirleyin.",
    text: "Marka kimliğinize uygun seçkiler ve kampanya anonsları, müşterinizin mağazadaki deneyimini güçlendirir.",
    image: "/modern-retail-store-interior-with-customers-shoppi.jpg",
    link: "/hizmet-alanlari/magaza",
  },
  {
    name: "Otel & spa",
    title: "Misafiriniz kapıdan girdiği an huzur başlasın.",
    text: "Lobi, restoran ve spa alanları için sakin, kaliteli ve kesintisiz bir ses atmosferi.",
    image: "/hotel-lobby.jpg",
    link: "/hizmet-alanlari/otel",
  },
  {
    name: "Spor salonu",
    title: "Her antrenmana doğru tempo.",
    text: "Motivasyonu yüksek tutan enerjik seçkiler ve gün içi akışa göre değişen yayın planı.",
    image: "/gym-spa.jpg",
    link: "/hizmet-alanlari/gym-spa",
  },
  {
    name: "Market",
    title: "Reyonlar arasında dikkat çeken anonslar.",
    text: "Kampanya ve ürün duyuruları, müzik akışının içine doğal biçimde yerleşir.",
    image: "/market-interior.jpg",
    link: "/hizmet-alanlari/market",
  },
  {
    name: "AVM",
    title: "Binlerce ziyaretçi, tek bir uyumlu atmosfer.",
    text: "Ortak alanlar, mağazalar ve etkinlik noktaları için merkezi yönetilen yayın.",
    image: "/avm-interior.jpg",
    link: "/hizmet-alanlari/avm",
  },
]

export function SectorsSection() {
  const [active, setActive] = useState(0)
  const s = sectors[active]

  return (
    <section id="sectors" className="relative py-28 md:py-40">
      <div className="container mx-auto px-4">
        <SectionHeading
          eyebrow="Sizin mekânınız, sizin sesiniz"
          title="Tek bir tarz değil."
          accent="Size ait bir atmosfer."
          description="Sektörünüzü seçin, işletmenizin ses dünyasını birlikte keşfedelim."
        />

        <Reveal>
          <div className="mb-8 flex flex-wrap gap-2" role="tablist">
            {sectors.map((x, i) => (
              <button
                key={x.name}
                role="tab"
                aria-selected={active === i}
                onClick={() => setActive(i)}
                className={`relative rounded-full px-5 py-2.5 text-sm font-semibold transition-colors ${
                  active === i ? "text-white" : "text-white/55 hover:text-white"
                }`}
              >
                {active === i ? (
                  <motion.span
                    layoutId="sector-pill"
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-brand-hover to-brand shadow-[0_10px_30px_-10px_rgba(232,16,28,0.9)]"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                ) : (
                  <span className="absolute inset-0 rounded-full border border-white/[0.12] bg-white/[0.03]" />
                )}
                <span className="relative">{x.name}</span>
              </button>
            ))}
          </div>

          <div className="glass grid overflow-hidden rounded-[2rem] lg:grid-cols-2">
            <div className="relative min-h-[300px] overflow-hidden lg:min-h-[460px]">
              <AnimatePresence mode="popLayout">
                <motion.img
                  key={s.image}
                  src={s.image}
                  alt={s.name}
                  initial={{ opacity: 0, scale: 1.12 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </AnimatePresence>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#0e090b] max-lg:bg-gradient-to-b" />
            </div>
            <div className="flex flex-col justify-center p-8 md:p-14">
              <AnimatePresence mode="wait">
                <motion.div
                  key={s.name}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.35 }}
                >
                  <p className="eyebrow mb-5">{s.name}</p>
                  <h3 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">{s.title}</h3>
                  <p className="mt-5 text-lg leading-relaxed text-white/55">{s.text}</p>
                  <Link
                    href={s.link}
                    className="group mt-8 inline-flex items-center gap-2 font-semibold text-brand-glow hover:text-white"
                  >
                    Bu sektör için detaylar
                    <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                  </Link>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
