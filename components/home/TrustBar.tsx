const trustItems = ["EXCEL", "SQL", "POWER QUERY", "POWER BI", "PYTHON"];

const avatarColors = ["bg-tertiary-fixed", "bg-primary-fixed-dim", "bg-gold"];

export function TrustBar() {
  return (
    <section className="border-y border-surface-variant bg-surface py-8">
      <div className="mx-auto flex max-w-[1280px] flex-col items-center justify-between gap-8 px-5 md:flex-row md:px-10">
        <div className="flex items-center gap-4">
          <div className="flex -space-x-3">
            {avatarColors.map((c, i) => (
              <div
                key={i}
                className={`h-10 w-10 rounded-full border-2 border-surface ${c}`}
              />
            ))}
          </div>
          <div className="text-[14.5px] text-on-surface-variant">
            <strong className="text-primary">500+</strong> Students Trained
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-3 font-mono text-[12.5px] font-medium uppercase tracking-widest text-outline">
          {trustItems.map((t, i) => (
            <span key={t} className="flex items-center gap-3">
              {i > 0 && <span className="text-surface-variant">•</span>}
              <span>{t}</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
