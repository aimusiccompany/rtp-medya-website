/** Site genelinde kullanılan kurumsal bilgiler (SEO, yapılandırılmış veri, iletişim). */
export const SITE = {
  name: "RTP Medya",
  url: "https://www.rtpmedya.com.tr",
  locale: "tr_TR",
  foundingYear: "2005",
  title: "RTP Medya | Kurumsal Radyo ve İşletme İçi Müzik Yayını",
  description:
    "2005'ten beri işletmelere özel kurumsal radyo, lisanslı işletme içi müzik yayını, anons ve profesyonel seslendirme. Mağaza, restoran, otel, AVM ve market için ücretsiz teklif alın.",
  keywords: [
    "kurumsal radyo",
    "işletme içi müzik yayını",
    "ortam müziği",
    "mağaza içi müzik yayını",
    "restoran müzik yayını",
    "lisanslı müzik yayını",
    "telif hakkı güvenli müzik",
    "profesyonel seslendirme",
    "santral seslendirme",
    "anons ve jingle",
    "RTP Medya",
    "RTP Medya Player",
  ],
  email: "info@rtpmedya.com.tr",
  phones: ["+902122630902", "+905462630900"],
  address: {
    street: "Esentepe Mah. Büyükdere Cad. Levent 199 No: 199 İçkapı No: 6",
    locality: "Şişli",
    region: "İstanbul",
    country: "TR",
  },
  sameAs: [
    "https://www.instagram.com/rtpmedya/",
    "https://www.youtube.com/@rtpmedya3400",
    "https://tr.linkedin.com/company/rtp-medya",
  ],
  ogImage: "/og-image.png",
} as const

export const absoluteUrl = (path = "/") => `${SITE.url}${path === "/" ? "" : path}`

export const breadcrumbLd = (items: { name: string; path: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [{ name: "Ana Sayfa", path: "/" }, ...items].map((it, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: it.name,
    item: absoluteUrl(it.path),
  })),
})

export const serviceLd = (s: { name: string; description: string; path: string; serviceType: string }) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  name: s.name,
  serviceType: s.serviceType,
  description: s.description,
  url: absoluteUrl(s.path),
  areaServed: { "@type": "Country", name: "Türkiye" },
  provider: { "@id": `${SITE.url}/#organization` },
})
