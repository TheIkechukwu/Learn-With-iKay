import type { Metadata } from "next";
import { Kicker } from "@/components/ui/Kicker";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Learn With iKay collects, uses, and protects your personal information.",
};

const sections = [
  {
    heading: "1. Introduction",
    body: [
      "Learn With iKay (\u201cLWi,\u201d \u201cwe,\u201d \u201cus,\u201d or \u201cour\u201d) provides data analysis training and STEM tutoring services. This Privacy Policy explains what personal information we collect, how we use it, and the choices you have.",
      "By using our website or enrolling in any of our programmes, you agree to the practices described in this policy.",
    ],
  },
  {
    heading: "2. Information We Collect",
    body: [
      "We collect information you provide directly to us, including your name, email address, phone number, and any details you share in an application, enquiry, or message form.",
      "For paid programmes, payment details are collected and processed by our third-party payment processor. We do not store your full card or bank details on our own systems.",
      "We also collect basic usage information automatically, such as pages visited and general device information, to help us understand how our website is used and to improve it.",
    ],
  },
  {
    heading: "3. How We Use Your Information",
    body: [
      "We use the information we collect to:",
    ],
    list: [
      "Process applications, enrolments, and payments",
      "Communicate with you about your programme, schedule, and support requests",
      "Send occasional updates, such as our newsletter, which you may unsubscribe from at any time",
      "Improve our programmes, website, and teaching materials",
      "Meet legal and regulatory obligations",
    ],
  },
  {
    heading: "4. How We Share Your Information",
    body: [
      "We do not sell your personal information. We share information only where necessary to run our business, including with:",
    ],
    list: [
      "Payment processors, to complete transactions securely",
      "Email and communication service providers, to deliver programme updates and our newsletter",
      "Video conferencing providers, to host live classes and tutoring sessions",
      "Legal or regulatory authorities, where required by law",
    ],
  },
  {
    heading: "5. Children's Privacy (STEM Tutoring)",
    body: [
      "Our STEM Tutoring programme is offered to school-age learners. We collect information about a child, such as their name, age, and subject or level of interest, directly from a parent or legal guardian, not from the child.",
      "By enrolling a child in STEM Tutoring, a parent or guardian confirms they have the authority to provide this information and to consent to their child's participation in tutoring sessions on our behalf.",
      "Parents or guardians may contact us at any time to review, update, or request deletion of their child's information.",
    ],
  },
  {
    heading: "6. Data Retention",
    body: [
      "We retain personal information for as long as necessary to provide our services, maintain business records, and meet legal obligations. When information is no longer needed, we take reasonable steps to delete or anonymise it.",
    ],
  },
  {
    heading: "7. Data Security",
    body: [
      "We take reasonable technical and organisational measures to protect your information against unauthorised access, loss, or misuse. No method of transmission or storage is completely secure, and we cannot guarantee absolute security.",
    ],
  },
  {
    heading: "8. Your Rights",
    body: [
      "Under the Nigeria Data Protection Act 2023 and applicable data protection law, you have the right to access the personal information we hold about you, request correction of inaccurate information, request deletion of your information, and object to certain uses of your information.",
      "To exercise any of these rights, contact us using the details below.",
    ],
  },
  {
    heading: "9. Cookies",
    body: [
      "Our website may use basic cookies to remember your preferences and understand general site usage. You can disable cookies through your browser settings, though some parts of the site may not function as intended.",
    ],
  },
  {
    heading: "10. Changes to This Policy",
    body: [
      "We may update this Privacy Policy from time to time. Material changes will be reflected by an updated \u201cLast updated\u201d date on this page.",
    ],
  },
  {
    heading: "11. Contact Us",
    body: [
      "If you have questions about this Privacy Policy or how your information is handled, contact us at:",
    ],
    contact: true,
  },
];

export default function PrivacyPolicyPage() {
  return (
    <section className="mx-auto max-w-[760px] px-5 pb-24 pt-16 md:px-10 md:pt-20">
      <Kicker>LEGAL</Kicker>
      <h1 className="mt-4 font-display text-[32px] font-bold leading-[1.1] tracking-[-0.02em] text-primary md:text-[42px]">
        Privacy Policy
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