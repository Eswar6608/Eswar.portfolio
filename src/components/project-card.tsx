import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/lib/site-data";

export function ProjectCard({ project, featured = false }: { project: Project; featured?: boolean }) {
  const accentClass =
    project.accent === "tertiary"
      ? "text-tertiary"
      : project.accent === "secondary"
        ? "text-secondary"
        : "text-primary";

  const shellClass =
    "group overflow-hidden rounded-xl border border-white/[0.03] bg-surface-card transition-all duration-300 hover:-translate-y-2 hover:bg-surface-highest";

  if (project.layout === "feature") {
    return (
      <article className={`${shellClass} md:col-span-8`}>
        <div className="relative aspect-video w-full overflow-hidden bg-surface-low">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover opacity-80 transition duration-700 group-hover:scale-105"
          />
        </div>
        <div className="space-y-6 bg-surface-card px-5 py-5 sm:px-8 sm:py-6">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
            <div className="min-w-0">
              <p className={`mb-2 block text-[10px] font-bold uppercase tracking-[0.22em] ${accentClass}`}>
                {project.category}
                {project.label ? ` • ${project.label}` : ""}
              </p>
              <h3 className="font-display text-[1.65rem] font-bold leading-tight tracking-[-0.04em] text-white sm:text-[2rem]">
                {project.title}
              </h3>
            </div>
            <div className="flex flex-wrap gap-2 lg:justify-end">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded px-2 py-0.5 text-[10px] font-medium text-muted ring-1 ring-white/6 bg-surface-high"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <p className="max-w-[43rem] text-[15px] leading-8 text-muted">{project.description}</p>
          <div className="flex flex-wrap items-center gap-6">
            <Link
              href={project.href ?? "#"}
              className={`inline-flex items-center gap-2 text-sm font-bold ${accentClass}`}
            >
              Live Demo
              <span aria-hidden="true">↗</span>
            </Link>
            <Link
              href={project.repoHref ?? "#"}
              className="inline-flex items-center gap-2 text-sm text-muted transition hover:text-white"
            >
              GitHub
              <span aria-hidden="true">&lt;/&gt;</span>
            </Link>
          </div>
        </div>
      </article>
    );
  }

  if (project.layout === "square") {
    return (
      <article className={`${shellClass} md:col-span-4`}>
        <div className="relative aspect-square w-full overflow-hidden bg-surface-low">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover opacity-80 transition duration-700 group-hover:scale-105"
          />
        </div>
         <div className="space-y-4 bg-surface-card p-5 sm:p-6">
          <div>
            <p className={`mb-2 block text-[10px] font-bold uppercase tracking-[0.22em] ${accentClass}`}>
              {project.category}
              {project.label ? ` • ${project.label}` : ""}
            </p>
             <h3 className="font-display text-[1.65rem] font-bold leading-tight tracking-[-0.04em] text-white sm:text-[2rem]">
              {project.title}
            </h3>
          </div>
          <p className="text-[13px] leading-7 text-muted">{project.description}</p>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span key={tag} className="rounded px-2 py-0.5 text-[10px] font-medium text-muted ring-1 ring-white/6 bg-surface-high">
                {tag}
              </span>
            ))}
          </div>
          <div className="flex items-center justify-between border-t border-white/5 pt-4">
              <Link href={project.href ?? "#"} className={`text-sm font-bold ${accentClass}`}>
                Demo
              </Link>
              <Link href={project.repoHref ?? "#"} className="text-muted transition hover:text-white">
                <span aria-hidden="true">⌁</span>
              </Link>
          </div>
        </div>
      </article>
    );
  }

  if (project.layout === "split") {
    return (
      <article className={`${shellClass} md:col-span-12`}>
        <div className="flex flex-col md:flex-row">
          <div className="relative h-72 overflow-hidden bg-surface-low md:h-auto md:w-[52%]">
            <Image
              src={project.image}
              alt={project.title}
              width={1200}
              height={900}
              className="relative h-full w-full object-cover opacity-80 transition duration-700 group-hover:scale-105"
            />
          </div>
          <div className="flex flex-1 flex-col justify-center space-y-6 p-5 sm:p-8 md:w-[48%] md:p-12">
            <div>
              <p className={`mb-2 block text-[10px] font-bold uppercase tracking-[0.22em] ${accentClass}`}>
                {project.category}
                {project.label ? ` • ${project.label}` : ""}
              </p>
              <h3 className="font-display text-[1.85rem] font-bold leading-tight tracking-[-0.04em] text-white sm:text-[2.25rem]">
                {project.title}
              </h3>
            </div>
            <p className="text-[15px] leading-8 text-muted">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span key={tag} className="rounded px-3 py-1 text-xs font-medium text-muted ring-1 ring-white/6 bg-surface-high">
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex flex-wrap items-center gap-6">
              <Link
                href={project.href ?? "#"}
                className={`inline-flex items-center gap-2 text-sm font-bold ${accentClass}`}
              >
                Live Demo
                <span aria-hidden="true">↗</span>
              </Link>
              <Link
                href={project.repoHref ?? "#"}
                className="inline-flex items-center gap-2 text-sm text-muted transition hover:text-white"
              >
                GitHub
                <span aria-hidden="true">&lt;/&gt;</span>
              </Link>
            </div>
          </div>
        </div>
      </article>
    );
  }

  return (
    <article
      className={`card group overflow-hidden ${
        featured ? "md:col-span-8" : "md:col-span-6"
      }`}
    >
      <div className={`relative w-full overflow-hidden ${featured ? "aspect-video" : "aspect-[4/3]"}`}>
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover opacity-80 transition duration-700 group-hover:scale-105"
        />
      </div>
      <div className="space-y-5 p-6 sm:p-8">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-primary">
              {project.category} • {project.year}
            </p>
            <h3 className="mt-2 font-display text-2xl font-bold text-white sm:text-3xl">
              {project.title}
            </h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span key={tag} className="pill bg-surface-high text-muted">
                {tag}
              </span>
            ))}
          </div>
        </div>
        <p className="max-w-2xl text-sm leading-7 text-muted sm:text-base">
          {project.description}
        </p>
      </div>
    </article>
  );
}
