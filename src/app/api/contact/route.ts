import { NextResponse } from "next/server";

/**
 * Sends the contact form through Resend (https://resend.com, free tier).
 * Requires RESEND_API_KEY and CONTACT_TO_EMAIL in the environment; returns 503 with a clear message otherwise.
 */
export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL ?? "Portfolio <onboarding@resend.dev>";

  let payload: Record<string, unknown>;
  try { payload = await request.json(); } catch { return NextResponse.json({ error: "Invalid request." }, { status: 400 }); }

  const name = String(payload.name ?? "").trim();
  const email = String(payload.email ?? "").trim();
  const message = String(payload.message ?? "").trim();
  const type = String(payload.type ?? "").trim();
  if (payload.website) return NextResponse.json({ ok: true });
  if (name.length < 2 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || message.length < 10) {
    return NextResponse.json({ error: "Please add your name, a valid email, and a short message." }, { status: 422 });
  }
  if (!apiKey || !to) {
    return NextResponse.json({ error: "The contact form is not connected yet. Please email me directly." }, { status: 503 });
  }

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({ from, to: [to], reply_to: email, subject: `Portfolio enquiry from ${name}${type ? ` · ${type}` : ""}`, text: `Name: ${name}\nEmail: ${email}\nType: ${type || "-"}\n\n${message}` }),
  });
  if (!response.ok) return NextResponse.json({ error: "Could not send right now. Please email me directly." }, { status: 502 });
  return NextResponse.json({ ok: true });
}
