import type { Metadata } from "next";
import { PageShell } from "@/components/page-shell";
import { ContactForm } from "./contact-form";
import { socialLinks } from "@/lib/site-data";

const whatsappHref = "https://wa.me/919344626608";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Eswaran A for freelance projects, React development, MERN stack work, and collaboration opportunities.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact | Eswaran A",
    description:
      "Get in touch with Eswaran A for freelance projects, React development, and full-stack collaboration.",
    url: "/contact",
  },
  twitter: {
    title: "Contact | Eswaran A",
    description:
      "Get in touch with Eswaran A for freelance projects and collaboration.",
  },
};

export default function ContactPage() {
  return (
    <PageShell currentPath="/contact">
      <section className="space-y-6 pb-10 pt-4 sm:pt-6">
        <h1 className="animate-fade-up font-display text-4xl font-extrabold leading-[1.05] tracking-[-0.05em] text-white sm:text-7xl">
          Let&apos;s build <span className="text-primary">something</span>
          <br />
          extraordinary together.
        </h1>
        <p className="animate-fade-up animation-delay-1 max-w-2xl text-base leading-7 text-muted sm:text-lg sm:leading-8">
          Currently looking for new opportunities and challenging projects. Drop a message, and I&apos;ll get back to you within 24 hours.
        </p>
      </section>

      <div className="grid gap-6 lg:grid-cols-12">
        <section className="reveal-card card p-6 sm:p-8 md:p-10 lg:col-span-7">
          <ContactForm />
        </section>

        <aside className="flex flex-col gap-6 lg:col-span-5">
          <div className="reveal-card rounded-[28px] bg-surface-low p-6 shadow-ambient sm:p-8">
            <h2 className="font-display text-2xl font-bold text-white">Connect Socially</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {socialLinks.map((link) => (
                <a key={link.label} href={link.href} className="rounded-[20px] bg-surface-card px-4 py-4 text-sm font-medium text-muted transition duration-200 hover:-translate-y-1 hover:bg-surface-high hover:text-primary sm:py-5">
                  {link.label}
                </a>
              ))}
            </div>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noreferrer"
              aria-label="Open WhatsApp chat"
              className="mt-10 flex items-center justify-between gap-4 rounded-[24px] border border-emerald-500/20 bg-emerald-500/10 p-5 transition duration-200 hover:-translate-y-1 hover:bg-emerald-500/20 sm:p-6"
            >
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.24em] text-emerald-400">Quick Chat</p>
                <p className="mt-2 text-lg font-bold text-white">WhatsApp Me</p>
              </div>
              <span className="text-emerald-400">-&gt;</span>
            </a>
          </div>

          <div className="reveal-card stagger-2 card p-6 sm:p-8">
            <div className="space-y-6">
              <div>
                <p className="text-sm text-muted">Email</p>
                <p className="mt-1 text-lg font-semibold text-white">eswarana518@gmail.com</p>
              </div>
              <div>
                <p className="text-sm text-muted">Base</p>
                <p className="mt-1 text-lg font-semibold text-white">Tamilnadu, India</p>
              </div>
            </div>
          </div>
        </aside>
      </div>

      <section className="reveal-section relative mt-16 h-64 overflow-hidden rounded-[28px] bg-surface-low sm:mt-20 sm:h-72">
        <div className="absolute inset-0 bg-[url('https://lh3.googleusercontent.com/aida-public/AB6AXuCddUzEtLd_CiQVx0KG7LosHIKRrXbl4XdFbZ_KplpEjNrbkJaL1DgTWKwhnqjZK__brnYFGMe8JgBOzrdmS_rwjuj9I_Dfiqv7NHW4w2lPVetFM0n1tB7csk1WiL0f7KYH5dz8J4xJfYSk58fEcePgDKHNUN1gWj7DBVeOlmdkWDYX8rkaQeGmN4jfplVONef1fIJ-lV_b-I3dJ9wGDAtJ4Hq5vLzUbLtd4agfbYR3vxQVN6Yhg7OU9oB8-iFZ_PsAJIHYrfi1Hco')] bg-cover bg-center opacity-40 grayscale transition duration-700 hover:scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent" />
        <div className="absolute bottom-6 left-5 right-5 flex items-center gap-3 reveal-soft sm:bottom-8 sm:left-8 sm:right-auto">
          <div className="h-3 w-3 rounded-full bg-primary shadow-[0_0_15px_rgba(163,166,255,0.8)]" />
          <p className="font-display text-lg font-bold text-white sm:text-xl">Open for global remote work.</p>
        </div>
      </section>
    </PageShell>
  );
}
