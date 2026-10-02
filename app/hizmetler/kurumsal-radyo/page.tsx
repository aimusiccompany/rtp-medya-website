import Link from "next/link"
import type { Metadata } from "next"
import { Radio, Music, Headphones, Users, Clock, BarChart, ArrowRight } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PageHero } from "@/components/page-hero"
import { CtaBand } from "@/components/cta-band"
import { SectionHeading } from "@/components/section-heading"
import { Reveal } from "@/components/fx/reveal"
import { SpotlightCard } from "@/components/fx/spotlight-card"

export const metadata: Metadata = {
  title: "Kurumsal Radyo | RTP Medya",
  description: "İşletmenize özel profesyonel radyo yayını. Markanızın sesini duyurun, müşterilerinizle duygusal bağ kurun.",
}

const benefits = [
  { icon: Music, title: "Özel Müzik Seçimi", description: "Markanıza ve hedef kitlenize özel müzik programları" },
  { icon: Headphones, title: "Profesyonel Prodüksiyon", description: "Stüdyo kalitesinde ses ve yayın standardı" },
  { icon: Users, title: "Marka Kimliği", description: "Kurumsal kimliğinizi yansıtan özel içerikler" },
  { icon: Clock, title: "7/24 Yayın", description: "Kesintisiz müzik ve içerik akışı" },
  { icon: BarChart, title: "Raporlama", description: "Detaylı yayın istatistikleri ve analizler" },
  { icon: Radio, title: "Canlı Yayın", description: "Özel etkinlikler için canlı yayın desteği" },
]

export default function KurumsalRadyoPage() {
  return (
    <main className="min-h-screen">
      <Header />

      <PageHero
        eyebrow="Hizmetlerimiz"
        title="Kurumsal"
        accent="Radyo"
        description="İşletmeniz için özel olarak tasarlanmış profesyonel radyo yayını. Markanızın sesini duyurun, müşterilerinizle duygusal bağ kurun."
      >
        <Link href="/teklif-al" className="btn-primary">
          Teklif alın
          <ArrowRight size={18} />
        </Link>
        <Link href="/player" className="btn-ghost">
          Player’ı keşfet
        </Link>
      </PageHero>

      <section className="pb-24 md:pb-32">
        <div className="container mx-auto px-4">
          <Reveal>
            <div className="neon-border glass mx-auto max-w-5xl rounded-[2rem] p-8 md:p-14">
              <h2 className="font-display text-3xl text-white md:text-5xl">Kurumsal radyo nedir?</h2>
              <p className="mt-6 text-lg leading-relaxed text-white/60">
                Kurumsal radyo, işletmenizin kimliğini yansıtan, hedef kitlenize özel olarak hazırlanmış profesyonel
                bir müzik ve içerik yayınıdır. Mağazalarınızda, otellerinizde, restoranlarınızda veya ofislerinizde
                çalan müzikler ve anonslar, markanızın bir parçası haline gelir.
              </p>
              <p className="mt-5 text-lg leading-relaxed text-white/60">
                RTP Medya olarak, sektörünüze ve markanıza özel müzik programları oluşturuyor, profesyonel
                seslendirmelerle zenginleştiriyor ve kesintisiz yayın sunuyoruz.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="pb-24 md:pb-32">
        <div className="container mx-auto px-4">
          <SectionHeading eyebrow="Avantajlar" title="Kurumsal radyo ile" accent="işletmenize değer katın." />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {benefits.map((b, i) => (
              <Reveal key={b.title} delay={(i % 3) * 0.1}>
                <SpotlightCard tilt className="h-full rounded-[1.75rem] p-8">
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl border border-brand/30 bg-brand/10 text-brand-glow">
                    <b.icon size={26} />
                  </span>
                  <h3 className="mt-6 text-xl font-semibold text-white">{b.title}</h3>
                  <p className="mt-3 leading-relaxed text-white/55">{b.description}</p>
                </SpotlightCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Hemen başlayın."
        description="Kurumsal radyo çözümlerimiz hakkında detaylı bilgi almak için bizimle iletişime geçin."
        href="/iletisim"
        label="İletişime geç"
      />
      <Footer />
    </main>
  )
}
