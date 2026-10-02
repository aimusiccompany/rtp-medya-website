import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { MusicSection } from "@/components/music-section"
import { PlayerSection } from "@/components/player-section"
import { SectorsSection } from "@/components/sectors-section"
import { ProcessSection } from "@/components/process-section"
import { AboutSection } from "@/components/about-section"
import { ContactSection } from "@/components/contact-section"
import { FaqSection } from "@/components/faq-section"
import { CtaBand } from "@/components/cta-band"
import { AiMusicBanner } from "@/components/ai-music-banner"
import { Marquee } from "@/components/fx/marquee"
import { Footer } from "@/components/footer"

const marqueeItems = [
  "Kurumsal Radyo",
  "Profesyonel Seslendirme",
  "Lisanslı Müzik",
  "7/24 Yayın",
  "Anons Yönetimi",
  "Uzaktan Kontrol",
  "Şube Bazlı Akış",
]

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <Marquee items={marqueeItems} />
      <ServicesSection />
      <MusicSection />
      <PlayerSection />
      <SectorsSection />
      <ProcessSection />
      <AboutSection />
      <AiMusicBanner />
      <FaqSection />
      <CtaBand
        title="İşletmenizin sesini birlikte tasarlayalım."
        description="Ücretsiz teklif alın, size özel yayın planını hazırlayalım."
      />
      <ContactSection />
      <Footer />
    </main>
  )
}
