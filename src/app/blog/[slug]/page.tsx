import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageShell } from "@/components/page-shell";
import { blogPosts } from "@/lib/site-data";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: post.title,
    description: post.excerpt,
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    openGraph: {
      title: `${post.title} | Eswaran A`,
      description: post.excerpt,
      url: `/blog/${post.slug}`,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      images: [
        {
          url: post.image,
          alt: post.title,
        },
      ],
    },
    twitter: {
      title: `${post.title} | Eswaran A`,
      description: post.excerpt,
      images: [post.image],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);
  const relatedPosts = blogPosts.filter((item) => item.slug !== slug).slice(0, 3);

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
                  src="/boy.jpg"
                  alt="Portrait of Eswaran A"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <p className="font-bold text-white">{post.author}</p>
                <p className="text-sm text-muted">{post.authorRole}</p>
              </div>
            </div>
          </header>

          <div className="relative mb-12 aspect-[2/1] overflow-hidden rounded-[28px] shadow-ambient">
            <Image src={post.image} alt={post.title} fill className="object-cover" />
          </div>

          <div className="space-y-8 text-lg leading-8 text-muted">
            <p className="first-letter:mr-3 first-letter:float-left first-letter:font-display first-letter:text-5xl first-letter:font-bold first-letter:text-primary">
              {post.content.intro}
            </p>
            {post.content.sections.map((section) => (
              <section key={section.heading} className="space-y-4">
                <h2 className="font-display text-3xl font-bold text-white">{section.heading}</h2>
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </section>
            ))}
          </div>
        </article>

        <aside className="space-y-10 lg:col-span-4">
          <div className="card p-8">
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary">About the Author</p>
            <h3 className="mt-4 font-display text-2xl font-bold text-white">{post.author}</h3>
            <p className="mt-2 text-sm text-muted">{post.authorRole}</p>
            <p className="mt-4 text-sm leading-7 text-muted">
              Eswaran writes about frontend architecture, product thinking, and the practical decisions that make modern web experiences feel reliable in production.
            </p>
            <Link
              href="/contact"
              className="mt-6 inline-flex rounded-xl bg-primary px-6 py-3 font-bold text-on-primary transition duration-200 hover:-translate-y-0.5"
            >
              Work With Me
            </Link>
          </div>

          <div>
            <h3 className="mb-6 flex items-center gap-2 font-display text-lg font-bold text-white">
              <span className="h-px w-8 bg-primary" />
              More Writing
            </h3>
            <div className="space-y-5">
              {relatedPosts.map((item) => (
                <Link key={item.slug} href={`/blog/${item.slug}`} className="flex gap-4 group">
                  <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-xl">
                    <Image src={item.image} alt={item.title} fill className="object-cover" />
                  </div>
                  <div>
                    <p className="text-sm font-bold leading-6 text-white transition group-hover:text-primary">{item.title}</p>
                    <p className="mt-1 text-xs text-muted">{item.readTime} • {item.category}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </PageShell>
  );
}
