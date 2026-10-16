import Link from "next/link"
import { ArrowRight, ArrowUpRight, Radio, AudioLines, SlidersHorizontal, Check, Disc3 } from "lucide-react"
import { WaveCanvas } from "@/components/fx/wave-canvas"
import { Equalizer } from "@/components/fx/equalizer"

const stats = [
  { value: "20+", label: "yıllık deneyim" },
  { value: "500+", label: "mutlu müşteri" },
  { value: "46.000+", label: "tamamlanan proje" },
]

export function HeroSection() {
  return (
    <section id="home" className="hero-refined relative isolate overflow-hidden pt-36 pb-16 md:pt-44 md:pb-20">
      <div className="aurora" aria-hidden="true"><span /><span /></div>
      <div className="bg-grid absolute inset-0 -z-10 opacity-40" aria-hidden="true" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-72 opacity-30" aria-hidden="true"><WaveCanvas intensity={0.45} /></div>
      <div className="container relative mx-auto px-4">
        <div className="grid items-center gap-14 lg:grid-cols-[1.15fr_1fr] lg:gap-16">
          <div>
            <p className="eyebrow mb-7">2005’ten beri markanızın sesi</p>
            <h1 className="font-display max-w-[750px] text-[clamp(2.75rem,5.3vw,5rem)] leading-[1.08]">
              Kurumsal radyo ile<br /><span className="text-gradient-red">markanızın sesini</span><br />duyurun.
            </h1>
            <p className="mt-7 max-w-xl text-base leading-[1.85] text-foreground/65 md:text-lg">
              Mekânınıza özel müzik, doğru zamanda anons, tek merkezden yönetim. İşletmenizin atmosferini birlikte tasarlayalım.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link href="/teklif-al" className="btn-primary">Ücretsiz teklif al <ArrowUpRight size={18} /></Link>
              <Link href="/hizmetler/kurumsal-radyo" className="btn-ghost">Çözümleri keşfet <ArrowRight size={17} /></Link>
            </div>
            <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-xs font-medium text-foreground/60">
              {["Lisanslı müzik", "Şubeye özel yayın", "Profesyonel destek"].map(text => <span key={text} className="flex items-center gap-1.5"><Check size={14} className="text-brand" />{text}</span>)}
            </div>
          </div>
          <div className="sound-stage relative mx-auto w-full max-w-[540px] lg:ml-auto">
            <div className="absolute -inset-6 rounded-full bg-brand/10 blur-3xl" aria-hidden="true" />
            <div className="sound-console relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#21191b] text-white shadow-[0_32px_90px_-30px_rgba(55,12,20,0.45)]">
              <div className="flex items-center justify-between border-b border-white/10 px-6 py-5">
                <span className="flex items-center gap-2.5 text-sm font-semibold"><AudioLines size={21} className="text-[#ff6872]" />RTP Medya</span>
                <span className="text-[10px] uppercase tracking-[0.18em] text-white/45">Yayın dünyanız</span>
              </div>
              <div className="p-6 md:p-8">
                <div className="flex items-center justify-between"><span className="text-[10px] font-medium uppercase tracking-[0.2em] text-white/50">Markanıza özel frekans</span><Radio size={18} className="text-[#ff6872]" /></div>
                <div className="my-7 flex items-center gap-5">
                  <div className="record-disc flex h-24 w-24 shrink-0 items-center justify-center rounded-full"><div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand"><Disc3 size={24} /></div></div>
                  <div><p className="text-2xl font-semibold tracking-tight md:text-3xl">Sizin ritminiz.</p><p className="mt-2 text-sm text-white/50">Sizin mekânınız. Sizin sesiniz.</p><span className="mt-3 inline-block rounded-full border border-white/10 px-2.5 py-1 text-[10px] text-white/60">Müzik + anons + marka kimliği</span></div>
                </div>
                <div className="rounded-2xl border border-white/[0.06] bg-black/15 px-5 py-5"><Equalizer bars={36} className="h-20" /><div className="mt-4 flex items-center justify-between text-[10px] tracking-wide text-white/40"><span>İŞLETMENİZİN SES DÜNYASI</span><span>7 / 24</span></div></div>
                <div className="mt-5 flex items-center gap-3 rounded-xl border border-white/10 px-4 py-3"><SlidersHorizontal size={16} className="text-[#ff6872]" /><p className="text-xs text-white/65">Tüm şubeler. Tek bir merkez.</p><span className="ml-auto flex gap-1" aria-hidden="true">{[1,2,3].map(i=><span key={i} className="h-1.5 w-1.5 rounded-full bg-[#ff6872]" />)}</span></div>
              </div>
            </div>
            <div className="relative mx-5 -mt-1 flex items-center justify-between rounded-b-2xl border border-t-0 border-surface-border bg-card px-5 py-4"><span className="text-xs text-foreground/55">Müziğiniz her zaman yanınızda.</span><Link href="/player" className="inline-flex items-center gap-2 text-xs font-semibold text-brand-glow">Player’ı keşfet <ArrowUpRight size={15} /></Link></div>
          </div>
        </div>
        <dl className="mt-14 grid grid-cols-3 divide-x divide-foreground/10 border-t border-foreground/10 pt-7 md:mt-20 md:pt-9">
          {stats.map((s,i)=><div key={s.label} className={i ? "pl-5 md:pl-10" : ""}><dt className="text-[clamp(1.5rem,3vw,2.6rem)] font-semibold leading-none tracking-tight">{s.value}</dt><dd className="mt-2 text-[11px] text-foreground/55 sm:text-sm">{s.label}</dd></div>)}
        </dl>
      </div>
    </section>
  )
}
