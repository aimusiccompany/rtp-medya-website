import type { MetadataRoute } from "next"
import { SITE } from "@/lib/site"
import { sectors } from "@/lib/sectors"

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()
  const page = (path: string, priority: number, changeFrequency: "weekly" | "monthly" = "monthly") => ({
    url: `${SITE.url}${path}`,
    lastModified: now,
    changeFrequency,
    priority,
  })
  return [
    page("", 1, "weekly"),
    page("/hizmetler/kurumsal-radyo", 0.9),
    page("/hizmetler/profesyonel-seslendirme", 0.9),
    ...sectors.map((s) => page(`/hizmet-alanlari/${s.slug}`, 0.8)),
    page("/player", 0.7),
    page("/hakkimizda", 0.6),
    page("/iletisim", 0.6),
    page("/teklif-al", 0.7),
  ]
}
