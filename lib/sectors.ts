export type Sector = {
  slug: string
  title: string
  description: string
  image: string
  features: string[]
  benefits: { title: string; description: string }[]
  ctaTitle: string
  ctaDescription: string
  whyTitle?: string
  whyParagraphs?: string[]
}

const ctaDesc = (what: string) =>
  `Hemen bizimle iletişime geçin ve ${what} için özel hazırlanmış müzik programımızı keşfedin.`

export const sectors: Sector[] = [
  {
    slug: "restoran",
    title: "Restoran İçi Müzik Yayını",
    description:
      "Restoranınızın atmosferini doğru müziklerle zenginleştirin. Müşterilerinize unutulmaz bir yemek deneyimi sunun.",
    image: "/elegant-restaurant-interior.webp",
    features: [
      "Restoran konseptinize özel müzik seçimi",
      "Telif hakkı ödemesi gerektirmeyen lisanslı müzik",
      "Sabah, öğle ve akşam için farklı müzik programları",
      "Özel gün ve etkinlikler için müzik düzenlemeleri",
      "7/24 kesintisiz yayın",
      "Uzaktan yönetim ve kontrol",
    ],
    benefits: [
      {
        title: "Atmosfer Yaratın",
        description: "Restoranınızın konseptine uygun müziklerle müşterilerinize unutulmaz bir deneyim sunun",
      },
      {
        title: "Profesyonel Ses Kalitesi",
        description: "Yüksek kaliteli ses sistemi ile kristal berraklığında müzik yayını",
      },
      {
        title: "Kolay Yönetim",
        description: "RTP Medya Player ile müziklerinizi kolayca yönetin ve programlayın",
      },
    ],
    ctaTitle: "Restoranınız İçin Özel Müzik Çözümü",
    ctaDescription: ctaDesc("restoranınız"),
    whyTitle: "Neden Restoran Müziği Önemli?",
    whyParagraphs: [
      "Doğru müzik seçimi, restoranınızın atmosferini belirleyen en önemli faktörlerden biridir. Müşterilerinizin yemek deneyimini zenginleştiren, rahatlamalarını sağlayan ve tekrar gelmelerini teşvik eden profesyonel müzik yayını ile fark yaratın.",
      "RTP Medya olarak, restoranınızın konseptine, hedef kitlenize ve günün farklı saatlerine uygun özel müzik programları hazırlıyoruz. Telif hakları konusunda endişelenmenize gerek yok - tüm müziklerimiz lisanslıdır.",
    ],
  },
  {
    slug: "kafeterya",
    title: "Kafeterya İçi Müzik Yayını",
    description:
      "Kafeteryanızın atmosferini doğru müziklerle zenginleştirin. Müşterilerinize unutulmaz bir yemek deneyimi sunun.",
    image: "/cafe-interior.webp",
    features: [
      "Kafeterya konseptinize özel müzik seçimi",
      "Telif hakkı ödemesi gerektirmeyen lisanslı müzik",
      "Sabah, öğle ve akşam için farklı müzik programları",
      "Özel gün ve etkinlikler için müzik düzenlemeleri",
      "7/24 kesintisiz yayın",
      "Uzaktan yönetim ve kontrol",
    ],
    benefits: [
      {
        title: "Sosyal Ortamlar Yaratın",
        description: "Kafeteryanızın konseptine uygun müziklerle müşterilerinize unutulmaz arkadaşlıklar kazandırın",
      },
      {
        title: "Trendleri Takip Edin",
        description: "Müşterileriniz farklı müzik türleri mi aramakta? RTP Medya'da müzik türlerinin sınırı yok",
      },
      {
        title: "Kolay Yönetim",
        description: "RTP Medya Player ile dilediğiniz saate dilediğiniz türde müzikler",
      },
    ],
    ctaTitle: "Kafeteryanız İçin Özel Müzik Çözümü",
    ctaDescription: ctaDesc("kafeteryanız"),
    whyTitle: "Kafeteryanızda Müzik Yayını Neden Önemli?",
    whyParagraphs: [
      "Doğru müzik seçimi, kafeteryanızın atmosferini belirleyen en önemli faktörlerden biridir. Müşterilerinizin kahve deneyimini zenginleştiren, sosyalleşmelerini sağlayan ve tekrar gelmelerini teşvik eden profesyonel müzik yayını ile fark yaratın.",
      "RTP Medya olarak, kafeteryanızın konseptine, hedef kitlenize ve günün farklı saatlerine uygun özel müzik programları hazırlıyoruz. Telif hakları konusunda endişelenmenize gerek yok - tüm müziklerimiz lisanslıdır.",
    ],
  },
  {
    slug: "magaza",
    title: "Mağaza İçi Müzik Yayını",
    description:
      "Mağazanızın atmosferini doğru müziklerle zenginleştirin ve müşteri deneyimini iyileştirerek satışlarınızı artırın.",
    image: "/modern-retail-store-interior-with-customers-shoppi.webp",
    features: [
      "Mağaza konseptinize özel müzik seçimi",
      "Satışları artıran müzik stratejileri",
      "Farklı zaman dilimlerine göre müzik programları",
      "Kampanya ve özel günler için özel müzikler",
      "Telif hakkı ödemesi gerektirmeyen lisanslı müzik",
      "Uzaktan yönetim ve anlık değişiklik imkanı",
    ],
    benefits: [
      {
        title: "Satışları Artırın",
        description: "Doğru müzik seçimi ile müşteri deneyimini iyileştirin ve satışlarınızı destekleyin",
      },
      {
        title: "Zaman Yönetimi",
        description: "Farklı saatlerde farklı tempoda müziklerle müşteri akışını optimize edin",
      },
      {
        title: "Marka Kimliği",
        description: "Mağazanızın kimliğine uygun müziklerle marka bilinirliğinizi güçlendirin",
      },
    ],
    ctaTitle: "Mağazanız İçin Özel Müzik Çözümü",
    ctaDescription: ctaDesc("mağazanız"),
    whyTitle: "Mağaza Müziği ile Fark Yaratın",
    whyParagraphs: [
      "Araştırmalar, doğru müzik seçiminin müşterilerin mağazada geçirdikleri süreyi artırdığını ve satın alma kararlarını olumlu yönde etkilediğini gösteriyor. RTP Medya olarak, mağazanızın konseptine ve hedef kitlenize özel müzik programları hazırlıyoruz.",
      "Sabah saatlerinde enerjik, öğle saatlerinde rahatlatıcı, akşam saatlerinde ise satışı teşvik edici müziklerle müşteri deneyimini optimize ediyoruz. Tüm müziklerimiz lisanslıdır ve telif hakları konusunda endişelenmenize gerek yoktur.",
    ],
  },
  {
    slug: "market",
    title: "Market İçi Müzik Yayını",
    description:
      "Marketinizde alışveriş deneyimini iyileştiren, müşterilerin daha uzun süre kalmasını sağlayan profesyonel müzik yayını.",
    image: "/market-interior.webp",
    features: [
      "Market konseptinize uygun müzik seçimi",
      "Alışveriş süresini uzatan müzik stratejileri",
      "Kampanya anonsları için özel müzik arası",
      "Farklı bölümler için farklı müzik temaları",
      "Telif hakkı ödemesi gerektirmeyen lisanslı müzik",
      "7/24 kesintisiz yayın ve uzaktan yönetim",
    ],
    benefits: [
      {
        title: "Alışveriş Deneyimi",
        description: "Rahatlatıcı müziklerle müşterilerinizin alışveriş deneyimini iyileştirin",
      },
      {
        title: "Satış Artışı",
        description: "Doğru müzik temposu ile müşterilerin market içinde geçirdikleri süreyi artırın",
      },
      {
        title: "Kampanya Desteği",
        description: "Özel günler ve kampanyalar için müzik arası anons desteği",
      },
    ],
    ctaTitle: "Marketiniz İçin Özel Müzik Çözümü",
    ctaDescription: ctaDesc("marketiniz"),
  },
  {
    slug: "avm",
    title: "AVM İçi Müzik Yayını",
    description:
      "Alışveriş merkezinizde ziyaretçilere unutulmaz bir deneyim sunan, marka kimliğinizi güçlendiren profesyonel müzik yayını.",
    image: "/avm-interior.webp",
    features: [
      "AVM konseptinize özel müzik programları",
      "Farklı katlar ve bölümler için özel müzikler",
      "Etkinlik ve kampanyalar için özel düzenlemeler",
      "Ziyaretçi profiline göre müzik seçimi",
      "Telif hakkı ödemesi gerektirmeyen lisanslı müzik",
      "Merkezi yönetim ve bölgesel kontrol imkanı",
    ],
    benefits: [
      {
        title: "Marka Deneyimi",
        description: "AVM'nizin kimliğine uygun müziklerle unutulmaz bir alışveriş deneyimi yaratın",
      },
      {
        title: "Ziyaretçi Süresi",
        description: "Doğru müzik seçimi ile ziyaretçilerin AVM'de geçirdikleri süreyi artırın",
      },
      {
        title: "Etkinlik Desteği",
        description: "Özel günler ve etkinlikler için dinamik müzik programları",
      },
    ],
    ctaTitle: "AVM'niz İçin Özel Müzik Çözümü",
    ctaDescription: ctaDesc("AVM'niz"),
  },
  {
    slug: "otel",
    title: "Otel İçi Müzik Yayını",
    description:
      "Otelinizde misafirlerinize huzurlu ve konforlu bir konaklama deneyimi sunan profesyonel müzik yayını.",
    image: "/hotel-lobby.webp",
    features: [
      "Otel konseptinize özel müzik seçimi",
      "Lobi, restoran, spa gibi farklı alanlar için özel müzikler",
      "Sabah, öğle ve akşam için farklı müzik programları",
      "Özel etkinlikler için müzik düzenlemeleri",
      "Telif hakkı ödemesi gerektirmeyen lisanslı müzik",
      "7/24 kesintisiz yayın ve bölgesel kontrol",
    ],
    benefits: [
      {
        title: "Misafir Memnuniyeti",
        description: "Rahatlatıcı müziklerle misafirlerinizin konaklama deneyimini iyileştirin",
      },
      {
        title: "Atmosfer Yaratın",
        description: "Her alan için özel müziklerle otelinizin atmosferini zenginleştirin",
      },
      {
        title: "Marka Kimliği",
        description: "Otelinizin kimliğine uygun müziklerle marka bilinirliğinizi güçlendirin",
      },
    ],
    ctaTitle: "Oteliniz İçin Özel Müzik Çözümü",
    ctaDescription: ctaDesc("oteliniz"),
  },
  {
    slug: "gym-spa",
    title: "Gym & Spa İçi Müzik Yayını",
    description: "Spor salonunuz ve spa merkezinizde motivasyon ve rahatlama sağlayan profesyonel müzik yayını.",
    image: "/gym-spa.webp",
    features: [
      "Gym ve spa alanları için özel müzik programları",
      "Antrenman motivasyonu artıran enerjik müzikler",
      "Spa alanı için rahatlatıcı ve huzur veren müzikler",
      "Farklı antrenman türlerine göre müzik seçimi",
      "Telif hakkı ödemesi gerektirmeyen lisanslı müzik",
      "Bölgesel kontrol ve uzaktan yönetim",
    ],
    benefits: [
      {
        title: "Motivasyon",
        description: "Enerjik müziklerle üyelerinizin antrenman motivasyonunu artırın",
      },
      {
        title: "Rahatlama",
        description: "Spa alanında huzur veren müziklerle dinlenme deneyimini iyileştirin",
      },
      {
        title: "Üye Memnuniyeti",
        description: "Doğru müzik seçimi ile üye memnuniyetini ve sadakatini artırın",
      },
    ],
    ctaTitle: "Gym & Spa'nız İçin Özel Müzik Çözümü",
    ctaDescription: ctaDesc("işletmeniz"),
  },
  {
    slug: "guzellik-merkezi",
    title: "Güzellik Merkezi İçi Müzik Yayını",
    description:
      "Güzellik merkezinizde müşterilerinize huzurlu ve rahatlatıcı bir deneyim sunan profesyonel müzik yayını.",
    image: "/beauty-salon.webp",
    features: [
      "Güzellik merkezi konseptinize özel müzik seçimi",
      "Rahatlatıcı ve huzur veren müzik programları",
      "Farklı hizmet alanları için özel müzikler",
      "Müşteri profiline göre müzik seçimi",
      "Telif hakkı ödemesi gerektirmeyen lisanslı müzik",
      "7/24 kesintisiz yayın ve kolay yönetim",
    ],
    benefits: [
      {
        title: "Rahatlama",
        description: "Huzur veren müziklerle müşterilerinizin rahatlamasını sağlayın",
      },
      {
        title: "Atmosfer",
        description: "Güzellik merkezinizin atmosferini müzikle zenginleştirin",
      },
      {
        title: "Müşteri Memnuniyeti",
        description: "Doğru müzik seçimi ile müşteri memnuniyetini artırın",
      },
    ],
    ctaTitle: "Güzellik Merkeziniz İçin Özel Müzik Çözümü",
    ctaDescription: ctaDesc("güzellik merkeziniz"),
  },
  {
    slug: "hastane",
    title: "Hastane İçi Müzik Yayını",
    description:
      "Hastanenizde hasta ve ziyaretçilere huzurlu bir ortam sunan, stresi azaltan profesyonel müzik yayını.",
    image: "/hospital-waiting.webp",
    features: [
      "Hastane ortamına uygun sakinleştirici müzikler",
      "Farklı bölümler için özel müzik programları",
      "Hasta ve ziyaretçi stresini azaltan müzik seçimi",
      "Bekleme alanları için rahatlatıcı müzikler",
      "Telif hakkı ödemesi gerektirmeyen lisanslı müzik",
      "Bölgesel kontrol ve ses seviyesi yönetimi",
    ],
    benefits: [
      {
        title: "Stres Azaltma",
        description: "Sakinleştirici müziklerle hasta ve ziyaretçilerin stresini azaltın",
      },
      {
        title: "Huzurlu Ortam",
        description: "Hastane ortamında huzurlu bir atmosfer yaratın",
      },
      {
        title: "İyileşme Desteği",
        description: "Müzik terapisi etkisi ile hastaların iyileşme sürecine katkı sağlayın",
      },
    ],
    ctaTitle: "Hastaneniz İçin Özel Müzik Çözümü",
    ctaDescription: ctaDesc("hastaneniz"),
  },
  {
    slug: "akaryakit",
    title: "Akaryakıt İstasyonu Müzik Yayını",
    description:
      "Akaryakıt istasyonunuzda müşterilerinize keyifli bir deneyim sunan, marka bilinirliğinizi artıran profesyonel müzik yayını.",
    image: "/gas-station.webp",
    features: [
      "Akaryakıt istasyonu konseptinize özel müzik",
      "Market alanı için uygun müzik programları",
      "Kampanya ve duyurular için müzik arası",
      "Farklı zaman dilimlerine göre müzik seçimi",
      "Telif hakkı ödemesi gerektirmeyen lisanslı müzik",
      "Uzaktan yönetim ve kolay kontrol",
    ],
    benefits: [
      {
        title: "Müşteri Deneyimi",
        description: "Keyifli müziklerle müşterilerinizin istasyonda geçirdikleri süreyi iyileştirin",
      },
      {
        title: "Marka Kimliği",
        description: "İstasyonunuzun kimliğine uygun müziklerle marka bilinirliğinizi güçlendirin",
      },
      {
        title: "Satış Desteği",
        description: "Market alanında doğru müziklerle ek satışları teşvik edin",
      },
    ],
    ctaTitle: "Akaryakıt İstasyonunuz İçin Özel Müzik Çözümü",
    ctaDescription: ctaDesc("istasyonunuz"),
  },
]

export const getSector = (slug: string) => sectors.find((s) => s.slug === slug)
