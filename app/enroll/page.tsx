import type { Metadata } from "next";
import { FiGitBranch } from "react-icons/fi";
import { Kicker } from "@/components/ui/Kicker";
import { EnrollForm } from "@/components/enroll/EnrollForm";
import { ProcessStepper } from "@/components/enroll/ProcessStepper";
import { FaqAccordion } from "@/components/services/FaqAccordion";
import { SERVICES } from "@/lib/data";

export const metadata: Metadata = {
  title: "Enroll",
  description: "Apply for a programme at Learn With iKay. Applications are reviewed weekly.",
};

const admissionsFaqs = [
  {
    q: "How are applications reviewed?",
    a: "We review applications every Monday and Thursday. Expect a response within three working days.",
  },
  {
    q: "Prerequisites",
    a: "Data Analysis for Beginners assumes no prior experience. The Advanced course assumes comfort with basic Excel and SQL. STEM Tutoring has no prerequisites.",
  },
  {
    q: "Re-application",
    a: "If we ask you to reapply, you're welcome to do so once you've addressed the feedback shared with you.",
  },
  ...SERVICES[0].faqs.slice(0, 2),
];

export default function EnrollPage() {
  return (
    <div className="bg-grid relative overflow-hidden pb-24">
      <section className="mx-auto max-w-[1280px] px-5 pb-12 pt-16 md:px-10">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <Kicker tone="pill" className="mx-auto">
            APPLICATION PORTAL
          </Kicker>
          <h1 className="mt-6 font-display text-[32px] font-bold tracking-[-0.02em] text-primary md:text-[48px]">
            Begin Your Data Journey
          </h1>
          <p className="mt-5 text-[17px] leading-relaxed text-on-surface-variant">
            Our rigorous programs require high commitment. Please complete
            the application below to begin the screening process.
          </p>
        </div>

        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <EnrollForm />
          </div>

          <div className="grid gap-6 lg:col-span-4">
            <div className="rounded-xl border border-outline-variant/30 bg-surface-container-lowest p-6 shadow-[var(--shadow-card)]">
              <h4 className="mb-6 flex items-center gap-2 font-display text-[18px] font-semibold text-primary">
                <FiGitBranch className="text-tertiary-fixed-dim" size={19} />
                The Process
              </h4>
              <ProcessStepper />
            </div>

            <div className="rounded-xl border border-outline-variant/20 bg-surface-container-low p-6">
              <h4 className="mb-4 font-display text-[18px] font-semibold text-primary">
                Admissions FAQ
              </h4>
              <FaqAccordion faqs={admissionsFaqs} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}