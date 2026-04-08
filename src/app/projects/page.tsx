import Link from "next/link";
import { PageShell } from "@/components/page-shell";
import { ProjectCard } from "@/components/project-card";
import { featuredProjects } from "@/lib/site-data";

export default function ProjectsPage() {
  return (
    <PageShell currentPath="/projects">
      <section className="mb-16 space-y-5 pb-0 pt-4 sm:pt-6 lg:mb-20">
        <h1 className="animate-fade-up bg-gradient-to-r from-primary via-primary-fixed to-secondary bg-clip-text font-display text-4xl font-extrabold tracking-[-0.07em] text-transparent sm:text-7xl">
          Curated Works.
        </h1>
        <p className="animate-fade-up animation-delay-1 max-w-2xl border-l-2 border-primary/20 pl-3 text-base leading-7 text-muted sm:text-lg sm:leading-8">
          A selection of digital experiences built at the intersection of aesthetic precision and technical rigor. Each project represents a unique architectural challenge.
        </p>
      </section>

      <div className="animate-fade-up animation-delay-2 mb-10 flex flex-wrap gap-3 sm:mb-12">
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

      <section className="grid gap-6 sm:gap-8 md:grid-cols-12">
        {featuredProjects.map((project, index) => (
          <ProjectCard key={project.slug} project={project} featured={index === 0} />
        ))}
      </section>

      <section className="reveal-section mt-20 rounded-xl border border-white/[0.03] bg-surface-low px-5 py-10 text-center sm:mt-32 sm:px-10 sm:py-12">
        <h2 className="font-display text-3xl font-bold text-white">Have a vision in mind?</h2>
        <p className="mx-auto mt-4 max-w-lg text-sm leading-7 text-muted">
          I&apos;m currently accepting new projects for Q3 2024. Let&apos;s discuss how we can build your digital architecture.
        </p>
        <Link href="/contact" className="mt-8 inline-flex rounded-md bg-tertiary px-10 py-4 text-sm font-bold !text-[#3b002b] transition duration-200 hover:-translate-y-0.5 hover:opacity-90">
          Start a Conversation
        </Link>
      </section>
    </PageShell>
  );
}
