import { BlogCard } from "@/components/blog-card";
import { PageShell } from "@/components/page-shell";
import { blogPosts } from "@/lib/site-data";

export default function BlogPage() {
  return (
    <PageShell currentPath="/blog">
      <section className="space-y-4 pb-10 pt-4 sm:pb-12 sm:pt-6">
        <h1 className="animate-fade-up font-display text-4xl font-extrabold tracking-[-0.05em] text-white sm:text-6xl">
          The Lab <span className="text-primary">Notes.</span>
        </h1>
        <p className="animate-fade-up animation-delay-1 max-w-2xl text-base leading-7 text-muted sm:text-lg sm:leading-8">
          Reflections on systems design, clean code, and the intersection of human-centered engineering and aesthetic precision.
        </p>
      </section>

      <section className="animate-fade-up animation-delay-2 mb-12 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div className="flex w-full flex-wrap gap-2 rounded-[1.5rem] bg-surface-low p-1.5 md:w-fit md:flex-nowrap md:rounded-full">
            {['All', 'Tech', 'Reviews', 'Guides'].map((filter, index) => (
              <button
                key={filter}
               className={index === 0 ? 'flex-1 rounded-full bg-primary px-5 py-2 text-sm font-semibold text-on-primary transition duration-200 hover:-translate-y-0.5 md:flex-none md:px-6' : 'flex-1 rounded-full px-5 py-2 text-sm font-medium text-muted transition duration-200 hover:-translate-y-0.5 hover:bg-surface-high md:flex-none md:px-6'}
             >
                {filter}
              </button>
          ))}
        </div>
        <div className="w-full md:w-80">
          <input
            className="w-full rounded-xl bg-surface-low px-4 py-3 text-white outline-none ring-0 placeholder:text-muted"
            placeholder="Search articles..."
            type="text"
          />
        </div>
      </section>

      <section className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((post, index) => (
          <div key={post.slug} className={`reveal-card ${index % 3 === 0 ? "stagger-1" : index % 3 === 1 ? "stagger-2" : "stagger-3"}`}>
            <BlogCard post={post} />
          </div>
        ))}
      </section>

      <div className="reveal-soft mt-16 flex items-center justify-center gap-3 sm:mt-20">
        {[1, 2, 3].map((page) => (
          <button
            key={page}
            className={page === 1 ? 'flex h-12 w-12 items-center justify-center rounded-full bg-primary font-bold text-on-primary transition duration-200 hover:-translate-y-0.5' : 'flex h-12 w-12 items-center justify-center rounded-full text-muted transition duration-200 hover:-translate-y-0.5 hover:bg-surface-card'}
          >
            {page}
          </button>
        ))}
      </div>
    </PageShell>
  );
}
