import { cn } from "@/lib/utils";

type KickerProps = {
  children: React.ReactNode;
  tone?: "muted" | "lime" | "pill" | "pill-dark";
  className?: string;
};

export function Kicker({ children, tone = "muted", className }: KickerProps) {
  if (tone === "pill" || tone === "pill-dark") {
    return (
      <div
        className={cn(
          "inline-flex items-center gap-2 rounded-full border px-3 py-1.5 font-mono text-[11px] font-medium uppercase tracking-widest",
          tone === "pill"
            ? "border-outline-variant bg-surface-container-low text-primary"
            : "border-tertiary-fixed/30 bg-tertiary-fixed/12 text-tertiary-fixed",
          className
        )}
      >
        <span className="h-1.5 w-1.5 rounded-full bg-tertiary-fixed-dim" />
        {children}
      </div>
    );
  }

  return (
    <div
      className={cn(
        "font-mono text-[11.5px] font-medium tracking-[0.2em]",
        tone === "lime" ? "text-tertiary-fixed" : "text-outline",
        className
      )}
    >
      {children}
    </div>
  );
}
