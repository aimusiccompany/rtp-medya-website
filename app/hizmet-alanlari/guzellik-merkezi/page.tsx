import { ServicePageTemplate } from "@/components/service-page-template"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function GuzellikMerkeziPage() {
  return (
    <>
      <Header />
      <ServicePageTemplate
        title="Güzellik Merkezi İçi Müzik Yayını"
        description="Güzellik merkezinizde müşterilerinize huzurlu ve rahatlatıcı bir deneyim sunan profesyonel müzik yayını."
        image="/beauty-salon.jpg"
        features={[
          "Güzellik merkezi konseptinize özel müzik seçimi",
          "Rahatlatıcı ve huzur veren müzik programları",
          "Farklı hizmet alanları için özel müzikler",
          "Müşteri profiline göre müzik seçimi",
          "Telif hakkı ödemesi gerektirmeyen lisanslı müzik",
          "7/24 kesintisiz yayın ve kolay yönetim",
        ]}
        benefits={[
          {
            title: "Rahatlama",
            description: "Huzur veren müziklerle müşterilerinizin rahatlamasını sağlayın",
          },
          {
            title: "Atmosfer",
            description: "Güzellik merkezinizin atmosferini müzikle zenginleştirin",
          },
          {
            title: "Müşteri Memnuniyeti",
            description: "Doğru müzik seçimi ile müşteri memnuniyetini artırın",
          },
        ]}
        ctaTitle="Güzellik Merkeziniz İçin Özel Müzik Çözümü"
        ctaDescription="Hemen bizimle iletişime geçin ve güzellik merkeziniz için özel hazırlanmış müzik programımızı keşfedin."
      />
      <Footer />
    </>
  )
}
