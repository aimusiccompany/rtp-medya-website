"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

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
    <section id="sectors" className="rtp-wash-warm py-24 md:py-32">
      <div className="container mx-auto px-4">
        <div className="mb-12 max-w-3xl">
          <p className="rtp-eyebrow mb-4">Sizin mekânınız, sizin sesiniz</p>
          <h2 className="rtp-display text-brand-ink text-4xl md:text-6xl">
            Tek bir tarz değil.
            <br />
            Size ait bir atmosfer.
          </h2>
          <p className="mt-6 text-lg text-brand-muted">
            Sektörünüzü seçin, işletmenizin ses dünyasını birlikte keşfedelim.
          </p>
        </div>

        <div className="mb-8 flex flex-wrap gap-2" role="tablist">
          {sectors.map((x, i) => (
            <button
              key={x.name}
              role="tab"
              aria-selected={active === i}
              onClick={() => setActive(i)}
              className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-colors ${
                active === i
                  ? "bg-brand text-white"
                  : "border border-brand-line bg-white text-brand-muted hover:text-brand-ink"
              }`}
            >
              {x.name}
            </button>
          ))}
        </div>

        <div className="grid overflow-hidden rounded-[2rem] border border-brand-line bg-white lg:grid-cols-2">
          <div className="relative min-h-[280px] lg:min-h-[420px]">
            <img
              key={s.image}
              src={s.image}
              alt={s.name}
              className="absolute inset-0 h-full w-full object-cover animate-fade-in"
            />
          </div>
          <div className="flex flex-col justify-center p-8 md:p-14">
            <p className="rtp-eyebrow mb-4 text-brand">{s.name}</p>
            <h3 className="text-3xl md:text-4xl font-medium tracking-tight text-brand-ink">{s.title}</h3>
            <p className="mt-5 text-lg leading-relaxed text-brand-muted">{s.text}</p>
            <Link
              href={s.link}
              className="mt-8 inline-flex items-center gap-2 font-semibold text-brand hover:text-brand-hover"
            >
              Bu sektör için detaylar
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
