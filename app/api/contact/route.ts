import { NextResponse } from "next/server";
import { resend } from "@/lib/resend";
import { ADMIN_EMAIL, FROM_EMAIL } from "@/lib/email/constants";
import { contactAdminEmail, contactUserEmail } from "@/lib/email/templates";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  let payload: {
    name?: string;
    email?: string;
    subject?: string;
    message?: string;
    company?: string;
  };

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request body." }, { status: 400 });
  }

  const { name, email, subject, message, company } = payload;

  // Honeypot field: real visitors never fill this in. Bots that do get a
  // fake success response so they don't learn to avoid the trap.
  if (company) {
    return NextResponse.json({ ok: true });
  }

  if (!name?.trim() || !email?.trim() || !message?.trim()) {
    return NextResponse.json(
      { ok: false, error: "Please fill in your name, email and message." },
      { status: 400 }
    );
  }

  if (!EMAIL_REGEX.test(email)) {
    return NextResponse.json(
      { ok: false, error: "Please enter a valid email address." },
      { status: 400 }
    );
  }

  const admin = contactAdminEmail({ name, email, subject: subject ?? "", message });
  const user = contactUserEmail({ name });

  try {
    const [adminResult, userResult] = await Promise.all([
      resend.emails.send({
        from: FROM_EMAIL,
        to: ADMIN_EMAIL,
        replyTo: email,
        subject: admin.subject,
        html: admin.html,
      }),
      resend.emails.send({
        from: FROM_EMAIL,
        to: email,
        subject: user.subject,
        html: user.html,
      }),
    ]);

    if (adminResult.error || userResult.error) {
      console.error("Resend error (contact):", adminResult.error, userResult.error);
      return NextResponse.json(
        { ok: false, error: "We couldn't send your message. Please try again or email us directly." },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { ok: false, error: "Something went wrong. Please try again or email us directly." },
      { status: 500 }
    );
  }
}