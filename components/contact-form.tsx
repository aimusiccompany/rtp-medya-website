"use client"

import type React from "react"
import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { CheckCircle2, AlertCircle, Send } from "lucide-react"

const empty = { name: "", email: "", phone: "", subject: "", message: "", website: "" }

export function ContactForm() {
  const [formData, setFormData] = useState(empty)
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "error">("idle")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setFormData({ ...formData, [e.target.name]: e.target.value })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("sending")
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })
      if (response.ok) {
        setStatus("ok")
        setFormData(empty)
      } else {
        setStatus("error")
      }
    } catch {
      setStatus("error")
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Honeypot alanı: botlar doldurur, insanlar görmez */}
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
          <label htmlFor="name" className="mb-2 block text-sm font-medium text-foreground/70">
            Ad Soyad *
          </label>
          <input id="name" name="name" value={formData.name} onChange={handleChange} placeholder="Adınız ve soyadınız" required className="field" />
        </div>
        <div>
          <label htmlFor="email" className="mb-2 block text-sm font-medium text-foreground/70">
            E-posta *
          </label>
          <input id="email" name="email" type="email" value={formData.email} onChange={handleChange} placeholder="ornek@email.com" required className="field" />
        </div>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label htmlFor="phone" className="mb-2 block text-sm font-medium text-foreground/70">
            Telefon *
          </label>
          <input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleChange} placeholder="+90 (5XX) XXX XX XX" required className="field" />
        </div>
        <div>
          <label htmlFor="subject" className="mb-2 block text-sm font-medium text-foreground/70">
            Konu *
          </label>
          <input id="subject" name="subject" value={formData.subject} onChange={handleChange} placeholder="Mesaj konusu" required className="field" />
        </div>
      </div>

      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-medium text-foreground/70">
          Mesajınız *
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="İşletmeniz ve aradığınız çözümler için detaylı bilgi verin."
          rows={6}
          required
          className="field resize-none"
        />
      </div>

      <button type="submit" disabled={status === "sending"} className="btn-primary w-full">
        {status === "sending" ? "Gönderiliyor..." : "Mesaj Gönder"}
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
            <CheckCircle2 size={18} /> Mesajınız gönderildi. En kısa sürede size dönüş yapacağız.
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
            <AlertCircle size={18} /> Bir hata oluştu. Lütfen tekrar deneyin.
          </motion.p>
        )}
      </AnimatePresence>
    </form>
  )
}
