import { ServicePageTemplate } from "@/components/service-page-template"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function AkaryakitPage() {
  return (
    <>
      <Header />
      <ServicePageTemplate
        title="Akaryakıt İstasyonu Müzik Yayını"
        description="Akaryakıt istasyonunuzda müşterilerinize keyifli bir deneyim sunan, marka bilinirliğinizi artıran profesyonel müzik yayını."
        image="/gas-station.jpg"
        features={[
          "Akaryakıt istasyonu konseptinize özel müzik",
          "Market alanı için uygun müzik programları",
          "Kampanya ve duyurular için müzik arası",
          "Farklı zaman dilimlerine göre müzik seçimi",
          "Telif hakkı ödemesi gerektirmeyen lisanslı müzik",
          "Uzaktan yönetim ve kolay kontrol",
        ]}
        benefits={[
          {
            title: "Müşteri Deneyimi",
            description: "Keyifli müziklerle müşterilerinizin istasyonda geçirdikleri süreyi iyileştirin",
          },
          {
            title: "Marka Kimliği",
            description: "İstasyonunuzun kimliğine uygun müziklerle marka bilinirliğinizi güçlendirin",
          },
          {
            title: "Satış Desteği",
            description: "Market alanında doğru müziklerle ek satışları teşvik edin",
          },
        ]}
        ctaTitle="Akaryakıt İstasyonunuz İçin Özel Müzik Çözümü"
        ctaDescription="Hemen bizimle iletişime geçin ve istasyonunuz için özel hazırlanmış müzik programımızı keşfedin."
      />
      <Footer />
    </>
  )
}
