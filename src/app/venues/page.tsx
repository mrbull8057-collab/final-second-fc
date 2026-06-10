import Link from "next/link"
import { venues } from "@/data/venues"

export default function VenuesPage() {
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
                <Link key={l.href} href={l.href} className={`px-3 py-1.5 text-xs rounded-lg transition-all ${l.href === "/venues" ? "text-white bg-zinc-900" : "text-zinc-500 hover:text-white hover:bg-zinc-900"}`}>{l.label}</Link>
              ))}
            </div>
          </div>
        </div>
      </nav>
      <main className="flex-1 max-w-6xl mx-auto px-4 sm:px-6 py-8 w-full">
        <h1 className="text-lg font-bold text-white mb-5">Venues</h1>
        {(["USA", "Mexico", "Canada"] as const).map((country) => {
          const cv = venues.filter((v) => v.country === country)
          const fc = country === "USA" ? "us" : country === "Mexico" ? "mx" : "ca"
          return (
            <div key={country} className="mb-7">
              <div className="flex items-center gap-2 mb-3">
                <img src={`https://flagcdn.com/w20/${fc}.png`} alt="" className="w-4 h-3 object-cover rounded" />
                <h2 className="text-sm font-semibold text-zinc-200">{country}</h2>
                <span className="text-xs text-zinc-700">({cv.length})</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {cv.map((v) => (
                  <div key={v.id} className="bg-zinc-900/30 border border-zinc-800 rounded-xl p-4 hover:border-zinc-700 transition-all">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg bg-zinc-800 flex items-center justify-center shrink-0 text-base">🏟</div>
                      <div className="min-w-0">
                        <h3 className="text-sm text-zinc-200 font-medium">{v.name}</h3>
                        <p className="text-xs text-zinc-600">{v.city}</p>
                        <p className="text-xs text-zinc-700 mt-1">{v.capacity.toLocaleString()} seats · Est. {v.opened}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )
        })}
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
