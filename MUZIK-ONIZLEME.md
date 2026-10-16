# Dinleme örneklerini bağlama

Türler ve parça listeleri `lib/music-previews.ts` dosyasında tanımlıdır. Her türün `tracks` dizisine `{ id, title, src }` kayıtları eklenebilir. `src: null` olan örnekler ses isteği oluşturmaz, dinleme kontrolleri pasif görünür.

R2'deki onaylı tanıtım örneğinin herkese açık HTTPS adresini `src` alanına ekleyin. Tam kataloğu veya R2 erişim anahtarlarını istemci koduna koymayın. Özel bucket kullanılıyorsa ileride sunucudan süreli bağlantı sağlayan bir uç nokta gerekir; süresi dolacak imzalı bağlantıları bu dosyaya sabitlemeyin.

Ses nesneleri doğru Content-Type ile sunulmalı; ileri/geri sarma için HTTP Range istekleri desteklenmelidir. Dosya bağlantıları eklendiğinde gerçek oynatma, mobil tarayıcılar ve hatalı bağlantı davranışı ayrıca doğrulanmalıdır.

Oynatma yalnızca ziyaretçinin tıklamasıyla başlar. Tek audio öğesi kullanılır. Tür veya parça değişince mevcut oynatma durdurulur; yeni parça otomatik başlamaz. Bağlantı yükleme hatasında ziyaretçiye hata mesajı gösterilir.

## Eklenen AI Music örnekleri

Kaynak: https://www.aimusic.com.tr/ sayfasının halka açık `landing-assets/experience.js` parça listesi (16 Ekim 2026). `lib/music-preview-tracks.json` dosyası 8 türde 80 parçanın adını, sanatçısını ve mevcut HTTPS ses adresini içerir. Ses dosyaları kopyalanmadı; AI Music alan adından oynatılır. Latin kaldırıldı. Türler AI Music sırasıyla eşlendi: Pop, Deep House, Bossa Nova, Chillout, Jazz, Blues, Marrakech, Reggae. R2'ye doğrudan bağlantı gerekmez; daha sonra kaynak adresler değiştirilebilir.
