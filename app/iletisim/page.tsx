"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, Clock } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        alert("Mesajınız başarıyla gönderildi! En kısa sürede size dönüş yapacağız.")
        setFormData({ name: "", email: "", phone: "", subject: "", message: "" })
      } else {
        alert("Bir hata oluştu. Lütfen tekrar deneyin.")
      }
    } catch (error) {
      alert("Bir hata oluştu. Lütfen tekrar deneyin.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <>
      <Header />
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative py-24 bg-gradient-to-br from-red-600 via-red-700 to-gray-900 text-white overflow-hidden">
          <div className="absolute inset-0 bg-[url('/abstract-sound-waves.png')] opacity-10 bg-cover bg-center" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance animate-fade-in">İletişim</h1>
              <p className="text-xl md:text-2xl text-red-50 leading-relaxed text-pretty">
                Projeleriniz için bizimle iletişime geçin, size en uygun çözümü sunalım
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {/* Contact Form */}
              <div className="lg:col-span-2">
                <Card className="border-2 hover:border-red-600/30 transition-colors shadow-lg">
                  <CardContent className="p-8">
                    <h2 className="text-3xl font-bold mb-6">Bize Ulaşın</h2>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium mb-2">
                            Ad Soyad *
                          </label>
                          <Input
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Adınız ve soyadınız"
                            required
                            className="transition-all duration-300 focus:border-red-600"
                          />
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium mb-2">
                            E-posta *
                          </label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="ornek@email.com"
                            required
                            className="transition-all duration-300 focus:border-red-600"
                          />
                        </div>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="phone" className="block text-sm font-medium mb-2">
                            Telefon *
                          </label>
                          <Input
                            id="phone"
                            name="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="+90 (5XX) XXX XX XX"
                            required
                            className="transition-all duration-300 focus:border-red-600"
                          />
                        </div>
                        <div>
                          <label htmlFor="subject" className="block text-sm font-medium mb-2">
                            Konu *
                          </label>
                          <Input
                            id="subject"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            placeholder="Mesaj konusu"
                            required
                            className="transition-all duration-300 focus:border-red-600"
                          />
                        </div>
                      </div>
                      <div>
                        <label htmlFor="message" className="block text-sm font-medium mb-2">
                          Mesajınız *
                        </label>
                        <Textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Projeniz hakkında detaylı bilgi verin..."
                          rows={8}
                          required
                          className="transition-all duration-300 focus:border-red-600"
                        />
                      </div>
                      <Button
                        type="submit"
                        size="lg"
                        disabled={isSubmitting}
                        className="w-full bg-gradient-to-r from-red-600 to-red-800 hover:from-red-700 hover:to-red-900 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
                      >
                        {isSubmitting ? "Gönderiliyor..." : "Mesaj Gönder"}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>

              {/* Contact Info Cards */}
              <div className="space-y-6">
                <Card className="border-2 hover:border-red-600/50 transition-all duration-300 hover:shadow-lg group">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-red-800 rounded-lg flex items-center justify-center flex-shrink-0 shadow-md group-hover:scale-110 transition-transform duration-300">
                        <MapPin className="text-white" size={24} />
                      </div>
                      <div>
                        <h3 className="font-bold mb-2 text-lg">Adres</h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          ESENTEPE MAH. BÜYÜKDERE CAD.
                          <br />
                          LEVENT 199 NO: 199 İÇKAPI NO: 6
                          <br />
                          ŞİŞLİ / İSTANBUL
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-2 hover:border-red-600/50 transition-all duration-300 hover:shadow-lg group">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-red-800 rounded-lg flex items-center justify-center flex-shrink-0 shadow-md group-hover:scale-110 transition-transform duration-300">
                        <Phone className="text-white" size={24} />
                      </div>
                      <div>
                        <h3 className="font-bold mb-2 text-lg">Telefon</h3>
                        <a
                          href="tel:+902122630902"
                          className="text-muted-foreground text-sm hover:text-red-600 transition-colors block"
                        >
                          +90 (212) 263 09 02
                        </a>
                        <a
                          href="tel:+905462630900"
                          className="text-muted-foreground text-sm hover:text-red-600 transition-colors block"
                        >
                          +90 (546) 263 09 00
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-2 hover:border-red-600/50 transition-all duration-300 hover:shadow-lg group">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-red-800 rounded-lg flex items-center justify-center flex-shrink-0 shadow-md group-hover:scale-110 transition-transform duration-300">
                        <Mail className="text-white" size={24} />
                      </div>
                      <div>
                        <h3 className="font-bold mb-2 text-lg">E-posta</h3>
                        <a
                          href="mailto:info@rtpmedya.com.tr"
                          className="text-muted-foreground text-sm hover:text-red-600 transition-colors block"
                        >
                          info@rtpmedya.com.tr
                        </a>
                        <a
                          href="mailto:teknik@rtpmedya.com.tr"
                          className="text-muted-foreground text-sm hover:text-red-600 transition-colors block"
                        >
                          teknik@rtpmedya.com.tr
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-2 hover:border-red-600/50 transition-all duration-300 hover:shadow-lg group">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-red-800 rounded-lg flex items-center justify-center flex-shrink-0 shadow-md group-hover:scale-110 transition-transform duration-300">
                        <Clock className="text-white" size={24} />
                      </div>
                      <div>
                        <h3 className="font-bold mb-2 text-lg">Çalışma Saatleri</h3>
                        <p className="text-muted-foreground text-sm">
                          Pazartesi - Cuma: 09:00 - 17:30
                          <br />
                          Cumartesi - Pazar: Kapalı
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <Card className="border-2 overflow-hidden shadow-xl">
                <CardContent className="p-0">
                  <div className="aspect-video bg-muted flex items-center justify-center">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3007.8916666666665!2d29.0086!3d41.0808!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab7650656bd63%3A0x8e0d0e0e0e0e0e0e!2sLevent%20199%2C%20Esentepe%20Mahallesi%2C%20B%C3%BCy%C3%BCkdere%20Caddesi%20No%3A199%2C%2034394%20%C5%9Ei%C5%9Fli%2F%C4%B0stanbul!5e0!3m2!1str!2str!4v1234567890"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="RTP Medya Konum - Esentepe Mah. Büyükdere Cad. Levent 199 No: 199 İçkapı No: 6 Şişli/İstanbul"
                    />
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  )
}
