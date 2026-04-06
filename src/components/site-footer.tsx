import Link from "next/link";
import { navItems, socialLinks } from "@/lib/site-data";

export function SiteFooter({ currentPath }: { currentPath: string }) {
  return (
    <footer className="mt-20 border-t border-white/5 bg-[#091328]">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 py-12 sm:px-8 md:flex-row md:flex-wrap md:items-center md:justify-between lg:px-10">
        <div className="font-display text-lg font-bold tracking-tight text-primary">
          <Link href="/" className="transition-colors hover:text-white">
            Eswar.
          </Link>
        </div>

        <nav className="flex flex-wrap justify-center gap-6 text-sm text-muted md:gap-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={
                currentPath === item.href
                  ? "text-white"
                  : "transition-colors hover:text-white"
              }
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <p className="text-xs text-muted/70">© 2024 Eswar. Built with rigor.</p>

        <div className="flex items-center gap-5 text-muted">
          {socialLinks.slice(0, 2).map((link) => (
            <Link key={link.label} href={link.href} aria-label={link.label} className="transition-colors hover:text-primary">
              {link.label === "LinkedIn" ? (
                <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 fill-current">
                  <path d="M6.94 8.5H3.56V20h3.38V8.5ZM5.25 3A2.02 2.02 0 0 0 3.2 5.02c0 1.1.9 2 2.02 2 1.13 0 2.03-.9 2.03-2A2.02 2.02 0 0 0 5.25 3ZM20.8 12.9c0-3.04-1.62-4.45-3.79-4.45-1.75 0-2.53.96-2.97 1.64V8.5h-3.38c.04 1.06 0 11.5 0 11.5h3.38v-6.42c0-.34.02-.68.13-.92.27-.68.87-1.38 1.88-1.38 1.33 0 1.86 1.02 1.86 2.5V20H21c0 0 .04-6.17.04-7.1Z" />
                </svg>
              ) : (
                <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 fill-current">
                  <path d="M12 2C6.48 2 2 6.58 2 12.24c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.49 0-.24-.01-1.04-.01-1.88-2.78.62-3.37-1.2-3.37-1.2-.46-1.2-1.12-1.51-1.12-1.51-.91-.64.07-.63.07-.63 1 .08 1.53 1.06 1.53 1.06.9 1.57 2.35 1.12 2.92.86.09-.67.35-1.12.63-1.38-2.22-.26-4.55-1.14-4.55-5.09 0-1.12.39-2.04 1.03-2.76-.1-.26-.45-1.31.1-2.72 0 0 .84-.27 2.75 1.05A9.3 9.3 0 0 1 12 6.84c.85 0 1.7.12 2.5.36 1.9-1.32 2.74-1.05 2.74-1.05.55 1.4.2 2.46.1 2.72.64.72 1.03 1.64 1.03 2.76 0 3.96-2.34 4.82-4.57 5.08.36.31.68.92.68 1.86 0 1.34-.01 2.42-.01 2.75 0 .27.18.59.69.49A10.25 10.25 0 0 0 22 12.24C22 6.58 17.52 2 12 2Z" />
                </svg>
              )}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
