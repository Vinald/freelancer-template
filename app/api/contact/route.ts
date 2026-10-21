import { NextResponse } from "next/server";
import { getSiteSettings } from "@/lib/sanity";

export async function POST(request: Request) {
  const body = await request.json();
  const { name, email, message } = body as Record<string, string>;

  if (!name || !email || !message) {
    return NextResponse.json({ error: "missing required fields" }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    console.log("[contact form submission, no RESEND_API_KEY set]", { name, email, message });
    return NextResponse.json({ ok: true, mode: "logged" });
  }

  const settings = await getSiteSettings();

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: "website@resend.dev",
      to: settings.email,
      reply_to: email,
      subject: `New inquiry from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
    }),
  });

  if (!response.ok) {
    return NextResponse.json({ error: "failed to send" }, { status: 502 });
  }

  return NextResponse.json({ ok: true, mode: "sent" });
}
