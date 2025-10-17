import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const data = await request.json();

    console.log("Form verisi alındı:", data);

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const mailInfo = await transporter.sendMail({
      from: `"RTP Medya" <${process.env.SMTP_USER}>`,
      to: process.env.MAIL_TO,
      subject: `Yeni Teklif Talebi: ${data.companyName || data.name}`,
      html: `
        <h2>Yeni Teklif Talebi</h2>
        <p><strong>Firma/Ad Soyad:</strong> ${data.companyName || data.name}</p>
        <p><strong>E-posta:</strong> ${data.email}</p>
        <p><strong>Telefon:</strong> ${data.phone}</p>
        <p><strong>Sektör:</strong> ${data.sector}</p>
        <p><strong>Hizmet:</strong> ${data.service}</p>
        <p><strong>Mesaj:</strong></p>
        <p>${data.message}</p>
      `,
    });

    console.log("Mail gönderildi:", mailInfo.response);

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error("[Quote API] Hata:", error);
    return NextResponse.json({ error: error.message || "Mesaj gönderilemedi" }, { status: 500 });
  }
}
