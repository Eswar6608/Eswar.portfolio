import Link from "next/link";
import { navItems } from "@/lib/site-data";

export function SiteHeader({ currentPath }: { currentPath: string }) {
  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-[rgba(6,14,32,0.6)] backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-4 sm:px-8 lg:px-10">
        <Link
          href="/"
          className="font-display text-xl font-bold tracking-[-0.04em] text-primary"
        >
          Eswar.
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => {
            const active = currentPath === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium tracking-tight transition-colors ${
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

        <Link href="/contact" className="btn-primary hidden sm:inline-flex">
          Hire Me
        </Link>
      </div>
    </header>
  );
}
