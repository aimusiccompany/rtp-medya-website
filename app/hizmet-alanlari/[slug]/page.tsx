import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { ServicePageTemplate } from "@/components/service-page-template"
import { JsonLd } from "@/components/json-ld"
import { getSector, sectors } from "@/lib/sectors"
import { breadcrumbLd, serviceLd } from "@/lib/site"

type Params = { slug: string }

export function generateStaticParams() {
  return sectors.map((s) => ({ slug: s.slug }))
}

export const dynamicParams = false

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params
  const sector = getSector(slug)
  if (!sector) return {}
  const title = `${sector.title} - Lisanslı Ortam Müziği`
  const path = `/hizmet-alanlari/${sector.slug}`
  return {
    title,
    description: `${sector.description} Telif sorunu olmayan lisanslı müzik, 7/24 yayın ve uzaktan yönetim. Ücretsiz teklif alın.`,
    alternates: { canonical: path },
    openGraph: { url: path, title, description: sector.description, images: [{ url: sector.image }] },
  }
}

export default async function SectorPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params
  const sector = getSector(slug)
  if (!sector) notFound()
  const path = `/hizmet-alanlari/${sector.slug}`
  return (
    <>
      <JsonLd
        data={[
          breadcrumbLd([{ name: sector.title, path }]),
          serviceLd({ name: sector.title, serviceType: "İşletme içi müzik yayını", description: sector.description, path }),
        ]}
      />
      <ServicePageTemplate {...sector} />
    </>
  )
}
