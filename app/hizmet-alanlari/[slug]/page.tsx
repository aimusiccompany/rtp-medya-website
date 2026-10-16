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
  const title = `${sector.title} ve Anons Yönetimi`
  const path = `/hizmet-alanlari/${sector.slug}`
  return {
    title,
    description: `${sector.title}: işletmenize özel müzik seçimi, zamanlanmış anonslar ve merkezi yayın yönetimi. RTP Medya ile ücretsiz teklif alın.`,
    alternates: { canonical: path },
    twitter: { card: "summary_large_image", title, description: sector.description, images: [sector.image] },
    openGraph: { url: path, title, description: sector.description, locale: "tr_TR", siteName: "RTP Medya", type: "website", images: [{ url: sector.image }] },
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
