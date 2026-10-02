"use client"

import { useState } from "react"
import { Music2 } from "lucide-react"

const genres = [
  { name: "Pop", text: "Enerjik, tanıdık ve herkese hitap eden seçkiler. Mağaza ve market akışı için ideal." },
  { name: "Deep House", text: "Akşam saatlerinde mekâna tempo ve modern bir atmosfer katar." },
  { name: "Bossa Nova", text: "Sabah kahvesine ve öğle buluşmalarına yumuşak, sıcak bir eşlik." },
  { name: "Chillout", text: "Spa, otel lobisi ve bekleme alanları için sakinleştirici bir yayın." },
  { name: "Jazz", text: "Restoran ve kafelerde sohbeti bölmeyen, zarif bir fon." },
  { name: "Blues", text: "Karakterli, samimi ve akılda kalan bir ambiyans." },
  { name: "Reggae", text: "Rahat, güneşli ve yaz havasında bir mekân hissi." },
  { name: "Latin", text: "Canlı ritimlerle misafirlerin enerjisini yukarı taşır." },
]

export function MusicSection() {
  const [active, setActive] = useState(0)

  return (
    <section id="music" className="rtp-wash-soft py-24 md:py-32">
      <div className="container mx-auto px-4">
        <div className="mb-14 max-w-3xl">
          <p className="rtp-eyebrow mb-4">Müzik dünyası</p>
          <h2 className="rtp-display text-brand-ink text-4xl md:text-6xl">
            İşletmenizin
            <br />
            ses dünyası.
          </h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-[320px_1fr]">
          <div className="rounded-[2rem] border border-brand-line bg-white p-6">
            <p className="rtp-eyebrow mb-4">Müzik türleri</p>
            <ul className="space-y-1">
              {genres.map((g, i) => (
                <li key={g.name}>
                  <button
                    onClick={() => setActive(i)}
                    className={`flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left font-medium transition-colors ${
                      active === i ? "bg-brand-wash text-brand" : "text-brand-muted hover:bg-brand-wash/60"
                    }`}
                  >
                    <span className={`h-2 w-2 rounded-full ${active === i ? "bg-brand" : "bg-brand-line"}`} />
                    {g.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col justify-between rounded-[2rem] border border-brand-line bg-white p-8 md:p-12">
            <div>
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-wash text-brand">
                <Music2 size={26} />
              </span>
              <h3 className="mt-6 text-4xl md:text-5xl font-medium tracking-tight text-brand-ink">
                {genres[active].name}
              </h3>
              <p className="mt-4 max-w-xl text-lg leading-relaxed text-brand-muted">{genres[active].text}</p>
            </div>

            <div className="mt-10 flex h-20 items-end gap-1.5" aria-hidden="true">
              {Array.from({ length: 36 }).map((_, i) => (
                <span
                  key={`${active}-${i}`}
                  className="rtp-eq-bar w-full rounded-full bg-gradient-to-t from-brand-ink to-brand"
                  style={{
                    height: `${30 + ((i * 37 + active * 13) % 70)}%`,
                    animationDelay: `${(i % 9) * 0.1}s`,
                  }}
                />
              ))}
            </div>

            <p className="mt-6 border-t border-brand-line pt-5 text-sm text-brand-muted">
              Telif haklarına saygılı, lisanslı yayın. Kullanım kapsamı lisans sözleşmesinde yazılı olarak belirtilir.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
