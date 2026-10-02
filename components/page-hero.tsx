import type React from "react"
import { WaveCanvas } from "@/components/fx/wave-canvas"
import { WordReveal, Reveal } from "@/components/fx/reveal"

type Props = {
  eyebrow: string
  title: string
  accent?: string
  description?: string
  children?: React.ReactNode
}

/** İç sayfalar için ortak, dalga animasyonlu kahraman alanı. */
export function PageHero({ eyebrow, title, accent, description, children }: Props) {
  return (
    <section className="relative isolate overflow-hidden pb-20 pt-40 md:pb-28 md:pt-48">
      <div className="aurora">
        <span />
        <span />
        <span />
      </div>
      <div className="bg-grid absolute inset-0 -z-10" />
      <div className="absolute inset-x-0 bottom-0 top-1/3 -z-10 opacity-70">
        <WaveCanvas intensity={0.8} />
      </div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background to-transparent" />

      <div className="container relative mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center">
          <Reveal>
            <p className="eyebrow mb-6">{eyebrow}</p>
          </Reveal>
          <h1 className="font-display text-4xl text-white sm:text-6xl md:text-7xl">
            <WordReveal text={title} />
            {accent && <WordReveal text={accent} className="text-gradient-red" delay={0.25} />}
          </h1>
          {description && (
            <Reveal delay={0.35}>
              <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-white/60 md:text-xl">{description}</p>
            </Reveal>
          )}
          {children && (
            <Reveal delay={0.5}>
              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">{children}</div>
            </Reveal>
          )}
        </div>
      </div>
    </section>
  )
}
