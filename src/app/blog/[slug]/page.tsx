import Image from "next/image";
import { notFound } from "next/navigation";
import { PageShell } from "@/components/page-shell";
import { blogPosts } from "@/lib/site-data";

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <PageShell currentPath="/blog">
      <div className="grid gap-12 pt-6 lg:grid-cols-12">
        <article className="lg:col-span-8">
          <header className="mb-12 space-y-6">
            <div className="flex flex-wrap items-center gap-3">
              <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.24em] text-primary">
                {post.category}
              </span>
              <span className="text-sm text-muted">{post.date}</span>
            </div>
            <h1 className="font-display text-4xl font-extrabold leading-[1.08] tracking-[-0.05em] text-white sm:text-5xl lg:text-6xl">
              {post.title}
            </h1>
            <div className="flex items-center gap-4">
              <div className="relative h-12 w-12 overflow-hidden rounded-full bg-surface-card">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCpk3dg3q_wvVqx38vrlB31i3TUXjcSr9bltbZAiNytMQCR5FqXURlhR-jEm7wklWGz03Fo0-uopGLetXp235PV_Ke-x4cSMpdwNLIopJxxL7gSu8BdH-E6r95xH6F5EroZ0XAQayarb9Cp2KvezjOLrOxnj-N7U5jt9i4sl6QUUJMYSaboZKhDzlWdUEFbSbBRyKHr9-9u88sA-xWVURpVVqIPbvj7RrSZ0-Fbc-S3Kzsl3AXPZZgRXwrWtS87HIIpXt5Nfi9Uz0s"
                  alt="Author portrait"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <p className="font-bold text-white">Alex Thorne</p>
                <p className="text-sm text-muted">Senior Cloud Architect</p>
              </div>
            </div>
          </header>

          <div className="relative mb-12 aspect-[2/1] overflow-hidden rounded-[28px] shadow-ambient">
            <Image src={post.image} alt={post.title} fill className="object-cover" />
          </div>

          <div className="space-y-8 text-lg leading-8 text-muted">
            <p className="first-letter:mr-3 first-letter:float-left first-letter:font-display first-letter:text-5xl first-letter:font-bold first-letter:text-primary">
              Architecture is not just about writing code; it is about building systems that endure. The choices we make now define the scalability of the experiences we ship later.
            </p>
            <h2 className="font-display text-3xl font-bold text-white">The Core Principles of Scaling</h2>
            <p>
              When evaluating infrastructure, teams often focus on latency and throughput, but time to market and resilience are equally important. Strong foundations let teams focus on product value.
            </p>
            <div className="rounded-[28px] bg-surface-low p-8">
              <h3 className="font-display text-2xl font-bold text-white">
                The Architect&apos;s Choice: Pro-Series Wireless Keyboard
              </h3>
              <p className="mt-4 text-sm leading-7 text-muted">
                Optimized for rapid development with haptic feedback and custom macro support. The essential tool for long coding sessions.
              </p>
              <button className="mt-6 rounded-xl bg-tertiary px-8 py-3 font-bold text-[#3b002b]">
                Buy on Amazon
              </button>
            </div>
            <div className="overflow-hidden rounded-[28px] bg-surface-card">
              <table className="w-full text-left text-sm">
                <thead className="bg-surface-high text-primary">
                  <tr>
                    <th className="px-6 py-5">Feature</th>
                    <th className="px-6 py-5">VectorDB X</th>
                    <th className="px-6 py-5">CloudBase Pro</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-surface"><td className="px-6 py-4 text-white">Latency</td><td className="px-6 py-4">12ms avg</td><td className="px-6 py-4">45ms avg</td></tr>
                  <tr className="bg-surface-low"><td className="px-6 py-4 text-white">Scalability</td><td className="px-6 py-4">Infinite Horizon</td><td className="px-6 py-4">Region-Locked</td></tr>
                  <tr className="bg-surface"><td className="px-6 py-4 text-white">Pricing</td><td className="px-6 py-4 text-tertiary">$0.02/req</td><td className="px-6 py-4 text-tertiary">$499/mo</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </article>

        <aside className="space-y-10 lg:col-span-4">
          <div className="card p-8">
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary">Sponsored Promotion</p>
            <h3 className="mt-4 font-display text-2xl font-bold text-white">Master the Digital Grid</h3>
            <p className="mt-4 text-sm leading-7 text-muted">
              Join 40,000+ developers in a premium architectural masterclass.
            </p>
            <button className="mt-6 w-full rounded-xl bg-primary py-3 font-bold text-on-primary">
              Enroll Now
            </button>
          </div>

          <div>
            <h3 className="mb-6 flex items-center gap-2 font-display text-lg font-bold text-white">
              <span className="h-px w-8 bg-primary" />
              Popular Content
            </h3>
            <div className="space-y-5">
              {blogPosts.slice(1, 4).map((item) => (
                <div key={item.slug} className="flex gap-4">
                  <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-xl">
                    <Image src={item.image} alt={item.title} fill className="object-cover" />
                  </div>
                  <div>
                    <p className="text-sm font-bold leading-6 text-white">{item.title}</p>
                    <p className="mt-1 text-xs text-muted">{item.readTime} • {item.category}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </PageShell>
  );
}
