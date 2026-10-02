import type React from "react"
import { MapPin, Phone, Mail, Clock } from "lucide-react"
import { ContactForm } from "@/components/contact-form"
import { SectionHeading } from "@/components/section-heading"
import { Reveal } from "@/components/fx/reveal"
import { SpotlightCard } from "@/components/fx/spotlight-card"

type InfoItem = { icon: typeof MapPin; title: string; body: React.ReactNode }

const info: InfoItem[] = [
  {
    icon: MapPin,
    title: "Adres",
    body: (
      <>
        Esentepe Mah. Büyükdere Cad.
        <br />
        Levent 199 No: 199 İçkapı No: 6
        <br />
        Şişli / İstanbul
      </>
    ),
  },
  {
    icon: Phone,
    title: "Telefon",
    body: (
      <>
        <a href="tel:+902122630902" className="block transition-colors hover:text-foreground">
          +90 (212) 263 09 02
        </a>
        <a href="tel:+905462630900" className="block transition-colors hover:text-foreground">
          +90 (546) 263 09 00
        </a>
      </>
    ),
  },
  {
    icon: Mail,
    title: "E-posta",
    body: (
      <>
        <a href="mailto:info@rtpmedya.com.tr" className="block transition-colors hover:text-foreground">
          info@rtpmedya.com.tr
        </a>
        <a href="mailto:teknik@rtpmedya.com.tr" className="block transition-colors hover:text-foreground">
          teknik@rtpmedya.com.tr
        </a>
      </>
    ),
  },
  {
    icon: Clock,
    title: "Çalışma saatleri",
    body: (
      <>
        Pazartesi - Cuma: 09:00 - 17:30
        <br />
        Cumartesi - Pazar: Kapalı
      </>
    ),
  },
]

export function ContactSection({ showHeading = true }: { showHeading?: boolean }) {
  return (
    <section id="contact" className="relative py-28 md:py-40">
      <div className="container mx-auto px-4">
        {showHeading && (
          <SectionHeading
            eyebrow="İletişim"
            title="Projenizi"
            accent="konuşalım."
            description="Bize ulaşın, size en uygun çözümü birlikte planlayalım."
          />
        )}

        <div className="grid gap-8 lg:grid-cols-[1.6fr_1fr]">
          <Reveal>
            <div className="neon-border glass rounded-[2rem] p-8 md:p-10">
              <ContactForm />
            </div>
          </Reveal>

          <div className="space-y-4">
            {info.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.08}>
                <SpotlightCard className="rounded-[1.5rem] p-6">
                  <div className="flex items-start gap-4">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-brand/30 bg-brand/10 text-brand-glow">
                      <item.icon size={22} />
                    </span>
                    <div>
                      <h3 className="mb-1.5 font-semibold text-foreground">{item.title}</h3>
                      <div className="text-sm leading-relaxed text-foreground/55">{item.body}</div>
                    </div>
                  </div>
                </SpotlightCard>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
