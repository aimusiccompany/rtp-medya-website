import { ArrowUpRight } from "lucide-react"
import { Reveal } from "@/components/fx/reveal"
import { Equalizer } from "@/components/fx/equalizer"

/** RTP Medya'nın 20. yılına özel çıkardığı AI Music markasının tanıtım bandı. */
export function AiMusicBanner() {
  return (
    <section className="relative py-20 md:py-28">
      <div className="container mx-auto px-4">
        <Reveal>
          <div className="neon-border glass relative overflow-hidden rounded-[2.5rem] p-8 md:p-14">
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 opacity-25">
              <Equalizer bars={48} className="h-full" seed={5} />
            </div>
            <div className="relative grid items-center gap-8 md:grid-cols-[1fr_auto]">
              <div className="max-w-2xl">
                <p className="eyebrow mb-4">RTP Medya 20. yıl</p>
                <h2 className="font-display text-3xl text-foreground md:text-5xl">
                  20. yılımıza özel: <span className="text-gradient-red">AI Music.</span>
                </h2>
                <p className="mt-5 text-lg leading-relaxed text-foreground/65">
                  RTP Medya olarak 20. yılımızda, işletme içi müzik yayınını yapay zekâyla bir adım ileri taşıyan yeni
                  markamız AI Music’i hayata geçirdik. İki marka da aynı çatı altında, aynı deneyimle hizmet veriyor.
                </p>
              </div>
              <a
                href="https://www.aimusic.com.tr/"
                target="_blank"
                rel="noopener"
                title="AI Music - RTP Medya'nın 20. yılına özel yapay zekâ destekli işletme müziği markası"
                className="btn-primary shrink-0"
              >
                AI Music’i keşfet
                <ArrowUpRight size={18} />
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
