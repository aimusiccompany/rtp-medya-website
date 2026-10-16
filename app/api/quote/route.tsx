import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { quoteSchema, escapeHtml } from "@/lib/form-validation";

export async function POST(request: Request) {
  try {
    const result = quoteSchema.safeParse(await request.json().catch(() => null));
    if (!result.success) return NextResponse.json({ error: "Lütfen zorunlu alanları ve e-posta/telefon bilgilerinizi kontrol edin." }, { status: 400 });
    const data = result.data;


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
      secure: Number(process.env.SMTP_PORT) === 465,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // 📤 4️⃣ Mail içeriği
    const mailInfo = await transporter.sendMail({
      from: `"RTP Medya" <${process.env.SMTP_USER}>`,
      to: process.env.MAIL_TO,
      replyTo: data.email,
      subject: `Yeni Teklif Talebi: ${data.companyName || data.name}`,
      html: `
        <h2>Yeni Teklif Talebi</h2>
        <p><strong>Firma/Ad Soyad:</strong> ${escapeHtml(data.companyName || data.name)}</p>
        <p><strong>E-posta:</strong> ${escapeHtml(data.email)}</p>
        <p><strong>Telefon:</strong> ${escapeHtml(data.phone)}</p>
        <p><strong>Sektör:</strong> ${escapeHtml(data.sector || "-")}</p>
        <p><strong>Hizmet:</strong> ${escapeHtml(data.service || "-")}</p>
        <p><strong>Mesaj:</strong></p>
        <p>${escapeHtml(data.message || "(Mesaj girilmemiş)")}</p>
      `,
    });

    console.log("✅ Mail başarıyla gönderildi:", mailInfo.response);

    // 🎯 5️⃣ Başarılı yanıt
    return NextResponse.json({ success: true });
  } catch (error: unknown) {
    console.error("[Quote API] Hata:", error);
    return NextResponse.json(
      { error: "Mesaj gönderilemedi. Lütfen tekrar deneyin veya telefonla iletişime geçin." },
      { status: 500 }
    );
  }
}
