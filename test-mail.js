import nodemailer from "nodemailer";

async function testMail() {
  const transporter = nodemailer.createTransport({
    host: "mail.veriupmail.com",
    port: 587,
    secure: false,
    auth: {
      user: "info@rtpmedya.com.tr",
      pass: "InfoRtp150305.!"
    }
  });

  try {
    const info = await transporter.sendMail({
      from: '"Test RTP Medya" <info@rtpmedya.com.tr>',
      to: "info@rtpmedya.com.tr",
      subject: "SMTP Test Mail",
      text: "Bu bir test mailidir."
    });
    console.log("Mail gönderildi:", info);
  } catch (err) {
    console.error("SMTP Hatası:", err);
  }
}

testMail();
