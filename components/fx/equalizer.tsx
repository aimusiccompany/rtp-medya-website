export function Equalizer({
  bars = 24,
  className = "",
  seed = 0,
}: {
  bars?: number
  className?: string
  seed?: number
}) {
  return (
    <div className={`flex items-end gap-[3px] ${className}`} aria-hidden="true">
      {Array.from({ length: bars }).map((_, i) => (
        <span
          key={i}
          className="eq-bar w-full rounded-full bg-gradient-to-t from-brand-deep via-brand to-brand-glow"
          style={{
            height: `${35 + ((i * 41 + seed * 17) % 65)}%`,
            animationDelay: `${((i * 7 + seed) % 12) * 0.09}s`,
            animationDuration: `${0.9 + ((i * 3 + seed) % 5) * 0.18}s`,
          }}
        />
      ))}
    </div>
  )
}
