import type { Metadata } from "next"
import { JsonLd } from "@/components/json-ld"
import { breadcrumbLd, serviceLd } from "@/lib/site"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PageHero } from "@/components/page-hero"
import { QuoteForm } from "@/components/quote-form"
import { Reveal } from "@/components/fx/reveal"

export const metadata: Metadata = {
  title: "Ücretsiz Teklif Alın - Kurumsal Radyo ve İşletme İçi Müzik Yayını",
  description:
    "İşletmeniz için kurumsal radyo, müzik yayını veya seslendirme teklifi alın. 24 saat içinde dönüş, ücretsiz demo ve danışmanlık.",
  alternates: { canonical: "/teklif-al" },
  openGraph: { url: "/teklif-al", title: "Ücretsiz Teklif Alın - Kurumsal Radyo ve İşletme İçi Müzik Yayını", description: "İşletmeniz için kurumsal radyo, müzik yayını veya seslendirme teklifi alın. 24 saat içinde dönüş, ücretsiz demo ve danışmanlık." },
}

export default function TeklifAlPage() {
  return (
    <main className="min-h-screen">
      <JsonLd data={[breadcrumbLd([{ name: "Teklif Al", path: "/teklif-al" }])]} />
      <Header />

      <PageHero
        eyebrow="Teklif"
        title="Ücretsiz"
        accent="teklif alın."
        description="Size özel çözümlerimiz hakkında detaylı bilgi almak için formu doldurun."
      />

      <section className="pb-24 md:pb-32">
        <div className="container mx-auto px-4">
          <Reveal>
            <div className="neon-border glass mx-auto max-w-4xl rounded-[2rem] p-8 md:p-12">
              <QuoteForm />
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
    </main>
  )
}
