import Link from "next/link"
import type { Metadata } from "next"
import { Users, Target, Award, TrendingUp, ArrowRight } from "lucide-react"
import { JsonLd } from "@/components/json-ld"
import { breadcrumbLd, serviceLd } from "@/lib/site"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PageHero } from "@/components/page-hero"
import { CtaBand } from "@/components/cta-band"
import { AiMusicBanner } from "@/components/ai-music-banner"
import { SectionHeading } from "@/components/section-heading"
import { Reveal } from "@/components/fx/reveal"
import { SpotlightCard } from "@/components/fx/spotlight-card"
import { Counter } from "@/components/fx/counter"

export const metadata: Metadata = {
  title: "Hakkımızda - 2005'ten Beri Kurumsal Ses ve Müzik Yayıncılığı",
  description:
    "RTP Medya, 2005 yılından beri kurumsal radyo ve seslendirme çözümleriyle işletmelere hizmet veriyor. Misyonumuz, vizyonumuz ve rakamlarla RTP Medya.",
  alternates: { canonical: "/hakkimizda" },
  openGraph: { url: "/hakkimizda", title: "Hakkımızda - 2005'ten Beri Kurumsal Ses ve Müzik Yayıncılığı", description: "RTP Medya, 2005 yılından beri kurumsal radyo ve seslendirme çözümleriyle işletmelere hizmet veriyor. Misyonumuz, vizyonumuz ve rakamlarla RTP Medya." },
}

const stats = [
  { value: "20+", label: "Yıllık Tecrübe" },
  { value: "46.000+", label: "Tamamlanan Proje" },
  { value: "500+", label: "Mutlu Müşteri" },
  { value: "24/7", label: "Kesintisiz Destek" },
]

const reasons = [
  {
    icon: Users,
    title: "Uzman Ekip",
    text: "Alanında uzman ses mühendisleri ve müzik editörleriyle profesyonel hizmet sunuyoruz.",
  },
  {
    icon: Award,
    title: "Telif Güvencesi",
    text: "Tüm müziklerimiz lisanslıdır, telif hakkı konusunda tam güvence sağlıyoruz.",
  },
  {
    icon: Target,
    title: "Özel Çözümler",
    text: "Her işletmenin ihtiyacına özel, markanıza uygun müzik ve ses çözümleri üretiyoruz.",
  },
]

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <JsonLd data={[breadcrumbLd([{ name: "Hakkımızda", path: "/hakkimizda" }])]} />
      <Header />

      <PageHero
        eyebrow="Biz kimiz"
        title="Sesin gücünü"
        accent="20 yıldır biliyoruz."
        description="2005 yılından beri profesyonel ses ve müzik yayıncılığı alanında hizmet veren RTP Medya, kurumsal radyo ve seslendirme çözümleriyle sektörde öncü konumdadır."
      />

      <section className="pb-24 md:pb-32">
        <div className="container mx-auto px-4">
          <div className="grid gap-6 md:grid-cols-2">
            {[
              {
                icon: Target,
                title: "Misyonumuz",
                text: "İşletmelere özel, profesyonel ve telif hakkı güvenli müzik yayını ve seslendirme hizmetleri sunarak, markaların müşteri deneyimini iyileştirmek ve kurumsal kimliklerini güçlendirmek.",
              },
              {
                icon: TrendingUp,
                title: "Vizyonumuz",
                text: "Türkiye'nin en güvenilir kurumsal ses ve müzik yayıncılığı markası olmak, teknolojik yenilikleri takip ederek müşterilerimize en iyi hizmeti sunmak.",
              },
            ].map((c, i) => (
              <Reveal key={c.title} delay={i * 0.12}>
                <SpotlightCard className="h-full rounded-[2rem] p-8 md:p-12">
                  <span className="flex h-16 w-16 items-center justify-center rounded-2xl border border-brand/30 bg-brand/10 text-brand-glow">
                    <c.icon size={30} />
                  </span>
                  <h2 className="font-display mt-8 text-3xl text-foreground md:text-4xl">{c.title}</h2>
                  <p className="mt-4 text-lg leading-relaxed text-foreground/55">{c.text}</p>
                </SpotlightCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-24 md:pb-32">
        <div className="container mx-auto px-4">
          <SectionHeading
            eyebrow="Rakamlarla RTP Medya"
            title="20 yıllık tecrübemizle"
            accent="sektörde fark yaratıyoruz."
          />
          <div className="grid grid-cols-2 gap-5 lg:grid-cols-4">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 0.08}>
                <SpotlightCard className="h-full rounded-[1.75rem] p-7 text-center md:p-9">
                  <p className="text-gradient text-4xl font-semibold tracking-tight md:text-5xl">
                    <Counter value={s.value} />
                  </p>
                  <p className="mt-2 text-sm text-foreground/50">{s.label}</p>
                </SpotlightCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-24 md:pb-32">
        <div className="container mx-auto px-4">
          <SectionHeading
            eyebrow="Neden RTP Medya?"
            title="Profesyonel ekibimiz ve altyapımızla"
            accent="fark yaratıyoruz."
          />
          <div className="grid gap-6 md:grid-cols-3">
            {reasons.map((r, i) => (
              <Reveal key={r.title} delay={i * 0.1}>
                <SpotlightCard className="h-full rounded-[1.75rem] p-8">
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl border border-brand/30 bg-brand/10 text-brand-glow">
                    <r.icon size={26} />
                  </span>
                  <h3 className="mt-6 text-xl font-semibold text-foreground">{r.title}</h3>
                  <p className="mt-3 leading-relaxed text-foreground/55">{r.text}</p>
                </SpotlightCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <AiMusicBanner />

      <CtaBand
        title="Birlikte çalışmaya hazır mısınız?"
        description="İşletmeniz için özel müzik ve ses çözümlerimizi keşfedin."
        label="Hemen teklif alın"
      />
      <Footer />
    </main>
  )
}
