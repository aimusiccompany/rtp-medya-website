import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background"
    >
      {/* Arkaplan animasyonu */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Köşe ışıkları */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-red-600/20 rounded-full blur-3xl animate-ping-slow" />
        <div className="absolute top-0 right-0 w-64 h-64 bg-red-500/20 rounded-full blur-3xl animate-ping-slow delay-200" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-red-400/20 rounded-full blur-3xl animate-ping-slow delay-400" />
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-red-500/10 rounded-full blur-3xl animate-ping-slow delay-600" />

        {/* Kenar geçişleri */}
        <div className="absolute inset-0 bg-gradient-to-tr from-red-600/10 via-transparent to-red-800/10 animate-gradient-move"></div>
      </div>

      <div className="container mx-auto px-4 py-32 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block mb-6 px-4 py-2 bg-gradient-to-r from-red-600/10 to-red-800/10 border border-red-600/20 rounded-full backdrop-blur-sm animate-fade-in">
            <span className="text-red-600 font-semibold text-sm">Profesyonel Medya Çözümleri</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance leading-tight animate-fade-in-up">
            Markanızın{" "}
            <span className="bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent">Sesini</span>{" "}
            Duyurun
          </h1>

          <p
            className="text-xl md:text-2xl text-muted-foreground mb-12 text-pretty max-w-3xl mx-auto leading-relaxed animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            RTP Medya olarak, kurumsal radyo ve profesyonel seslendirme hizmetleriyle markanızı güçlendiriyoruz.
          </p>

          <div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up"
            style={{ animationDelay: "0.4s" }}
          >
            <Link href="#portfolio">
              <Button
                size="lg"
                className="bg-gradient-to-r from-red-600 to-red-800 hover:from-red-700 hover:to-red-900 text-white text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                Hizmetlerimizi İncele
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </Link>
            <Link href="#contact">
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-6 border-2 bg-transparent hover:bg-red-600/5 hover:border-red-600 transition-all duration-300"
              >
                İletişime Geç
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  )
}
