"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { FiChevronDown, FiMenu, FiX, FiArrowRight } from "react-icons/fi";
import { NAV_ITEMS, SERVICES } from "@/lib/data";
import { cn } from "@/lib/utils";
import { Logo } from "@/components/ui/Logo";

export function Header() {
  const pathname = usePathname();
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  return (
    <header className="sticky top-0 z-[60] border-b border-surface-variant bg-surface/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-[1280px] flex-wrap items-center gap-x-8 gap-y-4 px-4 py-4 md:px-10">
        <Link href="/" className="flex flex-shrink-0 items-center gap-2.5">
          <Logo />
       
        </Link>

        <nav className="ml-auto hidden items-center gap-1 lg:flex">
          {NAV_ITEMS.map((item) => {
            if (item.label === "Services") {
              return (
                <div
                  key="Services"
                  className="relative"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <Link
                    href="/services"
                    className={cn(
                      "flex items-center gap-1.5 rounded-full px-3.5 py-2.5 font-display text-[15px] font-medium transition-colors",
                      pathname.startsWith("/services")
                        ? "border-b-2 border-primary text-primary"
                        : "text-on-surface-variant hover:text-primary"
                    )}
                  >
                    Services
                    <FiChevronDown className="text-[11px] opacity-60" />
                  </Link>

                  <AnimatePresence>
                    {servicesOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.18 }}
                        className="bg-white absolute left-1/2 top-full z-50 w-[680px] -translate-x-1/2 p-3"
                      >
                        <div className="grid grid-cols-3 gap-1">
                          {SERVICES.map((s) => (
                            <Link
                              key={s.id}
                              href={`/services/${s.id}`}
                              className="flex items-start gap-3.5 rounded-xl p-4 hover:bg-surface-container-low"
                            >
                              <div>
                                <div className="font-display text-[15px] font-semibold text-primary">
                                  {s.name}
                                </div>
                                <div className="mt-1 text-[13px] leading-relaxed text-on-surface-variant">
                                  {s.kicker}
                                </div>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            }

            const isActive = pathname === item.href;
            return (
              <Link
                key={item.label}
                href={item.href}
                className={cn(
                  "rounded-full px-3.5 py-2.5 font-display text-[15px] font-medium text-on-surface-variant transition-colors hover:text-primary",
                  isActive && "border-b-2 border-primary text-primary"
                )}
              >
                {item.label}
              </Link>
            );
          })}

          <Link
            href="/enroll"
            className="ml-3 flex items-center gap-2 rounded-full bg-tertiary-fixed px-6 py-2.75 font-display text-[15px] font-bold text-primary shadow-sm transition-all hover:-translate-y-0.5 hover:bg-tertiary-fixed-dim"
          >
            Enroll Now
            <FiArrowRight size={15} />
          </Link>
        </nav>

        <button
          aria-label="Toggle menu"
          className="ml-auto flex h-10 w-10 items-center justify-center rounded-full text-primary lg:hidden"
          onClick={() => setMobileOpen((v) => !v)}
        >
          {mobileOpen ? <FiX size={22} /> : <FiMenu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-t border-surface-variant bg-surface-container-lowest lg:hidden"
          >
            <div className="flex flex-col gap-1 px-5 py-5">
              {NAV_ITEMS.map((item) => {
                if (item.label === "Services") {
                  return (
                    <div key="Services">
                      <button
                        type="button"
                        onClick={() => setMobileServicesOpen((v) => !v)}
                        className="flex w-full items-center justify-between rounded-xl px-3 py-3 font-display text-[15px] font-medium text-primary hover:bg-surface-container-low"
                      >
                        Services
                        <FiChevronDown
                          className={cn(
                            "text-[13px] transition-transform",
                            mobileServicesOpen && "rotate-180"
                          )}
                        />
                      </button>

                      <AnimatePresence>
                        {mobileServicesOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden pl-3"
                          >
                            <div className="flex flex-col gap-1 border-l border-surface-variant py-1 pl-3">
                              {SERVICES.map((s) => (
                                <Link
                                  key={s.id}
                                  href={`/services/${s.id}`}
                                  onClick={() => setMobileOpen(false)}
                                  className="rounded-lg px-3 py-2.5 font-display text-[14px] font-medium text-on-surface-variant hover:bg-surface-container-low hover:text-primary"
                                >
                                  {s.name}
                                </Link>
                              ))}
                              <Link
                                href="/services"
                                onClick={() => setMobileOpen(false)}
                                className="rounded-lg px-3 py-2.5 font-display text-[14px] font-semibold text-primary hover:bg-surface-container-low"
                              >
                                View all services
                              </Link>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }

                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="rounded-xl px-3 py-3 font-display text-[15px] font-medium text-primary hover:bg-surface-container-low"
                  >
                    {item.label}
                  </Link>
                );
              })}
              <Link
                href="/enroll"
                onClick={() => setMobileOpen(false)}
                className="mt-2 rounded-full bg-tertiary-fixed px-6 py-3 text-center font-display text-[15px] font-bold text-primary"
              >
                Enroll Now
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}