import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PageHero } from "@/components/page-hero"
import { ContactSection } from "@/components/contact-section"
import { Reveal } from "@/components/fx/reveal"

export const metadata: Metadata = {
  title: "İletişim | RTP Medya",
  description: "Projeleriniz için bizimle iletişime geçin, size en uygun çözümü sunalım.",
}

const MAP_QUERY = encodeURIComponent("Levent 199, Esentepe Mahallesi, Büyükdere Caddesi No:199, Şişli, İstanbul")

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Header />

      <PageHero
        eyebrow="İletişim"
        title="Projenizi"
        accent="konuşalım."
        description="Projeleriniz için bizimle iletişime geçin, size en uygun çözümü sunalım."
      />

      <ContactSection showHeading={false} />

      <section className="pb-24 md:pb-32">
        <div className="container mx-auto px-4">
          <Reveal>
            <div className="neon-border glass overflow-hidden rounded-[2rem]">
              <div className="aspect-[16/9] w-full md:aspect-[21/9]">
                <iframe
                  src={`https://www.google.com/maps?q=${MAP_QUERY}&output=embed`}
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: "invert(0.92) hue-rotate(180deg) saturate(0.7) contrast(0.95)" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="RTP Medya Konum - Esentepe Mah. Büyükdere Cad. Levent 199 No: 199 İçkapı No: 6 Şişli/İstanbul"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
    </main>
  )
}
