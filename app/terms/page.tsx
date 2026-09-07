import type { Metadata } from "next";
import { Kicker } from "@/components/ui/Kicker";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "The terms that govern enrolment in and use of Learn With iKay's programmes.",
};

const sections = [
  {
    heading: "1. Acceptance of Terms",
    body: [
      "These Terms of Service (\u201cTerms\u201d) govern your access to and use of the Learn With iKay (\u201cLWi\u201d) website and enrolment in any of our programmes. By enrolling in a programme or using our website, you agree to be bound by these Terms.",
    ],
  },
  {
    heading: "2. Our Programmes",
    body: [
      "LWi currently offers the following programmes:",
    ],
    list: [
      "Data Analysis for Beginners, a 3-week foundational programme",
      "Advanced Data Analysis Course, a 6-week intermediate to advanced programme",
      "STEM Tutoring, personalised one-on-one tutoring for school-age learners",
    ],
    trailing:
      "Programme content, schedules, and pricing are described on our website and may be updated from time to time. Where a programme's fee is not fixed, such as STEM Tutoring, pricing is agreed individually before sessions begin.",
  },
  {
    heading: "3. Enrolment & Payment",
    body: [
      "Enrolment is confirmed once your application is accepted and the applicable fee has been paid in full, unless a payment arrangement has been separately agreed with us in writing.",
      "All prices are quoted in Nigerian Naira (\u20a6) unless stated otherwise, and are payable through the payment methods made available at checkout or as otherwise instructed.",
    ],
  },
  {
    heading: "4. Cancellations & Refunds",
    body: [
      "If you withdraw from a paid programme more than seven (7) days before its start date, you are entitled to a full refund, less any payment processing fees already incurred.",
      "Once a programme has started, fees are generally non-refundable, as your seat has been reserved and materials made available. We may, at our discretion, consider exceptions for documented medical or other serious circumstances.",
      "For STEM Tutoring, cancellation of an individual session with at least twenty-four (24) hours' notice will not be charged; cancellations with less notice may be billed as a completed session, unless otherwise agreed with your tutor.",
    ],
  },
  {
    heading: "5. Live Sessions & Conduct",
    body: [
      "Live classes and tutoring sessions are conducted online. Sessions may be recorded for learners' review; recordings are for personal use only and may not be redistributed.",
      "We expect respectful conduct from all learners and parents/guardians toward instructors, tutors, and fellow learners. We reserve the right to remove any participant from a session or programme for conduct that is abusive, disruptive, or otherwise inappropriate.",
    ],
  },
  {
    heading: "6. Intellectual Property",
    body: [
      "All course materials, curricula, slides, datasets, videos, and other content provided as part of our programmes remain the intellectual property of Learn With iKay. Materials are licensed to you for personal, non-commercial learning use only, and may not be copied, resold, or redistributed without our written permission.",
    ],
  },
  {
    heading: "7. STEM Tutoring for Minors",
    body: [
      "STEM Tutoring sessions for learners under 18 must be arranged by a parent or legal guardian, who is responsible for providing accurate information and for their child's attendance and conduct during sessions.",
      "Parents or guardians may request to observe any tutoring session involving their child.",
    ],
  },
  {
    heading: "8. Limitation of Liability",
    body: [
      "We aim to deliver our programmes to a high standard, but we do not guarantee specific outcomes such as employment, promotion, or examination results. To the fullest extent permitted by law, LWi shall not be liable for any indirect, incidental, or consequential damages arising from your use of our services.",
    ],
  },
  {
    heading: "9. Governing Law",
    body: [
      "These Terms are governed by the laws of the Federal Republic of Nigeria. Any disputes arising from these Terms shall be subject to the exclusive jurisdiction of the courts of Nigeria.",
    ],
  },
  {
    heading: "10. Changes to These Terms",
    body: [
      "We may update these Terms from time to time. Continued use of our website or participation in a programme after changes take effect constitutes acceptance of the revised Terms.",
    ],
  },
  {
    heading: "11. Contact Us",
    body: ["Questions about these Terms can be directed to:"],
    contact: true,
  },
];

export default function TermsOfServicePage() {
  return (
    <section className="mx-auto max-w-[760px] px-5 pb-24 pt-16 md:px-10 md:pt-20">
      <Kicker>LEGAL</Kicker>
      <h1 className="mt-4 font-display text-[32px] font-bold leading-[1.1] tracking-[-0.02em] text-primary md:text-[42px]">
        Terms of Service
      </h1>
      <p className="mt-3 font-mono text-[12px] text-outline">Last updated: January 2026</p>

      <div className="mt-10 grid gap-10">
        {sections.map((s) => (
          <div key={s.heading}>
            <h2 className="font-display text-[19px] font-semibold text-primary">{s.heading}</h2>
            <div className="mt-3 grid gap-3">
              {s.body.map((p) => (
                <p key={p} className="text-[15.5px] leading-relaxed text-on-surface-variant">
                  {p}
                </p>
              ))}
            </div>
            {s.list && (
              <ul className="mt-3 grid gap-2 pl-5">
                {s.list.map((item) => (
                  <li
                    key={item}
                    className="list-disc text-[15.5px] leading-relaxed text-on-surface-variant"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            )}
            {s.trailing && (
              <p className="mt-3 text-[15.5px] leading-relaxed text-on-surface-variant">
                {s.trailing}
              </p>
            )}
            {s.contact && (
              <div className="mt-4 rounded-lg bg-surface-container-low px-5 py-4 text-[15px] text-on-surface">
                <div>
                  Email:{" "}
                  <a href="mailto:hello@learnwithikay.com" className="text-surface-tint underline">
                    hello@learnwithikay.com
                  </a>
                </div>
                <div className="mt-1">
                  Phone:{" "}
                  <a href="tel:+2348166262851" className="text-surface-tint underline">
                    +234 816 626 2851
                  </a>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}