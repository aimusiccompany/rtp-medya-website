import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { ServicePageTemplate } from "@/components/service-page-template"
import { getSector, sectors } from "@/lib/sectors"

type Params = { slug: string }

export function generateStaticParams() {
  return sectors.map((s) => ({ slug: s.slug }))
}

export const dynamicParams = false

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params
  const sector = getSector(slug)
  if (!sector) return {}
  return { title: `${sector.title} | RTP Medya`, description: sector.description }
}

export default async function SectorPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params
  const sector = getSector(slug)
  if (!sector) notFound()
  return <ServicePageTemplate {...sector} />
}
