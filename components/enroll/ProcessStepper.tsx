import { FiCheck } from "react-icons/fi";

const steps = [
  {
    title: "1. Apply",
    body: "Submit your detailed application form.",
    status: "done" as const,
  },
  {
    title: "2. Screening",
    body: "Our team reviews your goals to ensure program fit (2-3 days).",
    status: "current" as const,
  },
  {
    title: "3. Offer",
    body: "Accepted candidates receive cohort placement details.",
    status: "upcoming" as const,
  },
  {
    title: "4. Onboarding",
    body: "Access materials and prepare for day one.",
    status: "upcoming" as const,
  },
];

export function ProcessStepper() {
  return (
    <div className="relative space-y-8 border-l-2 border-surface-variant pl-6">
      {steps.map((s) => (
        <div key={s.title} className="relative">
          {s.status === "done" && (
            <div className="absolute -left-[35px] top-1 grid h-6 w-6 place-items-center rounded-full bg-primary ring-4 ring-surface-container-lowest">
              <FiCheck className="text-on-primary" size={13} />
            </div>
          )}
          {s.status === "current" && (
            <div className="absolute -left-[35px] top-1 grid h-6 w-6 place-items-center rounded-full border-2 border-primary bg-surface-container-high ring-4 ring-surface-container-lowest">
              <div className="h-2 w-2 rounded-full bg-primary" />
            </div>
          )}
          {s.status === "upcoming" && (
            <div className="absolute -left-[35px] top-1 h-6 w-6 rounded-full border-2 border-outline-variant bg-surface-container-high ring-4 ring-surface-container-lowest" />
          )}
          <h5
            className={`font-display text-[16px] font-semibold ${
              s.status === "upcoming" ? "text-on-surface-variant" : "text-primary"
            }`}
          >
            {s.title}
          </h5>
          <p className="mt-1 text-[14.5px] leading-relaxed text-on-surface-variant">{s.body}</p>
        </div>
      ))}
    </div>
  );
}
