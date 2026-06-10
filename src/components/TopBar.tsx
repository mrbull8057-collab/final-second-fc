"use client"

import Link from "next/link"

const tabs = [
  { href: "/", label: "Home", icon: "◉" },
  { href: "/schedule", label: "Schedule", icon: "◈" },
  { href: "/groups", label: "Groups", icon: "◆" },
  { href: "/venues", label: "Venues", icon: "◈" },
  { href: "/blogs", label: "Blog", icon: "◇" },
]

export default function TopBar() {
  return (
    <div className="sticky top-0 z-50 bg-[#0c0c0c]/90 backdrop-blur-md border-b border-zinc-800">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-12">
          <Link href="/" className="flex items-center gap-1.5 shrink-0">
            <span className="text-lg font-black tracking-tight text-white">FS</span>
            <span className="text-[11px] font-medium text-zinc-500 hidden sm:inline">Final Second FC</span>
          </Link>

          <div className="flex items-center gap-0.5 overflow-x-auto no-scrollbar">
            {tabs.map((tab) => (
              <Link
                key={tab.href}
                href={tab.href}
                className="flex items-center gap-1 px-2.5 py-1.5 text-xs text-zinc-500 hover:text-white hover:bg-zinc-900 rounded-lg transition-colors whitespace-nowrap"
              >
                {tab.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
