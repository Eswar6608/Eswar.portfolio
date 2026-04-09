import { headers } from "next/headers";
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

type ContactPayload = {
  name?: unknown;
  email?: unknown;
  subject?: unknown;
  message?: unknown;
  company?: unknown;
};

type RateLimitEntry = {
  count: number;
  resetAt: number;
};

const requiredFieldMessage = "Please complete this required field";
const rateLimitWindowMs = 10 * 60 * 1000;
const maxRequestsPerWindow = 5;
const maxFieldLength = {
  name: 80,
  email: 120,
  subject: 160,
  message: 4000,
};

const rateLimitStore = globalThis as typeof globalThis & {
  __contactRateLimitStore__?: Map<string, RateLimitEntry>;
};

const requestCounts =
  rateLimitStore.__contactRateLimitStore__ ??
  (rateLimitStore.__contactRateLimitStore__ = new Map<string, RateLimitEntry>());

function validateEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function getClientIp(forwardedFor: string | null, realIp: string | null) {
  const forwardedIp = forwardedFor?.split(",")[0]?.trim();
  return forwardedIp || realIp || "unknown";
}

function isRateLimited(ip: string) {
  const now = Date.now();

  for (const [key, value] of requestCounts.entries()) {
    if (value.resetAt <= now) {
      requestCounts.delete(key);
    }
  }

  const existing = requestCounts.get(ip);

  if (!existing || existing.resetAt <= now) {
    requestCounts.set(ip, { count: 1, resetAt: now + rateLimitWindowMs });
    return false;
  }

  if (existing.count >= maxRequestsPerWindow) {
    return true;
  }

  existing.count += 1;
  requestCounts.set(ip, existing);
  return false;
}

function validatePayload(
  payload: ContactPayload,
): { error: string; data?: undefined } | { error?: undefined; data: { name: string; email: string; subject: string; message: string } } {
  const name = typeof payload.name === "string" ? payload.name.trim() : "";
  const email = typeof payload.email === "string" ? payload.email.trim() : "";
  const subject = typeof payload.subject === "string" ? payload.subject.trim() : "";
  const message = typeof payload.message === "string" ? payload.message.trim() : "";
  const company = typeof payload.company === "string" ? payload.company.trim() : "";

  if (company) {
    return { error: "Spam detected." };
  }

  if (!name || !email || !subject || !message) {
    return { error: requiredFieldMessage };
  }

  if (!validateEmail(email)) {
    return { error: "Please enter a valid email address" };
  }

  if (name.length > maxFieldLength.name) {
    return { error: "Name is too long." };
  }

  if (email.length > maxFieldLength.email) {
    return { error: "Email is too long." };
  }

  if (subject.length > maxFieldLength.subject) {
    return { error: "Subject is too long." };
  }

  if (message.length > maxFieldLength.message) {
    return { error: "Message is too long." };
  }

  return {
    data: {
      name,
      email,
      subject,
      message,
    },
  };
}

export async function POST(request: Request) {
  const headerList = await headers();
  const origin = headerList.get("origin");
  const host = headerList.get("host");
  const forwardedProto = headerList.get("x-forwarded-proto") ?? "https";
  const siteOrigin = host ? `${forwardedProto}://${host}` : null;

  if (origin && siteOrigin && origin !== siteOrigin) {
    return NextResponse.json({ message: "Invalid request origin." }, { status: 403 });
  }

  const clientIp = getClientIp(
    headerList.get("x-forwarded-for"),
    headerList.get("x-real-ip"),
  );

  if (isRateLimited(clientIp)) {
    return NextResponse.json(
      { message: "Too many requests. Please try again later." },
      { status: 429 },
    );
  }

  let payload: ContactPayload;

  try {
    payload = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json({ message: "Invalid request body." }, { status: 400 });
  }

  const validation = validatePayload(payload);

  if (validation.error) {
    return NextResponse.json({ message: validation.error }, { status: 400 });
  }

  if (!validation.data) {
    return NextResponse.json({ message: "Invalid request body." }, { status: 400 });
  }

  const contactData = validation.data;
  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, MAIL_TO } = process.env;

  if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS || !MAIL_TO) {
    console.error("Missing required SMTP environment variables.");
    return NextResponse.json(
      { message: "Mail service is not configured correctly." },
      { status: 500 },
    );
  }

  const { name, email, subject, message } = contactData;
  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safeSubject = escapeHtml(subject);
  const safeMessage = escapeHtml(message).replace(/\n/g, "<br />");

  try {
    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: Number(SMTP_PORT),
      secure: Number(SMTP_PORT) === 465,
      auth: {
        user: SMTP_USER,
        pass: SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `Portfolio Contact <${SMTP_USER}>`,
      replyTo: email,
      to: MAIL_TO,
      subject: `Portfolio Contact: ${subject}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Subject: ${subject}`,
        "",
        "Message:",
        message,
      ].join("\n"),
      html: `
        <h2>Eswar portfolio contact message</h2>
        <p><strong>Name:</strong> ${safeName}</p>
        <p><strong>Email:</strong> ${safeEmail}</p>
        <p><strong>Subject:</strong> ${safeSubject}</p>
        <p><strong>Message:</strong></p>
        <p>${safeMessage}</p>
      `,
    });

    await transporter.sendMail({
      to: email,
      subject: "We received your message",
      text: [
        `Hi ${name},`,
        "",
        "Thank you for reaching out through my portfolio. I really appreciate your message.",
        "",
        "I've received your request and will get back to you shortly.",
        "",
        "Best regards,",
        "Eswaran",
      ].join("\n"),
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #1f2937; max-width: 600px;">
          <p style="margin: 0 0 16px;">Hi ${safeName},</p>
          <p style="margin: 0 0 16px;">
            Thank you for reaching out through my portfolio. I really appreciate your message.
          </p>
          <p style="margin: 0 0 24px;">
            I've received your request and will get back to you shortly.
          </p>
          <p style="margin: 0;">Best regards,</p>
          <p style="margin: 4px 0 0; font-weight: 600;">Eswaran</p>
        </div>
      `,
    });

    return NextResponse.json({ message: "Message sent successfully." }, { status: 200 });
  } catch (error) {
    console.error("Contact form email error", error);
    return NextResponse.json(
      { message: "Something went wrong while sending your message." },
      { status: 500 },
    );
  }
}
