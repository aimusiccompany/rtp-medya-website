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
    <div className={`mb-10 max-w-3xl md:mb-14 ${center ? "mx-auto text-center" : ""}`}>
      <Reveal>
        <p className="eyebrow mb-5">{eyebrow}</p>
        <h2 className="font-display text-[2.15rem] text-foreground md:text-[3.25rem]">
          {title} {accent && <span className="text-gradient-red">{accent}</span>}
        </h2>
        {description && <p className="mt-6 text-lg leading-relaxed text-foreground/65">{description}</p>}
      </Reveal>
    </div>
  )
}
