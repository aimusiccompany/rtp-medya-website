"use client"

import type React from "react"
import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { CheckCircle2, AlertCircle, Send } from "lucide-react"

const empty = {
  companyName: "",
  name: "",
  email: "",
  phone: "",
  sector: "",
  service: "",
  message: "",
  website: "",
}

const sectorOptions = [
  ["restoran", "Restoran"],
  ["kafeterya", "Kafeterya"],
  ["magaza", "Mağaza"],
  ["market", "Market"],
  ["avm", "AVM"],
  ["otel", "Otel"],
  ["gym-spa", "Gym & Spa"],
  ["guzellik", "Güzellik Merkezi"],
  ["hastane", "Hastane"],
  ["akaryakit", "Akaryakıt İstasyonu"],
  ["diger", "Diğer"],
]

const serviceOptions = [
  ["kurumsal-radyo", "Kurumsal Radyo"],
  ["seslendirme", "Profesyonel Seslendirme"],
  ["muzik-yayini", "Müzik Yayını"],
]

const label = "mb-2 block text-sm font-medium text-foreground/70"

export function QuoteForm() {
  const [formData, setFormData] = useState(empty)
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "error">("idle")
  const [errorMsg, setErrorMsg] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setFormData({ ...formData, [e.target.name]: e.target.value })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("sending")
    setErrorMsg("")
    try {
      const response = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })
      if (response.ok) {
        setStatus("ok")
        setFormData(empty)
      } else {
        const result = await response.json().catch(() => ({}))
        setErrorMsg(result?.error || "Bir hata oluştu. Lütfen tekrar deneyin.")
        setStatus("error")
      }
    } catch {
      setErrorMsg("Sunucuya bağlanılamıyor. Lütfen tekrar deneyin.")
      setStatus("error")
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <input
        type="text"
        name="website"
        value={formData.website}
        onChange={handleChange}
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
      />

      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label htmlFor="companyName" className={label}>Firma Adı *</label>
          <input id="companyName" name="companyName" value={formData.companyName} onChange={handleChange} placeholder="Firma adınız" required className="field" />
        </div>
        <div>
          <label htmlFor="name" className={label}>Ad Soyad *</label>
          <input id="name" name="name" value={formData.name} onChange={handleChange} placeholder="Adınız ve soyadınız" required className="field" />
        </div>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label htmlFor="email" className={label}>E-posta *</label>
          <input id="email" name="email" type="email" value={formData.email} onChange={handleChange} placeholder="ornek@email.com" required className="field" />
        </div>
        <div>
          <label htmlFor="phone" className={label}>Telefon *</label>
          <input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleChange} placeholder="+90 (5XX) XXX XX XX" required className="field" />
        </div>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label htmlFor="sector" className={label}>Sektör *</label>
          <select id="sector" name="sector" value={formData.sector} onChange={handleChange} required className="field">
            <option value="" disabled>Sektör seçin</option>
            {sectorOptions.map(([v, l]) => (
              <option key={v} value={v}>{l}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="service" className={label}>Hizmet *</label>
          <select id="service" name="service" value={formData.service} onChange={handleChange} required className="field">
            <option value="" disabled>Hizmet seçin</option>
            {serviceOptions.map(([v, l]) => (
              <option key={v} value={v}>{l}</option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className={label}>Mesajınız</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="İşletmeniz ve talepleriniz hakkında detaylı bilgi verin..."
          rows={5}
          className="field resize-none"
        />
      </div>

      <div className="rounded-2xl border border-foreground/[0.08] bg-foreground/[0.03] p-6">
        <h3 className="flex items-center gap-2 font-semibold text-foreground">
          <CheckCircle2 className="text-brand-glow" size={20} />
          Teklif aldıktan sonra
        </h3>
        <ul className="mt-3 space-y-2 text-sm text-foreground/55">
          <li>24 saat içinde size geri dönüş yapacağız.</li>
          <li>İhtiyaçlarınıza özel çözüm sunacağız.</li>
          <li>Detaylı fiyat teklifi alacaksınız.</li>
          <li>Ücretsiz demo ve danışmanlık hizmeti alacaksınız.</li>
        </ul>
      </div>

      <button type="submit" disabled={status === "sending"} className="btn-primary w-full">
        {status === "sending" ? "Gönderiliyor..." : "Teklif Talebini Gönder"}
        <Send size={16} />
      </button>

      <AnimatePresence mode="wait">
        {status === "ok" && (
          <motion.p
            key="ok"
            role="status"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="flex items-center gap-2 rounded-2xl border border-emerald-400/30 bg-emerald-400/10 px-4 py-3 text-sm text-emerald-300"
          >
            <CheckCircle2 size={18} /> Teklif talebiniz gönderildi. En kısa sürede size dönüş yapacağız.
          </motion.p>
        )}
        {status === "error" && (
          <motion.p
            key="err"
            role="alert"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="flex items-center gap-2 rounded-2xl border border-red-400/30 bg-red-400/10 px-4 py-3 text-sm text-red-300"
          >
            <AlertCircle size={18} /> {errorMsg}
          </motion.p>
        )}
      </AnimatePresence>
    </form>
  )
}
