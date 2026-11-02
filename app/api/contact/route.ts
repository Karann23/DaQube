import { NextResponse } from "next/server";

type Enquiry = {
  name?: string; email?: string; company?: string; service?: string;
  volume?: string; details?: string;
};

export async function POST(request: Request) {
  let body: Enquiry;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Please submit a valid form." }, { status: 400 });
  }

  const name = String(body.name ?? "").trim();
  const email = String(body.email ?? "").trim();
  const service = String(body.service ?? "").trim();
  const details = String(body.details ?? "").trim();

  if (!name || !email || !service || !details) {
    return NextResponse.json({ error: "Please complete all required fields." }, { status: 400 });
  }
  if (name.length > 120 || email.length > 254 || details.length > 6000) {
    return NextResponse.json({ error: "One or more fields are too long." }, { status: 400 });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.LEADS_TO_EMAIL;
  const from = process.env.RESEND_FROM_EMAIL;

  if (!apiKey || !to || !from) {
    return NextResponse.json(
      { error: "The enquiry form is not connected yet. Please email hello@daqube.example while the site owner completes setup." },
      { status: 503 }
    );
  }

  const safe = (value: unknown) => String(value ?? "").trim().slice(0, 6000);
  const emailResponse = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from,
      to: [to],
      reply_to: email,
      subject: `DaQube website enquiry — ${name} / ${service}`,
      text: [
        "New project enquiry from the DaQube website",
        "",
        `Name: ${safe(name)}`,
        `Email: ${safe(email)}`,
        `Company: ${safe(body.company) || "Not provided"}`,
        `Service: ${safe(service)}`,
        `Estimated volume: ${safe(body.volume) || "Not provided"}`,
        "",
        "Project details:",
        safe(details)
      ].join("\n")
    })
  });

  if (!emailResponse.ok) {
    return NextResponse.json({ error: "We couldn't deliver your enquiry right now. Please try again or email us directly." }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
