import { notFound } from "next/navigation"
import Link from "next/link"
import { blogPosts } from "@/data/blogs"

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = blogPosts.find((p) => p.slug === slug)
  if (!post) notFound()

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/schedule", label: "Schedule" },
    { href: "/groups", label: "Groups" },
    { href: "/venues", label: "Venues" },
    { href: "/blogs", label: "Blog" },
  ]

  return (
    <div className="min-h-screen flex flex-col bg-[#080808]">
      <nav className="sticky top-0 z-50 bg-[#080808]/90 backdrop-blur-lg border-b border-zinc-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-14">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-red-600 to-rose-700 flex items-center justify-center shadow-lg shadow-red-600/20"><span className="text-xs font-black text-white">FS</span></div>
              <span className="text-sm font-bold text-white">Final Second <span className="text-red-500">FC</span></span>
            </Link>
            <div className="flex items-center gap-1">
              {navLinks.map((l) => (<Link key={l.href} href={l.href} className="px-3 py-1.5 text-xs text-zinc-500 hover:text-white hover:bg-zinc-900 rounded-lg transition-all">{l.label}</Link>))}
            </div>
          </div>
        </div>
      </nav>
      <main className="flex-1 max-w-3xl mx-auto px-4 sm:px-6 py-8 w-full">
        <Link href="/blogs" className="text-xs text-red-400 hover:text-red-300 mb-3 inline-block">← Back to Blog</Link>
        <h1 className="text-base sm:text-lg font-bold text-white mb-2 leading-snug">{post.title}</h1>
        <div className="text-xs text-zinc-600 mb-5">{post.date} · {post.readTime}</div>
        <div className="text-sm text-zinc-400 leading-relaxed space-y-4">
          {post.content.split("\n\n").map((p, i) => <p key={i}>{p}</p>)}
        </div>
      </main>
      <footer className="border-t border-zinc-800 mt-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 flex items-center justify-between text-[11px] text-zinc-700">
          <span>© 2026 Final Second FC</span>
          <span>World Cup 2026</span>
        </div>
      </footer>
    </div>
  )
}
