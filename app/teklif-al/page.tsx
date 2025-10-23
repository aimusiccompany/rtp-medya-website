"use client";

import { useState } from "react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CheckCircle2 } from "lucide-react";

export default function TeklifAlPage() {
  const [formData, setFormData] = useState({
    companyName: "",
    name: "",
    email: "",
    phone: "",
    sector: "",
    service: "",
    message: "",
    website: "", // ?炊 Honeypot alan覺 eklendi
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        alert("Teklif talebiniz ba?ar覺yla g繹nderildi! En k覺sa s羹rede size d繹n羹? yapaca?覺z.");
        setFormData({
          companyName: "",
          name: "",
          email: "",
          phone: "",
          sector: "",
          service: "",
          message: "",
          website: "",
        });
      } else {
        alert(`Hata: ${result.error}`);
      }
    } catch (error) {
      alert("Sunucuya ba?lan覺lam覺yor. L羹tfen tekrar deneyin.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-red-600 via-red-700 to-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/abstract-sound-waves.png')] opacity-10 bg-cover bg-center" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">?cretsiz Teklif Al覺n</h1>
            <p className="text-xl md:text-2xl text-red-50 leading-relaxed">
              Size 繹zel 癟繹z羹mlerimiz hakk覺nda detayl覺 bilgi almak i癟in formu doldurun
            </p>
          </div>
        </div>
      </section>

      {/* Teklif Form Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-2 hover:border-red-600/30 transition-colors shadow-xl">
              <CardContent className="p-8 md:p-12">
                <h2 className="text-3xl font-bold mb-6">Bize Ulaşın</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  {/* ?炊 Honeypot alan覺 (gizli input) */}
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
                    <div className="space-y-2">
                      <Label htmlFor="companyName">Firma Ad覺 *</Label>
                      <Input
                        id="companyName"
                        name="companyName"
                        value={formData.companyName}
                        onChange={handleChange}
                        placeholder="Firma ad覺n覺z"
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
                        placeholder="Ad覺n覺z ve soyad覺n覺z"
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
                      <Label htmlFor="sector">Sekt繹r *</Label>
                      <Select
                        value={formData.sector}
                        onValueChange={(value) => setFormData({ ...formData, sector: value })}
                      >
                        <SelectTrigger className="transition-all duration-300 focus:border-red-600">
                          <SelectValue placeholder="Sekt繹r se癟in" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="restoran">Restoran</SelectItem>
                          <SelectItem value="kafeterya">Kafeterya</SelectItem>
                          <SelectItem value="magaza">Ma?aza</SelectItem>
                          <SelectItem value="market">Market</SelectItem>
                          <SelectItem value="avm">AVM</SelectItem>
                          <SelectItem value="otel">Otel</SelectItem>
                          <SelectItem value="gym-spa">Gym & Spa</SelectItem>
                          <SelectItem value="guzellik">G羹zellik Merkezi</SelectItem>
                          <SelectItem value="hastane">Hastane</SelectItem>
                          <SelectItem value="akaryakit">Akaryak覺t 襤stasyonu</SelectItem>
                          <SelectItem value="diger">Di?er</SelectItem>
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
                          <SelectValue placeholder="Hizmet se癟in" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="kurumsal-radyo">Kurumsal Radyo</SelectItem>
                          <SelectItem value="seslendirme">Profesyonel Seslendirme</SelectItem>
                          <SelectItem value="muzik-yayini">M羹zik Yay覺n覺</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Mesaj覺n覺z</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="襤?letmeniz ve talepleriniz hakk覺nda detayl覺 bilgi verin..."
                      rows={6}
                      className="transition-all duration-300 focus:border-red-600"
                    />
                  </div>

                  <div className="bg-muted/50 rounded-lg p-6 space-y-3">
                    <h3 className="font-bold flex items-center gap-2">
                      <CheckCircle2 className="text-red-600" size={20} />
                      Teklif Ald覺ktan Sonra
                    </h3>
                    <ul className="space-y-2 text-sm text-muted-foreground ml-7">
                      <li>??24 saat i癟inde size geri d繹n羹? yapaca?覺z.</li>
                      <li>??襤htiya癟lar覺n覺za 繹zel 癟繹z羹m sunaca?覺z.</li>
                      <li>??Detayl覺 fiyat teklifi alacaks覺n覺z.</li>
                      <li>???cretsiz demo ve dan覺?manl覺k hizmeti alacaks覺n覺z.</li>
                    </ul>
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-red-600 to-red-800 hover:from-red-700 hover:to-red-900 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
                  >
                    {isSubmitting ? "G繹nderiliyor..." : "Teklif Talebini G繹nder"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
