import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageShell } from "@/components/page-shell";
import { blogPosts, featuredProjects } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "MERN Stack Developer Portfolio",
  description:
    "Explore the portfolio of Eswaran A, a MERN stack and React developer building responsive web applications, polished interfaces, and scalable full-stack products.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Eswaran A | MERN Stack Developer Portfolio",
    description:
      "Explore selected projects, engineering writing, and contact details for Eswaran A, a MERN stack and React developer from India.",
    url: "/",
  },
  twitter: {
    title: "Eswaran A | MERN Stack Developer Portfolio",
    description:
      "Selected projects, engineering writing, and full-stack development work by Eswaran A.",
  },
};

export default function HomePage() {
  const highlightedProjects = featuredProjects.slice(0, 2);
  const highlightedPosts = blogPosts.slice(0, 3);

  return (
    <PageShell currentPath="/">
      <section className="grid items-center gap-10 overflow-x-clip pb-20 pt-4 sm:gap-12 sm:pt-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:pb-32">
        <div className="space-y-8">
          <span className="pill animate-fade-up bg-surface-high text-primary">
            Available for Projects
          </span>
          <h1 className="animate-fade-up animation-delay-1 max-w-4xl text-balance font-display text-4xl font-extrabold leading-[1.02] tracking-[-0.05em] text-white sm:text-6xl lg:text-7xl">
            Eswar. <br />
            Crafting Digital Architecture.
          </h1>
          <p className="animate-fade-up animation-delay-2 max-w-xl text-base leading-7 text-muted sm:text-lg sm:leading-8">
            Junior full-stack engineer specializing in high-performance web systems
            and editorial-grade user experiences. Translating complex requirements
            into elegant code.
          </p>
          <div className="animate-fade-up animation-delay-3 flex flex-col gap-3 sm:flex-row sm:gap-4">
            <Link href="/projects" className="btn-primary">
              View Projects
            </Link>
            <Link href="/blog" className="btn-secondary">
              Read Blog
            </Link>
          </div>
        </div>

        <div className="animate-fade-in animation-delay-2 relative mx-auto w-full max-w-[32rem] lg:max-w-none">
          <div className="animate-float-orb absolute -right-8 -top-8 h-40 w-40 rounded-full bg-primary/10 blur-[90px] sm:h-72 sm:w-72 sm:blur-[120px]" />
          <div className="relative rounded-[28px] bg-surface-low p-4 shadow-ambient transition duration-700 hover:-translate-y-1 lg:rotate-3 lg:hover:rotate-0 lg:hover:scale-[1.01]">
            <div className="relative h-[320px] overflow-hidden rounded-[22px] sm:h-[420px] lg:h-[520px]">
              <Image
                src="/boy.jpg"
                alt="Portrait of the Digital Architect"
                fill
                className="object-cover grayscale transition duration-500 hover:grayscale-0"
              />
            </div>
            <div className="absolute bottom-4 left-4 right-4 rounded-[24px] border border-white/5 bg-surface-card/95 p-4 shadow-ambient backdrop-blur sm:-bottom-5 sm:left-auto sm:right-6 sm:w-auto sm:p-6">
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary/20 text-primary sm:h-12 sm:w-12">
                  2+
                </div>
                <div>
                  <p className="font-display text-lg font-bold text-white sm:text-xl">
                    2+ Years
                  </p>
                  <p className="text-sm text-muted">Software Developer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-panel reveal-section space-y-8 sm:space-y-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="font-display text-4xl font-bold tracking-tight text-white">
              Featured Projects
            </h2>
            <div className="mt-4 h-1 w-20 rounded-full bg-primary" />
          </div>
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm font-bold text-primary transition hover:gap-3"
          >
            All Projects
            <span aria-hidden="true">-&gt;</span>
          </Link>
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          {highlightedProjects.map((project) => (
            <article
              key={project.slug}
              className="group overflow-hidden rounded-[28px] border border-white/5 bg-surface-card transition duration-300 hover:-translate-y-2 hover:bg-surface-high"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-105"
                />
              </div>
              <div className="space-y-5 p-6 sm:p-8">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md border border-primary/25 px-2 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-primary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="space-y-3">
                  <h3 className="font-display text-2xl font-bold text-white sm:text-[2rem]">
                    {project.title}
                  </h3>
                  <p className="text-sm leading-7 text-muted">{project.description}</p>
                </div>
                <Link
                  href="/projects"
                  className="inline-flex items-center gap-2 text-sm font-bold text-white transition hover:text-primary"
                >
                  Case Study
                  <span aria-hidden="true">↗</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="reveal-section grid gap-10 py-20 lg:grid-cols-[0.36fr_0.64fr] lg:gap-16 lg:py-32">
        <div className="space-y-6">
          <h2 className="font-display text-4xl font-extrabold tracking-tight text-white">
            Engineering Journal
          </h2>
          <p className="max-w-md text-base leading-8 text-muted">
            Thoughts on systems architecture, UX patterns, and the future of web
            development.
          </p>
          <Link
            href="/blog"
            className="inline-flex border-b border-primary pb-1 text-sm font-bold text-primary"
          >
            Visit the Blog
          </Link>
        </div>
        <div className="space-y-10">
          {highlightedPosts.map((post, index) => (
            <article key={post.slug} className="group flex flex-col gap-3 sm:flex-row sm:gap-8">
              <div className="pt-1 font-display text-lg font-bold text-primary/40 transition group-hover:text-primary">
                {String(index + 1).padStart(2, "0")}
              </div>
              <div className="space-y-3">
                <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-muted">
                  {post.date} • {post.readTime}
                </p>
                <Link
                  href="/blog"
                  className="block font-display text-2xl font-bold leading-tight text-white transition hover:text-primary sm:text-[2rem]"
                >
                  {post.title}
                </Link>
                <p className="max-w-3xl text-sm leading-7 text-muted sm:text-base">
                  {post.excerpt}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="cta-panel reveal-section mb-8 rounded-[32px] px-5 py-14 sm:px-10 sm:py-20 lg:px-16 lg:py-24">
        <div className="relative z-10 mx-auto max-w-3xl text-center">
          <h2 className="font-display text-4xl font-extrabold tracking-[-0.04em] text-white sm:text-6xl">
            Want to work
            <br />
            with me?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-muted">
            Currently taking on select projects for the next cycle. Let&apos;s build
            something exceptional.
          </p>
          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <Link href="/contact" className="btn-primary px-10 py-4 text-lg">
              Start a Project
            </Link>
            <Link href="/contact" className="rounded-xl bg-tertiary px-10 py-4 text-lg font-bold !text-[#3b002b] transition duration-200 hover:-translate-y-0.5 hover:brightness-110">
              Schedule a Call
            </Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
