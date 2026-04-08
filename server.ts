import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import nodemailer from "nodemailer";

dotenv.config();

const app = express();
const port = Number(process.env.PORT || 4000);

app.use(
  cors({
    origin: process.env.CLIENT_ORIGIN || "http://localhost:3000",
  }),
);
app.use(express.json());

const requiredFieldMessage = "Please complete this required field";

function validateEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

app.post("/api/contact", async (req, res) => {
  const { name, email, subject, message } = req.body as {
    name?: string;
    email?: string;
    subject?: string;
    message?: string;
  };

  const trimmedName = name?.trim() || "";
  const trimmedEmail = email?.trim() || "";
  const trimmedSubject = subject?.trim() || "";
  const trimmedMessage = message?.trim() || "";

  if (!trimmedName || !trimmedEmail || !trimmedSubject || !trimmedMessage) {
    return res.status(400).json({ message: requiredFieldMessage });
  }

  if (!validateEmail(trimmedEmail)) {
    return res.status(400).json({ message: "Please enter a valid email address" });
  }

  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, MAIL_TO } = process.env;

  if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS || !MAIL_TO) {
    return res.status(500).json({
      message: "Mail service is not configured correctly. Check your .env values.",
    });
  }

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
      replyTo: trimmedEmail,
      to: MAIL_TO,
      subject: `Portfolio Contact: ${trimmedSubject}`,
      text: [
        `Name: ${trimmedName}`,
        `Email: ${trimmedEmail}`,
        `Subject: ${trimmedSubject}`,
        "",
        "Message:",
        trimmedMessage,
      ].join("\n"),
      html: `
        <h2>Eswar portfolio contact message</h2>
        <p><strong>Name:</strong> ${trimmedName}</p>
        <p><strong>Email:</strong> ${trimmedEmail}</p>
        <p><strong>Subject:</strong> ${trimmedSubject}</p>
        <p><strong>Message:</strong></p>
        <p>${trimmedMessage.replace(/\n/g, "<br />")}</p>
      `,
    });

    await transporter.sendMail({
      to: trimmedEmail,
      subject: "We received your message",
      text: [
        `Hi ${trimmedName},`,
        "",
        "Thank you for reaching out through my portfolio. I really appreciate your message.",
        "",
        "I've received your request and will get back to you shortly.",
        "",
        "Best regards,",
        "Eswaran",
      ].join("\n"),
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #1f2937; max-width: 600px; ">
          <p style="margin: 0 0 16px;">Hi ${trimmedName},</p>
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

    return res.status(200).json({ message: "Message sent successfully." });
  } catch (error) {
    console.error("Contact form email error", error);
    return res.status(500).json({
      message: "Something went wrong while sending your message.",
    });
  }
});

app.listen(port, () => {
  console.log(`Contact server running on http://localhost:${port}`);
});
