"use client"

import Link from "next/link"
import { useState } from "react"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/schedule", label: "Schedule" },
  { href: "/groups", label: "Groups" },
  { href: "/venues", label: "Venues" },
  { href: "/blogs", label: "Blogs" },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-[#0a0a0a]/80 backdrop-blur-lg border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-red-500 to-rose-600 flex items-center justify-center">
              <span className="text-xs font-black text-white tracking-tight">FS</span>
            </div>
            <div>
              <span className="font-bold text-sm text-white">Final Second</span>
              <span className="font-bold text-sm text-red-500 ml-1">FC</span>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-sm text-zinc-400 hover:text-white hover:bg-zinc-800/60 rounded-lg transition-all"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 text-zinc-400 hover:text-white"
            aria-label="Menu"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="block px-3 py-2 text-sm text-zinc-400 hover:text-white hover:bg-zinc-800/60 rounded-lg transition-all"
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}
