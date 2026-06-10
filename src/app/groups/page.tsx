import Link from "next/link"
import { groups, getTeamsByGroup } from "@/data/groups"
import GroupStandings from "@/components/GroupStandings"

export default function GroupsPage() {
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
                <Link key={l.href} href={l.href} className={`px-3 py-1.5 text-xs rounded-lg transition-all ${l.href === "/groups" ? "text-white bg-zinc-900" : "text-zinc-500 hover:text-white hover:bg-zinc-900"}`}>{l.label}</Link>
              ))}
            </div>
          </div>
        </div>
      </nav>
      <main className="flex-1 max-w-6xl mx-auto px-4 sm:px-6 py-8 w-full">
        <h1 className="text-lg font-bold text-white mb-5">Groups</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {groups.map((g) => (
            <GroupStandings key={g.id} groupId={g.id} teams={getTeamsByGroup(g.id)} />
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
