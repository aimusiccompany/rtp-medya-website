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
    website: "", // 🪤 honeypot alanı eklendi
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
        setFormData({ name: "", email: "", phone: "", subject: "", message: "", website: "" })
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
                      {/* 🪤 honeypot alanı (gizli input) */}
                      <input
                        type="text"
                        name="website"
                        value={formData.website}
                        onChange={handleChange}
                        style={{ display: "none" }}
                        tabIndex={-1}
                        autoComplete="off"
                      />

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
              {/* ... mevcut kodun aynı şekilde kalıyor ... */}
            </div>
          </div>
        </section>

        {/* Map Section */}
        {/* ... mevcut kodun aynı şekilde kalıyor ... */}
      </div>
      <Footer />
    </>
  )
}
