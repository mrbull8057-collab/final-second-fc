"use client"

import { useState, useMemo } from "react"
import Link from "next/link"
import { getTeam } from "@/data/groups"
import { matches } from "@/data/matches"

const groupOptions = ["", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L"]
const stageOptions = ["All Stages", "Group Stage", "Round of 32", "Round of 16", "Quarter-final", "Semi-final", "Third Place", "Final"]

export default function SchedulePage() {
  const [group, setGroup] = useState("")
  const [stage, setStage] = useState("All Stages")
  const [past, setPast] = useState(false)

  const today = new Date()

  const filtered = useMemo(() => {
    return matches.filter((m) => {
      const md = new Date(`${m.date}T${m.time}:00`)
      if (past !== (md < today)) return false
      if (group && m.group !== group) return false
      if (stage !== "All Stages" && m.stage !== stage) return false
      return true
    })
  }, [group, stage, past])

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
              {[{ href: "/", label: "Home" }, { href: "/schedule", label: "Schedule" }, { href: "/groups", label: "Groups" }, { href: "/venues", label: "Venues" }, { href: "/blogs", label: "Blog" }].map((l) => (
                <Link key={l.href} href={l.href} className={`px-3 py-1.5 text-xs rounded-lg transition-all ${l.href === "/schedule" ? "text-white bg-zinc-900" : "text-zinc-500 hover:text-white hover:bg-zinc-900"}`}>{l.label}</Link>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <main className="flex-1 max-w-6xl mx-auto px-4 sm:px-6 py-8 w-full">
        <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
          <h1 className="text-lg font-bold text-white">Schedule</h1>
          <div className="flex items-center gap-2">
            <select value={group} onChange={(e) => setGroup(e.target.value)} className="bg-zinc-900 border border-zinc-800 rounded-lg px-3 py-1.5 text-xs text-zinc-300 focus:outline-none">
              <option value="">All Groups</option>
              {groupOptions.filter(Boolean).map((g) => <option key={g} value={g}>Group {g}</option>)}
            </select>
            <select value={stage} onChange={(e) => setStage(e.target.value)} className="bg-zinc-900 border border-zinc-800 rounded-lg px-3 py-1.5 text-xs text-zinc-300 focus:outline-none">
              {stageOptions.map((s) => <option key={s}>{s}</option>)}
            </select>
            <button onClick={() => setPast(!past)} className={`text-xs px-3 py-1.5 rounded-lg font-medium transition-all ${past ? "bg-red-600 text-white shadow-lg shadow-red-600/20" : "bg-zinc-900 border border-zinc-800 text-zinc-400 hover:bg-zinc-800"}`}>
              {past ? "Past" : "Upcoming"}
            </button>
          </div>
        </div>

        {filtered.length === 0 ? (
          <p className="text-sm text-zinc-700 text-center py-16">No matches found.</p>
        ) : (
          <div className="space-y-2">
            {filtered.map((m) => {
              const home = getTeam(m.homeTeam)
              const away = getTeam(m.awayTeam)
              const md = new Date(`${m.date}T${m.time}:00`)
              const ds = md.toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric" })
              return (
                <Link key={m.id} href={`/team-matches/${m.slug}`} className="flex items-center gap-3 bg-zinc-900/40 border border-zinc-800 rounded-xl px-4 py-3 hover:border-zinc-700 hover:bg-zinc-900 transition-all">
                  <div className="flex items-center gap-2.5 flex-[2] min-w-0">
                    {home && <img src={`https://flagcdn.com/w40/${home.flag}.png`} alt="" className="w-5 h-3.5 object-cover rounded shrink-0" />}
                    <span className="text-sm text-zinc-200 font-medium truncate">{m.homeTeam}</span>
                  </div>
                  <div className="flex items-center gap-1.5 shrink-0">
                    <span className="text-xs text-zinc-500 font-mono">{m.homeScore ?? "-"}</span>
                    <span className="text-[10px] text-zinc-700">:</span>
                    <span className="text-xs text-zinc-500 font-mono">{m.awayScore ?? "-"}</span>
                  </div>
                  <div className="flex items-center gap-2.5 flex-[2] min-w-0 justify-end">
                    <span className="text-sm text-zinc-200 font-medium truncate">{m.awayTeam}</span>
                    {away && <img src={`https://flagcdn.com/w40/${away.flag}.png`} alt="" className="w-5 h-3.5 object-cover rounded shrink-0" />}
                  </div>
                  <div className="hidden sm:flex items-center gap-3 text-xs text-zinc-600 shrink-0 ml-2">
                    <span>{ds}</span>
                    <span>{m.time}</span>
                    <span className="text-[10px] text-zinc-700 font-mono">{m.group}</span>
                  </div>
                </Link>
              )
            })}
          </div>
        )}
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
