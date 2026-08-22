import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "lime" | "outline" | "outline-dark" | "dark" | "surface";
  className?: string;
};

export function Button({ href, children, variant = "lime", className }: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-8 py-3.5 font-display text-[15.5px] font-bold transition-all duration-200 whitespace-nowrap active:scale-[0.98]";

  const variants: Record<string, string> = {
    lime: "bg-tertiary-fixed text-primary shadow-sm hover:bg-tertiary-fixed-dim hover:-translate-y-0.5",
    outline: "border border-white/34 text-white hover:bg-white/10 hover:border-white/60",
    "outline-dark": "border border-primary/30 text-primary hover:bg-primary/5",
    dark: "bg-primary text-on-primary hover:opacity-90 hover:-translate-y-0.5",
    surface:
      "bg-surface-container text-primary border border-primary/15 hover:bg-surface-container-low",
  };

  return (
    <Link href={href} className={cn(base, variants[variant], className)}>
      {children}
    </Link>
  );
}
