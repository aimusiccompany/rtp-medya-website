import Link from "next/link"
import type { Metadata } from "next"
import { Mic, Video, Phone, Radio, Volume2, Users, ArrowRight } from "lucide-react"
import { JsonLd } from "@/components/json-ld"
import { breadcrumbLd, serviceLd } from "@/lib/site"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PageHero } from "@/components/page-hero"
import { CtaBand } from "@/components/cta-band"
import { SectionHeading } from "@/components/section-heading"
import { Reveal } from "@/components/fx/reveal"
import { SpotlightCard } from "@/components/fx/spotlight-card"

export const metadata: Metadata = {
  title: "Profesyonel Seslendirme - Reklam, Santral ve Anons Seslendirme",
  description:
    "Reklam, tanıtım filmi, telefon santrali ve mağaza anonsları için geniş seslendirmen kadrosu ve stüdyo kalitesinde kayıt. Hemen teklif alın.",
  alternates: { canonical: "/hizmetler/profesyonel-seslendirme" },
  openGraph: { url: "/hizmetler/profesyonel-seslendirme", title: "Profesyonel Seslendirme - Reklam, Santral ve Anons Seslendirme", description: "Reklam, tanıtım filmi, telefon santrali ve mağaza anonsları için geniş seslendirmen kadrosu ve stüdyo kalitesinde kayıt. Hemen teklif alın." },
}

const services = [
  { icon: Video, title: "Reklam Seslendirme", description: "TV ve radyo reklamları için profesyonel ses sanatçıları" },
  { icon: Phone, title: "Santral Seslendirme", description: "Kurumsal telefon santralleriniz için özel sesler" },
  { icon: Radio, title: "Anons & Jingle", description: "Mağaza içi anonslar ve akılda kalıcı jingle'lar" },
  { icon: Volume2, title: "Tanıtım Filmi", description: "Kurumsal tanıtım videoları için seslendirme" },
  { icon: Users, title: "Geniş Seslendirmen Kadrosu", description: "Farklı ton ve karakterde profesyonel sesler" },
  { icon: Mic, title: "Stüdyo Kalitesi", description: "Profesyonel kayıt ekipmanları ve akustik ortam" },
]

const steps = [
  { title: "Proje Brifingi", text: "İhtiyacınızı, hedef kitlenizi ve kullanım alanını netleştiririz." },
  { title: "Seslendirmen Seçimi", text: "Markanızın tonuna en uygun ses ve karakteri birlikte belirleriz." },
  { title: "Kayıt & Prodüksiyon", text: "Stüdyoda kayıt yapılır; miks ve mastering ile ses cilalanır." },
  { title: "Teslimat", text: "Kullanacağınız mecraya uygun formatlarda hızlıca teslim edilir." },
]

export default function ProfesyonelSeslendirmePage() {
  return (
    <main className="min-h-screen">
      <JsonLd data={[breadcrumbLd([{ name: "Profesyonel Seslendirme", path: "/hizmetler/profesyonel-seslendirme" }]), serviceLd({ name: "Profesyonel Seslendirme", serviceType: "Reklam, santral ve anons seslendirme", description: "Geniş seslendirmen kadrosu ile stüdyo kalitesinde seslendirme.", path: "/hizmetler/profesyonel-seslendirme" })]} />
      <Header />

      <PageHero
        eyebrow="Hizmetlerimiz"
        title="Profesyonel"
        accent="Seslendirme"
        description="Markanıza ses verin! Reklam, tanıtım, santral ve anons için geniş seslendirmen kadromuzla her türlü projenize profesyonel çözümler sunuyoruz."
      >
        <Link href="/teklif-al" className="btn-primary">
          Teklif alın
          <ArrowRight size={18} />
        </Link>
        <Link href="/iletisim" className="btn-ghost">
          İletişime geç
        </Link>
      </PageHero>

      <section className="pb-24 md:pb-32">
        <div className="container mx-auto px-4">
          <Reveal>
            <div className="neon-border glass mx-auto max-w-5xl rounded-[2rem] p-8 md:p-14">
              <h2 className="font-display text-3xl text-foreground md:text-5xl">Profesyonel seslendirme hizmetimiz</h2>
              <p className="mt-6 text-lg leading-relaxed text-foreground/60">
                Ses, markanızın kimliğinin en önemli parçalarından biridir. Doğru ses tonu ve karakter, mesajınızın
                hedef kitlenize ulaşmasında kritik rol oynar. RTP Medya olarak, yılların deneyimi ve geniş seslendirmen
                kadromuzla her türlü projenize uygun seslendirme çözümleri sunuyoruz.
              </p>
              <p className="mt-5 text-lg leading-relaxed text-foreground/60">
                Profesyonel stüdyomuzda kayıt yapıyor, miks ve mastering süreçleriyle yüksek ses kalitesi sağlıyoruz.
                Reklam filmlerinden kurumsal tanıtımlara, telefon santrallerinden mağaza içi anonslarına kadar geniş bir
                yelpazede hizmet veriyoruz.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="pb-24 md:pb-32">
        <div className="container mx-auto px-4">
          <SectionHeading eyebrow="Hizmet alanlarımız" title="Her türlü seslendirme" accent="ihtiyacınız için." />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <Reveal key={s.title} delay={(i % 3) * 0.1}>
                <SpotlightCard tilt className="h-full rounded-[1.75rem] p-8">
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl border border-brand/30 bg-brand/10 text-brand-glow">
                    <s.icon size={26} />
                  </span>
                  <h3 className="mt-6 text-xl font-semibold text-foreground">{s.title}</h3>
                  <p className="mt-3 leading-relaxed text-foreground/55">{s.description}</p>
                </SpotlightCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-24 md:pb-32">
        <div className="container mx-auto px-4">
          <SectionHeading eyebrow="Çalışma sürecimiz" title="Brifingden" accent="teslimata." />
          <div className="relative grid gap-6 md:grid-cols-4">
            <div className="pointer-events-none absolute left-0 right-0 top-9 hidden h-px bg-gradient-to-r from-transparent via-brand/60 to-transparent md:block" />
            {steps.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.12}>
                <div className="relative z-10 flex h-[72px] w-[72px] items-center justify-center rounded-full border border-brand/40 bg-card font-mono text-lg font-semibold text-brand-glow shadow-[0_0_40px_-8px_rgba(232,16,28,0.8)]">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="mt-6 text-xl font-semibold text-foreground">{s.title}</h3>
                <p className="mt-2 leading-relaxed text-foreground/50">{s.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Projenizi konuşalım."
        description="Seslendirme ihtiyaçlarınız için bizimle iletişime geçin, size özel çözümler sunalım."
        href="/iletisim"
        label="İletişime geç"
      />
      <Footer />
    </main>
  )
}
