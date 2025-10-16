import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle2, Music, Volume2, Radio } from "lucide-react"
import Link from "next/link"

interface Benefit {
  title: string
  description: string
}

interface ServicePageTemplateProps {
  title: string
  description: string
  image?: string // Changed from imageQuery to image prop for direct image paths
  features: string[]
  benefits: Benefit[]
  ctaTitle: string
  ctaDescription: string
}

export function ServicePageTemplate({
  title,
  description,
  image, // Using image prop instead of imageQuery
  features,
  benefits,
  ctaTitle,
  ctaDescription,
}: ServicePageTemplateProps) {
  const icons = [Music, Volume2, Radio]

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 pt-32 pb-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent">
                {title}
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
                {description}
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
              <div>
                <img
                  src={image || "/placeholder.svg?height=400&width=600"}
                  alt={title}
                  className="w-full h-[400px] object-cover rounded-2xl shadow-2xl"
                />
              </div>
              <div className="flex flex-col justify-center">
                <h2 className="text-3xl font-bold mb-6">Profesyonel Müzik Çözümü</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  RTP Medya olarak, işletmenizin konseptine ve hedef kitlenize özel müzik programları hazırlıyoruz. 2005
                  yılından bu yana edindiğimiz deneyimle, 46.000'den fazla projede başarılı çözümler sunduk.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Tüm müziklerimiz lisanslıdır ve telif hakları konusunda endişelenmenize gerek yoktur. 7/24 kesintisiz
                  yayın, uzaktan yönetim ve profesyonel destek ile hizmetinizdeyiz.
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
                {benefits.map((benefit, index) => {
                  const Icon = icons[index % icons.length]
                  return (
                    <Card
                      key={index}
                      className="border-2 hover:border-red-600/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                    >
                      <CardContent className="p-8 text-center">
                        <div className="w-16 h-16 bg-gradient-to-br from-red-600 to-red-800 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                          <Icon className="text-white" size={32} />
                        </div>
                        <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">{benefit.description}</p>
                      </CardContent>
                    </Card>
                  )
                })}
              </div>
            </div>

            <Card className="bg-gradient-to-r from-red-600 to-red-800 border-0 text-white">
              <CardContent className="p-12 text-center">
                <h2 className="text-3xl font-bold mb-4">{ctaTitle}</h2>
                <p className="text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
                  {ctaDescription} Ücretsiz demo ve danışmanlık hizmeti için formu doldurun.
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
