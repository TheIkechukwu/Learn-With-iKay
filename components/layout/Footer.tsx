import Link from "next/link";
import { FiLinkedin, FiFacebook, FiInstagram } from "react-icons/fi";
import { SERVICES } from "@/lib/data";
import { Logo } from "@/components/ui/Logo";

const companyLinks = [
  { label: "About Us", href: "/about" },
  // { label: "Portfolio", href: "/portfolio" },
 
  { label: "Success Stories", href: "/#testimonials" },
];

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
];
 

const socials = [
  {
    icon: FiFacebook,
    label: "Facebook",
    href: "https://web.facebook.com/learnwithikay",
  },
  {
    icon: FiLinkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/learn-with-ikay/",
  },
  {
    icon: FiInstagram,
    label: "Instagram",
    href: "https://www.instagram.com/learnwithikay",
  },
];

export function Footer() {
  return (
    <footer className="border-t border-primary-container bg-primary-container-deep text-white">
      <div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-10 px-5 py-16 sm:grid-cols-2 md:px-10 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <Link href="/" className="flex items-center gap-2.5">
            <Logo />
        
          </Link>
          <p className="mt-5 max-w-[300px] text-[14.5px] leading-relaxed text-on-primary-container">
            Academic Precision in Data Science Education.
          </p>
          <div className="mt-6 flex gap-2.5">
            {socials.map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
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
              <a
                key={l.label}
                href={l.href}
                className="text-[14.5px] text-on-primary-container transition-colors hover:text-tertiary-fixed"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>

        <div>
          <div className="font-display text-[15px] font-semibold text-white">Legal</div>
          <div className="mt-4 grid gap-2.5">
             {legalLinks.map((l) => (
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
      </div>

      <div className="mx-auto flex max-w-[1280px] flex-wrap items-center justify-between gap-4 border-t border-primary-container px-5 py-7 font-mono text-[12px] tracking-wide text-on-primary-container md:px-10">
     <div>© {new Date().getFullYear()} Learn With iKay. Academic Precision in Data Science Education.</div>
        <div>hello@learnwithikay.com · +234 816 626 2851</div>
      </div>
    </footer>
  );
}