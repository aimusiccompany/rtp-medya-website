import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Reveal } from "@/components/fx/reveal"
import { Equalizer } from "@/components/fx/equalizer"

type Props = {
  title: string
  description: string
  href?: string
  label?: string
}

export function CtaBand({ title, description, href = "/teklif-al", label = "Ücretsiz teklif al" }: Props) {
  return (
    <section className="pb-24 md:pb-32">
      <div className="container mx-auto px-4">
        <Reveal>
          <div className="neon-border relative overflow-hidden rounded-[2.5rem] border border-white/[0.08] bg-gradient-to-br from-[#2a0509] via-[#13080a] to-[#0b0607] px-8 py-16 text-center md:px-16 md:py-24">
            <div className="pointer-events-none absolute -left-20 -top-20 h-80 w-80 rounded-full bg-brand/30 blur-[100px]" />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 opacity-40">
              <Equalizer bars={72} className="h-full" seed={3} />
            </div>
            <div className="relative">
              <h2 className="font-display mx-auto max-w-3xl text-3xl text-white md:text-6xl">{title}</h2>
              <p className="mx-auto mt-6 max-w-xl text-lg text-white/60">{description}</p>
              <Link href={href} className="btn-primary mt-10">
                {label}
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
