import { Award, Users, Zap, Target } from "lucide-react"
import { Reveal } from "@/components/fx/reveal"
import { SpotlightCard } from "@/components/fx/spotlight-card"
import { Counter } from "@/components/fx/counter"

const stats = [
  { icon: Award, value: "20+", label: "Yıllık deneyim" },
  { icon: Users, value: "500+", label: "Mutlu müşteri" },
  { icon: Zap, value: "46.000+", label: "Tamamlanan proje" },
  { icon: Target, value: "%98", label: "Müşteri memnuniyeti" },
]

export function AboutSection() {
  return (
    <section id="about" className="relative py-28 md:py-40">
      <div className="container mx-auto px-4">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <Reveal>
            <p className="eyebrow mb-5">Biz kimiz</p>
            <h2 className="font-display text-4xl text-white md:text-6xl">
              Birlikte iyi <span className="text-gradient-red">bir ses çıkaralım.</span>
            </h2>
            <p className="mt-8 text-lg leading-relaxed text-white/55">
              2005 yılından bu yana medya sektöründe faaliyet gösteren RTP Medya, müşterilerine kaliteli görsel ve
              işitsel içerik üretimi hizmetleri sunuyor. Deneyimli ekibimiz ve güçlü altyapımızla kurumsal firmalardan
              bireysel sanatçılara geniş bir yelpazede hizmet veriyoruz.
            </p>
            <p className="mt-5 text-lg leading-relaxed text-white/55">
              Yaratıcılık, profesyonellik ve müşteri memnuniyeti odaklı çalışma prensiplerimizle her projede
              mükemmelliği hedefliyoruz.
            </p>
          </Reveal>

          <div className="grid grid-cols-2 gap-5">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 0.1}>
                <SpotlightCard className="h-full rounded-[1.75rem] p-7">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-brand/30 bg-brand/10 text-brand-glow">
                    <s.icon size={20} />
                  </span>
                  <p className="text-gradient mt-6 text-4xl font-semibold tracking-tight md:text-5xl">
                    <Counter value={s.value} />
                  </p>
                  <p className="mt-1 text-sm text-white/50">{s.label}</p>
                </SpotlightCard>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
