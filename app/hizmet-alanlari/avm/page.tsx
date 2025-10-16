import { ServicePageTemplate } from "@/components/service-page-template"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function AVMPage() {
  return (
    <>
      <Header />
      <ServicePageTemplate
        title="AVM İçi Müzik Yayını"
        description="Alışveriş merkezinizde ziyaretçilere unutulmaz bir deneyim sunan, marka kimliğinizi güçlendiren profesyonel müzik yayını."
        image="/avm-interior.jpg"
        features={[
          "AVM konseptinize özel müzik programları",
          "Farklı katlar ve bölümler için özel müzikler",
          "Etkinlik ve kampanyalar için özel düzenlemeler",
          "Ziyaretçi profiline göre müzik seçimi",
          "Telif hakkı ödemesi gerektirmeyen lisanslı müzik",
          "Merkezi yönetim ve bölgesel kontrol imkanı",
        ]}
        benefits={[
          {
            title: "Marka Deneyimi",
            description: "AVM'nizin kimliğine uygun müziklerle unutulmaz bir alışveriş deneyimi yaratın",
          },
          {
            title: "Ziyaretçi Süresi",
            description: "Doğru müzik seçimi ile ziyaretçilerin AVM'de geçirdikleri süreyi artırın",
          },
          {
            title: "Etkinlik Desteği",
            description: "Özel günler ve etkinlikler için dinamik müzik programları",
          },
        ]}
        ctaTitle="AVM'niz İçin Özel Müzik Çözümü"
        ctaDescription="Hemen bizimle iletişime geçin ve AVM'niz için özel hazırlanmış müzik programımızı keşfedin."
      />
      <Footer />
    </>
  )
}
