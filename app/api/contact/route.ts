import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, phone, subject, message } = body

    // For now, we'll just log the data and return success
    console.log("[v0] Contact form submission:", { name, email, phone, subject, message })

    // In production, you would integrate with an email service like:
    // - Resend
    // - SendGrid
    // - AWS SES
    // And send to info@rtpmedya.com.tr

    return NextResponse.json({ success: true, message: "Form submitted successfully" })
  } catch (error) {
    console.error("[v0] Error processing contact form:", error)
    return NextResponse.json({ success: false, message: "Error processing form" }, { status: 500 })
  }
}
