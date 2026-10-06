import Link from "next/link"
import { ArrowUpRight, Radio, Mic } from "lucide-react"
import { Reveal } from "@/components/fx/reveal"
import { SpotlightCard } from "@/components/fx/spotlight-card"
import { SectionHeading } from "@/components/section-heading"

const services = [
  {
    icon: Radio,
    eyebrow: "Kurumsal Radyo",
    title: "İşletmenize özel müzik yayını.",
    description:
      "Markanıza özel hazırlanan müzik seçkisi, anons ve kampanya duyurularıyla profesyonel yayın kalitesi. Tüm müzikler lisanslıdır.",
    image: "/corporate-radio-broadcasting-studio.webp",
    tags: ["Lisanslı yayın", "Anons yönetimi", "Uzaktan kontrol"],
    link: "/hizmetler/kurumsal-radyo",
  },
  {
    icon: Mic,
    eyebrow: "Profesyonel Seslendirme",
    title: "Markanızın sesi, doğru tonda.",
    description:
      "Reklam, tanıtım filmi, santral ve anons için geniş seslendirmen kadromuzla stüdyo kalitesinde ses kayıtları.",
    image: "/professional-voice-recording-studio.webp",
    tags: ["Reklam", "Santral & IVR", "Tanıtım filmi"],
    link: "/hizmetler/profesyonel-seslendirme",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="relative py-28 md:py-40">
      <div className="container mx-auto px-4">
        <SectionHeading
          eyebrow="Hizmetlerimiz"
          title="Her mekânda farklı bir hikâye."
          accent="Her hikâyede bizim sesimiz."
        />

        <div className="grid gap-8 md:grid-cols-2">
          {services.map((s, i) => (
            <Reveal key={s.link} delay={i * 0.12}>
              <Link href={s.link} className="group block h-full">
                <SpotlightCard tilt className="h-full overflow-hidden rounded-[2rem]">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img loading="lazy" decoding="async"
                      src={s.image}
                      alt={s.eyebrow}
                      className="h-full w-full object-cover opacity-80 transition-all duration-700 group-hover:scale-110 group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
                    <div className="absolute inset-0 bg-gradient-to-br from-brand/25 to-transparent mix-blend-overlay" />
                    <span className="absolute left-6 top-6 flex h-12 w-12 items-center justify-center rounded-2xl border border-foreground/20 bg-black/40 text-brand-glow">
                      <s.icon size={22} />
                    </span>
                  </div>
                  <div className="relative p-8 md:p-10">
                    <p className="eyebrow mb-4">{s.eyebrow}</p>
                    <h3 className="text-2xl font-semibold tracking-tight text-foreground md:text-3xl">{s.title}</h3>
                    <p className="mt-4 leading-relaxed text-foreground/55">{s.description}</p>
                    <div className="mt-8 flex flex-wrap items-center gap-2">
                      {s.tags.map((t) => (
                        <span
                          key={t}
                          className="rounded-full border border-foreground/[0.1] bg-foreground/[0.04] px-3 py-1 text-xs font-medium text-foreground/70"
                        >
                          {t}
                        </span>
                      ))}
                      <span className="ml-auto flex h-11 w-11 items-center justify-center rounded-full border border-foreground/[0.14] text-foreground/70 transition-all group-hover:border-brand-glow group-hover:bg-brand group-hover:text-foreground">
                        <ArrowUpRight size={20} />
                      </span>
                    </div>
                  </div>
                </SpotlightCard>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
