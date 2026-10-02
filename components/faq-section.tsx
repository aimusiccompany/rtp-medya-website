import { ChevronDown } from "lucide-react"
import { Reveal } from "@/components/fx/reveal"
import { SectionHeading } from "@/components/section-heading"
import { JsonLd } from "@/components/json-ld"

const faqs = [
  {
    q: "İşletme içi müzik yayını nedir?",
    a: "Mağaza, restoran, otel, AVM gibi mekânlarda çalan müziğin ve anonsların işletmenize özel olarak hazırlanması ve kesintisiz yayınlanmasıdır. RTP Medya, müzik seçkisini mekânınızın karakterine ve günün saatine göre planlar.",
  },
  {
    q: "Kurumsal radyo nedir, ne işe yarar?",
    a: "Kurumsal radyo, markanızın kimliğini yansıtan müzik, anons ve kampanya duyurularından oluşan özel bir yayın akışıdır. Müşteri deneyimini güçlendirir ve duyuruları doğru zamanda, doğru şubede duyurmanızı sağlar.",
  },
  {
    q: "Yayındaki müzikler lisanslı mı?",
    a: "Evet, RTP Medya telif haklarına saygılı, lisanslı bir müzik kütüphanesiyle yayın yapar. Kullanım kapsamı ve sorumluluklar lisans sözleşmesinde yazılı olarak belirtilir.",
  },
  {
    q: "Birden fazla şubeyi tek yerden yönetebilir miyim?",
    a: "Evet. RTP Medya Player ve yayın paneli sayesinde müzik, anons ve ses seviyesini şube bazında tek merkezden yönetebilirsiniz.",
  },
  {
    q: "Profesyonel seslendirme hizmetinde neler yapıyorsunuz?",
    a: "Reklam, tanıtım filmi, telefon santrali (IVR), mağaza anonsu ve jingle için geniş seslendirmen kadromuzla stüdyo kalitesinde kayıt yapıyor, miks ve mastering sonrası teslim ediyoruz.",
  },
  {
    q: "Teklif almak için ne yapmalıyım?",
    a: "Teklif formunu doldurmanız yeterli. 24 saat içinde size dönüş yapar, ihtiyacınıza özel çözüm ve fiyat teklifini ücretsiz demo ile birlikte sunarız.",
  },
]

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
}

export function FaqSection() {
  return (
    <section id="faq" className="relative py-24 md:py-32">
      <JsonLd data={faqLd} />
      <div className="container mx-auto px-4">
        <SectionHeading eyebrow="Sık sorulan sorular" title="Merak" accent="edilenler." />
        <div className="mx-auto max-w-3xl space-y-3">
          {faqs.map((f, i) => (
            <Reveal key={f.q} delay={(i % 3) * 0.05}>
              <details className="group glass rounded-2xl px-6 py-5 open:border-brand/40">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-foreground">
                  <h3 className="text-base font-semibold md:text-lg">{f.q}</h3>
                  <ChevronDown
                    size={20}
                    className="shrink-0 text-brand-glow transition-transform duration-300 group-open:rotate-180"
                  />
                </summary>
                <p className="mt-4 leading-relaxed text-foreground/65">{f.a}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
