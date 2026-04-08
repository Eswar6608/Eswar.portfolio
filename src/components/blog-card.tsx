import Image from "next/image";
import Link from "next/link";
import type { Post } from "@/lib/site-data";

export function BlogCard({ post }: { post: Post }) {
  return (
    <article className="card group overflow-hidden hover:shadow-[0_30px_80px_rgba(96,99,238,0.14)]">
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover grayscale transition duration-500 group-hover:scale-105 group-hover:grayscale-0"
        />
        <div className="absolute left-4 top-4 rounded-full bg-primary px-3 py-1 text-[10px] font-bold uppercase tracking-[0.24em] text-on-primary">
          {post.category}
        </div>
      </div>
      <div className="space-y-4 p-5 sm:p-8">
        <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-primary">
          {post.date}
        </p>
        <h3 className="font-display text-lg font-bold leading-tight text-white transition-colors group-hover:text-primary sm:text-xl">
          {post.title}
        </h3>
        <p className="text-sm leading-7 text-muted">{post.excerpt}</p>
        <Link href={`/blog/${post.slug}`} className="inline-flex text-sm font-bold text-primary transition duration-200 hover:translate-x-1">
          Read more
        </Link>
      </div>
    </article>
  );
}
