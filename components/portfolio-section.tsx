import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const projects = [
  {
    title: "Kurumsal Radyo Çözümleri",
    category: "Kurumsal Radyo",
    image: "/corporate-radio-broadcasting-studio.jpg",
    tags: ["Radyo", "Kurumsal"],
    description: "İşletmeniz için özel müzik yayını ve radyo çözümleri",
  },
  {
    title: "Profesyonel Seslendirme",
    category: "Seslendirme",
    image: "/professional-voice-recording-studio.jpg",
    tags: ["Seslendirme", "Stüdyo"],
    description: "Reklam, tanıtım ve kurumsal projeler için profesyonel ses kayıtları",
  },
]

export function PortfolioSection() {
  return (
    <section id="portfolio" className="py-24 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Hizmetlerimiz</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
            Profesyonel medya çözümlerimizle işinizi bir adım öne taşıyın
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-2 hover:border-red-600/50"
            >
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="text-sm text-red-400 font-semibold mb-1">{project.category}</div>
                  <h3 className="text-xl font-bold text-white">{project.title}</h3>
                </div>
              </div>
              <CardContent className="p-6">
                <p className="text-muted-foreground mb-4 leading-relaxed">{project.description}</p>
                <div className="flex gap-2 flex-wrap">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge
                      key={tagIndex}
                      variant="secondary"
                      className="bg-red-600/10 text-red-600 hover:bg-red-600/20"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
