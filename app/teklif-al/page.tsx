"use client"

import type React from "react"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CheckCircle2 } from "lucide-react"

export default function TeklifAlPage() {
  const [formData, setFormData] = useState({
    companyName: "",
    name: "",
    email: "",
    phone: "",
    sector: "",
    service: "",
    message: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const response = await fetch("/api/quote", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })

    if (response.ok) {
      alert("Teklif talebiniz başarıyla gönderildi! En kısa sürede size dönüş yapacağız.")
      setFormData({
        companyName: "",
        name: "",
        email: "",
        phone: "",
        sector: "",
        service: "",
        message: "",
      })
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 pt-32 pb-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent">
                Ücretsiz Teklif Alın
              </h1>
              <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
                Size özel çözümlerimiz hakkında detaylı bilgi almak için formu doldurun
              </p>
            </div>

            <Card className="border-2 hover:border-red-600/30 transition-colors shadow-xl">
              <CardContent className="p-8 md:p-12">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="companyName">Firma Adı *</Label>
                      <Input
                        id="companyName"
                        name="companyName"
                        value={formData.companyName}
                        onChange={handleChange}
                        placeholder="Firma adınız"
                        required
                        className="transition-all duration-300 focus:border-red-600"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="name">Ad Soyad *</Label>
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
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="email">E-posta *</Label>
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
                    <div className="space-y-2">
                      <Label htmlFor="phone">Telefon *</Label>
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
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="sector">Sektör *</Label>
                      <Select
                        value={formData.sector}
                        onValueChange={(value) => setFormData({ ...formData, sector: value })}
                      >
                        <SelectTrigger className="transition-all duration-300 focus:border-red-600">
                          <SelectValue placeholder="Sektör seçin" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="restoran">Restoran</SelectItem>
                          <SelectItem value="magaza">Mağaza</SelectItem>
                          <SelectItem value="market">Market</SelectItem>
                          <SelectItem value="avm">AVM</SelectItem>
                          <SelectItem value="otel">Otel</SelectItem>
                          <SelectItem value="gym-spa">Gym & Spa</SelectItem>
                          <SelectItem value="guzellik">Güzellik Merkezi</SelectItem>
                          <SelectItem value="hastane">Hastane</SelectItem>
                          <SelectItem value="akaryakit">Akaryakıt İstasyonu</SelectItem>
                          <SelectItem value="diger">Diğer</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="service">Hizmet *</Label>
                      <Select
                        value={formData.service}
                        onValueChange={(value) => setFormData({ ...formData, service: value })}
                      >
                        <SelectTrigger className="transition-all duration-300 focus:border-red-600">
                          <SelectValue placeholder="Hizmet seçin" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="kurumsal-radyo">Kurumsal Radyo</SelectItem>
                          <SelectItem value="seslendirme">Profesyonel Seslendirme</SelectItem>
                          <SelectItem value="muzik-yayini">Müzik Yayını</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Mesajınız</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Projeniz hakkında detaylı bilgi verin..."
                      rows={6}
                      className="transition-all duration-300 focus:border-red-600"
                    />
                  </div>

                  <div className="bg-muted/50 rounded-lg p-6 space-y-3">
                    <h3 className="font-bold flex items-center gap-2">
                      <CheckCircle2 className="text-red-600" size={20} />
                      Teklif Aldıktan Sonra
                    </h3>
                    <ul className="space-y-2 text-sm text-muted-foreground ml-7">
                      <li>• 24 saat içinde size geri dönüş yapacağız</li>
                      <li>• İhtiyaçlarınıza özel çözüm sunacağız</li>
                      <li>• Detaylı fiyat teklifi alacaksınız</li>
                      <li>• Ücretsiz demo ve danışmanlık hizmeti</li>
                    </ul>
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-gradient-to-r from-red-600 to-red-800 hover:from-red-700 hover:to-red-900 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
                  >
                    Teklif Talebini Gönder
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
