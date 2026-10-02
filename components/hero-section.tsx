import Link from "next/link"
import { ArrowRight } from "lucide-react"

const stats = [
  { value: "20+", label: "yıllık deneyim" },
  { value: "500+", label: "mutlu müşteri" },
  { value: "46.000+", label: "tamamlanan proje" },
]

const bars = [38, 70, 52, 92, 60, 78, 44, 86, 58, 72, 40, 64]

export function HeroSection() {
  return (
    <section id="home" className="rtp-hero-wash relative overflow-hidden pt-[72px]">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <p className="rtp-eyebrow mb-6 flex items-center gap-3 animate-fade-in">
              <span className="h-2.5 w-2.5 rounded-full bg-brand" />
              20+ yıllık deneyim. Profesyonel yayın.
            </p>

            <h1 className="rtp-display text-brand-ink text-[2.9rem] sm:text-6xl lg:text-[5.2rem] animate-fade-in-up">
              Markanızın sesini
              <br />
              biliyoruz.
              <br />
              <span className="text-brand">Duyurmasını da.</span>
            </h1>

            <p
              className="mt-8 max-w-xl text-lg md:text-xl leading-relaxed text-brand-muted animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              Yıllardır işletmelere özel kurumsal radyo ve profesyonel seslendirme hizmeti veriyoruz. Müzik, anons ve
              ses kimliğiniz tek merkezden, kesintisiz yönetilir.
            </p>

            <div
              className="mt-10 flex flex-col sm:flex-row gap-4 animate-fade-in-up"
              style={{ animationDelay: "0.4s" }}
            >
              <Link
                href="/teklif-al"
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-brand px-7 py-4 text-base font-semibold text-white shadow-[0_14px_30px_-12px_rgba(200,16,26,0.6)] transition-colors hover:bg-brand-hover"
              >
                Ücretsiz teklif al
                <ArrowRight size={18} />
              </Link>
              <Link
                href="/player"
                className="inline-flex items-center justify-center rounded-2xl border border-brand-line bg-white/85 px-7 py-4 text-base font-semibold text-brand-ink transition-colors hover:bg-white"
              >
                RTP Medya Player’ı keşfet
              </Link>
            </div>

            <dl className="mt-14 grid max-w-xl grid-cols-3 gap-6 border-t border-brand-line pt-8">
              {stats.map((s) => (
                <div key={s.label}>
                  <dt className="text-3xl md:text-4xl font-medium tracking-tight text-brand-ink">{s.value}</dt>
                  <dd className="mt-1 text-sm text-brand-muted">{s.label}</dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Logodaki ses dalgasından esinlenen yayın kartı */}
          <div className="relative animate-scale-in" style={{ animationDelay: "0.3s" }}>
            <div className="rounded-[2rem] border border-brand-line bg-white/85 p-8 shadow-[0_40px_80px_-40px_rgba(138,28,28,0.45)] backdrop-blur-xl">
              <div className="flex items-center justify-between">
                <span className="rtp-eyebrow">Canlı yayın</span>
                <span className="flex items-center gap-2 text-xs font-semibold text-brand">
                  <span className="h-2 w-2 animate-pulse rounded-full bg-brand" />
                  7/24
                </span>
              </div>

              <div className="mt-8 flex h-40 items-end justify-between gap-2" aria-hidden="true">
                {bars.map((h, i) => (
                  <span
                    key={i}
                    className="rtp-eq-bar w-full rounded-full bg-gradient-to-t from-brand-ink via-[#7a1a1a] to-brand"
                    style={{ height: `${h}%`, animationDelay: `${i * 0.12}s` }}
                  />
                ))}
              </div>

              <div className="mt-8 border-t border-brand-line pt-6">
                <p className="text-2xl font-medium tracking-tight text-brand-ink">RTP Medya</p>
                <p className="mt-1 text-sm text-brand-muted">İşletmenizin ses dünyası, tek merkezden.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
