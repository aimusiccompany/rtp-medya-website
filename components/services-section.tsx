import { Card, CardContent } from "@/components/ui/card"
import { Radio, Mic } from "lucide-react"

const services = [
  {
    icon: Radio,
    title: "Kurumsal Radyo",
    description:
      "İşletmeniz için özel olarak hazırlanmış müzik yayını ve radyo çözümleri. Markanıza özel içerik ve profesyonel yayın kalitesi.",
  },
  {
    icon: Mic,
    title: "Profesyonel Seslendirme",
    description:
      "Reklam, tanıtım filmi, santral ve anons için profesyonel seslendirme hizmetleri. Geniş seslendirmen kadromuzla her türlü projenize çözüm.",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-gradient-to-b from-background to-muted/30 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-red-600/5 via-transparent to-red-800/5 pointer-events-none" />

      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent">
            Hizmetlerimiz
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
            Medya sektöründe profesyonel çözümler sunarak markanızı bir adım öne taşıyoruz
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-2 hover:border-red-600/50 bg-gradient-to-br from-background to-muted/50 overflow-hidden relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-red-600/0 to-red-800/0 group-hover:from-red-600/5 group-hover:to-red-800/5 transition-all duration-500" />

              <CardContent className="p-10 relative">
                <div className="w-16 h-16 bg-gradient-to-br from-red-600 to-red-800 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg">
                  <service.icon className="text-white" size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-lg">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
