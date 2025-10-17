import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(request: Request) {
  try {
    const data = await request.json()

    // SMTP ayarları
    const transporter = nodemailer.createTransport({
      host: "mail.rtpmedya.com.tr",
      port: 587,
      secure: false, // 587 için TLS kullanıyoruz
      auth: {
        user: "info@rtpmedya.com.tr",
        pass: "InfoRtp150305.!",
      },
    })

    // Mail gönderimi
    await transporter.sendMail({
      from: `"RTP Medya" <info@rtpmedya.com.tr>`,
      to: "info@rtpmedya.com.tr", // mailin size gelmesini istediğiniz adres
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

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("[Contact API] Hata:", error)
    return NextResponse.json({ error: "Mesaj gönderilemedi" }, { status: 500 })
  }
}
