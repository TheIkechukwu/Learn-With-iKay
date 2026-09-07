import { NextResponse } from "next/server";
import { resend } from "@/lib/resend";
import { ADMIN_EMAIL, FROM_EMAIL } from "@/lib/email/constants";
import { enrollAdminEmail, enrollUserEmail } from "@/lib/email/templates";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  let payload: {
    firstName?: string;
    lastName?: string;
    email?: string;
    linkedin?: string;
    program?: string;
    experienceLevel?: string;
    statement?: string;
    company?: string;
  };

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request body." }, { status: 400 });
  }

  const { firstName, lastName, email, linkedin, program, experienceLevel, statement, company } =
    payload;

  // Honeypot field: real visitors never fill this in. Bots that do get a
  // fake success response so they don't learn to avoid the trap.
  if (company) {
    return NextResponse.json({ ok: true });
  }

  if (
    !firstName?.trim() ||
    !lastName?.trim() ||
    !email?.trim() ||
    !program?.trim() ||
    !experienceLevel?.trim() ||
    !statement?.trim()
  ) {
    return NextResponse.json(
      { ok: false, error: "Please complete all required fields before submitting." },
      { status: 400 }
    );
  }

  if (!EMAIL_REGEX.test(email)) {
    return NextResponse.json(
      { ok: false, error: "Please enter a valid email address." },
      { status: 400 }
    );
  }

  const admin = enrollAdminEmail({
    firstName,
    lastName,
    email,
    linkedin: linkedin?.trim() || undefined,
    program,
    experienceLevel,
    statement,
  });
  const user = enrollUserEmail({ firstName, program });

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
      console.error("Resend error (enroll):", adminResult.error, userResult.error);
      return NextResponse.json(
        {
          ok: false,
          error: "We couldn't submit your application. Please try again or email us directly.",
        },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Enroll form error:", error);
    return NextResponse.json(
      { ok: false, error: "Something went wrong. Please try again or email us directly." },
      { status: 500 }
    );
  }
}