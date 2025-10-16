import { Card, CardContent } from "@/components/ui/card"
import { Award, Users, Zap, Target } from "lucide-react"

const stats = [
  { icon: Award, value: "20+", label: "Yıllık Deneyim" },
  { icon: Users, value: "500+", label: "Mutlu Müşteri" },
  { icon: Zap, value: "46.000+", label: "Tamamlanan Proje" },
  { icon: Target, value: "%98", label: "Müşteri Memnuniyeti" },
]

export function AboutSection() {
  return (
    <section id="about" className="py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">RTP Medya Hakkında</h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              2005 yılından bu yana medya sektöründe faaliyet gösteren RTP Medya, müşterilerine en kaliteli görsel ve
              işitsel içerik üretimi hizmetlerini sunmaktadır.
            </p>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Deneyimli ekibimiz ve son teknoloji ekipmanlarımızla, kurumsal firmalardan bireysel sanatçılara kadar
              geniş bir yelpazede hizmet vermekteyiz.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Yaratıcılık, profesyonellik ve müşteri memnuniyeti odaklı çalışma prensiplerimizle, her projede
              mükemmelliği hedefliyoruz.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <Card
                key={index}
                className="text-center border-2 hover:border-red-600/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-red-800 rounded-lg flex items-center justify-center mx-auto mb-4 shadow-md">
                    <stat.icon className="text-white" size={24} />
                  </div>
                  <div className="text-4xl font-bold bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
