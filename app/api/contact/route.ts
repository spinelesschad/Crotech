import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

/* -------------------------------------
   Simple in-memory rate limiting
   (per IP, resets on server restart)
------------------------------------- */
const RATE_LIMIT_WINDOW = 60_000; // 1 minute
const RATE_LIMIT_MAX = 5;

const rateLimitMap = new Map<string, { count: number; firstRequest: number }>();

function isRateLimited(ip: string) {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);

  if (!entry) {
    rateLimitMap.set(ip, { count: 1, firstRequest: now });
    return false;
  }

  if (now - entry.firstRequest > RATE_LIMIT_WINDOW) {
    rateLimitMap.set(ip, { count: 1, firstRequest: now });
    return false;
  }

  entry.count += 1;
  return entry.count > RATE_LIMIT_MAX;
}

/* -------------------------------------
   Helpers
------------------------------------- */
function escapeHtml(input: string) {
  return input
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function POST(req: Request) {
  try {
    /* -------------------------------------
       Rate limiting
    ------------------------------------- */
    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0] ?? "unknown-ip";

    if (isRateLimited(ip)) {
      return NextResponse.json({ error: "Too many requests" }, { status: 429 });
    }

    const body = await req.json();

    const {
      name,
      email,
      subject,
      message,
      company, // honeypot
    } = body ?? {};

    /* -------------------------------------
       Honeypot check (silent success)
    ------------------------------------- */
    if (company) {
      return NextResponse.json({ success: true });
    }

    /* -------------------------------------
       Validation
    ------------------------------------- */
    if (
      typeof name !== "string" ||
      typeof email !== "string" ||
      typeof subject !== "string" ||
      typeof message !== "string"
    ) {
      return NextResponse.json({ error: "Invalid payload" }, { status: 400 });
    }

    if (!name.trim() || !email.trim() || !subject.trim() || !message.trim()) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 },
      );
    }

    if (
      name.length > 100 ||
      email.length > 200 ||
      subject.length > 150 ||
      message.length > 5000
    ) {
      return NextResponse.json({ error: "Input too long" }, { status: 400 });
    }

    /* -------------------------------------
       Send email
    ------------------------------------- */
    await resend.emails.send({
      from: "CroTech <contact@crotech.io>",
      to: ["info@crotech.io"],
      replyTo: email,
      subject: `New Contact — ${subject}`,
      html: `
        <h2>New Contact Submission</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Subject:</strong> ${escapeHtml(subject)}</p>
        <p><strong>Message:</strong></p>
        <p>${escapeHtml(message).replace(/\n/g, "<br />")}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
