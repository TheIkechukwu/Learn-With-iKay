import { Logo } from "@/components/ui/Logo";

export function PageLoader() {
  return (
    <div className="flex flex-col items-center gap-7">
      <div className="relative grid place-items-center">
        <span className="absolute h-16 w-16 animate-loader-ring rounded-2xl border-2 border-tertiary-fixed" />
        <span
          className="absolute h-16 w-16 animate-loader-ring rounded-2xl border-2 border-tertiary-fixed"
          style={{ animationDelay: "0.8s" }}
        />
        <Logo />
      </div>

      <div className="flex flex-col items-center gap-3">
        <span className="font-display text-[14px] font-bold tracking-[-0.01em] text-primary">
          Learn With iKay
        </span>
        <div className="flex items-center gap-1.5">
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className="h-1.5 w-1.5 rounded-full bg-primary-container animate-loader-dot"
              style={{ animationDelay: `${i * 0.15}s` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}