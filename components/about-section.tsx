import { Award, Users, Zap, Target } from "lucide-react"

const stats = [
  { icon: Award, value: "20+", label: "Yıllık deneyim" },
  { icon: Users, value: "500+", label: "Mutlu müşteri" },
  { icon: Zap, value: "46.000+", label: "Tamamlanan proje" },
  { icon: Target, value: "%98", label: "Müşteri memnuniyeti" },
]

export function AboutSection() {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="container mx-auto px-4">
        <div className="grid items-start gap-14 lg:grid-cols-2">
          <div>
            <p className="rtp-eyebrow mb-4">Biz kimiz</p>
            <h2 className="rtp-display text-brand-ink text-4xl md:text-6xl">
              Birlikte iyi
              <br />
              bir ses çıkaralım.
            </h2>
            <p className="mt-8 text-lg leading-relaxed text-brand-muted">
              2005 yılından bu yana medya sektöründe faaliyet gösteren RTP Medya, müşterilerine kaliteli görsel ve
              işitsel içerik üretimi hizmetleri sunuyor. Deneyimli ekibimiz ve güçlü altyapımızla kurumsal firmalardan
              bireysel sanatçılara geniş bir yelpazede hizmet veriyoruz.
            </p>
            <p className="mt-5 text-lg leading-relaxed text-brand-muted">
              Yaratıcılık, profesyonellik ve müşteri memnuniyeti odaklı çalışma prensiplerimizle her projede
              mükemmelliği hedefliyoruz.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-5">
            {stats.map((s) => (
              <div key={s.label} className="rounded-[1.75rem] border border-brand-line bg-white p-7">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-wash text-brand">
                  <s.icon size={22} />
                </span>
                <p className="mt-6 text-4xl md:text-5xl font-medium tracking-tight text-brand-ink">{s.value}</p>
                <p className="mt-1 text-sm text-brand-muted">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
