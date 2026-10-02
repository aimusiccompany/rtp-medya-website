import Link from "next/link"
import { ArrowUpRight, Radio, Mic } from "lucide-react"

const services = [
  {
    icon: Radio,
    eyebrow: "Kurumsal Radyo",
    title: "İşletmenize özel müzik yayını.",
    description:
      "Markanıza özel hazırlanan müzik seçkisi, anons ve kampanya duyurularıyla profesyonel yayın kalitesi. Tüm müzikler lisanslıdır.",
    image: "/corporate-radio-broadcasting-studio.jpg",
    tags: ["Lisanslı yayın", "Anons yönetimi", "Uzaktan kontrol"],
    link: "/hizmetler/kurumsal-radyo",
  },
  {
    icon: Mic,
    eyebrow: "Profesyonel Seslendirme",
    title: "Markanızın sesi, doğru tonda.",
    description:
      "Reklam, tanıtım filmi, santral ve anons için geniş seslendirmen kadromuzla stüdyo kalitesinde ses kayıtları.",
    image: "/professional-voice-recording-studio.jpg",
    tags: ["Reklam", "Santral & IVR", "Tanıtım filmi"],
    link: "/hizmetler/profesyonel-seslendirme",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-24 md:py-32">
      <div className="container mx-auto px-4">
        <div className="mb-14 max-w-3xl">
          <p className="rtp-eyebrow mb-4">Hizmetlerimiz</p>
          <h2 className="rtp-display text-brand-ink text-4xl md:text-6xl">
            Her mekânda farklı bir hikâye. Her hikâyede bizim sesimiz.
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {services.map((s) => (
            <Link
              key={s.link}
              href={s.link}
              className="group overflow-hidden rounded-[2rem] border border-brand-line bg-white transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_40px_70px_-40px_rgba(138,28,28,0.5)]"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={s.image}
                  alt={s.eyebrow}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-ink/70 via-transparent to-transparent" />
                <span className="absolute left-5 top-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/90 text-brand">
                  <s.icon size={22} />
                </span>
              </div>
              <div className="p-8">
                <p className="rtp-eyebrow mb-3 text-brand">{s.eyebrow}</p>
                <h3 className="text-2xl md:text-3xl font-medium tracking-tight text-brand-ink">{s.title}</h3>
                <p className="mt-4 leading-relaxed text-brand-muted">{s.description}</p>
                <div className="mt-6 flex flex-wrap items-center gap-2">
                  {s.tags.map((t) => (
                    <span key={t} className="rounded-full bg-brand-wash px-3 py-1 text-xs font-semibold text-brand">
                      {t}
                    </span>
                  ))}
                  <ArrowUpRight
                    size={22}
                    className="ml-auto text-brand-muted transition-colors group-hover:text-brand"
                  />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
