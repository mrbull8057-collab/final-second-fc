import { notFound } from "next/navigation"
import Link from "next/link"
import { getMatchBySlug, getTeamMatches } from "@/data/matches"
import { getTeam } from "@/data/groups"

export default async function MatchDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const match = getMatchBySlug(slug)
  if (!match) notFound()

  const home = getTeam(match.homeTeam)
  const away = getTeam(match.awayTeam)
  const md = new Date(`${match.date}T${match.time}:00`)
  const ds = md.toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric", year: "numeric" })

  const homeMatches = getTeamMatches(match.homeTeam).filter((m) => m.id !== match.id)
  const awayMatches = getTeamMatches(match.awayTeam).filter((m) => m.id !== match.id)

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

      <main className="flex-1 max-w-4xl mx-auto px-4 sm:px-6 py-8 w-full">
        <Link href="/schedule" className="text-xs text-red-400 hover:text-red-300 mb-3 inline-block">← Back to Schedule</Link>

        <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-5 sm:p-8 mb-6">
          <div className="text-center mb-3">
            <span className="text-[11px] text-zinc-600 uppercase tracking-wider bg-zinc-900 px-3 py-1 rounded-full border border-zinc-800">{match.stage} · Group {match.group}</span>
          </div>
          <div className="flex items-center justify-center gap-4 sm:gap-10">
            <div className="flex flex-col items-center gap-2 min-w-0 w-28 sm:w-36">
              {home && <img src={`https://flagcdn.com/w80/${home.flag}.png`} alt="" className="w-10 h-7 sm:w-14 sm:h-10 object-cover rounded-md" />}
              <span className="text-sm sm:text-base font-bold text-white text-center">{match.homeTeam}</span>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <span className="text-2xl sm:text-4xl font-black text-white">{match.homeScore ?? "-"}</span>
              <span className="text-zinc-700 text-lg sm:text-2xl font-bold">:</span>
              <span className="text-2xl sm:text-4xl font-black text-white">{match.awayScore ?? "-"}</span>
            </div>
            <div className="flex flex-col items-center gap-2 min-w-0 w-28 sm:w-36">
              {away && <img src={`https://flagcdn.com/w80/${away.flag}.png`} alt="" className="w-10 h-7 sm:w-14 sm:h-10 object-cover rounded-md" />}
              <span className="text-sm sm:text-base font-bold text-white text-center">{match.awayTeam}</span>
            </div>
          </div>
          <div className="text-center mt-4 text-xs text-zinc-600 space-y-0.5">
            <p>{ds}</p>
            <p>Kick-off: {match.time} · {match.venue}, {match.venueCity}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {homeMatches.length > 0 && (
            <div>
              <p className="text-xs text-zinc-600 uppercase tracking-wider mb-2">{match.homeTeam} — Other Matches</p>
              <div className="space-y-1.5">
                {homeMatches.slice(0, 3).map((m) => {
                  const h = getTeam(m.homeTeam)
                  const a = getTeam(m.awayTeam)
                  return (
                    <Link key={m.id} href={`/team-matches/${m.slug}`} className="flex items-center gap-2 bg-zinc-900/40 border border-zinc-800 rounded-lg px-3 py-2 hover:bg-zinc-900 transition-all text-xs">
                      {h && <img src={`https://flagcdn.com/w20/${h.flag}.png`} alt="" className="w-3.5 h-2.5 object-cover rounded shrink-0" />}
                      <span className="text-zinc-300 truncate">{m.homeTeam}</span>
                      <span className="text-zinc-600">v</span>
                      <span className="text-zinc-300 truncate">{m.awayTeam}</span>
                      {a && <img src={`https://flagcdn.com/w20/${a.flag}.png`} alt="" className="w-3.5 h-2.5 object-cover rounded shrink-0" />}
                    </Link>
                  )
                })}
              </div>
            </div>
          )}
          {awayMatches.length > 0 && (
            <div>
              <p className="text-xs text-zinc-600 uppercase tracking-wider mb-2">{match.awayTeam} — Other Matches</p>
              <div className="space-y-1.5">
                {awayMatches.slice(0, 3).map((m) => {
                  const h = getTeam(m.homeTeam)
                  const a = getTeam(m.awayTeam)
                  return (
                    <Link key={m.id} href={`/team-matches/${m.slug}`} className="flex items-center gap-2 bg-zinc-900/40 border border-zinc-800 rounded-lg px-3 py-2 hover:bg-zinc-900 transition-all text-xs">
                      {h && <img src={`https://flagcdn.com/w20/${h.flag}.png`} alt="" className="w-3.5 h-2.5 object-cover rounded shrink-0" />}
                      <span className="text-zinc-300 truncate">{m.homeTeam}</span>
                      <span className="text-zinc-600">v</span>
                      <span className="text-zinc-300 truncate">{m.awayTeam}</span>
                      {a && <img src={`https://flagcdn.com/w20/${a.flag}.png`} alt="" className="w-3.5 h-2.5 object-cover rounded shrink-0" />}
                    </Link>
                  )
                })}
              </div>
            </div>
          )}
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
