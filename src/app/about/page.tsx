import Image from "next/image";
import { PageShell } from "@/components/page-shell";

function LayersIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className}>
      <path d="M12 3 3 8l9 5 9-5-9-5Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      <path d="m5 12 7 4 7-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="m5 16 7 4 7-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function DnsIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className}>
      <rect x="4" y="5" width="16" height="5" rx="2" stroke="currentColor" strokeWidth="1.8" />
      <rect x="4" y="14" width="16" height="5" rx="2" stroke="currentColor" strokeWidth="1.8" />
      <path d="M8 7.5h.01M8 16.5h.01" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
      <path d="M12 7.5h4M12 16.5h4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function DatabaseIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className}>
      <ellipse cx="12" cy="6.5" rx="7" ry="3.5" stroke="currentColor" strokeWidth="1.8" />
      <path d="M5 6.5v5c0 1.93 3.13 3.5 7 3.5s7-1.57 7-3.5v-5" stroke="currentColor" strokeWidth="1.8" />
      <path d="M5 11.5v6c0 1.93 3.13 3.5 7 3.5s7-1.57 7-3.5v-6" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}

function ArchitectureIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className}>
      <path d="M4 18h16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M6 18v-7l6-4 6 4v7" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      <path d="M9 18v-4h6v4" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      <path d="M12 4v3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

const toolkitCards = [
  {
    title: "Frontend Engineering",
    description:
      "Crafting high-end, responsive interfaces with React, Next.js, and Tailwind CSS. Obsessed with micro-interactions and performance optimization.",
    accent: "text-primary",
    labelClass: "bg-surface-high text-primary",
    tags: ["React", "TypeScript", "Tailwind"],
    icon: LayersIcon,
    layout: "feature" as const,
  },
  {
    title: "Backend & DevOps",
    description: "Scalable architectures with Node.js, GraphQL, and AWS.",
    accent: "text-secondary",
    icon: DnsIcon,
    meta: ["Node.js", "Docker", "PostgreSQL"],
    layout: "wide" as const,
  },
  {
    title: "Data Science",
    description: "MongoDB & Python integration.",
    accent: "text-tertiary",
    icon: DatabaseIcon,
    layout: "compact" as const,
  },
  {
    title: "UI Architecture",
    description: "Figma to code workflows.",
    accent: "text-primary-dim",
    icon: ArchitectureIcon,
    layout: "compact" as const,
  },
];

const timeline = [
  {
    period: "2025 - Present",
    title: "Freelancer",
    role: "Independent Professional",
    description:
      "Currently operating as a freelance React.js developer, focusing on building high-performance, scalable web applications for diverse clients. I specialize in the MERN stack, delivering custom solutions that prioritize user experience and technical excellence.",
    dotClass: "bg-primary",
    textClass: "text-primary",
    shadow: "shadow-[0_0_15px_rgba(163,166,255,0.4)]",
  },
  {
    period: "2024 - 2025",
    title: "React.js Developer",
    role: "Rio Business Solution Pvt Ltd",
    description:
      "Developed and maintained the official company website using React.js and Node.js. I focused on building reusable UI components to accelerate development speed and maintain visual consistency across the platform. My work involved integrating REST APIs for dynamic content and optimizing every page for peak performance and mobile responsiveness.",
    dotClass: "bg-secondary",
    textClass: "text-secondary",
    shadow: "",
  },
  {
    period: "2023 - 2024",
    title: "Freelancer React.js Developer",
    role: "Independent Professional",
    description:
      "Built a variety of responsive websites for clients using React.js and modern CSS frameworks. I implemented complex API integrations, developed dynamic UI features, and focused on resolving critical UI bugs to significantly improve the user experience across all devices.",
    dotClass: "bg-tertiary",
    textClass: "text-tertiary",
    shadow: "",
  },
];

