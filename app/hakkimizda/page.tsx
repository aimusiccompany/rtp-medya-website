import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Users, Target, Award, TrendingUp } from "lucide-react"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function AboutPage() {
  return (
    <>
      <Header />
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative py-24 bg-gradient-to-br from-red-600 via-red-700 to-gray-900 text-white overflow-hidden">
          <div className="absolute inset-0 bg-[url('/abstract-sound-waves.png')] opacity-10 bg-cover bg-center" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance animate-fade-in">Biz Kimiz?</h1>
              <p className="text-xl md:text-2xl text-red-50 leading-relaxed text-pretty">
                2005 yılından beri profesyonel ses ve müzik yayıncılığı alanında hizmet veren RTP Medya, kurumsal radyo
                ve seslendirme çözümleriyle sektörde öncü konumdadır.
              </p>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              <Card className="border-2 hover:border-red-600/50 transition-all duration-300 hover:shadow-xl group">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-red-600 to-red-800 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Target className="text-white" size={32} />
                  </div>
                  <h2 className="text-3xl font-bold mb-4">Misyonumuz</h2>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    İşletmelere özel, profesyonel ve telif hakkı güvenli müzik yayını ve seslendirme hizmetleri sunarak,
                    markaların müşteri deneyimini iyileştirmek ve kurumsal kimliklerini güçlendirmek.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-red-600/50 transition-all duration-300 hover:shadow-xl group">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-red-600 to-red-800 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <TrendingUp className="text-white" size={32} />
                  </div>
                  <h2 className="text-3xl font-bold mb-4">Vizyonumuz</h2>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    Türkiye'nin en güvenilir kurumsal ses ve müzik yayıncılığı markası olmak, teknolojik yenilikleri
                    takip ederek müşterilerimize en iyi hizmeti sunmak.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-gradient-to-b from-muted/30 to-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Rakamlarla RTP Medya</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
                20 yıllık tecrübemizle sektörde fark yaratıyoruz
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
              <Card className="border-2 hover:border-red-600/50 transition-all duration-300 hover:shadow-xl text-center group">
                <CardContent className="p-8">
                  <div className="text-5xl font-bold bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                    20+
                  </div>
                  <p className="text-muted-foreground font-medium">Yıllık Tecrübe</p>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-red-600/50 transition-all duration-300 hover:shadow-xl text-center group">
                <CardContent className="p-8">
                  <div className="text-5xl font-bold bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                    46.000+
                  </div>
                  <p className="text-muted-foreground font-medium">Tamamlanan Proje</p>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-red-600/50 transition-all duration-300 hover:shadow-xl text-center group">
                <CardContent className="p-8">
                  <div className="text-5xl font-bold bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                    500+
                  </div>
                  <p className="text-muted-foreground font-medium">Mutlu Müşteri</p>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-red-600/50 transition-all duration-300 hover:shadow-xl text-center group">
                <CardContent className="p-8">
                  <div className="text-5xl font-bold bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                    24/7
                  </div>
                  <p className="text-muted-foreground font-medium">Kesintisiz Destek</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Neden RTP Medya?</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
                Profesyonel ekibimiz ve teknolojik altyapımızla fark yaratıyoruz
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <Card className="border-2 hover:border-red-600/50 transition-all duration-300 hover:shadow-xl group">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-red-600 to-red-800 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Users className="text-white" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Uzman Ekip</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Alanında uzman ses mühendisleri ve müzik editörleriyle profesyonel hizmet sunuyoruz.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-red-600/50 transition-all duration-300 hover:shadow-xl group">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-red-600 to-red-800 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Award className="text-white" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Telif Güvencesi</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Tüm müziklerimiz lisanslıdır, telif hakkı konusunda tam güvence sağlıyoruz.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-red-600/50 transition-all duration-300 hover:shadow-xl group">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-red-600 to-red-800 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Target className="text-white" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Özel Çözümler</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Her işletmenin ihtiyacına özel, markanıza uygun müzik ve ses çözümleri üretiyoruz.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-red-600 via-red-700 to-gray-900 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Birlikte Çalışmaya Hazır mısınız?</h2>
            <p className="text-xl text-red-50 mb-8 max-w-2xl mx-auto text-pretty leading-relaxed">
              İşletmeniz için özel müzik ve ses çözümlerimizi keşfedin
            </p>
            <Link href="/teklif-al">
              <Button
                size="lg"
                className="bg-white text-red-600 hover:bg-red-50 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 text-lg px-8 py-6"
              >
                Hemen Teklif Alın
              </Button>
            </Link>
          </div>
        </section>
      </div>
      <Footer />
    </>
  )
}
