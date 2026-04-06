import { BlogCard } from "@/components/blog-card";
import { PageShell } from "@/components/page-shell";
import { blogPosts } from "@/lib/site-data";

export default function BlogPage() {
  return (
    <PageShell currentPath="/blog">
      <section className="space-y-4 pb-12 pt-6">
        <h1 className="font-display text-5xl font-extrabold tracking-[-0.05em] text-white sm:text-6xl">
          The Lab <span className="text-primary">Notes.</span>
        </h1>
        <p className="max-w-2xl text-lg leading-8 text-muted">
          Reflections on systems design, clean code, and the intersection of human-centered engineering and aesthetic precision.
        </p>
      </section>

      <section className="mb-12 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div className="flex w-fit gap-2 rounded-full bg-surface-low p-1.5">
          {['All', 'Tech', 'Reviews', 'Guides'].map((filter, index) => (
            <button
              key={filter}
              className={index === 0 ? 'rounded-full bg-primary px-6 py-2 text-sm font-semibold text-on-primary' : 'rounded-full px-6 py-2 text-sm font-medium text-muted hover:bg-surface-high'}
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

      <section className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </section>

      <div className="mt-20 flex items-center justify-center gap-3">
        {[1, 2, 3].map((page) => (
          <button
            key={page}
            className={page === 1 ? 'flex h-12 w-12 items-center justify-center rounded-full bg-primary font-bold text-on-primary' : 'flex h-12 w-12 items-center justify-center rounded-full text-muted hover:bg-surface-card'}
          >
            {page}
          </button>
        ))}
      </div>
    </PageShell>
  );
}
