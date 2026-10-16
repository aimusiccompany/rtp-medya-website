import Link from "next/link"
import { CheckCircle2, Music, Volume2, Radio, ArrowRight } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PageHero } from "@/components/page-hero"
import { CtaBand } from "@/components/cta-band"
import { Reveal } from "@/components/fx/reveal"
import { SpotlightCard } from "@/components/fx/spotlight-card"
import { SectionHeading } from "@/components/section-heading"
import Image from "next/image"
import { SectorGuide } from "@/components/sector-guide"

interface Benefit {
  title: string
  description: string
}

interface ServicePageTemplateProps {
  slug: string
  title: string
  description: string
  image?: string
  features: string[]
  benefits: Benefit[]
  ctaTitle: string
  ctaDescription: string
  whyTitle?: string
  whyParagraphs?: string[]
}

const icons = [Music, Volume2, Radio]

const defaultWhy = [
  "RTP Medya olarak işletmenizin konseptine ve hedef kitlenize özel müzik programları hazırlıyoruz. 2005 yılından bu yana edindiğimiz deneyimle, 46.000'den fazla projede çözüm sunduk.",
  "Müzik kataloğunun kullanım alanı ve lisans kapsamı teklif ve sözleşmede belirtilir. 7/24 kesintisiz yayın, uzaktan yönetim ve profesyonel destek ile hizmetinizdeyiz.",
]

/** Tüm "hizmet alanı" sayfalarının ortak şablonu. Header/Footer burada render edilir. */
export function ServicePageTemplate({
  slug,
  title,
  description,
  image,
  features,
  benefits,
  ctaTitle,
  ctaDescription,
  whyTitle = "Profesyonel Müzik Çözümü",
  whyParagraphs = defaultWhy,
}: ServicePageTemplateProps) {
  return (
    <main className="min-h-screen">
      <Header />

      <nav aria-label="İçerik yolu" className="container mx-auto px-4 pt-28 text-sm text-foreground/70">
        <ol className="flex flex-wrap gap-2">
          <li><Link href="/" className="hover:underline">Ana Sayfa</Link></li>
          <li aria-hidden="true">/</li>
          <li aria-current="page">{title}</li>
        </ol>
      </nav>

      <PageHero eyebrow="Hizmet alanı" title={title} description={description}>
        <Link href="/teklif-al" className="btn-primary">
          Ücretsiz teklif alın
          <ArrowRight size={18} />
        </Link>
        <Link href="/iletisim" className="btn-ghost">
          İletişime geçin
        </Link>
      </PageHero>

      <section className="relative pb-24 md:pb-32">
        <div className="container mx-auto px-4">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <Reveal x={-30} y={0}>
              <div className="group relative overflow-hidden rounded-[2rem] border border-foreground/[0.1]">
                <Image width={900} height={630} sizes="(max-width: 1024px) 100vw, 50vw"
                  src={image || "/placeholder.svg?height=400&width=600"}
                  alt={title}
                  className="h-[420px] w-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-brand/10" />
              </div>
            </Reveal>
            <Reveal x={30} y={0} delay={0.1}>
              <p className="eyebrow mb-5">Neden biz?</p>
              <h2 className="font-display text-3xl text-foreground md:text-5xl">{whyTitle}</h2>
              <div className="mt-6 space-y-4 text-lg leading-relaxed text-foreground/55">
                {whyParagraphs.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="relative pb-24 md:pb-32">
        <div className="container mx-auto px-4">
          <SectionHeading eyebrow="Özellikler" title="Neler" accent="sunuyoruz?" />
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <Reveal key={feature} delay={(index % 3) * 0.08}>
                <SpotlightCard className="h-full rounded-2xl p-6">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 shrink-0 text-brand-glow" size={20} />
                    <p className="text-sm leading-relaxed text-foreground/75">{feature}</p>
                  </div>
                </SpotlightCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative pb-24 md:pb-32">
        <div className="container mx-auto px-4">
          <SectionHeading eyebrow="Avantajlar" title="Size" accent="ne kazandırır?" />
          <div className="grid gap-6 md:grid-cols-3">
            {benefits.map((benefit, index) => {
              const Icon = icons[index % icons.length]
              return (
                <Reveal key={benefit.title} delay={index * 0.1}>
                  <SpotlightCard tilt className="h-full rounded-[1.75rem] p-8">
                    <span className="flex h-14 w-14 items-center justify-center rounded-2xl border border-brand/30 bg-brand/10 text-brand-glow">
                      <Icon size={26} />
                    </span>
                    <h3 className="mt-6 text-xl font-semibold text-foreground">{benefit.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-foreground/55">{benefit.description}</p>
                  </SpotlightCard>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      <SectorGuide slug={slug} title={title} />
      <CtaBand title={ctaTitle} description={`${ctaDescription} Ücretsiz demo ve danışmanlık için formu doldurun.`} label="Hemen başlayın" />
      <Footer />
    </main>
  )
}
