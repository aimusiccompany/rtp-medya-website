import { ServicePageTemplate } from "@/components/service-page-template"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function MarketPage() {
  return (
    <>
      <Header />
      <ServicePageTemplate
        title="Market İçi Müzik Yayını"
        description="Marketinizde alışveriş deneyimini iyileştiren, müşterilerin daha uzun süre kalmasını sağlayan profesyonel müzik yayını."
        image="/market-interior.jpg"
        features={[
          "Market konseptinize uygun müzik seçimi",
          "Alışveriş süresini uzatan müzik stratejileri",
          "Kampanya anonsları için özel müzik arası",
          "Farklı bölümler için farklı müzik temaları",
          "Telif hakkı ödemesi gerektirmeyen lisanslı müzik",
          "7/24 kesintisiz yayın ve uzaktan yönetim",
        ]}
        benefits={[
          {
            title: "Alışveriş Deneyimi",
            description: "Rahatlatıcı müziklerle müşterilerinizin alışveriş deneyimini iyileştirin",
          },
          {
            title: "Satış Artışı",
            description: "Doğru müzik temposu ile müşterilerin market içinde geçirdikleri süreyi artırın",
          },
          {
            title: "Kampanya Desteği",
            description: "Özel günler ve kampanyalar için müzik arası anons desteği",
          },
        ]}
        ctaTitle="Marketiniz İçin Özel Müzik Çözümü"
        ctaDescription="Hemen bizimle iletişime geçin ve marketiniz için özel hazırlanmış müzik programımızı keşfedin."
      />
      <Footer />
    </>
  )
}
