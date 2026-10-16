import { z } from "zod"

const text = z.string().trim().min(1).max(200)
const common = {
  name: text,
  email: z.string().trim().email().max(254),
  phone: z.string().trim().min(7).max(30).regex(/^[+\d\s().-]+$/),
  website: z.string().max(0).optional(),
}

export const contactSchema = z.object({
  ...common,
  subject: text,
  message: z.string().trim().min(1).max(5000),
})

export const quoteSchema = z.object({
  ...common,
  companyName: text,
  sector: z.enum(["restoran", "kafeterya", "magaza", "market", "avm", "otel", "gym-spa", "guzellik", "hastane", "akaryakit", "diger"]),
  service: z.enum(["kurumsal-radyo", "seslendirme", "muzik-yayini"]),
  message: z.string().trim().max(5000).optional(),
})

export function escapeHtml(value: string) {
  return value.replace(/[&<>"']/g, (character) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[character]!)
}
