import { NextResponse } from "next/server";

const rateLimit = new Map<string, { count: number; last: number }>();

export function middleware(req: Request) {
  const url = new URL(req.url);

  // Sadece teklif ve iletişim formlarını koru
  if (!url.pathname.startsWith("/api/quote") && !url.pathname.startsWith("/api/contact")) {
    return NextResponse.next();
  }

  // 1️⃣ User-Agent kontrolü (curl, bot, python, vb. engelle)
  const ua = req.headers.get("user-agent") || "";
  if (!ua.match(/Mozilla|Chrome|Safari|Edge|Firefox/i)) {
    return new NextResponse("Bot blocked", { status: 403 });
  }

  // 2️⃣ Basit hız limiti: aynı IP 10 istekten fazla atarsa 1 dakika engel
  const ip = req.headers.get("x-forwarded-for") || "unknown";
  const now = Date.now();
  const entry = rateLimit.get(ip) || { count: 0, last: now };

  if (now - entry.last > 60_000) {
    entry.count = 0;
    entry.last = now;
  }
  entry.count++;
  rateLimit.set(ip, entry);

  if (entry.count > 10) {
    return new NextResponse("Too many requests", { status: 429 });
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/api/quote", "/api/contact"],
};
