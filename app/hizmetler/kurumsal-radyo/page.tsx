import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Radio, Music, Headphones, Users, Clock, BarChart } from "lucide-react"

export default function KurumsalRadyoPage() {
  const benefits = [
    {
      icon: Music,
      title: "Özel Müzik Seçimi",
      description: "Markanıza ve hedef kitlenize özel müzik programları",
    },
    {
      icon: Headphones,
      title: "Profesyonel Prodüksiyon",
      description: "Stüdyo kalitesinde ses ve yayın standardı",
    },
    {
      icon: Users,
      title: "Marka Kimliği",
      description: "Kurumsal kimliğinizi yansıtan özel içerikler",
    },
    {
      icon: Clock,
      title: "7/24 Yayın",
      description: "Kesintisiz müzik ve içerik akışı",
    },
    {
      icon: BarChart,
      title: "Raporlama",
      description: "Detaylı yayın istatistikleri ve analizler",
    },
    {
      icon: Radio,
      title: "Canlı Yayın",
      description: "Özel etkinlikler için canlı yayın desteği",
    },
  ]

  return (
    <main className="min-h-screen">
      <Header />

      <section className="pt-32 pb-20 bg-gradient-to-br from-background via-red-950/5 to-background relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-red-600/10 via-transparent to-red-800/10" />

        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="inline-block mb-6 px-4 py-2 bg-gradient-to-r from-red-600/10 to-red-800/10 border border-red-600/20 rounded-full">
              <span className="text-red-600 font-semibold text-sm">Hizmetlerimiz</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">
              <span className="bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent">
                Kurumsal Radyo
              </span>
            </h1>

            <p className="text-xl text-muted-foreground mb-8 text-pretty leading-relaxed">
              İşletmeniz için özel olarak tasarlanmış profesyonel radyo yayını. Markanızın sesini duyurun,
              müşterilerinizle duygusal bağ kurun.
            </p>

            <Button
              size="lg"
              className="bg-gradient-to-r from-red-600 to-red-800 hover:from-red-700 hover:to-red-900 text-white text-lg px-8 py-6 shadow-lg"
            >
              Teklif Alın
            </Button>
          </div>

          <div className="max-w-5xl mx-auto">
            <Card className="border-2 border-red-600/20 bg-gradient-to-br from-background to-muted/50">
              <CardContent className="p-12">
                <h2 className="text-3xl font-bold mb-6">Kurumsal Radyo Nedir?</h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Kurumsal radyo, işletmenizin kimliğini yansıtan, hedef kitlenize özel olarak hazırlanmış profesyonel
                  bir müzik ve içerik yayınıdır. Mağazalarınızda, otellerinizde, restoranlarınızda veya ofislerinizde
                  çalan müzikler ve anonslar, markanızın bir parçası haline gelir.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  RTP Medya olarak, sektörünüze ve markanıza özel müzik programları oluşturuyor, profesyonel
                  seslendirmelerle zenginleştiriyor ve kesintisiz yayın garantisi sunuyoruz.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent">
              Avantajlar
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Kurumsal radyo ile işletmenize değer katın
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border-2 hover:border-red-600/50"
              >
                <CardContent className="p-8">
                  <div className="w-14 h-14 bg-gradient-to-br from-red-600 to-red-800 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <benefit.icon className="text-white" size={28} />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-red-600 to-red-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Hemen Başlayın</h2>
            <p className="text-xl mb-8 text-white/90 leading-relaxed">
              Kurumsal radyo çözümlerimiz hakkında detaylı bilgi almak için bizimle iletişime geçin
            </p>
            <Button size="lg" variant="secondary" className="text-lg px-8 py-6 bg-white text-red-600 hover:bg-gray-100">
              İletişime Geç
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
