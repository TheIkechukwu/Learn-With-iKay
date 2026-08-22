import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto flex max-w-[1280px] flex-col items-center px-5 py-32 text-center md:px-10">
      <div className="font-mono text-[11.5px] tracking-[0.2em] text-outline">404</div>
      <h1 className="mt-4 font-display text-[32px] font-bold tracking-[-0.02em] text-primary md:text-[42px]">
        This page doesn&apos;t exist.
      </h1>
      <p className="mt-4 max-w-[480px] text-[16.5px] leading-relaxed text-on-surface-variant">
        The page you&apos;re looking for may have been moved or never existed.
      </p>
      <Link
        href="/"
        className="mt-8 rounded-full bg-tertiary-fixed px-8 py-4 font-display text-[15.5px] font-bold text-primary transition-all hover:-translate-y-0.5 hover:bg-tertiary-fixed-dim"
      >
        Back to home
      </Link>
    </section>
  );
}
