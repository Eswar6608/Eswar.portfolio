import { PageShell } from "@/components/page-shell";
import { ContactForm } from "./contact-form";
import { socialLinks } from "@/lib/site-data";

export default function ContactPage() {
  return (
    <PageShell currentPath="/contact">
      <section className="space-y-6 pb-10 pt-6">
        <h1 className="font-display text-5xl font-extrabold leading-[1.05] tracking-[-0.05em] text-white sm:text-7xl">
          Let&apos;s build <span className="text-primary">something</span>
          <br />
          extraordinary together.
        </h1>
        <p className="max-w-2xl text-lg leading-8 text-muted">
          Currently looking for new opportunities and challenging projects. Drop a message, and I&apos;ll get back to you within 24 hours.
        </p>
      </section>

      <div className="grid gap-6 lg:grid-cols-12">
        <section className="card p-8 md:p-10 lg:col-span-7">
          <ContactForm />
        </section>

        <aside className="flex flex-col gap-6 lg:col-span-5">
          <div className="rounded-[28px] bg-surface-low p-8 shadow-ambient">
            <h2 className="font-display text-2xl font-bold text-white">Connect Socially</h2>
            <div className="mt-6 grid grid-cols-2 gap-4">
              {socialLinks.map((link) => (
                <a key={link.label} href={link.href} className="rounded-[20px] bg-surface-card px-4 py-5 text-sm font-medium text-muted transition hover:bg-surface-high hover:text-primary">
                  {link.label}
                </a>
              ))}
            </div>
            <a href="#" className="mt-10 flex items-center justify-between rounded-[24px] border border-emerald-500/20 bg-emerald-500/10 p-6 transition hover:bg-emerald-500/20">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.24em] text-emerald-400">Quick Chat</p>
                <p className="mt-2 text-lg font-bold text-white">WhatsApp Me</p>
              </div>
              <span className="text-emerald-400">-&gt;</span>
            </a>
          </div>

          <div className="card p-8">
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

      <section className="relative mt-20 h-72 overflow-hidden rounded-[28px] bg-surface-low">
        <div className="absolute inset-0 bg-[url('https://lh3.googleusercontent.com/aida-public/AB6AXuCddUzEtLd_CiQVx0KG7LosHIKRrXbl4XdFbZ_KplpEjNrbkJaL1DgTWKwhnqjZK__brnYFGMe8JgBOzrdmS_rwjuj9I_Dfiqv7NHW4w2lPVetFM0n1tB7csk1WiL0f7KYH5dz8J4xJfYSk58fEcePgDKHNUN1gWj7DBVeOlmdkWDYX8rkaQeGmN4jfplVONef1fIJ-lV_b-I3dJ9wGDAtJ4Hq5vLzUbLtd4agfbYR3vxQVN6Yhg7OU9oB8-iFZ_PsAJIHYrfi1Hco')] bg-cover bg-center opacity-40 grayscale" />
        <div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent" />
        <div className="absolute bottom-8 left-8 flex items-center gap-3">
          <div className="h-3 w-3 rounded-full bg-primary shadow-[0_0_15px_rgba(163,166,255,0.8)]" />
          <p className="font-display text-xl font-bold text-white">Open for global remote work.</p>
        </div>
      </section>
    </PageShell>
  );
}
