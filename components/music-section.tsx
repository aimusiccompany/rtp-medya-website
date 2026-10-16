"use client"

import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { MusicPreviewPlayer } from "@/components/music-preview-player"
import { musicGenres as genres } from "@/lib/music-previews"
import { SectionHeading } from "@/components/section-heading"
import { Reveal } from "@/components/fx/reveal"


export function MusicSection() {
  const [active, setActive] = useState(0)
  const g = genres[active]

  return (
    <section id="music" className="relative py-28 md:py-40">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(217,15,28,0.22),transparent_68%)]" />
      <div className="container relative mx-auto px-4">
        <SectionHeading eyebrow="Müzik dünyası" title="İşletmenizin" accent="ses dünyası." description="Tarzınızı seçin, mekânınıza yakışan müzik dünyasını keşfedin." />

        <div className="grid gap-6 lg:grid-cols-[340px_1fr]">
          <Reveal>
            <div className="glass rounded-[2rem] p-5">
              <p className="eyebrow mb-4 px-3 pt-2">Müzik türleri</p>
              <ul className="space-y-1" role="tablist" aria-label="Müzik türleri" aria-orientation="vertical">
                {genres.map((x, i) => (
                  <li key={x.name}>
                    <button
                      role="tab"
                      id={`genre-tab-${x.id}`}
                      aria-controls="genre-panel"
                      tabIndex={active === i ? 0 : -1}
                      onKeyDown={event => {
                        const next = event.key === "ArrowDown" ? (i + 1) % genres.length : event.key === "ArrowUp" ? (i - 1 + genres.length) % genres.length : event.key === "Home" ? 0 : event.key === "End" ? genres.length - 1 : null
                        if (next !== null) { event.preventDefault(); setActive(next); document.getElementById(`genre-tab-${genres[next].id}`)?.focus() }
                      }}
                      aria-selected={active === i}
                      onClick={() => setActive(i)}
                      className={`relative flex w-full items-center gap-3 rounded-2xl px-4 py-3 text-left text-sm font-medium transition-colors ${
                        active === i ? "text-foreground" : "text-foreground/50 hover:text-foreground/80"
                      }`}
                    >
                      {active === i && (
                        <motion.span
                          layoutId="genre-pill"
                          className="absolute inset-0 rounded-2xl border border-brand/40 bg-brand/15"
                          transition={{ type: "spring", stiffness: 380, damping: 32 }}
                        />
                      )}
                      <span
                        className={`relative h-2 w-2 rounded-full ${active === i ? "bg-brand" : "bg-foreground/20"}`}
                      />
                      <span className="relative">{x.name}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div id="genre-panel" role="tabpanel" aria-labelledby={`genre-tab-${g.id}`} className="neon-border glass relative flex h-full min-h-[420px] flex-col justify-between overflow-hidden rounded-[2rem] p-6 md:p-10">
              <AnimatePresence mode="wait">
                <motion.div
                  key={g.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.4 }}
                >
                  <p className="font-mono text-xs uppercase tracking-[0.3em] text-brand-glow">
                    {String(active + 1).padStart(2, "0")} / {String(genres.length).padStart(2, "0")}{g.bpm ? ` · ${g.bpm} BPM` : ""}
                  </p>
                  <h3 className="font-display mt-5 text-5xl text-foreground md:text-7xl">{g.name}</h3>
                  <p className="mt-5 max-w-xl text-lg leading-relaxed text-foreground/65">{g.text}</p>
                </motion.div>
              </AnimatePresence>

              <div>
                <MusicPreviewPlayer key={g.id} genre={g} />
                <p className="mt-6 border-t border-foreground/[0.08] pt-5 text-sm text-foreground/55">
                  Telif haklarına saygılı, lisanslı yayın. Kullanım kapsamı lisans sözleşmesinde yazılı olarak belirtilir.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
