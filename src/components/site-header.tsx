"use client";

import Link from "next/link";
import { useState } from "react";
import { navItems } from "@/lib/site-data";

export function SiteHeader({ currentPath }: { currentPath: string }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-[rgba(6,14,32,0.82)] backdrop-blur-xl animate-fade-in">
      <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-[1fr_auto] items-center gap-3 sm:gap-4 lg:flex lg:justify-between">
          <Link
            href="/"
            className="inline-block w-fit font-display text-lg font-bold tracking-[-0.04em] text-primary transition duration-300 hover:scale-[1.03] hover:text-white sm:text-xl"
          >
            Eswar.
          </Link>

          <nav className="hidden items-center gap-5 lg:flex xl:gap-8">
            {navItems.map((item) => {
              const active = currentPath === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-sm font-medium tracking-tight transition duration-200 hover:-translate-y-0.5 ${
                    active
                      ? "border-b-2 border-primary pb-1 text-primary"
                      : "text-muted hover:text-primary"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center justify-self-end gap-2 sm:gap-3">
            <Link href="/contact" className="hidden rounded-xl bg-gradient-to-br from-primary to-primary-dim px-5 py-3 text-sm font-bold text-[#0f00a4] shadow-[0_16px_32px_rgba(96,99,238,0.24)] transition duration-200 hover:-translate-y-0.5 hover:brightness-105 min-[1024px]:inline-flex">
              Hire Me
            </Link>

            <button
              type="button"
              aria-expanded={isMenuOpen}
              aria-controls="mobile-navigation"
              aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-surface-low text-white transition duration-200 hover:bg-surface-high min-[1024px]:hidden"
              onClick={() => setIsMenuOpen((value) => !value)}
            >
              <span className="relative h-4 w-5">
                <span
                  className={`absolute left-0 top-0 h-0.5 w-5 rounded-full bg-current transition duration-300 ${
                    isMenuOpen ? "translate-y-[7px] rotate-45" : ""
                  }`}
                />
                <span
                  className={`absolute left-0 top-[7px] h-0.5 w-5 rounded-full bg-current transition duration-300 ${
                    isMenuOpen ? "opacity-0" : "opacity-100"
                  }`}
                />
                <span
                  className={`absolute left-0 top-[14px] h-0.5 w-5 rounded-full bg-current transition duration-300 ${
                    isMenuOpen ? "-translate-y-[7px] -rotate-45" : ""
                  }`}
                />
              </span>
            </button>
          </div>
        </div>

        <div
          id="mobile-navigation"
          className={`overflow-hidden transition-all duration-300 min-[1024px]:hidden ${
            isMenuOpen ? "max-h-[420px] pt-4 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="rounded-2xl border border-white/8 bg-surface-low p-3 shadow-ambient">
            <nav className="flex flex-col gap-2">
              {navItems.map((item) => {
                const active = currentPath === item.href;

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`rounded-xl px-4 py-3 text-sm font-medium transition duration-200 ${
                      active
                        ? "bg-primary/15 text-primary"
                        : "text-muted hover:bg-surface-card hover:text-white"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}

              <Link href="/contact" onClick={() => setIsMenuOpen(false)} className="btn-primary mt-2 w-full justify-center">
                Hire Me
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
