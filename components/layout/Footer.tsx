import Link from "next/link";
import { FiLinkedin, FiTwitter, FiInstagram, FiYoutube } from "react-icons/fi";
import { SERVICES } from "@/lib/data";
import { Logo } from "@/components/ui/Logo";

const companyLinks = [
  { label: "About Us", href: "/about" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Blog", href: "/blog" },
  { label: "Success Stories", href: "/#testimonials" },
];

const legalLinks = [
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Service", href: "#" },
];

const socials = [
  { icon: FiLinkedin, label: "LinkedIn" },
  { icon: FiTwitter, label: "X" },
  { icon: FiInstagram, label: "Instagram" },
  { icon: FiYoutube, label: "YouTube" },
];

export function Footer() {
  return (
    <footer className="border-t border-primary-container bg-primary-container-deep text-white">
      <div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-10 px-5 py-16 sm:grid-cols-2 md:px-10 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <Link href="/" className="flex items-center gap-2.5">
            <Logo />
            <span className="font-display text-base font-bold tracking-[-0.01em] text-white">
              Learn With iKay
            </span>
          </Link>
          <p className="mt-5 max-w-[300px] text-[14.5px] leading-relaxed text-on-primary-container">
            Academic Precision in Data Science Education.
          </p>
          <div className="mt-6 flex gap-2.5">
            {socials.map(({ icon: Icon, label }) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                className="grid h-9 w-9 place-items-center rounded-full bg-primary-container text-on-primary-container transition-colors hover:bg-tertiary-fixed hover:text-primary"
              >
                <Icon size={15} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <div className="font-display text-[15px] font-semibold text-white">Programs</div>
          <div className="mt-4 grid gap-2.5">
            {SERVICES.map((s) => (
              <Link
                key={s.id}
                href={`/services/${s.id}`}
                className="text-[14.5px] text-on-primary-container transition-colors hover:text-tertiary-fixed"
              >
                {s.name}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <div className="font-display text-[15px] font-semibold text-white">Company</div>
          <div className="mt-4 grid gap-2.5">
            {companyLinks.map((l) => (
              <Link
                key={l.label}
                href={l.href}
                className="text-[14.5px] text-on-primary-container transition-colors hover:text-tertiary-fixed"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <div className="font-display text-[15px] font-semibold text-white">Legal</div>
          <div className="mt-4 grid gap-2.5">
            {legalLinks.map((l) => (
              <span
                key={l.label}
                className="cursor-pointer text-[14.5px] text-on-primary-container transition-colors hover:text-tertiary-fixed"
              >
                {l.label}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto flex max-w-[1280px] flex-wrap items-center justify-between gap-4 border-t border-primary-container px-5 py-7 font-mono text-[12px] tracking-wide text-on-primary-container md:px-10">
        <div>© 2026 Learn With iKay. Academic Precision in Data Science Education.</div>
        <div>hello@learnwithikay.com · +234 801 234 5678</div>
      </div>
    </footer>
  );
}