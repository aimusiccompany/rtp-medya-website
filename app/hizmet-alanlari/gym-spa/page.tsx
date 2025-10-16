import { ServicePageTemplate } from "@/components/service-page-template"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function GymSpaPage() {
  return (
    <>
      <Header />
      <ServicePageTemplate
        title="Gym & Spa İçi Müzik Yayını"
        description="Spor salonunuz ve spa merkezinizde motivasyon ve rahatlama sağlayan profesyonel müzik yayını."
        image="/gym-spa.jpg"
        features={[
          "Gym ve spa alanları için özel müzik programları",
          "Antrenman motivasyonu artıran enerjik müzikler",
          "Spa alanı için rahatlatıcı ve huzur veren müzikler",
          "Farklı antrenman türlerine göre müzik seçimi",
          "Telif hakkı ödemesi gerektirmeyen lisanslı müzik",
          "Bölgesel kontrol ve uzaktan yönetim",
        ]}
        benefits={[
          {
            title: "Motivasyon",
            description: "Enerjik müziklerle üyelerinizin antrenman motivasyonunu artırın",
          },
          {
            title: "Rahatlama",
            description: "Spa alanında huzur veren müziklerle dinlenme deneyimini iyileştirin",
          },
          {
            title: "Üye Memnuniyeti",
            description: "Doğru müzik seçimi ile üye memnuniyetini ve sadakatini artırın",
          },
        ]}
        ctaTitle="Gym & Spa'nız İçin Özel Müzik Çözümü"
        ctaDescription="Hemen bizimle iletişime geçin ve işletmeniz için özel hazırlanmış müzik programımızı keşfedin."
      />
      <Footer />
    </>
  )
}
