import Link from "next/link"
import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { MusicSection } from "@/components/music-section"
import { PlayerSection } from "@/components/player-section"
import { SectorsSection } from "@/components/sectors-section"
import { AboutSection } from "@/components/about-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <ServicesSection />
      <MusicSection />
      <PlayerSection />
      <SectorsSection />
      <AboutSection />

      <section className="pb-24 md:pb-32">
        <div className="container mx-auto px-4">
          <div className="rounded-[2.5rem] bg-gradient-to-br from-brand to-brand-ink px-8 py-16 text-center text-white md:px-16 md:py-20">
            <h2 className="rtp-display mx-auto max-w-3xl text-4xl md:text-6xl">İşletmenizin sesini birlikte tasarlayalım.</h2>
            <p className="mx-auto mt-6 max-w-xl text-lg text-white/80">
              Ücretsiz teklif alın, size özel yayın planını hazırlayalım.
            </p>
            <Link
              href="/teklif-al"
              className="mt-10 inline-flex rounded-2xl bg-white px-8 py-4 font-semibold text-brand transition-transform hover:scale-[1.03]"
            >
              Ücretsiz teklif al
            </Link>
          </div>
        </div>
      </section>

      <ContactSection />
      <Footer />
    </main>
  )
}
