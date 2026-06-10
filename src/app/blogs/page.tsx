import Link from "next/link"
import { blogPosts } from "@/data/blogs"

export default function BlogsPage() {
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
              <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-red-600 to-rose-700 flex items-center justify-center shadow-lg shadow-red-600/20">
                <span className="text-xs font-black text-white">FS</span>
              </div>
              <span className="text-sm font-bold text-white">Final Second <span className="text-red-500">FC</span></span>
            </Link>
            <div className="flex items-center gap-1">
              {navLinks.map((l) => (
                <Link key={l.href} href={l.href} className={`px-3 py-1.5 text-xs rounded-lg transition-all ${l.href === "/blogs" ? "text-white bg-zinc-900" : "text-zinc-500 hover:text-white hover:bg-zinc-900"}`}>{l.label}</Link>
              ))}
            </div>
          </div>
        </div>
      </nav>
      <main className="flex-1 max-w-6xl mx-auto px-4 sm:px-6 py-8 w-full">
        <h1 className="text-lg font-bold text-white mb-5">Blog</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {blogPosts.map((post) => (
            <Link key={post.slug} href={`/blog-posts/${post.slug}`} className="bg-zinc-900/40 border border-zinc-800 rounded-xl p-4 hover:border-zinc-700 transition-all">
              <h2 className="text-sm text-white font-semibold leading-snug mb-1 line-clamp-2">{post.title}</h2>
              <p className="text-xs text-zinc-500 line-clamp-2 mb-2">{post.excerpt}</p>
              <div className="flex items-center gap-2 text-[11px] text-zinc-700">
                <span>{post.date}</span>
                <span>·</span>
                <span>{post.readTime}</span>
              </div>
            </Link>
          ))}
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
