"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail } from "lucide-react"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })

    if (response.ok) {
      alert("Mesajınız başarıyla gönderildi!")
      setFormData({ name: "", email: "", phone: "", message: "" })
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contact" className="py-24 md:py-32 rtp-wash-soft">
      <div className="container mx-auto px-4">
        <div className="mb-14 max-w-3xl">
          <p className="rtp-eyebrow mb-4">İletişim</p>
          <h2 className="rtp-display text-brand-ink text-4xl md:text-6xl">Projenizi konuşalım.</h2>
          <p className="mt-6 text-lg text-brand-muted">Bize ulaşın, size en uygun çözümü birlikte planlayalım.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 ">
          <div className="lg:col-span-2">
            <Card className="rounded-[1.75rem] border-brand-line shadow-none">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Ad Soyad
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Adınız ve soyadınız"
                        required
                        className="focus-visible:border-brand"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        E-posta
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="ornek@email.com"
                        required
                        className="focus-visible:border-brand"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2">
                      Telefon
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+90 (5XX) XXX XX XX"
                      required
                      className="focus-visible:border-brand"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Mesajınız
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Projeniz hakkında detaylı bilgi verin..."
                      rows={6}
                      required
                      className="focus-visible:border-brand"
                    />
                  </div>
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-brand hover:bg-brand-hover text-white rounded-2xl h-12"
                  >
                    Mesaj Gönder
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="rounded-[1.75rem] border-brand-line shadow-none">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-brand-wash rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-brand" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">Adres</h3>
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

            <Card className="rounded-[1.75rem] border-brand-line shadow-none">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-brand-wash rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="text-brand" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">Telefon</h3>
                    <p className="text-muted-foreground text-sm">
                      +90 (212) 263 09 02
                      <br />
                      +90 (546) 263 09 00
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="rounded-[1.75rem] border-brand-line shadow-none">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-brand-wash rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="text-brand" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">E-posta</h3>
                    <p className="text-muted-foreground text-sm">
                      info@rtpmedya.com.tr
                      <br />
                      teknik@rtpmedya.com.tr
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
