import { ServicePageTemplate } from "@/components/service-page-template"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function OtelPage() {
  return (
    <>
      <Header />
      <ServicePageTemplate
        title="Otel İçi Müzik Yayını"
        description="Otelinizde misafirlerinize huzurlu ve konforlu bir konaklama deneyimi sunan profesyonel müzik yayını."
        image="/hotel-lobby.jpg"
        features={[
          "Otel konseptinize özel müzik seçimi",
          "Lobi, restoran, spa gibi farklı alanlar için özel müzikler",
          "Sabah, öğle ve akşam için farklı müzik programları",
          "Özel etkinlikler için müzik düzenlemeleri",
          "Telif hakkı ödemesi gerektirmeyen lisanslı müzik",
          "7/24 kesintisiz yayın ve bölgesel kontrol",
        ]}
        benefits={[
          {
            title: "Misafir Memnuniyeti",
            description: "Rahatlatıcı müziklerle misafirlerinizin konaklama deneyimini iyileştirin",
          },
          {
            title: "Atmosfer Yaratın",
            description: "Her alan için özel müziklerle otelinizin atmosferini zenginleştirin",
          },
          {
            title: "Marka Kimliği",
            description: "Otelinizin kimliğine uygun müziklerle marka bilinirliğinizi güçlendirin",
          },
        ]}
        ctaTitle="Oteliniz İçin Özel Müzik Çözümü"
        ctaDescription="Hemen bizimle iletişime geçin ve oteliniz için özel hazırlanmış müzik programımızı keşfedin."
      />
      <Footer />
    </>
  )
}
