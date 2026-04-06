import type { ReactNode } from "react";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export function PageShell({
  currentPath,
  children,
}: {
  currentPath: string;
  children: ReactNode;
}) {
  return (
    <>
      <SiteHeader currentPath={currentPath} />
      <main className="mx-auto w-full max-w-7xl flex-1 px-6 py-10 sm:px-8 lg:px-10 lg:py-14">
        {children}
      </main>
      <SiteFooter currentPath={currentPath} />
    </>
  );
}