export default function AboutPage() {
  return (
    <PageShell currentPath="/about">
      <section className="mb-32 grid gap-12 overflow-x-clip pb-8 pt-6 lg:grid-cols-12 lg:items-start">
        <div className="relative lg:col-span-5">
          <div className="relative aspect-square overflow-hidden rounded-3xl bg-surface-low shadow-[0_24px_56px_rgba(99,102,241,0.12)]">
            <Image
              src="/boy.jpg"
              alt="Profile portrait"
              fill
              className="object-cover grayscale transition duration-700 hover:grayscale-0"
            />
          </div>
          <div className="pointer-events-none absolute -bottom-4 right-0 h-24 w-24 rounded-3xl bg-primary/10 blur-2xl sm:-bottom-6 sm:-right-6 sm:h-32 sm:w-32" />
        </div>

        <div className="min-w-0 lg:col-span-7 lg:pl-12">
          <span className="mb-4 block text-xs font-bold uppercase tracking-[0.3em] text-primary">
            About Me
          </span>
          <h1 className="mb-8 font-display text-5xl font-extrabold leading-[1.1] tracking-[-0.05em] text-white sm:text-6xl">
            Bridging the gap between <span className="text-primary-dim">form</span> and{" "}
            <span className="text-secondary">function</span>.
          </h1>
          <div className="space-y-6 text-lg leading-8 text-muted">
            <p>
              I am a React and MERN stack specialist with a proven track record of
              architecting robust corporate solutions and delivering high-impact freelance
              projects. My approach combines technical rigor with a deep understanding of
              user-centric design principles.
            </p>
            <p>
              Having transitioned from a corporate development background at Rio Business
              Solutions to a versatile freelance career, I now help diverse clients build
              scalable, high-performance digital products that stand the test of time.
            </p>
          </div>
        </div>
      </section>

      <section className="relative mb-32 overflow-hidden rounded-[2rem] bg-surface-low px-6 py-20 sm:px-8 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16">
            <h2 className="font-display text-4xl font-bold text-white">The Toolkit</h2>
            <div className="mt-4 h-1 w-20 bg-primary" />
          </div>

          <div className="grid gap-4 md:grid-cols-4">
            {toolkitCards.map((card) => {
              const Icon = card.icon;

              if (card.layout === "feature") {
                return (
                  <div
                    key={card.title}
                    className="group flex flex-col justify-between rounded-3xl bg-surface-card p-8 transition-all duration-300 hover:bg-surface-highest md:col-span-2 md:row-span-2"
                  >
                    <div>
                      <Icon className={`mb-6 h-10 w-10 ${card.accent}`} />
                      <h3 className="font-display text-2xl font-bold text-white">{card.title}</h3>
                      <p className="mt-4 text-sm leading-7 text-muted">{card.description}</p>
                    </div>
                    <div className="mt-8 flex flex-wrap gap-2">
                      {card.tags?.map((tag) => (
                        <span key={tag} className={`rounded-full px-3 py-1 text-xs font-bold ${card.labelClass}`}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                );
              }

              if (card.layout === "wide") {
                return (
                  <div
                    key={card.title}
                    className="group rounded-3xl bg-surface-card p-8 transition-all duration-300 hover:bg-surface-highest md:col-span-2"
                  >
                    <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
                      <div className="min-w-0">
                        <Icon className={`mb-4 h-8 w-8 ${card.accent}`} />
                        <h3 className="font-display text-xl font-bold text-white">{card.title}</h3>
                        <p className="mt-2 text-sm leading-7 text-muted">{card.description}</p>
                      </div>
                      <div className="flex shrink-0 flex-col gap-1 text-left text-xs font-bold text-secondary sm:text-right">
                        {card.meta?.map((item) => <span key={item}>{item}</span>)}
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <div
                  key={card.title}
                  className="group rounded-3xl bg-surface-card p-8 transition-all duration-300 hover:bg-surface-highest"
                >
                  <Icon className={`mb-4 h-8 w-8 ${card.accent}`} />
                  <h3 className="font-display text-lg font-bold text-white">{card.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-muted">{card.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 pb-10 sm:px-8 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="font-display text-4xl font-bold text-white">Career Trajectory</h2>
          <p className="mt-4 text-muted">A timeline of professional milestones and technical growth.</p>
        </div>

        <div className="relative space-y-16 border-l border-line/100 pl-8">
          {timeline.map((item) => (
            <div key={item.title} className="relative min-w-0">
              <div
                className={`absolute -left-[41px] top-1 h-4 w-4 rounded-full border-4 border-surface ${item.dotClass} ${item.shadow}`}
              />
              <div>
                <span className={`mb-1 block text-xs font-bold uppercase tracking-[0.3em] ${item.textClass}`}>
                  {item.period}
                </span>
                <h3 className="font-display text-2xl font-bold text-white">{item.title}</h3>
                <p className="mb-4 text-sm font-semibold text-muted">{item.role}</p>
                <p className="leading-8 text-muted">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
