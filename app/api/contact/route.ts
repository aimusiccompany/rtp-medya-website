import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, phone, subject, message, website } = body // 🪤 honeypot dahil

    console.log("[Contact API] Form submission:", { name, email, phone, subject, message, website })

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
      subject: `Yeni İletişim Mesajı: ${subject}`,
      html: `
        <h2>Yeni İletişim Formu</h2>
        <p><strong>Ad Soyad:</strong> ${name}</p>
        <p><strong>E-posta:</strong> ${email}</p>
        <p><strong>Telefon:</strong> ${phone}</p>
        <p><strong>Konu:</strong> ${subject}</p>
        <p><strong>Mesaj:</strong></p>
        <p>${message}</p>
      `,
    })

    console.log("[Contact API] ✅ Mail gönderildi:", info)

    return NextResponse.json({ success: true, message: "Form başarıyla gönderildi" })
  } catch (error) {
    console.error("[Contact API] ❌ Hata:", error)
    return NextResponse.json({ success: false, message: "Form gönderilemedi" }, { status: 500 })
  }
}
