import { ServicePageTemplate } from "@/components/service-page-template"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function HastanePage() {
  return (
    <>
      <Header />
      <ServicePageTemplate
        title="Hastane İçi Müzik Yayını"
        description="Hastanenizde hasta ve ziyaretçilere huzurlu bir ortam sunan, stresi azaltan profesyonel müzik yayını."
        image="/hospital-waiting.jpg"
        features={[
          "Hastane ortamına uygun sakinleştirici müzikler",
          "Farklı bölümler için özel müzik programları",
          "Hasta ve ziyaretçi stresini azaltan müzik seçimi",
          "Bekleme alanları için rahatlatıcı müzikler",
          "Telif hakkı ödemesi gerektirmeyen lisanslı müzik",
          "Bölgesel kontrol ve ses seviyesi yönetimi",
        ]}
        benefits={[
          {
            title: "Stres Azaltma",
            description: "Sakinleştirici müziklerle hasta ve ziyaretçilerin stresini azaltın",
          },
          {
            title: "Huzurlu Ortam",
            description: "Hastane ortamında huzurlu bir atmosfer yaratın",
          },
          {
            title: "İyileşme Desteği",
            description: "Müzik terapisi etkisi ile hastaların iyileşme sürecine katkı sağlayın",
          },
        ]}
        ctaTitle="Hastaneniz İçin Özel Müzik Çözümü"
        ctaDescription="Hemen bizimle iletişime geçin ve hastaneniz için özel hazırlanmış müzik programımızı keşfedin."
      />
      <Footer />
    </>
  )
}
