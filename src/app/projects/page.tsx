import Link from "next/link";
import { PageShell } from "@/components/page-shell";
import { ProjectCard } from "@/components/project-card";
import { featuredProjects } from "@/lib/site-data";

export default function ProjectsPage() {
  return (
    <PageShell currentPath="/projects">
      <section className="mb-20 space-y-6 pb-0 pt-6">
        <h1 className="bg-gradient-to-r from-primary via-primary-fixed to-secondary bg-clip-text font-display text-5xl font-extrabold tracking-[-0.07em] text-transparent sm:text-7xl">
          Curated Works.
        </h1>
        <p className="max-w-2xl border-l-2 border-primary/20 pl-2 text-lg leading-8 text-muted">
          A selection of digital experiences built at the intersection of aesthetic precision and technical rigor. Each project represents a unique architectural challenge.
        </p>
      </section>

      <div className="mb-12 flex flex-wrap gap-3">
        {["All Projects"].map((filter, index) => (
          <button
            key={filter}
            className={
              index === 0
                ? "rounded-full bg-primary px-6 py-2 text-sm font-semibold text-[#0f00a4] transition-all"
                : "rounded-full bg-surface-high px-6 py-2 text-sm font-medium text-muted transition-all hover:text-primary"
            }
          >
            {filter}
          </button>
        ))}
      </div>

      <section className="grid gap-8 md:grid-cols-12">
        {featuredProjects.map((project, index) => (
          <ProjectCard key={project.slug} project={project} featured={index === 0} />
        ))}
      </section>

      <section className="mt-32 rounded-xl border border-white/[0.03] bg-surface-low px-6 py-12 text-center sm:px-10">
        <h2 className="font-display text-3xl font-bold text-white">Have a vision in mind?</h2>
        <p className="mx-auto mt-4 max-w-lg text-sm leading-7 text-muted">
          I&apos;m currently accepting new projects for Q3 2024. Let&apos;s discuss how we can build your digital architecture.
        </p>
        <Link href="/contact" className="mt-8 inline-flex rounded-md bg-tertiary px-10 py-4 text-sm font-bold !text-[#3b002b] transition hover:opacity-90">
          Start a Conversation
        </Link>
      </section>
    </PageShell>
  );
}
