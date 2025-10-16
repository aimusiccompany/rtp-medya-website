import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const data = await request.json()

    console.log("[v0] Quote request submission:", data)
    console.log("[v0] Sending to: info@rtpmedya.com.tr")

    // TODO: Implement actual email sending
    // Example with Resend:
    // await resend.emails.send({
    //   from: 'noreply@rtpmedya.com.tr',
    //   to: 'info@rtpmedya.com.tr',
    //   subject: `Yeni Teklif Talebi: ${data.companyName}`,
    //   html: `
    //     <h2>Yeni Teklif Talebi</h2>
    //     <p><strong>Firma:</strong> ${data.companyName}</p>
    //     <p><strong>Ad Soyad:</strong> ${data.name}</p>
    //     <p><strong>E-posta:</strong> ${data.email}</p>
    //     <p><strong>Telefon:</strong> ${data.phone}</p>
    //     <p><strong>Sektör:</strong> ${data.sector}</p>
    //     <p><strong>Hizmet:</strong> ${data.service}</p>
    //     <p><strong>Mesaj:</strong></p>
    //     <p>${data.message}</p>
    //   `
    // })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("[v0] Quote request error:", error)
    return NextResponse.json({ error: "Failed to send quote request" }, { status: 500 })
  }
}
