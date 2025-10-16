"use client"  // <<--- BU ÇOK ÖNEMLİ

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Mic, Video, Phone, Radio, Volume2, Users } from "lucide-react"

export default function ProfesyonelSeslendirmePage() {
  const services = [
    {
      icon: Video,
      title: "Reklam Seslendirme",
      description: "TV ve radyo reklamları için profesyonel ses sanatçıları",
    },
    {
      icon: Phone,
      title: "Santral Seslendirme",
      description: "Kurumsal telefon santralleriniz için özel sesler",
    },
    {
      icon: Radio,
      title: "Anons & Jingle",
      description: "Mağaza içi anonslar ve akılda kalıcı jingle'lar",
    },
    {
      icon: Volume2,
      title: "Tanıtım Filmi",
      description: "Kurumsal tanıtım videoları için seslendirme",
    },
    {
      icon: Users,
      title: "Geniş Seslendirmen Kadrosu",
      description: "Farklı ton ve karakterde profesyonel sesler",
    },
    {
      icon: Mic,
      title: "Stüdyo Kalitesi",
      description: "Profesyonel kayıt ekipmanları ve akustik ortam",
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
                Profesyonel Seslendirme
              </span>
            </h1>

            <p className="text-xl text-muted-foreground mb-8 text-pretty leading-relaxed">
              Markanıza ses verin! Reklam, tanıtım, santral ve anons için geniş seslendirmen kadromuzla her türlü
              projenize profesyonel çözümler sunuyoruz.
            </p>

            <Button
              size="lg"
              className="bg-gradient-to-r from-red-600 to-red-800 hover:from-red-700 hover:to-red-900 text-white text-lg px-8 py-6 shadow-lg"
              onClick={() => window.location.href = "/teklif-al"} 
            >
              Teklif Alın
            </Button>
          </div>

          <div className="max-w-5xl mx-auto">
            <Card className="border-2 border-red-600/20 bg-gradient-to-br from-background to-muted/50">
              <CardContent className="p-12">
                <h2 className="text-3xl font-bold mb-6">Profesyonel Seslendirme Hizmetimiz</h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Ses, markanızın kimliğinin en önemli parçalarından biridir. Doğru ses tonu ve karakter, mesajınızın
                  hedef kitlenize ulaşmasında kritik rol oynar. RTP Medya olarak, yılların deneyimi ve geniş
                  seslendirmen kadromuzla her türlü projenize uygun seslendirme çözümleri sunuyoruz.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Profesyonel stüdyomuzda, en son teknoloji ekipmanlarla kayıt yapıyor, mixing ve mastering süreçleriyle
                  mükemmel ses kalitesi sağlıyoruz. Reklam filmlerinden kurumsal tanıtımlara, telefon santrallerinden
                  mağaza içi anonslarına kadar geniş bir yelpazede hizmet veriyoruz.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Hizmet Alanları */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent">
              Hizmet Alanlarımız
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Her türlü seslendirme ihtiyacınız için yanınızdayız
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border-2 hover:border-red-600/50"
              >
                <CardContent className="p-8">
                  <div className="w-14 h-14 bg-gradient-to-br from-red-600 to-red-800 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <service.icon className="text-white" size={28} />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Çalışma Süreci */}
      <section className="py-20 bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent">
              Çalışma Sürecimiz
            </h2>

            <div className="space-y-6">
              {["Proje Brifingi", "Seslendirmen Seçimi", "Kayıt & Prodüksiyon", "Teslimat"].map(
                (step, idx) => (
                  <Card key={idx} className="border-2 hover:border-red-600/50 transition-all duration-300">
                    <CardContent className="p-8">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-red-800 rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold text-xl">
                          {idx + 1}
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold mb-3">{step}</h3>
                          <p className="text-muted-foreground leading-relaxed text-lg">
                            {/* Buraya açıklamalar eklenebilir */}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )
              )}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-red-600 to-red-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Projenizi Konuşalım</h2>
            <p className="text-xl mb-8 text-white/90 leading-relaxed">
              Seslendirme ihtiyaçlarınız için bizimle iletişime geçin, size özel çözümler sunalım
            </p>
            <Button
              size="lg"
              variant="secondary"
              className="text-lg px-8 py-6 bg-white text-red-600 hover:bg-gray-100"
              onClick={() => window.location.href = "/iletisim"} 
            >
              İletişime Geç
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
