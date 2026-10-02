import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PageHero } from "@/components/page-hero"
import { QuoteForm } from "@/components/quote-form"
import { Reveal } from "@/components/fx/reveal"

export const metadata: Metadata = {
  title: "Ücretsiz Teklif Alın | RTP Medya",
  description: "Size özel çözümlerimiz hakkında detaylı bilgi almak için formu doldurun.",
}

export default function TeklifAlPage() {
  return (
    <main className="min-h-screen">
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
