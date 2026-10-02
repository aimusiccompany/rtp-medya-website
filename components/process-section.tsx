import { Reveal } from "@/components/fx/reveal"
import { SectionHeading } from "@/components/section-heading"

const steps = [
  { n: "01", title: "Tanışma", text: "İşletmenizi, hedef kitlenizi ve marka kimliğinizi dinleriz." },
  { n: "02", title: "Seçki", text: "Mekânınıza, şubenize ve günün saatine uygun müzik planı hazırlanır." },
  { n: "03", title: "Kurulum", text: "RTP Medya Player kurulur, şubeler tek panele bağlanır." },
  { n: "04", title: "Yayın", text: "Müzik ve anonslar kesintisiz yayınlanır; her şey uzaktan yönetilir." },
]

export function ProcessSection() {
  return (
    <section className="relative py-28 md:py-40">
      <div className="container mx-auto px-4">
        <SectionHeading eyebrow="Nasıl çalışır?" title="Fikirden yayına." accent="Dört net adım." />

        <div className="relative grid gap-6 md:grid-cols-4">
          <div className="pointer-events-none absolute left-0 right-0 top-9 hidden h-px bg-gradient-to-r from-transparent via-brand/60 to-transparent md:block" />
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.12}>
              <div className="relative">
                <div className="relative z-10 flex h-[72px] w-[72px] items-center justify-center rounded-full border border-brand/40 bg-[#14090b] font-mono text-lg font-semibold text-brand-glow shadow-[0_0_40px_-8px_rgba(232,16,28,0.8)]">
                  {s.n}
                </div>
                <h3 className="mt-6 text-xl font-semibold text-white">{s.title}</h3>
                <p className="mt-2 leading-relaxed text-white/50">{s.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
