import Link from "next/link"

const plans: Record<string, [string, string]> = {
  restoran: ["Restoran müziğini mutfak konseptine, servis temposuna ve sohbet konforuna göre seçin. Kahvaltı, öğle servisi ve akşam yemeği için farklı akışlar planlayın.", "Menü yenilikleri ve özel etkinlik duyurularını servis deneyimini bölmeyecek aralıklarla yayınlayın."],
  kafeterya: ["Kafe müziği, çalışmak ve sohbet etmek isteyen misafirlerin ortak alanını desteklemelidir. Sabah kahve saatleri ve akşam buluşmaları için ayrı seçkiler değerlendirin.", "Yeni içecek ve etkinlik duyurularını kısa tutun. Müzik seviyesini konuşmaları bastırmayacak şekilde ayarlayın."],
  magaza: ["Mağaza müziklerini ürün kategorisi ve müşteri profiliyle eşleştirin. Açılış, yoğun alışveriş ve kapanış saatleri için farklı yayın akışları hazırlayın.", "İndirim, yeni koleksiyon ve kapanış anonslarını zamanlayın. Zincir mağazalarda ortak marka tonunu koruyarak şube ihtiyaçlarını değerlendirin."],
  market: ["Market müzik yayını, dengeli fon müziğini anlaşılır kampanya duyurularıyla birleştirir. Şubelerin çalışma saatlerini ve yoğunluklarını ayrı değerlendirin.", "Günlük fırsatlar, reyon kampanyaları ve çalışma saatleri için kısa anons metinleri hazırlayın; tekrar sıklığını alışveriş deneyimine göre belirleyin."],
  avm: ["AVM müzik yayınını ortak alanlar, ziyaretçi yoğunluğu ve etkinlik takvimine göre tasarlayın. Hafta içi ve hafta sonu için farklı programlar değerlendirin.", "Etkinlik anonslarını takvime bağlayın. Ticari müzik yayınını acil durum sistemlerinden ayrı değerlendirin."],
  otel: ["Otel müziklerini lobi, restoran ve spa gibi alanların kullanımına göre seçin. Karşılama, kahvaltı ve dinlenme saatlerinin farklı atmosfer ihtiyaçlarını dikkate alın.", "Restoran saatleri ve otel etkinlikleri gibi bilgilendirmeleri uygun alanlarda, misafir konforunu koruyan aralıklarla paylaşın."],
  "gym-spa": ["Spor salonu müziği ile spa fon müziği farklı tempo ihtiyaçlarına sahiptir. Antrenman için hareketli, dinlenme alanları için sakin seçkiler planlayın.", "Ders programlarını ve üyelik kampanyalarını ilgili alana göre zamanlayın. Bölgesel yayın ihtiyacını kurulum öncesinde belirtin."],
  "guzellik-merkezi": ["Güzellik merkezi müziklerini karşılama ve uygulama alanlarına göre planlayın. Bekleme alanlarında hafif ritimli, dinlenme alanlarında sakin bir akış değerlendirin.", "Hizmet tanıtımlarını kısa tutun; uygulamalar sırasında duyuru sıklığını azaltarak konuşma konforunu koruyun."],
  hastane: ["Hastane ve klinik bekleme alanlarında düşük sesli, sakin bir yayın değerlendirin. Bölümlerin sessizlik gereksinimlerini kurum ekibiyle belirleyin.", "Hasta çağrı ve acil durum sistemlerinin önceliğini teknik ekiple planlayın. Fon müziği yayını tıbbi tedavi veya müzik terapisi hizmeti değildir."],
  akaryakit: ["Akaryakıt istasyonu müzik yayınını market ve dinlenme alanlarının kullanımına göre planlayın. Gece vardiyası ve yoğun saatler için farklı akışlar değerlendirin.", "Market fırsatlarını ve hizmet duyurularını kısa metinlerle yayınlayın. Yayın yapılacak alanları teknik keşifte netleştirin."],
}

export function SectorGuide({ slug, title }: { slug: string; title: string }) {
  const plan = plans[slug]
  if (!plan) return null
  return (
    <section className="pb-24 md:pb-32" aria-labelledby="sector-guide-title">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-5xl rounded-[2rem] border border-surface-border bg-card p-6 md:p-12">
          <p className="eyebrow mb-4">Yayın planlama rehberi</p>
          <h2 id="sector-guide-title" className="font-display text-3xl md:text-4xl">{title} nasıl planlanır?</h2>
          <div className="mt-8 grid gap-8 md:grid-cols-2">
            <div><h3 className="text-xl font-semibold">Müzik seçimi ve saat planı</h3><p className="mt-3 leading-relaxed text-foreground/75">{plan[0]}</p></div>
            <div><h3 className="text-xl font-semibold">Anons ve duyuru akışı</h3><p className="mt-3 leading-relaxed text-foreground/75">{plan[1]}</p></div>
          </div>
          <h3 className="mt-8 text-xl font-semibold">Müzik yayını fiyatı nasıl belirlenir?</h3>
          <p className="mt-3 leading-relaxed text-foreground/75">Teklif için şube sayısını, yayın yapılacak alanları, çalışma saatlerini ve anons ihtiyacınızı paylaşın. Müzik kataloğu, lisans kapsamı ve kurulum ihtiyaçları netleştirildikten sonra işletmenize uygun fiyatlandırma hazırlanır.</p>
          <div className="mt-8 flex flex-wrap gap-4 text-sm font-semibold">
            <Link className="underline underline-offset-4" href="/hizmetler/kurumsal-radyo">Kurumsal radyo ve merkezi yayın yönetimi</Link>
            <Link className="underline underline-offset-4" href="/hizmetler/profesyonel-seslendirme">Profesyonel anons seslendirme</Link>
            <Link className="underline underline-offset-4" href="/player">RTP Medya Player</Link>
          </div>
        </div>
      </div>
    </section>
  )
}
