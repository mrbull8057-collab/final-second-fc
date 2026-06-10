import Link from "next/link"

const sections = [
  {
    title: "Pages",
    links: [
      { href: "/", label: "Home" },
      { href: "/schedule", label: "Schedule" },
      { href: "/groups", label: "Groups" },
      { href: "/venues", label: "Venues" },
      { href: "/blogs", label: "Blogs" },
    ],
  },
  {
    title: "Info",
    links: [
      { href: "/about", label: "About" },
      { href: "/contact", label: "Contact" },
      { href: "/privacy", label: "Privacy" },
      { href: "/terms", label: "Terms" },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 bg-[#0a0a0a] mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-red-500 to-rose-600 flex items-center justify-center">
                <span className="text-xs font-black text-white">FS</span>
              </div>
              <span className="font-bold text-sm text-white">Final Second FC</span>
            </Link>
            <p className="text-xs text-zinc-500 leading-relaxed max-w-xs">
              Your World Cup 2026 destination. Every match, every moment, every story.
            </p>
          </div>

          {sections.map((section) => (
            <div key={section.title}>
              <h4 className="text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-3">
                {section.title}
              </h4>
              <ul className="space-y-1.5">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-zinc-600 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-zinc-800/60 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-zinc-600">© 2026 Final Second FC. All rights reserved.</p>
          <div className="flex items-center gap-2 text-xs text-zinc-600">
            <span>Made with ⚽ for the beautiful game</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
