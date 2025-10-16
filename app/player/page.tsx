"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Download, Music, Radio, Clock, Wifi, Settings, Smartphone } from "lucide-react"
import Image from "next/image"

export default function PlayerPage() {
  const features = [
    {
      icon: Music,
      title: "Geniş Müzik Kütüphanesi",
      description: "Binlerce lisanslı müzik parçasına anında erişim",
    },
    {
      icon: Radio,
      title: "Canlı Radyo Yayını",
      description: "Kesintisiz profesyonel radyo yayını",
    },
    {
      icon: Clock,
      title: "Zamanlama Özellikleri",
      description: "Otomatik program ve playlist yönetimi",
    },
    {
      icon: Wifi,
      title: "Bulut Tabanlı",
      description: "Her yerden erişim ve yönetim imkanı",
    },
    {
      icon: Settings,
      title: "Kolay Yönetim",
      description: "Kullanıcı dostu arayüz ve kontrol paneli",
    },
    {
      icon: Smartphone,
      title: "Mobil Uyumlu",
      description: "Tüm cihazlardan kontrol edebilme",
    },
  ]

  const handleDownload = () => {
    // GitHub Release üzerinden indirilecek dosya linki
    const link = document.createElement("a")
    link.href =
      "https://github.com/aimusiccompany/rtp-medya-website/releases/download/v1.0/RTPMedyaPlayer-Setup.exe"
    link.download = "RTPMedyaPlayer-Setup.exe"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-background via-red-950/5 to-background relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-red-600/10 via-transparent to-red-800/10" />

        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <div className="inline-block mb-6 px-4 py-2 bg-gradient-to-r from-red-600/10 to-red-800/10 border border-red-600/20 rounded-full">
              <span className="text-red-600 font-semibold text-sm">Profesyonel Müzik Yayın Çözümü</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">
              <span className="bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent">
                RTP Medya Player
              </span>
            </h1>

            <p className="text-xl text-muted-foreground mb-8 text-pretty leading-relaxed">
              İşletmeniz için özel olarak tasarlanmış profesyonel müzik yayın platformu. Restoran, otel, mağaza ve
              cafe'niz için mükemmel müzik deneyimi.
            </p>

            <Button
              size="lg"
              onClick={handleDownload}
              className="bg-gradient-to-r from-red-600 to-red-800 hover:from-red-700 hover:to-red-900 text-white text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Download className="mr-2" size={24} />
              Windows İçin İndir
            </Button>
            <p className="text-sm text-muted-foreground mt-4">Windows 7 ve üzeri sürümler için uyumludur.</p>
          </div>

          {/* Player Preview Image */}
          <div className="max-w-5xl mx-auto">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-border bg-gradient-to-br from-muted to-muted/50">
              <Image
                src="/rtp-player-interface-v2.png"
                alt="RTP Medya Player Arayüzü"
                width={1200}
                height={675}
                className="w-full h-auto"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent">
              Özellikler
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              RTP Medya Player ile işletmenizin müzik yayınını profesyonelce yönetin
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border-2 hover:border-red-600/50 bg-gradient-to-br from-background to-muted/50"
              >
                <CardContent className="p-8">
                  <div className="w-14 h-14 bg-gradient-to-br from-red-600 to-red-800 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <feature.icon className="text-white" size={28} />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent">
              Neden RTP Medya Player?
            </h2>

            <div className="space-y-6">
              <Card className="border-2 hover:border-red-600/50 transition-all duration-300">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-4">Lisanslı Müzik Kütüphanesi</h3>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    Telif hakkı sorunu yaşamadan, geniş müzik arşivimizden işletmenize uygun müzikleri seçin ve
                    yayınlayın.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-red-600/50 transition-all duration-300">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-4">Otomatik Program Yönetimi</h3>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    Günün farklı saatlerinde farklı müzik türleri çalın. Sabah, öğle ve akşam için özel playlistler
                    oluşturun.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-red-600/50 transition-all duration-300">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-4">Profesyonel Ses Kalitesi</h3>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    Yüksek kaliteli ses dosyaları ile müşterilerinize en iyi dinleme deneyimini sunun.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-red-600 to-red-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />

        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Hemen Başlayın</h2>
            <p className="text-xl mb-8 text-white/90 leading-relaxed">
              RTP Medya Player'ı indirin ve işletmenizin müzik deneyimini dönüştürün
            </p>
            <Button
              size="lg"
              variant="secondary"
              onClick={handleDownload}
              className="text-lg px-8 py-6 bg-white text-red-600 hover:bg-gray-100 shadow-xl"
            >
              <Download className="mr-2" size={24} />
              Ücretsiz İndirin
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
