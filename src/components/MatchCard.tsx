import Link from "next/link"
import type { Match } from "@/data/matches"
import { getTeam } from "@/data/groups"

export default function MatchCard({ match }: { match: Match }) {
  const home = getTeam(match.homeTeam)
  const away = getTeam(match.awayTeam)
  const matchDate = new Date(`${match.date}T${match.time}:00`)
  const dateStr = matchDate.toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric" })

  return (
    <Link
      href={`/team-matches/${match.slug}`}
      className="group block bg-zinc-900/70 rounded-xl p-4 border border-zinc-800 hover:border-red-900/50 transition-all hover:bg-zinc-900"
    >
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-2.5 min-w-0 flex-[2]">
          {home && (
            <img src={`https://flagcdn.com/w40/${home.flag}.png`} alt="" className="w-5 h-3.5 object-cover rounded shrink-0" loading="lazy" />
          )}
          <span className="text-zinc-200 font-medium text-sm truncate group-hover:text-white transition-colors">
            {match.homeTeam}
          </span>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <span className="text-[10px] text-zinc-600 font-mono">VS</span>
          <div className="flex items-center gap-1 bg-black/40 rounded-md px-2.5 py-1 border border-zinc-800">
            <span className="text-zinc-300 text-sm font-mono tabular-nums">
              {match.homeScore !== null ? match.homeScore : "-"}
            </span>
            <span className="text-zinc-700 text-xs">:</span>
            <span className="text-zinc-300 text-sm font-mono tabular-nums">
              {match.awayScore !== null ? match.awayScore : "-"}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2.5 min-w-0 flex-[2] justify-end">
          <span className="text-zinc-200 font-medium text-sm truncate group-hover:text-white transition-colors">
            {match.awayTeam}
          </span>
          {away && (
            <img src={`https://flagcdn.com/w40/${away.flag}.png`} alt="" className="w-5 h-3.5 object-cover rounded shrink-0" loading="lazy" />
          )}
        </div>
      </div>

      <div className="flex items-center gap-3 mt-2.5 text-[11px] text-zinc-600">
        <span className="flex items-center gap-1">
          <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          {dateStr}
        </span>
        <span>{match.time}</span>
        <span className="flex items-center gap-1 truncate">
          <svg className="w-3 h-3 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          {match.venueCity}
        </span>
      </div>
    </Link>
  )
}
