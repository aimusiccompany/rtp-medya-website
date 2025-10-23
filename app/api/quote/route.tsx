import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const data = await request.json();

    console.log("Form verisi alındı:", data);

    // 🪤 1️⃣ Honeypot kontrolü (bot form gönderimini engelle)
    if (data.website && data.website.trim() !== "") {
      console.warn("⚠️ Spam tespit edildi, form iptal edildi.");
      return NextResponse.json({ error: "Spam tespit edildi." }, { status: 400 });
    }

    // 🧾 2️⃣ Basit doğrulamalar (boş veya geçersiz alanları engelle)
    if (!data.email || !data.phone || !data.name) {
      return NextResponse.json({ error: "Zorunlu alanlar eksik." }, { status: 400 });
    }

    // ✉️ 3️⃣ Mail gönderici yapılandırması
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // 📤 4️⃣ Mail içeriği
    const mailInfo = await transporter.sendMail({
      from: `"RTP Medya" <${process.env.SMTP_USER}>`,
      to: process.env.MAIL_TO,
      subject: `Yeni Teklif Talebi: ${data.companyName || data.name}`,
      html: `
        <h2>Yeni Teklif Talebi</h2>
        <p><strong>Firma/Ad Soyad:</strong> ${data.companyName || data.name}</p>
        <p><strong>E-posta:</strong> ${data.email}</p>
        <p><strong>Telefon:</strong> ${data.phone}</p>
        <p><strong>Sektör:</strong> ${data.sector || "-"}</p>
        <p><strong>Hizmet:</strong> ${data.service || "-"}</p>
        <p><strong>Mesaj:</strong></p>
        <p>${data.message || "(Mesaj girilmemiş)"}</p>
      `,
    });

    console.log("✅ Mail başarıyla gönderildi:", mailInfo.response);

    // 🎯 5️⃣ Başarılı yanıt
    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error("[Quote API] Hata:", error);
    return NextResponse.json(
      { error: error.message || "Mesaj gönderilemedi" },
      { status: 500 }
    );
  }
}
