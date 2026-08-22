import type { Metadata } from "next";
import { FiMail, FiPhone, FiMapPin, FiClock } from "react-icons/fi";
import { Kicker } from "@/components/ui/Kicker";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Learn With iKay, email, WhatsApp, or book a free consultation call.",
};

const contactDetails = [
  { icon: FiMail, k: "EMAIL", v: "hello@learnwithikay.com" },
  { icon: FiPhone, k: "PHONE / WHATSAPP", v: "+234 801 234 5678" },
  { icon: FiMapPin, k: "OFFICE", v: "Globally" },
];

const inputClass =
  "mt-2.25 w-full rounded-lg border border-primary/20 bg-surface-container-lowest px-4 py-3.5 text-[15px] outline-none transition-all duration-200 focus:border-2 focus:border-primary";

export default function ContactPage() {
  return (
    <>
      <section className="bg-grid relative overflow-hidden border-b border-surface-variant pb-16 pt-20 md:pb-24 md:pt-24">
        <div className="relative mx-auto max-w-[1280px] px-5 text-center md:px-10">
          <Kicker tone="pill" className="mx-auto">
            CONTACT
          </Kicker>
          <h1 className="mx-auto mt-6 max-w-3xl font-display text-[32px] font-bold leading-[1.06] tracking-[-0.02em] text-primary md:text-[48px]">
            Ask us anything before you apply.
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-[17px] leading-relaxed text-on-surface-variant">
            Programs, pricing, corporate engagements, or the kids programme , 
            we usually reply within one working day.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-[1280px] px-5 pb-20 pt-14 md:px-10">
        <div className="grid items-start gap-7 lg:grid-cols-[1.15fr_1fr]">
          <form className="relative overflow-hidden rounded-xl border border-outline-variant/30 bg-surface-container-lowest px-6 pb-8 pt-7 shadow-[var(--shadow-card)] md:px-10 md:pb-11 md:pt-10">
            <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-primary to-tertiary-fixed" />
            <div className="font-display text-[24px] font-bold tracking-[-0.01em] text-primary">
              Send us a message
            </div>
            <div className="mt-2 text-[15px] text-on-surface-variant">
              We&apos;ll route your message to the right team automatically.
            </div>

            <div className="mt-7.5 grid grid-cols-1 gap-4.5 sm:grid-cols-2">
              <label>
                <div className="font-mono text-[10.5px] tracking-[0.12em] text-on-surface-variant">
                  FULL NAME
                </div>
                <input required placeholder="Your name" className={inputClass} />
              </label>
              <label>
                <div className="font-mono text-[10.5px] tracking-[0.12em] text-on-surface-variant">
                  EMAIL
                </div>
                <input required type="email" placeholder="you@email.com" className={inputClass} />
              </label>
            </div>

            <label className="mt-4.5 block">
              <div className="font-mono text-[10.5px] tracking-[0.12em] text-on-surface-variant">
                SUBJECT
              </div>
              <input placeholder="What is this about?" className={inputClass} />
            </label>

            <label className="mt-4.5 block">
              <div className="font-mono text-[10.5px] tracking-[0.12em] text-on-surface-variant">
                MESSAGE
              </div>
              <textarea
                required
                rows={6}
                placeholder="Tell us what you'd like to know."
                className={`${inputClass} resize-y leading-relaxed`}
              />
            </label>

            <button
              type="submit"
              className="mt-8 rounded-full bg-primary px-9 py-4 font-display text-[15.5px] font-bold text-on-primary transition-colors hover:opacity-90"
            >
              Send message
            </button>
          </form>

          <div className="grid gap-6">
            <div className="rounded-xl border border-outline-variant/30 bg-surface-container-lowest px-8.5 py-8.5 shadow-[var(--shadow-card)]">
              <div className="grid gap-5">
                {contactDetails.map((c) => (
                  <div key={c.k} className="flex items-start gap-3.5">
                    <div className="grid h-10 w-10 flex-shrink-0 place-items-center rounded-lg bg-surface-container">
                      <c.icon className="text-primary" size={17} />
                    </div>
                    <div>
                      <div className="font-mono text-[10.5px] tracking-[0.12em] text-on-surface-variant">
                        {c.k}
                      </div>
                      <div className="mt-1 text-[15.5px] font-medium text-primary">{c.v}</div>
                    </div>
                  </div>
                ))}
              </div>
          
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
