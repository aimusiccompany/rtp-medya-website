export function Marquee({ items }: { items: string[] }) {
  const row = [...items, ...items]
  return (
    <div className="marquee relative overflow-hidden border-y border-foreground/[0.07] bg-foreground/[0.02] py-5">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-background to-transparent" />
      <div className="marquee-track">
        {row.map((t, i) => (
          <span
            key={i}
            className="mx-8 flex items-center gap-8 whitespace-nowrap text-sm font-semibold uppercase tracking-[0.3em] text-foreground/45"
          >
            {t}
            <span className="h-1.5 w-1.5 rounded-full bg-brand shadow-[0_0_10px_rgba(255,59,71,0.9)]" />
          </span>
        ))}
      </div>
    </div>
  )
}
