import Link from "next/link"
import type { BlogPost } from "@/data/blogs"

export default function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Link
      href={`/blog-posts/${post.slug}`}
      className="group block bg-zinc-900/50 rounded-xl overflow-hidden border border-zinc-800 hover:border-zinc-700 transition-all"
    >
      <div className="h-36 bg-gradient-to-br from-red-950/30 to-zinc-900 flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(225,29,72,0.1)_0%,_transparent_70%)]" />
        <span className="text-3xl relative z-10">⚽</span>
      </div>
      <div className="p-4">
        <h3 className="text-white font-semibold text-sm leading-snug mb-1.5 line-clamp-2 group-hover:text-red-400 transition-colors">
          {post.title}
        </h3>
        <p className="text-zinc-500 text-xs leading-relaxed mb-3 line-clamp-2">{post.excerpt}</p>
        <div className="flex items-center gap-2 text-[11px] text-zinc-600">
          <span>{post.date}</span>
          <span>·</span>
          <span>{post.readTime}</span>
        </div>
      </div>
    </Link>
  )
}
