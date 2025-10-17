import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(request: Request) {
  try {
    const data = await request.json()

    console.log("Form verisi alındı:", data)

    // Debug: Environment değişkenlerini kontrol et
    console.log("SMTP ENV:", {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS ? "****" : undefined, // şifreyi gizle
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      to: process.env.MAIL_TO
    })

    // Nodemailer transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: false, // 587 için TLS
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })

    // Mail gönderimi
    const info = await transporter.sendMail({
      from: `"RTP Medya" <${process.env.SMTP_USER}>`,
      to: process.env.MAIL_TO,
      subject: `Yeni İletişim Mesajı: ${data.subject}`,
      html: `
        <h2>Yeni İletişim Formu</h2>
        <p><strong>Ad Soyad:</strong> ${data.name}</p>
        <p><strong>E-posta:</strong> ${data.email}</p>
        <p><strong>Telefon:</strong> ${data.phone}</p>
        <p><strong>Konu:</strong> ${data.subject}</p>
        <p><strong>Mesaj:</strong></p>
        <p>${data.message}</p>
      `
    })

    console.log("Mail başarıyla gönderildi ✅", info)

    return NextResponse.json({ success: true })
  } catch (error: any) {
    console.error("[Contact API] Hata:", error)
    // Hata mesajını frontend’e göndermek için daha açıklayıcı yapıyoruz
    return NextResponse.json(
      { error: error.message || "Mesaj gönderilemedi" },
      { status: 500 }
    )
  }
}
