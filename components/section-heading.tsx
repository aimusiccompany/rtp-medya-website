import { Reveal } from "@/components/fx/reveal"

type Props = {
  eyebrow: string
  title: string
  accent?: string
  description?: string
  align?: "left" | "center"
}

export function SectionHeading({ eyebrow, title, accent, description, align = "left" }: Props) {
  const center = align === "center"
  return (
    <div className={`mb-14 max-w-3xl md:mb-20 ${center ? "mx-auto text-center" : ""}`}>
      <Reveal>
        <p className="eyebrow mb-5">{eyebrow}</p>
        <h2 className="font-display text-4xl text-white md:text-6xl">
          {title} {accent && <span className="text-gradient-red">{accent}</span>}
        </h2>
        {description && <p className="mt-6 text-lg leading-relaxed text-white/55">{description}</p>}
      </Reveal>
    </div>
  )
}
