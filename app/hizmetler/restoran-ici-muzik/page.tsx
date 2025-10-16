import { ServicePageTemplate } from "@/components/service-page-template"

export default function RestoranIciMuzikPage() {
  const features = [
    "Restoranınızın konseptine özel müzik seçimi",
    "Kahvaltı, öğle ve akşam için farklı playlistler",
    "Otomatik ses seviyesi ayarlaması",
    "7/24 kesintisiz yayın",
    "Lisanslı müzik - telif hakkı sorunu yok",
    "Uzaktan yönetim ve kontrol",
    "Zaman dilimli programlar",
    "Müşteri deneyimini zenginleştiren atmosfer",
    "Profesyonel müzik küratörlüğü",
  ]

  const benefits = [
    {
      title: "Atmosfere Uygun Müzik",
      description: "Restoranınızın konseptine özel müzik seçimi ile konuklarınıza unutulmaz bir deneyim sunun",
    },
    {
      title: "Müşteri Deneyimi",
      description: "Doğru müzik seçimi ile konuklarınızın yemek süresini uzatın ve memnuniyeti artırın",
    },
    {
      title: "Lisanslı Müzik",
      description: "Telif hakkı sorunu yaşamadan, yasal ve lisanslı müziklerle yayın yapın",
    },
  ]

  return (
    <ServicePageTemplate
      title="Restoran İçi Müzik Yayını"
      description="Konuklarınıza unutulmaz bir yemek deneyimi sunmak için özel olarak seçilmiş müzik programları. Restoranınızın konseptine ve zaman dilimlerine göre özelleştirilmiş profesyonel müzik yayını."
      image="/elegant-restaurant-interior.png"
      features={features}
      benefits={benefits}
      ctaTitle="Restoranınız İçin Özel Müzik Çözümü"
      ctaDescription="Konuklarınızın yemek deneyimini mükemmelleştirmek için hemen bizimle iletişime geçin."
    />
  )
}
