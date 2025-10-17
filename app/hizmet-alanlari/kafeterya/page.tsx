import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle2, Music, Volume2, Radio } from "lucide-react"
import Link from "next/link"

export default function KafeteryaPage() {
  const features = [
    "Kafeterya konseptinize özel müzik seçimi",
    "Telif hakkı ödemesi gerektirmeyen lisanslı müzik",
    "Sabah, öğle ve akşam için farklı müzik programları",
    "Özel gün ve etkinlikler için müzik düzenlemeleri",
    "7/24 kesintisiz yayın",
    "Uzaktan yönetim ve kontrol",
  ]

  const benefits = [
    {
      icon: Music,
      title: "Sosyal Ortamlar Yaratın",
      description: "Kafeteryanızın konseptine uygun müziklerle müşterilerinize unutulmaz arkadaşlıklar kazandırın",
    },
    {
      icon: Volume2,
      title: "Trendleri Takip Edin",
      description: "Müşterileriniz farklı müzik türleri mi aramakta? RTP Medya'da müzik türlerinin sınırı yok",
    },
    {
      icon: Radio,
      title: "Kolay Yönetim",
      description: "RTP Medya Player ile dilediğiniz saate dilediğiniz türde müzikler",
    },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 pt-32 pb-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent">
                Kafeterya İçi Müzik Yayını
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
                Kafeteryanızın atmosferini doğru müziklerle zenginleştirin. Müşterilerinize unutulmaz bir yemek deneyimi
                sunun.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
              <div>
                <img
                  src="/cafe-interior.jpg"
                  alt="Kafeterya İçi Müzik"
                  className="w-full h-[400px] object-cover rounded-2xl shadow-2xl"
                />
              </div>
              <div className="flex flex-col justify-center">
                <h2 className="text-3xl font-bold mb-6">Kafeteryanızda Müzik Yayını Neden Önemli?</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Doğru müzik seçimi, kafeteryanızın atmosferini belirleyen en önemli faktörlerden biridir.
                  Müşterilerinizin kahve deneyimini zenginleştiren, sosyalleşmelerini sağlayan ve tekrar gelmelerini
                  teşvik eden profesyonel müzik yayını ile fark yaratın.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  RTP Medya olarak, kafeteryanızın konseptine, hedef kitlenize ve günün farklı saatlerine uygun özel
                  müzik programları hazırlıyoruz. Telif hakları konusunda endişelenmenize gerek yok - tüm müziklerimiz
                  lisanslıdır.
                </p>
                <Link href="/teklif-al">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-red-600 to-red-800 hover:from-red-700 hover:to-red-900 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                  >
                    Ücretsiz Teklif Alın
                  </Button>
                </Link>
              </div>
            </div>

            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-8 text-center">Özellikler</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {features.map((feature, index) => (
                  <Card
                    key={index}
                    className="border-2 hover:border-red-600/50 transition-all duration-300 hover:shadow-lg"
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="text-red-600 flex-shrink-0 mt-1" size={20} />
                        <p className="text-sm leading-relaxed">{feature}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-8 text-center">Avantajlar</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {benefits.map((benefit, index) => (
                  <Card
                    key={index}
                    className="border-2 hover:border-red-600/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                  >
                    <CardContent className="p-8 text-center">
                      <div className="w-16 h-16 bg-gradient-to-br from-red-600 to-red-800 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                        <benefit.icon className="text-white" size={32} />
                      </div>
                      <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{benefit.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <Card className="bg-gradient-to-r from-red-600 to-red-800 border-0 text-white">
              <CardContent className="p-12 text-center">
                <h2 className="text-3xl font-bold mb-4">Kafeteryanız İçin Özel Müzik Çözümü</h2>
                <p className="text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
                  Hemen bizimle iletişime geçin ve kafeteryanız için özel hazırlanmış müzik programımızı keşfedin.
                  Ücretsiz demo ve danışmanlık hizmeti için formu doldurun.
                </p>
                <Link href="/teklif-al">
                  <Button
                    size="lg"
                    variant="secondary"
                    className="bg-white text-red-600 hover:bg-white/90 shadow-xl hover:scale-105 transition-all duration-300"
                  >
                    Hemen Başlayın
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
