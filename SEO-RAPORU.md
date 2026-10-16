# RTP Medya SEO ve rakip incelemesi

İnceleme tarihi: 16 Ekim 2026. Bu çalışma kaynak kodu ve herkese açık rakip sayfaları üzerinden yapılmıştır. Search Console, Analytics, anahtar kelime hacmi, backlink ve sıralama verilerine erişilmedi; trafik artışı veya sıralama sonucu ölçülmedi.

## Rakiplerden çıkan kararlar

| Rakip ve kaynak | Sayfada görülen yaklaşım | RTP Medya için uygulama |
| --- | --- | --- |
| [SMG](https://www.smg.com.tr/) ve [müzik yayını](https://www.smg.com.tr/muzik-yayini/) | Yayın yönetimi, teknoloji ve sektörlere göre hizmet anlatımı | Sektör içeriklerinden kurumsal radyo, seslendirme ve Player sayfalarına bağlamsal bağlantılar eklendi. |
| [RadioSparx Türkiye](https://radiosparxturkey.com/) | Mağaza içi müzik, merkezi yönetim ve lisanslama etrafında arama niyeti odaklı içerik | On sektör için müzik seçimi, saat planı ve anons önerileri yazıldı; fiyat teklifinin hangi bilgilere göre hazırlandığı açıklandı. |
| [Kurumsal Radyo / JingleON](https://kurumsalradyo.com/index.html) | Mağaza, market, AVM yayıncılığı ve prodüksiyon vurgusu | Müzik yayını ile profesyonel anons seslendirme arasındaki hizmet bağlantısı güçlendirildi. |

Bu inceleme rekabetçi sıralama veya pazar payı ölçümü değildir. Rakiplerin referans ve sayısal iddiaları RTP Medya'ya aktarılmadı.

## Anahtar kelime ve sayfa haritası

| Sayfa | Birincil arama niyeti | Destekleyici konular |
| --- | --- | --- |
| Ana sayfa | Kurumsal radyo, işletme içi müzik yayını | Lisanslı müzik, merkezi yayın, profesyonel seslendirme |
| Kurumsal radyo | Kurumsal radyo hizmeti | Şube yönetimi, yayın akışı, anons |
| Profesyonel seslendirme | Profesyonel seslendirme | Santral, reklam, mağaza anonsu, jingle |
| Player | İşletme içi müzik yayın programı | Playlist, zamanlama, Windows |
| Mağaza | Mağaza içi müzik yayını | Mağaza müzikleri, yeni koleksiyon anonsu |
| Restoran | Restoran içi müzik yayını | Restoran müziği, servis saatleri |
| Kafeterya | Kafe müzik yayını | Kafeterya müziği, fon müziği |
| Market / AVM | Market / AVM müzik yayını | Kampanya anonsu, ortak alan yayını |
| Otel | Otel müzik yayını | Lobi müzikleri, restoran ve spa |
| Diğer sektörler | Spor salonu, güzellik merkezi, hastane, akaryakıt müzik yayını | Alan ihtiyaçları, duyuru ve saat planı |

Kelime yoğunluğu hedeflenmedi. Anahtar kelimeler başlık ve yararlı içerik içinde doğal olarak kullanıldı. Google'ın [başlık bağlantıları rehberi](https://developers.google.com/search/docs/appearance/title-link) ve [geliştirici SEO rehberi](https://developers.google.com/search/docs/fundamentals/get-started-developers) temel alındı. Meta keywords alanı bir sıralama stratejisi olarak değerlendirilmedi.

## Yapılan değişiklikler

- On sektör sayfasına özgün rehber içerikleri, fiyatlandırma açıklaması ve hizmet bağlantıları eklendi.
- Alt sayfalarda Twitter ve Open Graph bilgilerinin ana sayfadan yanlış miras alınması giderildi; sektör canonical adresleri korundu.
- Bazı uzun sayfa başlıkları kısaltıldı; ana sayfa açıklaması sadeleştirildi.
- Sitemap'in her üretimde tüm sayfalara yeni değişiklik tarihi yazması kaldırıldı. Gerçek içerik değişiklik tarihi izlenmediği için tarih uydurulmadı.
- Genel içerik ve ana başlığın ilk HTML'de animasyon nedeniyle gizlenmesi giderildi.
- Sektör görselleri Next Image ile boyutlandırıldı; responsive görsel optimizasyonu açıldı.
- Sektör sayfalarına görünür breadcrumb eklendi; mevcut Service ve BreadcrumbList verileri korundu.
- Masaüstü açılır menüleri klavye odağıyla erişilebilir hale getirildi; mobil açılma durumları ve görünür odak stili eklendi.
- Açık temadaki form başarı/hata mesajlarının kontrastı artırıldı.
- Teklif formunda SMTP 465 SSL ayarı düzeltildi; yanıt adresi ve sunucu doğrulaması eklendi. HTML e-posta içindeki kullanıcı metinleri kaçırıldı, başvuru içeriğinin doğrudan loglanması kaldırıldı.
- Derlemede TypeScript hatalarının gizlenmesi kapatıldı; eksik Nodemailer tipleri eklendi.

## Yayın sonrası ölçüm

Doğrulama: `pnpm build` ve `npx tsc --noEmit` başarılı. Üretilen 17 içerik sayfasının HTML çıktısında tek H1, canonical, description, Open Graph ve Twitter alanları, JSON-LD sözdizimi ve dahili bağlantı hedefleri kontrol edildi. İki derlenmiş API işleyicisi doğrudan çağrılarak boş, yanlış tipli, honeypot içeren ve bozuk JSON isteklerinin 400 yanıtıyla reddedildiği doğrulandı. HTTP/tarayıcı erişimi yerel ortamın bağlantı kısıtları nedeniyle tamamlanamadı; bu kontroller gerçek SMTP teslimatını doğrulamaz.

1. Güncellenmiş sürüm yayımlandıktan sonra Search Console URL Denetimi ile ana sayfa, hizmetler ve öncelikli sektör sayfalarını kontrol edin; sitemap.xml dosyasını gönderin.
2. Kurumsal radyo ve seslendirme sorgularını ayrı takip edin. Tıklama, gösterim, CTR ve teklif dönüşümlerini önceki eş uzunluktaki dönemle karşılaştırın.
3. Gerçek mobil kullanıcı verisi oluşunca Core Web Vitals değerlerini inceleyin. Bu çalışmada Lighthouse veya CrUX performans puanı ölçülmedi.
4. İşletme adresi, çalışma saatleri, müşteri/proje sayıları, lisans kapsamı ve referanslar işletme sahibi tarafından teyit edilmelidir. Yeni müşteri yorumu veya referans uydurulmadı.
5. Google Business Profile bilgilerinin sitedeki iletişim bilgileriyle tutarlılığını kontrol edin. Doğrulanmış vaka çalışmaları ve müşteri izinli referanslar içerik planının sonraki adımıdır.

FAQ yapılandırılmış verisi korunmuştur; arama sonuçlarında zengin görünüm garantisi verilmez. Çalışma yerel proje dosyalarına uygulanmıştır; canlıya yayınlama yapılmamıştır. Gerçek e-posta teslimatı ve tarayıcı görsel kontrolü tamamlanmış olarak kabul edilmemelidir.
