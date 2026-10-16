import { NextResponse } from "next/server"
import nodemailer from "nodemailer"
import { contactSchema, escapeHtml } from "@/lib/form-validation"

export async function POST(request: Request) {
  try {
    const result = contactSchema.safeParse(await request.json().catch(() => null))
    if (!result.success) return NextResponse.json({ error: "Lütfen zorunlu alanları ve e-posta/telefon bilgilerinizi kontrol edin." }, { status: 400 })
    const body = result.data
    const { name, email, phone, subject, message, website } = body // 🪤 honeypot dahil


    // 🧠 1️⃣ Honeypot kontrolü – eğer doldurulmuşsa spam'dir
    if (website && website.trim() !== "") {
      console.warn("[Contact API] ⚠️ Spam tespit edildi, istek reddedildi.")
      return NextResponse.json({ success: false, message: "Spam tespit edildi" }, { status: 400 })
    }

    // 🧾 2️⃣ Basit form doğrulama – kritik alanlar boşsa işlem yapılmaz
    if (!name || !email || !phone || !subject || !message) {
      console.warn("[Contact API] Eksik form alanı gönderimi reddedildi.")
      return NextResponse.json({ success: false, message: "Zorunlu alanlar eksik" }, { status: 400 })
    }

    // 📤 3️⃣ Nodemailer transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: Number(process.env.SMTP_PORT) === 465, // 465 için SSL
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })

    // ✉️ 4️⃣ E-posta gönderimi
    const info = await transporter.sendMail({
      from: `"RTP Medya" <${process.env.SMTP_USER}>`,
      to: process.env.MAIL_TO,
      replyTo: email,
      subject: `Yeni İletişim Mesajı: ${subject}`,
      html: `
        <h2>Yeni İletişim Formu</h2>
        <p><strong>Ad Soyad:</strong> ${escapeHtml(name)}</p>
        <p><strong>E-posta:</strong> ${escapeHtml(email)}</p>
        <p><strong>Telefon:</strong> ${escapeHtml(phone)}</p>
        <p><strong>Konu:</strong> ${escapeHtml(subject)}</p>
        <p><strong>Mesaj:</strong></p>
        <p>${escapeHtml(message)}</p>
      `,
    })

    console.log("[Contact API] ✅ Mail gönderildi:", info)

    return NextResponse.json({ success: true, message: "Form başarıyla gönderildi" })
  } catch (error) {
    console.error("[Contact API] ❌ Hata:", error)
    return NextResponse.json({ success: false, message: "Form gönderilemedi" }, { status: 500 })
  }
}
